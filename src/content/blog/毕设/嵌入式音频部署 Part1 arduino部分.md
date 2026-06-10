---
title: 嵌入式音频部署 Part1 arduino部分
description: 主要是将Arduino部分的代码进行解析
pubDate: 2026-04-14
updatedDate: 2026-04-14
slug: embedded-audio-deployment-part1-arduino-esp32
tags:
  - 深度学习
  - 信号处理
  - 音频处理
  - 嵌入式
  - TinyML
  - C语言
category: 毕设
draft: false
---

## 概述

通过将音频模型在 Colab 上经过训练，量化之后，会得到一个包含模型权重的字符数组（通常保存在 `model.h` 中）。这也就是我们的模型，通过烧录到 `Arduino` (基于 ESP32 芯片) 中实现硬件端的边缘部署。

音频分类不仅是把数据喂给模型那么简单，它更像是一条流水线。从硬件麦克风采集、时域信号整理、频域特征提取，再到模型推理和结果的后处理，每一步都环环相扣。本文将结合代码，详细解析这条流水线是如何工作的。

### 整体流程说明

1. **声音采集**：ESP32 通过 `I2S` 协议使用 `INMP441` 麦克风持续采样，在内存中维护一个 1 秒长的滑动音频窗口。
2. **特征提取**：每次收到 0.5 秒的新音频后，对整段 1 秒的窗口做一次 Log-Mel 频谱特征提取（这是最耗费 CPU 的传统 DSP 过程）。
3. **数据对齐**：提取后的特征按照训练阶段的方式做标准化（Mean-Variance Normalization），确保板端输入分布与 Python 训练时一致，然后送入 TensorFlow Lite Micro 模型。
4. **决策输出**：输出结果经过指数滑动平均（EMA）平滑，并结合置信度与分类间隔双重阈值判断，最大限度减少偶发噪声的误判。

---

## 1. 声音采集

要让 ESP32 “听”到声音，我们使用了 I2S（Inter-IC Sound）总线。这是一种专为数字音频设备设计的串行总线。

### 初始化 I2S 麦克风

```cpp
void setupMicrophone() {
  i2s_config_t i2s_config = {
    .mode = (i2s_mode_t)(I2S_MODE_MASTER | I2S_MODE_RX), // 配置为主机接收模式
    .sample_rate = SAMPLE_RATE, // SAMPLE_RATE = 16000 ，采样定理：16 kHz 可表示最高 8 kHz 的信号，足够覆盖大多数人声和环境音。
    .bits_per_sample = MIC_BITS_PER_SAMPLE, // 使用32位槽位读取
    .channel_format = I2S_CHANNEL_FMT_ONLY_LEFT, // 仅读取左声道
    .communication_format = I2S_COMM_FORMAT_STAND_I2S,
    .intr_alloc_flags = ESP_INTR_FLAG_LEVEL1,
    .dma_buf_count = 8,
    .dma_buf_len = 1024, // DMA 缓冲区长度
    .use_apll = false
  };

  i2s_pin_config_t pin_config = {
    .bck_io_num = I2S_SCLK_PIN,
    .ws_io_num = I2S_LRCK_PIN,
    .data_out_num = I2S_PIN_NO_CHANGE,
    .data_in_num = I2S_SDIN_PIN
  };

  // 安装驱动并启动 I2S
  i2s_driver_install(I2S_PORT, &i2s_config, 0, nullptr);
  i2s_set_pin(I2S_PORT, &pin_config);
  i2s_zero_dma_buffer(I2S_PORT);
  i2s_start(I2S_PORT);
}
```

### 非阻塞的数据读取机制

在单片机中，最忌讳的就是死等（Blocking）。如果我们一次性阻塞等待 0.5 秒的音频收完，这段时间内 ESP32 什么都干不了。因此，代码中实现了一个**非阻塞读取**机制：

```cpp
// 非阻塞读取：
// 每次 loop() 只尝试把当前 DMA 准备好的数据补进 captureBuffer。
// 收满一个滑动步长（0.5秒）的数据后才返回 true，触发后续的推理。
bool readNonBlockingI2S(int32_t* buffer, size_t buffer_size, size_t* bytesRead) {
  size_t bytesReadNow = 0;
  if (*bytesRead < buffer_size) {
    esp_err_t err = i2s_read(
      I2S_PORT,
      static_cast<void*>(buffer + *bytesRead / sizeof(int32_t)),
      buffer_size - *bytesRead,
      &bytesReadNow,
      0 // 0 延迟，能读多少读多少，读不到直接返回
    );
    if (err != ESP_OK) return false;
    
    *bytesRead += bytesReadNow;
    if (*bytesRead >= buffer_size) {
      *bytesRead = 0; // 缓冲区满了，重置计数器
      return true;    // 告诉主循环可以进入下一步了
    }
    return false;
  }
  return true;
}
```

### 滑动窗口设计
当成功读取到 0.5 秒新数据后，我们并非只对这 0.5 秒推理，而是采用**滑动窗口（Sliding Window）**。我们保留上一次的后 0.5 秒，加上最新的 0.5 秒，拼成完整的 1 秒。这能有效防止某个重要的声音特征正好被切断在两段音频中间。
```cpp
// 丢弃最旧的 0.5 秒，把剩余数据往前挪
memmove(audioWindow, audioWindow + SLIDE_SAMPLES, (NUM_SAMPLES - SLIDE_SAMPLES) * sizeof(int32_t));
// 把最新采集的 0.5 秒拼到尾部
memcpy(audioWindow + (NUM_SAMPLES - SLIDE_SAMPLES), captureBuffer, SLIDE_SAMPLES * sizeof(int32_t));
```

---

## 2. 信号预处理

拿到的 I2S 原始数据是整数，而且可能存在直流偏置（硬件原因导致波形不以 0 为中心）。在进入傅里叶变换之前，必须清理数据。

### 位移与浮点归一化
INMP441 麦克风输出的是 **24-bit** PCM 数据，但 ESP32 的 I2S 外设是按 **32-bit** 槽位读取的（数据左对齐或右端补零），所以我们需要通过右移将其还原，并转换为 $[-1.0, 1.0]$ 的浮点数：
```cpp
float convertMicSampleToFloat(int32_t sample) {
  int32_t pcm24 = sample >> MIC_RIGHT_SHIFT; // 剔除无效位
  return static_cast<float>(pcm24) / MIC_FULL_SCALE_24BIT; // 归一化
}
```

### 去除直流偏置与静音检测
在这个阶段，我们顺便计算信号的均值（Mean）和能量（RMS）。
* **减去均值**：消除直流分量。
* **RMS 静音阈值**：如果环境太安静（计算出的 RMS 小于 `SILENCE_RMS_THRESHOLD`），直接跳过后续昂贵的 FFT 和神经网络计算，大大降低设备功耗。

```cpp
// 1. 求均值
const float mean = sum / NUM_SAMPLES;
// 2. 去均值，补偿增益，求能量
for (int i = 0; i < NUM_SAMPLES; ++i) {
  signalBuffer[i] = (signalBuffer[i] - mean) * INPUT_GAIN;
  energy += signalBuffer[i] * signalBuffer[i];
}
// 3. RMS 判断静音
const float rms = sqrtf(energy / NUM_SAMPLES);
if (rms < SILENCE_RMS_THRESHOLD) {
  resetSmoothedScores(); // 静音时清空之前的分类状态
  return;
}
```

---

## 3. 频谱分析 (FFT + Mel)

时域（时间轴上的波形）很难看出声音的特征，我们需要将其转换为频域（频率轴上的能量）。这一步为了贴合 Python 训练时使用的 `librosa` 等库，采用了 **Log-Mel 频谱** 提取方案。

### 分帧与加窗
将 1 秒的音频切分成 20 帧（`NUM_MEL_FRAMES`）。由于强行截断会导致频谱边缘出现“泄漏”（高频噪声），在做快速傅里叶变换（FFT）之前，需要给每帧乘上一个汉明窗（Hamming Window），让波形两端平滑过渡到 0。
```cpp
// 截取当前帧数据，长度不够用 0 填充
for (int i = 0; i < FFT_SIZE; i++) {
  vReal[i] = (startIdx + i < NUM_SAMPLES) ? audioData[startIdx + i] : 0.0f;
  vImag[i] = 0.0f; // 虚部清零
}
FFT.windowing(FFT_WIN_TYP_HAMMING, FFT_FORWARD); // 加窗
FFT.compute(FFT_FORWARD); // FFT 变换
FFT.complexToMagnitude(); // 将复数结果转为能量幅值
```

### Mel 滤波器组与取对数
人耳对低频更敏感，对高频不敏感（例如你能分辨 100Hz 和 200Hz，但很难分辨 10100Hz 和 10200Hz）。**Mel 滤波器组**就是一堆在低频密集、高频稀疏的三角滤波器。我们将 FFT 出来的线性频谱乘上预先计算好的滤波器系数矩阵 `melFilterCoeffs`，就能得到符合人耳听觉的特征。
随后对结果加上一个极小值防止 `log(0)`，并取自然对数。
```cpp
applyMelFilterBank(vReal, melEnergyBuffer);
for (int mel = 0; mel < NUM_MEL_FILTERS; mel++) {
  float raw_log_mel = logf(melEnergyBuffer[mel] + 1e-9f);
  featureBuffer[frame][mel] = raw_log_mel;
}
```

### Z-Score 标准化
为了加快模型的收敛，我们在训练阶段通常会让输入特征均值为 0、方差为 1。因此在板端同样要对得到的特征矩阵求整体均值和标准差，将结果 `(x - mean) / stdDev` 直接扁平化写入 TFLite 的输入张量 `input->data.f` 中。

---

## 4. AI 神经推理

当特征准备就绪，神经网络登场。ESP32 的内部 SRAM 非常珍贵，而运行模型往往需要较大的内存池（Tensor Arena）存放算子中间结果。

因此，代码中强制将 Tensor Arena 分配在 **PSRAM（外部伪静态随机存储器）** 中：
```cpp
// tensor arena 放到 PSRAM，给模型中间张量使用
tensor_arena = static_cast<uint8_t*>(heap_caps_malloc(tensor_arena_size, MALLOC_CAP_SPIRAM));
```

初始化解释器（Interpreter）并检查输入维度。**`validateInputTensorShape()` 函数非常关键**，它能防止你更换模型后，C++ 板端的数组大小与新模型不匹配而导致内存越界或 silently wrong（错得神不知鬼不觉）。

推理执行其实就是一行代码：
```cpp
if (interpreter->Invoke() != kTfLiteOk) {
  Serial.println("Invoke() failed.");
  return;
}
// 推理结束后，结果存放在 output->data.f 数组中
```

---

## 5. 结果平滑与决策

在实际环境中，声音夹杂着各种噪声，模型输出的概率可能会像过山车一样乱跳（例如连续几帧的预测是：猫->狗->猫->猫）。如果直接把最高概率输出，用户体验会极差。

### 指数滑动平均 (EMA)
我们将本次推理的结果（`currentScores`）与过去的历史结果（`smoothedScores`）进行加权融合：
```cpp
for (int i = 0; i < NUM_CLASSES; i++) {
  smoothedScores[i] =
    (SMOOTHING_ALPHA * smoothedScores[i]) +
    ((1.0f - SMOOTHING_ALPHA) * currentScores[i]);
}
```
`SMOOTHING_ALPHA` 设置为 0.65，意味着历史预测占 65% 的权重，新预测占 35%。这相当于给预测结果加了一个“阻尼器”，只有某种声音持续出现，对应的得分才会稳步上升。

### 双重验证策略：置信度 + 间隔
很多时候，模型排名前两位的分数可能很接近（比如背景噪音很重时，某个类别得分 55%，另一个得分 50%）。如果仅凭最高分判断，很容易误报。代码中引入了两个阈值：
1. `PREDICTION_THRESHOLD` (0.60)：最高得分必须大于 60%。
2. `PREDICTION_MARGIN` (0.12)：第一名得分必须比第二名高出至少 12%。

```cpp
if (top1Score > PREDICTION_THRESHOLD && (top1Score - top2Score) > PREDICTION_MARGIN) {
  // 达到双重标准，确信预测成功
  Serial.printf("predict=%s ...\n", CLASS_NAMES[top1Index]);
} else {
  // 模棱两可，宁可不输出也不误报
  Serial.printf("uncertain ...\n");
}
```

## 总结

这就是在单片机上实现 AI 音频分类的完整过程：**非阻塞采集 -> 提纯降噪 -> 离散傅里叶与 Mel 频仿生提取 -> AI 矩阵乘加推理 -> 算法抗抖动过滤**。
每一行代码和参数的设计，都是在有限的算力、内存与复杂的物理环境之间寻找完美的平衡点。


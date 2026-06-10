---
title: "信号与系统-CH6.1-FIR滤波器的频率响应"
slug: "信号与系统-CH6.1-FIR滤波器的频率响应"
description: "信号与系统-CH6.1-FIR滤波器的频率响应，待补充摘要。"
pubDate: 2026-05-22
updatedDate: 2026-05-22
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

【【公开课】 信號與系統 - 臺灣科技大學 - 黃騰毅教授】 https://www.bilibili.com/video/BV1PE411X7b8/?p=13&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5



# FIR 滤波器频率响应与 LTI 系统时域-频域对应关系

## 一、 FIR 滤波器的频率响应 (Frequency Response)

### 1.1 物理概念与核心定义

对于一个 **线性时不变系统 (LTI System)**：

- 当输入一个特定频率的正弦/余弦信号（或复指数信号）时，输出也必然是一个**相同频率**的信号。

> 这说明复指数信号是信号与系统中的 基本信号

- LTI 系统对输入正弦信号的影响仅体现在**振幅（Amplitude）和相位（Phase）**的改变上，而 **角频率$ \hat{\omega}$ **绝不会发生改变。

$$x[n] \xrightarrow{\quad \text{LTI Filter} \quad} y[n]$$

若输入信号与输出信号分别用复数振幅的形式表示：

- 输入信号：$x[n] = A_1 e^{j \phi_1} e^{j \hat{\omega}_1 n} = X_1 e^{j \hat{\omega}_1 n}$，其中复数振幅为 $X_1 = A_1 e^{j \phi_1}$
- 输出信号：$y[n] = A_2 e^{j \phi_2} e^{j \hat{\omega}_1 n} = X_2 e^{j \hat{\omega}_1 n}$，其中复数振幅为 $X_2 = A_2 e^{j \phi_2}$

从复振幅 $X_1 \to X_2$ 的变换过程即代表了系统在频率 $\hat{\omega}_1$ 处的响应，这种对不同输入频率具有不同复放大倍率的特性，被称为**频率响应 (Frequency Response)**。

### 1.2 频率响应的数学推导

根据 LTI 系统的时域卷积和公式：

$$y[n] = \sum_{k=-\infty}^{+\infty} h[k] x[n-k]$$

假设输入信号为复指数信号 $x[n] = A e^{j \phi} e^{j \hat{\omega} n}$，代入上式得：

$$\begin{aligned} y[n] &= \sum_{k=-\infty}^{+\infty} h[k] \cdot A e^{j \phi} e^{j \hat{\omega} (n-k)} \\ &= \sum_{k=-\infty}^{+\infty} h[k] \cdot A e^{j \phi} e^{j \hat{\omega} n} e^{-j \hat{\omega} k} \end{aligned}$$

注意到求和是关于 $k$ 的，与 $n$ 无关。因此，可以将不含 $k$ 的输入信号项 $x[n] = A e^{j \phi} e^{j \hat{\omega} n}$ 提取至求和号外部：

$$y[n] = \underbrace{\left( A e^{j \phi} e^{j \hat{\omega} n} \right)}_{\text{原输入信号 } x[n]} \cdot \underbrace{\left( \sum_{k=-\infty}^{+\infty} h[k] e^{-j \hat{\omega} k} \right)}_{\text{复放大系数 }}$$

因此，可以写为：

$$y[n] = x[n] \cdot H(e^{j \hat{\omega}})$$

其中，**频率响应** $H(e^{j \hat{\omega}})$ 定义为单位脉冲响应 $h[n]$ 的**离散时间傅里叶变换（DTFT）**：

$$H(e^{j \hat{\omega}}) = \sum_{k=-\infty}^{+\infty} h[k] e^{-j \hat{\omega} k}$$

> **总结：** 当输入为复指数信号时，输出等于输入本身乘以系统在该频率处的频率响应 $H(e^{j \hat{\omega}})$。

## 二、 典型 FIR 滤波器频率响应实例分析

### 2.1 频率响应计算

**【例题】** 设有一个三点对称系数的 FIR 滤波器，其参数为 $b_k = \{1, 2, 1\}$，对应的单位脉冲响应为：

$$h[0] = 1, \quad h[1] = 2, \quad h[2] = 1$$

求该系统的频率响应 $H(e^{j \hat{\omega}})$。

**【解】** 将 $h[n]$ 带入频率响应定义公式：

$$\begin{aligned} H(e^{j \hat{\omega}}) &= h[0]e^{-j\hat{\omega}\cdot 0} + h[1]e^{-j\hat{\omega}\cdot 1} + h[2]e^{-j\hat{\omega}\cdot 2} \\ &= 1 + 2e^{-j\hat{\omega}} + e^{-j 2\hat{\omega}} \end{aligned}$$

为了将其转换为便于分析的幅度与相位形式（极坐标形式），提取中心对称点 $e^{-j\hat{\omega}}$：

$$\begin{aligned} H(e^{j \hat{\omega}}) &= e^{-j\hat{\omega}} \left( e^{j\hat{\omega}} + 2 + e^{-j\hat{\omega}} \right) \\ &= e^{-j\hat{\omega}} \left( 2 + \left(e^{j\hat{\omega}} + e^{-j\hat{\omega}}\right) \right) \end{aligned}$$

根据欧拉公式 $\cos\hat{\omega} = \frac{e^{j\hat{\omega}} + e^{-j\hat{\omega}}}{2}$，上式可化简为：

$$H(e^{j \hat{\omega}}) = (2 + 2\cos\hat{\omega}) e^{-j\hat{\omega}}$$

### 2.2 幅频响应与相频响应

因为对于所有的数字频率 $\hat{\omega}$，$(2 + 2\cos\hat{\omega}) \ge 0$ 恒成立，所以：

1. **幅频响应 (Magnitude Response)：** $$|H(e^{j \hat{\omega}})| = 2 + 2\cos\hat{\omega}$$
2. **相频响应 (Phase Response)：** $$ \angle H(e^{j \hat{\omega}}) = -\hat{\omega}$$

### 2.3 幅度与相位响应曲线绘制

在数信号处理中，我们主要关注区间 $\hat{\omega} \in [-\pi, \pi]$ 的频率响应特征。

#### 1. 幅频响应特征点计算：

- $\hat{\omega} = 0$ 时：$|H(e^{j0})| = 2 + 2\cos(0) = 4$ （直流分量放大 4 倍）
- $\hat{\omega} = \pm \frac{\pi}{3}$ 时：$|H(e^{j\pi/3})| = 2 + 2\cos(\frac{\pi}{3}) = 2 + 2 \cdot 0.5 = 3$
- $\hat{\omega} = \pm \pi$ 时：$|H(e^{j\pi})| = 2 + 2\cos(\pi) = 0$ （高频分量被完全滤除）

由于低频处放大倍数高、高频处放大倍数为 0，该系统表现出典型的**低通滤波器 (Low-pass Filter)** 特性。

#### 2. 幅频与相频响应曲线示意图：

- **幅频曲线：** 呈倒钟型对称平滑曲线，在 0 处取得最大值 4，在 $\pm\pi$ 处降为 0。
- **相频曲线：** 在 $[-\pi, \pi]$ 区间内是一条斜率为 $-1$ 且穿过原点的直线，说明该系统是**线性相位系统**，其群延时（Group Delay）为恒定的 1 个采样周期。

![image-20260523003530046](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH6.1-FIR%E6%BB%A4%E6%B3%A2%E5%99%A8%E7%9A%84%E9%A2%91%E7%8E%87%E5%93%8D%E5%BA%94.assets/image-20260523003530046.png)

## 三、 正弦信号通过 LTI 系统的响应求解实例

### 3.1 例题 1：复指数信号输入

**【题目】** 已知滤波器频率响应为 $H(e^{j\hat{\omega}}) = (2+2\cos\hat{\omega})e^{-j\hat{\omega}}$。若输入信号为复指数正弦信号：

$$x[n] = 2e^{j \pi/4} e^{j \frac{\pi}{3} n}$$ 求系统输出 $y[n]$。

**【解】** 首先识别输入信号的数字角频率为 $\hat{\omega}_0 = \frac{\pi}{3}$。 计算该频率处的频率响应值：

$$H(e^{j \pi/3}) = \left(2 + 2\cos\frac{\pi}{3}\right) e^{-j \frac{\pi}{3}} = 3 e^{-j \frac{\pi}{3}}$$

系统输出为：

$$\begin{aligned} y[n] &= x[n] \cdot H(e^{j \pi/3}) \\ &= \left( 2e^{j \pi/4} e^{j \frac{\pi}{3} n} \right) \cdot \left( 3 e^{-j \frac{\pi}{3}} \right) \\ &= 6 e^{j(\pi/4 - \pi/3)} e^{j \frac{\pi}{3} n} \\ &= 6 e^{-j \frac{\pi}{12}} e^{j \frac{\pi}{3} n} \end{aligned}$$

### 3.2 核心性质：实系数 FIR 滤波器对实正弦信号的响应

如果 FIR 滤波器的系数 $b_k$ 均为实数，则其频率响应具有共轭对称性：

$$H^*(e^{j\hat{\omega}}) = H(e^{-j\hat{\omega}})$$

这意味着**幅频响应是偶对称的，相频响应是奇对称的**。

当输入为一个实正弦信号：

$$x[n] = A\cos(\hat{\omega}_0 n + \phi)$$

其输出信号可直接通过幅度和相位响应求得，无需进行复指数分解：

$$y[n] = A \cdot |H(e^{j\hat{\omega}_0})| \cdot \cos\left( \hat{\omega}_0 n + \phi + \angle H(e^{j\hat{\omega}_0}) \right)$$

### 3.3 例题 2：实正弦信号输入

**【题目】** 设滤波器频率响应依然为 $H(e^{j\hat{\omega}}) = (2+2\cos\hat{\omega})e^{-j\hat{\omega}}$。若输入信号为实余弦信号：

$$x[n] = 2\cos\left( \frac{\pi}{3} n + \frac{\pi}{4} \right)$$

求系统输出 $y[n]$。

**【解】**

1. 确定输入频率为 $\hat{\omega}_0 = \frac{\pi}{3}$。

2. 在该频率处的系统幅度和相位分别为主：

   - 幅度：$|H(e^{j \pi/3})| = 2 + 2\cos(\frac{\pi}{3}) = 3$
   - 相位：$\angle H(e^{j \pi/3}) = -\frac{\pi}{3}$

3. 直接代入实正弦响应公式：

   $$\begin{aligned} y[n] &= 2 \cdot 3 \cdot \cos\left( \frac{\pi}{3} n + \frac{\pi}{4} - \frac{\pi}{3} \right) \\ &= 6 \cos\left( \frac{\pi}{3} n - \frac{\pi}{12} \right) \end{aligned}$$

## 四、 LTI 系统的时域与频域对应关系

已知时域的单位脉冲响应 $h[n]$ 可以通过傅里叶变换求得频域的频率响应 $H(e^{j\hat{\omega}})$。 反之，如果能将频域响应表示为**复指数求和的傅里叶级数形式**，我们也可以非常直观地反推出其时域的系统差分方程或单位脉冲响应。

### 4.1 单位延时系统与通用延时规律

#### 1. 单位延时系统 (Unit Delay System)

- **差分方程：** $y[n] = x[n-1]$

- **脉冲响应：** 令 $x[n] = \delta[n]$，则 $h[n] = \delta[n-1]$

- **频率响应：**

  $$H(e^{j\hat{\omega}}) = \sum_{k=-\infty}^{+\infty} h[k]e^{-j\hat{\omega}k} = h[1]e^{-j\hat{\omega}} = e^{-j\hat{\omega}}$$

#### 2. 通用时-频延时变换对

推广至延时 $n_d$ 个样点：

$$y[n] = x[n-n_d] \iff h[n] = \delta[n-n_d] \iff H(e^{j\hat{\omega}}) = e^{-j n_d \hat{\omega}}$$

### 4.2 一阶差分系统 (First-Difference System)

- **差分方程：** $y[n] = x[n] - x[n-1]$

- **脉冲响应：** $h[n] = \delta[n] - \delta[n-1]$

- **频率响应：**

  $$H(e^{j\hat{\omega}}) = 1 - e^{-j\hat{\omega}}$$

### 4.3 频域反推时域实例 (Frequency Domain $\to$ Time Domain)

**【例题】** 已知某一 LTI 滤波器的频率响应为：

$$H(e^{j\hat{\omega}}) = 7 e^{-j 2\hat{\omega}} \cos\hat{\omega}$$

试求该滤波器的单位脉冲响应 $h[n]$ 及其系统差分方程。

**【解】** 利用欧拉公式展开余弦项 $\cos\hat{\omega} = \frac{e^{j\hat{\omega}} + e^{-j\hat{\omega}}}{2}$：

$$\begin{aligned} H(e^{j\hat{\omega}}) &= 7 e^{-j 2\hat{\omega}} \left( \frac{e^{j\hat{\omega}} + e^{-j\hat{\omega}}}{2} \right) \\ &= 3.5 e^{-j\hat{\omega}} + 3.5 e^{-j 3\hat{\omega}} \end{aligned}$$

对照标准的离散傅里叶变换展开式 $H(e^{j\hat{\omega}}) = \sum h[k] e^{-j\hat{\omega}k}$，可以看出：

- $e^{-j\hat{\omega}}$ 对应延时 1 样点，系数为 $3.5$，即 $h[1] = 3.5$；
- $e^{-j 3\hat{\omega}}$ 对应延时 3 样点，系数为 $3.5$，即 $h[3] = 3.5$；
- 其余各项系数均为 0。

因此：

- **单位脉冲响应为：**

  $$h[n] = 3.5\delta[n-1] + 3.5\delta[n-3]$$

- **系统差分方程为：**

  $$y[n] = 3.5x[n-1] + 3.5x[n-3]$$

- **FIR 滤波器系数为：**

  $$b_k = \{0, 3.5, 0, 3.5\}$$

## 五、 级联系统 (Cascade Systems)

当两个 LTI 系统以串联方式连接时，即构成**级联系统**：

$$x[n] \xrightarrow{\quad H_1(e^{j\hat{\omega}}), \, h_1[n] \quad} w[n] \xrightarrow{\quad H_2(e^{j\hat{\omega}}), \, h_2[n] \quad} y[n]$$

### 5.1 级联性质：

1. **时域等效：** 级联后的等效脉冲响应等于两个子系统脉冲响应的**卷积**。由于卷积满足交换律，调换两个系统的先后顺序不改变输出结果。

   $$h[n] = h_1[n] * h_2[n] = h_2[n] * h_1[n]$$

2. **频域等效：** 级联后的等效频率响应等于两个子系统频率响应的**乘积**。

   $$H(e^{j\hat{\omega}}) = H_1(e^{j\hat{\omega}}) \cdot H_2(e^{j\hat{\omega}})$$

> **结论：** 频域中的乘法运算比时域中的卷积运算在物理分析上更为简单和直观。

## 六、 综合系统级应用实例：采样、数字滤波与信号重构

本节将时域和频域、连续与离散、采样与重建融会贯通，研究如下实用物理系统：

```
x(t) ---> [ A/D 采样 ] ---> x[n] ---> [ 11点均值滤波器 ] ---> y[n] ---> [ D/A 重构 ] ---> y(t)
            Fs=1000Hz                           H(e^{j\hat{\omega}})            Fs=1000Hz
```

### 6.1 参数与输入信号

1. **连续输入信号：** $$ x(t) = \cos(2\pi \cdot 25 t) + \cos\left(2\pi \cdot 250 t - \frac{\pi}{2}\right)

   $$包含两组分量： * $f_1 = 25\text{ Hz}$ （低频信号） * $f_2 = 250\text{ Hz}$ （高频信号）$$

2. **采样频率：** $F_s = 1000\text{ Hz}$（采样间隔 $T_s = \frac{1}{F_s} = 0.001\text{ s}$）

3. **数字滤波器：** 11点均值滤波器（11-point Moving Average Filter），差分方程为：

   $$y[n] = \frac{1}{11} \sum_{k=0}^{10} x[n-k]$$

### 6.2 采样阶段：连续频率向数字频率的映射

根据采样定理，数字角频率与模拟频率的对应关系为主：

$$\hat{\omega} = \omega T_s = 2\pi f T_s = 2\pi \frac{f}{F_s}$$

1. **检查混叠：** 最高频率 $f_{\max} = 250\text{ Hz}$，奈奎斯特频率为 $F_s/2 = 500\text{ Hz}$。由于 $250 < 500\text{ Hz}$，系统**未发生混叠**。

2. **频率映射：**

   - 对于 $f_1 = 25\text{ Hz}$：

     $$\hat{\omega}_1 = 2\pi \frac{25}{1000} = 0.05\pi\text{ rad}$$

   - 对于 $f_2 = 250\text{ Hz}$：

     $$\hat{\omega}_2 = 2\pi \frac{250}{1000} = 0.5\pi\text{ rad}$$

### 6.3 11点均值滤波器的频率响应计算

11点滑动均值滤波器的单位脉冲响应为 $h[n] = \frac{1}{11}$ （$0 \le n \le 10$）。其频率响应计算公式为：

$$H(e^{j\hat{\omega}}) = \frac{\sin(11\hat{\omega}/2)}{11\sin(\hat{\omega}/2)} e^{-j 5\hat{\omega}}$$

我们分别计算两个频率处的复频率响应：

#### 1. 计算 $\hat{\omega}_1 = 0.05\pi$ 处的响应：

- **幅度：**

  $$|H(e^{j 0.05\pi})| = \frac{\sin(5.5 \cdot 0.05\pi)}{11\sin(0.5 \cdot 0.05\pi)} = \frac{\sin(0.275\pi)}{11\sin(0.025\pi)} \approx \frac{0.7604}{11 \cdot 0.0785} \approx 0.8811$$

- **相位：**

  $$\angle H(e^{j 0.05\pi}) = -5 \cdot 0.05\pi = -0.25\pi$$

- **频响结果：** $H(e^{j 0.05\pi}) = 0.8811 e^{-j 0.25\pi}$

#### 2. 计算 $\hat{\omega}_2 = 0.5\pi$ 处的响应：

- **幅度：**

  $$|H(e^{j 0.5\pi})| = \frac{\sin(5.5 \cdot 0.5\pi)}{11\sin(0.5 \cdot 0.5\pi)} = \frac{\sin(2.75\pi)}{11\sin(0.25\pi)}$$

  由于 $\sin(2.75\pi) = \sin(0.75\pi) = \sin(0.25\pi) = \frac{\sqrt{2}}{2}$，因此幅值化简为：

  $$|H(e^{j 0.5\pi})| = \frac{1}{11} \approx 0.0909$$

- **相位：**

  $$\angle H(e^{j 0.5\pi}) = -5 \cdot 0.5\pi = -2.5\pi = -0.5\pi \pmod{2\pi}$$

- **频响结果：** $H(e^{j 0.5\pi}) = 0.0909 e^{-j 0.5\pi}$

*(注：此处高频分量的幅度从 1 被大幅压低至 0.0909，说明均值滤波起到了极强的平滑抑噪效果。)*

### 6.4 重构阶段与最终输出连续信号 $y(t)$

经过 D/A 平滑重构后，数字频率重新恢复为模拟实际频率（$25\text{ Hz}$ 和 $250\text{ Hz}$）：

1. **第一部分分量（**$25\text{ Hz}$**）：**

   - 输入：$\cos(2\pi \cdot 25 t)$

   - 乘上系统幅频响应并在相角中加上相频响应：

     $$y_1(t) = 0.8811 \cos(2\pi \cdot 25 t - 0.25\pi)$$

2. **第二部分分量（**$250\text{ Hz}$**）：**

   - 输入：$\cos(2\pi \cdot 250 t - 0.5\pi)$

   - 加上频响产生的相位变化 $-0.5\pi$：

     $$y_2(t) = 0.0909 \cos(2\pi \cdot 250 t - 0.5\pi - 0.5\pi) = 0.0909 \cos(2\pi \cdot 250 t - \pi)$$

3. **最终重构得到的模拟输出信号** $y(t)$**：**

   $$y(t) = 0.8811 \cos(2\pi \cdot 25 t - 0.25\pi) + 0.0909 \cos(2\pi \cdot 250 t - \pi)$$

这个结果清晰地表明：该混合信号通过系统后，高频 $250\text{ Hz}$ 的噪声得到了极大的削弱（衰减了约 $91\%$），而低频 $25\text{ Hz}$ 的有用信号绝大部分被保留了下来（仅衰减了约 $12\%$）。

---
title: "信号与系统-CH7-采样"
slug: "信号与系统-CH7-采样"
description: "信号与系统-CH7-采样，待补充摘要。"
pubDate: 2026-05-23
updatedDate: 2026-05-23
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false 
---

- 【【公开课】 信號與系統 - 臺灣科技大學 - 黃騰毅教授】 https://www.bilibili.com/video/BV1PE411X7b8/?p=6&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- 【3-2 弦波的取樣及取樣定理 https://www.bilibili.com/video/BV1PE411X7b8/?p=7&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- 3-3 信號重建 數位至類比轉換 https://www.bilibili.com/video/BV1PE411X7b8/?p=8&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

<iframe src="https://drive.google.com/file/d/14p_yMDlg3P14x_GrBzt2PbgSj4RKHmqT/preview" width="640" height="480"></iframe>

# 信号的采样与重建 (Sampling and Reconstruction) 学习笔记

## 1. 采样与重建的基本概念

### 1.1 为什么需要采样？

在物理世界中，声音、电压等自然信号大多是**连续时间信号**（Continuous-time Signal，或称**模拟信号** Analog Signal），记作 $x(t)$。 由于模拟信号在时间轴上的数据点是无限多的，计算机（或任何数字系统）的有限内存无法直接存储和处理无限多点的数据。 为了让计算机记录和处理信号，必须进行**等间隔采样**（Uniform Sampling），将其转化为**离散时间信号**（Discrete-time Signal，或称**数字信号** Digital Signal），记作 $x[n]$。

- **A/D 转换（Analog-to-Digital）**：从连续时间信号 $x(t)$ 到离散序列 $x[n]$ 的采样过程。
- **D/A 转换（Digital-to-Analog）**：从离散序列 $x[n]$ 恢复出连续时间信号 $y(t)$ 的重建过程。

### 1.2 采样周期与采样频率

- **采样周期 (**$T_s$**)**：相邻两次采样之间的时间间隔（Sampling Period）。

- **采样频率 (**$f_s$**)**：一秒钟内采样的次数（Sampling Frequency），单位为 $\text{Hz}$。两者互为倒数：

  $$f_s = \frac{1}{T_s}$$

#### 内存存储机制：

在理想 A/D 转换中，计算机在每个采样时刻 $t = nT_s$ 对输入电压进行量化并读入内存。内存地址与时间步的对应关系如下：

$$\begin{array}{ccc}
\text{时间时刻 } t & \implies & \text{内存存储单元 } x[n] \\ \hline
x(0) & \implies & x[0] \\
x(T_s) & \implies & x[1] \\
x(2T_s) & \implies & x[2] \\
\vdots & & \vdots \\
x(nT_s) & \implies & x[n]
\end{array}$$

因此，理想均匀采样的数学公式（**时域转换关系**）为：

$$x[n] = x(nT_s) = x\left(\frac{n}{f_s}\right)$$

### 1.3 基础采样例题

#### 【例题 1】

**题目**：若有一个频率为 $100\text{Hz}$ 的模拟余弦信号 $x(t) = \cos(2\pi \cdot 100 t)$，使用采样频率 $f_s = 2000\text{Hz}$ 进行均匀采样，求采样后的离散时间信号 $x[n]$。

**解析与推导**： 首先确定采样周期为：

$$T_s = \frac{1}{f_s} = \frac{1}{2000} \text{ s}$$

根据采样转换公式，将 $t = nT_s$ 代入原连续信号中：

$$x[n] = x(nT_s) = \cos(2\pi \cdot 100 \cdot nT_s)$$

$$x[n] = \cos\left(2\pi \cdot 100 \cdot \frac{n}{2000}\right) = \cos\left(\frac{\pi n}{10}\right) = \cos(0.1\pi n)$$

*注：此结果在数字时域中的角频率为* $\hat{\omega} = 0.1\pi \text{ rad}$*。*

![image-20260523084241557](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523084241557.png)

## 2. 香农采样定理 (Shannon's Sampling Theorem)

### 2.1 采样定理核心内容

采样频率的大小决定了恢复原始信号的保真度。**香农采样定理**指出： 为了能够从离散样本中无失真地重建出连续信号，采样频率 $f_s$ 必须**大于**原信号中最高频率分量 $f_{\max}$ 的两倍：

$$f_s > 2f_{\max}$$

这个最低不失真采样率 $2f_{\max}$ 被称为**奈奎斯特频率**（Nyquist Rate）。

![image-20260523104320116](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523104320116.png)

> 采样定理的证明

### 2.2 直观物理理解

如果对一个正弦波进行采样：

- **若** $f_s < 2f_{\max}$：每个周期内采到的样本点少于2个，信息丢失极其严重，重建时这些点将会拟合出一个频率更低的错误波形（即**混叠失真**，或在视觉上呈现“反向旋转”的马车轮效应）。
- **若** $f_s > 2f_{\max}$：在最极端情况下，每个周期至少能采集到波峰和波谷，保留了波形振荡的最基本特征，从而有可能完美恢复出原波形。

#### 实际生活应用——CD 音质：

人耳能听到的声波极限最高频率约为 $20\text{kHz}$。根据采样定理，若要完美记录人耳可听的全部声音，采样频率必须大于 $2 \times 20\text{kHz} = 40\text{kHz}$。因此，历史上 CD 的采样率标准被科学地定为 $44.1\text{kHz}$。

## 3. 连续到离散 (C-to-D) 转换与数字频率

对于一个连续时间正弦信号：

$$x(t) = A\cos(\omega t + \phi)$$

其中，$\omega = 2\pi f$ 为连续时间角频率（单位：$\text{rad/s}$）。

对其进行采样，代入 $t = nT_s$：

$$x[n] = x(nT_s) = A\cos(\omega T_s n + \phi) = A\cos(\hat{\omega} n + \phi)$$

这里我们引入了一个极其关键的全新概念——**数字频率（Digital Frequency）** $\hat{\omega}$：

$$\hat{\omega} = \omega T_s = \frac{\omega}{f_s} = 2\pi\frac{f}{f_s}$$

- **单位**：弧度（$\text{radians}$），属于无量纲单位。
- **物理意义**：代表在相邻两次采样点之间，原模拟信号走过的弧度。
- **取值范围**：由于离散序列的周期性，数字主频率仅唯一地分布在 $[-\pi, \pi]$（或 $[0, 2\pi]$）区间内。

## 4. 频谱的“影分身”与混叠现象 (Aliasing)

### 4.1 频谱的多重影分身

当我们将正弦信号转换成复指数形式（欧拉公式）：

$$\cos(\hat{\omega} n) = \frac{e^{j\hat{\omega} n} + e^{-j\hat{\omega} n}}{2}$$

我们会发现离散复指数具有独特的性质：

$$e^{j(\hat{\omega} + 2\pi m)n} = e^{j\hat{\omega} n} \cdot e^{j2\pi mn} = e^{j\hat{\omega} n} \quad (\text{其中 } m \text{ 为整数，因为 } e^{j2\pi mn}=1)$$

这意味着在离散频域中，**每隔** $2\pi$ **的整数倍就会出现一个一模一样的“分身”（频谱重复）**。在画数字信号的频谱时，我们必须画出其所有的复数分身（Replicas）。

### 4.2 混叠分析经典例题

#### 【例题 2】

**题目**：现有两个不同频率的模拟正弦波：

- 男歌手音高：$x_1(t) = \cos(2\pi \cdot 200 t)$ （频率 $f_1 = 200\text{Hz}$）
- 女歌手音高：$x_2(t) = \cos(2\pi \cdot 1200 t)$ （频率 $f_2 = 1200\text{Hz}$）

若录音系统统一使用 $f_s = 1000\text{Hz}$ 进行采样，求两个信号采样后的离散时间表达式 $x_1[n]$ 与 $x_2[n]$，并阐述混叠现象。

**推导与求解**：

1. **对于** $x_1(t)$：

   $$x_1[n] = \cos\left(2\pi \cdot 200 \cdot \frac{n}{1000}\right) = \cos(0.4\pi n)$$

   对应正谱线位于 $\hat{\omega} = 0.4\pi$，负谱线位于 $\hat{\omega} = -0.4\pi$。

2. **对于** $x_2(t)$：

   $$x_2[n] = \cos\left(2\pi \cdot 1200 \cdot \frac{n}{1000}\right) = \cos(2.4\pi n)$$

   利用三角函数的 $2\pi$ 周期性，可以将 $2.4\pi n$ 拆解：

   $$\cos(2.4\pi n) = \cos(0.4\pi n + 2\pi n) = \cos(0.4\pi n)$$

**结论与物理分析**： 尽管男女歌手的输入频率相差极大（一个低沉 $200\text{Hz}$，一个高亢 $1200\text{Hz}$），但在 $f_s = 1000\text{Hz}$ 的采样率下，它们在计算机中产生的离散数据点**完全一模一样**。

由于 $1200\text{Hz}$ 的信号不满足采样定理（必须 $f_s > 2400\text{Hz}$ 才能不失真），高频的女声在其频域分身映射中，直接混叠成了低频的男声（$200\text{Hz}$），导致计算机完全无法区分二者，这被称为**混叠失真（Aliasing）**。

![image-20260523084435012](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523084435012.png)

> 取样频率太低，导致认为两个不同频率信号是同一个信号
>
> 无法重建

## 5. 重建边界与频谱解释

在信号重建（D/A 转换）时，由于从数学上离散点可以对应无数个连续时间频率，系统默认达成一个协议：**重建出所有分身中频率最低、最靠近** $0$ **的那一个频率**（最安全的低频）。

### 5.1 为什么 $[-\pi, \pi]$ 区间是 Safe（安全区）？

在数字频域中，只要数字主频率 $|\hat{\omega}| < \pi$，该频率分量就是离零最近的，重建时就可以完美、无失真地恢复。

我们对安全区进行数学推导：

$$|\hat{\omega}| < \pi \implies 2\pi\frac{f}{f_s} < \pi \implies \frac{2f}{f_s} < 1 \implies f_s > 2f$$

这从频域上完美推导出了**奈奎斯特采样定理**。

### 5.2 边界失真例题

#### 【例题 3】

**题目**：已知连续信号 $x(t) = A\cos(2\pi \cdot 100 t + \phi)$，采用 $f_s = 80\text{Hz}$ 进行均匀采样，求采样后并进行理想重建得到的模拟信号 $y(t)$。

**推导与求解**：

1. **采样（A/D 过程）**： 将 $t = \frac{n}{80}$ 代入原信号：

   $$x[n] = A\cos\left(2\pi \cdot 100 \cdot \frac{n}{80} + \phi\right) = A\cos(2.5\pi n + \phi)$$

2. **寻找安全区内的等价频率**： 由于数字主频 $2.5\pi > \pi$，发生混叠。我们通过减去 $2\pi$（等价频谱搬移）将其变换到安全区 $[-\pi, \pi]$：

   $$x[n] = A\cos(2.5\pi n - 2\pi n + \phi) = A\cos(0.5\pi n + \phi)$$

   此时，安全区内的数字主频为 $\hat{\omega} = 0.5\pi$。

3. **重建（D/A 过程）**： 重建遵循理想映射关系 $n = f_s t = 80t$，代入上式：

   $$y(t) = A\cos(0.5\pi \cdot 80 t + \phi) = A\cos(40\pi t + \phi) = A\cos(2\pi \cdot 20 t + \phi)$$

**结论**：输入为 $100\text{Hz}$ 的高频信号，重建后出来的却是 $20\text{Hz}$ 的低频信号。

![image-20260523103809764](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523103809764.png)

> 失真例子

## 6. 折叠混叠 (Folded Aliasing) 与相位反转

### 6.1 折叠混叠的本质

当采样后的高频分量落在负频轴上的分身（即 $-\hat{\omega}$）比原正频更靠近零点时，系统重建出来的频率会对应其负频分身，这在宏观上导致了相位反转（Phase Reversal）现象。

#### 【例题 4 / 录音笔混叠例题】

**题目**：假设有一支录音笔，其固定采样率 $f_s = 2000\text{Hz}$。如果录制一系列纯音信号，其输入频率 $f_{\text{in}}$ 分别为 $0, 500, 1000, 1500, 2000, 2500\text{Hz}$，求录音笔重建后的输出频率 $f_{\text{out}}$。

**详细分析与数学推导**： 对于各输入频率，安全区（奈奎斯特极限）为 $f_N = \frac{f_s}{2} = 1000\text{Hz}$。

1. $f_{\text{in}} = 0, 500, 1000\text{Hz}$： 均在奈奎斯特频带 $[0, 1000\text{Hz}]$ 内，为安全区间。

   - 重建结果：$0 \implies 0\text{Hz}$，$500 \implies 500\text{Hz}$，$1000 \implies 1000\text{Hz}$。

2. $f_{\text{in}} = 1500\text{Hz}$： 采样后，其数字频谱分身分布在 $1.5\pi$ 和 $-1.5\pi$。 寻找与其等价且最近的零点分身：

   $$1.5\pi - 2\pi = -0.5\pi \quad \text{(对应 -500Hz)}$$

   因为余弦信号为偶函数，在重建时：

   $$\cos(1.5\pi n + \phi) = \cos(-0.5\pi n + \phi) = \cos(0.5\pi n - \phi)$$

   此时，重建得到的物理模拟频率为 $500\text{Hz}$，但**相位项由** $+\phi$ **翻转为** $-\phi$（相位反转）。

   - 重建结果：$1500\text{Hz} \implies 500\text{Hz}$（相位反转，此即折叠混叠 Folded Alias）。

3. $f_{\text{in}} = 2000\text{Hz}$： 数字主频为 $\frac{2000}{2000} \cdot 2\pi = 2\pi$。其最邻近零点的等价频谱位于 $2\pi - 2\pi = 0$。

   - 重建结果：$2000\text{Hz} \implies 0\text{Hz}$（变为直流信号 DC）。

4. $f_{\text{in}} = 2500\text{Hz}$： 数字频率为 $\frac{2500}{2000} \cdot 2\pi = 2.5\pi$。最邻近分身：$2.5\pi - 2\pi = 0.5\pi$（对应 $+500\text{Hz}$）。 因为其最邻近分身仍为正频率，故相位不变。

   - 重建结果：$2500\text{Hz} \implies 500\text{Hz}$（无相位反转，即普通混叠 Ordinary Alias）。

#### 频率变换曲线（折叠图）：

如果画出输入频率与输出频率的对应关系曲线，它呈现出特殊的“折叠波浪”形状：

![image-20260523104838184](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523104838184.png)

该图清晰地反映了：超过 $1000\text{Hz}$ 后，输入频率增加，输出重建频率反而下降（回退折返）的物理事实。

## 7. 信号处理系统流程图

模拟信号在计算机中的完整生命周期可以用如下系统框图表示：

```mermaid
graph LR
    %% 节点定义
    IN(信号输入) --> A/D[A/D 采样]
    A/D --> COMP[Computer 算法处理]
    COMP --> D/A[D/A 重建]
    D/A --> OUT(信号输出)

    %% 信号状态标记
    linkStyle 0 stroke-width:2px;
    linkStyle 1 stroke-width:2px;
    linkStyle 2 stroke-width:2px;
    linkStyle 3 stroke-width:2px;

    %% 在连线上标注信号
    IN -- "模拟输入<br>x(t)" --> A/D
    A/D -- "离散时间序列<br>x[n]" --> COMP
    COMP -- "离散时间输出<br>y[n]" --> D/A
    D/A -- "模拟输出<br>y(t)" --> OUT
```

- **A/D 转换器公式**（采样时域映射）：

  $$x[n] = x(nT_s)$$

- **D/A 转换器公式**（重建时域映射）：

  $$y(t) = y[f_s t]$$

#### 【例题 5 / D/A 重建例题】

**题目**：计算机处理后的输出离散信号为 $y[n] = A\cos(0.2\pi n + \phi)$，设计重建系统的采样率 $f_s = 8000\text{Hz}$。求完美重建后的模拟信号 $y(t)$。

**解析**： 根据理想重建映射，令 $n = f_s t = 8000 t$，直接代入：

$$y(t) = A\cos(0.2\pi \cdot 8000 t + \phi) = A\cos(1600\pi t + \phi) = A\cos(2\pi \cdot 800 t + \phi)$$

*重建后得到的模拟余弦波频率为* $800\text{Hz}$*。*

![image-20260523134643896](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523134643896.png)

## 8. 信号重建（D/A 转换）的具体实现方式

数字信号重建，即利用离散的 $y[n]$ 恢复出连续的 $y(t)$，在物理上有以下几种常见逼近手段：

### 8.1 简易内插法 (Easy Interpolation)

- **方法**：即数学上的“连线法”（Connect-the-dots）。
- **特征**：利用某种曲线（线性内插、样条内插）连接所有已知的离散采样点，从而估算出相邻两点之间的中间值。
- **局限**：这种方法天然只能恢复出低频信号。如例题2中的样本点，连线法只能画出低频的男声波形（红线），高声的女声波形（黑线）由于采样点不够稠密，无法通过简单连线还原。

![image-20260525112118031](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260525112118031.png)

> 使用连连看来直接将两个sample point 相连

### 8.2 零阶保持器 (Sample and Hold / ZOH)

- **电路原理**：在硬件电路中，通常使用电容来保持电压。在采样点 $n$ 到 $n+1$ 之间，电路迫使输出电平恒定在 $y[n]$ 的幅值，直到下一个样本到来。
- **结果**：重建出来的波形并不是光滑的曲线，而是像台阶一样的**阶梯状矩形波（Square Pulse Case）**。

> 用方波来重建波形的一种方式

![image-20260523140726044](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260523140726044.png)

> 取样频率比较高就更容易重建原本的信号

![image-20260525112453891](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260525112453891.png)

### 8.3 滤波平滑与电路设计 (Low-pass Filter)

由于零阶保持器产生的“阶梯波”含有大量尖锐的拐角，根据傅里叶变换原理，**突变的拐角意味着存在无限宽的高频谐波分量**。这些高频分量是属于频带以外的，必须予以清除。

> 方波的频带到无穷远处都有。
>
> 转角就是高频信号，所以FIR滤波器（3-pt）能够将信号变得平滑，本质上也是将高频信号滤除的一种LPF

- **平滑重建方案**：将阶梯波通过一个**低通滤波器（Low-pass Filter, LPF）**，滤除截止频率 $f_{\text{cutoff}} = \frac{f_s}{2}$ **以上的高频成分**，使波形变得圆滑，从而恢复原本光滑的模拟信号。
- **硬件实现**：最基础的 LPF 可以使用由电阻（R）和电容（C）构成的简易 RC 低通滤波电路。

![image-20260525112953516](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260525112953516.png)

### 8.4 数学重建模型 (Mathematical Reconstruction)

在数学上，可以将重建写成移位脉冲函数与样本值相乘并累加的卷积模型：

$$y(t) = \sum_{n=-\infty}^{\infty} y[n] \cdot p(t - nT_s)$$

*其中，*$p(t)$ *为重建所使用的脉冲基函数。*

1. **若** $p(t)$ **为矩形脉冲（Square Pulse）**：对应零阶保持器（ZOH），波形呈阶梯状。

   ![image-20260525113326315](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260525113326315.png)

2. **若** $p(t)$ **为三角形脉冲（Triangular Pulse）**：对应线性插值。

3. **若** $p(t)$ **为理想的** $\text{sinc}$ **函数（即带限插值 Bandlimited Interpolation）**：

   $$p(t) = \frac{\sin(\pi t / T_s)}{\pi t / T_s}$$

   在理论上，该数学模型可以实现连续信号的**无损、完美重建**（不含任何额外高频分量）。其背后的频域原理将在学习完连续傅里叶变换后得到更深层次的揭示。

   > 因为sinc是bound limited signal

   ![image-20260525113400256](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH7-%E9%87%87%E6%A0%B7.assets/image-20260525113400256.png)

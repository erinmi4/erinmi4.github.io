---
title: "信号与系统-CH4.3-傅里叶变换的采样和重建"
slug: "信号与系统-CH4.3-傅里叶变换的采样和重建"
description: "信号与系统-CH4.3-傅里叶变换的采样和重建，待补充摘要。"
pubDate: 2026-05-27
updatedDate: 2026-05-27
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

【【公开课】 信號與系統 - 臺灣科技大學 - 黃騰毅教授】 https://www.bilibili.com/video/BV1PE411X7b8/?p=22&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5



# 信号与系统核心笔记：调制、采样、重建与离散时间滤波

## 一、 幅度调制 (Amplitude Modulation, AM)

### 1. 物理意义与背景

在通信系统中，基带信号（如语音、音乐等 $x(t)$）通常是低频信号。低频信号由于波长较长，无法通过天线进行有效的电磁辐射发射。 **幅度调制 (AM)** 的核心思想就是利用高频的正弦波作为**载波 (Carrier)**，将低频基带信号的频谱搬移到高频段，以便于天线的发射和在信道中进行频分复用 (FDM)。

### 2. 频移定理 (Frequency-Shift Theorem)

幅度调制的数学理论基础是傅里叶变换的**频移定理**。 若已知基带信号的傅里叶变换为：

$$\mathcal{F}\{x(t)\} = X(j\omega)$$

则当信号乘以复指数信号 $e^{j\omega_c t}$ 时，其在频域相当于整体向右平移 $\omega_c$：

$$\mathcal{F}\left\{x(t)e^{j\omega_c t}\right\} = X(j(\omega-\omega_c))$$

![image-20260527185046203](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527185046203.png)

### 3. AM 调制原理与时频域推导

设基带信号 $x(t)$ 为一个**典型带限信号 (Bandlimited Signal)**，其频谱 $X(j\omega)$ 的最大值在 $\omega=0$ 处，幅值为 $A$，且带宽限制在 $[-\omega_b, \omega_b]$ 内：

$$X(j\omega) = 0, \quad \text{for } |\omega| > \omega_b$$

高频余弦载波信号为 $\cos(\omega_c t)$（其中 $\omega_c \gg \omega_b$），调制后的输出信号 $y(t)$ 为：

$$y(t) = x(t) \cos(\omega_c t)$$

#### 频域严格推导：

利用欧拉公式，将 $\cos(\omega_c t)$ 展开为指数形式：

$$\cos(\omega_c t) = \frac{1}{2} e^{j\omega_c t} + \frac{1}{2} e^{-j\omega_c t}$$

代入时域调制公式：

$$y(t) = x(t) \cdot \left[ \frac{1}{2} e^{j\omega_c t} + \frac{1}{2} e^{-j\omega_c t} \right] = \frac{1}{2} x(t) e^{j\omega_c t} + \frac{1}{2} x(t) e^{-j\omega_c t}$$

对上式两边同时取傅里叶变换，根据频移定理和线性性质可得调制后信号的频谱 $Y(j\omega)$：

$$Y(j\omega) = \frac{1}{2} X(j(\omega-\omega_c)) + \frac{1}{2} X(j(\omega+\omega_c))$$

### 4. 谱图演变

- **基带信号频谱** $X(j\omega)$：中心位于零频，带宽为 $\omega_b$，负频率部分画上斜线阴影，以示与正频率部分的不对称性（便于观察平移方向）。
- **已调信号频谱** $Y(j\omega)$：原来的频谱分裂为两部分，分别对称地向左右搬移到了 $\pm \omega_c$ 处，并且最大幅值衰减为原来的 $\frac{1}{2}$（即 $\frac{A}{2}$）。
  - 右侧高频分量分布区间：$[\omega_c - \omega_b, \omega_c + \omega_b]$
  - 左侧高频分量分布区间：$[-\omega_c - \omega_b, -\omega_c + \omega_b]$

## 二、 相干解调 (Coherent Demodulation) 与相位偏移分析

接收端收到高频已调信号 $y(t)$ 后，需要通过**解调 (Demodulation)** 过程，将其还原为低频的基带信号。最常用的方法是**相干解调**。

### 1. 相干解调系统框图

![image-20260527185725746](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527185725746.png)

![image-20260527190103954](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527190103954.png)

*注：在实际系统中，接收端解调器的本地载波与发送端的调制载波很难做到绝对同频同相，通常会产生一个相位差（相位偏移）* $\phi$*。*

### 2. 解调过程的严格数学推导

解调乘法器输出的瞬时信号为：

$$w(t) = y(t) \cos(\omega_c t + \phi)$$

由于 $\cos(\omega_c t + \phi) = \frac{1}{2} e^{j\phi} e^{j\omega_c t} + \frac{1}{2} e^{-j\phi} e^{-j\omega_c t}$，对 $w(t)$ 取傅里叶变换：

$$W(j\omega) = \frac{1}{2} e^{j\phi} Y(j(\omega-\omega_c)) + \frac{1}{2} e^{-j\phi} Y(j(\omega+\omega_c))$$

将已调信号频谱 $Y(j\omega) = \frac{1}{2} X(j(\omega-\omega_c)) + \frac{1}{2} X(j(\omega+\omega_c))$ 代入上式：

$$W(j\omega) = \frac{1}{2} e^{j\phi} \left[ \frac{1}{2} X(j(\omega-2\omega_c)) + \frac{1}{2} X(j\omega) \right] + \frac{1}{2} e^{-j\phi} \left[ \frac{1}{2} X(j\omega) + \frac{1}{2} X(j(\omega+2\omega_c)) \right]$$

展开并合并同类项：

$$W(j\omega) = \frac{1}{4} e^{j\phi} X(j(\omega-2\omega_c)) + \frac{1}{4} \left( e^{j\phi} + e^{-j\phi} \right) X(j\omega) + \frac{1}{4} e^{-j\phi} X(j(\omega+2\omega_c))$$

利用欧拉公式 $e^{j\phi} + e^{-j\phi} = 2\cos(\phi)$，整理得：

$$W(j\omega) = \frac{1}{2} \cos(\phi) X(j\omega) + \frac{1}{4} e^{j\phi} X(j(\omega-2\omega_c)) + \frac{1}{4} e^{-j\phi} X(j(\omega+2\omega_c))$$

从上式可以看出，解调后的信号频谱 $W(j\omega)$ 包含了三部分：

1. **基带信号成分**：位于 $\omega = 0$ 附近，即 $\frac{1}{2} \cos(\phi) X(j\omega)$。
2. **高频分量**：位于 $\omega = 2\omega_c$ 附近，即 $\frac{1}{4} e^{j\phi} X(j(\omega-2\omega_c))$。
3. **高频分量**：位于 $\omega = -2\omega_c$ 附近，即 $\frac{1}{4} e^{-j\phi} X(j(\omega+2\omega_c))$。

### 3. 低通滤波器 (LPF) 恢复基带信号

为了恢复原始信号，我们将 $w(t)$ 输入一个截止频率为 $\omega_{co}$ 的理想低通滤波器（其通带范围需满足 $\omega_b < \omega_{co} < 2\omega_c - \omega_b$）。 滤波器将滤除位于 $\pm 2\omega_c$ 的两个高频分量，只保留基带分量。最终解调输出信号 $v(t)$ 的频谱为：

$$V(j\omega) = \frac{1}{2} \cos(\phi) X(j\omega)$$

时域对应输出为：

$$v(t) = \frac{1}{2} \cos(\phi) x(t)$$

### 4. 相位偏移 $\phi$ 对解调结果的致命影响

1. **理想同步情况 (**$\phi = 0$**)**：

   $$v(t) = \frac{1}{2} x(t)$$

   原信号被完美无损地恢复（仅幅值缩放了 $\frac{1}{2}$ 倍）。

2. **正交对角衰减——“零点效应” (**$\phi = \pm \pi/2$**)**：

   $$\cos\left(\pm \frac{\pi}{2}\right) = 0 \implies v(t) = 0$$

   此时解调输出完全为零！即使接收端收到的信号很强，由于相位正交，有用信号也会被完全抵消。

3. **相位倒相 (**$\phi = \pi$**)**：

   $$v(t) = -\frac{1}{2} x(t)$$

   信号幅值反相。

### 典型例题 1：相干解调应用

**题目**： 已知一个连续基带信号为 $x(t) = \cos(20\pi t)$，调制载波为 $\cos(200\pi t)$。在接收端，解调器的本地载波存在相位偏移，为 $\cos(200\pi t + \frac{\pi}{3})$。解调后的信号送入截止频率 $\omega_{co} = 50\pi \text{ rad/s}$ 的理想低通滤波器。 (1) 求调制信号 $y(t)$。 (2) 计算解调乘法器输出信号 $w(t)$。 (3) 求最终理想低通滤波器的输出信号 $v(t)$。

**完美解答**： **(1) 调制信号：**

$$y(t) = x(t) \cos(200\pi t) = \cos(20\pi t) \cos(200\pi t)$$

**(2) 解调乘法器输出：**

$$w(t) = y(t) \cos\left(200\pi t + \frac{\pi}{3}\right) = \cos(20\pi t) \cos(200\pi t) \cos\left(200\pi t + \frac{\pi}{3}\right)$$

利用积化和差公式 $\cos A \cos B = \frac{1}{2} [\cos(A+B) + \cos(A-B)]$：

$$\cos(200\pi t) \cos\left(200\pi t + \frac{\pi}{3}\right) = \frac{1}{2} \left[ \cos\left(400\pi t + \frac{\pi}{3}\right) + \cos\left(-\frac{\pi}{3}\right) \right]$$

因为 $\cos\left(-\frac{\pi}{3}\right) = \frac{1}{2}$，代入上式得：

$$w(t) = \cos(20\pi t) \cdot \left[ \frac{1}{2} \cos\left(400\pi t + \frac{\pi}{3}\right) + \frac{1}{4} \right] = \frac{1}{4} \cos(20\pi t) + \frac{1}{2} \cos(20\pi t) \cos\left(400\pi t + \frac{\pi}{3}\right)$$

再次利用积化和差公式展开高频项：

$$w(t) = \frac{1}{4} \cos(20\pi t) + \frac{1}{4} \cos\left(420\pi t + \frac{\pi}{3}\right) + \frac{1}{4} \cos\left(380\pi t + \frac{\pi}{3}\right)$$

**(3) 低通滤波器输出：** 低通滤波器的截止频率为 $\omega_{co} = 50\pi \text{ rad/s}$（对应频率为 $25 \text{ Hz}$）。

- 信号 $w(t)$ 中，基带分量 $\frac{1}{4} \cos(20\pi t)$ 的角频率为 $20\pi \text{ rad/s} < 50\pi \text{ rad/s}$，属于通带，完美通过。
- 高频分量角频率分别为 $380\pi \text{ rad/s}$ 和 $420\pi \text{ rad/s}$，远大于 $50\pi \text{ rad/s}$，属于阻带，被彻底滤除。

因此，滤波器的最终输出信号为：

$$v(t) = \frac{1}{4} \cos(20\pi t)$$

*验证：利用推导出的公式* $v(t) = \frac{1}{2}\cos(\phi)x(t)$*，此处* $\phi = \frac{\pi}{3}$*，故* $\frac{1}{2}\cos(\frac{\pi}{3})x(t) = \frac{1}{4}\cos(20\pi t)$*，两方法结果一致。*

## 三、 频域采样 (Sampling in Frequency Domain)

信号采样是将连续时间信号转化为离散时间信号的桥梁。在数学模型上，通常使用**冲激串采样**。

### 1. 冲激串采样数学模型

设 $x(t)$ 是待采样的连续时间信号，采样周期为 $T_s$。 冲激串采样信号可表示为 $x(t)$ 与一个等间隔冲激串 $p(t)$ 的乘积：

$$x_s(t) = x(t) p(t)$$

其中冲激串定义为：

$$p(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$$

因此，采样后的连续时间信号为：

$$x_s(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s)$$

### 2. 冲激串 $p(t)$ 的傅里叶级数展开

由于 $p(t)$ 是周期为 $T_s$ 的周期信号，其基波角频率（采样角频率）为 $\omega_s = \frac{2\pi}{T_s}$。 根据傅里叶级数，将其展开为：

$$p(t) = \sum_{k=-\infty}^{\infty} a_k e^{j k \omega_s t}$$

其傅里叶系数 $a_k$ 计算如下：

$$a_k = \frac{1}{T_s} \int_{-T_s/2}^{T_s/2} p(t) e^{-j k \omega_s t} dt = \frac{1}{T_s} \int_{-T_s/2}^{T_s/2} \delta(t) e^{-j k \omega_s t} dt = \frac{1}{T_s}$$

故，冲激串的傅里叶级数展开式为：

$$p(t) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} e^{j k \omega_s t}$$

### 3. 采样后信号频谱 $X_s(j\omega)$ 的推导

将 $p(t)$ 的级数形式代入 $x_s(t) = x(t)p(t)$ 中：

$$x_s(t) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} x(t) e^{j k \omega_s t}$$

对上式两边取傅里叶变换，根据频移定理：

$$X_s(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(j(\omega - k \omega_s))$$

![Impulse train sampling](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527193744843.png)

### 4. 物理意义

连续信号经过冲激采样后，其频谱 $X_s(j\omega)$ 是原连续信号频谱 $X(j\omega)$ 以采样频率 $\omega_s$ 为周期进行**无限周期延拓**的累加，同时整体幅值缩放为原来的 $\frac{1}{T_s}$ 倍。

## 四、 混叠失真 (Aliasing Distortion)

由于采样导致频谱发生了无限次的周期延拓，我们必须考虑相邻光谱块之间是否会重叠。

### 1. 奈奎斯特采样定理 (Nyquist Sampling Theorem)

为了能够从采样信号 $x_s(t)$ 中完美重构出原始信号 $x(t)$，周期延拓的频谱分量之间不能产生交叠。 如图所示，若 $X(j\omega)$ 的最大上限频率（带宽）为 $\omega_b$，则必须满足相邻光谱的间距大于带宽的两倍：

$$\omega_s - \omega_b > \omega_b \implies \omega_s > 2\omega_b \quad \left(\text{或 } f_s > 2f_b\right)$$

这被称为**奈奎斯特采样定理**。$2\omega_b$（或 $2f_b$）被称为**奈奎斯特采样率**。

### 2. 混叠失真物理过程

如果采样频率过低，即 $\omega_s < 2\omega_b$ 时，周期延拓的频谱会在交界处发生重叠（图中红色阴影区域）：

$$X_s(j\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(j(\omega - k \omega_s))$$

此时，高频分量折回低频区，导致叠加处的频谱幅值发生永久性的混淆失真，这被称为**混叠失真 (Aliasing Distortion)**。一旦发生混叠，就无法再通过简单的理想低通滤波器完美还原原信号。

![image-20260527193924833](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527193924833.png)

### 典型例题 2：采样理论与混叠分析

**题目**： 设带限信号为 $x(t) = \frac{\sin(100\pi t)}{\pi t}$。 (1) 求该信号的带宽 $\omega_b$（单位 $\text{rad/s}$）及 Nyquist 采样率 $f_N$（单位 $\text{Hz}$）。 (2) 若分别以采样周期 $T_{s1} = 5 \text{ ms}$ 和 $T_{s2} = 15 \text{ ms}$ 对信号进行冲激采样，试计算各自采样后的信号频谱 $X_s(j\omega)$ 的周期，并判断是否会发生混叠失真。

**完美解答**： **(1) 确定基带带宽与奈奎斯特频率：** 已知理想低通滤波器（矩形谱）的傅里叶反变换公式为：

$$\mathcal{F}^{-1}\left\{ G(j\omega) \right\} = \frac{\sin(W t)}{\pi t} \longleftrightarrow G(j\omega) = \begin{cases} 1, & |\omega| < W \\ 0, & |\omega| > W \end{cases}$$

这里 $W = 100\pi$，因此 $x(t)$ 的傅里叶变换为：

$$X(j\omega) = \begin{cases} 1, & |\omega| < 100\pi \text{ rad/s} \\ 0, & |\omega| > 100\pi \text{ rad/s} \end{cases}$$

所以：

- 基带带宽：$\omega_b = 100\pi \text{ rad/s}$（折合频率 $f_b = 50 \text{ Hz}$）。
- 奈奎斯特采样率：$f_N = 2f_b = 100 \text{ Hz}$（或 $\omega_N = 200\pi \text{ rad/s}$）。

**(2) 采样周期** $T_{s1} = 5 \text{ ms} = 0.005 \text{ s}$**：**

- 采样角频率为：

  $$\omega_{s1} = \frac{2\pi}{T_{s1}} = \frac{2\pi}{0.005} = 400\pi \text{ rad/s} \quad (f_{s1} = 200 \text{ Hz})$$

- 比较：由于 $\omega_{s1} = 400\pi > 2\omega_b = 200\pi$（或者说 $f_{s1} = 200\text{ Hz} > f_N = 100\text{ Hz}$），满足采样定理。

- **结论：不产生任何混叠失真。**

**(3) 采样周期** $T_{s2} = 15 \text{ ms} = 0.015 \text{ s}$**：**

- 采样角频率为：

  $$\omega_{s2} = \frac{2\pi}{T_{s2}} = \frac{2\pi}{0.015} = \frac{400}{3}\pi \approx 133.3\pi \text{ rad/s} \quad (f_{s2} \approx 66.7 \text{ Hz})$$

- 比较：由于 $\omega_{s2} = 133.3\pi < 2\omega_b = 200\pi$（或者说 $f_{s2} = 66.7\text{ Hz} < f_N = 100\text{ Hz}$），不满足采样定理。

- **结论：会产生混叠失真**。周期延拓的光谱相互交叠，高频成分会混入低频中。

## 五、 频域与时域中的信号重建 (Reconstruction)

重建是采样的逆过程，目标是从采样信号 $x_s(t)$ 中完美复原原连续时间信号 $x(t)$。

### 1. 频域重建原理

若采样频率满足无混叠条件 $\omega_s > 2\omega_b$，我们只需要滤除 $X_s(j\omega)$ 中除了基带周期（位于 $\omega = 0$ 处）以外的所有高频周期分量，并将衰减的幅度恢复。 因此，我们设计一个**理想重建低通滤波器** $H_r(j\omega)$：

- 截止频率：取在采样频率的一半处 $\omega_{co} = \frac{\omega_s}{2}$。
- 通带增益：为了抵消采样过程中除以的 $T_s$，增益设为 $T_s$。

其数学表示为：

$$H_r(j\omega) = \begin{cases} T_s, & |\omega| < \frac{\omega_s}{2} \\ 0, & |\omega| > \frac{\omega_s}{2} \end{cases}$$

重建后的信号频谱为：

$$X_r(j\omega) = H_r(j\omega) X_s(j\omega) = X(j\omega)$$

### 2. 时域重建原理（理想 $\text{sinc}$ 插值）

根据傅里叶反变换，我们求得理想重建低通滤波器 $H_r(j\omega)$ 在时域的单位冲激响应 $h_r(t)$：

$$h_r(t) = \mathcal{F}^{-1}\left\{ H_r(j\omega) \right\} = \frac{1}{2\pi} \int_{-\omega_s/2}^{\omega_s/2} T_s e^{j\omega t} d\omega = \frac{T_s}{2\pi} \left[ \frac{e^{j\omega t}}{jt} \right]_{-\omega_s/2}^{\omega_s/2}$$

$$h_r(t) = \frac{T_s}{\pi t} \cdot \frac{e^{j \frac{\omega_s}{2} t} - e^{-j \frac{\omega_s}{2} t}}{2j} = \frac{T_s \sin(\frac{\omega_s}{2}t)}{\pi t}$$

将 $\omega_s = \frac{2\pi}{T_s}$ 代入上式中：

$$h_r(t) = \frac{\sin(\frac{\pi}{T_s} t)}{\frac{\pi}{T_s} t} = \text{sinc}\left(\frac{t}{T_s}\right)$$

在时域中，滤波器的输出是输入采样信号 $x_s(t)$ 与单位冲激响应 $h_r(t)$ 的卷积：

$$x_r(t) = x_s(t) * h_r(t) = \left[ \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s) \right] * h_r(t)$$

利用卷积的线性与位移特性：

$$x_r(t) = \sum_{n=-\infty}^{\infty} x(nT_s) h_r(t - nT_s)$$

$$x_r(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \frac{\sin\left[\frac{\pi}{T_s}(t - nT_s)\right]}{\frac{\pi}{T_s}(t - nT_s)}$$

![image-20260527194101539](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527194101539.png)

### 3. 物理内涵：

这被称为 $\text{sinc}$ **理想带限插值 (sinc Interpolation)**。 时域连续信号的重建是通过将每个采样点处的幅度值 $x(nT_s)$，加权到以该点为中心平移的 $\text{sinc}$ 函数上，并将无限多个这种平移后的 $\text{sinc}$ 曲线相互叠加得到的。

由于 $\text{sinc}$ 函数在除了零点（即 $t=0$）以外的所有 $T_s$ 整数倍时刻的值都恰好为 0（即零交叉性质），保证了在任何采样点 $t = kT_s$ 时：

$$x_r(kT_s) = x(kT_s)$$

而在采样点之间，则通过无限个 $\text{sinc}$ 波形的平滑叠加完美内插插值出来。

![image-20260527194634687](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527194634687.png)

### 典型例题 3：时域重建证明

**题目**： 证明在采样时刻 $t = m T_s$（$m$ 为任意整数）上，由理想内插重建公式得到的连续信号 $x_r(mT_s)$ 严格等于原始采样值 $x(mT_s)$。

**完美解答**： 将 $t = m T_s$ 代入理想重建公式：

$$x_r(mT_s) = \sum_{n=-\infty}^{\infty} x(nT_s) \text{sinc}\left(\frac{m T_s - nT_s}{T_s}\right) = \sum_{n=-\infty}^{\infty} x(nT_s) \text{sinc}(m - n)$$

因为 $\text{sinc}(\theta) = \frac{\sin(\pi \theta)}{\pi \theta}$：

- 当 $n \neq m$ 时，$m - n = k$ 为一个非零整数。由于 $\sin(\pi k) = 0$，所以此时 $\text{sinc}(m-n) = 0$。
- 当 $n = m$ 时，$m - n = 0$。根据极限，有 $\lim_{\theta \to 0} \text{sinc}(\theta) = 1$。

因此，$\text{sinc}$ 项在整数点满足冲激函数性质：

$$\text{sinc}(m - n) = \delta[m - n]$$

代入求和公式：

$$x_r(mT_s) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta[m - n] = x(m T_s)$$

**证明完毕。这表明理想重建信号在采样点上能完美不失真地还原采样值。**

## 六、 连续时间信号的离散时间滤波 (Discrete-Time Filtering)

现代数字信号处理 (DSP) 绝大多数情况下使用数字计算机或离散处理器来处理连续的物理信号。其完整的级联处理模型如下。

### 1. 级联系统框图

![image-20260527194924941](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527194924941.png)

- **C-to-D (连续到离散)**：输入连续信号 $x(t)$ 以周期 $T_s$ 采样，提取幅值转化为序列 $x[n] = x(nT_s)$。
- **离散 LTI 滤波器**：对序列进行滤波，系统频率响应为 $H(e^{j\hat{\omega}})$，输出序列为 $y[n]$。
- **D-to-C (离散到连续)**：将序列重新放回冲激间隔上得到 $y_s(t) = \sum y[n] \delta(t-nT_s)$，最后通过截止频率为 $\frac{\omega_s}{2}$、增益为 $T_s$ 的理想重建滤波器，恢复成连续信号 $y_r(t)$。

### 2. 频谱映射与变换规律 (Spectrum Mapping)

#### (1) 模拟频率与数字频率的映射关系：

在级联系统中，存在两个不同的频率横坐标：

- 连续时间（模拟）角频率 $\omega$ (单位：$\text{rad/s}$)。
- 离散时间（数字）角频率 $\hat{\omega}$ (单位：$\text{rad}$)。

它们之间的映射关系为：

$$\hat{\omega} = \omega T_s$$

*注：在某些教材中，数字频率也写作* $\Omega$*。为了严格区分，这里采用带帽子的* $\hat{\omega}$ *代表离散域频率。*

该映射的物理含义：

- 模拟角频率中的采样频率 $\omega_s$ 映射到离散域中为 $2\pi$（因为 $\omega_s T_s = 2\pi$）。
- 模拟域中的奈奎斯特截止频率 $\frac{\omega_s}{2}$ 对应离散域中的最高数字角频率 $\pi$（因为 $\frac{\omega_s}{2} T_s = \pi$）。

#### (2) 谱线演变过程分析：

- $X(j\omega)$：输入连续信号的频谱（带宽为 $\omega_b$，幅度为 $A$）。

- $X_s(j\omega)$：冲激采样后连续频谱，幅度为 $\frac{A}{T_s}$，是以 $\omega_s$ 周期重复的频谱。

- $X(e^{j\hat{\omega}})$：离散序列 $x[n]$ 的频谱（DTFT），它是一个以 $2\pi$ 为周期的谱：

  $$X(e^{j\hat{\omega}}) = X_s\left(j\frac{\hat{\omega}}{T_s}\right)$$

  其截止角频率变为 $\omega_b T_s$。

- $H(e^{j\hat{\omega}})$：离散域滤波器的频率响应（例如一个截止角频率为 $\hat{\omega}_{co}$ 的理想低通滤波器）。

- $Y(e^{j\hat{\omega}})$：滤波后的数字频谱：

  $$Y(e^{j\hat{\omega}}) = H(e^{j\hat{\omega}}) X(e^{j\hat{\omega}})$$

- $Y_r(j\omega)$：最终重建后的连续时间输出频谱。通过映射还原并滤除镜像：

  $$Y_r(j\omega) = \begin{cases} T_s \cdot Y\left(e^{j\omega T_s}\right), & |\omega| < \frac{\omega_s}{2} \\ 0, & |\omega| > \frac{\omega_s}{2} \end{cases}$$

  其在连续频域对应的截止频率被还原为 $\omega_{co} = \frac{\hat{\omega}_{co}}{T_s}$。

### 3. 等效连续时间滤波器的频响 $H_{\text{eff}}(j\omega)$

在整个系统中，如果采样过程**满足无混叠条件**，则从输入 $x(t)$ 到最终输出 $y_r(t)$，整个离散处理链条可以完全等效为一个**连续时间 LTI 滤波器**。 其等效频率响应定义为：

$$H_{\text{eff}}(j\omega) = \begin{cases} H(e^{j\omega T_s}), & |\omega| < \frac{\omega_s}{2} \\ 0, & |\omega| > \frac{\omega_s}{2} \end{cases}$$

### 典型例题 4：级联滤波系统完整分析

**题目**： 考虑一个如上图所示的级联连续时间离散时间滤波系统。已知采样周期为 $T_s = 1 \text{ ms}$。 输入连续信号为：

$$x(t) = \cos(200\pi t) + \cos(1200\pi t)$$

离散滤波器的系统阻抗（频率响应）设计为一个理想低通滤波器：

$$H(e^{j\hat{\omega}}) = \begin{cases} 1, & 0 \le |\hat{\omega}| \le 0.4\pi \\ 0, & 0.4\pi < |\hat{\omega}| \le \pi \end{cases}$$

并在离散域以 $2\pi$ 为周期进行延拓。

(1) 分析采样过程是否会产生频谱混叠失真。 (2) 写出离散序列 $x[n]$ 的表达式，并计算其在主要周期区间 $[-\pi, \pi]$ 上的 DTFT 频谱 $X(e^{j\hat{\omega}})$。 (3) 求通过该离散滤波器后的输出序列 $y[n]$。 (4) 求理想 D-to-C 重建后的最终连续时间输出信号 $y_r(t)$。

**完美解答**： **(1) 混叠分析：**

- 输入信号中含有两个模拟角频率成分：$\omega_1 = 200\pi \text{ rad/s}$ ($f_1 = 100 \text{ Hz}$)，$\omega_2 = 1200\pi \text{ rad/s}$ ($f_2 = 600 \text{ Hz}$)。

- 信号的最大上限带宽为 $f_b = f_2 = 600 \text{ Hz}$。

- 系统采样频率为：

  $$f_s = \frac{1}{T_s} = 1000 \text{ Hz} \quad (\omega_s = 2000\pi \text{ rad/s})$$

- 比较：奈奎斯特频率为 $2f_b = 1200 \text{ Hz}$。由于 $f_s = 1000 \text{ Hz} < 1200 \text{ Hz}$（或者说 $\omega_s = 2000\pi < 2\omega_b = 2400\pi$），**不满足采样定理**。

- **高频成分** $\omega_2 = 1200\pi$ **将产生混叠失真！**

- 混叠折回分析：由于周期延拓，高频成分会发生移动：

  $$\omega_2 - \omega_s = 1200\pi - 2000\pi = -800\pi \text{ rad/s}$$

  对应的混叠虚假低频分量为 $800\pi \text{ rad/s}$（即 $400 \text{ Hz}$ 处，原本输入信号并没有该频率）。

**(2) 求离散序列** $x[n]$ **及其频谱：** 将 $t = n T_s = 0.001 n$ 代入 $x(t)$：

$$x[n] = \cos(200\pi \times 0.001 n) + \cos(1200\pi \times 0.001 n)$$

$$x[n] = \cos(0.2\pi n) + \cos(1.2\pi n)$$

由于离散正弦信号以 $2\pi$ 为周期，我们需要将 $1.2\pi$ 限制在 $[-\pi, \pi]$ 的主周期范围内：

$$\cos(1.2\pi n) = \cos(1.2\pi n - 2\pi n) = \cos(-0.8\pi n) = \cos(0.8\pi n)$$

因此，离散序列为：

$$x[n] = \cos(0.2\pi n) + \cos(0.8\pi n)$$

计算其离散傅里叶变换 $X(e^{j\hat{\omega}})$（在主值区间 $[-\pi, \pi]$ 内）：

$$X(e^{j\hat{\omega}}) = \pi \left[ \delta(\hat{\omega} - 0.2\pi) + \delta(\hat{\omega} + 0.2\pi) \right] + \pi \left[ \delta(\hat{\omega} - 0.8\pi) + \delta(\hat{\omega} + 0.8\pi) \right]$$

**(3) 求离散滤波器输出** $y[n]$**：** 理想数字滤波器的截止频率为 $\hat{\omega}_{co} = 0.4\pi$：

- 分量 $\hat{\omega}_1 = 0.2\pi < 0.4\pi$，落在低通滤波器的通带内，完美通过（增益为 1）。
- 分量 $\hat{\omega}_2 = 0.8\pi > 0.4\pi$，落在阻带内，被完全滤除（增益为 0）。

因此滤波后的输出谱为：

$$Y(e^{j\hat{\omega}}) = \pi \left[ \delta(\hat{\omega} - 0.2\pi) + \delta(\hat{\omega} + 0.2\pi) \right]$$

其对应的时域离散序列为：

$$y[n] = \cos(0.2\pi n)$$

**(4) 理想 D-to-C 重建信号** $y_r(t)$**：** 重建是将数字角频率还原为模拟角频率：

$$\omega = \frac{\hat{\omega}}{T_s}$$

因为输出序列中仅有数字角频率 $\hat{\omega}_1 = 0.2\pi$：

$$\omega = \frac{0.2\pi}{0.001} = 200\pi \text{ rad/s}$$

因此，经 D-to-C 重建后的连续时间输出信号为：

$$y_r(t) = \cos(200\pi t)$$

![image-20260527195125836](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.3-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E7%9A%84%E9%87%87%E6%A0%B7%E5%92%8C%E9%87%8D%E5%BB%BA.assets/image-20260527195125836.png)

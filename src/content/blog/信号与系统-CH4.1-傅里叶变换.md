---
title: "信号与系统-CH4.1-傅里叶变换"
slug: "信号与系统-CH4.1-傅里叶变换"
description: "信号与系统-CH4.1-傅里叶变换，待补充摘要。"
pubDate: 2026-05-27
updatedDate: 2026-05-27
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

【9-1 傅利葉轉換】 https://www.bilibili.com/video/BV1PE411X7b8/?p=20&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

https://gemini.google.com/app/3db620ccf729f56e

![image-20260527160324923](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.1-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2.assets/image-20260527160324923.png)

# 信号与系统：傅里叶变换与逆变换 (Fourier Transform & Inverse Fourier Transform)

## 一、 傅里叶变换的引入背景

### 1. 周期信号与非周期信号的分析工具

在信号与系统的分析中，我们已经掌握了**傅里叶级数 (Fourier Series, FS)**，它是处理**周期信号 (Periodic Signal)** 的利器（例如周期性方波）。 然而，自然界中的绝大多数信号都是**非周期信号 (Non-periodic Signal)**（例如单个脉冲信号、语音信号等）。对于非周期信号，我们无法直接使用傅里叶级数进行频谱分析。

为了解决非周期信号的分析问题，我们引入了**傅里叶变换 (Fourier Transform, FT)**。

- **傅里叶级数 (FS)** $\longrightarrow$ 仅适用于**周期信号**。
- **傅里叶变换 (FT)** $\longrightarrow$ 既适用于**非周期信号**，也适用于**周期信号**，其应用范围更加广泛。

### 2. 非周期信号的“周期无限大”思想

如何对一个单脉冲非周期信号 $x(t)$ 进行频谱分析？

我们可以采用**极限思想**：

1. 假设非周期信号 $x(t)$ 是在时域宽度为 $T$ 的单个脉冲。

2. 我们构造一个周期为 $T_0$ 的周期信号 $x_{T_0}(t)$，使其在每一个周期 $T_0$ 内重复一次 $x(t)$ 的波形：

   $$x_{T_0}(t) = \sum_{n=-\infty}^{+\infty} x(t - n T_0)$$

3. 当我们将重复间隔 $T_0$ 拉大，即周期 $T_0 \to \infty$ 时，相邻两个脉冲之间的距离变得无限远：

   $$\lim_{T_0 \to \infty} x_{T_0}(t) = x(t)$$

由此，**非周期信号可以被看作是一个周期** $T_0 \to \infty$ **的特殊周期信号**。我们可以通过对周期信号 $x_{T_0}(t)$ 的傅里叶级数取 $T_0 \to \infty$ 极限，从而推导出非周期信号的傅里叶变换。

## 二、 傅里叶变换的核心数学推导 (重要证明)

> **提示**：本推导展示了如何从离散的傅里叶级数系数过渡到连续的傅里叶变换频谱密度。
>
> ![image-20260527103107108](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.1-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2.assets/image-20260527103107108.png)

设周期信号 $x_{T_0}(t)$ 的指数形式傅里叶级数为：

$$x_{T_0}(t) = \sum_{k=-\infty}^{+\infty} a_k e^{j k \omega_0 t}$$

其中，傅里叶系数（频谱系数） $a_k$ 的计算公式为：

$$a_k = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} x_{T_0}(t) e^{-j k \omega_0 t} dt$$

其中基波角频率 $\omega_0 = \frac{2\pi}{T_0}$。

将 $a_k$ 的表达式两边同乘以 $T_0$：

$$T_0 a_k = \int_{-T_0/2}^{T_0/2} x_{T_0}(t) e^{-j k \omega_0 t} dt$$

现在，我们让周期 $T_0 \to \infty$：

1. **基频趋于无穷小（谱线无限稠密）**：

   $$\lim_{T_0 \to \infty} \omega_0 = \lim_{T_0 \to \infty} \frac{2\pi}{T_0} = d\omega$$

   离散频率 $k\omega_0$ 逐渐变为连续的频率变量 $\omega$：

   $$\lim_{T_0 \to \infty} k\omega_0 = \omega$$

2. **积分区间扩大到全时域**： 在区间 $[-T_0/2, T_0/2]$ 内，$x_{T_0}(t) = x(t)$。当 $T_0 \to \infty$ 时，积分区间变为 $(-\infty, +\infty)$：

   $$\lim_{T_0 \to \infty} T_0 a_k = \int_{-\infty}^{+\infty} x(t) e^{-j \omega t} dt \triangleq X(j\omega)$$

   我们将这个极限定义为 $x(t)$ 的**傅里叶变换 (频谱密度函数)** $X(j\omega)$。

3. **时域信号的重构（逆傅里叶变换）**： 回到傅里叶级数合成公式，我们可以将其写为：

   $$x_{T_0}(t) = \sum_{k=-\infty}^{+\infty} a_k e^{j k \omega_0 t} = \sum_{k=-\infty}^{+\infty} (T_0 a_k) e^{j k \omega_0 t} \cdot \frac{1}{T_0}$$

   因为 $\frac{1}{T_0} = \frac{\omega_0}{2\pi}$，所以：

   $$x_{T_0}(t) = \frac{1}{2\pi} \sum_{k=-\infty}^{+\infty} (T_0 a_k) e^{j k \omega_0 t} \cdot \omega_0$$

   当 $T_0 \to \infty$ 时：
   - $x_{T_0}(t) \to x(t)$
   - $T_0 a_k \to X(j\omega)$
   - $k\omega_0 \to \omega$
   - 离散求和 $\sum$ 转化为连续积分 $\int$，步长 $\omega_0 \to d\omega$。

最终我们得到以下互逆的变换对：

### 傅里叶变换 (Fourier Transform, FT)

$$X(j\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j\omega t} dt$$

### 逆傅里叶变换 (Inverse Fourier Transform, IFT)

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega$$

## 三、 经典例题与推导解析

### 例题 1：时域矩形脉冲信号（时域方波）的傅里叶变换

**题目**：已知时域单脉冲信号 $x(t) = \begin{cases} 1, & |t| < \frac{T}{2} \\ 0, & |t| > \frac{T}{2} \end{cases}$，求其傅里叶变换 $X(j\omega)$ 并画出频谱图。

**【详细求解步骤】** 依据傅里叶变换定义公式：

$$X(j\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j\omega t} dt = \int_{-T/2}^{T/2} 1 \cdot e^{-j\omega t} dt$$

对指数函数进行积分：

$$X(j\omega) = \left[ \frac{e^{-j\omega t}}{-j\omega} \right]_{-T/2}^{T/2} = \frac{e^{-j\omega \frac{T}{2}} - e^{j\omega \frac{T}{2}}}{-j\omega}$$

整理正负号，提取常数：

$$X(j\omega) = \frac{e^{j\omega \frac{T}{2}} - e^{-j\omega \frac{T}{2}}}{j\omega} = \frac{2 \cdot \left( \frac{e^{j\omega \frac{T}{2}} - e^{-j\omega \frac{T}{2}}}{2j} \right)}{\omega}$$

利用欧拉公式 $\sin\theta = \frac{e^{j\theta} - e^{-j\theta}}{2j}$，上式可写为：

$$X(j\omega) = \frac{2\sin\left(\frac{\omega T}{2}\right)}{\omega} = T \cdot \frac{\sin\left(\frac{\omega T}{2}\right)}{\frac{\omega T}{2}}$$

若引入**采样函数**（Sampling Function） $\text{sa}(x) = \frac{\sin x}{x}$：

$$X(j\omega) = T \cdot \text{sa}\left(\frac{\omega T}{2}\right)$$

> **关于 Sinc 函数定义的说明**： 不同的教材中对 $\text{sinc}$ 函数的定义有所不同：
>
> 1. **规范化 Sinc 函数（常见于数信、图像领域）**：$\text{sinc}(\theta) = \frac{\sin(\pi\theta)}{\pi\theta}$。
> 2. **非规范化 Sinc 采样函数（常见于部分传统控制、物理领域）**：$\text{sa}(\theta) = \frac{\sin\theta}{\theta}$。
>
> 若采用规范化 $\text{sinc}$ 函数，则可表示为：$X(j\omega) = T \cdot \text{sinc}\left(\frac{\omega T}{2\pi}\right)$。考试与学习中需注意区分。

#### 频谱特性分析：

1. **直流分量（**$\omega \to 0$ **处的极值）**： 当 $\omega \to 0$ 时，利用洛必达法则（L'Hôpital's rule）或重要极限 $\lim_{x\to0}\frac{\sin x}{x}=1$ 可得：

   $$X(j0) = \lim_{\omega \to 0} T \cdot \frac{\sin\left(\frac{\omega T}{2}\right)}{\frac{\omega T}{2}} = T$$

   说明在零频处，频谱幅度等于方波在时域的面积（高度 $1 \times$ 宽度 $T$）。

2. **零点（过零点）频率**： 当分分子 $\sin\left(\frac{\omega T}{2}\right) = 0$ 且分母不为零时，$X(j\omega) = 0$。即：

   $$\frac{\omega T}{2} = k\pi \quad (k = \pm 1, \pm 2, \pm 3, \dots)$$

   解得过零点角频率：

   $$\omega = \frac{2k\pi}{T}$$

   因此，频谱波形在 $\omega = \pm\frac{2\pi}{T}, \pm\frac{4\pi}{T}, \dots$ 处穿过零点，且随着频率 $\omega$ 的增大，分母变大，谱线的振幅呈衰减趋势。

### 例题 2：频域矩形脉冲信号（频域方波）的逆傅里叶变换

**题目**：已知频域理想低通滤波器的频谱波形为 $X(j\omega) = \begin{cases} 1, & |\omega| < W_b \\ 0, & |\omega| > W_b \end{cases}$，求其时域信号 $x(t)$。

**【详细求解步骤】** 依据逆傅里叶变换定义公式：

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega = \frac{1}{2\pi} \int_{-W_b}^{W_b} 1 \cdot e^{j\omega t} d\omega$$

对变量 $\omega$ 进行积分（注意 $t$ 在此积分中视为常数）：

$$x(t) = \frac{1}{2\pi} \left[ \frac{e^{j\omega t}}{jt} \right]_{-W_b}^{W_b} = \frac{1}{2\pi \cdot jt} \left( e^{j W_b t} - e^{-j W_b t} \right)$$

利用欧拉公式变形：

$$x(t) = \frac{1}{\pi t} \cdot \left( \frac{e^{j W_b t} - e^{-j W_b t}}{2j} \right) = \frac{\sin(W_b t)}{\pi t}$$

为了写成采样函数 $\text{sa}(x) = \frac{\sin x}{x}$ 的形式，分子分母同乘以 $W_b$：

$$x(t) = \frac{W_b}{\pi} \cdot \frac{\sin(W_b t)}{W_b t} = \frac{W_b}{\pi} \text{sa}(W_b t)$$

#### 时频对称物理直觉：

- **时域方波** $\longleftrightarrow$ **频域 Sinc 采样函数**
- **频域方波** $\longleftrightarrow$ **时域 Sinc 采样函数**
- **物理结论**：由于频域波形在 $\omega = \pm W_b$ 之外全部为零，所以 $x(t)$ 是一个**频带受限信号 (Band-limited Signal)**。一个完美的频带受限信号在时域必然是无限延伸的 $\text{sinc}$ 形状。

### 例题 3：时域单位冲击信号的傅里叶变换

**题目**：已知时域时移冲击信号 $x(t) = \delta(t - t_0)$，求其傅里叶变换。

**【详细求解步骤】** 依据傅里叶变换定义公式：

$$X(j\omega) = \int_{-\infty}^{+\infty} \delta(t - t_0) e^{-j\omega t} dt$$

根据单位冲击函数 $\delta(t)$ 的**筛选性质（Sifting Property）**（即 $\int_{-\infty}^{+\infty} f(t)\delta(t - t_0)dt = f(t_0)$），我们可以直接得出积分值：

$$X(j\omega) = e^{-j\omega t_0}$$

由此得到非常重要的傅里叶变换对：

$$\delta(t - t_0) \overset{\mathcal{F}}{\longleftrightarrow} e^{-j\omega t_0}$$

#### 特例：若 $t_0 = 0$（无时移的单位冲击信号）

$$\delta(t) \overset{\mathcal{F}}{\longleftrightarrow} 1$$

**物理直觉**： 单位冲击脉冲 $\delta(t)$ 是一个宽度无限窄、高度无限高、面积为 1 的瞬间脉冲。它的频谱密度在整个频域 $(-\infty, +\infty)$ 内均为常数 1。这意味着**冲击信号包含了所有频率的分量，且各分量强度相等（白谱特性）**。

### 例题 4：频域冲击信号的逆傅里叶变换

**题目**：已知频域信号 $X(j\omega) = 2\pi \delta(\omega - \omega_0)$，求其对应的时域信号 $x(t)$。

**【详细求解步骤】** 依据逆傅里叶变换公式：

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega = \frac{1}{2\pi} \int_{-\infty}^{+\infty} 2\pi \delta(\omega - \omega_0) e^{j\omega t} d\omega$$

常数 $2\pi$ 与前方的 $\frac{1}{2\pi}$ 抵消：

$$x(t) = \int_{-\infty}^{+\infty} \delta(\omega - \omega_0) e^{j\omega t} d\omega$$

再次利用冲击函数的筛选性质（此时自变量是频率 $\omega$，而 $t$ 相当于参数），当 $\omega = \omega_0$ 时：

$$x(t) = e^{j\omega_0 t}$$

由此得到最基础也是最重要的基本信号傅里叶变换对：

$$e^{j\omega_0 t} \overset{\mathcal{F}}{\longleftrightarrow} 2\pi \delta(\omega - \omega_0)$$

#### 特例：若 $\omega_0 = 0$（直流信号 $x(t) = 1$）

$$1 \overset{\mathcal{F}}{\longleftrightarrow} 2\pi \delta(\omega)$$

**物理直觉**： 恒定的直流信号 $x(t) = 1$ 从时域看永远不发生变化，说明它不包含任何高频成分。它的能量在频域完全集中在零频率点（$\omega = 0$），表现为一个强度为 $2\pi$ 的冲击函数。

### 例题 5：余弦信号的傅里叶变换

**题目**：求时域余弦信号 $x(t) = \cos(\omega_0 t)$ 的傅里叶变换 $X(j\omega)$。

**【详细求解步骤】** 由于余弦信号是非能量有限信号，不能直接套用常规的积分公式。我们可以利用**欧拉公式**将其展开为复指数信号的形式：

$$x(t) = \cos(\omega_0 t) = \frac{1}{2} \left( e^{j\omega_0 t} + e^{-j\omega_0 t} \right)$$

利用傅里叶变换的**线性性质**以及例题 4 的结论： 已知 $e^{j\omega_0 t} \overset{\mathcal{F}}{\longleftrightarrow} 2\pi \delta(\omega - \omega_0)$， 同理可得 $e^{-j\omega_0 t} \overset{\mathcal{F}}{\longleftrightarrow} 2\pi \delta(\omega + \omega_0)$。

因此，对 $x(t)$ 两边取傅里叶变换：

$$X(j\omega) = \mathcal{F}\left\{ \frac{1}{2} e^{j\omega_0 t} \right\} + \mathcal{F}\left\{ \frac{1}{2} e^{-j\omega_0 t} \right\}$$

$$X(j\omega) = \frac{1}{2} \left[ 2\pi \delta(\omega - \omega_0) \right] + \frac{1}{2} \left[ 2\pi \delta(\omega + \omega_0) \right]$$

$$X(j\omega) = \pi \delta(\omega - \omega_0) + \pi \delta(\omega + \omega_0)$$

由此得到正弦类信号的傅里叶变换对：

$$\cos(\omega_0 t) \overset{\mathcal{F}}{\longleftrightarrow} \pi \left[ \delta(\omega - \omega_0) + \delta(\omega + \omega_0) \right]$$

**物理直觉**： 时域余弦信号是一个单一频率 $\omega_0$ 的简谐振荡，因此其频谱密度仅在正频率 $\omega = \omega_0$ 和负频率 $\omega = -\omega_0$ 处存在值，表现为两根谱线（强度为 $\pi$ 的冲击脉冲）。

## 四、 补充总结：常用傅里叶变换对速查表

| 信号名称         | 时域信号 $x(t)$                    | 频域频谱密度 $X(j\omega)$                                                                                         |
| ---------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------- | ------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **单位冲击信号** | $\delta(t)$                        | $1$                                                                                                               |
| **时移冲击信号** | $\delta(t - t_0)$                  | $e^{-j\omega t_0}$                                                                                                |
| **直流恒定信号** | $1$                                | $2\pi \delta(\omega)$                                                                                             |
| **复指数信号**   | $e^{j\omega_0 t}$                  | $2\pi \delta(\omega - \omega_0)$                                                                                  |
| **余弦脉冲信号** | $\cos(\omega_0 t)$                 | $\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$                                                     |
| **时域矩形脉冲** | $$g_T(t) = \begin{cases} 1, &      | t                                                                                                                 | < T/2 \\ 0, & | t            | > T/2 \end{cases} \quad \xleftrightarrow{\mathcal{F}} \quad T \cdot \text{sa}\left(\frac{\omega T}{2}\right)$$ | $T \cdot \text{sa}\left(\frac{\omega T}{2}\right)$ |
| **频域矩形脉冲** | $\frac{W_b}{\pi} \text{sa}(W_b t)$ | $$\frac{W*b}{\pi} \text{sa}(W_b t) \quad \xleftrightarrow{\mathcal{F}} \quad G*{W_b}(\omega) = \begin{cases} 1, & | \omega        | < W_b \ 0, & | \omega                                                                                                         | > W_b \end{cases}$$                                |

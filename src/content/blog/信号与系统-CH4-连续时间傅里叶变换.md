---
title: "信号与系统-CH4-连续时间傅里叶变换"
slug: "信号与系统-CH4-连续时间傅里叶变换"
description: "从非周期信号的引入，到傅里叶变换对的推导，再到周期信号的特殊处理，最后总结性质。"
pubDate: 2026-05-13
updatedDate: 2026-05-13
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
heroImage: /images/posts/Signal-and-system/memo.jpg
---

<iframe src="https://drive.google.com/file/d/1swoknPIgOfUl8tTfsskYIxS_Q4Ta2o4a/preview" width="640" height="480"></iframe>

- [Fourier Transform of Cos](https://www.classcentral.com/classroom/youtube-fourier-transform-examples-91154)
- [Fourier Transform of Cos with Phase Shift](https://www.youtube.com/watch?v=97eKhJwf9Mk&list=PLx7-Q20A1VYL0vNQAEdaEejHz_i9WKuo4&index=2)
- 【[信号与系统]连续信号傅里叶变换性质-共轭对称特性】 https://www.bilibili.com/video/BV16e411M7TS/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5



# 第 4 章 连续时间傅里叶变换 (CTFT)

## 4.0 引言

非周期信号可以看作是**周期趋于无限大**的周期信号。

- **物理直观：** 当周期 $T \to \infty$ 时，基波频率 $\omega_0 = \frac{2\pi}{T} \to 0$。
- **频谱演变：** 随着周期的增大，频谱中的谐波分量在频率轴上靠得越来越近，最终从离散的谱线演变成连续的谱域。

## 4.1 非周期信号的表示：连续时间傅里叶变换

### 1. 建立思想 (Derivation)

为了研究非周期信号 $x(t)$，我们构造一个周期信号 $\tilde{x}(t)$，使其在一个周期内等于 $x(t)$，并让 $T \to \infty$。

根据傅里叶级数（FS）：

$$\tilde{x}(t) = \sum_{k=-\infty}^{+\infty} a_k e^{j k \omega_0 t}$$

其中系数 $a_k$ 为：

$$a_k = \frac{1}{T} \int_{-T/2}^{T/2} x(t) e^{-j k \omega_0 t} dt$$

### 2. 包络信号与极限过程

定义**包络函数** $X(j\omega)$（即傅里叶变换）：

$$X(j\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j \omega t} dt$$

对比可知，傅里叶级数系数可以表示为包络的样本：

$$T a_k = X(j\omega) \Big|_{\omega = k \omega_0} \implies a_k = \frac{1}{T} X(j k \omega_0)$$

代入 $\tilde{x}(t)$ 的表达式，并利用 $\frac{1}{T} = \frac{\omega_0}{2\pi}$：

$$\tilde{x}(t) = \sum_{k=-\infty}^{+\infty} \left[ \frac{1}{2\pi} X(j k \omega_0) e^{j k \omega_0 t} \right] \omega_0$$

当 $T \to \infty$ 时，$\omega_0 \to d\omega$，$k\omega_0 \to \omega$，求和变为积分：

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega$$

### 3. 傅里叶变换对 (The CTFT Pair)

- **正变换 (Analysis Equation):**

  $$X(j\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j \omega t} dt$$

- **反变换 (Synthesis Equation):**

  $$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega$$

> **要点总结 (参考 `image_49b657.jpg`)：**
>
> - 时域脉冲宽度与频域 Sinc 函数具有**反比关系**：时域信号 $x(t)$ 越宽，频域能量越集中（变窄）。
> - 周期信号的系数 $a_k$ 是其单周期对应非周期信号变换 $X(j\omega)$ 的**等间隔采样**。

### 4. 直观理解：从周期到非周期的物理图像

这是一个非常深刻的物理直觉。从周期信号过渡到非周期信号，本质上是一个"周期无限外推"的过程。

你可以想象：一个周期为 $T$ 的方波，如果我们让 $T \to \infty$，相邻两个脉冲之间的距离就会变得无限远，最终在观察范围内就只剩下一个孤立的矩形脉冲。

以下是推导的三个关键步骤：

**1. 频谱密度的引入**

对于周期信号，我们有傅里叶级数系数 $a_k$。当 $T$ 变得非常大时，基波角频率 $\omega_0 = \frac{2\pi}{T}$ 会变得非常小（趋近于无穷小量 $\Delta\omega$）。

此时，原本离散的谱线会靠得越来越近，最终连成一条连续的曲线。我们定义这条曲线为频谱密度 $X(j\omega)$：

$$X(j\omega) = \lim_{T \to \infty} (a_k \cdot T)$$

**2. 数学代换**

我们已知周期方波（幅度为 1，宽度为 $2T_1$）的系数是：

$$a_k = \frac{2\sin(k\omega_0 T_1)}{k\omega_0 T}$$

将这个 $a_k$ 代入上面的密度定义式中：

$$X(j\omega) = \lim_{T \to \infty} \left( \frac{2\sin(k\omega_0 T_1)}{k\omega_0 T} \cdot T \right)$$

这里的 $T$ 被约掉了。同时，随着 $T \to \infty$，离散的频率点 $k\omega_0$ 变成了连续变量 $\omega$：

$$X(j\omega) = \frac{2\sin(\omega T_1)}{\omega}$$

**3. 物理意义的转化**

在这个推导过程中，发生了两个核心变化：

- **从"强度"到"密度"**：在周期信号中，$a_k$ 代表具体的幅度（单位是伏特 V）。在单脉冲信号中，$X(j\omega)$ 代表的是频谱密度（单位是伏特/赫兹 V/Hz）。

- **求和变积分**：傅里叶级数的求和公式 $\sum a_k e^{jk\omega_0 t}$，在 $T \to \infty$ 的极限下，演变成了傅里叶逆变换的积分公式 $\frac{1}{2\pi} \int X(j\omega) e^{j\omega t} d\omega$。

**总结**

当你让周期 $T$ 消失（趋于无穷）时，原本分摊在每个谐波上的权重 $1/T$ 被抵消了，留下的就是那个描述脉冲形状的核心函数。

这也就是为什么：

- 周期方波：频谱是"梳状"的，包络线是 $\text{Sa}$ 函数。
- 单矩形脉冲：频谱直接就是那条连续的 $\text{Sa}$ 函数曲线。

这种从周期到非周期的演变，正是当年傅里叶提出"傅里叶变换"来解决非周期热传导问题的核心逻辑。

## 4.2 常见信号的傅里叶变换对

### 指数信号变换对

- **时域信号 $x(t)$：** $e^{-at}u(t), \quad a > 0$
- **频域变换 $X(j\omega)$：** $\displaystyle \frac{1}{a + j\omega}$

### 单位冲激函数变换对

- **时域信号 $x(t)$：** $\delta(t)$
- **频域变换 $X(j\omega)$：** $1$

### 矩形脉冲信号变换对

- **时域信号 $x(t)$：**

  $$x(t) = \begin{cases} 1, & |t| < T_1 \\ 0, & |t| > T_1 \end{cases}$$

- **频域变换 $X(j\omega)$：** $\displaystyle 2\frac{\sin \omega T_1}{\omega}$

## 4.3 周期信号的傅里叶变换

周期信号虽然不满足绝对可积条件，但可以通过引入**冲激函数** $\delta(\omega)$ 来表示其傅里叶变换。

### 1. 核心结论

若周期信号 $x(t)$ 的傅里叶级数系数为 $a_k$，则其傅里叶变换为一组位于谐波频率上的冲激序列：

$$X(j\omega) = \sum_{k=-\infty}^{+\infty} 2\pi a_k \delta(\omega - k \omega_0)$$

### 2. 例题：周期方波的傅里叶变换 (参考 `image_49b65f.jpg`)

**题目：** 已知周期方波信号，在一个周期内满足：

$$x(t) = \begin{cases} 1, & |t| < T_1 \\ 0, & T_1 < |t| < T/2 \end{cases}$$

**求解步骤：**

1. **求傅里叶级数系数** $a_k$**：**

   $$a_k = \frac{\sin(k \omega_0 T_1)}{k \pi} = \frac{2 \sin(k \omega_0 T_1)}{k \omega_0 T}$$

2. **利用公式转化为傅里叶变换：**

   $$X(j\omega) = \sum_{k=-\infty}^{+\infty} 2\pi \cdot \frac{2 \sin(k \omega_0 T_1)}{k \omega_0 T} \delta(\omega - k \omega_0)$$

   代入 $\omega_0 T = 2\pi$，化简得：

   $$X(j\omega) = \sum_{k=-\infty}^{+\infty} \frac{2 \sin(k \omega_0 T_1)}{k} \delta(\omega - k \omega_0)$$

## 4.4 连续时间傅里叶变换的性质

### 1. 基本性质

- **线性 (Linearity):** $ax(t) + by(t) \stackrel{\mathcal{F}}{\longleftrightarrow} aX(j\omega) + bY(j\omega)$
- **时移 (Time Shifting):** $x(t - t_0) \stackrel{\mathcal{F}}{\longleftrightarrow} e^{-j \omega t_0} X(j\omega)$
  - *注：时移不改变幅度谱，只引入线性相位偏移。*
- **共轭性质 (Conjugation):** $x^*(t) \stackrel{\mathcal{F}}{\longleftrightarrow} X^*(-j\omega)$

### 2. 实信号的对称性 (Symmetry for Real Signals)

若 $x(t)$ 为实信号（$x(t) = x^*(t)$），则满足：

$$X(j\omega) = X^*(-j\omega)$$

由此可推出：

1. **幅度谱** $|X(j\omega)|$**：** 偶对称（$|X(j\omega)| = |X(-j\omega)|$）。
2. **相位谱** $\angle X(j\omega)$**：** 奇对称（$\phi(\omega) = -\phi(-\omega)$）。

### 3. 特殊情形

- **实偶信号：** 若 $x(t)$ 是实且偶的，则 $X(j\omega)$ 也是**实且偶**的。
- **实奇信号：** 若 $x(t)$ 是实且奇的，则 $X(j\omega)$ 是**纯虚且奇**的。
- **分量对应关系：**
  - 时域的**偶分量** $x_e(t) \longleftrightarrow$ 频域的**实部** $\text{Re}\{X(j\omega)\}$
  - 时域的**奇分量** $x_o(t) \longleftrightarrow$ 频域的**虚部** $j\text{Im}\{X(j\omega)\}$

### 4. 应用举例：利用共轭对称特性计算双边指数信号的傅里叶变换

下图展示了如何利用傅里叶变换的共轭对称特性来简化双边指数信号的计算过程。

##### **目标：** 计算双边指数信号 $x(t) = e^{-\alpha|t|}$（其中 $\alpha > 0$）的傅里叶变换。

**计算步骤：**

**第一步：定义单边信号及其变换**

先考虑单边指数信号 $x_1(t) = e^{-\alpha t} u(t)$，其傅里叶变换为：

$$X_1(j\omega) = \frac{1}{\alpha + j\omega}$$

**第二步：复数展开**

对 $X_1(j\omega)$ 分母有理化，分离实部和虚部：

$$X_1(j\omega) = \frac{1}{\alpha + j\omega} \cdot \frac{\alpha - j\omega}{\alpha - j\omega} = \frac{\alpha}{\alpha^2 + \omega^2} - j\frac{\omega}{\alpha^2 + \omega^2}$$

即：

- 实部 $\text{Re}\{X_1(j\omega)\} = \displaystyle \frac{\alpha}{\alpha^2 + \omega^2}$
- 虚部 $\text{Im}\{X_1(j\omega)\} = \displaystyle \frac{-\omega}{\alpha^2 + \omega^2}$

**第三步：利用偶部特性**

由于 $x(t) = e^{-\alpha|t|}$ 是偶函数，它可以表示为 $x(t) = 2x_{1e}(t)$，其中 $x_{1e}(t)$ 是 $x_1(t)$ 的偶分量：

$$x_{1e}(t) = \frac{1}{2}[x_1(t) + x_1(-t)]$$

**第四步：应用共轭对称性质**

根据傅里叶变换的对称性质：**时域的偶分量对应频域的实部**，即 $\mathcal{F}\{x_e(t)\} = \text{Re}\{X(j\omega)\}$。

因此：

$$\mathcal{F}\{x(t)\} = 2\,\text{Re}\{X_1(j\omega)\} = 2 \cdot \frac{\alpha}{\alpha^2 + \omega^2} = \frac{2\alpha}{\alpha^2 + \omega^2}$$

**总结：** 这种方法避免了直接计算双边信号的积分 $\int_{-\infty}^{\infty} e^{-\alpha|t|} e^{-j\omega t} dt$，而是通过已知单边信号的变换结果，结合"时域偶部对应频域实部"这一性质直接得出答案。


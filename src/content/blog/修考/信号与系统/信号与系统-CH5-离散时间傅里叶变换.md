---
title: "第五章 离散时间傅里叶变换 (DTFT) 学习笔记"
slug: "信号与系统-CH5-离散时间傅里叶变换"
description: "信号与系统-CH5-离散时间傅里叶变换，待补充摘要。"
pubDate: 2026-05-16
updatedDate: 2026-05-16
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
heroImage: /images/posts/Signal-and-system/memo.jpg
---

<iframe src="https://drive.google.com/file/d/1AcpjV9NFNM9nzM_xe6p0fBxjygzPPlh9/preview" width="640" height="480"></iframe>

# 第五章 离散时间傅里叶变换 (DTFT) 学习笔记

本篇笔记系统地整理了离散时间非周期信号与周期信号的傅里叶变换（DTFT）表示，详细推导了三种经典信号的变换对，阐述了周期信号在 DTFT 框架下的冲激串表示法，并对 DTFT 的数学性质、收敛性以及 LTI 差分系统的频域分析进行了全面扩展。

## 5.1 非周期信号的表示：离散时间傅里叶变换 (DTFT)

### 5.1.1 从傅里叶级数（DFS）到傅里叶变换（DTFT）的直观理解

在连续时间信号中，一个周期连续信号的傅里叶系数可视为其单周期内非周期信号包络函数的采样值。随着信号周期 $T \to \infty$，频域中的采样样本会变得越来越密集，最终演变为连续的傅里叶变换。

在离散时间信号中，这一物理图像完全平行。

设 $\tilde{x}[n]$ 是一个周期为 $N$ 的离散周期信号，其基频为 $\omega_0 = \frac{2\pi}{N}$。其离散时间傅里叶级数（DFS）表示为：

$$\tilde{x}[n] = \sum_{k=\langle N \rangle} a_k e^{j k \omega_0 n}$$

其傅里叶级数系数 $a_k$ 为：

$$a_k = \frac{1}{N} \sum_{n=\langle N \rangle} \tilde{x}[n] e^{-j k \omega_0 n}$$

为了向非周期信号过渡，我们定义一个非周期信号 $x[n]$，它等于 $\tilde{x}[n]$ 的一个周期，而在其他地方为零：

$$x[n] = \begin{cases} \tilde{x}[n], & -\frac{N}{2} \le n \le \frac{N}{2} \\ 0, & \text{其他} \end{cases}$$

因此，系数 $a_k$ 可以写在无限区间上求和的形式：

$$a_k = \frac{1}{N} \sum_{n=-\infty}^{+\infty} x[n] e^{-j k \omega_0 n} = \frac{1}{N} X(e^{j k \omega_0})$$

其中，我们定义了包络函数（即 DTFT）$X(e^{j\omega})$：

$$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} x[n] e^{-j\omega n}$$

将 $a_k$ 代入 $\tilde{x}[n]$ 的合成公式中，并利用 $\frac{1}{N} = \frac{\omega_0}{2\pi}$：

$$\tilde{x}[n] = \sum_{k=\langle N \rangle} \frac{1}{N} X(e^{j k \omega_0}) e^{j k \omega_0 n} = \frac{1}{2\pi} \sum_{k=\langle N \rangle} X(e^{j k \omega_0}) e^{j k \omega_0 n} \omega_0$$

#### 极限演变 ($N \to \infty$)

随着周期 $N \to \infty$：

1. 基频 $\omega_0 = \frac{2\pi}{N} \to 0$（记作微分项 $d\omega$）。
2. 离散谐波频率 $k\omega_0$ 演变为连续频率变量 $\omega$。
3. 离散求和的区间 $\sum_{k=\langle N \rangle} \omega_0$（其总宽度为 $N \cdot \omega_0 = 2\pi$）演变为在一个长度为 $2\pi$ 的区间内的连续积分。
4. 周期信号 $\tilde{x}[n]$ 逼近非周期信号 $x[n]$。

由此，我们自然地导出了离散时间傅里叶逆变换（IDTFT）与正变换（DTFT）公式对：

> ### 离散时间傅里叶变换 (DTFT) 核心公式对
>
> **正变换（分析公式 - Analysis Equation）：**
>
> $$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} x[n] e^{-j\omega n}$$
>
> **逆变换（综合公式 - Synthesis Equation）：**
>
> $$x[n] = \frac{1}{2\pi} \int_{2\pi} X(e^{j\omega}) e^{j\omega n} d\omega$$
>
> *注：由于* $e^{-j\omega n}$ *关于* $\omega$ *是以* $2\pi$ *为周期的，因此 DTFT 谱函数* $X(e^{j\omega})$ *必然是一个以* $2\pi$ *为周期的连续函数。上述逆变换积分通常在* $[-\pi, \pi]$ *或* $[0, 2\pi]$ *区间内进行。*

### 5.1.2 离散时间傅里叶变换经典求法与例子

#### ① 例 1：单边指数衰减信号

**【题目】** 已知非周期序列：

$$x[n] = a^n u[n], \quad |a| < 1$$

求其 DTFT 响应 $X(e^{j\omega})$。

**【解】** 根据 DTFT 定义公式展开计算：

$$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} a^n u[n] e^{-j\omega n} = \sum_{n=0}^{+\infty} (a e^{-j\omega})^n$$

由于 $|a| < 1$ 且 $|e^{-j\omega}| = 1$，则该等比数列的公比满足 $|a e^{-j\omega}| = |a| < 1$。 利用无穷等比级数求和公式 $\sum_{n=0}^{\infty} q^n = \frac{1}{1-q}$，可直接得：

$$X(e^{j\omega}) = \frac{1}{1 - a e^{-j\omega}}$$

**【补充拓展（幅频与相频响应）】** 为了更好分析其物理特性，我们可将其化简为实部与虚部：

$$X(e^{j\omega}) = \frac{1}{1 - a\cos\omega + j a\sin\omega}$$

- **幅度谱（幅频响应）：**

  $$|X(e^{j\omega})| = \frac{1}{\sqrt{(1 - a\cos\omega)^2 + (a\sin\omega)^2}} = \frac{1}{\sqrt{1 - 2a\cos\omega + a^2}}$$

- **相位谱（相频响应）：**

  $$\angle X(e^{j\omega}) = -\arctan\left(\frac{a\sin\omega}{1 - a\cos\omega}\right)$$

#### ② 例 2：双边指数衰减信号

**【题目】** 已知非周期序列：

$$x[n] = a^{|n|}, \quad |a| < 1$$

求其 DTFT 响应 $X(e^{j\omega})$。

**【解】** 由于信号双边对称，我们可将其拆分为“负半轴（不含零）”与“正半轴（含零）”两部分进行求解：

$$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} a^{|n|} e^{-j\omega n} = \sum_{n=-\infty}^{-1} a^{-n} e^{-j\omega n} + \sum_{n=0}^{+\infty} a^n e^{-j\omega n}$$

- **第一部分（负半轴）：** 令 $m = -n$（对应的求和范围变为从 $1$ 到 $+\infty$）：

  $$\sum_{m=1}^{+\infty} a^m e^{j\omega m} = \sum_{m=1}^{+\infty} (a e^{j\omega})^m = \frac{a e^{j\omega}}{1 - a e^{j\omega}}$$

- **第二部分（正半轴）：** 同例 1 结论：

  $$\sum_{n=0}^{+\infty} (a e^{-j\omega})^n = \frac{1}{1 - a e^{-j\omega}}$$

- **合并两部分并通分化简：**

  $$\begin{aligned} X(e^{j\omega}) &= \frac{a e^{j\omega}}{1 - a e^{j\omega}} + \frac{1}{1 - a e^{-j\omega}} \\ &= \frac{a e^{j\omega}(1 - a e^{-j\omega}) + (1 - a e^{j\omega})}{(1 - a e^{j\omega})(1 - a e^{-j\omega})} \\ &= \frac{a e^{j\omega} - a^2 + 1 - a e^{j\omega}}{1 - a e^{j\omega} - a e^{-j\omega} + a^2} \\ &= \frac{1 - a^2}{1 - a(e^{j\omega} + e^{-j\omega}) + a^2} \end{aligned}$$

利用欧拉公式 $e^{j\omega} + e^{-j\omega} = 2\cos\omega$，最终整理可得：

$$X(e^{j\omega}) = \frac{1 - a^2}{1 - 2a\cos\omega + a^2}$$

*由结果可见，*$X(e^{j\omega})$ *是一个纯实数且关于* $\omega = 0$ *偶对称，这与时域信号* $x[n]$ *是实偶信号的性质完全吻合。*

#### ③ 例 3：对称离散矩形脉冲信号

**【题目】** 已知对称离散矩形脉冲信号：

$$x[n] = \begin{cases} 1, & |n| \le N_1 \\ 0, & |n| > N_1 \end{cases}$$

求其 DTFT 响应 $X(e^{j\omega})$。

**【解】** 依据定义直接展开：

$$X(e^{j\omega}) = \sum_{n=-N_1}^{N_1} 1 \cdot e^{-j\omega n}$$

这是一个首项为 $e^{j\omega N_1}$，公比为 $e^{-j\omega}$，项数为 $2N_1+1$ 的等比数列。利用求和公式可得：

$$X(e^{j\omega}) = e^{j\omega N_1} \sum_{k=0}^{2N_1} e^{-j\omega k} = e^{j\omega N_1} \cdot \frac{1 - e^{-j\omega(2N_1+1)}}{1 - e^{-j\omega}}$$

展开分子项：

$$X(e^{j\omega}) = \frac{e^{j\omega N_1} - e^{-j\omega(N_1+1)}}{1 - e^{-j\omega}}$$

**【核心配凑技巧：半角提取法】** 为了将指数形式化简为实数正弦比值的形式，我们在分子和分母中分别提取“指数均值半角项”，以配凑欧拉公式 $\sin\theta = \frac{e^{j\theta} - e^{-j\theta}}{2j}$：

- 分子提取 $e^{-j\omega/2}$：

  $$e^{j\omega N_1} - e^{-j\omega(N_1+1)} = e^{-j\omega/2} \left( e^{j\omega(N_1 + 1/2)} - e^{-j\omega(N_1 + 1/2)} \right)$$

- 分母提取 $e^{-j\omega/2}$：

  $$1 - e^{-j\omega} = e^{-j\omega/2} \left( e^{j\omega/2} - e^{-j\omega/2} \right)$$

将上述提取项代入原分式中，两者的 $e^{-j\omega/2}$ 刚好相消：

$$X(e^{j\omega}) = \frac{e^{j\omega(N_1 + 1/2)} - e^{-j\omega(N_1 + 1/2)}}{e^{j\omega/2} - e^{-j\omega/2}}$$

分子与分母同除以 $2j$，即可转换为正弦函数比：

$$X(e^{j\omega}) = \frac{\sin\left[\omega\left(N_1 + \frac{1}{2}\right)\right]}{\sin\left(\frac{\omega}{2}\right)}$$

*该结果被称为**狄里赫利核 (Dirichlet Kernel)**，在时域呈现矩形脉冲的信号，在频域呈现为周期性的 sinc 状包络波形。*

### 5.1.3 【新增重点】DTFT 的收敛条件

离散时间傅里叶变换的定义式中包含一个无穷级数求和。为了确保 $X(e^{j\omega})$ 存在（即级数收敛），信号必须满足以下条件之一：

1. **绝对可和条件（均匀收敛）：** 若信号 $x[n]$ 满足：

   $$\sum_{n=-\infty}^{+\infty} |x[n]| < \infty$$

   则其 DTFT $X(e^{j\omega})$ 必绝对收敛，并且 $X(e^{j\omega})$ 是关于 $\omega$ 的**连续函数**。

2. **平方可和条件（均方收敛）：** 若信号 $x[n]$ 的能量有限：

   $$\sum_{n=-\infty}^{+\infty} |x[n]|^2 < \infty$$

   虽然它不一定绝对可和，但其在均方误差意义下收敛：

   $$\lim_{M \to \infty} \int_{-\pi}^{\pi} \left| X(e^{j\omega}) - \sum_{n=-M}^{M} x[n] e^{-j\omega n} \right|^2 d\omega = 0$$

   *注：对于平方可和但不绝对可和的信号（例如理想低通滤波器的冲激响应* $h[n] = \frac{\sin \omega_c n}{\pi n}$*），在频域不连续点处会产生**吉布斯现象（Gibbs Phenomenon）**，产生约 9% 的峰值过冲。*

## 5.2 周期信号的离散时间傅里叶变换

### 5.2.1 引入思路与复指数信号的 DTFT

周期信号本身在时域能量无限，不满足上述收敛条件。但在引入狄拉克冲激函数（$\delta$ 冲激串）后，我们可以在广义函数的意义下，将周期信号统一纳入到 DTFT 的理论框架中。

在连续时间情况下，复指数信号 $e^{j\omega_0 t}$ 的傅里叶变换是频域中位于 $\omega = \omega_0$ 处的单个冲激。在离散时间情况下，由于 DTFT 具有以 $2\pi$ 为周期的特性，复指数信号在频域应当对应一个**周期性冲激串**。

> ### 【必须牢记的经典变换对】
>
> 时域复指数信号：
>
> $$x[n] = e^{j\omega_0 n}$$
>
> 对应频域 DTFT：
>
> $$X(e^{j\omega}) = \sum_{l=-\infty}^{+\infty} 2\pi \delta(\omega - \omega_0 - 2\pi l)$$

#### 验证证明：

将其代入逆变换（IDTFT）公式中进行反向推导。在任意一个大小为 $2\pi$ 的积分区间（例如 $\omega \in [\omega_0-\pi, \omega_0+\pi)$）内，求和式中仅包含 $l=0$ 这一个冲激：

$$x[n] = \frac{1}{2\pi} \int_{\omega_0-\pi}^{\omega_0+\pi} 2\pi \delta(\omega - \omega_0) e^{j\omega n} d\omega = e^{j\omega_0 n}$$

反向积分成立，证明了该变换对的正确性。

### 5.2.2 一般周期信号的傅里叶变换

设 $x[n]$ 为一个基波周期为 $N$ 的任意周期序列，其基频为 $\omega_0 = \frac{2\pi}{N}$。我们首先将其展开为离散时间傅里叶级数（DFS）的形式：

$$x[n] = \sum_{k=\langle N \rangle} a_k e^{j k \omega_0 n} = \sum_{k=\langle N \rangle} a_k e^{j k \left(\frac{2\pi}{N}\right) n}$$

利用 DTFT 的**线性性质**以及复指数信号的变换对，对公式两边直接进行离散时间傅里叶变换：

$$X(e^{j\omega}) = \sum_{k=\langle N \rangle} a_k \left[ \sum_{l=-\infty}^{+\infty} 2\pi \delta\left(\omega - \frac{2\pi k}{N} - 2\pi l\right) \right]$$

#### 核心简化逻辑（双重求和合并为单求和）

上式包含了一个对 $k$ 的单周期（共 $N$ 项）求和，以及一个对 $l$ 的无限求和。 由于：

$$\frac{2\pi k}{N} + 2\pi l = \frac{2\pi(k + lN)}{N}$$

令新变量 $m = k + lN$。 当 $k$ 在一个周期内（如 $0$ 至 $N-1$）滑动，而 $l$ 在所有整数范围 $(-\infty, +\infty)$ 内变化时，新变量 $m = k + lN$ 将会**不重不漏地遍历整个整数集合**。 因为傅里叶级数系数 $a_k$ 本身关于 $k$ 具有以 $N$ 为周期的性质（即 $a_k = a_{k+lN} = a_m$），所以双重求和可等价合并为一个单变量 $m$ 在所有整数范围内的求和：

$$\bbox[12px,border:2px solid #333]{X(e^{j\omega}) = \sum_{k=-\infty}^{+\infty} 2\pi a_k \delta\left(\omega - \frac{2\pi k}{N}\right)}$$

### 5.2.3 物理意义与两种理解方式

离散时间周期信号的 DTFT 具有非常直观的物理图像：

1. **频域离散冲激化：** 一个周期信号的 DTFT 在频域并不是连续分布的，而是由一串位于基频 $\omega_0 = \frac{2\pi}{N}$ 整数倍上的**离散冲激**组成的。

2. **位置：** 冲激产生的位置恰好位于各次谐波频率上：

   $$\omega = \frac{2\pi k}{N}$$

3. **强度（面积）：** 在每个谐波位置处的冲激强度，恰好等于其对应的傅里叶级数系数 $a_k$ 的 $2\pi$ 倍：

   $$\text{面积} = 2\pi a_k$$

通过这种离散冲激表述方法，傅里叶级数（DFS）与离散时间傅里叶变换（DTFT）在理论体系上达到了完美的统一。

## 5.3 【新增重点】离散时间傅里叶变换的性质

由于离散时间信号的自变量 $n$ 是离散的，其性质虽然与连续时间傅里叶变换（CTFT）高度平行，但在**时域扩展**、频域卷积（相乘性质）等方面存在独特的重要差异。

### 5.3.1 DTFT 基本性质汇总表

设 $x[n] \leftrightarrow X(e^{j\omega})$，$y[n] \leftrightarrow Y(e^{j\omega})$。

| 性质名称     | 时域序列                                        | 频域谱函数 $X(e^{j\omega})$                                  |
| ------------ | ----------------------------------------------- | ------------------------------------------------------------ |
| **周期性**   | $x[n]$                                          | $X(e^{j(\omega + 2\pi)}) = X(e^{j\omega})$                   |
| **线性**     | $a x[n] + b y[n]$                               | $a X(e^{j\omega}) + b Y(e^{j\omega})$                        |
| **时移**     | $x[n - n_0]$                                    | $e^{-j\omega n_0} X(e^{j\omega})$                            |
| **频移**     | $e^{j \omega_0 n} x[n]$                         | $X(e^{j(\omega - \omega_0)})$                                |
| **共轭性**   | $x^*[n]$                                        | $X^*(e^{-j\omega})$                                          |
| **时域反转** | $x[-n]$                                         | $X(e^{-j\omega})$                                            |
| **时域展宽** | $x_{(k)}[n]$                                    | $X(e^{j k\omega})$                                           |
| **频域微分** | $n x[n]$                                        | $j \frac{d}{d\omega} X(e^{j\omega})$                         |
| **时域差分** | $x[n] - x[n-1]$                                 | $(1 - e^{-j\omega}) X(e^{j\omega})$                          |
| **时域累加** | $\sum_{m=-\infty}^{n} x[m]$                     | $\frac{1}{1 - e^{-j\omega}} X(e^{j\omega}) + \pi X(e^{j0}) \sum_{l=-\infty}^{+\infty} \delta(\omega - 2\pi l)$ |
| **时域卷积** | $x[n] * y[n]$                                   | $X(e^{j\omega}) \cdot Y(e^{j\omega})$                        |
| **频域卷积** | $x[n] \cdot y[n]$                               | $\frac{1}{2\pi} \int_{2\pi} X(e^{j\theta}) Y(e^{j(\omega-\theta)}) d\theta$ (周期卷积) |
| **帕塞瓦尔** | $\sum_{n=-\infty}^{+\infty} \vert x[n] \vert^2$ | $\frac{1}{2\pi} \int_{2\pi} \vert X(e^{j\omega}) \vert^2 d\omega$ |

### 5.3.2 核心性质深度解析

#### 1. 时域展宽性质（离散时间特有）

在离散时间中，由于 $n$ 必须为整数，我们无法定义类似连续时间中的 $x(at)$（当 $a$ 不是整数时 $x[an]$ 无意义）。为此，我们定义一个**插零展宽信号** $x_{(k)}[n]$，其定义为：

$$x_{(k)}[n] = \begin{cases} x[n/k], & n \text{ 是 } k \text{ 的整倍数} \\ 0, & n \text{ 不是 } k \text{ 的整倍数} \end{cases}$$

其对应的 DTFT 为：

$$X_{(k)}(e^{j\omega}) = \sum_{m=-\infty}^{+\infty} x[m] e^{-j\omega (mk)} = X(e^{j k\omega})$$

*物理图像：时域上将点与点之间插入* $k-1$ *个零（展宽），在频域对应将频谱压缩至原来的* $1/k$*，周期从* $2\pi$ *变为* $2\pi/k$*。*

#### 2. 卷积性质（核心考点）

时域的卷积运算对应频域的相乘运算：

$$y[n] = x[n] * h[n] \longleftrightarrow Y(e^{j\omega}) = X(e^{j\omega}) H(e^{j\omega})$$

该性质是将复杂的时域差分/卷积计算化简为代数相乘的物理基础，极大地便利了 LTI 系统的分析。

#### 3. 相乘（调制）性质（频域周期卷积）

两个时域信号相乘，其频域谱对应**在** $2\pi$ **周期内的周期卷积**：

$$y[n] = x[n] \cdot s[n] \longleftrightarrow Y(e^{j\omega}) = \frac{1}{2\pi} \int_{2\pi} X(e^{j\theta}) S(e^{j(\omega-\theta)}) d\theta$$

在涉及数字通信系统调制、解调或信号窗化截断分析时，此性质是核心工具。

## 5.4 【新增重点】常系数线性差分方程描述的 LTI 系统

在工程实际中，离散 LTI 系统常使用**常系数线性差分方程**来描述：

$$\sum_{k=0}^{N} a_k y[n-k] = \sum_{m=0}^{M} b_m x[n-m]$$

为了求该系统的**频率响应** $H(e^{j\omega})$，我们可以直接利用 DTFT 的**时移性质**与**线性性质**：

### 5.4.1 频率响应的通用解析式推导

对差分方程两边同时取 DTFT：

$$\sum_{k=0}^{N} a_k e^{-j\omega k} Y(e^{j\omega}) = \sum_{m=0}^{M} b_m e^{-j\omega m} X(e^{j\omega})$$

提取公因式 $Y(e^{j\omega})$ 与 $X(e^{j\omega})$：

$$Y(e^{j\omega}) \left[ \sum_{k=0}^{N} a_k e^{-j\omega k} \right] = X(e^{j\omega}) \left[ \sum_{m=0}^{M} b_m e^{-j\omega m} \right]$$

因此，系统的频率响应可直接表示为两个复指数多项式的有理分式：

$$\bbox[12px,border:2px solid #333]{H(e^{j\omega}) = \frac{Y(e^{j\omega})}{X(e^{j\omega})} = \frac{\sum_{m=0}^{M} b_m e^{-j\omega m}}{\sum_{k=0}^{N} a_k e^{-j\omega k}}}$$

### 5.4.2 典型例题

**【题目】** 已知一个一阶有源低通滤波器系统的差分方程为：

$$y[n] - a y[n-1] = x[n], \quad |a| < 1$$

1. 求系统的频率响应 $H(e^{j\omega})$。
2. 求系统的单位脉冲响应 $h[n]$。

**【解】**

1. 对方程两边直接取 DTFT：

   $$Y(e^{j\omega}) - a e^{-j\omega} Y(e^{j\omega}) = X(e^{j\omega})$$

   整理变形得：

   $$Y(e^{j\omega})(1 - a e^{-j\omega}) = X(e^{j\omega})$$

   从而求得频率响应为：

   $$H(e^{j\omega}) = \frac{1}{1 - a e^{-j\omega}}$$

2. 利用例 1 已经推导的傅里叶变换对：

   $$a^n u[n] \longleftrightarrow \frac{1}{1 - a e^{-j\omega}}$$

   通过直接观察逆变换法，可得系统的单位脉冲响应为：

   $$h[n] = a^n u[n]$$

## 5.5 【新增重点】傅里叶分析的对偶性（Duality）对比

在学习信号与系统时，**对偶性**能极大减轻我们记忆公式的负担。我们需要对比连续时间（CT）与离散时间（DT）中对偶性的微妙差异：

1. **CTFT 的高度对称性：** 在连续时间中，时域和频域都是连续、非周期的。因此 CTFT 具有高度完美的对称性（若 $x(t) \leftrightarrow X(j\omega)$，则 $X(t) \leftrightarrow 2\pi x(-\omega)$）。
2. **DTFT 的不对称性：** 在离散时间中，由于时域是离散的，导致频域必然是周期的。时域离散性与频域周期性打破了这种直接的“时域-频域”对称性。因此，**DTFT 自身不存在完美的时频对偶关系**。
3. **广义上的对偶性（跨域对偶）：** 虽然 DTFT 没有自身的直接对偶，但离散时间傅里叶变换（DTFT）与连续时间傅里叶级数（CTFS）之间构成了跨域的对偶对：
   - **CTFS：** 连续周期信号（时域连续周期）$\longleftrightarrow$ 离散非周期频谱（频域离散非周期）。
   - **DTFT：** 离散非周期信号（时域离散非周期）$\longleftrightarrow$ 连续周期频谱（频域连续周期）。
   - **DFS（离散傅里叶级数）\**本身由于时域、频域都是离散且周期的，因此\**存在完美的自对偶性**。

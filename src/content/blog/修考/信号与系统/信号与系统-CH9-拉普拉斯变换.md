---
title: "信号与系统-CH9-拉普拉斯变换"
slug: "信号与系统-CH9-拉普拉斯变换"
description: "信号与系统-CH9-拉普拉斯变换，待补充摘要。"
pubDate: 2026-05-30
updatedDate: 2026-05-30
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

# 拉普拉斯变换

- 【【官方双语】拉普拉斯变换（二）：到底什么是拉普拉斯变换？】 https://www.bilibili.com/video/BV1AfqaB9Ex2/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- [單元 36．拉普拉斯轉換的電路分析 - 複頻域簡介及其電路法則](https://www.youtube.com/watch?v=aRE1OF7hJUg&list=PL68D2uCy1WTMtp1m5TEJbKEt4kvlA4jLP&index=37)



# 拉普拉斯变换（Laplace Transform）系统化学习笔记

## 第一部分：拉普拉斯变换的基本定义与物理意义

### 1.1 积分变换的通用公式

积分变换（Integral Transform）的本质是通过一个选定的**核函数（Kernel）** $K(s,t)$，将时域中的连续函数 $f(t)$ 映射到另一个更容易求解的复频域空间（如 $s$ 域或 $\omega$ 域）：

$$F(s) = \int_{a}^{b} f(t) K(s,t) \, dt$$

- 在傅里叶变换（Fourier Transform）中：核函数 $K(s,t) = e^{-j\omega t}$，积分区间为实数全域 $(-\infty, \infty)$。
- 在拉普拉斯变换（Laplace Transform）中：核函数 $K(s,t) = e^{-st}$。

### 1.2 单边拉普拉斯变换的严格定义

在实际工程分析（如电路分析、信号与系统、控制理论）中，由于我们往往关注系统自 $t=0$ 之后加入输入信号的响应，因此主要采用**单边拉普拉斯变换（One-sided Laplace Transform）**：

$$\mathcal{L}[f(t)] = F(s) = \int_{0^-}^{\infty} f(t) e^{-st} \, dt$$

> **💡 订正说明（关于** $0^-$ **下限）：** 你的手写笔记中写作 $\int_{0}^{\infty}$。在工程上，为了能够完整、无遗漏地覆盖到可能在 $t=0$ 时刻发生突变或作用的**单位冲激函数** $\delta(t)$，通常将单边积分的下限严格定义为 $0^-$（即 $0$ 的左侧极限处）。

### 1.3 算子 $s$ 的物理意义

在变换中，自变量 $s$ 是一个复变量（Complex Variable），称为**复频率（Complex Frequency）**：

$$s = \sigma + j\omega$$

- $\sigma$**（实部）：** 代表衰减因子（Neper frequency），单位为奈培/秒（$\text{Np/s}$），反映信号的指数衰减或增长速度。
- $\omega$**（虚部）：** 代表角频率（Angular frequency），单位为弧度/秒（$\text{rad/s}$），反映信号的等幅振荡速度。

#### 复频域（$s$-Domain）的量纲分析

因为公式中指数项 $s \cdot t$ 必须是一个无量纲（dimensionless）的纯数：

- 时间 $t$ 的单位为秒（$\text{s}$），
- 因此复频率 $s$ 的单位必须是时间秒的倒数，即 $\text{s}^{-1}$**（频率单位）**。
- 因此，$s$-domain 也被称为**复频域**。

### 1.4 拉普拉斯逆变换（Inverse Laplace Transform）

将复频域信号 $F(s)$ 还原为时域信号 $f(t)$ 的数学公式为：

$$\mathcal{L}^{-1}[F(s)] = f(t) = \frac{1}{2\pi j} \int_{\sigma_1 - j\infty}^{\sigma_1 + j\infty} F(s) e^{st} \, ds \quad (t \ge 0)$$

*该公式称为 Bromwich 积分。由于该积分涉及复变函数中的复轮廓积分（围道积分），计算极其繁琐。在实际工程与做题中，我们**几乎从不直接使用此积分**，而是通过 **部分分式展开法（Partial Fraction Expansion）** 结合 **常用变换对** 进行逆变换求解。*

## 第二部分：为什么要引入拉普拉斯变换？

在电路暂态分析和控制系统分析中，拉普拉斯变换具有压倒性的优势：

1. **化微积分为代数**：它能够将时域中复杂的**微积分运算（微分方程）**，转化为复频域中极其简单的**代数乘除运算（代数方程）**。
2. **暂态/瞬态分析的绝对利器**：相比于经典时域求解微分方程法，拉普拉斯变换在求导性质中，可以天然、自动地将电路元件（如电容、电感）的初始状态（Initial Conditions）一步带入计算，无需在求出通解后再去繁琐地套用边界条件求特解。
3. **对相量法（Phasor Method）的终极推广**：
   - **相量法（Phasor Domain）**：仅适用于求解**正弦稳态电路**，它只能处理单一频率的正弦信号，相当于将时域直接映射到了特定频率的相量域。
   - **拉普拉斯变换（**$s$**-Domain）**：不仅可以分析稳态，更能分析各种输入源（突变步骤信号、冲激信号、指数信号等）作用下的**暂态响应（Transient Response）**。当复频率 $s = \sigma + j\omega$ 中的实部 $\sigma = 0$ 且系统稳定时，拉普拉斯变换就会平滑地退化为稳态下的傅里叶变换/相量分析法。

## 第三部分：常用拉普拉斯变换对（Common Transform Pairs）

下面是高频常用的拉普拉斯变换对照表，要求熟练记忆（默认时域函数均在 $t \ge 0$ 下作用，即隐含乘上 $u(t)$）：

| 信号名称               | 时域函数 $f(t)$ ($t \ge 0$) | 复频域函数 $F(s)$             | 备注                                              |
| ---------------------- | --------------------------- | ----------------------------- | ------------------------------------------------- |
| **单位冲激函数**       | $\delta(t)$                 | $1$                           | 频谱在全频段等幅分布                              |
| **单位阶跃函数**       | $u(t)$                      | $\frac{1}{s}$                 | 最基础的控制输入信号                              |
| **斜坡函数（幂函数）** | $t$                         | $\frac{1}{s^2}$               | 一般通式：$\mathcal{L}[t^n] = \frac{n!}{s^{n+1}}$ |
| **二次幂函数**         | $t^2$                       | $\frac{2}{s^3}$               | 代入上述通式 $n=2$ 的结果                         |
| **指数衰减函数**       | $e^{-at}$                   | $\frac{1}{s+a}$               | 极点位于 $s = -a$                                 |
| **正弦信号**           | $\sin(\omega t)$            | $\frac{\omega}{s^2+\omega^2}$ | 极点位于纯虚轴 $\pm j\omega$                      |
| **余弦信号**           | $\cos(\omega t)$            | $\frac{s}{s^2+\omega^2}$      | 分子为 $s$                                        |

## 第四部分：拉普拉斯变换的核心性质

### 性质一：时域微分性质（Time Differentiation）

在一阶微分情况下：

$$\mathcal{L}\left[ \frac{df(t)}{dt} \right] = sF(s) - f(0^-)$$

推广到更高阶微分（如二阶微分）：

$$\mathcal{L}\left[ \frac{d^2f(t)}{dt^2} \right] = s^2F(s) - sf(0^-) - f'(0^-)$$

> **🔑 物理诠释：** 在时域中进行一次求导，相当于在复频域直接乘以 $s$，但需要减去与初值相关的修正项。若系统的初始状态为零（零状态，即 $f(0^-) = 0$），则时域的求导直接等效于 $s$-Domain 里的乘法：$\frac{d}{dt} \Longleftrightarrow \times s$。

### 性质二：时域积分性质（Time Integration）

在时域上从 $0^-$ 到 $t$ 进行积分：

$$\mathcal{L}\left[ \int_{0^-}^{t} f(\tau) \, d\tau \right] = \frac{F(s)}{s}$$

> **🔑 物理诠释：** 时域积分为累积效应，映射到复频域表现为直接除以 $s$。即：$\int \, dt \Longleftrightarrow \div s$。

### 性质三：复平移性质（频移性质，S-Domain Translation）

若 $\mathcal{L}[f(t)] = F(s)$，则时域函数乘以指数衰减因子 $e^{-at}$，对应在复频域中将自变量 $s$ 平移 $a$：

$$\mathcal{L}[f(t)e^{-at}] = F(s+a)$$

> **💡 解决你的笔记疑惑：“我总感觉和 Fourier transform 转向相反”**
>
> 这是一个非常经典的直觉，但实际上两者的数学转向在本质上是**完美一致**的！
>
> - **傅里叶变换的频移性质**：
>
>   $$f(t) e^{j\omega_0 t} \Longleftrightarrow F(\omega - \omega_0)$$
>
>   *(时域乘以正指数* $e^{j\omega_0 t}$*，频域轴发生**右移**（减去* $\omega_0$*）)*
>
> - **拉普拉斯变换的频移性质**：
>
>   $$f(t) e^{-at} \Longleftrightarrow F(s+a)$$
>
>   *(时域乘以负指数* $e^{-at}$*，复频域发生**左移**（加上* $a$*），极点向左侧半平面移动)*
>
> 如果我们令复指数中的实部为正，将拉普拉斯变换平移改写为：$\mathcal{L}[f(t)e^{s_0 t}] = F(s - s_0)$，你会发现它的符号和傅里叶变换是一模一样的！之所以手写笔记中是加号 $s+a$，是因为时域相乘的是**负指数衰减项** $e^{-at}$（即这里的 $s_0 = -a$）。

## 第五部分：典型例题（性质的应用）

### 【例题 6.1 (1)】

**题目**：已知时域信号 $v(t) = t^2 e^{-at}$，求其拉普拉斯变换 $V(s)$。

**解析**：

1. 首先找出基础时域信号的变换。我们知道幂函数：

   $$\mathcal{L}[t^2] = \frac{2!}{s^3} = \frac{2}{s^3}$$

2. 应用**复平移性质**：当 $t^2$ 乘上指数项 $e^{-at}$ 时，只需将复频域中所有的 $s$ 直接替换为 $(s+a)$。

3. 由此得出：

   $$V(s) = \frac{2}{(s+a)^3}$$

### 【例题 6.1 (2)】

**题目**：已知时域信号 $v(t) = \sin(\omega t + \theta)$，求其拉普拉斯变换 $V(s)$。

**解析**：

1. 由于初相位 $\theta$ 导致其不是标准的正弦信号，因此我们可以使用**三角恒等式**将其在时域中展开：

   $$v(t) = \sin(\omega t) \cos\theta + \cos(\omega t) \sin\theta$$

2. 注意到 $\cos\theta$ 和 $\sin\theta$ 都是常系数。根据拉普拉斯变换的**线性性质（Linearity）**，常数可以直接提到变换算子外部：

   $$V(s) = \mathcal{L}[\sin(\omega t) \cos\theta] + \mathcal{L}[\cos(\omega t) \sin\theta]$$

   $$V(s) = \cos\theta \cdot \mathcal{L}[\sin(\omega t)] + \sin\theta \cdot \mathcal{L}[\cos(\omega t)]$$

3. 代入标准正弦、余弦变换对照：

   $$V(s) = \cos\theta \cdot \frac{\omega}{s^2+\omega^2} + \sin\theta \cdot \frac{s}{s^2+\omega^2}$$

4. 合并分子，得到最终结果：

   $$V(s) = \frac{s \sin\theta + \omega \cos\theta}{s^2+\omega^2}$$

### 【例题 6.1 (3)】

**题目**：已知时域信号 $v(t) = \frac{d}{dt} \left( e^{-at} \sin\omega t \right)$，求其拉普拉斯变换 $V(s)$。

**解析（提供两种完全等价的推导方法，帮助加深理解）：**

#### 方法一：直接套用一阶微分性质（最简洁、推荐）

1. 设内部子信号为 $g(t) = e^{-at} \sin\omega t$。

2. 首先应用复平移性质求出 $G(s)$。因为已知 $\mathcal{L}[\sin\omega t] = \frac{\omega}{s^2+\omega^2}$，乘以 $e^{-at}$ 后，自变量 $s \to s+a$：

   $$G(s) = \mathcal{L}[e^{-at} \sin\omega t] = \frac{\omega}{(s+a)^2 + \omega^2}$$

3. 计算子信号在 $t=0^-$ 时刻的初始值：

   $$g(0^-) = \left. e^{-at} \sin\omega t \right|_{t=0^-} = e^0 \cdot \sin(0) = 0$$

4. 根据**一阶微分性质**，微分对应的变换为：

   $$V(s) = sG(s) - g(0^-) = s \cdot \frac{\omega}{(s+a)^2 + \omega^2} - 0$$

5. 得出最终结果：

   $$V(s) = \frac{s\omega}{(s+a)^2 + \omega^2}$$

#### 方法二：先在时域求导，再进行变换（物理推导法）

1. 在时域中对 $v(t)$ 使用乘法求导法则（Leibniz rule）：

   $$v(t) = \frac{d}{dt} \left( e^{-at} \sin\omega t \right) = -a e^{-at} \sin\omega t + \omega e^{-at} \cos\omega t$$

2. 由于线性性质，我们分别求两项的拉普拉斯变换：

   $$V(s) = -a \mathcal{L}[e^{-at} \sin\omega t] + \omega \mathcal{L}[e^{-at} \cos\omega t]$$

3. 根据复平移性质代入变换对：

   - $\mathcal{L}[e^{-at} \sin\omega t] = \frac{\omega}{(s+a)^2+\omega^2}$
   - $\mathcal{L}[e^{-at} \cos\omega t] = \frac{s+a}{(s+a)^2+\omega^2}$

4. 代入并通分合并：

   $$V(s) = \frac{-a\omega + \omega(s+a)}{(s+a)^2 + \omega^2} = \frac{-a\omega + s\omega + a\omega}{(s+a)^2 + \omega^2} = \frac{s\omega}{(s+a)^2 + \omega^2}$$

   *(两种求解方法的答案高度一致，证明了微积分化为代数性质的正确性)*

## 第六部分：部分分式展开法（Partial Fraction Expansion）

对于实际电路系统函数，最常见的形式是两个多项式的商 $F(s) = \frac{N(s)}{D(s)}$。若该分式为**真分式**（分母 $D(s)$ 的最高次数 $n$ 大于分子 $N(s)$ 的最高次数 $m$），我们根据分母极点（分母的根）的不同，分为三种展开模式进行逆变换。

### 情况 ①：单极点情况（Distinct Real Roots / Simple Poles）

如果分母 $D(s) = 0$ 拥有 $n$ 个**各不相同**的实根（简单极点） $p_1, p_2, \dots, p_n$，则 $F(s)$ 可以被拆解为：

$$F(s) = \frac{K_1}{s - p_1} + \frac{K_2}{s - p_2} + \dots + \frac{K_n}{s - p_n}$$

其中，每一个拆解系数 $K_i$（称为该极点处的**留数 Residue**）可以使用掩盖法（Heaviside Method）计算：

$$K_i = \left. (s - p_i) F(s) \right|_{s = p_i}$$

时域逆变换为指数信号的和：

$$f(t) = \left( K_1 e^{p_1 t} + K_2 e^{p_2 t} + \dots + K_n e^{p_n t} \right) u(t)$$

#### 【例题 1】

**题目**：已知复频域表达式如下，求其时域逆变换 $v(t)$：

$$V(s) = \frac{7s^2 + 35s + 144}{(s+3)(s+4)(s+5)}$$

**解析**：

1. 极点为三个不同的简单极点：$s = -3, -4, -5$。

2. 设展开形式为：

   $$V(s) = \frac{K_1}{s+3} + \frac{K_2}{s+4} + \frac{K_3}{s+5}$$

3. 利用公式计算留数 $K_1, K_2, K_3$：

   - **计算** $K_1$：

     $$K_1 = \left. (s+3) V(s) \right|_{s=-3} = \left. \frac{7s^2 + 35s + 144}{(s+4)(s+5)} \right|_{s=-3}$$

     $$K_1 = \frac{7(-3)^2 + 35(-3) + 144}{(-3+4)(-3+5)} = \frac{63 - 105 + 144}{(1)(2)} = \frac{102}{2} = 51$$

   - **计算** $K_2$：

     $$K_2 = \left. (s+4) V(s) \right|_{s=-4} = \left. \frac{7s^2 + 35s + 144}{(s+3)(s+5)} \right|_{s=-4}$$

     $$K_2 = \frac{7(-4)^2 + 35(-4) + 144}{(-4+3)(-4+5)} = \frac{112 - 140 + 144}{(-1)(1)} = \frac{116}{-1} = -116$$

   - **计算** $K_3$：

     $$K_3 = \left. (s+5) V(s) \right|_{s=-5} = \left. \frac{7s^2 + 35s + 144}{(s+3)(s+4)} \right|_{s=-5}$$

     $$K_3 = \frac{7(-5)^2 + 35(-5) + 144}{(-5+3)(-5+4)} = \frac{175 - 175 + 144}{(-2)(-1)} = \frac{144}{2} = 72$$

4. 代回展开式：

   $$V(s) = \frac{51}{s+3} - \frac{116}{s+4} + \frac{72}{s+5}$$

5. 进行逆变换（由于是单边变换，时域需乘上阶跃函数 $u(t)$）：

   $$v(t) = \left( 51 e^{-3t} - 116 e^{-4t} + 72 e^{-5t} \right) u(t)$$

#### 【例题 2】

**题目**：已知系统函数 $F(s) = \frac{96(s+5)(s+12)}{s(s+8)(s+6)}$，求其拉普拉斯逆变换 $f(t)$。

**解析**：

1. 分母根为 $s = 0, -8, -6$。写出展开形式：

   $$F(s) = \frac{K_1}{s} + \frac{K_2}{s+8} + \frac{K_3}{s+6}$$

2. 计算留数：

   - **计算** $K_1$：

     $$K_1 = \left. s F(s) \right|_{s=0} = \left. \frac{96(s+5)(s+12)}{(s+8)(s+6)} \right|_{s=0} = \frac{96(5)(12)}{(8)(6)} = \frac{5760}{48} = 120$$

   - **计算** $K_2$：

     $$K_2 = \left. (s+8) F(s) \right|_{s=-8} = \left. \frac{96(s+5)(s+12)}{s(s+6)} \right|_{s=-8} = \frac{96(-8+5)(-8+12)}{-8(-8+6)}$$

     $$K_2 = \frac{96(-3)(4)}{16} = 6 \cdot (-12) = -72$$

   - **计算** $K_3$：

     $$K_3 = \left. (s+6) F(s) \right|_{s=-6} = \left. \frac{96(s+5)(s+12)}{s(s+8)} \right|_{s=-6} = \frac{96(-6+5)(-6+12)}{-6(-6+8)}$$

     $$K_3 = \frac{96(-1)(6)}{-12} = 8 \cdot 6 = 48$$

3. 代回展开式：

   $$F(s) = \frac{120}{s} - \frac{72}{s+8} + \frac{48}{s+6}$$

4. 时域逆变换：

   $$f(t) = \left( 120 - 72 e^{-8t} + 48 e^{-6t} \right) u(t)$$

### 情况 ②：共轭复根情况（Complex Conjugate Poles）

当分母 $D(s)$ 中存在无法在实域分解的二次项时，系统极点必为一对共轭复数：

$$p_{1,2} = \alpha \pm j\beta$$

这种情况下，展开式对应的系数也是共轭复数（$K_2$ 和 $K_2^*$）：

$$V(s) = \frac{K_1}{s - p_1} + \frac{K_2}{s - ( \alpha + j\beta )} + \frac{K_2^*}{s - ( \alpha - j\beta )}$$

其中，通过极坐标系表示复留数：$K_2 = |K_2| e^{j\theta}$。 此时，后面的两项共轭复极点在时域合并后，会直接组合为一个**衰减余弦信号**：

$$v_{\text{conjugate}}(t) = 2 |K_2| e^{\alpha t} \cos(\beta t + \theta) u(t)$$

#### 【例题 3】

**题目**：已知系统电压的 $s$ 域函数如下，求时域响应 $v(t)$：

$$V(s) = \frac{100(s+3)}{(s+6)(s^2+6s+25)}$$

**解析**：

1. **极点分析**：

   - 实极点：$s = -6$。
   - 共轭复极点：令 $s^2+6s+25 = 0 \implies (s+3)^2 + 4^2 = 0 \implies s = -3 \pm j4$（其中 $\alpha = -3$，$\beta = 4$）。

2. **写出部分分式展开式**：

   $$V(s) = \frac{K_1}{s+6} + \frac{K_2}{s - (-3+j4)} + \frac{K_2^*}{s - (-3-j4)}$$

3. **计算实极点留数** $K_1$：

   $$K_1 = \left. (s+6)V(s) \right|_{s=-6} = \left. \frac{100(s+3)}{s^2+6s+25} \right|_{s=-6}$$

   $$K_1 = \frac{100(-6+3)}{(-6)^2 + 6(-6) + 25} = \frac{-300}{36-36+25} = \frac{-300}{25} = -12$$

4. **计算复极点留数** $K_2$：

   $$K_2 = \left. [s - (-3+j4)] V(s) \right|_{s = -3+j4} = \left. \frac{100(s+3)}{(s+6)(s + 3 + j4)} \right|_{s = -3+j4}$$

   代入 $s = -3+j4$（注意：时域代入后分子变为 $100(j4)$）：

   $$K_2 = \frac{100(j4)}{(-3+j4+6)(j8)} = \frac{j400}{(3+j4)(j8)} = \frac{j400}{-32 + j24}$$

   分子和分母同除以 $8$ 以化简：

   $$K_2 = \frac{j50}{-4 + j3}$$

   分子分母同乘以分母共轭项 $-4-j3$ 展开：

   $$K_2 = \frac{j50(-4-j3)}{(-4)^2+3^2} = \frac{-j200 - j^2(150)}{25} = \frac{150 - j200}{25} = 6 - j8$$

5. **转化为复数的指数极坐标形式**：

   - 幅值 $|K_2| = \sqrt{6^2 + (-8)^2} = \sqrt{100} = 10$
   - 相角 $\theta = \arctan\left( \frac{-8}{6} \right) \approx -53.13^\circ$
   - 所以复留数为：$K_2 = 10 e^{-j53.13^\circ}$

6. **时域组合还原**：

   $$v(t) = K_1 e^{-6t} + K_2 e^{(-3+j4)t} + K_2^* e^{(-3-j4)t}$$

   $$v(t) = -12 e^{-6t} + 10 e^{-j53.13^\circ} e^{-3t} e^{j4t} + 10 e^{j53.13^\circ} e^{-3t} e^{-j4t}$$

   $$v(t) = -12 e^{-6t} + 10 e^{-3t} \left[ e^{j(4t - 53.13^\circ)} + e^{-j(4t - 53.13^\circ)} \right]$$

   利用欧拉公式 $e^{j\phi} + e^{-j\phi} = 2 \cos\phi$ 合并共轭对：

   $$v(t) = \left[ -12 e^{-6t} + 20 e^{-3t} \cos(4t - 53.13^\circ) \right] u(t) \text{ V}$$

### 情况 ③：重极点情况（Repeated Poles） —— 补充内容

若分母中含有重数为 $r$ 的重复实根（重极点），即 $D(s)$ 包含 $(s - p_1)^r$ 项，那么该部分的展开式必须展开为**降幂分布**的多项式之和：

$$F(s) = \frac{D_r}{(s-p_1)^r} + \frac{D_{r-1}}{(s-p_1)^{r-1}} + \dots + \frac{D_1}{s-p_1} + \text{其他极点项}$$

其中，各系数的通用求导公式为：

- 最高次数系数 $D_r$：

  $$D_r = \left. (s-p_1)^r F(s) \right|_{s = p_1}$$

- 第 $k$ 级降幂系数 $D_{r-k}$：

  $$D_{r-k} = \frac{1}{k!} \left. \frac{d^k}{ds^k} \left[ (s-p_1)^r F(s) \right] \right|_{s = p_1}$$

#### 【新增例题 4（重极点补充案例）】

**题目**：已知复频域信号 $F(s) = \frac{2s+5}{(s+1)^2(s+2)}$，求其拉普拉斯逆变换 $f(t)$。

**解析**：

1. **极点分析**：

   - 单极点：$s = -2$。
   - 重极点：$s = -1$，重数 $r = 2$。

2. **设展开分式**：

   $$F(s) = \frac{D_2}{(s+1)^2} + \frac{D_1}{s+1} + \frac{K}{s+2}$$

3. **计算简单极点留数** $K$：

   $$K = \left. (s+2) F(s) \right|_{s=-2} = \left. \frac{2s+5}{(s+1)^2} \right|_{s=-2} = \frac{2(-2)+5}{(-2+1)^2} = \frac{1}{1} = 1$$

4. **计算重极点最高阶系数** $D_2$：

   $$D_2 = \left. (s+1)^2 F(s) \right|_{s=-1} = \left. \frac{2s+5}{s+2} \right|_{s=-1} = \frac{2(-1)+5}{-1+2} = \frac{3}{1} = 3$$

5. **计算重极点一阶导数系数** $D_1$：

   $$D_1 = \left. \frac{d}{ds} \left[ (s+1)^2 F(s) \right] \right|_{s=-1} = \left. \frac{d}{ds} \left[ \frac{2s+5}{s+2} \right] \right|_{s=-1}$$

   利用分式求导法则 $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ 求解导数部分：

   $$\frac{d}{ds}\left( \frac{2s+5}{s+2} \right) = \frac{2(s+2) - (2s+5)(1)}{(s+2)^2} = \frac{2s+4-2s-5}{(s+2)^2} = \frac{-1}{(s+2)^2}$$

   代入 $s = -1$：

   $$D_1 = \left. \frac{-1}{(s+2)^2} \right|_{s=-1} = \frac{-1}{(-1+2)^2} = -1$$

6. **代回部分分式表达式**：

   $$F(s) = \frac{3}{(s+1)^2} - \frac{1}{s+1} + \frac{1}{s+2}$$

7. **求时域逆变换**： 利用变换对照表，因为已知时域斜坡乘以指数：$\mathcal{L}[t e^{-t}] = \frac{1}{(s+1)^2}$。 所以时域表达式为：

   $$f(t) = \left( 3t e^{-t} - e^{-t} + e^{-2t} \right) u(t)$$

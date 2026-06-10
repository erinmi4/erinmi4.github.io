---
title: "概率论-CH7-连续概率分布"
slug: "概率论-CH7-连续概率分布"
description: "概率论-CH7-连续概率分布，待补充摘要。"
pubDate: 2026-05-27
updatedDate: 2026-05-27
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

https://www.eecs70.org/assets/pdf/notes/n20.pdf

https://gemini.google.com/app/9e0ffeb20726675f

# 连续概率分布 (Continuous Probability Distributions)

> 本笔记整理自手写课堂笔记与 CS 70 课程教材 (Note 20)，对公式进行了严谨的推导，并针对手写笔记中的重点疑问进行了直观解答。

## 一、 连续均匀概率空间 (Continuous Uniform Probability Space)

![Uniform Distribution EXPLAINED with ...](data:image/png;base64,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)

### 1. 核心动机：从离散走向连续

在离散概率空间中，样本点 $\omega \in \Omega$ 是有限或可数无限的，我们可以为每一个点赋予一个具体的概率值 $P[\omega]$。 然而，在现实世界中，许多物理量是连续的（例如：幸运转盘指针停留的位置、粒子的位置、某事件发生的时间等）。

若设均匀转盘的周长为 $l$，则指针的位置可能落在区间 $[0, l]$ 内的任何实数。如果尝试用离散的方法对连续空间建模：

- 若每个点的概率 $P[\omega] > 0$，由于区间内有无穷多个实数点，所有点的概率之和将趋向于 $\infty$。
- 若每个点的概率 $P[\omega] = 0$，则无法通过简单求和来计算任何事件的概率。

### 2. 解决方案：关注区间的占比

在连续概率中，我们不再对“点”赋予概率，而是对“区间（事件）”赋予概率。 对于均匀概率空间，区间 $[a, b] \subseteq [0, l]$（其中 $b > a$）的概率与该区间的**长度占比**成正比：

$$P[a \le X \le b] = \frac{\text{区间 } [a, b] \text{ 的长度}}{\text{区间 } [0, l] \text{ 的长度}} = \frac{b-a}{l}$$

> **核心结论**：在连续概率空间中，我们**只能求某一个区间上的概率**，而单点概率 $P[X=a] = 0$。

## 二、 连续随机变量与概率密度函数 (PDF)

### 1. 概率密度函数 (PDF) 的定义

由于单点概率为 0，我们引入**概率密度函数 (Probability Density Function, PDF)** $f(x)$ 来描述连续随机变量的分布。

若实值随机变量 $X$ 的函数 $f: \mathbb{R} \rightarrow \mathbb{R}$ 满足以下两个条件，则称其为 PDF：

1. **非负性**：对于所有 $x \in \mathbb{R}$，有 $f(x) \ge 0$。

2. **归一性**（总积分为 1）：

   $$\int_{-\infty}^{\infty} f(x) dx = 1$$

此时，随机变量 $X$ 落在区间 $[a, b]$ 内的概率定义为 PDF 在该区间上的定积分（即曲线下的面积）：

$$P[a \le X \le b] = \int_{a}^{b} f(x) dx$$

> 📌 **【学生疑难解答 1】PDF** $f(x)$ **可以大于 1 吗？**
>
> **解答**：**可以，完全可以！** 手写笔记中红字提到：“$f(x)$ 可以大于 1，因为可能 $b-a$ 太小了”。这是非常准确的直觉。
>
> - **概念区分**：$f(x)$ **不是概率**，它是**单位长度上的概率密度**（Probability per unit length）。
> - **数值解释**：在微小区间 $[x, x+dx]$ 近似中，有 $P[x \le X \le x+dx] \approx f(x) dx$。
> - **实例说明**：若 $X$ 在区间 $[0, \frac{1}{2}]$ 上服从均匀分布，为了保证总积分为 1，其密度函数必须为 $f(x) = 2$ （对于 $x \in [0, \frac{1}{2}]$）。这里的 $2$ 远大于 1，但它依然是一个合法的 PDF。

### 2. 累积分布函数 (CDF)

手写笔记中指出，累积分布函数（Cumulative Distribution Function, CDF）是一个**变上限积分**。 定义 $F(x)$ 为随机变量 $X$ 小于或等于 $x$ 的概率：

$$F(x) = P[X \le x] = \int_{-\infty}^{x} f(z) dz$$

根据微积分基本定理，若 $f(x)$ 连续，则 PDF 是 CDF 的导数：

$$f(x) = \frac{dF(x)}{dx}$$

### 3. 期望与方差 (Expectation & Variance)

#### 3.1 核心公式

将离散随机变量公式中的“求和 $\sum$”自然替换为“积分 $\int$”：

- **期望 (Expectation)**：

  $$E[X] = \int_{-\infty}^{\infty} x f(x) dx$$

- **方差 (Variance)**：

  $$\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$$

  其中：

  $$E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx$$

#### 3.2 经典例题：连续均匀分布 $U(0, l)$ 的期望与方差推导

设 $X \sim U(0, l)$，其 PDF 为：

$$f(x) = \begin{cases} \frac{1}{l}, & 0 \le x \le l \\ 0, & \text{其他} \end{cases}$$

**期望推导**：

$$E[X] = \int_{0}^{l} x \cdot \frac{1}{l} dx = \left[ \frac{x^2}{2l} \right]_{0}^{l} = \frac{l^2}{2l} = \frac{l}{2}$$

**方差推导**： 首先计算 $E[X^2]$：

$$E[X^2] = \int_{0}^{l} x^2 \cdot \frac{1}{l} dx = \left[ \frac{x^3}{3l} \right]_{0}^{l} = \frac{l^3}{3l} = \frac{l^2}{3}$$

进而计算 $\text{Var}(X)$：

$$\text{Var}(X) = E[X^2] - (E[X])^2 = \frac{l^2}{3} - \left(\frac{l}{2}\right)^2 = \frac{l^2}{3} - \frac{l^2}{4} = \frac{l^2}{12}$$

### 4. 联合密度 (Joint Density)

当研究两个连续随机变量 $X$ 和 $Y$ 时，我们使用**联合概率密度函数** $f_{X,Y}(x, y)$。

满足条件：

1. $f_{X,Y}(x, y) \ge 0$
2. $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x, y) dx dy = 1$

区间概率计算（类似重积分）：

$$P[a \le X \le b, c \le Y \le d] = \int_{c}^{d} \int_{a}^{b} f_{X,Y}(x, y) dx dy$$

#### 4.1 边缘密度 (Marginal Density)

> ⚠️ _纠正手写笔记：手写笔记中边缘密度的积分限写成了_ $a$ _到_ $b$_，这在一般情况下是不对的。应当积掉不关心的变量，积分限为_ $-\infty$ _到_ $+\infty$_。_

- $X$ **的边缘密度**（积掉 $Y$）：

  $$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dy$$

- $Y$ **的边缘密度**（积掉 $X$）：

  $$f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dx$$

#### 4.2 条件密度 (Conditional Density)

已知 $X=x$ 的条件下，$Y$ 的条件概率密度为：

$$f_{Y|X=x}(y) = \frac{f_{X,Y}(x, y)}{f_X(x)}$$

### 5. 独立性 (Independence)

若连续随机变量 $X$ 和 $Y$ 独立，则对任意区间均有 $P[a \le X \le b, c \le Y \le d] = P[a \le X \le b] P[c \le Y \le d]$。 在密度函数上的等价条件为：

$$f_{X,Y}(x, y) = f_X(x) f_Y(y) \quad (\text{对所有 } x, y \in \mathbb{R})$$

此时，容易证明条件密度等于边缘密度：

$$f_{Y|X=x}(y) = \frac{f_X(x)f_Y(y)}{f_X(x)} = f_Y(y)$$

### 6. 全概率公式 (Total Probability Rule)

在连续空间中，全概率公式可以写为积分形式：

- 对于事件 $A$：

  $$P[A] = \int_{-\infty}^{\infty} P[A | X = x] f_X(x) dx$$

- 对于另一个随机变量 $Y$ 的边际密度：

  $$f_Y(y) = \int_{-\infty}^{\infty} f_{Y|X=x}(y) f_X(x) dx$$

## 三、 指数分布 (Exponential Distribution)

指数分布通常用于模拟事件发生前的“等待时间”（如设备寿命、下一次请求到达的时间等），它是几何分布在连续时间下的完美对应。

![image-20260527152827640](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH7-%E8%BF%9E%E7%BB%AD%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83.assets/image-20260527152827640.png)

### 1. 定义与验证

对于参数 $\lambda > 0$，若随机变量 $X \sim \text{Exp}(\lambda)$，其 PDF 为：

$$f(x) = \begin{cases} \lambda e^{-\lambda x}, & x \ge 0 \\ 0, & x < 0 \end{cases}$$

**PDF 合法性验证**：

$$\int_{0}^{\infty} \lambda e^{-\lambda x} dx = \left[ -e^{-\lambda x} \right]_{0}^{\infty} = 0 - (-1) = 1$$

### 2. 期望与方差的严格推导（必考：使用分部积分法）

为了计算期望和方差，我们需要使用分部积分公式 $\int u dv = uv - \int v du$。

#### 2.1 期望 $E[X]$ 的推导

$$E[X] = \int_{0}^{\infty} x \left( \lambda e^{-\lambda x} \right) dx$$

令 $u = x \implies du = dx$；$dv = \lambda e^{-\lambda x} dx \implies v = -e^{-\lambda x}$。

$$E[X] = \left[ -x e^{-\lambda x} \right]_{0}^{\infty} - \int_{0}^{\infty} \left( -e^{-\lambda x} \right) dx$$

由于 $\lim_{x \to \infty} x e^{-\lambda x} = 0$（指数函数增长远快于线性增长），第一项在区间端点值均为 0。

$$E[X] = 0 + \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_{0}^{\infty} = \frac{1}{\lambda}$$

#### 2.2 二阶矩 $E[X^2]$ 的推导

$$E[X^2] = \int_{0}^{\infty} x^2 \left( \lambda e^{-\lambda x} \right) dx$$

令 $u = x^2 \implies du = 2x dx$；$dv = \lambda e^{-\lambda x} dx \implies v = -e^{-\lambda x}$。

$$E[X^2] = \left[ -x^2 e^{-\lambda x} \right]_{0}^{\infty} - \int_{0}^{\infty} \left( -e^{-\lambda x} \right) \cdot (2x) dx$$

第一项同样为 0，第二项化简为：

$$E[X^2] = \frac{2}{\lambda} \int_{0}^{\infty} x \left( \lambda e^{-\lambda x} \right) dx = \frac{2}{\lambda} E[X] = \frac{2}{\lambda^2}$$

#### 2.3 方差 $\text{Var}(X)$

$$\text{Var}(X) = E[X^2] - (E[X])^2 = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2 = \frac{1}{\lambda^2}$$

### 3. 尾部概率 (Tail Probability)

设备在 $t$ 时刻后仍未损坏（即生存概率）为：

$$P[X > t] = \int_{t}^{\infty} \lambda e^{-\lambda x} dx = \left[ -e^{-\lambda x} \right]_{t}^{\infty} = e^{-\lambda t}$$

这个结果表明，随着等待时间 $t$ 的增加，未发生事件的概率呈现**指数级衰减**。

> 📌 **【学生疑难解答 2】为什么等了** $t$ **秒之后，未来的等待时间还是“全同”的？（无记忆性）**
>
> **解答**：这对应了手写笔记中画红星的疑惑：“我不能理解为什么 $t$ 折进约二分之一后还是全同的（我不理解等了 $t$ 秒之后还是同等的）”。
>
> 这被称为指数分布的**无记忆性 (Memoryless Property)**。数学定义为：对任意 $s, t \ge 0$，有：
>
> $$P[X > s+t \mid X > s] = P[X > t]$$
>
> **严格证明**： 根据条件概率公式：
>
> $$P[X > s+t \mid X > s] = \frac{P[X > s+t \cap X > s]}{P[X > s]} = \frac{P[X > s+t]}{P[X > s]}$$
>
> 代入尾部概率公式 $P[X > y] = e^{-\lambda y}$：
>
> $$\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = \frac{e^{-\lambda s} \cdot e^{-\lambda t}}{e^{-\lambda s}} = e^{-\lambda t} = P[X > t]$$
>
> **直观物理理解**： 想象一颗**放射性原子核**。它在下一个小时内衰变的概率，与它之前已经存在了 1 年还是 10 年**完全无关**。原子核没有“衰老”的概念，它不会因为“活得久”就更容易在下一秒坏掉。 同样的，如果一个灯泡的寿命符合指数分布，那么一个已经用了 $s$ 小时的旧灯泡，能再撑 $t$ 小时的概率，和一个刚买来的新灯泡能撑 $t$ 小时的概率是**一模一样**的。这就是“无记忆性”。

> 📌 **【学生疑难解答 3】指数分布和泊松分布有什么深刻联系？**
>
> **解答**：手写笔记中写道：“为什么让我感觉有些像泊松分布？”。**您的直觉极其敏锐！** 它们确实是同一个随机过程的两面：
>
> - **泊松分布 (Poisson Distribution)**：关注的是**个数**。在固定的单位时间内，某事件发生的**次数** $N \sim \text{Poisson}(\lambda)$。
> - **指数分布 (Exponential Distribution)**：关注的是**时间**。在事件以恒定速率 $\lambda$ 发生的过程中，两次事件之间的**等待时间** $T \sim \text{Exp}(\lambda)$。
> - **简单关系**：如果一小时内平均发生 $\lambda$ 次事件，那么发生一次事件平均需要等待 $\frac{1}{\lambda}$ 小时（即期望 $E[T] = \frac{1}{\lambda}$）。

### 4. 补充例题

**题目**：假设某服务器接收到请求的时间间隔（单位：秒）服从参数 $\lambda = 0.5$ 的指数分布。

1. 求两个相邻请求之间等待时间大于 4 秒的概率。
2. 求服务器接收一个请求的平均等待时间。

**解答**：

1. 设等待时间为随机变量 $T \sim \text{Exp}(0.5)$。

   $$P[T > 4] = e^{-0.5 \times 4} = e^{-2} \approx 0.1353$$

2. 平均等待时间即为期望：

   $$E[T] = \frac{1}{\lambda} = \frac{1}{0.5} = 2 \text{ 秒}$$

## 四、 正态分布 (Normal Distribution)

正态分布（高斯分布）是自然界中最常见、最重要的连续概率分布。

### 1. 定义

若随机变量 $X \sim N(\mu, \sigma^2)$（其中均值为 $\mu$，方差为 $\sigma^2$），其 PDF 为：

$$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

当 $\mu=0, \sigma=1$ 时，称为**标准正态分布** $N(0, 1)$。

> 📌 **【学习技巧】如何优雅地记住这个公式？**
>
> 手写笔记中红字写道：“有些记不住”。这里有一个直观的拆解记忆法：
>
> 1. **核心形状**：钟形曲线的核心是负指数高斯核 $e^{-z^2/2}$，代表偏离中心的指数衰减。
> 2. **标准化偏离度**：将偏离均值的距离标准化为标准差的倍数：$z = \frac{x-\mu}{\sigma}$。代入高斯核得到：$e^{-\frac{(x-\mu)^2}{2\sigma^2}}$。
> 3. **归一化系数**：为了保证整个实数轴上的积分为 1，前面必须乘以系数 $\frac{1}{\sqrt{2\pi}\sigma}$。 \*记作：**一除根号二派西格玛，乘以 e 的负（偏差除以西格玛）平方除以二。\***

![image-20260527152854833](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH7-%E8%BF%9E%E7%BB%AD%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83.assets/image-20260527152854833.png)

### 2. 标准化引理 (Standardization Lemma)

这是正态分布最关键的计算性质。

若 $X \sim N(\mu, \sigma^2)$，则通过平移和缩放：

$$Y = \frac{X - \mu}{\sigma} \sim N(0, 1)$$

这意味着，所有的正态分布问题都可以转化为标准正态分布来求解。我们用 $\Phi(z)$ 表示标准正态分布的 CDF：

$$\Phi(z) = P[Y \le z] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{z} e^{-t^2/2} dt$$

![image-20260527152914256](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH7-%E8%BF%9E%E7%BB%AD%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83.assets/image-20260527152914256.png)

### 3. 补充例题

**题目**：已知某校男生的身高 $X \sim N(175, 25)$（即均值为 175 cm，方差为 25 $cm^2$，标准差 $\sigma = 5$）。随机选一名男生，求其身高在 170 cm 到 185 cm 之间的概率。 （已知标准正态分布表值：$\Phi(1) \approx 0.8413$, $\Phi(2) \approx 0.9772$）

**解答**： 我们欲求 $P[170 \le X \le 185]$。利用标准化进行转化：

$$P[170 \le X \le 185] = P\left[ \frac{170 - 175}{5} \le \frac{X - 175}{5} \le \frac{185 - 175}{5} \right]$$

$$= P[-1 \le Y \le 2] \quad (\text{其中 } Y \sim N(0, 1))$$

$$= \Phi(2) - \Phi(-1)$$

由于正态分布曲线的对称性，$\Phi(-1) = 1 - \Phi(1)$：

$$P[-1 \le Y \le 2] = \Phi(2) - (1 - \Phi(1)) = 0.9772 - (1 - 0.8413) = 0.9772 - 0.1587 = 0.8185$$

所以，该校男生身高在 170 ~ 185 cm 之间的概率约为 $81.85\%$。

![image-20260527152932523](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH7-%E8%BF%9E%E7%BB%AD%E6%A6%82%E7%8E%87%E5%88%86%E5%B8%83.assets/image-20260527152932523.png)

## 五、 中心极限定理 (Central Limit Theorem, CLT)

### 1. 核心思想

无论底层独立同分布（i.i.d.）的随机变量 $X_i$ 服从什么奇形怪状的分布，只要样本量 $n$ 足够大，它们的**累加和** $S_n$ 或**样本均值** $A_n$ 都会趋向于正态分布！

### 2. 数学表述

设 $X_1, X_2, \dots, X_n$ 是独立同分布的随机变量序列，其共同期望为 $E[X_i] = \mu$，方差为 $\text{Var}(X_i) = \sigma^2$（均有限）。 令其累加和为 $S_n = \sum_{i=1}^{n} X_i$。容易得到：

- $E[S_n] = n\mu$
- $\text{Var}(S_n) = n\sigma^2$

当 $n \to \infty$ 时，其标准化随机变量 $Z_n$ 收敛到标准正态分布 $N(0, 1)$：

$$Z_n = \frac{S_n - n\mu}{\sigma \sqrt{n}} \xrightarrow{d} N(0, 1)$$

> 📌 **【学生疑难解答 4】为什么** $P(Z_n \le c)$ **会等后面那一长串积分？**
>
> **解答**：手写笔记最后写道：“我不了解的是：为什么 $P(Z_n \le c) \approx \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{c} e^{-x^2/2} dx$”。
>
> - **极其简单的原因**：因为中心极限定理指出，当 $n$ 很大时，$Z_n$ **本质上就是一个标准正态分布随机变量**。
> - **定义对应**：根据我们在第四章中介绍的标准正态分布 CDF 的定义，任何标准正态分布变量小于等于 $c$ 的概率，就是标准正态分布的 PDF 在 $-\infty$ 到 $c$ 上的积分。
> - **结论**：这个积分不是新推导出来的公式，它**就是标准正态分布的累积概率** $\Phi(c)$ **的微积分表达式**！由于 $Z_n \approx N(0, 1)$，所以：
>
>   $$P[Z_n \le c] \approx \Phi(c) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{c} e^{-x^2/2} dx$$

### 3. CLT 标准解题步骤 (SOP)

在做题时，请严格按照以下三步执行（对应手写笔记中的红色 SOP 总结）：

1. **提取元数据**：提取单个随机变量的期望 $\mu$ 和方差 $\sigma^2$，并明确样本量 $n$。

2. **构建标准化变量** $Z_n$：

   $$Z_n = \frac{S_n - n\mu}{\sigma\sqrt{n}}$$

3. **查表或写出标准正态形式**：将要求的概率形式转换为 $P[Z_n \le c] = \Phi(c)$，查表求值。

### 4. 补充例题

**题目**：假设一口井每天的产水量 $X_i$ 是独立的随机变量，期望为 $\mu = 10$ 吨，方差为 $\sigma^2 = 4$ $吨^2$。求这口井 100 天的总产水量 $S_{100}$ 超过 1030 吨的概率。 （已知 $\Phi(1.5) \approx 0.9332$）

**解答**：

1. **提取元数据**：$\mu = 10, \sigma = 2, n = 100$。
   - $E[S_{100}] = n\mu = 100 \times 10 = 1000$ 吨。
   - 标准差为 $\sigma\sqrt{n} = 2 \times \sqrt{100} = 20$。

2. **构建标准化变量**：

   $$P[S_{100} > 1030] = P\left[ \frac{S_{100} - 1000}{20} > \frac{1030 - 1000}{20} \right]$$

   $$= P[Z_n > 1.5]$$

3. **求值**：

   $$P[Z_n > 1.5] = 1 - \Phi(1.5) \approx 1 - 0.9332 = 0.0668$$

   所以，100 天的总产水量超过 1030 吨的概率仅约为 $6.68\%$。

## 六、 经典综合应用：布丰投针问题 (Buffon's Needle)

> 本节为教材中的重要综合案例，融合了联合均匀密度、三角函数积分等知识。

### 1. 问题描述

水平面上画有等距离为 $l$ 的平行线。将一根长度为 $l$ 的针随机投掷在平面上。求针与任意一条平行线相交的概率。

### 2. 建立数学模型

针在平面上的位置可以由两个独立的随机变量完全决定：

1. **距离** $Y$：针的中点到最近平行线的垂直距离，显然 $Y \sim U(0, l/2)$。
2. **夹角** $\Theta$：针与垂直方向的夹角，显然 $\Theta \sim U(-\pi/2, \pi/2)$。

因为 $Y$ 与 $\Theta$ 相互独立，它们的联合 PDF 是它们各自均匀 PDF 的乘积：

$$f_{Y,\Theta}(y, \theta) = f_Y(y) \cdot f_\Theta(\theta) = \frac{2}{l} \cdot \frac{1}{\pi} = \frac{2}{\pi l} \quad \left(0 \le y \le \frac{l}{2}, -\frac{\pi}{2} \le \theta \le \frac{\pi}{2}\right)$$

### 3. 相交条件与积分计算

根据几何三角关系，针的一半投射在垂直方向的半长度为 $\frac{l}{2} \cos\Theta$。 针与平行线相交的充要条件是：

$$Y \le \frac{l}{2} \cos\Theta$$

设相交事件为 $E$，其概率为在相交区域上的二重积分：

$$P[E] = \int_{-\pi/2}^{\pi/2} \int_{0}^{\frac{l}{2}\cos\theta} f_{Y,\Theta}(y, \theta) dy d\theta$$

$$= \int_{-\pi/2}^{\pi/2} \int_{0}^{\frac{l}{2}\cos\theta} \frac{2}{\pi l} dy d\theta$$

$$= \int_{-\pi/2}^{\pi/2} \left( \frac{2}{\pi l} \cdot \frac{l}{2}\cos\theta \right) d\theta$$

$$= \frac{1}{\pi} \int_{-\pi/2}^{\pi/2} \cos\theta d\theta$$

$$= \frac{1}{\pi} \left[ \sin\theta \right]_{-\pi/2}^{\pi/2} = \frac{1}{\pi} (1 - (-1)) = \frac{2}{\pi}$$

### 4. 奇妙的结论

$$\text{投针相交概率 } P[E] = \frac{2}{\pi}$$

利用大数定律，我们通过大量重复投针试验，统计相交的频率，便可以用 $\pi \approx \frac{2}{\text{相交频率}}$ 来估算圆周率 $\pi$ 的值！这就是著名的蒙特卡洛模拟的鼻祖。

---

# 连续与多维概率分布巩固练习指南 (含全真题翻译与详析)

> 本指南针对你的手写笔记盲点，精选了上传教材《Chapter 4》与《Chapter 5》中的典型习题，所有题目均附带**中文翻译**与**极其详尽的微积分推导过程**，帮助你通过实战消灭知识死角。

## 阶段一：连续随机变量基础与积分基本功

### 🎯 对应笔记知识点：

- 连续均匀概率空间（区间长度占比）
- 概率密度函数（PDF）的非负性与归一化（解答：_PDF为什么能大于1_）
- 期望 $E[X]$、方差 $\text{Var}(X)$ 与累积分布函数（CDF）的微积分转换关系

### 1. 【问题 32】连续概率变量、概率密度函数与分布函数Ⅰ (教材第 70-71 页)

#### 📝 【原题翻译】

已知连续随机变量 $X$ 的概率密度函数 $f_{X}(x)$（其中 $c$ 为常数，在指定区间外的取值均为 0），求以下各项：

1. 当 $f_{X}(x) = cx \quad (2 \le x \le 6)$ 时： (a) 求常数 $c$ 的值； (b) 计算期望 $E(X)$； (c) 计算方差 $V(X)$。
2. 当 $f_{X}(x) = \frac{c}{x} \quad (-8 \le x \le -4)$ 时： (a) 求常数 $c$ 的值； (b) 计算期望 $E(X)$； (c) 计算方差 $V(X)$。

#### ✍️ 【详细解答过程】

##### **第一小题解答：**

- **(a) 求常数** $c$： 根据概率密度函数的**归一性**（总积分为 1）：

  $$\int_{-\infty}^{\infty} f_X(x) dx = 1 \implies \int_{2}^{6} cx \, dx = 1$$

  计算定积分：

  $$\left[ \frac{1}{2}cx^2 \right]_{2}^{6} = 1 \implies \frac{1}{2}c \left(6^2 - 2^2\right) = 1 \implies \frac{1}{2}c(36 - 4) = 16c = 1 \implies c = \frac{1}{16}$$

- **(b) 计算期望** $E(X)$： 将 $c = \frac{1}{16}$ 代入 $E(X) = \int_{-\infty}^{\infty} x f_X(x) dx$：

  $$E(X) = \int_{2}^{6} x \cdot \left(\frac{1}{16}x\right) dx = \frac{1}{16} \int_{2}^{6} x^2 \, dx$$

  $$E(X) = \frac{1}{16} \left[ \frac{x^3}{3} \right]_{2}^{6} = \frac{1}{48} (6^3 - 2^3) = \frac{1}{48} (216 - 8) = \frac{208}{48} = \frac{13}{3}$$

- **(c) 计算方差** $V(X)$： 首先计算二阶矩 $E(X^2)$：

  $$E(X^2) = \int_{2}^{6} x^2 \cdot \left(\frac{1}{16}x\right) dx = \frac{1}{16} \int_{2}^{6} x^3 \, dx$$

  $$E(X^2) = \frac{1}{16} \left[ \frac{x^4}{4} \right]_{2}^{6} = \frac{1}{64} (6^4 - 2^4) = \frac{1}{64} (1296 - 16) = \frac{1280}{64} = 20$$

  利用方差公式 $V(X) = E(X^2) - (E(X))^2$：

  $$V(X) = 20 - \left(\frac{13}{3}\right)^2 = 20 - \frac{169}{9} = \frac{180 - 169}{9} = \frac{11}{9}$$

##### **第二小题解答：**

- **(a) 求常数** $c$： 根据归一性：

  $$\int_{-8}^{-4} \frac{c}{x} \, dx = 1 \implies c \Big[ \ln|x| \Big]_{-8}^{-4} = 1$$

  注意在负数区间求导时，对数项内部必须加绝对值：

  $$c \left( \ln|-4| - \ln|-8| \right) = 1 \implies c (\ln 4 - \ln 8) = 1 \implies c \ln\left(\frac{4}{8}\right) = 1$$

  $$c \ln\left(\frac{1}{2}\right) = 1 \implies -c \ln 2 = 1 \implies c = -\frac{1}{\ln 2}$$

  _(考点剖析：因为自变量_ $x$ _在区间_ $[-8, -4]$ _上均为负数，为了使概率密度_ $f_X(x) = \frac{c}{x} \ge 0$ _恒成立，常数_ $c$ _必须为负数。求出的_ $c = -1/\ln 2 < 0$ _完美符合非负性要求！)_

- **(b) 计算期望** $E(X)$：

  $$E(X) = \int_{-8}^{-4} x \cdot \left( \frac{c}{x} \right) dx = c \int_{-8}^{-4} 1 \, dx = c \Big[ x \Big]_{-8}^{-4} = c (-4 - (-8)) = 4c$$

  代入 $c$ 值：

  $$E(X) = -\frac{4}{\ln 2}$$

- **(c) 计算方差** $V(X)$： 计算二阶矩 $E(X^2)$：

  $$E(X^2) = \int_{-8}^{-4} x^2 \cdot \left( \frac{c}{x} \right) dx = c \int_{-8}^{-4} x \, dx = c \left[ \frac{x^2}{2} \right]_{-8}^{-4}$$

  $$E(X^2) = \frac{c}{2} \left( (-4)^2 - (-8)^2 \right) = \frac{c}{2} (16 - 64) = -24c$$

  代入 $c = -\frac{1}{\ln 2}$：

  $$E(X^2) = \frac{24}{\ln 2}$$

  利用方差公式：

  $$V(X) = E(X^2) - (E(X))^2 = \frac{24}{\ln 2} - \left( -\frac{4}{\ln 2} \right)^2 = \frac{24}{\ln 2} - \frac{16}{(\ln 2)^2} = \frac{24\ln 2 - 16}{(\ln 2)^2}$$

### 2. 【问题 37】连续概率变量、概率分布、均匀分布Ⅱ (教材第 80-81 页)

#### 📝 【原题翻译】

设随机变量 $X$ 服从区间 $[0, 1]$ 上的连续均匀分布。

1. 求 $X$ 的累积分布函数 $F_X(x) = P(X \le x)$ 的分段表达式。
2. 求出下列各项概率值： (a) 单点概率 $P(X = 0.5)$； (b) 设 $X, Y$ 是独立同一分布的（i.i.d.）且都服从 $[0, 1]$ 上的均匀分布，计算并集概率 $P(X \le 0.5 \cup Y \le 0.5)$； (c) 新随机变量的概率 $P(X^2 \le x)$。

#### ✍️ 【详细解答过程】

##### **第一小题解答：**

由于 $X \sim U(0,1)$，其 PDF 为 $f_X(x) = 1 \quad (0 \le x \le 1)$。 累积分布函数 $F_X(x) = \int_{-\infty}^{x} f_X(z) dz$ 采用分段积分：

- 当 $x < 0$ 时：$F_X(x) = 0$

- 当 $0 \le x \le 1$ 时：$F_X(x) = \int_{0}^{x} 1 \, dz = x$

- 当 $x > 1$ 时：$F_X(x) = 1$ 因此：

  $$F_X(x) = \begin{cases} 0, & x < 0 \\ x, & 0 \le x \le 1 \\ 1, & x > 1 \end{cases}$$

##### **第二小题解答：**

- **(a) 单点概率** $P(X = 0.5)$： 对于任意连续型随机变量，单点的测度（积分长度）为 0：

  $$P(X = 0.5) = \int_{0.5}^{0.5} f_X(x) dx = 0$$

- **(b) 并集概率** $P(X \le 0.5 \cup Y \le 0.5)$： 由于 $X, Y$ 独立，利用互补事件的概率计算（减法原理）：

  $$P(X \le 0.5 \cup Y \le 0.5) = 1 - P(X > 0.5 \cap Y > 0.5)$$

  由于独立性，交集概率等于概率的乘积：

  $$= 1 - P(X > 0.5) \cdot P(Y > 0.5)$$

  计算单项概率：$P(X > 0.5) = 1 - F_X(0.5) = 1 - 0.5 = 0.5$：

  $$= 1 - (0.5 \times 0.5) = 1 - 0.25 = 0.75$$

- **(c) 计算** $P(X^2 \le x)$： 设 $W = X^2$，由于 $X$ 只能取正数，我们可以将不等式两边开根号： 当 $x < 0$ 时：由于 $X^2 \ge 0$ 恒成立，概率 $P(X^2 \le x) = 0$。 当 $0 \le x \le 1$ 时：

  $$P(X^2 \le x) = P(X \le \sqrt{x}) = F_X(\sqrt{x}) = \sqrt{x}$$

  当 $x > 1$ 时：由于 $X \in [0, 1]$， $X^2$ 必然小于 $x$，故概率为 1。 综上，新随机变量的分布函数为：

  $$P(X^2 \le x) = \begin{cases} 0, & x < 0 \\ \sqrt{x}, & 0 \le x \le 1 \\ 1, & x > 1 \end{cases}$$

## 阶段二：两大明星分布深挖（指数分布与正态分布）

### 🎯 对应笔记知识点：

- 指数分布 $\text{Exp}(\lambda)$ 的无记忆性推导及其物理直观
- 正态分布 $N(\mu, \sigma^2)$ 的归一性证明、标准化过程及矩母函数（MGF）推导

### 1. 【问题 38】指数分布与无记忆性 (教材第 82-83 页)

#### 📝 【原题翻译】

1. 设随机变量 $X$ 服从参数为 $\lambda > 0$ 的指数分布 $\text{Exp}(\lambda)$。 (a) 求期望 $E(X)$； (b) 求方差 $V(X)$； (c) 求解新随机变量 $Y = X^2$ 的概率密度函数 $f_Y(y)$。
2. 探讨指数分布的无记忆性（Memoryless Property）： (a) 设 $s \ge 0$，求尾部概率 $P(X > s)$； (b) 设 $s, t \ge 0$，求条件概率 $P(X > s+t \mid X > s)$； (c) 证明等式 $P(X > s+t \mid X > s) = P(X > t)$ 恒成立； (d) 某物理现象平均每秒发生 $1/30$ 次（即发生间隔时间服从指数分布）。若该现象已经持续 60 秒未发生，求它还要再等待至少 90 秒才发生的概率。

#### ✍️ 【详细解答过程】

##### **第一小题解答：**

- **(a) 期望** $E(X)$ **与 (b) 方差** $V(X)$ **的推导**： 此处可采用伽马函数（Gamma Function）法进行极速证明，其定义为：

  $$\Gamma(n) = \int_{0}^{\infty} u^{n-1} e^{-u} du = (n-1)!$$

  在计算 $E[X^k] = \int_{0}^{\infty} x^k \lambda e^{-\lambda x} dx$ 时，令 $u = \lambda x \implies dx = \frac{1}{\lambda} du$：

  $$E[X^k] = \int_{0}^{\infty} \left(\frac{u}{\lambda}\right)^k \lambda e^{-u} \frac{1}{\lambda} du = \frac{1}{\lambda^k} \int_{0}^{\infty} u^k e^{-u} du = \frac{\Gamma(k+1)}{\lambda^k} = \frac{k!}{\lambda^k}$$

  利用该结论，可以瞬间求出：
  - 当 $k=1$ 时：$E(X) = \frac{1!}{\lambda^1} = \frac{1}{\lambda}$
  - 当 $k=2$ 时：$E(X^2) = \frac{2!}{\lambda^2} = \frac{2}{\lambda^2}$
  - 方差：$V(X) = E(X^2) - (E(X))^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2}$

- **(c) 求** $Y = X^2$ **的密度函数** $f_Y(y)$： 先求其分布函数 $F_Y(y)$。因为 $X \ge 0$，故 $Y \ge 0$。 当 $y > 0$ 时：

  $$F_Y(y) = P(Y \le y) = P(X^2 \le y) = P(X \le \sqrt{y}) = \int_{0}^{\sqrt{y}} \lambda e^{-\lambda x} dx = 1 - e^{-\lambda \sqrt{y}}$$

  对 $F_Y(y)$ 进行变上限复合函数求导，即可得 PDF $f_Y(y)$：

  $$f_Y(y) = \frac{d}{dy} \left( 1 - e^{-\lambda \sqrt{y}} \right) = -e^{-\lambda \sqrt{y}} \cdot \left(-\lambda \cdot \frac{1}{2\sqrt{y}}\right) = \frac{\lambda}{2\sqrt{y}} e^{-\lambda\sqrt{y}} \quad (y > 0)$$

##### **第二小题解答：**

- **(a) 求尾部概率** $P(X > s)$：

  $$P(X > s) = \int_{s}^{\infty} \lambda e^{-\lambda x} dx = \Big[ -e^{-\lambda x} \Big]_{s}^{\infty} = 0 - (-e^{-\lambda s}) = e^{-\lambda s}$$

- **(b) 与 (c) 证明无记忆性**： 根据条件概率定义：

  $$P(X > s+t \mid X > s) = \frac{P(X > s+t \cap X > s)}{P(X > s)}$$

  因为 $s+t > s$，所以当 $X > s+t$ 时必有 $X > s$。交集事件化简为：

  $$= \frac{P(X > s+t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = \frac{e^{-\lambda s} \cdot e^{-\lambda t}}{e^{-\lambda s}} = e^{-\lambda t}$$

  而 $P(X > t) = e^{-\lambda t}$，因此：

  $$P(X > s+t \mid X > s) = P(X > t) \quad \text{(得证)}$$

- **(d) 实际应用计算**： 由题设，事件发生率 $\lambda = \frac{1}{30}$。设等待时间为 $X \sim \text{Exp}(1/30)$。 题目欲求：在已经等待了 60 秒的基础上，总共要等待 150 秒（即再等 90 秒）以上的概率：

  $$P(X > 60 + 90 \mid X > 60)$$

  利用**无记忆性**，该概率与从 0 秒开始等待 90 秒以上的概率完全一致：

  $$= P(X > 90) = e^{-\lambda \cdot 90} = e^{-\frac{1}{30} \times 90} = e^{-3} \approx 0.0498 \quad (4.98\%)$$

### 2. 【问题 39】正态分布、矩母函数 (教材第 84-85 页)

#### 📝 【原题翻译】

已知随机变量 $X$ 服从正态分布 $N(\mu, \sigma^2)$。

1. 使用 $X$ 的概率密度函数，证明归一性： $\int_{-\infty}^{\infty} f_X(x) dx = 1$。
2. 证明当引入标准化变量 $Y = \frac{X-\mu}{\sigma}$ 时， $Y$ 服从标准正态分布 $N(0, 1)$。
3. 严格计算并证明：期望 $E(X) = \mu$，方差 $V(X) = \sigma^2$。
4. 求解 $X$ 的积率母函数（矩母函数） $M_X(\theta) = E(e^{\theta X})$。

#### ✍️ 【详细解答过程】

##### **第一小题解答：**

欲证：

$$\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} dx = 1$$

进行变量替换。令 $u = \frac{x-\mu}{\sigma} \implies dx = \sigma \, du$。原积分化为：

$$\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{u^2}{2}} \sigma \, du = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-\frac{u^2}{2}} du$$

现在证明高斯积分 $I = \int_{-\infty}^{\infty} e^{-u^2/2} du = \sqrt{2\pi}$。采用二重积分极坐标变换法：

$$I^2 = \left( \int_{-\infty}^{\infty} e^{-u^2/2} du \right) \left( \int_{-\infty}^{\infty} e^{-v^2/2} dv \right) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-\frac{u^2+v^2}{2}} du \, dv$$

令 $u = r \cos\phi, v = r \sin\phi$，雅可比行列式 $du \, dv = r \, dr \, d\phi$。积分限变为 $r \in [0, \infty), \phi \in [0, 2\pi]$：

$$I^2 = \int_{0}^{2\pi} d\phi \int_{0}^{\infty} r e^{-\frac{r^2}{2}} dr = 2\pi \Big[ -e^{-\frac{r^2}{2}} \Big]_{0}^{\infty} = 2\pi (0 - (-1)) = 2\pi$$

因为积分项大于 0，故 $I = \sqrt{2\pi}$。 代入原式：

$$\frac{1}{\sqrt{2\pi}} \cdot I = \frac{1}{\sqrt{2\pi}} \cdot \sqrt{2\pi} = 1 \quad \text{(得证)}$$

##### **第二小题解答：**

求标准化变量 $Y = \frac{X-\mu}{\sigma}$ 的累积分布函数 $F_Y(y)$：

$$F_Y(y) = P(Y \le y) = P\left(\frac{X-\mu}{\sigma} \le y\right) = P(X \le \sigma y + \mu) = \int_{-\infty}^{\sigma y + \mu} \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}} dx$$

令 $t = \frac{x-\mu}{\sigma} \implies dx = \sigma \, dt$，当 $x = \sigma y + \mu$ 时上限变为 $y$：

$$F_Y(y) = \int_{-\infty}^{y} \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{t^2}{2}} \sigma \, dt = \int_{-\infty}^{y} \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} dt$$

对变上限积分求导可得 $Y$ 的密度函数：

$$f_Y(y) = \frac{dF_Y(y)}{dy} = \frac{1}{\sqrt{2\pi}} e^{-\frac{y^2}{2}}$$

该函数正是标准正态分布 $N(0, 1)$ 的 PDF。

##### **第三小题解答：**

- **计算** $E(Y)$：

  $$E(Y) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} y e^{-\frac{y^2}{2}} dy = 0 \quad \text{(被积函数为奇函数，在对称区间上积分为0)}$$

- **计算** $V(Y)$：

  $$E(Y^2) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} y^2 e^{-\frac{y^2}{2}} dy$$

  采用分部积分法，令 $u = y \implies du = dy$；$dv = y e^{-y^2/2} dy \implies v = -e^{-y^2/2}$：

  $$E(Y^2) = \frac{1}{\sqrt{2\pi}} \left( \Big[ -y e^{-y^2/2} \Big]_{-\infty}^{\infty} + \int_{-\infty}^{\infty} e^{-y^2/2} dy \right)$$

  $$E(Y^2) = \frac{1}{\sqrt{2\pi}} \left( 0 + \sqrt{2\pi} \right) = 1$$

  故 $V(Y) = E(Y^2) - (E(Y))^2 = 1 - 0 = 1$。

- **利用线性性质求** $E(X)$ **与** $V(X)$： 由 $X = \sigma Y + \mu$ 可得：

  $$E(X) = E(\sigma Y + \mu) = \sigma E(Y) + \mu = \sigma \cdot 0 + \mu = \mu$$

  $$V(X) = V(\sigma Y + \mu) = \sigma^2 V(Y) = \sigma^2 \cdot 1 = \sigma^2 \quad \text{(得证)}$$

##### **第四小题解答：**

根据矩母函数定义：

$$M_X(\theta) = E(e^{\theta X}) = \int_{-\infty}^{\infty} e^{\theta x} \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}} dx$$

将指数上的多项式合并并进行**配方**：

$$\theta x - \frac{(x-\mu)^2}{2\sigma^2} = \frac{2\sigma^2 \theta x - (x^2 - 2\mu x + \mu^2)}{2\sigma^2} = -\frac{x^2 - 2(\mu + \sigma^2\theta)x + \mu^2}{2\sigma^2}$$

$$= -\frac{\left( x - (\mu + \sigma^2\theta) \right)^2 - (\mu + \sigma^2\theta)^2 + \mu^2}{2\sigma^2} = -\frac{\left( x - (\mu + \sigma^2\theta) \right)^2}{2\sigma^2} + \mu\theta + \frac{1}{2}\sigma^2\theta^2$$

代回原积分：

$$M_X(\theta) = e^{\mu\theta + \frac{1}{2}\sigma^2\theta^2} \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{\left( x - (\mu + \sigma^2\theta) \right)^2}{2\sigma^2}} dx$$

后面积分项是以 $\mu + \sigma^2\theta$ 为均值，$\sigma^2$ 为方差的正态分布的完整 PDF 积分，由归一性其值为 1。 因此：

$$M_X(\theta) = e^{\mu\theta + \frac{1}{2}\sigma^2\theta^2}$$

## 阶段三：多维连续分布（联合密度与条件期望）

### 🎯 对应笔记知识点：

- 联合 PDF 的重积分边界确定（避免区域交叉出错）
- 边缘概率密度计算（积掉不要的自变量）
- 条件期望 $E[Y \mid X]$ 的计算（深入理解条件期望作为随机变量的本质）

### 1. 【问题 50】多次元连续概率分布 (教材第 110-111 页)

#### 📝 【原题翻译】

以下为 $X, Y$ 的联合概率密度函数 $f_{(X,Y)}(x, y)$，在指定范围外时其值均为 0。求解以下各项：

1. 若联合密度为 $f_{(X,Y)}(x, y) = c \quad (0 \le x \le 1, \,\, 0 \le y \le 1)$： (a) 求常数 $c$； (b) 计算 $P(X+Y < 1)$； (c) 计算协方差 $Cov(X,Y)$； (d) 计算 $P(2X+3Y \le 1)$。
2. 若联合密度为 $f_{(X,Y)}(x, y) = c \quad (0 \le y \le x \le 1)$（区域为三角形区域）： (a) 求常数 $c$； (b) 计算 $P(X+Y < 1)$； (c) 求边缘密度函数 $f_X(x)$ 和 $f_Y(y)$； (d) 计算协方差 $Cov(X,Y)$； (e) 计算 $P(Y + 2X \le 1)$。

#### ✍️ 【详细解答过程】

##### **第一小题解答：**

- **(a) 求常数** $c$：

  $$\int_{0}^{1} \int_{0}^{1} c \, dx \, dy = c = 1 \implies c = 1$$

- **(b) 计算** $P(X+Y < 1)$： 积分区域为 $y < 1-x$：

  $$P(X+Y < 1) = \int_{0}^{1} \int_{0}^{1-x} 1 \, dy \, dx = \int_{0}^{1} (1-x) dx = \left[ x - \frac{x^2}{2} \right]_{0}^{1} = \frac{1}{2}$$

- **(c) 计算协方差** $Cov(X,Y)$： 由于联合分布在正方形上常数化，易知其独立，故 $Cov(X,Y) = 0$。严格计算如下：

  $$E(X) = \int_{0}^{1} \int_{0}^{1} x \, dx \, dy = \frac{1}{2}, \quad E(Y) = \frac{1}{2}$$

  $$E(XY) = \int_{0}^{1} \int_{0}^{1} xy \, dx \, dy = \left( \int_{0}^{1} x dx \right) \left( \int_{0}^{1} y dy \right) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$$

  $$Cov(X,Y) = E(XY) - E(X)E(Y) = \frac{1}{4} - \frac{1}{4} = 0$$

- **(d) 计算** $P(2X+3Y \le 1)$： 积分边界：当给定 $x$ 时， $y$ 从 0 积到 $\frac{1-2x}{3}$。由于 $y \ge 0$，上限必须满足 $\frac{1-2x}{3} \ge 0 \implies x \le \frac{1}{2}$：

  $$P(2X+3Y \le 1) = \int_{0}^{1/2} \int_{0}^{\frac{1-2x}{3}} 1 \, dy \, dx = \int_{0}^{1/2} \frac{1-2x}{3} \, dx$$

  $$= \frac{1}{3} \left[ x - x^2 \right]_{0}^{1/2} = \frac{1}{3} \left( \frac{1}{2} - \frac{1}{4} \right) = \frac{1}{12}$$

##### **第二小题解答：**

- **(a) 求常数** $c$： 区域为由直线 $y=0, x=1, y=x$ 围成的直角三角形，面积为 $1/2$。

  $$\int_{0}^{1} \int_{0}^{x} c \, dy \, dx = c \int_{0}^{1} x \, dx = \frac{c}{2} = 1 \implies c = 2$$

- **(b) 计算** $P(X+Y < 1)$： 边界为 $y \le x$ 且 $y \le 1-x$。交点在 $x = 0.5, y = 0.5$。 采用先积 $x$ 的方法比较简单：给写 $y$， $x$ 的取值从 $y$ 积到 $1-y$：

  $$P(X+Y < 1) = \int_{0}^{1/2} \int_{y}^{1-y} 2 \, dx \, dy = \int_{0}^{1/2} 2(1-2y) dy = 2 \left[ y - y^2 \right]_{0}^{1/2} = 2 \left(\frac{1}{2} - \frac{1}{4}\right) = \frac{1}{2}$$

- **(c) 求边缘密度函数** $f_X(x)$ **和** $f_Y(y)$：
  - $X$ **的边缘密度**（积掉 $Y$， $y$ 取值范围为 $[0, x]$）：

    $$f_X(x) = \int_{0}^{x} 2 \, dy = 2x \quad (0 \le x \le 1)$$

  - $Y$ **的边缘密度**（积掉 $X$， $x$ 取值范围为 $[y, 1]$）：

    $$f_Y(y) = \int_{y}^{1} 2 \, dx = 2(1-y) \quad (0 \le y \le 1)$$

- **(d) 计算协方差** $Cov(X,Y)$：

  $$E(X) = \int_{0}^{1} x \cdot (2x) \, dx = \left[ \frac{2x^3}{3} \right]_{0}^{1} = \frac{2}{3}$$

  $$E(Y) = \int_{0}^{1} y \cdot 2(1-y) \, dy = 2 \left[ \frac{y^2}{2} - \frac{y^3}{3} \right]_{0}^{1} = 2 \left( \frac{1}{2} - \frac{1}{3} \right) = \frac{1}{3}$$

  $$E(XY) = \int_{0}^{1} \int_{0}^{x} 2xy \, dy \, dx = \int_{0}^{1} 2x \left[ \frac{y^2}{2} \right]_{0}^{x} dx = \int_{0}^{1} x^3 \, dx = \frac{1}{4}$$

  $$Cov(X,Y) = E(XY) - E(X)E(Y) = \frac{1}{4} - \left(\frac{2}{3} \times \frac{1}{3}\right) = \frac{1}{4} - \frac{2}{9} = \frac{9 - 8}{36} = \frac{1}{36}$$

- **(e) 计算** $P(Y + 2X \le 1)$： 积分区域同时受到 $y \le x$ 和 $y \le 1 - 2x$ 限制。 找出两条边界线的交点： $x = 1-2x \implies x = 1/3, y = 1/3$。 利用对 $x$ 积分：给定 $y \in [0, 1/3]$， $x$ 的范围为 $[y, \frac{1-y}{2}]$：

  $$P(Y + 2X \le 1) = \int_{0}^{1/3} \int_{y}^{\frac{1-y}{2}} 2 \, dx \, dy = \int_{0}^{1/3} 2\left(\frac{1-y}{2} - y\right) dy = \int_{0}^{1/3} (1 - 3y) \, dy$$

  $$= \left[ y - \frac{3y^2}{2} \right]_{0}^{1/3} = \frac{1}{3} - \frac{3}{2} \times \frac{1}{9} = \frac{1}{3} - \frac{1}{6} = \frac{1}{6}$$

### 2. 【问题 60】连续条件期望核心演练 (教材第 130-131 页)

#### 📝 【原题翻译】

已知随机变量 $X, Y$ 的联合概率密度函数为：

$$f_{(X,Y)}(x, y) = 51 e^{-2x} e^{-3y} \quad (0 < 5x < y < \infty)$$

求以下各项：

1. 证明该分布常数 $c = 51$ 的合理性。
2. 求 $X$ 的边缘概率密度 $f_X(x)$。
3. 求已知 $X=x$ 的条件下， $Y$ 的条件概率密度 $f_{Y \mid X}(y \mid x)$。
4. 计算条件期望 $E[Y \mid X = x]$。

#### ✍️ 【详细解答过程】

- **1. 验证常数 51 的合理性**：

  $$\int_{0}^{\infty} \int_{5x}^{\infty} c e^{-2x} e^{-3y} \, dy \, dx = 1$$

  先算内层对 $y$ 的积分：

  $$\int_{5x}^{\infty} e^{-3y} dy = \left[ -\frac{1}{3} e^{-3y} \right]_{5x}^{\infty} = \frac{1}{3} e^{-15x}$$

  代回外层对 $x$ 积分：

  $$c \int_{0}^{\infty} e^{-2x} \cdot \left( \frac{1}{3} e^{-15x} \right) dx = \frac{c}{3} \int_{0}^{\infty} e^{-17x} dx = \frac{c}{3} \left[ -\frac{1}{17} e^{-17x} \right]_{0}^{\infty} = \frac{c}{51} = 1 \implies c = 51$$

- **2. 求** $X$ **的边缘概率密度** $f_X(x)$： 给定 $x \ge 0$，将 $Y$ 从下限 $5x$ 到 $\infty$ 进行积分积掉：

  $$f_X(x) = \int_{5x}^{\infty} 51 e^{-2x} e^{-3y} \, dy = 51 e^{-2x} \left[ -\frac{1}{3} e^{-3y} \right]_{5x}^{\infty} = 17 e^{-17x} \quad (x \ge 0)$$

  _(可以看出_ $X$ _服从参数为 17 的指数分布_ $\text{Exp}(17)$_！)_

- **3. 求条件概率密度** $f_{Y \mid X}(y \mid x)$： 根据定义：

  $$f_{Y \mid X}(y \mid x) = \frac{f_{(X,Y)}(x, y)}{f_X(x)} = \frac{51 e^{-2x} e^{-3y}}{17 e^{-17x}} = 3 e^{17x - 2x - 3y} = 3 e^{-3(y - 5x)} \quad (y > 5x)$$

- **4. 计算条件期望** $E[Y \mid X = x]$：

  $$E[Y \mid X = x] = \int_{5x}^{\infty} y \cdot f_{Y \mid X}(y \mid x) \, dy = \int_{5x}^{\infty} y \cdot 3 e^{-3(y - 5x)} \, dy$$

  我们引入换元法让积分极简化。令 $u = y - 5x \implies y = u + 5x$ 且 $dy = du$，当 $y = 5x$ 时 $u = 0$：

  $$E[Y \mid X = x] = \int_{0}^{\infty} (u + 5x) \cdot 3 e^{-3u} \, du = \int_{0}^{\infty} u \cdot 3 e^{-3u} \, du + 5x \int_{0}^{\infty} 3 e^{-3u} \, du$$

  注意观察这两项积分：
  - 第一项 $\int_{0}^{\infty} u \cdot 3 e^{-3u} \, du$ 正是指数分布 $\text{Exp}(3)$ 的期望，其值为 $\frac{1}{3}$；

  - 第二项 $\int_{0}^{\infty} 3 e^{-3u} \, du$ 是指数分布 $\text{Exp}(3)$ 的密度函数在定义域上的全积分，其值必为 1。 因此，无需繁琐的分部积分，即可写出：

    $$E[Y \mid X = x] = \frac{1}{3} + 5x \cdot 1 = 5x + \frac{1}{3}$$

    _(考点剖析：最终条件期望_ $E[Y|X] = 5X + 1/3$_。它说明条件期望在求出具体数值后，仍然是一个包含自变量_ $X$ _的随机变量，这也彻底解决了你手写笔记中关于这一概念的疑惑！)_

## 阶段四：极限与大数定理（CLT 与连续近似）

### 🎯 对应笔记知识点：

- 中心极限定理（CLT）通过积率母函数趋向于标准高斯分布的严格证明
- 连续性修正（半整数修正）的引入依据与计算

### 1. 【问题 48】中心极限定理与正态近似 (教材第 102-103 页)

#### 📝 【原题翻译】

1. 设随机变量序列 $X_1, X_2, \dots$ 独立同一分布，且其均值为 $\mu$，方差为 $\sigma^2$（均有限），在其原点近邻存在矩母函数 $M_X(\theta)$。 令 $S_n = \sum_{i=1}^{n} X_i$，构建标准化变量：

   $$Z_n = \frac{S_n - n\mu}{\sigma \sqrt{n}}$$

   证明：当 $n \to \infty$ 时， $Z_n$ 的矩母函数 $M_{Z_n}(\theta)$ 收敛到标准正态分布的矩母函数 $e^{\theta^2/2}$。

2. 某工厂生产的产品的非合格率（不良率）为 0.1。现随机抽取 400 个产品，求其中不良品数量大于或等于 50 个的概率。请使用中心极限定理，分别在**半整数补正（连续修正）\*\*和\*\*不进行修正**的两种情况下求出概率估计。 _(已知：_ $\Phi(1.67) \approx 0.9525, \,\, \Phi(1.58) \approx 0.9429$_)_

#### ✍️ 【详细解答过程】

##### **第一小题解答（CLT 的严格证明）：**

我们令标准化单项变量 $Y_i = \frac{X_i - \mu}{\sigma}$。显然， $E[Y_i] = 0$，且 $V[Y_i] = E[Y_i^2] = 1$。 我们将 $Y_i$ 的矩母函数 $M_Y(\theta)$ 在原点附近展开成泰勒级数（Taylor Series）：

$$M_Y(\theta) = E\left[ e^{\theta Y_i} \right] = E\left[ 1 + \theta Y_i + \frac{\theta^2 Y_i^2}{2!} + o(\theta^2) \right]$$

根据期望的线性性质：

$$M_Y(\theta) = 1 + \theta E[Y_i] + \frac{\theta^2}{2} E[Y_i^2] + o(\theta^2) = 1 + 0 + \frac{\theta^2}{2} + o(\theta^2)$$

现在，我们将标准化之和 $Z_n$ 写为 $Y_i$ 的加权和：

$$Z_n = \frac{S_n - n\mu}{\sigma \sqrt{n}} = \sum_{i=1}^{n} \frac{X_i - \mu}{\sigma\sqrt{n}} = \sum_{i=1}^{n} \frac{Y_i}{\sqrt{n}}$$

利用独立性，多个独立随机变量和的矩母函数等于其各自矩母函数的乘积：

$$M_{Z_n}(\theta) = E\left[ e^{\theta \sum_{i=1}^n \frac{Y_i}{\sqrt{n}}} \right] = \prod_{i=1}^{n} M_Y\left( \frac{\theta}{\sqrt{n}} \right) = \left[ M_Y\left( \frac{\theta}{\sqrt{n}} \right) \right]^n$$

将泰勒展开式代入：

$$M_{Z_n}(\theta) = \left[ 1 + \frac{\left( \frac{\theta}{\sqrt{n}} \right)^2}{2} + o\left(\frac{\theta^2}{n}\right) \right]^n = \left[ 1 + \frac{\theta^2}{2n} + o\left(\frac{\theta^2}{n}\right) \right]^n$$

当我们令 $n \to \infty$ 时，利用极限重要公式 $\lim_{n \to \infty} (1 + \frac{x}{n})^n = e^x$：

$$\lim_{n \to \infty} M_{Z_n}(\theta) = e^{\frac{\theta^2}{2}} \quad \text{(得证)}$$

_(标准正态分布的矩母函数唯一确定了标准正态分布，因此中心极限定理得证。)_

##### **第二小题解答：**

每个产品是否为不良品服从伯努利试验，设不良品总数为 $S_{400} \sim B(400, 0.1)$（二项分布）。

- **提取元数据**：
  - 单项期望 $\mu = p = 0.1$，单项方差 $\sigma^2 = p(1-p) = 0.09$。
  - 样本量 $n = 400$。
  - 总期望 $E[S_{400}] = n\mu = 400 \times 0.1 = 40$。
  - 总标准差 $\sigma_{total} = \sqrt{n\sigma^2} = \sqrt{400 \times 0.09} = \sqrt{36} = 6$。

- **(a) 情况一：不进行半整数修正**： 直接将离散边界值 50 带入连续化进行标准化：

  $$P(S_{400} \ge 50) = P\left( \frac{S_{400} - 40}{6} \ge \frac{50 - 40}{6} \right) \approx P(Z \ge 1.67)$$

  由于对称性，利用标准正态 CDF $\Phi$ 计算：

  $$P(Z \ge 1.67) = 1 - \Phi(1.67) \approx 1 - 0.9525 = 0.0475 \quad (4.75\%)$$

- **(b) 情况二：进行半整数修正（连续性修正）**： 由于二项分布是离散的，柱状图中的“50”这一项占用了区间 $[49.5, 50.5]$ 的宽度。 为了在连续正态近似中完整保留“大于等于 50”这一离散整型事件，必须将连续边界左移到 **49.5** 处：

  $$P(S_{400} \ge 50) \approx P(S_{continuous} \ge 49.5)$$

  对其进行标准化：

  $$= P\left( \frac{S_{continuous} - 40}{6} \ge \frac{49.5 - 40}{6} \right) = P\left( Z \ge \frac{9.5}{6} \right) \approx P(Z \ge 1.58)$$

  利用正态分布表：

  $$P(Z \ge 1.58) = 1 - \Phi(1.58) \approx 1 - 0.9429 = 0.0571 \quad (5.71\%)$$

  _(可以看出：进行修正后，由于将 50 到 49.5 的连续过渡区域算入，概率估计提升了大约_ $1\%$_，在实际统计工程中半整数修正是不可或缺的。)_

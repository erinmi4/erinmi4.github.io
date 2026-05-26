---
title: "概率论-CH5-几何分布与泊松分布"
slug: "概率论-CH5-几何分布与泊松分布"
description: "概率论-CH5-几何分布与泊松分布，待补充摘要。"
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

https://www.eecs70.org/assets/pdf/notes/n18.pdf

https://gemini.google.com/app/fff43ab677a9b2e6

# 概率论学习笔记：几何分布与泊松分布

## 1. 几何分布 (Geometric Distribution)

### 1.1 核心概念与定义

**几何分布**通常用于描述“**在某件事发生之前所需要等待的时间/尝试次数**”。

- **直观物理图像**：我们进行一系列独立的伯努利试验（如抛硬币，正面概率为 $p$），最后一次尝试成功，而前面所有的尝试全部失败。
- **随机变量定义**：设 $X$ 为得到第一次成功所需要的总试验次数，则 $X$ 服从参数为 $p$ 的几何分布。
- **记作**：$X \sim \text{Geom}(p)$ 或 $X \sim \text{Geometric}(p)$，其中 $X \in \{1, 2, 3, \dots\}$。

### 1.2 概率质量函数 (PMF)

由于前 $i-1$ 次均失败（概率为 $1-p$），第 $i$ 次成功（概率为 $p$），且各次试验相互独立，因此：

$$\mathbb{P}[X = i] = (1-p)^{i-1}p, \quad i = 1, 2, 3, \dots$$

#### 验证总概率为 1：

利用无穷等比级数求和公式 $\sum_{n=0}^{\infty} r^n = \frac{1}{1-r} \ (|r| < 1)$：

$$\sum_{i=1}^{\infty} \mathbb{P}[X = i] = \sum_{i=1}^{\infty} (1-p)^{i-1}p = p \sum_{k=0}^{\infty} (1-p)^k = p \cdot \frac{1}{1-(1-p)} = 1$$

![image-20260526195320912](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH5-%E5%87%A0%E4%BD%95%E5%88%86%E5%B8%83%E4%B8%8E%E6%B3%8A%E6%9D%BE%E5%88%86%E5%B8%83.assets/image-20260526195320912.png)

### 💡 💡 重难点突破 1：尾部和公式 (Tail Sum Formula)

> **个人备忘**：手写笔记中提到“尾部公式不好想、尾部和内径不好记”。这里用最直观的**二维网格 regrouping（重新分组）**来证明它。

#### 定理：尾部和公式

对于任何只取非负整数值（即 $\{0, 1, 2, \dots\}$）的随机变量 $X$，其期望值可以表示为：

$$\mathbb{E}[X] = \sum_{i=1}^{\infty} \mathbb{P}[X \geq i]$$

#### 直观证明（网格展开法）：

我们将期望 $\mathbb{E}[X] = \sum_{j=1}^{\infty} j \cdot \mathbb{P}[X=j]$ 的每一项展开：

- $1 \cdot \mathbb{P}[X=1] = \mathbb{P}[X=1]$
- $2 \cdot \mathbb{P}[X=2] = \mathbb{P}[X=2] + \mathbb{P}[X=2]$
- $3 \cdot \mathbb{P}[X=3] = \mathbb{P}[X=3] + \mathbb{P}[X=3] + \mathbb{P}[X=3]$
- $\dots$

我们将这些项排成一个三角形网格：

$$\begin{aligned} \mathbb{E}[X] &= \mathbb{P}[X=1] \ &+ \mathbb{P}[X=2] + \mathbb{P}[X=2] \ &+ \mathbb{P}[X=3] + \mathbb{P}[X=3] + \mathbb{P}[X=3] \ &+ \mathbb{P}[X=4] + \mathbb{P}[X=4] + \mathbb{P}[X=4] + \mathbb{P}[X=4] \ &+ \dots \end{aligned}$$

- **按行求和**：就是标准的期望定义 $\sum_{j=1}^{\infty} j \cdot \mathbb{P}[X=j]$。
- **按列求和**：
  - 第一列之和：$\mathbb{P}[X=1] + \mathbb{P}[X=2] + \mathbb{P}[X=3] + \dots = \mathbb{P}[X \ge 1]$
  - 第二列之和：$\mathbb{P}[X=2] + \mathbb{P}[X=3] + \mathbb{P}[X=4] + \dots = \mathbb{P}[X \ge 2]$
  - 第三列之和：$\mathbb{P}[X=3] + \mathbb{P}[X=4] + \mathbb{P}[X=5] + \dots = \mathbb{P}[X \ge 3]$
  - 依此类推，第 $i$ 列之和正是 $\mathbb{P}[X \ge i]$。

因此，将所有列相加，立得：

$$\mathbb{E}[X] = \sum_{i=1}^{\infty} \mathbb{P}[X \ge i]$$

*这个网格展开法非常形象，以后只要在脑海里画出这个三角形，就能瞬间记住并推导该公式！*

### 💡 💡 重难点突破 2：几何分布均值与方差的严格证明

> **个人备忘**：手写笔记中红字写着“其实期望和方差可以用证明，我没看明白”。下面给出两种最经典的推导方法，助你彻底攻克这一关。

#### 1. 期望 $\mathbb{E}[X]$ 的计算

##### 【方法一：利用尾部和公式（极力推荐，最简便）】

对于几何分布 $X \sim \text{Geom}(p)$，事件 “$X \ge i$” 的物理意义是：**前** $i-1$ **次试验全部失败**。 因此，其概率非常直观：

$$\mathbb{P}[X \ge i] = (1-p)^{i-1}$$

直接带入尾部和公式：

$$\mathbb{E}[X] = \sum_{i=1}^{\infty} \mathbb{P}[X \ge i] = \sum_{i=1}^{\infty} (1-p)^{i-1}$$

这又是一个首项为 1、公比为 $1-p$ 的等比级数，直接套用求和公式：

$$\mathbb{E}[X] = \frac{1}{1 - (1-p)} = \frac{1}{p}$$

*证明完毕！是不是非常精妙且简单？*

##### 【方法二：利用微积分级数求导技巧】

这是教科书上常见的证明方法。从等比级数出发：

$$\sum_{i=0}^{\infty} (1-p)^i = \frac{1}{p}$$

对等式两边关于 $p$ 进行求导：

$$\frac{d}{dp} \left[ \sum_{i=0}^{\infty} (1-p)^i \right] = \frac{d}{dp} \left( \frac{1}{p} \right)$$

利用求导法则（注意左边链式法则求导会产生一个 $-1$）：

$$\sum_{i=1}^{\infty} i(1-p)^{i-1} \cdot (-1) = -\frac{1}{p^2} \implies \sum_{i=1}^{\infty} i(1-p)^{i-1} = \frac{1}{p^2}$$

将此结果带入期望的直接定义式中：

$$\mathbb{E}[X] = \sum_{i=1}^{\infty} i \cdot \mathbb{P}[X = i] = \sum_{i=1}^{\infty} i(1-p)^{i-1}p = p \sum_{i=1}^{\infty} i(1-p)^{i-1} = p \cdot \frac{1}{p^2} = \frac{1}{p}$$

#### 2. 方差 $\text{Var}(X)$ 的计算

我们知道方差的计算公式为：

$$\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \mathbb{E}[X^2] - \frac{1}{p^2}$$

现在我们需要求 $\mathbb{E}[X^2]$。我们继续使用上面的微积分求导技巧。

将公式 $\sum_{i=1}^{\infty} i(1-p)^{i-1} = \frac{1}{p^2}$ 两边同乘以 $(1-p)$，得到：

$$\sum_{i=1}^{\infty} i(1-p)^i = \frac{1-p}{p^2} = \frac{1}{p^2} - \frac{1}{p}$$

对两边关于 $p$ 再次求导：

$$\sum_{i=1}^{\infty} i^2 (1-p)^{i-1} \cdot (-1) = -\frac{2}{p^3} + \frac{1}{p^2} \implies \sum_{i=1}^{\infty} i^2 (1-p)^{i-1} = \frac{2-p}{p^3}$$

而 $\mathbb{E}[X^2]$ 的定义为：

$$\mathbb{E}[X^2] = \sum_{i=1}^{\infty} i^2 \cdot \mathbb{P}[X = i] = p \sum_{i=1}^{\infty} i^2 (1-p)^{i-1}$$

代入刚才求导得到的结果：

$$\mathbb{E}[X^2] = p \cdot \frac{2-p}{p^3} = \frac{2-p}{p^2}$$

最后，计算方差 $\text{Var}(X)$：

$$\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \frac{2-p}{p^2} - \frac{1}{p^2} = \frac{1-p}{p^2}$$

*证明完毕！*

### 1.3 几何分布的无记忆性 (Memoryless Property)

几何分布是**唯一**具有无记忆性的离散概率分布。

- **公式表示**：对任意正整数 $m, n$，有：

  $$\mathbb{P}[X > n+m \mid X > m] = \mathbb{P}[X > n]$$

- **直观理解**：假设你已经连续抛了 $m$ 次硬币全是反面（即 $X > m$），那么你还需要再抛 $n$ 次才能得到第一次正面的概率，与你刚开始抛硬币、需要抛 $n$ 次才能成功的概率是一模一样的。硬币“没有记忆”，它不记得之前失败了多少次。

### 📝 经典例题精析：赠券收集问题 (Coupon Collecting Problem)

> **个人备忘**：手写笔记中提到“赠券收集问题很有意思，每一轮抽卡都是一次几何分布，例题要保留并详细写明过程”。

#### 【题目背景】

假设有 $n$ 种不同的卡片。每次购买一盒附赠卡片的零食，都会等概率地获得其中一种卡片。问：要收集齐全部 $n$ 种卡片，平均需要购买多少盒零食？

#### 【详细解析过程】

我们将整个收集过程划分为 $n$ 个阶段。设 $S_n$ 为收集齐 $n$ 种卡片所需的总购买次数。 我们可以将 $S_n$ 拆分为：

$$S_n = X_1 + X_2 + X_3 + \dots + X_n$$

其中，$X_i$ 表示**在已拥有** $i-1$ **种不同卡片的情况下，为了拿到第** $i$ **种新卡片所需要购买的盒数**。

现在我们分析每一次抽卡（即每一个 $X_i$）的概率分布：

1. $X_1$ **阶段**：此时我们手里没有任何卡片。第一次买零食，必能拿到一张新卡片。
   - 成功概率 $p_1 = \frac{n}{n} = 1$。
   - $X_1 \sim \text{Geom}(1)$，期望 $\mathbb{E}[X_1] = 1$。
2. $X_2$ **阶段**：此时我们手里已有 1 种卡片。每次购买时，拿到重复卡片的概率是 $\frac{1}{n}$，拿到新卡片的概率是 $p_2 = \frac{n-1}{n}$。
   - 只要没拿到新卡片，我们就继续在这个阶段等待。这显然符合几何分布！
   - $X_2 \sim \text{Geom}\left(\frac{n-1}{n}\right)$，期望 $\mathbb{E}[X_2] = \frac{n}{n-1}$。
3. $X_i$ **阶段**：此时我们手里已有 $i-1$ 种不同卡片。要拿到第 $i$ 种全新卡片的成功概率为：
   - $p_i = \frac{n - (i-1)}{n} = \frac{n-i+1}{n}$。
   - $X_i \sim \text{Geom}\left(\frac{n-i+1}{n}\right)$，期望 $\mathbb{E}[X_i] = \frac{n}{n-i+1}$。

根据**期望的线性性质**（$\mathbb{E}[\sum Y_i] = \sum \mathbb{E}[Y_i]$，无需独立性假设）： $$\begin{aligned} \mathbb{E}[S_n] &= \sum_{i=1}^n \mathbb{E}[X_i] \ &= \frac{n}{n} + \frac{n}{n-1} + \frac{n}{n-2} + \dots + \frac{n}{2} + \frac{n}{1} \ &= n \sum_{i=1}^n \frac{1}{i} \end{aligned}$$

#### 【调和级数近似】

数学上，调和级数 $\sum_{i=1}^n \frac{1}{i}$ 可以用自然对数进行极好的近似：

$$\sum_{i=1}^n \frac{1}{i} \approx \ln n + \gamma_E$$

其中 $\gamma_E \approx 0.5772$（欧拉-马斯克若尼常数）。

因此，收集齐 $n$ 种卡片平均所需的次数约为：

$$\mathbb{E}[S_n] \approx n(\ln n + \gamma_E)$$

**例**：如果 $n = 100$，则 $\mathbb{E}[S_{100}] \approx 100 \times (\ln 100 + 0.5772) \approx 100 \times (4.605 + 0.577) \approx 518$ 次。

## 2. 泊松分布 (Poisson Distribution)

### 2.1 核心概念与定义

**泊松分布**常用于对物理世界中“**稀有事件（Rare Events）**”在一段连续区间（时间或空间）内发生的次数进行建模。

- **物理假设**：
  1. 事件在任意极小区间内发生的概率与区间长度成正比，且连续区域内的总体平均发生密度为恒定值 $\lambda$。
  2. 在不重合区间内事件的发生是相互独立的。
- **随机变量定义**：设 $X$ 为单位区间内事件发生的次数，则 $X$ 服从参数为 $\lambda$ 的泊松分布。
- **记作**：$X \sim \text{Poisson}(\lambda)$，其中 $X \in \{0, 1, 2, \dots\}$。

![image-20260526195344248](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH5-%E5%87%A0%E4%BD%95%E5%88%86%E5%B8%83%E4%B8%8E%E6%B3%8A%E6%9D%BE%E5%88%86%E5%B8%83.assets/image-20260526195344248.png)

### 2.2 概率质量函数 (PMF)

$$\mathbb{P}[X = i] = \frac{\lambda^i}{i!} e^{-\lambda}, \quad i = 0, 1, 2, \dots$$

> 💡 **小贴士（公式记忆技巧）**： 我之前觉得泊松分布不好记。但只要联想到数学里经典的**泰勒展开式**：
>
> $$e^{\lambda} = \sum_{i=0}^{\infty} \frac{\lambda^i}{i!}$$
>
> 两边同除以 $e^{\lambda}$（即乘以 $e^{-\lambda}$），立得：
>
> $$\sum_{i=0}^{\infty} \frac{\lambda^i}{i!} e^{-\lambda} = 1$$
>
> 这样，PMF 表达式 $\frac{\lambda^i}{i!} e^{-\lambda}$ 的分子、分母和常数项就顺理成章地深深印在脑海里了！

### 📝 典型例题：印刷错别字问题

> **例题**：某作家写文章时，平均每 1 页会出现 1 个错别字。我们可以将其建模为参数 $\lambda = 1$ 的泊松分布 $X \sim \text{Poisson}(1)$。

#### 问题 1：某一页中正好有 5 个错别字的概率是多少？

$$\mathbb{P}[X = 5] = \frac{1^5}{5!} e^{-1} = \frac{1}{120e} \approx \frac{1}{326} \approx 0.00307$$

#### 问题 2（扩展）：若整篇文章长达 200 页，假设各页印刷错误独立，那么“存在至少一页恰好有 5 个错别字”的概率是多少？

我们通过计算余事件（即每页的错别字数都不等于 5）来进行求解：

1. 单个页面不等于 5 个错别字的概率为 $1 - \mathbb{P}[X=5] = 1 - \frac{1}{120e}$。

2. 200 页均不等于 5 个错别字的概率为：

   $$\mathbb{P}[\text{每页均} \ne 5] = \left( 1 - \frac{1}{120e} \right)^{200}$$

3. 因此，“存在至少一页恰好有 5 个错别字”的概率为：

   $$\mathbb{P}[\text{至少一页} = 5] = 1 - \left( 1 - \frac{1}{120e} \right)^{200} \approx 1 - \left(1 - \frac{1}{326}\right)^{200} \approx 1 - 0.54 = 0.46 \ (46\%)$$

### 2.3 泊松分布的均值与方差

> 💡 **重要结论**： 对于泊松分布 $X \sim \text{Poisson}(\lambda)$，其**参数、期望（均值）、方差“三位一体”**，全都是同一个值：
>
> $$\mathbb{E}[X] = \lambda$$
>
> $$\text{Var}(X) = \lambda$$

#### 证明 1：期望 $\mathbb{E}[X] = \lambda$

由于 $i=0$ 时项为 0，我们从 $i=1$ 开始求和： $$\begin{aligned} \mathbb{E}[X] &= \sum_{i=0}^{\infty} i \cdot \frac{\lambda^i}{i!} e^{-\lambda} \ &= \sum_{i=1}^{\infty} i \cdot \frac{\lambda^i}{i(i-1)!} e^{-\lambda} \quad \text{（消去 } i\text{）} \ &= \lambda e^{-\lambda} \sum_{i=1}^{\infty} \frac{\lambda^{i-1}}{(i-1)!} \end{aligned}$$ 设 $j = i-1$，当 $i$ 从 1 到 $\infty$ 时，$j$ 从 0 到 $\infty$：

$$\mathbb{E}[X] = \lambda e^{-\lambda} \sum_{j=0}^{\infty} \frac{\lambda^j}{j!} = \lambda e^{-\lambda} e^{\lambda} = \lambda$$

#### 证明 2：方差 $\text{Var}(X) = \lambda$

我们先计算阶乘矩 $\mathbb{E}[X(X-1)]$（利用 $i(i-1)$ 的消项性质会比直接求 $\mathbb{E}[X^2]$ 更巧妙）： $$\begin{aligned} \mathbb{E}[X(X-1)] &= \sum_{i=0}^{\infty} i(i-1) \cdot \frac{\lambda^i}{i!} e^{-\lambda} \ &= \sum_{i=2}^{\infty} i(i-1) \cdot \frac{\lambda^i}{i(i-1)(i-2)!} e^{-\lambda} \ &= \lambda^2 e^{-\lambda} \sum_{i=2}^{\infty} \frac{\lambda^{i-2}}{(i-2)!} \end{aligned}$$ 令 $k = i-2$：

$$\mathbb{E}[X(X-1)] = \lambda^2 e^{-\lambda} \sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = \lambda^2 e^{-\lambda} e^{\lambda} = \lambda^2$$

由此，我们可以推导出 $\mathbb{E}[X^2]$：

$$\mathbb{E}[X^2] = \mathbb{E}[X(X-1)] + \mathbb{E}[X] = \lambda^2 + \lambda$$

最后计算方差：

$$\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = (\lambda^2 + \lambda) - \lambda^2 = \lambda$$

*证明完毕！*

### 2.4 独立泊松随机变量之和

#### 定理：

若 $X \sim \text{Poisson}(\lambda)$， $Y \sim \text{Poisson}(\mu)$ 且 $X$ 与 $Y$ 相互独立，则：

$$X + Y \sim \text{Poisson}(\lambda + \mu)$$

#### 证明：

对任意非负整数 $k$，利用全概率公式和独立性，其卷积展开为： $$\begin{aligned} \mathbb{P}[X+Y = k] &= \sum_{j=0}^k \mathbb{P}[X=j, Y=k-j] \ &= \sum_{j=0}^k \mathbb{P}[X=j] \cdot \mathbb{P}[Y=k-j] \quad \text{（独立性）} \ &= \sum_{j=0}^k \left( \frac{\lambda^j}{j!} e^{-\lambda} \right) \cdot \left( \frac{\mu^{k-j}}{(k-j)!} e^{-\mu} \right) \ &= e^{-(\lambda+\mu)} \sum_{j=0}^k \frac{\lambda^j \mu^{k-j}}{j!(k-j)!} \end{aligned}$$ 分子分母同乘以 $k!$：

$$\mathbb{P}[X+Y = k] = \frac{e^{-(\lambda+\mu)}}{k!} \sum_{j=0}^k \frac{k!}{j!(k-j)!} \lambda^j \mu^{k-j}$$

注意到 $\frac{k!}{j!(k-j)!}$ 正是组合数 $\binom{k}{j}$。根据**二项式定理** $\sum_{j=0}^k \binom{k}{j}\lambda^j \mu^{k-j} = (\lambda+\mu)^k$，上式化简为：

$$\mathbb{P}[X+Y = k] = \frac{(\lambda+\mu)^k}{k!} e^{-(\lambda+\mu)}$$

这正是参数为 $\lambda+\mu$ 的泊松分布的 PMF！

> 📌 **补充观察**： 随着参数 $\lambda$ 逐渐增大，泊松分布的图像会从极度右偏（不对称）逐渐演变成关于均值高度对称的形状。这在直观上非常像一个**“钟形曲线”**（即正态分布）。

### 2.5 泊松分布作为二项分布的极限 (Poisson as the Limit of Binomial)

#### 物理背景：

泊松分布是“稀有事件”的体现。当试验次数 $n \to \infty$（样本极大），而单次事件发生概率 $p \to 0$（极罕见），但总体平均发生次数 $np = \lambda$ 保持稳定不变时，二项分布将收敛于泊松分布。

#### 数学定理：

设 $X \sim \text{Binomial}\left(n, \frac{\lambda}{n}\right)$，则对任意固定的 $i$：

$$\lim_{n \to \infty} \mathbb{P}[X = i] = \frac{\lambda^i}{i!} e^{-\lambda}$$

#### 详细极限推导过程：

二项分布的 PMF 为：

$$\mathbb{P}[X = i] = \binom{n}{i} \left(\frac{\lambda}{n}\right)^i \left(1 - \frac{\lambda}{n}\right)^{n-i}$$

展开组合数并整理项：

$$\mathbb{P}[X = i] = \frac{n(n-1)(n-2)\dots(n-i+1)}{i!} \cdot \frac{\lambda^i}{n^i} \cdot \left(1 - \frac{\lambda}{n}\right)^n \cdot \left(1 - \frac{\lambda}{n}\right)^{-i}$$

我们将各项重新归类分块：

$$\mathbb{P}[X = i] = \frac{\lambda^i}{i!} \cdot \underbrace{\left[ \frac{n}{n} \cdot \frac{n-1}{n} \cdot \dots \cdot \frac{n-i+1}{n} \right]}_{\text{第一部分}} \cdot \underbrace{\left(1 - \frac{\lambda}{n}\right)^n}_{\text{第二部分}} \cdot \underbrace{\left(1 - \frac{\lambda}{n}\right)^{-i}}_{\text{第三部分}}$$

当 $n \to \infty$ 时，我们分别分析这三部分极限：

1. **第一部分**：含有 $i$ 个分式的乘积（由于 $i$ 是固定常数）：

   $$\lim_{n \to \infty} \left[ 1 \cdot \left(1 - \frac{1}{n}\right) \cdot \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{i-1}{n}\right) \right] = 1 \cdot 1 \cdot \dots \cdot 1 = 1$$

2. **第二部分**：经典的自然常数定义式 $\lim_{x\to\infty}(1 + \frac{1}{x})^x = e$：

   $$\lim_{n \to \infty} \left(1 - \frac{\lambda}{n}\right)^n = e^{-\lambda}$$

3. **第三部分**：由于 $i$ 为常数，底数趋向于 1：

   $$\lim_{n \to \infty} \left(1 - \frac{\lambda}{n}\right)^{-i} = (1 - 0)^{-i} = 1$$

将这三部分的极限代回原式，立得：

$$\lim_{n \to \infty} \mathbb{P}[X = i] = \frac{\lambda^i}{i!} \cdot 1 \cdot e^{-\lambda} \cdot 1 = \frac{\lambda^i}{i!} e^{-\lambda}$$

*极限证明完毕！*

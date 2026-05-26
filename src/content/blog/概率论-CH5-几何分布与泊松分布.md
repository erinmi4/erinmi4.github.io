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

---

# 离散概率分布：精准练习与巩固指南（含详细推导与答案）

这份指南旨在将你整理的**几何分布**与**泊松分布**笔记知识点，完美对接你上传的日语教材 **《Chapter 3：離散確率分布》**（对应文件：`004_Chapter-3.-離散確率分布.pdf`）。

这里为每一道精选题目提供了极其详尽的推导过程、解题技巧和最终答案，帮助你进行深度巩固。

## 🎯 第一部分：几何分布与无记忆性巩固

### 1. 期望、方差与尾部概率基础演练

- **对应教材位置**：**Page 46 —— 問題 21：幾何分布, ファーストサクセス分布 I**

#### 📝 【题目背景】

连续投掷一枚骰子。设 $X$ 为第一次出现 6 点之前，出现非 6 点的次数；设 $Y$ 为第一次出现 6 点时投掷的总次数。

1. 求 $X$ 的概率分布 $\mathbb{P}[X=k]$、$Y$ 的概率分布 $\mathbb{P}[Y=k]$、以及两者的期望 $\mathbb{E}$ 和方差 $\text{Var}$。
2. 计算尾部概率 $\mathbb{P}[X \ge 20]$，区间概率 $\mathbb{P}[20 \le Y < 30]$，以及特殊期望 $\mathbb{E}[(1/3)^X]$。

#### ✏️ 【详细推导与答案】

##### **第 1 问：求** $X$ **与** $Y$ **的分布、期望与方差**

- **物理模型分析**：每次投骰子，“出现 6 点”的成功概率 $p = \frac{1}{6}$，“出现非 6 点”的失败概率 $q = 1 - p = \frac{5}{6}$。

- $X$ **的分布**：$X$ 代表成功前的失败次数，可取 $0, 1, 2, \dots$。

  $$\mathbb{P}[X = k] = \frac{1}{6} \left(\frac{5}{6}\right)^k, \quad k = 0, 1, 2, \dots \quad \text{（几何分布）}$$

- $Y$ **的分布**：$Y$ 代表首次成功时的总试验次数（即 $Y = X + 1$），可取 $1, 2, 3, \dots$。

  $$\mathbb{P}[Y = k] = \frac{1}{6} \left(\frac{5}{6}\right)^{k-1}, \quad k = 1, 2, 3, \dots \quad \text{（首成分布 / First Success）}$$

- **期望计算**：

  - 利用等比级数求导技巧，我们已知 $Y$ 的期望 $\mathbb{E}[Y] = \frac{1}{p} = 6$。

  - 由于 $Y = X + 1$，根据期望的线性性质：

    $$\mathbb{E}[X] = \mathbb{E}[Y - 1] = \mathbb{E}[Y] - 1 = 6 - 1 = 5$$

- **方差计算**：

  - 常数平移不改变方差大小，即 $\text{Var}(X) = \text{Var}(Y - 1) = \text{Var}(Y)$。

  - 根据方差公式：

    $$\text{Var}(X) = \text{Var}(Y) = \frac{1-p}{p^2} = \frac{5/6}{(1/6)^2} = 5 \times 6 = 30$$

> **💡 本问答案**：
>
> - $\mathbb{P}[X=k] = \frac{1}{6}\left(\frac{5}{6}\right)^k \ (k \ge 0)$，$\mathbb{E}[X] = 5$，$\text{Var}(X) = 30$。
> - $\mathbb{P}[Y=k] = \frac{1}{6}\left(\frac{5}{6}\right)^{k-1} \ (k \ge 1)$，$\mathbb{E}[Y] = 6$，$\text{Var}(Y) = 30$。

##### **第 2 问：计算三个特定概率与期望**

- **① 尾部概率** $\mathbb{P}[X \ge 20]$：

  - 物理意义：在第一次投出 6 点前，至少投出了 20 次非 6 点。即**前 20 次投掷全部失败（均没有投出 6）**。

  - 直接得出：

    $$\mathbb{P}[X \ge 20] = q^{20} = \left(\frac{5}{6}\right)^{20}$$

- **② 区间概率** $\mathbb{P}[20 \le Y < 30]$：

  - 该事件等价于 $Y \in \{20, 21, \dots, 29\}$。

  - 我们可以将其转化为两个尾部概率之差：

    $$\mathbb{P}[20 \le Y < 30] = \mathbb{P}[Y \ge 20] - \mathbb{P}[Y \ge 30]$$

  - 依据首成分布的尾部公式，“$Y \ge k$” 表示前 $k-1$ 次全部失败：

    $$\mathbb{P}[Y \ge 20] = \left(\frac{5}{6}\right)^{19}, \quad \mathbb{P}[Y \ge 30] = \left(\frac{5}{6}\right)^{29}$$

  - 因此：

    $$\mathbb{P}[20 \le Y < 30] = \left(\frac{5}{6}\right)^{19} - \left(\frac{5}{6}\right)^{29} = \left(\frac{5}{6}\right)^{19} \left[ 1 - \left(\frac{5}{6}\right)^{10} \right]$$

- **③ 特殊期望** $\mathbb{E}[(1/3)^X]$：

  - 依据期望的定义（LOTUS 定理）：

    $$\mathbb{E}\left[\left(\frac{1}{3}\right)^X\right] = \sum_{k=0}^{\infty} \left(\frac{1}{3}\right)^k \cdot \mathbb{P}[X=k] = \sum_{k=0}^{\infty} \left(\frac{1}{3}\right)^k \cdot \frac{1}{6} \left(\frac{5}{6}\right)^k = \frac{1}{6} \sum_{k=0}^{\infty} \left(\frac{5}{18}\right)^k$$

  - 这是一个公比 $r = \frac{5}{18} < 1$ 的无穷等比级数，应用求和公式 $\sum r^k = \frac{1}{1-r}$：

    $$\mathbb{E}\left[\left(\frac{1}{3}\right)^X\right] = \frac{1}{6} \cdot \frac{1}{1 - \frac{5}{18}} = \frac{1}{6} \cdot \frac{18}{13} = \frac{3}{13}$$

> **💡 本问答案**：
>
> - $\mathbb{P}[X \ge 20] = \left(\frac{5}{6}\right)^{20}$
> - $\mathbb{P}[20 \le Y < 30] = \left(\frac{5}{6}\right)^{19} - \left(\frac{5}{6}\right)^{29}$
> - $\mathbb{E}[(1/3)^X] = \frac{3}{13}$

### 2. 条件概率与无记忆性实战

- **对应教材位置**：**Page 48 —— 問題 22：幾何分布, ファーストサクセス分布 II**

#### 📝 【题目背景】

设双胞胎 A 和 B 的寿命（离散时间）分别为随机变量 $X$ 和 $Y$，它们相互独立，且都服从几何分布 $Ge(1/80)$。

- *注：不同的日系教材对* $Ge(p)$ *有两种定义 convention（从 0 开始或从 1 开始）。为确保严谨，下方提供两种情况的完美推导。*

#### ✏️ 【详细推导与答案】

#### **【情形 A】若教材定义** $Ge(p)$ **从 1 开始（代表生存的年份数，最符合人寿物理背景）**

此时 $X, Y \in \{1, 2, \dots\}$，$p = \frac{1}{80}$，失败率 $q = \frac{79}{80}$。PMF 为 $\mathbb{P}[X=k] = p q^{k-1}$。

- **① 求** $\mathbb{E}[X]$：

  - 首成分布的期望公式直接给出：

    $$\mathbb{E}[X] = \frac{1}{p} = 80 \quad \text{（岁）}$$

- **② 求条件概率** $\mathbb{P}[X \ge 90 \mid X \ge 60]$：

  - 根据无记忆性公式 $\mathbb{P}[X > n+m \mid X > m] = \mathbb{P}[X > n]$：

    $$\mathbb{P}[X \ge 90 \mid X \ge 60] = \mathbb{P}[X \ge 31] = q^{30} = \left(\frac{79}{80}\right)^{30}$$

  - *代数验证*：

    $$\mathbb{P}[X \ge 90 \mid X \ge 60] = \frac{\mathbb{P}[X \ge 90]}{\mathbb{P}[X \ge 60]} = \frac{q^{89}}{q^{59}} = q^{30} = \left(\frac{79}{80}\right)^{30}$$

- **③ 设** $Z = \min(X, Y)$**，求** $\mathbb{P}[Z \ge k]$ **门槛概率及** $Z$ **的分布**：

  - 因为 $X, Y$ 独立：

    $$\mathbb{P}[Z \ge k] = \mathbb{P}[X \ge k, Y \ge k] = \mathbb{P}[X \ge k]\mathbb{P}[Y \ge k] = q^{k-1} \cdot q^{k-1} = (q^2)^{k-1} = \left(\frac{6241}{6400}\right)^{k-1}$$

  - 这说明 $Z$ 也是一个首成分布，其新的等效失败率为 $q' = q^2 = \frac{6241}{6400}$，成功率为：

    $$p' = 1 - q' = 1 - \frac{6241}{6400} = \frac{159}{6400}$$

  - 因此 $Z = \min(X, Y) \sim \text{Geom}_1\left(\frac{159}{6400}\right)$，其 PMF 为：

    $$\mathbb{P}[Z = k] = p' (q')^{k-1} = \frac{159}{6400} \left(\frac{6241}{6400}\right)^{k-1}, \quad k = 1, 2, \dots$$

- **④ 求** $\mathbb{E}[Z]$**、**$\text{Var}(Z)$ **以及** $\mathbb{E}[\max(X, Y)]$：

  - **期望**：$\mathbb{E}[Z] = \frac{1}{p'} = \frac{6400}{159} \approx 40.25$。

  - **方差**：$\text{Var}(Z) = \frac{q'}{(p')^2} = \frac{6241/6400}{(159/6400)^2} = \frac{6241 \times 6400}{159^2} = \frac{39942400}{25281} \approx 1579.9$。

  - **极大值期望** $\mathbb{E}[\max(X, Y)]$：

    - 利用代数恒等式 $\max(X,Y) + \min(X,Y) = X + Y$，两边取期望：

      $$\mathbb{E}[\max(X, Y)] = \mathbb{E}[X] + \mathbb{E}[Y] - \mathbb{E}[\min(X, Y)] = 80 + 80 - 40.25 = 119.75 \quad \text{（岁）}$$

### 3. 赠券收集问题（海报收集）

- **对应教材位置**：**Page 66 —— 問題 31：総合問題 (1) ~ (4)**

#### 📝 【题目背景】

每购买一张偶像组合（共 $N$ 人）的 CD，都会随机等概率附赠一张成员的海报。

1. 购买 $N$ 张 CD 时，集齐全部 $N$ 人海报的概率。
2. 购买 $N+1$ 张 CD 时，集齐全部 $N$ 人海报的概率。
3. 购买 $m$ 张 CD 时，集齐的海报人数为 $X_m$，求其期望 $\mathbb{E}[X_m]$。
4. 设购买 $Y$ 张 CD 时首次集齐全部 $N$ 人的海报，求期望 $\mathbb{E}[Y]$。

#### ✏️ 【详细推导与答案】

##### **第 1 问：购买** $N$ **张 CD 集齐的概率**

- **分析**：购买 $N$ 张 CD 且获得 $N$ 张互不相同的海报。

- **计算**：相当于将 $N$ 个不同的海报全排列填入 $N$ 个购买位置，方法数为 $N!$。总样本空间为 $N^N$。

  $$\mathbb{P}[\text{购买 } N \text{ 张集齐}] = \frac{N!}{N^N}$$

##### **第 2 问：购买** $N+1$ **张 CD 集齐的概率**

*此题在日文原书中有两种常见的语义理解，这里给出最严谨的两种解答分析：*

- **语义一：在第** $N+1$ **次购买的瞬间“正好”首次集齐全部** $N$ **张海报**

  - **分析**：这意味着在前 $N$ 次购买中，我们**只集齐了** $N-1$ **种不同的海报**（有且仅有一种海报重复了），而在第 $N+1$ 次购买时，恰好抽中了那张唯一缺失的海报。

  - **步骤**：

    1. 从 $N$ 种中选出 $N-1$ 种出现在前 $N$ 次中：共有 $\binom{N}{N-1} = N$ 种选法。
    2. 将这选出的 $N-1$ 种海报排入前 $N$ 个位置，使得每种至少出现一次（即有且仅有一种出现了 2 次）： 这等价于将 $N$ 个元素划分成 $N-1$ 个非空集合（第二类斯特林数 $S(N, N-1) = \binom{N}{2}$），再给集合分配成员，方法数为 $\binom{N}{2} \times (N-1)!$。
    3. 第 $N+1$ 次购买必须精准抽中唯一缺失的那 1 种海报（概率为 $\frac{1}{N}$）。

  - **公式**：

    $$\text{方法数} = N \cdot \left[ \binom{N}{2} \cdot (N-1)! \right] \cdot 1 = N \cdot \frac{N(N-1)}{2} \cdot (N-1)! = \frac{N(N-1)}{2} \cdot N!$$

    $$\mathbb{P}[\text{正好在第 } N+1 \text{ 次集齐}] = \frac{\frac{N(N-1)}{2} \cdot N!}{N^{N+1}} = \frac{N! (N-1)}{2 N^N}$$

- **语义二：在前** $N+1$ **次购买内“已经”集齐了全部** $N$ **张海报（允许在第** $N$ **次就提前集齐）**

  - **公式**：

    $$\mathbb{P}[\text{前 } N+1 \text{ 次内集齐}] = \mathbb{P}[\text{第 } N \text{ 次集齐}] + \mathbb{P}[\text{第 } N+1 \text{ 次首次集齐}] = \frac{N!}{N^N} + \frac{N! (N-1)}{2 N^N} = \frac{N!(N+1)}{2 N^N}$$

##### **第 3 问：求** $X_m$**（购买** $m$ **张 CD 收集到的海报种数）的期望**

- **分析**：利用**指示变量（Indicator Variable）分解法**。

- **步骤**：

  1. 设随机变量 $I_j$ 表示第 $j$ 位成员的海报是否被收集到：

     $$I_j = \begin{cases} 1, & \text{成员 } j \text{ 已被收集到} \\ 0, & \text{未收集到} \end{cases}$$

  2. 易得 $X_m = \sum_{j=1}^N I_j$。

  3. 计算 $I_j = 1$ 的概率：

     $$\mathbb{P}[I_j = 1] = 1 - \mathbb{P}[\text{购买 } m \text{ 次均未抽中成员 } j] = 1 - \left(1 - \frac{1}{N}\right)^m$$

  4. 利用期望的线性性质：

     $$\mathbb{E}[X_m] = \sum_{j=1}^N \mathbb{E}[I_j] = N \cdot \mathbb{P}[I_1 = 1] = N \left[ 1 - \left(1 - \frac{1}{N}\right)^m \right]$$

##### **第 4 问：求首次集齐全部** $N$ **人海报所需 CD 数** $Y$ **的期望**

- **分析**：这正是我们在笔记中推导过的经典“赠券收集问题”。

- **步骤**：

  - 将 $Y$ 拆分为 $Y = \sum_{i=1}^N X_i$，其中 $X_i$ 是收集齐 $i-1$ 种后，拿到第 $i$ 种新海报所需的购买次数。

  - $X_i$ 服从几何分布，其单次中奖概率 $p_i = \frac{N - (i-1)}{N} = \frac{N-i+1}{N}$。

  - 其期望为 $\mathbb{E}[X_i] = \frac{1}{p_i} = \frac{N}{N-i+1}$。

  - 总期望为：

    $$\mathbb{E}[Y] = \sum_{i=1}^N \mathbb{E}[X_i] = N \sum_{i=1}^N \frac{1}{N-i+1} = N \sum_{k=1}^N \frac{1}{k} \approx N(\ln N + \gamma_E)$$

## 🎯 第二部分：泊松分布与极限理论巩固

### 1. 泊松近似（帕青哥中奖问题）

- **对应教材位置**：**Page 54 —— 問題 25：ポアソン分布 I**

#### 📝 【题目背景】

在帕青哥游戏中，单次入球的中奖概率为 $p = 1/1000$。设投掷 $n = 1000$ 次时中奖次数为 $X$，其泊松近似变量为 $Y$。

1. 用二项分布写出 $X = 0$ 和 $X = k$ 的精确概率。
2. 用泊松近似计算 $\mathbb{P}[Y=0]$ 与 $\mathbb{P}[Y=k]$。
3. 求泊松近似后 $Y$ 的期望 $\mathbb{E}[Y]$ 与方差 $\text{Var}(Y)$。

#### ✏️ 【详细推导与答案】

##### **第 1 问：精确二项概率**

- $X \sim \text{Binomial}(1000, 1/1000)$。

  $$\mathbb{P}[X=0] = \binom{1000}{0} \left(\frac{1}{1000}\right)^0 \left(\frac{999}{1000}\right)^{1000} = (0.999)^{1000}$$

  $$\mathbb{P}[X=k] = \binom{1000}{k} \left(\frac{1}{1000}\right)^k \left(\frac{999}{1000}\right)^{1000-k}$$

##### **第 2 问：泊松近似概率**

- 计算泊松参数：$\lambda = n p = 1000 \times \frac{1}{1000} = 1$。

- 变量 $Y \sim \text{Poisson}(1)$ 的 PMF 为 $\mathbb{P}[Y=k] = \frac{1^k}{k!} e^{-1} = \frac{e^{-1}}{k!}$。

  $$\mathbb{P}[Y=0] = e^{-1} \approx 0.36788$$

  $$\mathbb{P}[Y=k] = \frac{e^{-1}}{k!}$$

##### **第 3 问：求** $Y$ **的期望与方差**

- 因为 $Y \sim \text{Poisson}(1)$，根据泊松分布性质：

  $$\mathbb{E}[Y] = \lambda = 1, \quad \text{Var}(Y) = \lambda = 1$$

### 2. 独立泊松和（再生性）与条件分布

- **对应教材位置**：**Page 56 —— 問題 26：ポアソン分布 II**

#### 📝 【题目背景】

设 $X \sim \text{Poisson}(\lambda)$，$Y \sim \text{Poisson}(\mu)$，且 $X$ 与 $Y$ 相互独立。

1. 求阶乘矩 $\mathbb{E}[X(X-1)(X-2)]$ 以及 $\mathbb{E}[X^3]$、$\mathbb{E}[5^X]$。
2. 计算条件概率 $\mathbb{P}[X \ge 2 \mid X \ge 1]$。
3. 计算 $\mathbb{P}[X+Y = k]$。
4. 对于 $0 \le k \le n$，求条件概率 $\mathbb{P}[X = k \mid X+Y = n]$。

#### ✏️ 【详细推导与答案】

##### **第 1 问：特殊期望计算**

- **① 阶乘矩** $\mathbb{E}[X(X-1)(X-2)]$： $$\begin{aligned} \mathbb{E}[X(X-1)(X-2)] &= \sum_{k=3}^{\infty} k(k-1)(k-2) \frac{\lambda^k}{k!} e^{-\lambda} \ &= e^{-\lambda} \sum_{k=3}^{\infty} \frac{\lambda^k}{(k-3)!} = \lambda^3 e^{-\lambda} \sum_{j=0}^{\infty} \frac{\lambda^j}{j!} = \lambda^3 e^{-\lambda} e^{\lambda} = \lambda^3 \end{aligned}$$

- **② 三阶矩** $\mathbb{E}[X^3]$：

  - 利用多项式恒等变形：$X^3 = X(X-1)(X-2) + 3X(X-1) + X$。

  - 分别代入期望：

    $$\mathbb{E}[X(X-1)] = \lambda^2, \quad \mathbb{E}[X] = \lambda$$

    $$\mathbb{E}[X^3] = \lambda^3 + 3\lambda^2 + \lambda$$

- **③ 矩母函数变形** $\mathbb{E}[5^X]$：

  $$\mathbb{E}[5^X] = \sum_{k=0}^{\infty} 5^k \frac{\lambda^k}{k!} e^{-\lambda} = e^{-\lambda} \sum_{k=0}^{\infty} \frac{(5\lambda)^k}{k!} = e^{-\lambda} e^{5\lambda} = e^{4\lambda}$$

##### **第 2 问：求条件概率** $\mathbb{P}[X \ge 2 \mid X \ge 1]$

- 依据条件概率定义：

  $$\mathbb{P}[X \ge 2 \mid X \ge 1] = \frac{\mathbb{P}[X \ge 2 \text{ 且 } X \ge 1]}{\mathbb{P}[X \ge 1]} = \frac{\mathbb{P}[X \ge 2]}{\mathbb{P}[X \ge 1]} = \frac{1 - \mathbb{P}[X=0] - \mathbb{P}[X=1]}{1 - \mathbb{P}[X=0]}$$

- 代入泊松 PMF 表达式 $\mathbb{P}[X=0] = e^{-\lambda}$，$\mathbb{P}[X=1] = \lambda e^{-\lambda}$：

  $$\mathbb{P}[X \ge 2 \mid X \ge 1] = \frac{1 - e^{-\lambda} - \lambda e^{-\lambda}}{1 - e^{-\lambda}} = 1 - \frac{\lambda e^{-\lambda}}{1 - e^{-\lambda}} = 1 - \frac{\lambda}{e^{\lambda} - 1}$$

##### **第 3 问：证明** $P(X+Y = k)$ **并求其分布**

- 依据我们笔记中的再生性证明（卷积法）：

  $$\mathbb{P}[X+Y = k] = \sum_{j=0}^k \mathbb{P}[X=j]\mathbb{P}[Y=k-j] = \sum_{j=0}^k \frac{\lambda^j}{j!}e^{-\lambda} \frac{\mu^{k-j}}{(k-j)!}e^{-\mu} = \frac{(\lambda+\mu)^k}{k!} e^{-(\lambda+\mu)}$$

- 这说明两独立泊松随机变量之和仍然服从泊松分布：

  $$X+Y \sim \text{Poisson}(\lambda+\mu)$$

##### **第 4 问：求条件概率** $\mathbb{P}[X=k \mid X+Y=n]$

- 依据条件概率公式及 $X, Y$ 独立性： $$\begin{aligned} \mathbb{P}[X=k \mid X+Y = n] &= \frac{\mathbb{P}[X=k, Y=n-k]}{\mathbb{P}[X+Y=n]} \ &= \frac{\mathbb{P}[X=k]\mathbb{P}[Y=n-k]}{\mathbb{P}[X+Y=n]} \ &= \frac{\left( \frac{\lambda^k}{k!} e^{-\lambda} \right) \cdot \left( \frac{\mu^{n-k}}{(n-k)!} e^{-\mu} \right)}{\frac{(\lambda+\mu)^n}{n!} e^{-(\lambda+\mu)}} \ &= \frac{n!}{k!(n-k)!} \cdot \frac{\lambda^k \mu^{n-k}}{(\lambda+\mu)^n} \ &= \binom{n}{k} \left(\frac{\lambda}{\lambda+\mu}\right)^k \left(\frac{\mu}{\lambda+\mu}\right)^{n-k} \end{aligned}$$

- **结论**：在已知两独立泊松随机变量之和为 $n$ 的条件下，$X$ 的条件分布居然是一个**二项分布**：

  $$(X \mid X+Y = n) \sim \text{Binomial}\left(n, \frac{\lambda}{\lambda+\mu}\right)$$

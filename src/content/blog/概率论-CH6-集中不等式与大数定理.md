---
title: "概率论-CH6-集中不等式与大数定理"
slug: "概率论-CH6-集中不等式与大数定理"
description: "概率论-CH6-集中不等式与大数定理，待补充摘要。"
pubDate: 2026-05-27
updatedDate: 2026-05-27
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

https://www.eecs70.org/assets/pdf/notes/n19.pdf



# 集中不等式与大数定理 (Concentration Inequalities & LLN)

本篇笔记基于 UC Berkeley CS 70 概率论部分，结合手写笔记的逻辑进行整理与深度润色。旨在用最直观的语言解释核心定理的推导，解决学习中的疑难点。

## 目录

1. [核心背景与问题引入](#1-核心背景与问题引入)
2. [马尔可夫不等式 (Markov's Inequality)](#2-马尔可夫不等式-markovs-inequality)
3. [切比雪夫不等式 (Chebyshev's Inequality)](#3-切比雪夫不等式-chebyshevs-inequality)
4. [应用：估计值偏离的界限 (Estimating Bias)](#4-应用估计值偏离的界限-estimating-bias)
5. [弱大数定理 (Weak Law of Large Numbers)](#5-弱大数定理-weak-law-of-large-numbers)

## 1. 核心背景与问题引入

### 1.1 什么是大数定理？

大数定理（Law of Large Numbers）是我们日常经验的数学化描述：**随着实验次数** $n$ **的增加，样本的平均值会越来越接近其理论期望值** $\mu$**。**

- **直观例子**：假设我们有一枚硬币，其真实的正面概率为 $p$（此参数未知）。我们将其抛掷 $n$ 次，观察到正面朝上的总次数为 $S_n$。

- 根据二项分布，正面朝上次数的期望值为 $\mathbb{E}[S_n] = np$。

- 我们用**样本均值（Sample Average）** $\hat{p} = \frac{S_n}{n}$ 作为对真实概率 $p$ 的估计值。

- 根据期望的线性性质，这个估计是**无偏**的：

  $$\mathbb{E}[\hat{p}] = \mathbb{E}\left[\frac{S_n}{n}\right] = \frac{1}{n}\mathbb{E}[S_n] = \frac{1}{n}(np) = p$$

- **为什么要抛很多次硬币，而不是只抛一次？** 因为抛的次数 $n$ 越多，估计值 $\hat{p}$ 偏离真实值 $p$ 的可能性就越小。

### 1.2 误差区间与置信度：$n$ 应该取多大？

如果我们希望估计误差在 $\epsilon$ 以内（即 $|\hat{p} - p| \le \epsilon$），我们需要多大的样本量 $n$？

- **痛点纠正**：我们不可能“完全百分之百”保证估计值落在误差区间内。因为即使硬币是均匀的（$p=0.5$），在极小概率下，我们也有可能连续抛出 $n$ 次正面（概率为 $0.5^n$），此时 $\hat{p}=1$，误差极大。

- **妥协方案**：我们不要求“绝对保证”，而是要求“高概率保证”。引入**置信度（Confidence）** $1-\delta$，即：

  $$\mathbb{P}[|\hat{p} - p| \le \epsilon] \ge 1 - \delta$$

  或者等价地，限制估计失败（偏离均值超过 $\epsilon$）的概率在 $\delta$ 以内：

  $$\mathbb{P}[|\hat{p} - p| \ge \epsilon] \le \delta$$

### 💡 核心公式：如何记住样本量 $n$ 的下界？

在后续的推导中，我们会得到一个非常著名的样本量界限公式：

$$n \ge \frac{1}{4\epsilon^2\delta}$$

> **学习助手提示**：你提到“*我记不住这个公式*”。别担心！这个公式并不是凭空产生的，它是由**切比雪夫不等式**推导出来的。在 [第 4 节](#4-应用估计值偏离的界限-estimating-bias) 中，我们会一步步推导它。理解了它的来龙去脉，你就再也不需要死记硬背了！

## 2. 马尔可夫不等式 (Markov's Inequality)

马尔可夫不等式是集中不等式中最基础的一个，它**仅适用于非负随机变量**。

### 2.1 定理内容

设 $X$ 是一个**非负**随机变量（即对所有样本点， $X(\omega) \ge 0$），且其期望 $\mathbb{E}[X]$ 存在。则对于任意常数 $c > 0$：

$$\mathbb{P}[X \ge c] \le \frac{\mathbb{E}[X]}{c}$$

- **直观物理理解**：如果大家的平均财富是 1 万元（$\mathbb{E}[X]=1$），那么拥有至少 5 万元（$c=5$）的人数比例不可能超过 $\frac{1}{5} = 20\%$。如果超过了 $20\%$，哪怕其他所有人的财富都是 0，总体的平均财富也会超过 1 万元，这与事实矛盾。

### 2.2 两种证明方法详解（带你彻底看懂）

> **学习助手提示**：你提到“*两种证明方法我没怎么看明白*”。我们用最直观、展开的方式重新推导它们。

#### 证明方法一：代数求和/积分法（最经典、直观）

假设 $X$ 是离散随机变量，其值域为 $\mathcal{A}$（因为 $X$ 非负，所以 $\mathcal{A}$ 中的元素都 $\ge 0$）。 我们要计算 $X$ 的期望 $\mathbb{E}[X]$。根据期望的定义，我们将求和拆分为“小于 $c$”和“大于等于 $c$”两部分：

$$\begin{aligned} \mathbb{E}[X] &= \sum_{a \in \mathcal{A}} a \cdot \mathbb{P}[X = a] \ &= \sum_{a < c} a \cdot \mathbb{P}[X = a] + \sum_{a \ge c} a \cdot \mathbb{P}[X = a] \end{aligned}$$

现在我们进行两步“缩放”：

1. 因为所有 $a \ge 0$，第一项 $\sum_{a < c} a \cdot \mathbb{P}[X = a] \ge 0$。如果直接**扔掉第一项**，求和的值只会变小（或不变）：

   $$\mathbb{E}[X] \ge \sum_{a \ge c} a \cdot \mathbb{P}[X = a]$$

2. 对于在第二项中求和的所有 $a$，它们都满足 $a \ge c$。如果我们**把所有的** $a$ **替换成更小的常数** $c$，整个和式会进一步变小（或不变）：

   $$\mathbb{E}[X] \ge \sum_{a \ge c} c \cdot \mathbb{P}[X = a] = c \sum_{a \ge c} \mathbb{P}[X = a]$$

由于 $\sum_{a \ge c} \mathbb{P}[X = a]$ 恰好就是随机变量 $X \ge c$ 的概率 $\mathbb{P}[X \ge c]$，我们得到：

$$\mathbb{E}[X] \ge c \cdot \mathbb{P}[X \ge c]$$

两边同除以 $c$（因为 $c > 0$），即得证：

$$\mathbb{P}[X \ge c] \le \frac{\mathbb{E}[X]}{c}$$

#### 证明方法二：指示随机变量法（最现代、简洁）

首先引入**指示随机变量（Indicator Random Variable）**。对于事件 $\mathcal{E}$，定义： $$I{\mathcal{E}} = \begin{cases} 1, & \text{若 } \mathcal{E} \text{ 发生} \ 0, & \text{若 } \mathcal{E} \text{ 未发生} \end{cases}$$ 它的一个关键性质是：其期望值等于该事件发生的概率，即 $\mathbb{E}[I\{\mathcal{E}\}] = \mathbb{P}[\mathcal{E}]$。

对于任意样本点 $\omega$，因为 $X(\omega) \ge 0$ 且 $c > 0$，我们有以下必然成立的不等式：

$$X(\omega) \ge c \cdot I\{X(\omega) \ge c\}$$

- **为什么成立？分两种情况验证**：
  1. 若 $X(\omega) < c$，则指示变量为 $0$，右边为 $c \cdot 0 = 0$。显然 $X(\omega) \ge 0$ 成立。
  2. 若 $X(\omega) \ge c$，则指示变量为 $1$，右边为 $c \cdot 1 = c$。显然 $X(\omega) \ge c$ 成立。

既然在每一个样本点上，左边的函数值都大于等于右边，那么它们的期望也必然满足同样的大小关系（期望单调性）：

$$\mathbb{E}[X] \ge \mathbb{E}[c \cdot I\{X \ge c\}]$$

利用期望的线性性质，把常数 $c$ 提出来，并将指示变量的期望换写为概率：

$$\mathbb{E}[X] \ge c \cdot \mathbb{E}[I\{X \ge c\}] = c \cdot \mathbb{P}[X \ge c]$$

同除以 $c$ 即得证：

$$\mathbb{P}[X \ge c] \le \frac{\mathbb{E}[X]}{c}$$

### 2.3 经典例题：抛硬币的马尔可夫上界

**【题目】** 抛掷一枚均匀的硬币 $n$ 次，用 $X$ 表示正面朝上的次数。求观察到正面朝上次数超过 $\frac{3}{4}n$ 的概率上界。

**【解析过程】**

1. **确定分布与期望**： 硬币正面朝上次数 $X$ 服从**二项分布** $X \sim \text{Binomial}(n, 0.5)$。（此处手写笔记中写成了超几何分布，需要修正为二项分布，因为每次抛硬币是相互独立的重复实验）。 所以期望值为：

   $$\mathbb{E}[X] = n \cdot p = \frac{1}{2}n$$

2. **应用马尔可夫不等式**： 因为 $X \ge 0$ 恒成立，且常数 $c = \frac{3}{4}n > 0$，可直接代入公式：

   $$\mathbb{P}\left[X \ge \frac{3}{4}n\right] \le \frac{\mathbb{E}[X]}{\frac{3}{4}n} = \frac{\frac{1}{2}n}{\frac{3}{4}n} = \frac{2}{3}$$

3. **结果分析与“不等式与实际的区别”**：

   - 通过马尔可夫不等式得到的概率上界是 $\frac{2}{3} \approx 0.667$，这个界限**完全不依赖于抛掷次数** $n$。

   - 但实际概率是多少呢？根据二项分布的精确求和公式：

     $$\mathbb{P}\left[X \ge \frac{3}{4}n\right] = \sum_{k=\lceil \frac{3}{4}n \rceil}^{n} \binom{n}{k} \left(\frac{1}{2}\right)^n$$

     - 当 $n = 10$ 时，实际概率约为 $5.5 \times 10^{-2} = 0.055$
     - 当 $n = 100$ 时，实际概率约为 $2.8 \times 10^{-7}$

   - **结论**：随着 $n$ 增大，实际概率会呈指数级衰减。然而马尔可夫不等式给出的界依然死板地停留在 $\frac{2}{3}$。这说明**马尔可夫不等式给出的上界非常宽松（Loose），它没有考虑方差，因此无法捕捉随着样本量增大而产生的“集中效应”**。

## 3. 切比雪夫不等式 (Chebyshev's Inequality)

为了解决马尔可夫不等式过于宽松的问题，我们引入了考虑**方差**（衡量数据散布程度的工具）的切比雪夫不等式。

### 3.1 定理内容

设 $X$ 是一个具有有限期望值 $\mathbb{E}[X] = \mu$ 和有限方差 $Var(X)$ 的任意随机变量。则对任意常数 $c > 0$：

$$\mathbb{P}[|X - \mu| \ge c] \le \frac{Var(X)}{c^2}$$

- **直观物理理解**：随机变量偏离其均值 $\mu$ 的距离超过 $c$ 的概率，绝对不会超过它的方差除以 $c^2$。偏离的阈值 $c$ 越大，不确定性（概率）就以二次方的速度迅速衰减。

### 3.2 证明推导

切比雪夫不等式的妙处在于，它实际上就是**对一个精心构造的非负随机变量应用马尔可夫不等式**。

1. 定义一个新的随机变量 $Y = (X - \mu)^2$。

   - 因为任何实数的平方都是非负的，所以 $Y$ 必然是一个**非负随机变量**（$Y \ge 0$）。
   - 根据方差的定义，其期望值为：$\mathbb{E}[Y] = \mathbb{E}[(X - \mu)^2] = Var(X)$。

2. 注意到以下两个事件是完全等价的：

   $$\{|X - \mu| \ge c\} \iff \left\{(X - \mu)^2 \ge c^2\right\} \iff \{Y \ge c^2\}$$

   所以它们的概率也完全相同：

   $$\mathbb{P}[|X - \mu| \ge c] = \mathbb{P}[Y \ge c^2]$$

3. 因为 $Y$ 非负，且常数 $c^2 > 0$，我们对 $Y$ 应用**马尔可夫不等式**：

   $$\mathbb{P}[Y \ge c^2] \le \frac{\mathbb{E}[Y]}{c^2}$$

4. 将 $\mathbb{E}[Y] = Var(X)$ 代回，即得证：

   $$\mathbb{P}[|X - \mu| \ge c] \le \frac{Var(X)}{c^2}$$

### 3.3 经典例题：重新讨论硬币问题

**【题目】** 抛掷一枚均匀硬币 $n$ 次，用 $X$ 表示正面朝上的次数。利用切比雪夫不等式求 $\mathbb{P}[X \ge \frac{3}{4}n]$ 的上界。

**【解析过程】**

1. **计算均值与方差**： 由于 $X \sim \text{Binomial}(n, 0.5)$，我们有：

   - 期望 $\mu = \mathbb{E}[X] = \frac{n}{2}$
   - 方差 $Var(X) = n \cdot p \cdot (1-p) = n \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{n}{4}$

2. **将单边概率转化为双边绝对值概率**： 我们想估算 $X \ge \frac{3}{4}n$ 的概率。注意到当 $X \ge \frac{3}{4}n$ 时，它偏离期望的距离为 $X - \frac{n}{2} \ge \frac{n}{4}$。 因此，单边事件是双边偏差事件的子集：

   $$\mathbb{P}\left[X \ge \frac{3}{4}n\right] = \mathbb{P}\left[X - \frac{n}{2} \ge \frac{n}{4}\right] \le \mathbb{P}\left[\left|X - \frac{n}{2}\right| \ge \frac{n}{4}\right]$$

3. **应用切比雪夫不等式**： 这里偏差阈值 $c = \frac{n}{4}$。代入公式得：

   $$\mathbb{P}\left[\left|X - \frac{n}{2}\right| \ge \frac{n}{4}\right] \le \frac{Var(X)}{c^2} = \frac{\frac{n}{4}}{\left(\frac{n}{4}\right)^2} = \frac{1}{\frac{n}{4}} = \frac{4}{n}$$

4. **结论对比**：

   - 切比雪夫上界为 $\frac{4}{n}$。
   - **对比马尔可夫**：马尔可夫给出的上界是常数 $\frac{2}{3}$，而切比雪夫给出的上界随 $n$ 的增大而**逐渐减小**（当 $n=100$ 时，上界仅为 $0.04$）。这明显是一个好得多的界！

## 4. 应用：估计值偏离的界限 (Estimating Bias)

> **学习助手提示**：你提到“*这个例题的求解没太看明白，但很重要*”。这就是课本核心应用部分——如何用抛硬币估计概率 $p$，并推导出那个“记不住”的样本量公式。我们在此进行最细致的拆解：

### 4.1 问题建模与方差推导

我们有独立同分布（i.i.d.）的硬币抛掷结果 $X_1, X_2, \dots, X_n$，其中每次抛掷 $X_i \in \{0, 1\}$，且 $\mathbb{P}[X_i = 1] = p$。

- **单次抛掷的均值与方差**：

  $$\mathbb{E}[X_i] = p$$

  $$Var(X_i) = p(1-p)$$

- **样本均值的期望**：

  $$\hat{p} = \frac{S_n}{n} = \frac{1}{n}\sum_{i=1}^n X_i \implies \mathbb{E}[\hat{p}] = p$$

- **样本均值的方差**（注意常数提到方差外面要平方，且独立变量相加方差也相加）：

  $$Var(\hat{p}) = Var\left(\frac{1}{n}\sum_{i=1}^n X_i\right) = \frac{1}{n^2} \sum_{i=1}^n Var(X_i) = \frac{1}{n^2} \cdot n \cdot p(1-p) = \frac{p(1-p)}{n}$$

### 4.2 核心不等式推导

我们希望估计偏离误差超过 $\epsilon$ 的概率被控制在 $\delta$ 以内。直接对 $\hat{p}$ 应用**切比雪夫不等式**：

$$\mathbb{P}[|\hat{p} - p| \ge \epsilon] \le \frac{Var(\hat{p})}{\epsilon^2} = \frac{p(1-p)}{n\epsilon^2}$$

为了实现置信度要求，我们只要让这个概率的上界小于等于 $\delta$ 即可：

$$\frac{p(1-p)}{n\epsilon^2} \le \delta \implies n \ge \frac{p(1-p)}{\epsilon^2\delta}$$

### 4.3 为什么最大化 $p(1-p)$ 得到常数 $\frac{1}{4}$？

在实际情况中，**真实的** $p$ **正是我们想要去估计的未知数，我们根本不知道** $p(1-p)$ **是多少！** 为了保证在**任何可能**的真实 $p$ 下，我们的样本量 $n$ 都足够大，我们需要采用**最坏情况（Worst-case）**，即寻找 $p(1-p)$ 的最大可能值。

- **极值推导**： 设函数 $f(p) = p(1-p) = p - p^2$，其中 $0 \le p \le 1$。 求导数并令其为 0：

  $$f'(p) = 1 - 2p = 0 \implies p = \frac{1}{2}$$

  因为二阶导数 $f''(p) = -2 < 0$，所以在 $p=\frac{1}{2}$ 处取得极大值（也是最大值）：

  $$\max_{p} p(1-p) = \frac{1}{2}\left(1 - \frac{1}{2}\right) = \frac{1}{4}$$

- **最保守的样本量界限**： 既然对任意 $p$，都有 $p(1-p) \le \frac{1}{4}$，我们直接把 $p(1-p)$ 替换成其最大上限 $\frac{1}{4}$：

  $$n \ge \frac{p(1-p)}{\epsilon^2\delta} \impliedby n \ge \frac{1/4}{\epsilon^2\delta} = \frac{1}{4\epsilon^2\delta}$$

这就是公式 $n \ge \frac{1}{4\epsilon^2\delta}$ 的完整诞生过程！

### 4.4 补充应用例题（巩固理解）

> **学习助手提示**：为你补充一个简单的数值例题，帮助你切实掌握公式应用。

**【题目】** 民意调查机构想要估算大选中某候选人的支持率 $p$。要求估计值 $\hat{p}$ 与真实支持率 $p$ 的误差不超过 $0.05$（即 $\epsilon = 0.05$）的概率至少为 $95\%$（即置信度 $1-\delta = 0.95$，得出置信失败允许的最大概率 $\delta = 0.05$）。请问最少需要随机电话采访多少位选民？

**【解析过程】**

1. **明确已知参数**：

   - 允许误差极限 $\epsilon = 0.05$
   - 允许失败概率 $\delta = 1 - 0.95 = 0.05$

2. **套用推导出的样本量下界公式**：

   $$n \ge \frac{1}{4\epsilon^2\delta}$$

3. **代入具体数值计算**：

   $$n \ge \frac{1}{4 \cdot (0.05)^2 \cdot 0.05} = \frac{1}{4 \cdot 0.0025 \cdot 0.05} = \frac{1}{0.01 \cdot 0.05} = \frac{1}{0.0005} = 2000$$

4. **答案**： 最少需要调查 $2000$ 位选民。 *(值得注意的是，这个选民样本量的大小完全不依赖于整个国家总人口的多寡。)*

## 5. 弱大数定理 (Weak Law of Large Numbers)

通过切比雪夫不等式，我们终于可以严谨地证明弱大数定理。

### 5.1 定理内容

设 $X_1, X_2, \dots$ 是一组独立同分布（i.i.d.）的随机变量序列，它们具有共同的有限期望 $\mathbb{E}[X_i] = \mu$ 和有限方差 $Var(X_i) = \sigma^2$。 用 $S_n = X_1 + \dots + X_n$ 表示前 $n$ 项和，则对任意给定的任意小的误差 $\epsilon > 0$：

$$\mathbb{P}\left[\left|\frac{1}{n}S_n - \mu\right| \ge \epsilon\right] \to 0 \quad (\text{当 } n \to \infty \text{ 时})$$

### 5.2 证明推导

1. 计算样本均值 $\bar{X}_n = \frac{1}{n}S_n$ 的均值和方差：

   - $\mathbb{E}[\bar{X}_n] = \mu$
   - $Var(\bar{X}_n) = \frac{\sigma^2}{n}$

2. 对 $\bar{X}_n$ 直接应用**切比雪夫不等式**：

   $$\mathbb{P}\left[\left|\frac{1}{n}S_n - \mu\right| \ge \epsilon\right] \le \frac{Var(\bar{X}_n)}{\epsilon^2} = \frac{\sigma^2}{n\epsilon^2}$$

3. 令 $n \to \infty$。由于 $\sigma^2$ 和 $\epsilon^2$ 是固定的常数，当分母中的 $n$ 趋于无穷大时，右侧的上界趋于 0：

   $$\lim_{n\to\infty} \frac{\sigma^2}{n\epsilon^2} = 0$$

4. 因为概率值不可能为负数，夹逼定理可证：

   $$\lim_{n\to\infty} \mathbb{P}\left[\left|\frac{1}{n}S_n - \mu\right| \ge \epsilon\right] = 0$$

**定理直观结语**：只要我们取样足够多，样本均值与理论均值产生任何细微偏差（$\epsilon$）的概率，在极限下都将归于零。

---
title: "概率论-CH4-随机变量的的函数"
slug: "概率论-CH4-随机变量的的函数"
description: "概率论-CH4-随机变量的的函数，待补充摘要。"
pubDate: 2026-05-25
updatedDate: 2026-05-25
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

https://www.eecs70.org/assets/pdf/notes/n17.pdf

# CS 70 概率论深度学习笔记：随机变量的函数、方差与协方差

https://gemini.google.com/app/900a7c92eb0e3c22

本笔记基于 **CS 70 Spring 2026 Note 17** 课程教材，并深度结合个人手写笔记的脉络与直观理解进行整理、润色与修正。

## 1. 随机变量的函数与 LOTUS 定律

### 1.1 基本定义

若 $X$ 是定义在样本空间 $\Omega$ 上的随机变量，其概率分布为 $\mathbb{P}_X$。对于定义在 $X$ 值域上的任意实值函数 $f(\cdot)$，我们有一个新的随机变量 $Y = f(X)$，其在样本空间中的取值为：

$$Y(\omega) = f(X(\omega)), \quad \forall \omega \in \Omega$$

- **事件的等价性**：在样本空间中，事件 $\{Y = y\}$ 等价于事件 $\{X \in f^{-1}(y)\}$，其中 $f^{-1}(y)$ 是自变量的逆像（Preimage）集合 $\{x \mid f(x) = y\}$。

- $Y$ **的概率分布**：

  $$\mathbb{P}_Y[Y = y] = \sum_{x: f(x) = y} \mathbb{P}_X[X = x]$$

### 1.2 无意识统计学家定律 (LOTUS)

在计算 $f(X)$ 的期望时，我们不需要先求出 $Y = f(X)$ 的概率分布，而是可以直接通过下式计算：

$$\mathbb{E}[f(X)] = \sum_{x} f(x) \mathbb{P}_X[X = x]$$

> **手写笔记直观理解**：求 $\mathbb{E}[f(X)]$ 时，我们使用的公式形式依然是标准的 $\mathbb{E}[X] = \sum x_i \cdot P(x_i)$，但其精髓在于**直接将值** $x_i$ **替换为** $f(x_i)$。

#### **⚠️ 经典警告 (Warning)**

在通常情况下，**期望算子与非线性函数不能交换**：

$$\mathbb{E}[f(X)] \neq f(\mathbb{E}[X])$$

例如，对于平方运算：

$$\mathbb{E}[X^2] \neq (\mathbb{E}[X])^2$$

只有当 $f(X) = aX + b$（即 $f$ 为线性函数）时，等式 $\mathbb{E}[aX+b] = a\mathbb{E}[X]+b$ 才成立。

## 2. 条件期望与全期望公式

### 2.1 条件期望 (Conditional Expectation)

给定定义在同一概率空间上的随机变量 $X$ 和 $Y$。若对于某一取值 $b \in \mathcal{B}$ 有 $\mathbb{P}[Y = b] > 0$，则在已知 $Y = b$ 的条件下，$X$ 的**条件期望**定义为：

$$\mathbb{E}[X \mid Y = b] = \sum_{a \in \mathcal{A}} a \cdot \mathbb{P}[X = a \mid Y = b]$$

> **手写笔记直观理解**：条件期望本质上就是普通的期望，**只是把概率换成条件概率而已**。因此，它完全保留了期望的所有优良性质（如线性性质）。

### 2.2 作为随机变量的条件期望与全期望公式 (LTE)

我们可以定义一个关于随机变量 $Y$ 的函数：

$$f(Y) = \mathbb{E}[X \mid Y]$$

这意味着，当 $Y = b$ 时，该随机变量取值为实数 $\mathbb{E}[X \mid Y = b]$。

既然 $f(Y)$ 是一个随机变量，我们就可以对它求期望：

$$\mathbb{E}[f(Y)] = \sum_{b \in \mathcal{B}} f(b) \mathbb{P}[Y = b] = \sum_{b \in \mathcal{B}} \mathbb{E}[X \mid Y = b] \mathbb{P}[Y = b]$$

这就引出了概率论中极其重要的定理：

### **定理 2.1：全期望公式 (Law of Total Expectation / Tower Rule)**

若 $\mathbb{E}[|X|] < \infty$，则：

$$\mathbb{E}[X] = \mathbb{E}[\mathbb{E}[X \mid Y]]$$

展开式写为：

$$\mathbb{E}[X] = \sum_{b \in \mathcal{B}} \mathbb{E}[X \mid Y = b] \mathbb{P}[Y = b]$$

#### **【定理证明】**

$$\begin{aligned} \mathbb{E}[\mathbb{E}[X \mid Y]] &= \sum_{b \in \mathcal{B}} \mathbb{E}[X \mid Y = b] \mathbb{P}[Y = b] \ &= \sum_{b \in \mathcal{B}} \left( \sum_{a \in \mathcal{A}} a \mathbb{P}[X = a \mid Y = b] \right) \mathbb{P}[Y = b] \ &= \sum_{a \in \mathcal{A}} a \sum_{b \in \mathcal{B}} \mathbb{P}[X = a \mid Y = b] \mathbb{P}[Y = b] \quad \text{(交换求和顺序)} \ &= \sum_{a \in \mathcal{A}} a \mathbb{P}[X = a] \quad \text{(利用全概率公式)} \ &= \mathbb{E}[X] \quad \blacksquare \end{aligned}$$

## 3. 方差与标准差

> **手写笔记直观理解**：**期望**告诉我们分布的**平均值（中心位置）**，而**方差**则度量了数据的**波动性与偏差（离散程度）**。

### 3.1 引入思考：一维对称随机游走 (Random Walk)

假设一个粒子从 $0$ 点出发，每一步独立地等概率向左（记为 $-1$）或向右（记为 $+1$）移动 $1$ 步。设 $S_n$ 为 $n$ 步后粒子的位置：

$$S_n = X_1 + X_2 + \dots + X_n$$

其中 $\mathbb{P}[X_i = 1] = \mathbb{P}[X_i = -1] = 1/2$。

- **位置期望**：由于 $\mathbb{E}[X_i] = 0$，由线性期望易得 $\mathbb{E}[S_n] = \sum_{i=1}^n \mathbb{E}[X_i] = 0$。但这无法告诉我们粒子实际游走了多远。
- **距离期望** $\mathbb{E}[|S_n|]$：由于绝对值算子难以直接求和，我们退而求其次，研究**距离的平方的期望** $\mathbb{E}[S_n^2]$。

#### **命题 3.1**：对于对称随机游走，$\mathbb{E}[S_n^2] = n$。

**【证明】** 将 $S_n^2$ 展开：

$$\mathbb{E}[S_n^2] = \mathbb{E}\left[ \left(\sum_{i=1}^n X_i\right)^2 \right] = \sum_{i=1}^n \mathbb{E}[X_i^2] + 2\sum_{i < j} \mathbb{E}[X_i X_j]$$

因为 $X_i \in \{+1, -1\}$，所以 $X_i^2 = 1$ 恒成立，即 $\mathbb{E}[X_i^2] = 1$。 又因为 $X_i$ 与 $X_j$ 相互独立（$i \neq j$），所以：

$$\mathbb{E}[X_i X_j] = \mathbb{E}[X_i]\mathbb{E}[X_j] = 0 \times 0 = 0$$

代入上式，得：

$$\mathbb{E}[S_n^2] = n \cdot 1 + 2 \sum_{i < j} 0 = n \quad \blacksquare$$

> **💡 思考拓展**：
>
> 1. $\mathbb{E}[S_n^2] = n$ 表明粒子偏离原点的“典型”平方距离为 $n$，也就是说，其典型游走距离大约在 $\sqrt{n}$ 数量级。
> 2. **注意**：绝对不能简单地认为 $\mathbb{E}[|S_n|] = \sqrt{\mathbb{E}[S_n^2]} = \sqrt{n}$，因为期望与根号不能任意交换（由詹森不等式 Jensen's Inequality 易知 $\mathbb{E}[|S_n|] \le \sqrt{\mathbb{E}[S_n^2]} = \sqrt{n}$）。

### 3.2 方差与标准差的正式定义

对于一个随机变量 $X$，设其均值为 $\mu = \mathbb{E}[X]$。

- **方差 (Variance)**：

  $$\text{Var}(X) = \mathbb{E}[(X - \mu)^2]$$

- **标准差 (Standard Deviation)**：

  $$\sigma(X) = \sqrt{\text{Var}(X)}$$

  标准差的物理量纲与 $X$ 本身一致，更便于直观解释。对于上述随机游走问题，其方差为 $\text{Var}(S_n) = n$，标准差为 $\sigma(S_n) = \sqrt{n}$。

### 3.3 方差计算替代公式

### **定理 3.2**：对于任意随机变量 $X$，有：

$$\text{Var}(X) = \mathbb{E}[X^2] - \mu^2 = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$$

#### **【定理证明】**

利用期望的线性性质： $$\begin{aligned} \text{Var}(X) &= \mathbb{E}[(X - \mu)^2] \ &= \mathbb{E}[X^2 - 2\mu X + \mu^2] \ &= \mathbb{E}[X^2] - 2\mu \mathbb{E}[X] + \mathbb{E}[\mu^2] \ &= \mathbb{E}[X^2] - 2\mu^2 + \mu^2 \quad (\because \mathbb{E}[X] = \mu \text{ 且 } \mu^2 \text{ 是常数}) \ &= \mathbb{E}[X^2] - \mu^2 \quad \blacksquare \end{aligned}$$

### 3.4 方差的重要运算性质

1. **常数乘积性质**：对于任意常数 $c$，

   $$\text{Var}(cX) = c^2 \text{Var}(X)$$

   *直观理解：若变量放大* $c$ *倍，其平方偏差便会放大* $c^2$ *倍。*

2. **独立变量和的方差**：

   ### **定理 3.3**：若 $X$ 和 $Y$ 是**相互独立**的随机变量，则：

   $$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$$

   #### **【引理：独立变量乘积的期望】**

   若 $X, Y$ 独立，则：

   $$\mathbb{E}[XY] = \mathbb{E}[X] \mathbb{E}[Y]$$

   *(证明：*$\mathbb{E}[XY] = \sum_a \sum_b ab \mathbb{P}[X=a, Y=b] = \sum_a a\mathbb{P}[X=a] \sum_b b\mathbb{P}[Y=b] = \mathbb{E}[X]\mathbb{E}[Y]$*)*

   #### **【定理 3.3 证明】**

   $$\begin{aligned} \text{Var}(X+Y) &= \mathbb{E}[(X+Y)^2] - (\mathbb{E}[X+Y])^2 \ &= \mathbb{E}[X^2] + \mathbb{E}[Y^2] + 2\mathbb{E}[XY] - (\mathbb{E}[X] + \mathbb{E}[Y])^2 \ &= (\mathbb{E}[X^2] - (\mathbb{E}[X])^2) + (\mathbb{E}[Y^2] - (\mathbb{E}[Y])^2) + 2(\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]) \ &= \text{Var}(X) + \text{Var}(Y) + 2(\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]) \end{aligned}$$ 由于 $X, Y$ 独立，由引理可知最后项为 $0$，故：

   $$\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) \quad \blacksquare$$

## 4. 经典分布的方差计算

### 4.1 公平骰子的点数 $X$

设 $X$ 为一个公平骰子的点数：

- **均值**：$\mathbb{E}[X] = \frac{1+2+3+4+5+6}{2} = \frac{7}{2}$

- **平方期望**：$\mathbb{E}[X^2] = \frac{1^2+2^2+3^2+4^2+5^2+6^2}{6} = \frac{91}{6}$

- **方差**：

  $$\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \frac{91}{6} - \frac{49}{4} = \frac{35}{12}$$

### 4.2 离散均匀分布 (Uniform Distribution)

设 $X \sim \text{Uniform}\{1, \dots, n\}$，即 $X$ 等概率取值 $\{1, \dots, n\}$。

- **均值**：

  $$\mathbb{E}[X] = \frac{n+1}{2}$$

- **方差**（利用平方和公式 $\sum_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}$）：

  $$\text{Var}(X) = \frac{n^2 - 1}{12}$$

### 4.3 随机置换的固定点个数 (Fixed Points of Permutations)

设 $X_n$ 为 $n$ 个元素随机置换后保持原位的点数（例如：$n$ 封信随机装入 $n$ 个信封，刚好装对的信封数）。 写成指示随机变量（Indicator）之和：

$$X_n = I_1 + I_2 + \dots + I_n$$

其中 $I_i = 1$（若第 $i$ 个点为固定点），否则 $I_i = 0$。

我们已知对于任意 $n$，均值恒为 $\mathbb{E}[X_n] = 1$。为了求其方差：

$$\mathbb{E}[X_n^2] = \sum_{i=1}^n \mathbb{E}[I_i^2] + 2 \sum_{i < j} \mathbb{E}[I_i I_j]$$

- 因为 $I_i$ 为指示变量，所以 $\mathbb{E}[I_i^2] = \mathbb{P}[I_i = 1] = \frac{1}{n}$。
- 对于 $i < j$，$\mathbb{E}[I_i I_j] = \mathbb{P}[I_i = 1 \wedge I_j = 1] = \frac{1}{n(n-1)}$（即 $i$ 和 $j$ 同时为固定点的概率）。

代入求和： $$\begin{aligned} \mathbb{E}[X_n^2] &= n \left( \frac{1}{n} \right) + 2 \binom{n}{2} \frac{1}{n(n-1)} \ &= 1 + 2 \left[ \frac{n(n-1)}{2} \right] \frac{1}{n(n-1)} \ &= 1 + 1 = 2 \end{aligned}$$ 因此，方差为：

$$\text{Var}(X_n) = \mathbb{E}[X_n^2] - (\mathbb{E}[X_n])^2 = 2 - 1^2 = 1$$

**结论**：不论元素个数 $n$ 多大，固定点个数的均值和方差都恒等于 $1$。

### 4.4 二项分布 (Binomial Distribution)

设 $X_n \sim \text{Binomial}(n, p)$ 代表 $n$ 次独立重复伯努利试验中成功的次数。 写成独立指示变量的和：

$$X_n = I_1 + I_2 + \dots + I_n$$

其中 $I_i \sim \text{Bernoulli}(p)$，各 $I_i$ 相互独立。

- **单次试验方差**：

  $$\text{Var}(I_i) = \mathbb{E}[I_i^2] - (\mathbb{E}[I_i])^2 = p - p^2 = p(1-p)$$

- **总方差**（由于相互独立，方差可以直接相加）：

  $$\text{Var}(X_n) = \sum_{i=1}^n \text{Var}(I_i) = np(1-p)$$

> **💡 对比直观**： 对于公平硬币（$p = 1/2$），标准差 $\sigma(X_n) = \frac{\sqrt{n}}{2}$。这表明，当试验次数 $n$ 极大时，分布的“绝对宽度”（$\approx \sqrt{n}$）相对于其最大取值范围 $n$ 是极窄的。这与均匀分布（标准差与 $n$ 属同阶，$\approx \frac{n}{\sqrt{12}}$）形成鲜明对比，体现了独立变量叠加后的**高集中性**。

## 5. 协方差与相关系数

### 5.1 协方差 (Covariance)

当变量之间不独立时，我们需要度量它们之间的联合波动。

#### **定义 5.1**：随机变量 $X$ 和 $Y$ 的协方差定义为：

$$\text{cov}(X, Y) = \mathbb{E}[(X - \mu_X)(Y - \mu_Y)] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$$

> **手写笔记直观理解**：**协方差是变量之间的偏移关系**（度量它们是否倾向于同时偏离各自的均值）。
>
> - 若 $\text{cov}(X, Y) > 0$，说明 $X$ 变大时 $Y$ 也倾向于变大（正相关）。
> - 若 $\text{cov}(X, Y) < 0$，说明 $X$ 变大时 $Y$ 倾向于变小（负相关）。

#### **协方差的核心性质**：

1. **独立性与协方差**：若 $X$ 和 $Y$ 独立，则 $\text{cov}(X, Y) = 0$。**注意：逆命题不一定成立！**（协方差只能度量线性关联）。

2. **自身协方差**：$\text{cov}(X, X) = \text{Var}(X)$。

3. **双线性性质 (Bilinearity)**：

   $$\text{cov}\left( \sum_{i=1}^n a_i X_i, \sum_{j=1}^m b_j Y_j \right) = \sum_{i=1}^n \sum_{j=1}^m a_i b_j \text{cov}(X_i, Y_j)$$

4. **一般和的方差公式**：对于任意两个随机变量（不要求独立）：

   $$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{cov}(X, Y)$$

### 5.2 相关系数 (Correlation)

> **手写笔记直观理解**：**协方差的大小受变量自身量纲（尺度）的影响太大**。为了消除尺度影响，将其标准化，便得到了相关系数。

#### **定义 5.2**：若 $\sigma(X) > 0$ 且 $\sigma(Y) > 0$，相关系数（通常记为 $\rho$）定义为：

$$\text{Corr}(X, Y) = \frac{\text{cov}(X, Y)}{\sigma(X)\sigma(Y)}$$

### **定理 5.1：相关系数的有界性**

对于任意随机变量 $X$ 和 $Y$，有：

$$-1 \le \text{Corr}(X, Y) \le +1$$

#### **【证明】**

定义标准化随机变量：

$$\tilde{X} = \frac{X - \mu_X}{\sigma(X)}, \quad \tilde{Y} = \frac{Y - \mu_Y}{\sigma(Y)}$$

显然有 $\mathbb{E}[\tilde{X}^2] = \mathbb{E}[\tilde{Y}^2] = 1$，且 $\mathbb{E}[\tilde{X}\tilde{Y}] = \text{Corr}(X,Y)$。 考虑如下两个平方项的期望，其必定非负：

$$0 \le \mathbb{E}[(\tilde{X} - \tilde{Y})^2] = \mathbb{E}[\tilde{X}^2] + \mathbb{E}[\tilde{Y}^2] - 2\mathbb{E}[\tilde{X}\tilde{Y}] = 2 - 2\mathbb{E}[\tilde{X}\tilde{Y}]$$

$$0 \le \mathbb{E}[(\tilde{X} + \tilde{Y})^2] = \mathbb{E}[\tilde{X}^2] + \mathbb{E}[\tilde{Y}^2] + 2\mathbb{E}[\tilde{X}\tilde{Y}] = 2 + 2\mathbb{E}[\tilde{X}\tilde{Y}]$$

由此立得：

$$-1 \le \mathbb{E}[\tilde{X}\tilde{Y}] \le +1 \implies -1 \le \text{Corr}(X, Y) \le +1 \quad \blacksquare$$

#### **关于线性相关边界的探讨**：

- $\text{Corr}(X, Y) = +1$ 当且仅当 $\mathbb{E}[(\tilde{X} - \tilde{Y})^2] = 0$，即 $\tilde{X} = \tilde{Y}$（以概率 $1$ 成立）。

- $\text{Corr}(X, Y) = -1$ 当且仅当 $\mathbb{E}[(\tilde{X} + \tilde{Y})^2] = 0$，即 $\tilde{X} = -\tilde{Y}$（以概率 $1$ 成立）。

- 用原始变量表示：若相关系数达到边界值 $\pm 1$，则意味着存在常数 $a, b$ 使得：

  $$Y = aX + b \quad (\text{以概率 } 1 \text{ 成立})$$

  当相关系数为 $+1$ 时 $a > 0$；当相关系数为 $-1$ 时 $a < 0$。

## 6. 核心公式与概念直观速查表

| 概念/公式                  | 符号表达                 | 计算公式 / 展开式                                  | 物理含义 / 补充说明                                  |
| -------------------------- | ------------------------ | -------------------------------------------------- | ---------------------------------------------------- |
| **无意识统计学家定律**     | $\mathbb{E}[f(X)]$       | $\sum_x f(x) \mathbb{P}_X[X=x]$                    | 求期望时直接用 $f(x)$ 替代标准的 $x$ 即可            |
| **条件期望 (对事件)**      | $\mathbb{E}[X \mid Y=b]$ | $\sum_a a \mathbb{P}[X=a \mid Y=b]$                | 只是把普通期望里的概率替换为条件概率                 |
| **全期望公式 (LTE)**       | $\mathbb{E}[X]$          | $\mathbb{E}[\mathbb{E}[X \mid Y]]$                 | 塔式法则（Tower Rule），可通过分情况条件化来计算期望 |
| **方差定义**               | $\text{Var}(X)$          | $\mathbb{E}[(X - \mathbb{E}[X])^2]$                | 度量随机变量与其均值的“典型偏差平方”                 |
| **方差计算替代公式**       | $\text{Var}(X)$          | $\mathbb{E}[X^2] - (\mathbb{E}[X])^2$              | 方差 = 平方的期望 - 期望的平方（计算时常用）         |
| **常数缩放方差**           | $\text{Var}(cX)$         | $c^2 \text{Var}(X)$                                | 常数因子提取出方差时必须进行**平方**                 |
| **和的方差 (独立)**        | $\text{Var}(X+Y)$        | $\text{Var}(X) + \text{Var}(Y)$                    | 仅在 $X, Y$ **相互独立** 时成立                      |
| **和的方差 (不独立)**      | $\text{Var}(X+Y)$        | $\text{Var}(X) + \text{Var}(Y) + 2\text{cov}(X,Y)$ | 必须额外加上两倍的协方差项                           |
| **协方差 (Covariance)**    | $\text{cov}(X,Y)$        | $\mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$      | 衡量两个随机变量同步波动的偏移关系                   |
| **相关系数 (Correlation)** | $\text{Corr}(X,Y)$       | $\frac{\text{cov}(X,Y)}{\sigma(X)\sigma(Y)}$       | 协方差的无量纲版本，取值范围限制在 $[-1, +1]$ 之间   |

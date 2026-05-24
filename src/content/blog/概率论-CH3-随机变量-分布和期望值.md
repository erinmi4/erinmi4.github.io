---
title: "概率论-CH3-随机变量-分布和期望值"
slug: "概率论-CH3-随机变量-分布和期望值"
description: "概率论-CH3-随机变量-分布和期望值，待补充摘要。"
pubDate: 2026-05-24
updatedDate: 2026-05-24
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

https://www.eecs70.org/assets/pdf/notes/n16.pdf

# 概率论精修笔记：随机变量、分布与期望

本笔记基于你的手写课堂笔记，结合课程大纲进行了系统性的梳理与数学严谨性润色。

## 1. 随机变量 (Random Variables)

### 1.1 概念与本质

在概率试验中，我们常常需要对测量结果进行数值化评估（例如：抛 $n$ 次硬币，正面朝上的次数是多少？）。这个依赖于试验样本输出的数值，就是**随机变量**。

> ⚠️ **纠错与严谨化** **手写原注**：“随机变量 $X$ 是定义在样本空间中所有可能取到的值。或者说：它是样本事件中它会分配的值。” **数学修正**：随机变量（Random Variable，简称 r.v.）**本质上是一个函数**，而不是一个“变量”或“取值”。
>
> **正式定义**：设 $\Omega$ 为样本空间。定义在 $\Omega$ 上的随机变量 $X$ 是一个映射函数：
>
> $$X: \Omega \rightarrow \mathbb{R}$$
>
> 它将每一个样本点 $\omega \in \Omega$ 映射为一个实数 $X(\omega)$。
>
> 随机变量的“随机性”仅源于**样本点** $\omega$ **的选择是随机的**，而映射关系 $X(\omega)$ 本身是完全确定的。

### 1.2 随机变量作为“事件”

当随机变量 $X$ 映射到某个具体数值 $a$ 时，对应的所有样本点的集合：

$$\{\omega \in \Omega : X(\omega) = a\}$$

是样本空间 $\Omega$ 的一个子集。因此，**“**$X = a$**” 在概率论中代表一个事件**。 我们可以计算该事件发生的概率，记作 $\mathbb{P}[X = a]$。

## 2. 概率分布 (Probability Distribution)

### 2.1 定义

离散随机变量 $X$ 的**概率分布**（或称概率质量函数 PMF）是其所有可能取值及其对应概率的完整集合：

$$\{(a, \mathbb{P}[X=a]) : a \in \mathcal{A}\}$$

其中 $\mathcal{A}$ 是 $X$ 所有可能取值的集合。

### 2.2 分布的优良性质

对于所有的取值 $a_i \in \mathcal{A}$，事件 “$X = a_i$” 满足以下两条核心性质：

1. **互斥性（Disjoint）**：若 $a_1 \neq a_2$，则事件 $X = a_1$ 与 $X = a_2$ 互不相交（不可能同时发生）。

2. **完备性（Completeness）**：所有可能取值事件的并集等于整个样本空间：

   $$\bigcup_{a \in \mathcal{A}} \{X = a\} = \Omega$$

因此，**随机变量** $X$ **的所有可能取值对样本空间** $\Omega$ **构成了一个“划分”（Partition）**。这直接推导出：

$$\sum_{a \in \mathcal{A}} \mathbb{P}[X = a] = 1$$

## 3. 伯努利分布 (Bernoulli Distribution)

**伯努利分布**（又称 **0-1 分布**）是单次试验中最简单的离散分布。

### 3.1 物理背景

试验只有两种可能的结果：“成功”（记为 1）或“失败”（记为 0）。

### 3.2 数学表达

若 $X$ 服从参数为 $p$ 的伯努利分布，记作 $X \sim Bernoulli(p)$ 或 $X \sim Ber(p)$： 

$$\mathbb{P}[X = i] = \begin{cases} p, & \text{若 } i = 1 \ 1-p, & \text{若 } i = 0 \end{cases}$$ 其中参数 $0 \le p \le 1$ 代表成功的概率。

## 4. 二项分布 (Binomial Distribution)

### 4.1 物理背景

进行 $n$ 次**有放回抽样**（或 $n$ 次**独立**的伯努利试验）。每一次试验中成功的概率完全一致且恒为 $p$，各次试验之间相互独立。

### 4.2 数学表达

令随机变量 $X$ 表示 $n$ 次独立试验中成功的总次数。则 $X$ 服从二项分布，记作 $X \sim Bin(n, p)$：

$$\mathbb{P}[X = k] = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \dots, n$$

> 💡 **公式理解**：
>
> - $\binom{n}{k}$：在 $n$ 次试验中，选择其中 $k$ 次作为“成功”的组合数。
> - $p^k$：这 $k$ 次试验都成功的联合概率。
> - $(1-p)^{n-k}$：其余 $n-k$ 次试验都失败的联合概率。

### 4.3 经典应用：纠错码与数据包丢失

**【问题描述】**： 在网络传输中，我们希望将 $n$ 个原始数据包编码为 $n+k$ 个数据包进行发送。接收方只要收到至少 $n$ 个数据包，就能完美解码重建原始数据。假设每个数据包在传输中丢失的概率为 $p$，且各包丢失与否相互独立。如何确定冗余度 $k$ 以保证解码成功率在 $99\%$ 以上？

**【推导过程】**： 我们将传输 $n+k$ 个包看作进行 $n+k$ 次独立试验，每次试验“包成功送达”的概率为 $1-p$。 设成功送达的数据包数量为 $X$，则 $X \sim Bin(n+k, 1-p)$。 成功解码的充要条件是收到的包数 $X \ge n$。因此成功解码的概率为：

$$\mathbb{P}[X \ge n] = \sum_{i=n}^{n+k} \mathbb{P}[X = i] = \sum_{i=n}^{n+k} \binom{n+k}{i} (1-p)^i p^{n+k-i}$$

在已知 $n$ 和 $p$ 的情况下，我们可以通过数值计算找到最小的 $k$，使得 $\mathbb{P}[X \ge n] \ge 0.99$。

## 5. 超几何分布 (Hypergeometric Distribution)

### 5.1 物理背景

**无放回抽样**（Without Replacement）。由于抽样后不放回，后续试验中各事件发生的概率会受到先前结果的影响，因此**试验之间不独立**。

### 5.2 数学表达

设罐中有 $N$ 个球，其中 $B$ 个黑球，$W$ 个白球（即 $N = B + W$）。现在从中随机抽取 $n$ 个球（不放回），令 $Y$ 为抽到的黑球数量。 则 $Y$ 服从超几何分布，记作 $Y \sim Hypergeometric(N, B, n)$：

$$\mathbb{P}[Y = k] = \frac{\binom{B}{k} \binom{W}{n-k}}{\binom{N}{n}} = \frac{\binom{B}{k} \binom{N-B}{n-k}}{\binom{N}{n}}$$

其中取值范围限制为：$\max(0, n + B - N) \le k \le \min(n, B)$。

> 💡 **公式理解（组合学意义）**：
>
> - 分母 $\binom{N}{n}$：从总共 $N$ 个球中无顺序抽取 $n$ 个球的总方案数。
> - 分子 $\binom{B}{k}\binom{N-B}{n-k}$：从 $B$ 个黑球中恰好抽中 $k$ 个，且从剩余 $N-B$ 个白球中恰好抽中 $n-k$ 个的方案数。

## 6. 多个随机变量、独立性与可交换性

### 6.1 联合概率分布 (Joint Probability Distribution)

当一个样本空间上定义了多个随机变量时，我们需要关注它们的组合行为。 对于两个离散随机变量 $X$ 和 $Y$，其**联合概率分布**定义为：

$$\mathbb{P}[X = a, Y = b] = \mathbb{P}[\{\omega \in \Omega : X(\omega) = a \text{ 且 } Y(\omega) = b\}]$$

### 6.2 边缘分布 (Marginal Distribution)

已知联合分布时，单个变量的分布称为边缘分布。

> 💡 **手写原注**：“边缘分布（感觉像全概率公式）” 
>
> **深度解析**：你的直觉非常准确！边缘分布的求法本质上就是**全概率公式**的应用。
>
> 因为事件 $\{Y = b\}_{b \in \mathcal{B}}$ 构成了样本空间 $\Omega$ 的一个完备划分，所以事件 $X = a$ 的概率可以分解为：
>
> $$\mathbb{P}[X = a] = \sum_{b \in \mathcal{B}} \mathbb{P}[X = a, Y = b]$$

### 6.3 独立性 (Independence)

两个随机变量 $X$ 和 $Y$ 独立，是指它们取任何值的事件都相互独立：

$$\mathbb{P}[X = a, Y = b] = \mathbb{P}[X = a] \mathbb{P}[Y = b], \quad \forall a, b$$

### 6.4 可交换性 (Exchangeability)

这是一个比独立同分布（i.i.d.）更宽泛但极具对称性的概念。

- **定义**：如果将随机变量序列的顺序任意打乱（置换），其联合概率分布保持不变，则称这组随机变量是**可交换的**。即对于任意置换 $\pi$：

  $$\mathbb{P}[X_{\pi(1)} = a_1, \dots, X_{\pi(n)} = a_n] = \mathbb{P}[X_1 = a_1, \dots, X_n = a_n], \quad \forall a_1, \dots, a_n$$

- **关键结论**：

  1. **边缘分布相同**：$\mathbb{P}[X_1 = a] = \mathbb{P}[X_2 = a] = \dots = \mathbb{P}[X_n = a]$。
  2.  pairwise 分布相同：对任意两两不同的下标，$\mathbb{P}[X_i = a, X_j = b] = \mathbb{P}[X_1 = a, X_2 = b]$。
  3. **不一定独立**：可交换的随机变量**不一定是独立的**。例如：在无放回抽样中，第 $i$ 次抽中黑球的指示变量 $I_i$ 是可交换的（每次抽中黑球的边缘概率均为 $B/N$），但它们显然不独立。

## 7. 期望 (Expectation)

### 7.1 定义

期望可以被看作是随机变量的**典型值（Typical Value）**，类似于概率分布的“重心”或“物理平衡点”。 离散随机变量 $X$ 的期望值定义为：

$$\mathbb{E}[X] = \sum_{a \in \mathcal{A}} a \times \mathbb{P}[X = a]$$

> 📝 **技术性说明**：期望存在的前提是级数必须**绝对收敛**，
>
> 即 $\sum |a| \mathbb{P}[X=a] < \infty$。
>
>  存在部分随机变量其期望不存在（例如 $\mathbb{P}[X=i] = \frac{6}{\pi^2 i^2}$，$i \ge 1$ 整数，其求和 $\sum i \cdot \frac{1}{i^2} = \sum \frac{1}{i}$ 发散）。

### 7.2 基础计算例题

#### 【例题 1：掷一颗公平的骰子】

设 $X$ 为点数，求其期望。 **【解析】**： $X$ 可等概率地取值 $1, 2, 3, 4, 5, 6$，每个概率均为 $\frac{1}{6}$。

$$\mathbb{E}[X] = 1 \times \frac{1}{6} + 2 \times \frac{1}{6} + 3 \times \frac{1}{6} + 4 \times \frac{1}{6} + 5 \times \frac{1}{6} + 6 \times \frac{1}{6} = \frac{21}{6} = \frac{7}{2}$$

*(注意：期望值* $\frac{7}{2}$ *甚至不是* $X$ *能够取到的实际物理值，它代表的是多次重复试验下的平均水平。)*

#### 【例题 2：掷两颗公平的骰子】

设 $X$ 为点数之和，求其期望。 **【暴力分布法解析】**： 先列出点数和 $a$ 及其对应的概率：

- $a = 2, 12 \implies \mathbb{P} = 1/36$
- $a = 3, 11 \implies \mathbb{P} = 2/36$
- $a = 4, 10 \implies \mathbb{P} = 3/36$
- $a = 5, 9 \implies \mathbb{P} = 4/36$
- $a = 6, 8 \implies \mathbb{P} = 5/36$
- $a = 7 \implies \mathbb{P} = 6/36$

代入期望定义式计算：

$$\mathbb{E}[X] = 2 \times \frac{1}{36} + 3 \times \frac{2}{36} + \dots + 12 \times \frac{1}{36} = 7$$

#### 【例题 3：轮盘赌 (Roulette) 的期望】

轮盘共有 38 个槽：1~36号（18红、18黑），以及两个绿色槽（0、00）。你押 1 美元在黑色上。若出黑，你收回本金并赢得 1 美元（净赚 1 美元）；否则失去本金（净亏 1 美元）。设 $X$ 为你的净收益，求期望。 **【解析】**： $X$ 的可能取值为 $+1$ 与 $-1$。

$$\mathbb{P}[X = 1] = \frac{18}{38}, \quad \mathbb{P}[X = -1] = \frac{20}{38}$$

$$\mathbb{E}[X] = 1 \times \frac{18}{38} + (-1) \times \frac{20}{38} = -\frac{2}{38} = -\frac{1}{19} \approx -0.053 \text{ 美元}$$

*(这表明你平均每玩一局就会输掉约 5 美分。正是 0 和 00 这两个绿色槽让赌场立于不败之地。)*

## 8. 期望的线性性质 (Linearity of Expectation)

期望最强大的地方在于其具有出色的代数性质，使得我们在计算复杂随机变量期望时，无须写出复杂的分布。

### 8.1 定理内容

对于定义在**同一个概率空间**下的**任意**两个随机变量 $X$ 和 $Y$（**无论它们是否独立**）：

$$\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$$

同时，对于任意常数 $c$：

$$\mathbb{E}[cX] = c\mathbb{E}[X]$$

### 8.2 严谨证明

为了使证明更简单，我们将期望的求和写成以**样本点** $\omega$ 为自变量的等价形式：

$$\mathbb{E}[X] = \sum_{\omega \in \Omega} X(\omega) \times \mathbb{P}[\omega]$$

利用这一表达，展开 $\mathbb{E}[X + Y]$： $$\begin{aligned} \mathbb{E}[X + Y] &= \sum_{\omega \in \Omega} (X + Y)(\omega) \times \mathbb{P}[\omega] \ &= \sum_{\omega \in \Omega} (X(\omega) + Y(\omega)) \times \mathbb{P}[\omega] \ &= \sum_{\omega \in \Omega} X(\dots)\mathbb{P}[\omega] + \sum_{\omega \in \Omega} Y(\dots)\mathbb{P}[\omega] \ &= \mathbb{E}[X] + \mathbb{E}[Y] \end{aligned}$$ *(同理可证* $\mathbb{E}[cX] = c\mathbb{E}[X]$*。)*

> 🚨 **避坑警告** 期望的线性性质仅对**加减法与常数乘法**有效！
>
> - $\mathbb{E}[XY] \neq \mathbb{E}[X]\mathbb{E}[Y]$（一般不成立，除非 $X$ 与 $Y$ 独立）
> - $\mathbb{E}\left[\frac{1}{X}\right] \neq \frac{1}{\mathbb{E}[X]}$

## 9. 线性期望的强力应用（经典例题）

### 例题 1：掷两颗骰子和（再探）

设 $X$ 为两颗骰子点数和，且 $X = Y_1 + Y_2$，其中 $Y_1, Y_2$ 分别是两颗骰子的点数。 根据线性性质：

$$\mathbb{E}[X] = \mathbb{E}[Y_1] + \mathbb{E}[Y_2] = \frac{7}{2} + \frac{7}{2} = 7$$

*(相比于第 7 节中的暴力计算，这种方法极度简洁！)*

### 例题 2：置换固定点问题（作业分发）

**【问题描述】**： 收齐 $n$ 个学生的作业并随机打乱分发。期望有多少个学生能恰好拿到自己的作业？ **【解析】**： 这是一个置换中求固定点数量的经典问题。我们引入**指示随机变量（Indicator Random Variables）**： 令 $I_i$ 为学生 $i$ 是否拿到自己作业的指示灯： $$I_i = \begin{cases} 1, & \text{若学生 } i \text{ 拿到自己的作业} \ 0, & \text{否则} \end{cases}$$ 显然，学生拿到自己作业的总数可表示为这些指示变量的和：

$$X_n = I_1 + I_2 + \dots + I_n$$

尽管各个 $I_i$ 之间高度相关（不独立），但由线性期望定理，我们依然有：

$$\mathbb{E}[X_n] = \mathbb{E}[I_1] + \mathbb{E}[I_2] + \dots + \mathbb{E}[I_n]$$

由于每个学生拿到自己作业的边缘概率都是 $\frac{1}{n}$：

$$\mathbb{E}[I_i] = \mathbb{P}[I_i = 1] = \frac{1}{n}$$

所以：

$$\mathbb{E}[X_n] = n \times \frac{1}{n} = 1$$

**【结论】**：无论学生人数 $n$ 有多大，拿到自己作业的期望人数永远是 **1**。

### 例题 3：二项分布的期望

设 $X \sim Bin(n, p)$，求其期望。 **【解析】**： 我们可以将 $X$ 拆分为 $n$ 次独立伯努利试验的指示变量之和：$X = I_1 + \dots + I_n$，其中 $\mathbb{E}[I_i] = p$。 由期望的线性性质：

$$\mathbb{E}[X] = \sum_{i=1}^n \mathbb{E}[I_i] = np$$

*(这避免了直接计算复杂的组合数级数和* $\sum_k k \binom{n}{k} p^k (1-p)^{n-k}$*。)*

### 例题 4：无放回抽样（超几何分布）的期望

设 $Y \sim Hypergeometric(N, B, n)$，求其期望。 **【解析】**： 设 $I_i$ 为第 $i$ 次抽样得到黑球的指示随机变量，则：

$$Y = I_1 + I_2 + \dots + I_n$$

利用**可交换性（Exchangeability）**，每一次抽样的边缘分布都完全相同，因此：

$$\mathbb{P}[I_i = 1] = \mathbb{P}[I_1 = 1] = \frac{B}{N}$$

即使每次抽样之间不独立，线性性质依旧适用：

$$\mathbb{E}[Y] = \sum_{i=1}^n \mathbb{E}[I_i] = n \mathbb{E}[I_1] = n \frac{B}{N}$$

### 例题 5：球与箱子 (Balls and Bins)

将 $m$ 个球随机扔进 $n$ 个箱子中。每个球落入各箱的概率均等。

#### 1. 落在第一个箱子中的球数期望：

我们将每个球是否落入第一个箱子视为一次独立的伯努利试验（成功概率为 $1/n$）。 由二项分布期望结论，第一个箱子中球数的期望值为：

$$\mathbb{E}[X] = \frac{m}{n}$$

#### 2. 空箱子总数 $Y_n$ 的期望：

定义指示变量 $I_i$ 为第 $i$ 个箱子是否为空： $$I_i = \begin{cases} 1, & \text{若箱子 } i \text{ 为空} \ 0, & \text{否则} \end{cases}$$ 空箱子的总数为 $Y_n = I_1 + I_2 + \dots + I_n$。 单个箱子为空的概率（即 $m$ 个球全部落入其他 $n-1$ 个箱子的概率）：

$$\mathbb{E}[I_i] = \mathbb{P}[\text{箱子 } i \text{ 为空}] = \left(1 - \frac{1}{n}\right)^m$$

因此，空箱子个数的期望值为：

$$\mathbb{E}[Y_n] = \sum_{i=1}^n \mathbb{E}[I_i] = n\left(1 - \frac{1}{n}\right)^m$$

#### 特殊情况（当 $m = n$ 且 $n$ 趋于无穷大时）：

根据数学极限经典结论 $(1 - 1/n)^n \rightarrow e^{-1}$：

$$\mathbb{E}[Y_n] = n\left(1 - \frac{1}{n}\right)^n \approx \frac{n}{e} \approx 0.368n$$

*(也就是说，将 1000 个球随机丢入 1000 个箱子中，期望会剩下大约 368 个空箱子。)*

---
title: "离散数学-CH1-命题逻辑"
slug: "离散数学-CH1-命题逻辑"
description: "离散数学-CH1-命题逻辑，待补充摘要。"
pubDate: 2026-06-09
updatedDate: 2026-06-09
tags:
  - 大阪大学
  - 离散数学
  - 修考
category: 修考
draft: false
---

# 离散数学与概率论笔记 (Discrete Mathematics and Probability Theory)

- https://www.eecs70.org/assets/pdf/notes/n1.pdf

## 专题一：命题逻辑与量词 (Propositional Logic and Quantifiers)

在数学的语言体系中，为了能够准确无误地表达定理并进行严谨的证明，我们必须先理解其最基础的构建模块。本篇笔记将系统梳理命题逻辑、逻辑连接词、条件蕴含、量词以及否定的艺术，并在关键知识点处融合代数与数字逻辑的直观理解。

### 一、 什么是命题？ (What is a Proposition?)

#### 1. 定义

**命题 (Proposition)** 是一个**能够明确判断真 (True, T) 或假 (False, F) 的陈述句**。

- **核心心法**（源自手写笔记）：**不要管我们是否（现在）知道答案，但是答案一定是确定的、在客观上可以被观测和证实的**。

#### 2. 命题与非命题实例对比

为了更清晰地界定命题的边界，我们来看以下例子：

##### **以下陈述均是命题：**

1. $\sqrt{3}$ 是无理数。（真命题，真值为 $\text{T}$）
2. $1 + 1 = 5$。（假命题，真值为 $\text{F}$）
3. 尤利乌斯·凯撒在 10 岁生日早餐时吃了 2 个鸡蛋。（虽然历史久远、无法考证，但它在客观上一定存在确定的真假，因此**是命题**）

##### **以下陈述均不是命题：**

1. $2 + 2$。（这只是一个数学代数式，不是完整的陈述句）
2. $x^2 + 3x = 5$。（含有未知数 $x$，在未确定 $x$ 的范围和值之前，无法判断真假。这种含有变量的语句被称为**谓词/命题公式**）
3. 阿诺德·施瓦辛格“经常”吃西兰花。（**包含模糊词 (Fuzzy terms)**。什么是“经常”？无法量化，因此无法明确判断真假，不是命题）
4. 亨利八世“不受欢迎”。（“不受欢迎”属于主观定性词，缺乏统一的客观观测标准，不是命题）

### 二、 命题连接词 (Propositional Connectives)

我们可以使用逻辑连接词将简单的命题组合成更复杂的**命题形式 (Propositional Forms)**。设 $P, Q$ 为命题变量：

#### 1. 三大基础逻辑连接词

1. **合取 (Conjunction, AND)**：记作 $P \wedge Q$（读作 “P 且 Q”）。只有当 $P$ 和 $Q$ **同时为真**时，整个复合命题才为真。
2. **析取 (Disjunction, OR)**：记作 $P \vee Q$（读作 “P 或 Q”）。只要 $P$ 和 $Q$ 中**至少有一个为真**，整个复合命题即为真。
3. **否定 (Negation, NOT)**：记作 $\neg P$ 或 $\sim P$（读作 “非 P”）。其真值与 $P$ 恰好相反。

#### 2. 真值表 (Truth Table)

真值表是分析命题真值最为直观且强大的工具。

| $P$        | $Q$        | 合取 $P \wedge Q$ | 析取 $P \vee Q$ | 否定 $\neg P$ |
| ---------- | ---------- | ----------------- | --------------- | ------------- |
| $\text{T}$ | $\text{T}$ | $\text{T}$        | $\text{T}$      | $\text{F}$    |
| $\text{T}$ | $\text{F}$ | $\text{F}$        | $\text{T}$      | $\text{F}$    |
| $\text{F}$ | $\text{T}$ | $\text{F}$        | $\text{T}$      | $\text{T}$    |
| $\text{F}$ | $\text{F}$ | $\text{F}$        | $\text{F}$      | $\text{T}$    |

#### 📝 概念检查 (Concept Check)

> **题目**：令 $P$ 代表命题 “3 是奇数”，$Q$ 代表命题 “4 是奇数”，$R$ 代表 “$4 + 5 = 49$”。求 $P \wedge R$、$P \vee R$ 以及 $\neg Q$ 的真值。
>
> **解答**：
>
> - 显然，$P$ 为真 ($\text{T}$)，$Q$ 为假 ($\text{F}$)，$R$ 为假 ($\text{F}$)。
> - $P \wedge R \equiv \text{T} \wedge \text{F} \equiv \text{F}$（假）
> - $P \vee R \equiv \text{T} \vee \text{F} \equiv \text{T}$（真）
> - $\neg Q \equiv \neg \text{F} \equiv \text{T}$（真）

### 三、 恒真式、恒假式与排中律

#### 1. 排中律 (Law of Excluded Middle)

对于任意命题 $P$，$P$ 要么是真的，要么是假的（二者必居其一，没有中间状态）。因此，$P \vee \neg P$ 永远为真。

> **💡 直觉碰撞与代数升华**（响应手写笔记“我感觉是 $P + \bar{P} = 1$”）： 你的直觉非常敏锐！在**布尔代数 (Boolean Algebra)** 中，逻辑真对应代数中的 $1$，逻辑假对应 $0$。否定常记为 $\bar{P}$（即 $1-P$），而析取（或）在某些代数系统中表现为加法。 此时：
>
> $$P + \bar{P} = P + (1 - P) = 1$$
>
> 这完美地印证了你的直觉：无论 $P$ 取什么值，它们相加永远恒等于 $1$（真）。

#### 2. 重言式与矛盾式

- **重言式 (Tautology / 恒真式)**：无论其变量输入何种真值，输出永远为**真**的命题形式。例如：$P \vee \neg P$。
- **矛盾式 (Contradiction / 恒假式)**：无论其变量输入何种真值，输出永远为**假**的命题形式。例如：$P \wedge \neg P$。

### 四、 条件蕴含与双条件 (Implication & Biconditional)

这是数学定理和证明中最常用、也最容易混淆的两种形式。

#### 1. 蕴含式 (Implication)：$P \Rightarrow Q$ （若 P 则 Q）

在命题 $P \Rightarrow Q$ 中，$P$ 被称为**前件/假设 (Hypothesis / Antecedent)**，$Q$ 被称为**后件/结论 (Conclusion / Consequent)**。

##### **真值与直觉判定**

蕴含式 $P \Rightarrow Q$ 只有在 $P$ **为真且** $Q$ **为假**（即 $1 \to 0$）时，整个命题才为假。其余情况一律为真。

> **💡 直觉碰撞**（源自手写笔记“当天上雨，地面不湿 明显不对”）： 假设命题为：“如果天上下雨 ($P$)，那么地面会湿 ($Q$)”。
>
> - 如果真下雨了（$P$ 为 $\text{T}$），但地面居然没湿（$Q$ 为 $\text{F}$），说明这个承诺/定理是假的。
> - 如果根本没下雨（$P$ 为 $\text{F}$），那地面湿不湿（无论 $Q$ 是 $\text{T}$ 还是 $\text{F}$）都不能否定这个承诺。此时命题依然视为真。

##### **空虚真 (Vacuously True)**

当假设 $P$ 本身为假时，蕴含式 $P \Rightarrow Q$ 自动为真。这种由于前件为假而使命题成立的情况，被称为**空虚真**。

- *例*：“如果猪会飞，那么马能读书。”（因为“猪会飞”是假的，所以该蕴含式在数学上是**真命题**）

##### **⭐ 必须牢记的逻辑等价式 (Important Equivalence)**

$$(P \Rightarrow Q) \equiv (\neg P \vee Q)$$

我们通过真值表来严格证明这一恒等关系：

| $P$        | $Q$        | $\neg P$   | $P \Rightarrow Q$ | $\neg P \vee Q$ |
| ---------- | ---------- | ---------- | ----------------- | --------------- |
| $\text{T}$ | $\text{T}$ | $\text{F}$ | $\text{T}$        | $\text{T}$      |
| $\text{T}$ | $\text{F}$ | $\text{F}$ | $\text{F}$        | $\text{F}$      |
| $\text{F}$ | $\text{T}$ | $\text{T}$ | $\text{T}$        | $\text{T}$      |
| $\text{F}$ | $\text{F}$ | $\text{T}$ | $\text{T}$        | $\text{T}$      |

*通过比对最后两列，可以发现其真值完全相同。*

##### **语言表达的多样性**

在日常数学叙述中，表达 $P \Rightarrow Q$ 有很多种方式：

1. **If P, then Q** (如果 P，那么 Q)
2. **Q if P** (Q 成立，如果 P 成立)
3. **P only if Q** (P 仅当 Q)
4. **P is sufficient for Q** (P 是 Q 的充分条件)
5. **Q is necessary for P** (Q 是 P 的必要条件)
6. **Q unless not P** (除非非 P，否则 Q)

#### 2. 双条件式 (Biconditional)：$P \Leftrightarrow Q$ （P 当且仅当 Q / P iff Q）

双条件式表示 $P$ 和 $Q$ 互为充要条件。其定义为：

$$(P \Leftrightarrow Q) \equiv (P \Rightarrow Q) \wedge (Q \Rightarrow P)$$

##### **💡 直觉碰撞**（源自手写笔记“真值表中同真同假为真，感觉像是同或门”）：

非常准确！在数字逻辑电路中：

- **异或门 (XOR)**：输入相异时输出 1，相同时输出 0。
- **同或门 (XNOR)**：输入相同时（同为真或同为假）输出 1，相异时输出 0。 $P \Leftrightarrow Q$ 的真值表恰好就是**同或门 (XNOR)** 的逻辑输出！

#### 3. 逆否命题 (Contrapositive) 与 逆命题 (Converse)

给定一个原命题 $P \Rightarrow Q$，我们可以定义它的：

- **逆否命题 (Contrapositive)**：$\neg Q \Rightarrow \neg P$
- **逆命题 (Converse)**：$Q \Rightarrow P$

##### **重要定理**

1. **原命题与其逆否命题等价**：$(P \Rightarrow Q) \equiv (\neg Q \Rightarrow \neg P)$。这在数学证明中非常重要（例如逆否命题法）。
2. **原命题与其逆命题不等价**：$(P \Rightarrow Q) \not\equiv (Q \Rightarrow P)$。这是初学者最容易犯的逻辑错误之一。

##### **完整真值表比对**

| $P$        | $Q$        | $\neg P$   | $\neg Q$   | **原命题** $P \Rightarrow Q$ | **逆否命题** $\neg Q \Rightarrow \neg P$ | **逆命题** $Q \Rightarrow P$ | **双条件** $P \Leftrightarrow Q$ |
| ---------- | ---------- | ---------- | ---------- | ---------------------------- | ---------------------------------------- | ---------------------------- | -------------------------------- |
| $\text{T}$ | $\text{T}$ | $\text{F}$ | $\text{F}$ | $\text{T}$                   | $\text{T}$                               | $\text{T}$                   | $\text{T}$                       |
| $\text{T}$ | $\text{F}$ | $\text{F}$ | $\text{T}$ | $\text{F}$                   | $\text{F}$                               | $\text{T}$                   | $\text{F}$                       |
| $\text{F}$ | $\text{T}$ | $\text{T}$ | $\text{F}$ | $\text{T}$                   | $\text{T}$                               | $\text{F}$                   | $\text{F}$                       |
| $\text{F}$ | $\text{F}$ | $\text{T}$ | $\text{T}$ | $\text{T}$                   | $\text{T}$                               | $\text{T}$                   | $\text{T}$                       |

### 五、 量词与谓词 (Quantifiers & Predicates)

当我们不仅对单一命题感兴趣，而是想表达“对某一个集合（论域）里的很多元素都满足”时，就需要用到**量词**。

#### 1. 谓词 (Predicate)

包含一个或多个变量的数学陈述式。变量在被赋予具体的值或被量词约束之前，它不是命题。

- *例*：$P(n) = “n^2 + n + 41 \text{ 是质数}”$。
  - 当 $n = 1$ 时，$P(1) = 43 \text{ 是质数}$（真命题）。
  - 当 $n = 41$ 时，$P(41) = 41^2 + 41 + 41 = 41 \times 43$，显然不是质数（假命题）。

#### 2. 量词分类

1. **全称量词 (Universal Quantifier)**：记作 $\forall$（意为 “对于所有”, "For all"）。
2. **存在量词 (Existential Quantifier)**：记作 $\exists$（意为 “存在至少一个”, "There exists"）。

#### 📝 概念检查 (Concept Check)

> **题目**：使用量词翻译下列两条表述（设论域为整数集 $\mathbb{Z}$）：
>
> 1. “对所有整数 $x$，$2x+1$ 是奇数”。
> 2. “存在一个介于 2 和 4 之间的整数”。
>
> **答案**：
>
> 1. $(\forall x \in \mathbb{Z})(2x+1 \text{ 是奇数})$
> 2. $(\exists x \in \mathbb{Z})(2 < x < 4)$

#### 3. 有限论域下的量词展开

在有限论域 $U = \{1, 2, 3, 4\}$ 下，量词可以等价地展开为连接词形式：

- 存在量词对应**析取**：$(\exists x \in U)P(x) \equiv P(1) \vee P(2) \vee P(3) \vee P(4)$
- 全称量词对应**合取**：$(\forall x \in U)P(x) \equiv P(1) \wedge P(2) \wedge P(3) \wedge P(4)$

#### 4. 🚨 核心考点：量词不能随意交换顺序 (Quantifiers Do Not Commute)

当命题包含多种量词时，**改变不同类型量词的顺序会完全改变句子的逻辑含义**。

##### **生活中的惨案实例（新西兰地铁遇刺案）**

定义论域 $T = \{\text{我乘地铁的时间}\}$，$P = \{\text{所有人}\}$。

1. $(\forall t \in T)(\exists p \in P)(p \text{ 在时间 } t \text{ 被刺})$
   - **含义**：我每次坐地铁，车上都有人被刺（但每次可能是不同的人）。这是一个令人痛心但常见的社会治安问题。
2. $(\exists p \in P)(\forall t \in T)(p \text{ 在时间 } t \text{ 被刺})$
   - **含义**：存在一个非常倒霉的特定人 $p$（比如乔），每一次我坐地铁时，乔都会被刺一次。这简直是乔的噩梦！

##### **数学实例**

设论域为整数集 $\mathbb{Z}$，考虑以下两个命题：

1. $(\forall x \in \mathbb{Z})(\exists y \in \mathbb{Z})(x < y)$
   - **解释**：给定任意整数 $x$，我总能找到一个比它更大的整数 $y$。（**真命题**）
2. $(\exists y \in \mathbb{Z})(\forall x \in \mathbb{Z})(x < y)$
   - **解释**：存在一个唯一的整数 $y$，它比所有整数 $x$ 都大（即存在最大的整数）。（**假命题**）

### 六、 否定的艺术 (Much Ado About Negation)

如何对逻辑式进行正确的否定，是推导和反证法的基础。

#### 1. 德·摩根定律 (De Morgan's Laws)

这是命题连接词否定的黄金法则：

$$\neg(P \wedge Q) \equiv \neg P \vee \neg Q$$

$$\neg(P \vee Q) \equiv \neg P \wedge \neg Q$$

#### 📝 概念检查 (Concept Check)

> **题目**：利用真值表证明德·摩根第一定律 $\neg(P \wedge Q) \equiv \neg P \vee \neg Q$。
>
> **证明**：
>
> | $P$        | $Q$        | $P \wedge Q$ | $\neg(P \wedge Q)$ | $\neg P$   | $\neg Q$   | $\neg P \vee \neg Q$ |
> | ---------- | ---------- | ------------ | ------------------ | ---------- | ---------- | -------------------- |
> | $\text{T}$ | $\text{T}$ | $\text{T}$   | $\text{F}$         | $\text{F}$ | $\text{F}$ | $\text{F}$           |
> | $\text{T}$ | $\text{F}$ | $\text{F}$   | $\text{T}$         | $\text{F}$ | $\text{T}$ | $\text{T}$           |
> | $\text{F}$ | $\text{T}$ | $\text{F}$   | $\text{T}$         | $\text{T}$ | $\text{F}$ | $\text{T}$           |
> | $\text{F}$ | $\text{F}$ | $\text{F}$   | $\text{T}$         | $\text{T}$ | $\text{T}$ | $\text{T}$           |
>
> 比对第4列与第7列，真值完全相同，定理证毕。

#### 2. 量词的否定 (Negating Quantifiers)

当否定符号穿过量词时，**量词必须要发生翻转** ($\forall \leftrightarrow \exists$)：

$$\neg(\forall x P(x)) \equiv \exists x \neg P(x)$$

$$\neg(\exists x P(x)) \equiv \forall x \neg P(x)$$

- *生活实例*：“不是所有人都能考 100 分” ($\neg(\forall x \text{考100})$) 等价于 “存在一些人，他们没考 100 分” ($\exists x \neg\text{考100}$)。

#### 3. 多重逻辑量词嵌套的否定传播 (Propagation)

当遇到复杂的多重嵌套量词命题时，我们可以像剥洋葱一样，**将否定符号逐层向内推进，每一次穿过量词都将其翻转**：

$$\neg(\forall x \exists y P(x, y)) \equiv \exists x \neg(\exists y P(x, y)) \equiv \exists x \forall y \neg P(x, y)$$

### 七、 进阶量词表述技巧 (Trickier Quantifier Examples)

在实际应用中，如何利用基本的量词和逻辑符号来精确表达某些复杂的数量关系（例如：至少、至多、恰好）？

我们以论域为整数集 $\mathbb{Z}$，且让 $P(x)$ 为一给定谓词为例：

#### 1. 至少有三个不同的整数满足 $P(x)$

我们必须声明存在三个变量 $x, y, z$，它们**互不相等**且都满足 $P(x)$：

$$\exists x \exists y \exists z \, (x \neq y \wedge y \neq z \wedge x \neq z \wedge P(x) \wedge P(y) \wedge P(z))$$

#### 2. 至多有三个不同的整数满足 $P(x)$

表达“至多有三个”的逻辑技巧是：如果任意一个数 $d$ 满足 $P(d)$，那么 $d$ 只能是我们指定的三个数 $x, y, z$ 中的某一个。

$$\exists x \exists y \exists z \, \forall d \, (P(d) \Rightarrow d=x \vee d=y \vee d=z)$$

##### **另一种等价形式**：

如果我们找到 4 个不同的数，那么它们不能同时满足 $P(x)$：

$$\forall x \forall y \forall v \forall z \, \left[ (x \neq y \wedge y \neq v \wedge v \neq x \wedge x \neq z \wedge y \neq z \wedge v \neq z) \Rightarrow \neg(P(x) \wedge P(y) \wedge P(v) \wedge P(z)) \right]$$

#### 3. 恰好有三个不同的整数满足 $P(x)$

这是最经典的组合。只需将上述两个命题进行**合取 (**$\wedge$**)** 联结即可：

$$\text{“恰好三个”} \equiv \text{“至少三个”} \wedge \text{“至多三个”}$$

通过这种方式，我们便可以用严谨的逻辑符号体系锁定了完美的数量关系。

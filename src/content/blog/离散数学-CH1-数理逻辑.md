---
title: "离散数学-CH1-数理逻辑"
slug: "离散数学-CH1-数理逻辑"
description: "离散数学-CH1-数理逻辑，待补充摘要。"
pubDate: 2026-06-09
updatedDate: 2026-06-09
tags:
  - 大阪大学
  - 离散数学
  - 修考
category: 修考
draft: false
---

- 【命题逻辑的基本概念】 https://www.bilibili.com/video/BV1kTsizDE4Q/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- 【命题逻辑等值演算】 https://www.bilibili.com/video/BV1kTsizDE4Q/?p=2&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- 【命题逻辑推理理论】 https://www.bilibili.com/video/BV1kTsizDE4Q/?p=3&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

# 命题逻辑的基本概念

## 原子命题

![image-20260609092943374](./%E7%A6%BB%E6%95%A3%E6%95%B0%E5%AD%A6-CH1-%E6%95%B0%E7%90%86%E9%80%BB%E8%BE%91.assets/image-20260609092943374.png)

![image-20260609093024596](./%E7%A6%BB%E6%95%A3%E6%95%B0%E5%AD%A6-CH1-%E6%95%B0%E7%90%86%E9%80%BB%E8%BE%91.assets/image-20260609093024596.png)

## 复合命题

## 一、 命题联结词与符号化

图片上方的表格定义了五种最基本的逻辑联结词：

| **联结词（自然语言）** | **符号化**        | **对应逻辑概念（黄色手写字）** |
| ---------------------- | ----------------- | ------------------------------ |
| 非                     | $\neg$            | **否定**                       |
| 并且                   | $\wedge$          | **合取**                       |
| 或                     | $\vee$            | **析取**                       |
| 如果……则……             | $\rightarrow$     | **蕴含**                       |
| 当且仅当               | $\leftrightarrow$ | **等价**                       |

## 二、 五大基本真值表

板书用 $1$ 表示真（True），$0$ 表示假（False），详细列出了五种联结词的真值对应关系：

### ① 否定 ($\neg p$)

- 规则：取反。

- 真值表：

  $$\begin{array}{c|c} p & \neg p \\ \hline 0 & 1 \\ 1 & 0 \end{array}$$

### ② 合取 ($p \wedge q$)

- 规则：**全真才为真**（只有当 $p$ 和 $q$ 均为 $1$ 时，结果才为 $1$）。

- 真值表：

  $$\begin{array}{cc|c} p & q & p \wedge q \\ \hline 0 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \\ 1 & 1 & \mathbf{1} \end{array}$$

### ③ 析取 ($p \vee q$)

- 规则：**有真则为真**（只有当 $p$ 和 $q$ 均为 $0$ 时，结果才为 $0$）。

- 真值表：

  $$\begin{array}{cc|c} p & q & p \vee q \\ \hline 0 & 0 & \mathbf{0} \\ 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 1 \end{array}$$

### ④ 蕴含 ($p \rightarrow q$)

- 规则：**前真后假才为假**（$1 \rightarrow 0$ 结果为 $0$，其余情况皆为 $1$）。

- 右下角手写补充概念：

  - $p$ 称为**前件**或**条件**；$q$ 称为**后件**或**结论**。
  - 对应四种输入结果：
    - $1 \rightarrow 0 \Rightarrow \mathbf{0}$
    - $1 \rightarrow 1 \Rightarrow 1$
    - $0 \rightarrow 0 \Rightarrow 1$
    - $0 \rightarrow 1 \Rightarrow 1$

- 真值表：

  $$\begin{array}{cc|c} p & q & p \rightarrow q \\ \hline 0 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 0 & \mathbf{0} \\ 1 & 1 & 1 \end{array}$$

### ⑤ 等价 ($p \leftrightarrow q$)

- 规则：**相同为真，不同为假**（$p$ 与 $q$ 同为 $0$ 或同为 $1$ 时结果为 $1$）。

- 真值表：

  $$\begin{array}{cc|c} p & q & p \leftrightarrow q \\ \hline 0 & 0 & \mathbf{1} \\ 0 & 1 & 0 \\ 1 & 0 & 0 \\ 1 & 1 & \mathbf{1} \end{array}$$

## 三、 运算优先级与实例

### 1. 运算优先级

逻辑算符的优先级从高到低排列如下：

$$\neg \quad \succ \quad \wedge \quad \succ \quad \vee \quad \succ \quad \rightarrow \quad \succ \quad \leftrightarrow$$

> 运算越“局部”，优先级越高；运算越“整体”，优先级越低。

- **实例解析**：

  根据上述优先级，命题公式：

  $$\neg p \rightarrow q \vee r \leftrightarrow s$$

  等价于加括号后的形式：

  $$(\neg p) \rightarrow (q \vee r) \leftrightarrow s$$

  *(注：原图手写公式最后少写了一个 $\leftrightarrow s$，根据逻辑结合律补充还原)*

这四张图片延续了离散数学中“命题符号化”的例题讲解，重点展示了自然语言中不同的逻辑连词（如“和”、“或者”、“只要……就……”、“只有……才……”等）在转化为符号逻辑时的细节差异与陷阱。

以下为您提取和整理的完整板书内容：

## 示例续：将下列命题符号化

### 1. $\sqrt{2}$ 是无理数。

- **符号化**：

  令 $p: \sqrt{2}\text{是无理数}$。

  则该命题直接符号化为：$p$

### 2. $\sqrt{2}$ 和 $\sqrt{5}$ 都是无理数。

- **分析**：此处的“和”连接的是两个独立的陈述，属于**合取**关系。

- **符号化**：

  令 $p: \sqrt{2}\text{是无理数}$，$q: \sqrt{5}\text{是无理数}$。

  则符号化为：$p \wedge q$

### 3. $\sqrt{2}$ 和 $\sqrt{5}$ 的乘积是无理数。

- **分析**：此处的“和”是构成主语的一部分，描述的是一个单一的数学运算性质，无法拆分为两个独立的命题，因此它是一个**原子命题**。

- **符号化**：

  令 $p: \sqrt{2}\text{和}\sqrt{5}\text{的乘积是无理数}$。

  则符号化为：$p$

### 4. 小丽喜欢唱歌或者喜欢跳舞。

- **分析**：此处的“或者”属于**兼容或**（唱歌和跳舞可以同时喜欢）。

- **符号化**：

  令 $p: \text{小丽喜欢唱歌}$，$q: \text{小丽喜欢跳舞}$。

  则符号化为：$p \vee q$

  *(注：板书红字强调：$\vee$ 表示**兼容或**)*

### 5. 今天晚上小丽看书或者打球。

- **分析**：因为一个人在同一时间段通常只能做一件事，此处的“或者”属于**不兼容或（异或）**。

- **符号化**：

  令 $p: \text{今晚小丽看书}$，$q: \text{今晚小丽打球}$。

  则符号化为：$(p \wedge \neg q) \vee (\neg p \wedge q)$

### 6. 条件语句的四种常见句型变形

统一设定基准原子命题：

令 $p: \text{天气好}$，$q: \text{我去公园}$。

- **句型一：如果天气好，我就去公园；**
  - 符号化为：$p \rightarrow q$
- **句型二：只要天气好，我就去公园；**
  - 符号化为：$p \rightarrow q$ （“只要 $A$ 就 $B$” 等价于 $A \rightarrow B$）
- **句型三：只有天气好，我才会去公园；**
  - 符号化为：$q \rightarrow p$ （“只有 $A$ 才 $B$” 等价于 $B \rightarrow A$）
- **句型四：仅当天气好，才去公园。**
  - 符号化为：$q \rightarrow p$ （“$B$ 仅当 $A$” 等价于 $B \rightarrow A$）

### 7. 经一事，长一智，并且不经一事，不长一智。

- **分析**：前半句为充分条件，后半句也是充分条件，中间用“并且（合取）”连接。

- **符号化**：

  令 $p: \text{经一事}$，$q: \text{长一智}$。

  则符号化为：$(p \rightarrow q) \wedge (\neg p \rightarrow \neg q)$

  *(注：该公式也等价于 $p \leftrightarrow q$)*

### 8. 天津是直辖市的充要条件是 $2+3=5$。

- **分析**：“充要条件”直接对应**等价**联结词。

- **符号化**：

  令 $p: \text{天津是直辖市}$，$q: 2+3=5$。

  则符号化为：$p \leftrightarrow q$

这两张和三张图片展示的是数理逻辑中“判断公式类型”**的经典方法——\**真值表法\**，以及通过真值表求解**“成真/成假赋值”的实际案例。

以下为您完整提取和整理的板书内容：

## 一、 核心概念：公式的三种类型

在右上角手写板书中，定义了命题公式的三种基本类型：

- **重言式**：公式真值**恒为 $1$**。（又称**永真式**）
- **矛盾式**：公式真值**恒为 $0$**。（又称**永假式**）
- **可满足式**：**不是矛盾式**的公式（即真值表中至少有一组赋值使公式为 $1$。注：重言式属于可满足式的特例）。

## 二、 典型例题解析

### 例三：判断公式的类型

#### ① 公式：$p \wedge r \wedge \neg(q \rightarrow p)$

- **分析方法**：真值表法（涉及 $p, q, r$ 三个变元，共 $2^3 = 8$ 种赋值组合）。

- **真值表递推过程**：

  $$\begin{array}{ccc|c|c|c|c} p & q & r & p \wedge r & q \rightarrow p & \neg(q \rightarrow p) & p \wedge r \wedge \neg(q \rightarrow p) \\ \hline 0 & 0 & 0 & 0 & 1 & 0 & \mathbf{0} \\ 0 & 0 & 1 & 0 & 1 & 0 & \mathbf{0} \\ 0 & 1 & 0 & 0 & 0 & 1 & \mathbf{0} \\ 0 & 1 & 1 & 0 & 0 & 1 & \mathbf{0} \\ 1 & 0 & 0 & 0 & 1 & 0 & \mathbf{0} \\ 1 & 0 & 1 & 1 & 1 & 0 & \mathbf{0} \\ 1 & 1 & 0 & 0 & 1 & 0 & \mathbf{0} \\ 1 & 1 & 1 & 1 & 1 & 0 & \mathbf{0} \end{array}$$

- **结论**：$\because$ 最后一列真值全为 $0$，$\therefore$ **公式为矛盾式**。

#### ② 公式：$(p \rightarrow q) \rightarrow (\neg q \rightarrow \neg p)$

- **分析方法**：涉及 $p, q$ 两个变元，共 $4$ 种赋值组合。

- **真值表递推过程**：

  $$\begin{array}{cc|c|c|c} p & q & p \rightarrow q & \neg q \rightarrow \neg p & (p \rightarrow q) \rightarrow (\neg q \rightarrow \neg p) \\ \hline 0 & 0 & 1 & 1 & \mathbf{1} \\ 0 & 1 & 1 & 1 & \mathbf{1} \\ 1 & 0 & 0 & 0 & \mathbf{1} \\ 1 & 1 & 1 & 1 & \mathbf{1} \end{array}$$

- **结论**：$\because$ 最后一列真值全为 $1$，$\therefore$ **公式为重言式**。

#### ③ 公式：$(\neg p \wedge q) \rightarrow \neg r$

- **真值表递推过程**（提取自第三张图的上半部分）：

  $$\begin{array}{ccc|c|c|c} p & q & r & \neg p \wedge q & \neg r & (\neg p \wedge q) \rightarrow \neg r \\ \hline 0 & 0 & 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 & 0 & \mathbf{0} \quad \leftarrow (1 \rightarrow 0 \Rightarrow 0) \\ 1 & 0 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 0 & 0 & 1 \\ 1 & 1 & 0 & 0 & 1 & 1 \\ 1 & 1 & 1 & 0 & 0 & 1 \end{array}$$

- **结论**：最后一列真值有 $1$ 也有 $0$，$\dots$ **公式为可满足式，非重言式**。

### 例四：求公式 $(\neg p \wedge q) \rightarrow \neg r$ 的成真赋值和成假赋值

该题直接复用了上述 ③ 的真值表计算结果：

- **成假赋值**：使得公式最终真值为 $0$ 的变量输入组合。
  - 结果为：$\mathbf{011}$ （即 $p=0, q=1, r=1$）
- **成真赋值**：使得公式最终真值为 $1$ 的变量输入组合。
  - 结果为：**其余 7 组赋值均为成真赋值**（即除了 $011$ 之外的其余 7 种组合）。



# CH2 命题逻辑的等值演算

这是一份关于**离散数学 / 数理逻辑**中“**等值式及其演算法**”的课堂板书内容。以下是为你提取的完整文字与公式梳理：

## 一、 等值式的定义与常见等值式

### 1. 定义

- **等值式**：若 $A \leftrightarrow B$ 为永真式，则称 $A, B$ 是等值的。记作 $A \Leftrightarrow B$，称 $A \Leftrightarrow B$ 为等值式。
- **手写补充笔记**：
  - “$\Leftrightarrow$” 不是联结词。
  - $A \Leftrightarrow B$ 也可以记作 $A = B$ 或 $A \models \!\mid B$。

### 2. 常见等值式（基本定律）

1. **双否律**：$\neg\neg A \Leftrightarrow A$
2. **幂等律**：$A \wedge A \Leftrightarrow A$, $\quad A \vee A \Leftrightarrow A$
3. **交换律**：$A \wedge B \Leftrightarrow B \wedge A$, $\quad A \vee B \Leftrightarrow B \vee A$
4. **结合律**：$A \wedge (B \wedge C) \Leftrightarrow (A \wedge B) \wedge C$, $\quad A \vee (B \vee C) \Leftrightarrow (A \vee B) \vee C$
5. **分配律**：
   - $A \vee (B \wedge C) \Leftrightarrow (A \vee B) \wedge (A \vee C)$
   - $A \wedge (B \vee C) \Leftrightarrow (A \wedge B) \vee (A \wedge C)$
6. **德·摩根律**：
   - $\neg(A \wedge B) \Leftrightarrow \neg A \vee \neg B$
   - $\neg(A \vee B) \Leftrightarrow \neg A \wedge \neg B$
7. **吸收律**：$A \vee (A \wedge B) \Leftrightarrow A$, $\quad A \wedge (A \vee B) \Leftrightarrow A$
8. **零律**：$A \vee 1 \Leftrightarrow 1$, $\quad A \wedge 0 \Leftrightarrow 0$
9. **同一律**：$A \wedge 1 \Leftrightarrow A$, $\quad A \vee 0 \Leftrightarrow A$
10. **排中律**：$A \vee \neg A \Leftrightarrow 1$
11. **矛盾律**：$A \wedge \neg A \Leftrightarrow 0$
12. **蕴含等值式**（重点标记 $\star$）：$A \rightarrow B \Leftrightarrow \neg A \vee B$
13. **等价等值式**：$A \leftrightarrow B \Leftrightarrow (A \rightarrow B) \wedge (B \rightarrow A)$
14. **假言易位**：$A \rightarrow B \Leftrightarrow \neg B \rightarrow \neg A$
15. **等价否定**：$A \leftrightarrow B \Leftrightarrow \neg A \leftrightarrow \neg B$
16. **归谬论**：$(A \rightarrow B) \wedge (A \rightarrow \neg B) \Leftrightarrow \neg A$

## 二、 经典例题与等值演算法

### 例一：判断公式类型

> **解题核心思路（手写提示）**：去掉 $\rightarrow$ 和 $\leftrightarrow$，换成 $\neg, \wedge, \vee$。

#### 题 ①：$p \wedge r \wedge \neg(q \rightarrow p)$

$$\begin{aligned} & \Leftrightarrow p \wedge r \wedge \neg(\neg q \vee p) \\ & \Leftrightarrow p \wedge r \wedge (q \wedge \neg p) \\ & \Leftrightarrow p \wedge \neg p \wedge q \wedge r \\ & \Leftrightarrow 0 \end{aligned}$$

- **结论**：$\therefore$ 公式为**矛盾式**。

#### 题 ②：$(\neg p \wedge q) \rightarrow \neg r$

$$\begin{aligned} & \Leftrightarrow \neg(\neg p \wedge q) \vee \neg r \\ & \Leftrightarrow p \vee \neg q \vee \neg r \end{aligned}$$

- **成真赋值**：$100, \quad 111$
- **成假赋值**：$011$
- **结论**：$\therefore$ 公式为**可满足式**。

### 例二：证明 $q \rightarrow (p \rightarrow r) \Leftrightarrow (p \wedge q) \rightarrow r$

#### 方法一：从左边推导到右边

$$\begin{aligned} \text{证：} & q \rightarrow (p \rightarrow r) \\ & \Leftrightarrow \neg q \vee (\neg p \vee r) \\ & \Leftrightarrow \neg p \vee \neg q \vee r \\ & \Leftrightarrow \neg(p \wedge q) \vee r \\ & \Leftrightarrow (p \wedge q) \rightarrow r \end{aligned}$$

#### 方法二：从右边推导到左边

$$\begin{aligned} \text{法二：} & (p \wedge q) \rightarrow r \\ & \Leftrightarrow \neg(p \wedge q) \vee r \\ & \Leftrightarrow \neg p \vee \neg q \vee r \\ & \Leftrightarrow \neg q \vee \neg p \vee r \\ & \Leftrightarrow \neg q \vee (p \rightarrow r) \\ & \Leftrightarrow q \rightarrow (p \rightarrow r) \end{aligned}$$

$$\text{双斜线符号（\#）表示证明完毕。}$$



析取式我感觉对应的就是最大项

合取式对应的就是最小项 Minimum 

析取范式 就是 sum of product

合取范式 就是 product of sums

和数字电路里面一一对应



析取范式和合取范式都不唯一，给我们带来了困难

所以提出来 主析取范式 和 主合取范式

> 这不就是数电里面的定义吗



等值演算法我有些看不懂

但是真值表有时候不太好画，所以老师推荐等值演算法



这份板书详细讲解了离散数学中范式（Normal Forms）的核心概念，包括析取/合取范式、极小项/极大项，以及如何通过“真值表法”和“等值演算法”求主范式。以下是为你整理的完整文字与公式梳理：

## 一、 析取范式与合取范式

### 1. 基础定义

- **def 1（文字）**：设 $P$ 为任意命题变量，则 $P$ 和 $\neg P$ 称为**文字**。
- **def 2（析取式与合取式）**：
  - 有限个文字的**析取**称为**析取式**。如：$P \vee Q, \quad P \vee \neg Q, \quad \neg P$
  - 有限个文字的**合取**称为**合取式**。如：$\neg P \wedge Q, \quad P \wedge Q \wedge r, \quad \neg r$
- **def 3（范式）**：
  - 有限个合取式的**析取**称为**析取范式**。结构形如：$(\dots \wedge \dots) \vee (\dots \wedge \dots) \vee \dots$
  - 有限个析取式的**合取**称为**合取范式**。结构形如：$(\dots \vee \dots) \wedge (\dots \vee \dots) \wedge \dots$

### 2. 经典例题

> **例三：求 $(P \vee Q) \leftrightarrow P$ 的合取范式和析取范式。**

**核心公式提示**：消去 $\leftrightarrow$ 和 $\rightarrow$，只留下 $\neg, \wedge, \vee$。

$$\begin{aligned} (P \vee Q) \leftrightarrow P & \Leftrightarrow ((P \vee Q) \rightarrow P) \wedge (P \rightarrow (P \vee Q)) \\ & \Leftrightarrow (\neg(P \vee Q) \vee P) \wedge (\neg P \vee P \vee Q) \quad \text{【其中 }\neg P \vee P \vee Q \Leftrightarrow 1\text{】} \\ & \Leftrightarrow (\neg P \wedge \neg Q) \vee P \quad \longrightarrow \text{ 此时已是 【析取范式】} \\ & \Leftrightarrow (P \vee \neg P) \wedge (P \vee \neg Q) \quad \longrightarrow \text{ 此时已是 【合取范式】} \\ & \Leftrightarrow P \vee \neg Q \quad \longrightarrow \text{ 化简到最简，它既是【析取范式】也是【合取范式】} \end{aligned}$$

## 二、 主析取范式与主合取范式

### 1. 小项（极小项）与大项（极大项）

- **小项（def 1）**：含 $n$ 个命题变元的合取式 $G(p_1, p_2, \dots, p_n)$，若每个 $p_i$ 和 $\neg p_i$ 出现且仅出现一次，而且出现次序与 $p_1, p_2, \dots, p_n$ 的次序保持一致，则称该合取式为一个**小项（极小项）**。其特点是**有且仅有一组赋值使其为真（成真赋值）**。
- **大项（def 3）**：含 $n$ 个命题变元的析取式 $G(p_1, p_2, \dots, p_n)$，若每个 $p_i$ 和 $\neg p_i$ 出现且仅出现一次，而且出现次序与 $p_1, p_2, \dots, p_n$ 的次序保持一致，则称该析取式为一个**大项（极大项）**。其特点是**有且仅有一组赋值使其为假（成假赋值）**。

#### 2 变元与 3 变元的小项/大项对照表

- **2 变元小项与大项 ($P, Q$)**

  小项（Minterm）

  | 公式                  | 成真赋值 $(P,Q)$ | 名称  |
  | --------------------- | ---------------- | ----- |
  | $\neg P \land \neg Q$ | 00               | $m_0$ |
  | $\neg P \land Q$      | 01               | $m_1$ |
  | $P \land \neg Q$      | 10               | $m_2$ |
  | $P \land Q$           | 11               | $m_3$ |

  大项（Maxterm）

  | 公式                 | 成假赋值 $(P,Q)$ | 名称  |
  | -------------------- | ---------------- | ----- |
  | $P \lor Q$           | 00               | $M_0$ |
  | $P \lor \neg Q$      | 01               | $M_1$ |
  | $\neg P \lor Q$      | 10               | $M_2$ |
  | $\neg P \lor \neg Q$ | 11               | $M_3$ |

- **3 变元小项与大项 ($P, Q, r$)**

  三变量小项（Minterm）

  | 公式                               | 成真赋值 $(P,Q,r)$ | 名称  |
  | ---------------------------------- | ------------------ | ----- |
  | $\neg P \land \neg Q \land \neg r$ | 000                | $m_0$ |
  | $\neg P \land \neg Q \land r$      | 001                | $m_1$ |
  | $\neg P \land Q \land \neg r$      | 010                | $m_2$ |
  | $\neg P \land Q \land r$           | 011                | $m_3$ |
  | $P \land \neg Q \land \neg r$      | 100                | $m_4$ |
  | $P \land \neg Q \land r$           | 101                | $m_5$ |
  | $P \land Q \land \neg r$           | 110                | $m_6$ |
  | $P \land Q \land r$                | 111                | $m_7$ |

  三变量大项（Maxterm）

  | 公式                             | 成假赋值 $(P,Q,r)$ | 名称  |
  | -------------------------------- | ------------------ | ----- |
  | $P \lor Q \lor r$                | 000                | $M_0$ |
  | $P \lor Q \lor \neg r$           | 001                | $M_1$ |
  | $P \lor \neg Q \lor r$           | 010                | $M_2$ |
  | $P \lor \neg Q \lor \neg r$      | 011                | $M_3$ |
  | $\neg P \lor Q \lor r$           | 100                | $M_4$ |
  | $\neg P \lor Q \lor \neg r$      | 101                | $M_5$ |
  | $\neg P \lor \neg Q \lor r$      | 110                | $M_6$ |
  | $\neg P \lor \neg Q \lor \neg r$ | 111                | $M_7$ |

### 2. 主范式求解方法

> **例四：求 $P \rightarrow Q$ 的主合取范式和主析取范式。**

#### 方法一：真值表法

通过列出真值表，直接找出使公式为 $1$ 的项（对应主析取范式的小项）或为 $0$ 的项（对应主合取范式的大项）。

| **小项** | **赋值** | **P→Q** |
| -------- | -------- | ------- |
| $m_0$    | 00       | 1       |
| $m_1$    | 01       | 1       |
| $m_2$    | 10       | 0       |
| $m_3$    | 11       | 1       |

- **主析取范式**（找真值结果为 $1$ 的小项进行**析取**）：

  $$P \rightarrow Q \Leftrightarrow (\neg P \wedge \neg Q) \vee (\neg P \wedge Q) \vee (P \wedge Q) \Leftrightarrow m_0 \vee m_1 \vee m_3$$

- **主合取范式**（找真值结果为 $0$ 的成假赋值 `10`，对应大项 $M_2$）：

  $$P \rightarrow Q \Leftrightarrow \neg P \vee Q \Leftrightarrow M_2$$

#### 方法二：等值演算法

通过基本定律进行代数展开，通常使用“乘以 1”（即 $\wedge (Q \vee \neg Q)$）或“加上 0”（即 $\vee (Q \wedge \neg Q)$）的方法来补全缺失的变元。

- **求主合取范式**：

  $$P \rightarrow Q \Leftrightarrow \neg P \vee Q \quad \longrightarrow \text{变元完整，直接得到主合取范式 } M_2$$

- **求主析取范式**：

  $$\begin{aligned} P \rightarrow Q & \Leftrightarrow \neg P \vee Q \\ & \Leftrightarrow (\neg P \wedge (Q \vee \neg Q)) \vee ((P \vee \neg P) \wedge Q) \quad \text{【补全变元】} \\ & \Leftrightarrow (\neg P \wedge Q) \vee (\neg P \wedge \neg Q) \vee (P \wedge Q) \vee (\neg P \wedge Q) \quad \text{【分配律展开】} \\ & \Leftrightarrow (\neg P \wedge Q) \vee (\neg P \wedge \neg Q) \vee (P \wedge Q) \quad \text{【利用幂等律去重】} \\ & \longrightarrow \text{调整顺序后即为主析取范式：} m_0 \vee m_1 \vee m_3 \end{aligned}$$

 这两幅板书主要讲解了离散数学中的两个进阶课题：**复杂的等值演算求主范式**，以及全功能联结词集（联结词完备集）的定义与公式转换。以下是为你整理的完整内容提取与公式梳理：

## 一、 经典例题：等值演算求主范式

> **例五：用等值演算求 $P \rightarrow ((P \rightarrow Q) \wedge \neg(\neg Q \vee \neg P))$ 的主合取范式和主析取范式。**

$$\begin{aligned} & P \rightarrow ((P \rightarrow Q) \wedge \neg(\neg Q \vee \neg P)) \\ \Leftrightarrow\quad & \neg P \vee ((\neg P \vee Q) \wedge (Q \wedge P)) \quad \text{【蕴含等值式与德·摩根律、双否律】} \\ \Leftrightarrow\quad & (\neg P \vee \neg P \vee Q) \wedge (\neg P \vee Q) \wedge (\neg P \vee P) \quad \text{【分配律展开，其中 }\neg P \vee P \Leftrightarrow 1\text{】} \\ \Leftrightarrow\quad & \neg P \vee Q \quad \longrightarrow \text{ 变元完整，直接得到 【主合取范式】 (大项 } M_2 \text{)} \\ \Leftrightarrow\quad & (\neg P \wedge (Q \vee \neg Q)) \vee ((P \vee \neg P) \wedge Q) \quad \text{【等值演算法：引入缺少的变元补全小项】} \\ \Leftrightarrow\quad & (\neg P \wedge Q) \vee (\neg P \wedge \neg Q) \vee (P \wedge Q) \vee (\neg P \wedge Q) \quad \text{【分配律展开】} \\ \Leftrightarrow\quad & (\neg P \wedge Q) \vee (\neg P \wedge \neg Q) \vee (P \wedge Q) \quad \longrightarrow \text{ 调整顺序后即为 【主析取范式】 (即 } m_0 \vee m_1 \vee m_3 \text{)} \end{aligned}$$

## 二、 联结词完备集（全功能集）

### 1. 定义与定理

如果某个联结词集合中的元素能够表示出所有的命题公式与其等价，则称该集合 $S$ 是一个**联结词完备集**。

**定理 (Th)**：以下联结词集都是联结词完备集：

1. $S_1 = \{ \neg, \wedge, \vee \}$
2. $S_2 = \{ \neg, \wedge, \vee, \rightarrow \}$
3. $S_3 = \{ \neg, \wedge, \vee, \rightarrow, \leftrightarrow \}$
4. $S_4 = \{ \neg, \wedge \}$
5. $S_5 = \{ \neg, \vee \}$
6. $S_6 = \{ \neg, \rightarrow \}$
7. $S_7 = \{ \uparrow \}$ （与非门 / Sheffer stroke，定义：$P \uparrow Q \Leftrightarrow \neg(P \wedge Q)$）
8. $S_8 = \{ \downarrow \}$ （或非门 / Peirce arrow，定义：$P \downarrow Q \Leftrightarrow \neg(P \vee Q)$）

### 2. 经典例题：联结词集化简与转换

> **例六：将 $P \rightarrow Q$ 分别化成在指定完备集上的公式。**
>
> - 给定完备集目标：$S_1 = \{ \neg, \wedge \}$, $S_2 = \{ \neg, \vee \}$, $S_3 = \{ \uparrow \}$, $S_4 = \{ \downarrow \}$

#### ① 转换为 $S_2 = \{ \neg, \vee \}$ 上的公式：

$$P \rightarrow Q \Leftrightarrow \neg P \vee Q \quad \longrightarrow \text{是 } S_2 \text{ 上的公式}$$

#### ② 转换为 $S_1 = \{ \neg, \wedge \}$ 上的公式：

$$\begin{aligned} P \rightarrow Q & \Leftrightarrow \neg P \vee Q \\ & \Leftrightarrow \neg\neg(\neg P \vee Q) \quad \text{【双否律】} \\ & \Leftrightarrow \neg(P \wedge \neg Q) \quad \longrightarrow \text{是 } S_1 \text{ 上的公式} \end{aligned}$$

#### ③ 转换为 $S_3 = \{ \uparrow \}$（与非）上的公式：

$$\begin{aligned} P \rightarrow Q & \Leftrightarrow \neg(P \wedge \neg Q) \\ & \Leftrightarrow P \uparrow \neg Q \quad \text{【利用与非定义】} \\ & \Leftrightarrow P \uparrow ( \neg Q \vee \neg Q ) \\ & \Leftrightarrow P \uparrow \neg(Q \wedge Q) \\ & \Leftrightarrow P \uparrow (Q \uparrow Q) \quad \longrightarrow \text{是 } S_3 \text{ 上的公式} \end{aligned}$$

#### ④ 转换为 $S_4 = \{ \downarrow \}$（或非）上的公式：

> **基础手写代换提示**：$\neg P \Leftrightarrow \neg(P \vee P) \Leftrightarrow P \downarrow P$

$$\begin{aligned} P \rightarrow Q & \Leftrightarrow \neg P \vee Q \\ & \Leftrightarrow \neg\neg(\neg P \vee Q) \\ & \Leftrightarrow \neg(\neg P \downarrow Q) \quad \text{【将内层用或非表示】} \\ & \Leftrightarrow \neg((P \downarrow P) \downarrow Q) \quad \text{【将 }\neg P\text{ 用或非表示】} \\ & \Leftrightarrow ((P \downarrow P) \downarrow Q) \downarrow ((P \downarrow P) \downarrow Q) \quad \longrightarrow \text{是 } S_4 \text{ 上的公式} \end{aligned}$$



# CH3 命题逻辑的推理理论

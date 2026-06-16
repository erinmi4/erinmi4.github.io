---
title: 计算理论-CH07-CNF乔姆斯基范式
slug: 计算理论-CH07-CNF乔姆斯基范式
description: 计算理论-CH07-CNF乔姆斯基范式，待补充摘要。
pubDate: 2026-06-15
updatedDate: 2026-06-15
tags:
  - 大阪大学
  - 计算理论
category: 修考
draft: false
aliases:
  - CNF
---
- CNF 本质上属于 **Context-Free Grammar（CFG，上下文无关文法）** [计算理论-CH06-CFG上下文无关文法](计算理论-CH06-CFG上下文无关文法.md)

# 计算理论高分笔记：乔姆斯基范式 (Chomsky Normal Form, CNF) 快速通关指南

本笔记专为准备**大阪大学、九州大学**等知名学部/大学院“计算理论” (Theory of Computation) 考试而设计。剔除繁琐的理论证明，直击考点、题型与解题套路。

## 导言：为什么需要 CNF？（承前启后）

在学习了上下文无关文法 (CFG) 和推导树之后，我们会发现普通的 CFG 规则极为繁杂，右侧的长度和符号类型没有任何限制（例如 $S \rightarrow aSAb | \epsilon$）。这种极大的自由度虽然方便人类设计文法，但对计算机算法（如判定一个字符串是否属于该语言的 **CYK 算法**）来说极其不友好。

为了让文法结构标准化，**乔姆斯基范式 (Chomsky Normal Form, CNF)** 应运而生。它对 CFG 的产生式规则施加了严格的“物理限制”。通过将任意 CFG 转化为等价的 CNF，我们可以将推导树限制为**二叉树**，极大地降低了算法处理的复杂度。

> ⚠️ **避坑警告** 不要把计算理论中的 **CNF (Chomsky Normal Form)** > 与命题逻辑 (Predicate/Propositional Logic) 中的 **CNF (Conjunctive Normal Form, 合取范式)** 混淆！它们缩写相同，但完全不是一个概念。

## 第一部分：什么是 CNF？（核心定义）

在 Chomsky 范式中，所有的产生式规则（Production Rules）必须严格属于以下三种形式之一：

### 1. 变量双联型 (Two Variables)

右侧必须**恰好有且仅有两个**非终结符（Variables / Non-terminals）。

$$A \rightarrow BC \quad (\text{其中 } A, B, C \text{ 均为变量，且 } B, C \text{ 不能是开始符号 } S)$$

### 2. 单终结符型 (Single Terminal)

右侧必须**恰好有且仅有一个**终结符（Terminal）。

$$A \rightarrow a \quad (\text{其中 } a \text{ 为终结符})$$

### 3. 空串特例型 (Empty String Exception)

当且仅当文法生成的语言包含空串 $\epsilon$ 时，才允许开始符号直接产生空串。

$$S \rightarrow \epsilon \quad (\text{其中 } S \text{ 必须是开始符号 Start Symbol})$$

> _注：通常要求如果存在_ $S \rightarrow \epsilon$_，则开始符号_ $S$ _不能出现在任何产生式的右侧。_

## 第二部分：如何快速判断一个规则是否符合 CNF？

在考试中，判断题是送分题。请牢记下面的**诊断对照表**和**判定标准**。

### CNF 规则诊断对照表

|产生式形式|是否符合 CNF|原因分析 / 诊断说明|
|---|---|---|
|$A \rightarrow BC$|**✓ 是**|右侧恰好是两个 Variable|
|$A \rightarrow a$|**✓ 是**|右侧恰好是一个 Terminal|
|$S \rightarrow \epsilon$|**✓ 是**|仅作为开始符号 (Start Symbol) 时的特例允许|
|$A \rightarrow ABC$|**✗ 否**|右侧有三个 Variable (太长)|
|$A \rightarrow ab$|**✗ 否**|右侧有两个 Terminal (不能有多个终结符)|
|$A \rightarrow aB$|**✗ 否**|Terminal 和 Variable 混合出现|
|$A \rightarrow Ba$|**✗ 否**|Terminal 和 Variable 混合出现|
|$A \rightarrow B$|**✗ 否**|单位产生式 (Unit Production)，右侧只有一个 Variable|
|$A \rightarrow \epsilon$|**✗ 否**|非开始符号不能直接产生 $\epsilon$|

### 💡 核心判别口诀

> **CNF 的右边：要么只有两个非终结符，要么只有一个终结符。除此之外，皆为非法。**

### ✍️ 第一轮自我检测

**请判断下面哪些产生式已经是合法的 CNF 规则：**

1. $S \rightarrow AB$
    
2. $A \rightarrow a$
    
3. $B \rightarrow bC$
    
4. $C \rightarrow DE$
    
5. $D \rightarrow abc$
    
6. $E \rightarrow F$
    
7. $S \rightarrow \epsilon$
    
8. $X \rightarrow YYZ$
    

- **【是 CNF】的编号**：`1, 2, 4, 7`
    
    - `1` ($S \rightarrow AB$) 和 `4` ($C \rightarrow DE$)：符合 $A \rightarrow BC$（两个变量）。
        
    - `2` ($A \rightarrow a$)：符合 $A \rightarrow a$（单个终结符）。
        
    - `7` ($S \rightarrow \epsilon$)：属于开始符号产生空串的特例。
        
- **【不是 CNF】的编号及原因**：
    
    - `3` ($B \rightarrow bC$)：终结符 $b$ 和非终结符 $C$ 混合。
        
    - `5` ($D \rightarrow abc$)：有三个终结符，且混在一起。
        
    - `6` ($E \rightarrow F$)：是单位产生式（Unit Production）。
        
    - `8` ($X \rightarrow YYZ$)：右侧有三个变量。
        

## 第三部分：CNF 转换的四大核心法宝（算子分解）

将一个普通的 CFG 转换为 CNF，本质上只需要掌握以下四种规则的处理技巧。

### 法宝 1：消除长产生式 (Eliminating Long Productions)

- **场景**：右侧变量个数 $\ge 3$。
    
- **对策**：引入新的中间变量，进行级联二叉化拆分。
    
- **实例 1**： 将 $S \rightarrow ABC$ 转换为：
    
    $$S \rightarrow AX$$$$X \rightarrow BC \quad (\text{引入新变量 } X)$$
- **实例 2**： 将 $S \rightarrow ABCD$ 转换为：
    
    $$S \rightarrow AX$$$$X \rightarrow BY$$$$Y \rightarrow CD \quad (\text{引入新变量 } X, Y)$$
    
    > _数学规律：若右侧有_ $n$ _个符号，我们需要拆分出_ $n-1$ _个产生式。_
    

### 法宝 2：消除混杂终结符 (Eliminating Mixed Terminals)

- **场景**：右侧既有终结符，又有非终结符，或者有多个终结符。
    
- **对策**：创建专用的非终结符来“包装”该终结符。
    
- **实例 1**： 将 $S \rightarrow aB$ 转换为：
    
    $$T_a \rightarrow a \quad (\text{创建 } T_a \text{ 包装 } a)$$$$S \rightarrow T_a B \quad (\text{原产生式重写})$$
- **实例 2**： 将 $S \rightarrow aBC$ 转换为：
    
    $$T_a \rightarrow a$$$$S \rightarrow T_a BC \quad (\text{后续再通过“法宝 1”拆分长度})$$

### 法宝 3：消除单位产生式 (Eliminating Unit Productions)

- **场景**：规则形如 $A \rightarrow B$（右侧只有一个变量）。
    
- **对策**：**直接代入法**。不要保留该单位规则，而是顺着 $B$ 往下找，把 $B$ 所有“非单位产生式”的值直接复制给 $A$。
    
- **实例**： 已知文法：
    
    $$S \rightarrow A$$$$A \rightarrow a \mid BC$$
    
    要消除 $S \rightarrow A$，我们看 $A$ 能产生什么。因为 $A \rightarrow a$ 和 $A \rightarrow BC$ 都是合法的非单位规则，所以直接将它们复制给 $S$：
    
    $$S \rightarrow a \mid BC$$$$A \rightarrow a \mid BC$$
    
    然后彻底删去 $S \rightarrow A$。
    

### 法宝 4：消除空产生式 (Eliminating $\epsilon$-productions)

- **场景**：规则形如 $A \rightarrow \epsilon$（且 $A$ 不是开始符号）。
    
- **对策**：**分支展开法**。在文法中找到所有可能使用 $A$ 的地方，分别考虑 **“A 出现”** 和 **“A 消失（变为** $\epsilon$**）”** 两种情况，构造新的平行规则，最后删去 $A \rightarrow \epsilon$。
    
- **实例**： 已知文法：
    
    $$S \rightarrow AB$$$$A \rightarrow a \mid \epsilon$$$$B \rightarrow b$$
    
    因为 $A$ 可以消失，当 $A$ 消失时，$S \rightarrow AB$ 就变成了 $S \rightarrow B$。因此，保留 $A$ 存在和消失的分支，改写为：
    
    $$S \rightarrow AB \mid B$$$$A \rightarrow a$$$$B \rightarrow b$$
    
    （虽然此时产生了新的单位产生式 $S \rightarrow B$，不用担心，我们会在转换流程的后续步骤中将其消除）。
    

## 第四部分：黄金转换流程（起承转合的核心）

转换 CFG 得到 CNF 时，**转换步骤的顺序极其重要**！如果顺序混乱，消除了一类不合法规则后，极有可能会在后面的操作中“死灰复燃”。

为了做到一锤定音，必须严格执行以下**四大步骤（黄金流程）**：

```
【步骤 1：消灭空串】     【步骤 2：消灭单位】     【步骤 3：包装终结符】     【步骤 4：级联拆长】
  ε-Productions  ───>  Unit Productions  ───>  Mixed Terminals  ───>  Long Productions
```

> ❓ **为什么是这个顺序？**
> 
> 1. **为什么先消** $\epsilon$ **再消单位**？因为消除 $\epsilon$ 往往会产生新的单位产生式（例如上面的 $S \rightarrow AB \xrightarrow{A \rightarrow \epsilon} S \rightarrow B$）。
>     
> 2. **为什么最后拆长和包装**？因为消除单位产生式时，会把下层规则复制到上层。如果在复制前就完成了包装和拆分，会带来大量的重复无用变量。将这两步放在最后，能保证一次性、最简化地处理完所有的终结符和长度问题。
>     

## 第五部分：梯级演练与真题解析

### 🎯 基础演练 1：混合终结符与长度拆分

**题目**：将 CFG 产生式 $S \rightarrow aBC$ 转换成 CNF。

**详细解析与步骤**：

1. **检查第 1、2 步**：无 $\epsilon$-production，无 Unit Production。
    
2. **步骤 3（包装终结符）**：右侧有终结符 $a$ 与变量混合。引入 $T_a \rightarrow a$，改写为：
    
    $$S \rightarrow T_a BC$$
3. **步骤 4（级联拆长）**：此时右侧有 3 个变量 $T_a, B, C$，不合法。引入中间变量 $X \rightarrow BC$，原式改写为：
    
    $$S \rightarrow T_a X$$
4. **最终 CNF 答案**：
    
    $$\begin{cases} S \rightarrow T_a X \\ X \rightarrow BC \\ T_a \rightarrow a \end{cases}$$

### 🎯 基础演练 2：避免多包装的误区

**题目**：将 CFG 产生式 $S \rightarrow aABb$ 转换成 CNF。

**详细解析与步骤**：

1. **步骤 3（包装终结符）**：右侧含有终结符 $a, b$。分别引入新变量 $T_a \rightarrow a$ 和 $T_b \rightarrow b$，进行包装：
    
    $$S \rightarrow T_a AB T_b$$
2. **步骤 4（级联拆长）**：此时 $S$ 的右侧有 4 个非终结符 $T_a, A, B, T_b$。我们需要通过增加 2 个新变量来进行级联拆分。
    
    - 拆分方案（不唯一，只要保证每条规则右侧仅有 2 个变量即可）： 令 $X \rightarrow B T_b$ 令 $Y \rightarrow A X$ 则 $S \rightarrow T_a Y$
        
3. **最终 CNF 答案**：
    
    $$\begin{cases} S \rightarrow T_a Y \\ Y \rightarrow A X \\ X \rightarrow B T_b \\ T_a \rightarrow a \\ T_b \rightarrow b \end{cases}$$

### 🎯 进阶演练 3：阪大/九大高频考点——单位产生式与终结符包装

**题目**：将以下 CFG 转换为 CNF：

$$S \rightarrow aA \mid B$$$$A \rightarrow b$$$$B \rightarrow c$$

**详细解析与步骤**：

- **第一步：消除 Unit Production** 文法中存在 $S \rightarrow B$ 这一单位产生式。我们查看 $B$ 的产生式：$B \rightarrow c$ 是一个合法的单一终结符规则（已符合 CNF 形式）。 直接将 $B$ 的规则复制给 $S$（即用 $c$ 替换 $S \rightarrow B$ 中的 $B$）：
    
    $$S \rightarrow aA \mid c$$
    
    此时产生式集合更新为：
    
    $$S \rightarrow aA \mid c$$$$A \rightarrow b$$$$B \rightarrow c$$
    
    _(注：如果此时_ $B$ _在后面的文法中再也没有被使用，可以在最后将其作为无用变量删去。)_
    
- **第二步：消除混合终结符** 对于 $S \rightarrow aA$，右侧 $a$ 与变量 $A$ 混合。引入新变量 $T_a \rightarrow a$ 进行包装：
    
    $$S \rightarrow T_a A \mid c$$$$T_a \rightarrow a$$
- **⚠️ 避坑分析（关键点！）** 有些同学会习惯性地对 $A \rightarrow b$ 进行包装，写成 $A \rightarrow T_b, T_b \rightarrow b$。 **千万不要这样做！** 因为 $A \rightarrow b$ 右侧**恰好只有一个终结符**，它本身已经百分之百符合 CNF 的第二条定义。只有在终结符与非终结符**混合**（如 $aA$）或终结符**超长**（如 $ab$）时，才需要使用法宝 2。多余的包装是考试中常见的失分点。
    
- **最终 CNF 答案**：
    
    $$\begin{cases} S \rightarrow T_a A \mid c \\ T_a \rightarrow a \\ A \rightarrow b \\ B \rightarrow c \quad (\text{可保留，也可因无用而省略}) \end{cases}$$

### 🎯 综合真题挑战：考研/期末真题模拟

**题目**：将以下 CFG 转换为 CNF。请严格写出每一步的诊断与转换过程。

$$S \rightarrow AB \mid aB$$$$A \rightarrow a$$$$B \rightarrow bC$$$$C \rightarrow c$$

#### 💡 诊断分析

按照黄金流程进行排查：

1. **有没有** $\epsilon$**-productions**？没有。
    
2. **有没有 Unit Productions**？ _有人可能会认为_ $B \rightarrow bC$ _是 Unit Production。_ **错误！** $B \rightarrow bC$ 右侧由一个终结符和一个非终结符组成，这属于“混合终结符”问题，而不是“单位非终结符”。因此，本题**无 Unit Production**。
    
3. **有没有混合终结符**？
    
    - $S \rightarrow aB$ 中的 $aB$ 是混合的。
        
    - $B \rightarrow bC$ 中的 $bC$ 是混合的。 需要对终结符 $a$ 和 $b$ 分别进行包装。
        

#### ✍️ 步骤详解

- **第一步：消除混合终结符**
    
    - 引入 $T_a \rightarrow a$ 包装终结符 $a$。 将 $S \rightarrow aB$ 重写为 $S \rightarrow T_a B$。
        
    - 引入 $T_b \rightarrow b$ 包装终结符 $b$。 将 $B \rightarrow bC$ 重写为 $B \rightarrow T_b C$。
        
    
    重写后的文法为：
    
    $$S \rightarrow AB \mid T_a B$$$$A \rightarrow a$$$$B \rightarrow T_b C$$$$C \rightarrow c$$$$T_a \rightarrow a$$$$T_b \rightarrow b$$
- **第二步：检查规则长度与终结符形式** 对重写后的所有规则逐一进行 CNF 诊断：
    
    - $S \rightarrow AB \mid T_a B$：右侧均由两个变量组成。 符合 CNF！
        
    - $A \rightarrow a$：右侧为单个终结符。 符合 CNF！
        
    - $B \rightarrow T_b C$：右侧由两个变量组成。 符合 CNF！
        
    - $C \rightarrow c$：右侧为单个终结符。 符合 CNF！
        
    - $T_a \rightarrow a$：右侧为单个终结符。 符合 CNF！
        
    - $T_b \rightarrow b$：右侧为单个终结符。 符合 CNF！
        

#### 🌟 最终标准答案

$$\begin{cases} S \rightarrow AB \mid T_a B \\ A \rightarrow a \\ B \rightarrow T_b C \\ C \rightarrow c \\ T_a \rightarrow a \\ T_b \rightarrow b \end{cases}$$

## 总结：考试通关复习卡片

```
       Chomsky Normal Form (CNF) 极简判定法
       ┌─────────────────────────────────┐
       │   1. A -> BC   (有且仅有两个变量)   │
       │   2. A -> a    (有且仅有一个终结符) │
       │   3. S -> ε    (只有开始符号可为空)  │
       └─────────────────────────────────┘
                       │
                       ▼
            CFG 转换为 CNF 黄金四步法
       ┌─────────────────────────────────┐
       │  第一步：消除 ε-productions       │
       │  第二步：消除 Unit Productions     │
       │  第三步：新增非终结符包装终结符    │
       │  第四步：拆分多变量的超长产生式    │
       └─────────────────────────────────┘
```

通过以上步骤，你就可以轻松应对计算理论考试中关于乔姆斯基范式的所有转换题与概念判定题！祝你取得满分！

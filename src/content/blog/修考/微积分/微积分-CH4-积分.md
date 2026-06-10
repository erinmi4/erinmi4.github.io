---
title: "微积分-CH4-积分"
slug: "微积分-CH4-积分"
description: "笔记内容的组织顺序为：定积分定义与面积 -> 不定积分换元法（第一类与第二类） -> 分部积分法 -> 定积分性质与特殊公式 -> 变上限积分 -> 定积分的应用（体积）。"
pubDate: 2026-05-03
updatedDate: 2026-05-03
tags:
  - 修考
  - 微积分
category: 修考
draft: false
---

# 第3章 积分部分



# 微积分核心突破：从基础不定积分到多元应用的全能通关指南

本笔记旨在完美融合**日语原版教材《積分法とその応用》\**的知识体系与\**考研高数复习精讲**的高效解题技巧（凑微分判定法、分部积分表格法、华莱士公式、变限求导五大变体等）。通过模块化的递进讲解，帮助您攻克所有不定积分、定积分、广义积分、变上限积分以及几何应用的难题。

## 目录

1. [第一板块：积分的基石——基础公式与线性变换](#第一板块积分的基石基础公式与线性变换)
2. [第二板块：凑微分法（u-Substitution）与三角函数积分技巧](#第二板块凑微分法u-substitution与三角函数积分技巧)
3. [第三板块：换元法进阶——根式代换与超越置换](#第三板块换元法进阶根式代换与超越置换)
4. [第四板块：部分积分法（Integration by Parts）与“表格法”秒杀](#第四板块部分积分法integration-by-parts与表格法秒杀)
5. [第五板块：有理函数与部分分数分解（Partial Fractions）](#第五板块有理函数与部分分数分解partial-fractions)
6. [第六板块：定积分计算秘籍、对称性与华莱士公式](#第六板块定积分计算秘籍对称性与华莱士公式)
7. [第七板块：变上限积分（Variable Upper Limit Integrals）与不等式证明](#第七板块变上限积分variable-upper-limit-integrals与不等式证明)
8. [第八板块：广义积分（Improper Integrals）与 Beta-Gamma 特殊函数](#第八板块广义积分improper-integrals与-beta-gamma-特殊函数)
9. [第九板块：定积分的几何应用（面积、弧长、体积、表面积）](#第九板块定积分的几何应用面积弧长体积表面积)
10. [第十板块：定积分的数值近似计算（台形公式与シンプソン公式）](#第十板块定积分的数值近似计算台形公式与シンプソン公式)

## 第一板块：积分的基石——基础公式与线性变换

积分的本质是求导的逆运算。若 $F'(x) = f(x)$，则称 $F(x)$ 为 $f(x)$ 的一个原函数，记作 $\int f(x)dx = F(x) + C$。

### 1. 核心积分公式对照表

| 被积函数 $f(x)$                       | 原函数 $F(x) = \int f(x)dx$                        | 备注                                |
| ------------------------------------- | -------------------------------------------------- | ----------------------------------- |
| $x^{\alpha}\ (\alpha \neq -1)$        | $\frac{x^{\alpha+1}}{\alpha+1} + C$                | 幂函数                              |
| $x^{-1} = \frac{1}{x}$                | $\log\|x\| +$                                      | 自然对数（日文教材常写作 $\log x$） |
| $e^x$                                 | $e^x + C$                                          | 指数函数                            |
| $a^x\ (a > 0, a \neq 1)$              | $\frac{a^x}{\log a} + C$                           | $\log a$ 即 $\ln a$                 |
| $\cos x$                              | $\sin x + C$                                       | 三角函数                            |
| $\sin x$                              | $-\cos x + C$                                      | 三角函数                            |
| $\sec^2 x = \frac{1}{\cos^2 x}$       | $\tan x + C$                                       | 正切原函数                          |
| $\csc^2 x = \frac{1}{\sin^2 x}$       | $-\cot x + C$                                      | 余切原函数                          |
| $\frac{1}{x^2 + a^2}$                 | $\frac{1}{a} \tan^{-1}\frac{x}{a} + C$             | 逆正切（弧度制）                    |
| $\frac{1}{\sqrt{a^2 - x^2}}\ (a > 0)$ | $\sin^{-1}\frac{x}{a} + C$                         | 逆正弦                              |
| $\frac{1}{x^2 - a^2}$                 | $\frac{1}{2a}\log\left\|\frac{x-a}{x+a}\right\| +$ | 有理分式基础                        |
| $\frac{1}{\sqrt{x^2 + a}}$            | $\log\|x + \sqrt{x^2 + a}\| +$                     | 双曲/根式基础                       |

### 2. 积分的线性变换法则（一次复合函数代换）

当自变量不是 $x$，而是一次函数 $ax+b$ 时，可以直接利用复合求导逆法则，省去繁琐的换元步骤：

$$\int f(ax+b)dx = \frac{1}{a} F(ax+b) + C$$

### 3. 经典母题解析

#### 题型 1.1：基本幂函数与代数式化简

**题目**：计算 $\int \left(\sqrt[3]{x^2} - \frac{3}{x\sqrt{x}} + \frac{8}{x}\right)dx$

**解析**： 首先将各项化为指数形式：

$$\sqrt[3]{x^2} = x^{2/3},\quad \frac{3}{x\sqrt{x}} = 3x^{-3/2},\quad \frac{8}{x} = 8x^{-1}$$

直接逐项积分：

$$\int \left(x^{2/3} - 3x^{-3/2} + 8x^{-1}\right)dx = \frac{x^{5/3}}{5/3} - 3\cdot\frac{x^{-1/2}}{-1/2} + 8\log|x| + C$$

$$\quad = \frac{3}{5}\sqrt[3]{x^5} + \frac{6}{\sqrt{x}} + 8\log|x| + C$$

#### 题型 1.2：平方差基础有理分式积分

**题目**：计算 $\int \frac{5}{9x^2 - 4}dx$

**解析**： 首先提取分母的系数，化为标准形式 $\frac{1}{x^2 - a^2}$：

$$\int \frac{5}{9x^2 - 4}dx = \frac{5}{9} \int \frac{1}{x^2 - \left(\frac{2}{3}\right)^2} dx$$

代入公式 $\int \frac{1}{x^2-a^2}dx = \frac{1}{2a}\log\left|\frac{x-a}{x+a}\right|$，此时 $a = \frac{2}{3}$：

$$\text{原式} = \frac{5}{9} \times \left( \frac{1}{2 \times \frac{2}{3}} \log\left|\frac{x - \frac{2}{3}}{x + \frac{2}{3}}\right| \right) + C = \frac{5}{9} \times \frac{3}{4} \log\left|\frac{3x - 2}{3x + 2}\right| + C = \frac{5}{12}\log\left|\frac{3x - 2}{3x + 2}\right| + C$$

> 这一题应该使用**部分分式展开**的方法。

## 第二板块：凑微分法（u-Substitution）与三角函数积分技巧

### 1. 凑微分法的本质

利用微分关系 $dy = y'dx$。若被积函数可以写成 $f(g(x))g'(x)dx$ 的形式，则：

$$\int f(g(x))g'(x)dx = \int f(g(x))d(g(x)) \stackrel{u=g(x)}{=} \int f(u)du$$

常见的凑微分配对形式：

- $x dx = \frac{1}{2} d(x^2)$
- $\frac{1}{x} dx = d(\log x)$
- $e^x dx = d(e^x)$
- $\cos x dx = d(\sin x)$， $\sin x dx = -d(\cos x)$
- $\sec^2 x dx = d(\tan x)$

### 2. 三角函数凑微分精讲

这是**考研复习精讲**中的精髓技巧。若被积函数为 $R(\sin x, \cos x)$，可通过判定奇偶性直接找出最简凑微分路径：

1. **若** $R(-\sin x, \cos x) = -R(\sin x, \cos x)$（关于 $\sin x$ 为奇函数）：
   - **方法**：保留一个 $\sin x$，其余化为 $\cos x$，凑 $d(\cos x)$。
   - **技巧**：$\sin x dx = -d(\cos x)$。
2. **若** $R(\sin x, -\cos x) = -R(\sin x, \cos x)$（关于 $\cos x$ 为奇函数）：
   - **方法**：保留一个 $\cos x$，其余化为 $\sin x$，凑 $d(\sin x)$。
   - **技巧**：$\cos x dx = d(\sin x)$。
3. **若** $R(-\sin x, -\cos x) = R(\sin x, \cos x)$（关于 $\sin x, \cos x$ 整体同号变号）：
   - **方法**：全化为 $\tan x$ 与 $\sec^2 x$，凑 $d(\tan x)$。
   - **技巧**：$\sec^2 x dx = d(\tan x)$。

### 3. 经典母题解析

#### 题型 2.1：三角函数凑微分（关于正弦为奇函数）

**题目**：计算 $\int \sin^3 x \cos^2 x dx$

**解析**： 令 $R(\sin x, \cos x) = \sin^3 x \cos^2 x$。由于 $R(-\sin x, \cos x) = (-\sin x)^3 \cos^2 x = -R(\sin x, \cos x)$，因此关于 $\sin x$ 为奇函数。 我们拆分出一个 $\sin x$ 凑微分：

$$\int \sin^3 x \cos^2 x dx = \int \sin^2 x \cos^2 x (\sin x dx) = -\int (1 - \cos^2 x) \cos^2 x d(\cos x)$$

令 $t = \cos x$：

$$\text{原式} = -\int (1 - t^2)t^2 dt = \int (t^4 - t^2) dt = \frac{1}{5}t^5 - \frac{1}{3}t^3 + C = \frac{1}{5}\cos^5 x - \frac{1}{3}\cos^3 x + C$$

#### 题型 2.2：分式凑微分（指数置换）

**题目**：计算 $\int \frac{1}{e^x + e^{-x}} dx$

**解析**： 分子分母同乘以 $e^x$：

$$\int \frac{1}{e^x + e^{-x}} dx = \int \frac{e^x}{e^{2x} + 1} dx$$

注意到分子的 $e^x dx = d(e^x)$，直接凑微分：

$$\text{原式} = \int \frac{1}{(e^x)^2 + 1} d(e^x) \stackrel{u=e^x}{=} \tan^{-1}(e^x) + C$$

> 对于分式 除了 部分分式展开，还要看分子能不能够提出来
>
> 分母要看能不能形成常见的变化式

#### 题型 2.2：分式凑微分（分母项数高于分子项数）

$$\int \frac{x^4}{1 - x^2} \, dx$$

##### 2. 详细解题过程与答案

###### 第一步：化简真分式（多项式除法或凑项）

由于分子 $x^4$ 的次数高于分母 $1 - x^2$ 的次数，这是一个假分式，需要先化为整式与真分式之和。我们可以通过“加项减项”技巧来快速化简：

在分子上同时减去 $1$ 再加上 $1$：

$$\frac{x^4}{1 - x^2} = \frac{x^4 - 1 + 1}{1 - x^2}$$

利用平方差公式拆分 $x^4 - 1$：

$$x^4 - 1 = (x^2 - 1)(x^2 + 1) = -(1 - x^2)(x^2 + 1)$$

将其代回原式中：

$$\frac{x^4}{1 - x^2} = \frac{-(1 - x^2)(x^2 + 1) + 1}{1 - x^2} = -(x^2 + 1) + \frac{1}{1 - x^2} = -x^2 - 1 + \frac{1}{1 - x^2}$$

###### 第二步：逐项积分

将化简后的表达式代入积分号中，利用积分的线性性质拆开计算：

$$\int \frac{x^4}{1 - x^2} \, dx = \int \left( -x^2 - 1 + \frac{1}{1 - x^2} \right) dx$$

$$= -\int x^2 \, dx - \int 1 \, dx + \int \frac{1}{1 - x^2} \, dx$$

分别计算每一项的积分：

1. $\int x^2 \, dx = \frac{1}{3}x^3$
2. $\int 1 \, dx = x$
3. $\int \frac{1}{1 - x^2} \, dx = \frac{1}{2}\ln\left| \frac{1+x}{1-x} \right|$ （此为基本初等函数积分公式）

###### 第三步：合并结果

将各项积分结果合并，并加上积分常数 $C$：

$$\int \frac{x^4}{1 - x^2} \, dx = -\frac{1}{3}x^3 - x + \frac{1}{2}\ln\left| \frac{1+x}{1-x} \right| + C$$

###### 最终答案

$$-\frac{1}{3}x^3 - x + \frac{1}{2}\ln\left| \frac{1+x}{1-x} \right| + C$$

## 第三板块：换元法进阶——根式代换与超越置换

当直接凑微分失效时，可通过变量代换彻底消除根号或超越函数。

### 1. 三大经典三角代换（消除二次根号）

当被积函数中含有二次根号 $\sqrt{\pm x^2 \pm a^2}$ 时，建立直角三角形辅助代换：

| 根式特征           | 代换公式                                               | 微分关系                | 三角恒等式基础               |
| ------------------ | ------------------------------------------------------ | ----------------------- | ---------------------------- |
| $\sqrt{a^2 - x^2}$ | $x = a\sin t\ (t \in [-\frac{\pi}{2}, \frac{\pi}{2}])$ | $dx = a\cos t dt$       | $\sqrt{a^2 - x^2} = a\cos t$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan t\ (t \in (-\frac{\pi}{2}, \frac{\pi}{2}))$ | $dx = a\sec^2 t dt$     | $\sqrt{a^2 + x^2} = a\sec t$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec t$                                          | $dx = a\sec t\tan t dt$ | $\sqrt{x^2 - a^2} = a\tan t$ |

### 2. 无理函数（無理関数）置换分类指南

这是**日文教材中难度极高的一节**，这里梳理出最完备的解题路径：

1. **单根式** $\sqrt[n]{ax+b}$：直接令 $\sqrt[n]{ax+b} = t$，则 $x = \frac{t^n-b}{a}$， $dx = \frac{n}{a}t^{n-1}dt$。
2. **分式根式** $\sqrt[n]{\frac{ax+b}{cx+d}}$：整体令其为 $t$，反解出 $x$。
3. **二次项根式** $\sqrt{ax^2+bx+c}$：
   - **配方法**：化为上述三大三角置换的标准形式。
   - **逆数置换法（针对分母含有** $x^2$ **的根式）**：令 $x = \frac{1}{t}$， $dx = -\frac{1}{t^2}dt$。

### 3. 经典母题解析

#### 题型 3.1：经典三角代换

**题目**：计算 $\int \sqrt{a^2 - x^2} dx \quad (a > 0)$

**解析**： 令 $x = a\sin t$，$t \in [-\frac{\pi}{2}, \frac{\pi}{2}]$，则 $dx = a\cos t dt$，$ \sqrt{a^2-x^2} = a\cos t$。

$$\int \sqrt{a^2 - x^2} dx = \int (a\cos t)(a\cos t dt) = a^2 \int \cos^2 t dt$$

利用倍角公式 $\cos^2 t = \frac{1 + \cos 2t}{2}$：

$$\text{原式} = \frac{a^2}{2} \int (1 + \cos 2t) dt = \frac{a^2}{2} \left( t + \frac{1}{2}\sin 2t \right) + C = \frac{a^2}{2} (t + \sin t \cos t) + C$$

由于 $\sin t = \frac{x}{a}$，则 $t = \sin^{-1}\frac{x}{a}$，且 $\cos t = \sqrt{1 - \left(\frac{x}{a}\right)^2} = \frac{\sqrt{a^2 - x^2}}{a}$。 代回原变量 $x$：

$$\text{原式} = \frac{a^2}{2}\sin^{-1}\frac{x}{a} + \frac{1}{2}x\sqrt{a^2 - x^2} + C$$

#### 题型 3.2：逆数置换法（日文教材例题 15 难点突破）

**题目**：计算 $\int \frac{1}{x^2 \sqrt{x^2 - 3}} dx \quad (x > \sqrt{3})$

**解析**： 由于根号外有高阶项 $x^2$，直接进行逆数置换。 令 $x = \frac{1}{t}$（因为 $x > 0$，所以 $t > 0$），则 $dx = -\frac{1}{t^2} dt$。 根式变形为：

$$\sqrt{x^2 - 3} = \sqrt{\frac{1}{t^2} - 3} = \frac{\sqrt{1 - 3t^2}}{t}$$

代入原积分：

$$\int \frac{1}{x^2 \sqrt{x^2 - 3}} dx = \int t^2 \cdot \frac{t}{\sqrt{1 - 3t^2}} \left( -\frac{1}{t^2} dt \right) = -\int \frac{t}{\sqrt{1 - 3t^2}} dt$$

这里可以用凑微分法： $t dt = -\frac{1}{6} d(1 - 3t^2)$：

$$\text{原式} = \frac{1}{6} \int (1 - 3t^2)^{-1/2} d(1 - 3t^2) = \frac{1}{6} \cdot 2(1 - 3t^2)^{1/2} + C = \frac{1}{3}\sqrt{1 - 3t^2} + C$$

将 $t = \frac{1}{x}$ 代回：

$$\text{原式} = \frac{1}{3}\sqrt{1 - \frac{3}{x^2}} + C = \frac{\sqrt{x^2 - 3}}{3x} + C$$

## 第四板块：部分积分法（Integration by Parts）与“表格法”秒杀

部分积分法公式源于乘积求导法则： $\int u dv = uv - \int v du$。

### 1. 选 $u$ 的“反对幂指三”优先级判定法

若被积函数是两种不同类型函数相乘，设 $u$ 的顺序应遵循：

$$\text{反} \to \text{对} \to \text{幂} \to \text{指} \to \text{三}$$

- **反**（反三角函数） $>$ **对**（对数函数） $>$ **幂**（幂/多项式） $>$ **指**（指数函数） $>$ **三**（三角函数）。
- 排在**前面**的优先设为 $u$（进行微分），排在**后面**的优先与 $dx$ 结合设为 $dv$（进行积分）。

### 2. 考研复习绝招：部分积分表格法（Table Method）

当遇到 $\int P_n(x) e^{ax} dx$ 或 $\int P_n(x) \cos(bx) dx$（其中 $P_n(x)$ 为 $n$ 次多项式）时，使用表格法可在 5 秒内得出答案。

#### 表格构建规则：

1. **左列（微分列** $u$**）**：写上多项式，依次求导，直到导数为 $0$。
2. **右列（积分列** $v$**）**：写上另一部分函数，依次积分。
3. **连接与正负号**：
   - 将第一行的 $u$ 交叉连接到第二行的 $v$。
   - 符号依次标注为 $+,\ -, \ +,\ -, \ \dots$。
   - 将连接路线相乘并加总即为最终结果！
   
   ![image-20260531210305313](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH4-%E7%A7%AF%E5%88%86.assets/image-20260531210305313.png)

### 3. 经典母题解析

#### 题型 4.1：表格法秒杀多项式 $\times$ 三角函数

**题目**：计算 $\int x^2 \cos x dx$

**解析**： 按照“反对幂指三”，幂函数 $x^2$ 优先级高于三角函数 $\cos x$。 我们建立表格：

| 符号 | 微分列 $u$（求导） | 积分列 $v$（积分） |
| ---- | ------------------ | ------------------ |
|      | $x^2$              | $\cos x$           |
| $+$  | $\searrow$ $2x$    | $\sin x$           |
| $-$  | $\searrow$ $2$     | $-\cos x$          |
| $+$  | $\searrow$ $0$     | $-\sin x$          |

将交叉乘积按符号累加：

$$\int x^2 \cos x dx = + (x^2)(\sin x) - (2x)(-\cos x) + (2)(-\sin x) + C$$

$$\quad = x^2\sin x + 2x\cos x - 2\sin x + C$$

#### 题型 4.2：同形出现循环型（日文教材例题 6 重点）

**题目**：计算 $I = \int e^{ax} \sin bx dx \quad (a \neq 0, b \neq 0)$

**解析**： 设 $u = \sin bx$， $dv = e^{ax} dx$，则 $du = b\cos bx dx$，$v = \frac{1}{a}e^{ax}$。

$$I = \frac{1}{a}e^{ax}\sin bx - \frac{b}{a} \int e^{ax} \cos bx dx$$

对右边积分再次使用部分积分法，设 $u = \cos bx$，$dv = e^{ax} dx$：

$$\int e^{ax} \cos bx dx = \frac{1}{a}e^{ax}\cos bx - \int \left(\frac{1}{a}e^{ax}\right)(-b\sin bx) dx = \frac{1}{a}e^{ax}\cos bx + \frac{b}{a} I$$

将此式代回原方程：

$$I = \frac{1}{a}e^{ax}\sin bx - \frac{b}{a} \left( \frac{1}{a}e^{ax}\cos bx + \frac{b}{a} I \right) = e^{ax} \left( \frac{\sin bx}{a} - \frac{b\cos bx}{a^2} \right) - \frac{b^2}{a^2} I$$

移项整理 $I$：

$$\left(1 + \frac{b^2}{a^2}\right) I = e^{ax}\left(\frac{a\sin bx - b\cos bx}{a^2}\right) \implies \frac{a^2+b^2}{a^2} I = e^{ax}\left(\frac{a\sin bx - b\cos bx}{a^2}\right)$$

$$I = \frac{e^{ax}}{a^2 + b^2} (a\sin bx - b\cos bx) + C$$

## 第五板块：有理函数与部分分数分解（Partial Fractions）

有理分式 $\int \frac{P(x)}{Q(x)} dx$，在分子次数 $\ge$ 分母次数时，先用**多项式除法**化为“整式 $+$ 真分式”；然后对真分式进行**部分分数分解（部分分数分解法）**。

### 1. 拆分定理模板表

| 分母因式分解项              | 拆分后的标准分式模板                                         | 求解未知常数方法                      |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------- |
| 互异单线性因式 $(x-a)(x-b)$ | $\frac{A}{x-a} + \frac{B}{x-b}$                              | **留数法（Heaviside 覆盖法）**        |
| 重根线性因式 $(x-a)^n$      | $\frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \dots + \frac{A_n}{(x-a)^n}$ | 代入特殊值法 / 待定系数法             |
| 无实根二次因式 $x^2+px+q$   | $\frac{Bx+C}{x^2+px+q}$                                      | 配方为 $(x-h)^2+a^2$ 后凑对数与逆正切 |

### 2. 留数法（快速拆分绝招）

若分母全为单线性因式，求某个分母 $x-a$ 的常数 $A$：

$$\text{只需在原真分式中，把 } (x-a) \text{ 盖住，其余项代入 } x = a \text{ 即可！}$$

### 3. 经典母题解析

#### 题型 5.1：多项式除法与留数法综合

**题目**：计算 $\int \frac{x^5 + x^4 - 8}{x^3 - 4x} dx$

**解析**： **第一步**：分子次数（5次） $\ge$ 分母次数（3次），进行多项式除法：

$$\frac{x^5 + x^4 - 8}{x^3 - 4x} = x^2 + x + 4 + \frac{4x^2 + 16x - 8}{x^3 - 4x}$$

**第二步**：对真分式部分进行因式分解与拆分：

$$\frac{4x^2 + 16x - 8}{x(x - 2)(x + 2)} = \frac{A}{x} + \frac{B}{x - 2} + \frac{C}{x + 2}$$

**第三步**：用**留数法**计算 $A, B, C$：

- 求 $A$：盖住原式的 $x$，代入 $x=0$：

  $$A = \left. \frac{4x^2 + 16x - 8}{(x - 2)(x + 2)} \right|_{x=0} = \frac{-8}{(-2)(2)} = 2$$

- 求 $B$：盖住原式的 $(x-2)$，代入 $x=2$：

  $$B = \left. \frac{4x^2 + 16x - 8}{x(x + 2)} \right|_{x=2} = \frac{16 + 32 - 8}{2(4)} = \frac{40}{8} = 5$$

- 求 $C$：盖住原式的 $(x+2)$，代入 $x=-2$：

  $$C = \left. \frac{4x^2 + 16x - 8}{x(x - 2)} \right|_{x=-2} = \frac{16 - 32 - 8}{-2(-4)} = \frac{-24}{8} = -3$$

所以：

$$\text{原分式} = x^2 + x + 4 + \frac{2}{x} + \frac{5}{x-2} - \frac{3}{x+2}$$

**第四步**：积分求解：

$$\int \left( x^2 + x + 4 + \frac{2}{x} + \frac{5}{x-2} - \frac{3}{x+2} \right) dx = \frac{1}{3}x^3 + \frac{1}{2}x^2 + 4x + 2\log|x| + 5\log|x-2| - 3\log|x+2| + C$$

$$\quad = \frac{1}{3}x^3 + \frac{1}{2}x^2 + 4x + \log\left| \frac{x^2(x-2)^5}{(x+2)^3} \right| + C$$

## 第六板块：定积分计算秘籍、对称性与华莱士公式

定积分计算中，利用区间对称性与特殊公式可以大幅精简步骤。

### 1. 对称区间积分性质（奇零偶双倍）

若积分区间关于原点对称，即为 $[-a, a]$：

$$\int_{-a}^{a} f(x)dx = \begin{cases} 0, & f(x) \text{ 是奇函数} \\ 2\int_{0}^{a} f(x)dx, & f(x) \text{ 是偶函数} \end{cases}$$

### 2. 华莱士公式（Wallis / 沃利斯公式）

当遇到在 $[0, \frac{\pi}{2}]$ 区间的 $\sin^n x$ 或 $\cos^n x$ 积分时，直接使用此考研必背公式秒杀：

$$I_n = \int_{0}^{\frac{\pi}{2}} \sin^n x dx = \int_{0}^{\frac{\pi}{2}} \cos^n x dx = \begin{cases} \frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdot \dots \cdot \frac{1}{2} \cdot \frac{\pi}{2}, & n \text{ 为正偶数} \\ \frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdot \dots \cdot \frac{2}{3} \cdot 1, & n \text{ 为正奇数} \end{cases}$$

### 3. 区分求积法（定积分与和的极限）

利用定义，将数列和的极限转化为定积分计算：

$$\lim_{n \to \infty} \sum_{i=1}^{n} f\left(\frac{i}{n}\right) \frac{1}{n} = \int_{0}^{1} f(x) dx$$

### 4. 经典母题解析

#### 题型 6.1：华莱士公式秒杀

**题目**：计算 $\int_{0}^{\frac{\pi}{2}} \cos^5 x dx$

**解析**： 此处 $n = 5$（奇数），直接套用华莱士公式：

$$\int_{0}^{\frac{\pi}{2}} \cos^5 x dx = \frac{5-1}{5} \cdot \frac{5-3}{5-2} \cdot 1 = \frac{4}{5} \cdot \frac{2}{3} = \frac{8}{15}$$

#### 题型 6.2：利用区间对称性化简

**题目**：计算 $\int_{-1}^{1} \frac{1 + x\cos x}{e^x + e^{-x}} dx$

**解析**： 将积分拆分为两部分：

$$\text{原式} = \int_{-1}^{1} \frac{1}{e^x + e^{-x}} dx + \int_{-1}^{1} \frac{x\cos x}{e^x + e^{-x}} dx$$

1. 分析第二部分被积函数： $g(x) = \frac{x\cos x}{e^x + e^{-x}}$。由于 $g(-x) = \frac{-x\cos(-x)}{e^{-x} + e^x} = -g(x)$，该函数为**奇函数**。在对称区间 $[-1, 1]$ 上的积分为 $0$。

2. 分析第一部分： $f(x) = \frac{1}{e^x + e^{-x}}$。由于 $f(-x) = f(x)$，该函数为**偶函数**。

   $$\text{原式} = 2 \int_{0}^{1} \frac{1}{e^x + e^{-x}} dx = 2 \int_{0}^{1} \frac{e^x}{e^{2x} + 1} dx$$

   利用凑微分法（同题型 2.2），令 $u = e^x$，对应上下限从 $[0, 1]$ 变为 $[1, e]$：

   $$\text{原式} = 2 \int_{1}^{e} \frac{1}{u^2 + 1} du = 2 \left[ \tan^{-1} u \right]_{1}^{e} = 2\tan^{-1}(e) - \frac{\pi}{2}$$

#### 题型 6.3：定积分与和的极限（日文教材例题 21）

**题目**：求 $\lim_{n \to \infty} \left( \frac{1}{\sqrt{n^2 + 1^2}} + \frac{1}{\sqrt{n^2 + 2^2}} + \dots + \frac{1}{\sqrt{n^2 + n^2}} \right)$

**解析**： 提取分母的 $n$，重写为 Riemann 和的形式：

$$S_n = \sum_{i=1}^{n} \frac{1}{\sqrt{n^2 + i^2}} = \sum_{i=1}^{n} \frac{1}{n\sqrt{1 + \left(\frac{i}{n}\right)^2}} = \sum_{i=1}^{n} \frac{1}{\sqrt{1 + \left(\frac{i}{n}\right)^2}} \cdot \frac{1}{n}$$

取极限转化为定积分：

$$\lim_{n\to\infty} S_n = \int_{0}^{1} \frac{1}{\sqrt{1 + x^2}} dx$$

代入积分公式 $\int \frac{1}{\sqrt{x^2+a^2}}dx = \log|x + \sqrt{x^2+a^2}|$：

$$\text{原式} = \left[ \log\left( x + \sqrt{1 + x^2} \right) \right]_{0}^{1} = \log(1 + \sqrt{2}) - \log(1) = \log(1 + \sqrt{2})$$

## 第七板块：变上限积分（Variable Upper Limit Integrals）与不等式证明

### 1. 变上限积分的求导公式（Leibniz 规则及变体）

对于上限和下限均含有自变量的积分，其求导法则是考研与期末考试的核心必考点：

$$\frac{d}{dx} \left( \int_{a(x)}^{b(x)} f(t) dt \right) = f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)$$

### 2. 五大必考变上限求导变体

1. **复合上限**： $\frac{d}{dx}\int_0^{g(x)} f(t)dt = f(g(x))g'(x)$。

2. **双侧变量**： $\frac{d}{dx}\int_{a(x)}^{b(x)} f(t)dt = f(b(x))b'(x) - f(a(x))a'(x)$。

3. **被积式中含** $x$**（可直接提取）**：

   $$\frac{d}{dx} \left( \int_{0}^{x} x f(t) dt \right) = \frac{d}{dx} \left( x \int_{0}^{x} f(t) dt \right) = \int_{0}^{x} f(t) dt + x f(x)$$

4. **被积式中含** $x$ **与** $t$ **复合（需用置换消去** $x$**）**： 对于 $\int_0^x f(x-t) dt$，令 $u = x-t$，则 $dt = -du$，上限变为 $0$，下限变为 $x$：

   $$\int_0^x f(x-t) dt = \int_0^x f(u) du \implies \text{求导结果为 } f(x)$$

### 3. 经典母题解析

#### 题型 7.1：双侧变限求导证明

**题目**：证明 $\frac{d}{dx} \int_{2x}^{x^2} f(t) dt = 2x f(x^2) - 2f(2x)$

**解析**： 直接应用双侧变限求导公式，其中 $b(x) = x^2$ 且 $a(x) = 2x$：

$$\frac{d}{dx} \int_{2x}^{x^2} f(t) dt = f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x) = f(x^2) \cdot (2x) - f(2x) \cdot (2) = 2x f(x^2) - 2f(2x)$$

命题得证。

#### 题型 7.2：利用变限函数证明积分不等式（高难挑战题）

**题目**：设 $f(x)$ 在 $[0, 1]$ 上可导，且 $f(0) = 0$，$0 < f'(x) < 1$。证明：

$$\int_{0}^{1} f^3(x)dx \le \left[ \int_{0}^{1} f(x)dx \right]^2$$

**解析**： 构造变上限辅助函数法是攻克此类证明题的唯一利器。 构造辅助函数：

$$F(x) = \int_{0}^{x} f^3(t)dt - \left[ \int_{0}^{x} f(t)dt \right]^2 \quad (x \in [0, 1])$$

易知 $F(0) = 0$。我们对其求导：

$$F'(x) = f^3(x) - 2 \left( \int_{0}^{x} f(t)dt \right) \cdot f(x) = f(x) \left[ f^2(x) - 2 \int_{0}^{x} f(t)dt \right]$$

设 $g(x) = f^2(x) - 2 \int_{0}^{x} f(t)dt$。因为 $f(0) = 0, f'(x) > 0$，所以 $f(x) \ge 0$。 要判定 $F'(x)$ 的符号，需确定 $g(x)$ 的符号。对 $g(x)$ 求导：

$$g'(x) = 2f(x)f'(x) - 2f(x) = 2f(x)[f'(x) - 1]$$

因为已知 $f'(x) < 1$，故 $f'(x) - 1 < 0$；且 $f(x) \ge 0$，因此：

$$g'(x) \le 0$$

因为 $g(0) = f^2(0) - 0 = 0$，且 $g(x)$ 单调递减，所以在 $x \in [0, 1]$ 时：

$$g(x) \le g(0) = 0$$

由此可得：

$$F'(x) = f(x)g(x) \le 0$$

这说明 $F(x)$ 在 $[0, 1]$ 上单调递减，因此：

$$F(1) \le F(0) = 0$$

即：

$$\int_{0}^{1} f^3(t)dt - \left[ \int_{0}^{1} f(t)dt \right]^2 \le 0 \implies \int_{0}^{1} f^3(x)dx \le \left[ \int_{0}^{1} f(x)dx \right]^2$$

证明完毕。

## 第八板块：广义积分（Improper Integrals）与 Beta-Gamma 特殊函数

广义积分（又称广义积分，特异积分）包含两种：**积分区间无限**（无限积分）与**被积函数无界**（无界函数的特异积分）。

### 1. 广义积分收敛性的 $\lambda$-判别法

- **无限积分判别法**：对于 $\int_{a}^{\infty} \frac{1}{x^{\lambda}} dx\ (a > 0)$：

  $$\lambda > 1 \text{ 时收敛}， \quad \lambda \le 1 \text{ 时发散}$$

- **无界函数（特异点在** $a$**）判别法**：对于 $\int_{a}^{b} \frac{1}{(x-a)^{\lambda}} dx$：

  $$\lambda < 1 \text{ 时收敛}， \quad \lambda \ge 1 \text{ 时发散}$$

### 2. Beta 函数与 Gamma 函数核心公式体系

这是**日文教材 3.5 节的压轴内容**，必须牢记其定义与递推性质：

#### Gamma 函数 $\Gamma(p)$：

$$\Gamma(p) = \int_{0}^{\infty} e^{-x} x^{p-1} dx \quad (p > 0)$$

- **递推公式**： $\Gamma(p+1) = p\Gamma(p)$
- **阶乘性质**：若 $n$ 为正整数， $\Gamma(n+1) = n!$ 且 $\Gamma(1) = 1$
- **半整数值**： $\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi}$

#### Beta 函数 $B(p, q)$：

$$B(p, q) = \int_{0}^{1} x^{p-1}(1-x)^{q-1} dx \quad (p > 0, q > 0)$$

- **对称性**： $B(p, q) = B(q, p)$

- **与 Gamma 函数关系（核心关系式）**：

  $$B(p, q) = \frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$$

- **三角函数表现形式**：

  $$B(p, q) = 2 \int_{0}^{\frac{\pi}{2}} (\sin \theta)^{2p-1} (\cos \theta)^{2q-1} d\theta$$

### 3. 经典母题解析

#### 题型 8.1：利用 Gamma 函数求解高难积分

**题目**：计算广义积分 $\int_{0}^{\infty} x^2 e^{-2x} dx$

**解析**： 我们通过换元将其化为标准的 Gamma 函数形式。 令 $u = 2x$，则 $x = \frac{u}{2}$，$dx = \frac{1}{2} du$。 代入原积分（上下限仍为 $[0, \infty)$）：

$$\int_{0}^{\infty} x^2 e^{-2x} dx = \int_{0}^{\infty} \left( \frac{u}{2} \right)^2 e^{-u} \left( \frac{1}{2} du \right) = \frac{1}{8} \int_{0}^{\infty} u^2 e^{-u} du$$

根据 Gamma 函数定义： $\int_{0}^{\infty} u^2 e^{-u} du = \Gamma(3)$：

$$\text{原式} = \frac{1}{8} \Gamma(3)$$

利用阶乘递推关系： $\Gamma(3) = 2! = 2$：

$$\text{原式} = \frac{1}{8} \times 2 = \frac{1}{4}$$

#### 题型 8.2：利用 Beta 函数公式求解根式广义积分

**题目**：计算 $\int_{0}^{1} \frac{1}{\sqrt{x(1-x)}} dx$

**解析**： 该积分为特异积分（在 $0$ 和 $1$ 处无界）。我们将其写作：

$$\int_{0}^{1} x^{-1/2} (1-x)^{-1/2} dx$$

这正好符合 Beta 函数的定义：

$$\text{原式} = B\left(\frac{1}{2}, \frac{1}{2}\right)$$

利用与 Gamma 函数的关系式：

$$B\left(\frac{1}{2}, \frac{1}{2}\right) = \frac{\Gamma(1/2)\Gamma(1/2)}{\Gamma(1)} = \frac{\sqrt{\pi} \cdot \sqrt{\pi}}{1} = \pi$$

即该广义积分收敛，其值为 $\pi$。

## 第九板块：定积分的几何应用（面积、弧长、体积、表面积）

利用微元法，定积分可以全面解决各类坐标系下的几何测量问题。

### 1. 核心计算公式指南

| 测量物理量            | 直角坐标系式 $y=f(x)$                             | 媒介变数式 $x=x(t), y=y(t)$                                  | 极坐标系式 $r=r(\theta)$                                    |
| --------------------- | ------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| **面积** $S$          | $\int_{a}^{b} \|f(x)\|$                           | $\int_{t_1}^{t_2} \|y(t) x'(t)\|$                            | $\frac{1}{2} \int_{\alpha}^{\beta} r^2 d\theta$             |
| **弧长** $L$          | $\int_{a}^{b} \sqrt{1 + [f'(x)]^2} dx$            | $\int_{t_1}^{t_2} \sqrt{[x'(t)]^2 + [y'(t)]^2} dt$           | $\int_{\alpha}^{\beta} \sqrt{r^2 + [r'(\theta)]^2} d\theta$ |
| **旋转体体积** $V_x$  | $\int_{a}^{b} \pi [f(x)]^2 dx$ (绕x轴)            | $\int_{t_1}^{t_2} \pi y^2(t) x'(t) dt$                       |                                                             |
| **侧面积** $S_{side}$ | $2\pi \int_{a}^{b} \|f(x)\| \sqrt{1 + [f'(x)]^2}$ | $2\pi \int_{t_1}^{t_2} y(t) \sqrt{[x'(t)]^2 + [y'(t)]^2} dt$ |                                                             |

### 2. 经典母题解析

#### 题型 9.1：极坐标下的面积与弧长（心脏线 Cardioid）

**题目**：求心形线 $r = a(1 + \cos \theta) \ (a > 0)$ 包围的面积 $S$ 与周长 $L$。

**解析**： 根据对称性，上、下半部分对称，我们只需计算 $\theta \in [0, \pi]$ 区间后乘 2 即可。

##### 1. 面积 $S$ 计算：

$$S = 2 \times \left[ \frac{1}{2} \int_{0}^{\pi} r^2 d\theta \right] = \int_{0}^{\pi} a^2 (1 + \cos \theta)^2 d\theta = a^2 \int_{0}^{\pi} (1 + 2\cos \theta + \cos^2 \theta) d\theta$$

利用 $\int_0^{\pi} \cos\theta d\theta = 0$ 和 $\int_0^{\pi} \cos^2\theta d\theta = \frac{\pi}{2}$：

$$S = a^2 \left( \pi + 0 + \frac{\pi}{2} \right) = \frac{3}{2}\pi a^2$$

##### 2. 弧长 $L$ 计算：

求导数： $r'(\theta) = -a\sin \theta$。 根式化简项：

$$r^2 + (r')^2 = a^2(1 + \cos \theta)^2 + a^2\sin^2 \theta = a^2(1 + 2\cos \theta + \cos^2 \theta + \sin^2 \theta) = a^2(2 + 2\cos \theta)$$

利用半角公式 $1 + \cos \theta = 2\cos^2\frac{\theta}{2}$：

$$\sqrt{r^2 + (r')^2} = a\sqrt{4\cos^2\frac{\theta}{2}} = 2a \left| \cos\frac{\theta}{2} \right|$$

因为 $\theta \in [0, \pi]$ 时 $\frac{\theta}{2} \in [0, \frac{\pi}{2}]$，所以余弦值为正，绝对值直接拆开：

$$L = 2 \times \int_{0}^{\pi} 2a\cos\frac{\theta}{2} d\theta = 4a \left[ 2\sin\frac{\theta}{2} \right]_{0}^{\pi} = 8a$$

#### 题型 9.2：旋转体体积（椭圆 Ellipse）

**题目**：计算将椭圆 $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \ (a > b > 0)$ 绕 $x$ 轴旋转一周所得的旋转体体积 $V$。

**解析**： 由椭圆方程可得 $y^2 = b^2 \left( 1 - \frac{x^2}{a^2} \right)$。其关于 $y$ 轴对称， $x \in [-a, a]$。 代入绕 $x$ 轴旋转体积公式：

$$V = \pi \int_{-a}^{a} y^2 dx = \pi \int_{-a}^{a} b^2 \left( 1 - \frac{x^2}{a^2} \right) dx = 2\pi b^2 \int_{0}^{a} \left( 1 - \frac{x^2}{a^2} \right) dx$$

$$V = 2\pi b^2 \left[ x - \frac{x^3}{3a^2} \right]_{0}^{a} = 2\pi b^2 \left( a - \frac{a}{3} \right) = \frac{4}{3}\pi a b^2$$

## 第十板块：定积分的数值近似计算（台形公式与シンプソン公式）

当原函数无法用初等函数表示时（例如椭圆积分、 $\int e^{-x^2}dx$），只能通过数值近似。将区间 $[a, b]$ 进行 $N$ 等分，步长 $h = \frac{b-a}{N}$，每个分点对应的值为 $y_i = f(a + ih)$。

### 1. 核心计算公式

#### 台形公式（Trapezoidal Rule）：

$$\int_{a}^{b} f(x)dx \approx \frac{h}{2} \Big( y_0 + 2(y_1 + y_2 + \dots + y_{N-1}) + y_N \Big)$$

#### 辛普森公式（Simpson's Rule，要求等分数 $N = 2n$ 为偶数）：

$$\int_{a}^{b} f(x)dx \approx \frac{h}{3} \Big[ y_0 + 4(y_1 + y_3 + \dots + y_{2n-1}) + 2(y_2 + y_4 + \dots + y_{2n-2}) + y_{2n} \Big]$$

### 2. 经典母题解析（日文教材例题 34）

**题目**：将区间 $[0, 1]$ 进行 10 等分，用辛普森公式求 $\int_{0}^{1} \frac{1}{1+x} dx$ 的近似值，并由此估算 $\log 2$。

**解析**： 参数设置： $a = 0, b = 1, N = 2n = 10 \implies h = \frac{1-0}{10} = 0.1$，被积函数 $f(x) = \frac{1}{1+x}$。

计算各分点的值：

- $y_0 = f(0) = 1.0000000$
- $y_1 = f(0.1) = \frac{10}{11} \approx 0.9090909$
- $y_2 = f(0.2) = \frac{10}{12} \approx 0.8333333$
- $y_3 = f(0.3) = \frac{10}{13} \approx 0.7692308$
- $y_4 = f(0.4) = \frac{10}{14} \approx 0.7142857$
- $y_5 = f(0.5) = \frac{10}{15} \approx 0.6666667$
- $y_6 = f(0.6) = \frac{10}{16} \approx 0.6250000$
- $y_7 = f(0.7) = \frac{10}{17} \approx 0.5882353$
- $y_8 = f(0.8) = \frac{10}{18} \approx 0.5555556$
- $y_9 = f(0.9) = \frac{10}{19} \approx 0.5263158$
- $y_{10} = f(1.0) = 0.5000000$

分类汇总：

1. 端点和： $y_0 + y_{10} = 1.5000000$
2. 奇数项和： $y_1 + y_3 + y_5 + y_7 + y_9 = 3.4595395$
3. 偶数项和： $y_2 + y_4 + y_6 + y_8 = 2.7281746$

套入辛普森公式：

$$\int_{0}^{1} \frac{1}{1+x} dx \approx \frac{0.1}{3} \Big[ 1.5 + 4(3.4595395) + 2(2.7281746) \Big]$$

$$\quad = \frac{1}{30} \Big[ 1.5 + 13.8381580 + 5.4563492 \Big] = \frac{1}{30} \Big[ 20.7945072 \Big] \approx 0.69315$$

因为理论精确原函数积分为 $\log(1+x)|_0^1 = \log 2$。 所以通过辛普森近似求得的 $\log 2 \approx 0.69315$。

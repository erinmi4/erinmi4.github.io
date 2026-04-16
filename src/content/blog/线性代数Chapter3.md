---
title: 四大空间
description: 总结自《新版演习线性代数_寺田文行》一书，使用最小笔记的形式去记录。
pubDate: 2026-04-15
updatedDate: 2026-04-15
tags:
  - 线性代数
  - 修考
category: 修考
draft: false
---

[TOC]

## 什么是“解方程”

从四大空间的角度看，线性方程组最关心的是两个问题：

- $Ax = b$：右侧向量 $b$ 是否属于矩阵 $A$ 的列空间 $C(A)$。
- $Ax = 0$：矩阵 $A$ 的零空间 $N(A)$ 长什么样。

进一步地：

- 行空间 $C(A^T)$ 与零空间 $N(A)$ 互为正交补。
- 列空间 $C(A)$ 与左零空间 $N(A^T)$ 互为正交补。

所以，研究四大空间，本质上就是在研究：方程有没有解、解有几个、解长什么样。

## 为什么关心矩阵是否奇异

我们关心一个矩阵是否 **singular**，本质上是在问：这个线性变换是否可逆。

- 如果 $A$ 可逆，那么 $Ax = b$ 可以直接写成 $x = A^{-1}b$。
- 对于 $n \times n$ 方阵来说，可逆、满秩、行列式非零，这些条件是等价的。

### 什么是 full rank

对一个 $n \times n$ 方阵来说，full rank 的意思是：

- 每一列都对应一个主元（pivot）。
- 没有自由变量（free variable）。
- 列向量线性无关。
- 列空间能够张成整个 $\mathbb{R}^n$。

这和“行列式不为零”并不冲突；在方阵情形下，它们本来就是同一件事的不同表述。

## 通解的结构（Complete Solution）

对于一般的线性方程组 $Ax = b$，它的通解可以写成

$$
x = x_p + x_n
$$

- $x_p$：特解（particular solution），满足 $Ax = b$。
- $x_n$：齐次解/零空间解（homogeneous solution），满足 $Ax = 0$，因此 $x_n \in N(A)$。

这说明：非齐次方程组的所有解，都可以看成“一个特解 + 一个零空间中的向量”。

## 解线性方程组的方法

### 1. 克拉默法则（Cramer's Rule）

对于线性方程组 $A\mathbf{x} = \mathbf{d}$，如果 $|A| \ne 0$，那么

$$
x_i = \frac{|\mathbf{b}_1 \cdots \mathbf{d} \cdots \mathbf{b}_n|}{|A|}
$$

其中，分子表示把 $A$ 的第 $i$ 列替换为常数向量 $\mathbf{d}$ 后得到的行列式。

### 2. 逆矩阵法

如果 $A$ 可逆，那么

$$
Ax = b \Rightarrow x = A^{-1}b
$$

### 3. 高斯消元法

高斯消元法最通用。它通过初等行变换把矩阵化为行阶梯形或简化行阶梯形，从而直接看出主元、自由变量以及解的结构。

![image-20260415100316383](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0Chapter3.assets/image-20260415100316383.png)

## 逆矩阵怎么求

### 1. 定义法

设未知矩阵 $X$，直接由

$$
AX = XA = E
$$

求出 $X$。

### 2. 伴随矩阵法

$$
A^{-1} = \frac{1}{|A|}\operatorname{adj}(A) = \frac{1}{|A|}{}^t[A_{ij}]
$$

其中，$\operatorname{adj}(A)$ 是 $A$ 的伴随矩阵，也就是余因子矩阵的转置。

### 3. 增广矩阵法

构造增广矩阵 $[A \mid E]$，再通过同步行变换把左边的 $A$ 化为单位矩阵 $E$。此时右边就会自动变成 $A^{-1}$。

#### 操作步骤

1. 写出增广矩阵 $[A \mid E]$。
2. 通过行变换把左侧化为上三角，再继续化成单位矩阵。
3. 当左侧变成 $E$ 时，右侧就是所求的 $A^{-1}$。

例如，若计算结果为

$$
A^{-1} =
\begin{bmatrix}
-1 & 1 & -1 \\
3/5 & -1/5 & 2/5 \\
-4/5 & 3/5 & -1/5
\end{bmatrix}
=
\frac{1}{5}
\begin{bmatrix}
-5 & 5 & -5 \\
3 & -1 & 2 \\
-4 & 3 & -1
\end{bmatrix}
$$

## 逆矩阵存在的判定

对于 $n$ 阶方阵 $A$，下列条件等价：

1. $|A| \ne 0$。
2. 存在 $X$ 使得 $AX = E$，或存在 $X$ 使得 $XA = E$。
3. 对任意 $\mathbf{b}$，方程 $A\mathbf{x} = \mathbf{b}$ 有唯一解。
4. $A$ 可以表示为一系列初等矩阵的乘积。
5. $\operatorname{rank}(A) = n$。

实际做题时：

- 小矩阵常用行列式判断。
- 大矩阵更常用高斯消元法判断。

## 解的个数

### 用四大空间来理解

- **无解**：$b \notin C(A)$，也就是 $b$ 不在列空间里。
- **唯一解**：$b \in C(A)$ 且 $N(A)$ 只有零向量。
- **无穷多解**：$b \in C(A)$ 且 $N(A)$ 包含非零向量，也就是存在自由变量。

### 秩判别标准

$$
\operatorname{rank}(A) = \operatorname{rank}([A \mid b]) = n
\Rightarrow \text{唯一解}
$$

$$
\operatorname{rank}(A) = \operatorname{rank}([A \mid b]) < n
\Rightarrow \text{无穷多解}
$$

$$
\operatorname{rank}(A) < \operatorname{rank}([A \mid b])
\Rightarrow \text{无解}
$$

## LU 分解与消去矩阵

高斯消去法的每一步，都可以看成左乘一个初等矩阵（elimination matrix）。

例如：

- $E_{21}A$ 表示消去位置 $(2, 1)$ 的元素。
- 整个消去过程可以写成

$$
GFEA = U
$$

其中 $U$ 是上三角矩阵。

把这些消去矩阵合并起来，也可以写成

$$
PA = U
$$

因为 $P$ 本身就是由一系列初等矩阵组成的。

### 初等矩阵的逆

- 对角线上做倍乘操作：逆操作就是乘倒数。
- 交换两行：逆矩阵还是它自己。
- 把第 $j$ 行的 $c$ 倍加到第 $i$ 行：逆操作就是把第 $j$ 行的 $-c$ 倍加到第 $i$ 行。

具体来说：

$$
P_I^{-1}
$$

对应“某一行乘以非零常数 $c$”，其逆操作是乘以 $c^{-1}$。

$$
P_{II}^{-1} = P_{II}
$$

对应“交换两行”。

$$
P_{III}^{-1}
$$

对应“把第 $j$ 行的 $c$ 倍加到第 $i$ 行”，其逆操作只要把 $c$ 改成 $-c$ 即可。

## 如何求 Nullspace $N(A)$

求零空间的核心方法是高斯消元法，目标是找出所有满足 $Ax = 0$ 的向量。

### 基本步骤

1. 把矩阵 $A$ 化为行阶梯形或简化行阶梯形。
2. 区分主元变量（pivot variables）和自由变量（free variables）。
3. 依次让一个自由变量取 $1$，其余自由变量取 $0$，求出对应的特殊解。
4. 用这些特殊解的线性组合表示整个零空间。

### 例子

设

$$
A =
\begin{bmatrix}
2 & 4 & 1 & 4 & 5 \\
1 & 2 & 3 & -3 & 5 \\
4 & 8 & 15 & -18 & 23
\end{bmatrix}
$$

先交换前两行：

$$
\begin{bmatrix}
1 & 2 & 3 & -3 & 5 \\
2 & 4 & 1 & 4 & 5 \\
4 & 8 & 15 & -18 & 23
\end{bmatrix}
$$

消去第一列下方的元素：

- $r_2 - 2r_1 \to r_2$
- $r_3 - 4r_1 \to r_3$

得到

$$
\begin{bmatrix}
1 & 2 & 3 & -3 & 5 \\
0 & 0 & -5 & 10 & -5 \\
0 & 0 & 3 & -6 & 3
\end{bmatrix}
$$

继续化简第二、三行：

- $r_2 \div (-5) \to r_2$
- $r_3 \div 3 \to r_3$
- $r_3 - r_2 \to r_3$

得到行阶梯形矩阵：

$$
\begin{bmatrix}
1 & 2 & 3 & -3 & 5 \\
0 & 0 & 1 & -2 & 1 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

再做 $r_1 - 3r_2 \to r_1$，可得

$$
\begin{bmatrix}
1 & 2 & 0 & 3 & 2 \\
0 & 0 & 1 & -2 & 1 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

因此：

- 主元变量是 $x_1, x_3$。
- 自由变量是 $x_2, x_4, x_5$。

对应方程为

$$
\begin{aligned}
x_1 + 2x_2 + 3x_4 + 2x_5 &= 0 \\
x_3 - 2x_4 + x_5 &= 0
\end{aligned}
$$

所以

$$
x_1 = -2x_2 - 3x_4 - 2x_5,\qquad
x_3 = 2x_4 - x_5
$$

依次令自由变量取值：

- 当 $x_2 = 1, x_4 = 0, x_5 = 0$ 时，

$$
s_1 =
\begin{bmatrix}
-2 \\
1 \\
0 \\
0 \\
0
\end{bmatrix}
$$

- 当 $x_2 = 0, x_4 = 1, x_5 = 0$ 时，

$$
s_2 =
\begin{bmatrix}
-3 \\
0 \\
2 \\
1 \\
0
\end{bmatrix}
$$

- 当 $x_2 = 0, x_4 = 0, x_5 = 1$ 时，

$$
s_3 =
\begin{bmatrix}
-2 \\
0 \\
-1 \\
0 \\
1
\end{bmatrix}
$$

因此，

$$
\begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5
\end{bmatrix}
=
c_1
\begin{bmatrix}
-2 \\
1 \\
0 \\
0 \\
0
\end{bmatrix}
+
c_2
\begin{bmatrix}
-3 \\
0 \\
2 \\
1 \\
0
\end{bmatrix}
+
c_3
\begin{bmatrix}
-2 \\
0 \\
-1 \\
0 \\
1
\end{bmatrix},
\qquad c_1, c_2, c_3 \in \mathbb{R}
$$

---
title: "线性代数-CH4-行列式"
slug: "线性代数-CH4-行列式"
description: "线性代数-CH4-行列式，待补充摘要。"
pubDate: 2026-06-05
updatedDate: 2026-06-05
tags:
  - 线性代数
  - 修考
category: 修考
draft: true
---

https://drive.google.com/file/d/1rTAKOefbZ5f0bts3W98YNC_1IWMmmNHG/view



![image-20260605175014181](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-CH4-%E8%A1%8C%E5%88%97%E5%BC%8F.assets/image-20260605175014181.png)

# Chapter 4: Determinants (行列式)

## 0. 核心作用与引言 (Introduction)

高斯消元法 (Gaussian Elimination) 是解决 $Ax=b$ 的基础工具。而**行列式 (Determinant)** 则是将线性方程组求解 ($Ax=b$) 推进到特征值与特征向量分析 ($Ax=\lambda x$) 的关键过渡工具。 对于一个矩阵 $A$（仅限方阵），行列式的作用包括：

1. 寻找主元 (To find pivots)
2. 测试矩阵是否可逆 (Test for invertibility / Singularity)
3. 计算平行六面体的体积 (Volume of a box)
4. 利用克莱姆法则求解 $Ax=b$ (Cramer's rule)
5. 更高级领域依靠行列式来反映矩阵的本质特征。

## 1. 行列式的十个性质 (Properties of Determinants)

*注：以下性质均可通过* $2 \times 2$ *矩阵的行列式公式* $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad-bc$ *进行验证。*

### 三个基本性质 (Three Basic Properties)

**性质 1：行列式是关于单行的线性函数 (Linearity in one row)** 一次只能改变一行，其它行保持不变。 $$ \begin{vmatrix} a+a' & b+b' \ c & d \end{vmatrix} = \begin{vmatrix} a & b \ c & d \end{vmatrix} + \begin{vmatrix} a' & b' \ c & d \end{vmatrix} $$ $$ \begin{vmatrix} ta & tb \ c & d \end{vmatrix} = t \begin{vmatrix} a & b \ c & d \end{vmatrix} \quad \text{(注意：这不等于 } \det(tA) = t^n \det(A) \text{)} $$

**性质 2：两行互换，行列式改变符号 (Row exchange changes sign)** $$ \begin{vmatrix} c & d \ a & b \end{vmatrix} = cb-ad = - \begin{vmatrix} a & b \ c & d \end{vmatrix} $$

**性质 3：单位矩阵的行列式为 1 (**$\det(I) = 1$**)** $$ \begin{vmatrix} 1 & 0 \ 0 & 1 \end{vmatrix} = 1 $$

### 七个推导性质 (Derived Properties)

**性质 4：若两行相等，则** $\det(A) = 0$ 由于两行互换后矩阵不变，但根据性质2符号要取反，即 $\det(A) = -\det(A)$，故只能为0。 $$ \begin{vmatrix} a & b \ a & b \end{vmatrix} = ab - ab = 0 $$

**性质 5：行操作 (消元) 不改变行列式** 将某一行的倍数加到另一行上，行列式值不变。 $$ \begin{vmatrix} a+lc & b+ld \ c & d \end{vmatrix} = \begin{vmatrix} a & b \ c & d \end{vmatrix} + l\begin{vmatrix} c & d \ c & d \end{vmatrix} = \begin{vmatrix} a & b \ c & d \end{vmatrix} + 0 = \begin{vmatrix} a & b \ c & d \end{vmatrix} $$

**性质 6：若包含全零行，则** $\det(A) = 0$ $$ \begin{vmatrix} a & b \ 0 & 0 \end{vmatrix} = 0 $$

**性质 7：三角矩阵的行列式等于主对角线元素的乘积** $$ \begin{vmatrix} a & b \ 0 & d \end{vmatrix} = ad $$

**性质 8：奇异矩阵检验** 若矩阵 $A$ 是奇异矩阵 (不可逆)，则 $\det(A) = 0$。若 $A$ 可逆，则 $\det(A) \neq 0$。

**性质 9：矩阵乘积与逆矩阵的行列式** *(笔记修正处)* 对于任何两个方阵 $A$ 和 $B$： $$ \det(AB) = \det(A) \times \det(B) $$ 推论：因为 $A A^{-1} = I$，所以 $\det(A) \det(A^{-1}) = \det(I) = 1$。 $$ \det(A^{-1}) = \frac{1}{\det(A)} $$

**性质 10：转置矩阵的行列式不变** *(笔记修正处)* $$ \det(A) = \det(A^T) $$ 这意味着：**以上所有针对“行”的性质，对“列”也同样适用！**

## 2. 求解行列式的三种方法 (Formulas for Determinants)

### 方法一：主元法 (基于高斯消元 / 1st Formula)

**原理**：利用性质5和性质7。通过高斯消元将矩阵 $A$ 化为上三角矩阵 $U$，主对角线上的元素即为主元 (pivots)。 **公式**：$\det(A) = \pm (d_1 \cdot d_2 \cdot ... \cdot d_n)$ （符号取决于消元过程中行交换的次数）。

> **【例题 1 - 主元法】** 求矩阵 $A = \begin{bmatrix} 2 & 4 \\ 1 & 5 \end{bmatrix}$ 的行列式。 **过程**：
>
> 1. 利用高斯消元，将第1行的 $(-\frac{1}{2})$ 倍加到第2行： $R_2 \leftarrow R_2 - 0.5 \cdot R_1$
> 2. 得到上三角矩阵 $U = \begin{bmatrix} 2 & 4 \\ 0 & 3 \end{bmatrix}$。没有进行行交换。
> 3. 对角线主元为 2 和 3。 **答案**：$\det(A) = 2 \times 3 = 6$。

### 方法二：排列展开法 (Big Formula / Permutations)

*(注：解答笔记中“这个不太了解”的疑惑)* **原理**：本质上是把矩阵的每一行拆开。为了保证乘积不为零，我们必须从矩阵的**每一行挑出一个元素**，且这 $n$ 个元素必须来自**不同的列**。 **公式**：$\det(A) = \sum \pm (a_{1\alpha} a_{2\beta} ... a_{n\nu})$ 一共会有 $n!$ 个项相加。每一项的符号取决于列索引 $(\alpha, \beta, ..., \nu)$ 的排列奇偶性（即需要交换多少次才能回到自然顺序 $1, 2, ..., n$）。

> **【例题 2 - 排列展开法】** 说明 $3 \times 3$ 矩阵的排列法构成。 $$ A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \ a_{21} & a_{22} & a_{23} \ a_{31} & a_{32} & a_{33} \end{bmatrix} $$ **过程**：$3 \times 3$ 共有 $3! = 6$ 种挑选方式（即列标的 6 种全排列）。
>
> 1. 取 (1, 2, 3) 列：$+ a_{11} a_{22} a_{33}$ (0次交换，正号)
> 2. 取 (2, 3, 1) 列：$+ a_{12} a_{23} a_{31}$ (2次交换，正号)
> 3. 取 (3, 1, 2) 列：$+ a_{13} a_{21} a_{32}$ (2次交换，正号)
> 4. 取 (1, 3, 2) 列：$- a_{11} a_{23} a_{32}$ (1次交换，负号)
> 5. 取 (2, 1, 3) 列：$- a_{12} a_{21} a_{33}$ (1次交换，负号)
> 6. 取 (3, 2, 1) 列：$- a_{13} a_{22} a_{31}$ (1次交换，负号) **结论**：这就是我们在高中学过的“对角线法则”（仅适用于 $2 \times 2$ 和 $3 \times 3$）。

### 方法三：代数余子式法 (Cofactors Method)

**原理**：将高阶行列式转化为低阶行列式的计算。这是对排列展开法的合并同类项。 **定义**：代数余子式 $C_{ij} = (-1)^{i+j} \det(M_{ij})$，其中 $M_{ij}$ 是删除了矩阵 $A$ 的第 $i$ 行和第 $j$ 列后剩下的子矩阵。 **公式**：沿着任意第 $i$ 行展开：$\det(A) = a_{i1}C_{i1} + a_{i2}C_{i2} + ... + a_{in}C_{in}$。

> **【例题 3 - 代数余子式法】** 计算矩阵 $A = \begin{bmatrix} 1 & 2 & 0 \\ 3 & -1 & 2 \\ 2 & 0 & 1 \end{bmatrix}$ 的行列式。 **过程**：选择含有 0 最多的第一行进行展开可以简化计算。 $\det(A) = 1 \cdot C_{11} + 2 \cdot C_{12} + 0 \cdot C_{13}$
>
> - $C_{11} = (-1)^{1+1} \begin{vmatrix} -1 & 2 \\ 0 & 1 \end{vmatrix} = 1 \cdot (-1 - 0) = -1$
> - $C_{12} = (-1)^{1+2} \begin{vmatrix} 3 & 2 \\ 2 & 1 \end{vmatrix} = -1 \cdot (3 - 4) = 1$ $\det(A) = 1(-1) + 2(1) + 0 = -1 + 2 = 1$ **答案**：$\det(A) = 1$。

## 3. 行列式的四大应用 (Applications of Determinants)

### 应用一：计算逆矩阵 $A^{-1}$ (Computation of $A^{-1}$)

**公式**：$$ A^{-1} = \frac{1}{\det(A)} C^T $$ 其中 $C^T$ 是代数余子式矩阵 $C$ 的转置（也叫伴随矩阵）。

> **【例题 4 - 计算逆矩阵】** 求 $A = \begin{bmatrix} 4 & 3 \\ 2 & 2 \end{bmatrix}$ 的逆矩阵。 **过程**：
>
> 1. $\det(A) = (4)(2) - (3)(2) = 8 - 6 = 2$。
> 2. 计算代数余子式： $C_{11} = 2, \quad C_{12} = -2$ $C_{21} = -3, \quad C_{22} = 4$ 伴随矩阵 $C^T = \begin{bmatrix} C_{11} & C_{21} \\ C_{12} & C_{22} \end{bmatrix} = \begin{bmatrix} 2 & -3 \\ -2 & 4 \end{bmatrix}$
> 3. $A^{-1} = \frac{1}{2} \begin{bmatrix} 2 & -3 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 1 & -1.5 \\ -1 & 2 \end{bmatrix}$。 **答案**：验证 $AA^{-1} = I$ 成立。

### 应用二：克莱姆法则求解 $Ax=b$ (Cramer's Rule)

**原理**：未知数 $x_j$ 可以通过将矩阵 $A$ 的第 $j$ 列替换为向量 $b$ 形成新矩阵 $B_j$，然后求其行列式比值得到。 **公式**：$$ x_j = \frac{\det(B_j)}{\det(A)} $$

> **【例题 5 - 克莱姆法则】** 解方程组： $2x_1 + x_2 = 5$ $3x_1 - x_2 = 0$ **过程**：
>
> 1. 矩阵形式 $Ax=b$：$\begin{bmatrix} 2 & 1 \\ 3 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 5 \\ 0 \end{bmatrix}$
> 2. 分母 $\det(A) = \begin{vmatrix} 2 & 1 \\ 3 & -1 \end{vmatrix} = -2 - 3 = -5$
> 3. 分子 $\det(B_1)$ (将第一列换成 b)：$\begin{vmatrix} 5 & 1 \\ 0 & -1 \end{vmatrix} = -5 - 0 = -5$
> 4. 分子 $\det(B_2)$ (将第二列换成 b)：$\begin{vmatrix} 2 & 5 \\ 3 & 0 \end{vmatrix} = 0 - 15 = -15$
> 5. 解：$x_1 = \frac{-5}{-5} = 1$， $x_2 = \frac{-15}{-5} = 3$。 **答案**：$x_1 = 1, x_2 = 3$。

### 应用三：奇异性检验 (Test of Singularity)

根据 PPT，矩阵 $A$ 为奇异矩阵（不可逆）等价于以下任意一点：

1. $\det(A) = 0$。
2. 列向量或行向量线性相关。
3. 高斯消元后主元个数 $r < n$。
4. $A$ 有非平凡的零空间 (Nontrivial nullspace)。

### 应用四：计算几何体积 (Volume of a Box)

**原理**：以 $n$ 维空间中 $n$ 个向量 $l_1, l_2, ..., l_n$ 为边构成的平行六面体，其体积（或面积）就等于这 $n$ 个向量作为行构成的矩阵行列式的**绝对值**。 **公式**：$$ \text{Volume} = |\det(A)| $$ 由于行操作不改变行列式（性质5），这也从几何上解释了“切变变换 (Shear)”不改变图形面积或体积。

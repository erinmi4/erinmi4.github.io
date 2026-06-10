---
title: 矩阵的对角化与金字塔阶级
slug: 线性代数-矩阵的对角化与金字塔阶级
description: 梳理矩阵对角化、特征值与特征向量之间的关系，并用层级视角理解不同矩阵的可处理性。
pubDate: 2026-04-15
updatedDate: 2026-04-16
tags:
  - 线性代数
  - 修考
category: 修考
draft: false
---
### 特征值与特征向量的核心动机
在线性代数中，我们经常需要处理输入向量 $x$ 经过矩阵 $A$ 的线性转换，得到输出向量 $Ax$。当矩阵 $A$ 非常庞大（例如 $1000 \times 1000$）且需要进行多次转换（例如 $A^k x$）时，直接相乘的计算量会非常惊人。

特征值与特征向量的发明正是为了解决这个问题。对于一个矩阵 $A$，如果我们能找到特定的向量 $x$（即**特征向量**），使得 $A$ 作用在 $x$ 上时，其效果等同于纯量 $\lambda$（即**特征值**）乘上 $x$：
$$Ax = \lambda x$$
那么，高维度的矩阵乘法就被简化成了简单的纯量倍数放大或缩小

### 矩阵的金字塔阶级

基于特征向量的表现，矩阵被划分为一个严阶级的“金字塔”：

![image-20260415090930521](./matrix-diagonalization-assets/image-20260415090930521.png)

*   L4**金字塔底层：瑕疵矩阵 (Defective Matrix)**
    *   **定义：** 虽然能算出特征值（通常伴随重复的特征值），但在求零空间时，**找不到 $n$ 条线性独立的特征向量**的矩阵。
    *   **后果：** 这种矩阵“残缺不全”，无法凑齐构成 $n$ 维空间的基底 (Basis)。因此，**它无法被对角化**，在应用上最难处理。

*   L3**金字塔中层：可对角化矩阵 (Diagonalizable Matrix)**
    *   **定义：** 如果一个 $n \times n$ 矩阵能够提供 **$n$ 条线性独立的特征向量**。
    *   **优势：** 这 $n$ 条特征向量可以组成 $n$ 维空间的基底。我们可以将这些特征向量排成一个矩阵 $X$（特征向量矩阵），从而将原矩阵 $A$ 分解为：
        $$A = X \Lambda X^{-1}$$
        （其中 $\Lambda$ 是由特征值组成的对角矩阵）。所有复杂的 $A$ 的运算，都可以转化为极简的 $\Lambda$ 对角矩阵的运算。

*   L2**金字塔顶层：完美矩阵 (具有谱定理 Spectral Theorem 的矩阵)**
    *   **定义：** 例如对称矩阵 (Symmetric Matrix)。
    *   **优势：** 这种矩阵不仅能找到 $n$ 条独立的特征向量，而且这 $n$ 条特征向量**天然互相垂直 (Orthogonal)**。
    *   此时对角化公式会进化为 $A = Q \Lambda Q^T$（其中 $Q$ 是正交矩阵，反矩阵 $Q^{-1}$ 直接等同于转置矩阵 $Q^T$），这在工程和纯数学中都是最优美、最好算的形态。
- L1最上层
	- PD matrix: 天龙人
	  - 同时满足矩阵对角化这个空间中最为完美的要求，同时也满足逆矩阵世界中最完美的要求（可逆）



## 什么是对角化

<img src="./matrix-diagonalization-assets/image-20260416115206657.png" alt="对角化的推导公式" style="zoom: 33%;" />

### Normal matrix

这也就是第二层的矩阵

满足$A^H A = A A^H$

**正规矩阵（Normal Matrix）**在线性代数和数值计算中非常重要，主要因为它是**谱定理（Spectral Theorem）**成立的最广泛类矩阵。

简单来说，正规矩阵的核心用处在于：**它可以被“完美地”对角化（或块对角化），且变换过程保持几何结构不变（正交/酉变换）。**



### 对角化例题

对于矩阵 $A = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{2} \end{bmatrix}$，其对角化公式为：

$$ A = P D P^{-1} $$

其中：

1.  **对角矩阵 $D$**（由特征值组成）：
    $$ D = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} $$

2.  **可逆矩阵 $P$**（由对应的线性无关特征向量组成）：
    $$ P = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} $$

3.  **逆矩阵 $P^{-1}$**：
    $$ P^{-1} = \frac{1}{2} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{bmatrix} $$

---

#### 推导简述：

1.  **求特征值**：
    由于 $A$ 的每一行和为 1，且秩为 1（两行相同），故特征值为 $\lambda_1 = 1, \lambda_2 = 0$。
    （或者通过特征方程 $|\lambda I - A| = \lambda(\lambda - 1) = 0$ 求得）。

2.  **求特征向量**：
    *   对于 $\lambda_1 = 1$：解 $(I - A)x = 0 \Rightarrow \begin{bmatrix} 1/2 & -1/2 \\ -1/2 & 1/2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$，得 $x_1 = x_2$。取特征向量 $v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$。
    *   对于 $\lambda_2 = 0$：解 $Ax = 0 \Rightarrow \begin{bmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$，得 $x_1 = -x_2$。取特征向量 $v_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$。

3.  **构造 $P$ 和 $D$**：
    $$ P = [v_1, v_2] = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}, \quad D = \text{diag}(1, 0) $$

4.  **验证**：
    $$ P D P^{-1} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & \frac{1}{2} \end{bmatrix} = A $$

> **注意**：由于 $A$ 是实对称矩阵，它也是正规矩阵，因此可以进行**正交对角化**。若选取单位正交特征向量，则 $P$ 为正交矩阵，满足 $P^{-1} = P^T$。
> 此时 $Q = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix}$，公式为 $A = Q D Q^T$。



#### 使用对角化求解幂次问题

$A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$ Calculate $A^4$ 



首先求 $A$ 的特征值 $\lambda$：
$$\det(A - \lambda I) = \det\begin{bmatrix} -\lambda & -1 \\ 1 & -\lambda \end{bmatrix} = \lambda^2 + 1 = 0 \implies \lambda = i, -i$$
根据矩阵次方的性质，**$A^k$ 的特征值是原特征值的 $k$ 次方**：

- $\lambda_1^4 = i^4 = 1$
- $\lambda_2^4 = (-i)^4 = 1$
由于 $A^4$ 的特征值全是 1，且 $A$ 是可对角化的，这意味着 $A^4$ 的对角化形式 $\Lambda^4$ 就是单位矩阵 $I$。
$$A^4 = X \Lambda^4 X^{-1} = X \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} X^{-1} = X I X^{-1} = I$$
**最终答案：**
$$A^4 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

## 什么是谱定理 Spectral theorem

矩阵可以进行对角化，也就是有充足的特征向量能够覆盖整个空间。

在这个基础上，这些basis之间还是互相垂直的。

这是集合了两种最好的basis

1. Orthogonal basis
2. Engenvector basis




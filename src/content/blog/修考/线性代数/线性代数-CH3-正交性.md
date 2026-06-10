---
title: "线性代数-CH3-正交性"
slug: "线性代数-CH3-正交性"
description: "线性代数-CH3-正交性，待补充摘要。"
pubDate: 2026-06-04
updatedDate: 2026-06-04
tags:
  - 线性代数
  - 修考
category: 修考
draft: true
---

[Chapter 3 Orthogonality.pdf - Google ドライブ](https://drive.google.com/file/d/1j_5c6FbR0zjwuYRBAibYWvVA_aIvXWQz/view?usp=sharing)

![image-20260604124759175](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-CH3-%E6%AD%A3%E4%BA%A4%E6%80%A7.assets/image-20260604124759175.png)

![image-20260604125231635](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-CH3-%E6%AD%A3%E4%BA%A4%E6%80%A7.assets/image-20260604125231635.png)

![image-20260604155359844](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-CH3-%E6%AD%A3%E4%BA%A4%E6%80%A7.assets/image-20260604155359844.png)



# 线性代数精读笔记：第三章 空间正交性与最小二乘法 (Orthogonality & Least Squares)

本笔记严格基于陈晏笙老师的线性代数课件（Chapter 3: Orthogonality）及个人手写笔记逻辑重新整理。本章的核心主线是：**因为** $Ax=b$ **无解，我们需要寻找最优的近似解，这引入了“正交”与“投影”的概念，并最终引出了正规方程（最小二乘法）、伪逆以及通过 Gram-Schmidt 正交化寻找完美基底（QR分解）的方法。**

## 1. 向量范数与子空间的相互正交性 (Orthogonality of Subspaces)

### 1.1 向量的范数 (Norms)

范数是衡量向量长度的指标，常见的范数有三种：

- $L^1$ **范数 (Manhattan norm)**: $||v||_1 = |v_1| + |v_2| + \dots + |v_n|$
- $L^2$ **范数 (Euclidean norm)**: $||v||_2 = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2} = \sqrt{v^Tv}$ （本章主要使用的范数）
- $L^\infty$ **范数 (Max norm)**: $||v||_\infty = \max(|v_1|, |v_2|, \dots, |v_n|)$

### 1.2 向量正交与子空间正交

- **向量正交**：两个向量 $x, y$ 正交的定义是其内积为零，即 $x^Ty = 0$。根据勾股定理，此时满足 $||x||^2 + ||y||^2 = ||x+y||^2$。
- **子空间正交**：如果子空间 $V$ 中的**每一个**向量都与子空间 $W$ 中的**每一个**向量正交，则称子空间 $V$ 与 $W$ 相互正交。

### 1.3 核心定理：四大基本子空间的正交性 (The Fundamental Theorem of Linear Algebra)

矩阵 $A$ 的四大基本子空间之间存在着完美的正交关系：

1. **零空间垂直于行空间**：$N(A) \perp C(A^T)$
   - **推导**：零空间的定义是 $Ax = 0$。展开矩阵乘法，这就意味着矩阵 $A$ 的每一行（Row 1, Row 2...）与向量 $x$ 的内积都为 $0$。因此 $x$ 垂直于 $A$ 的所有行向量，自然也垂直于由行向量张成的行空间。
2. **左零空间垂直于列空间**：$N(A^T) \perp C(A)$
   - **推导**：左零空间的定义是 $A^Ty = 0$。同理，意味着 $y$ 与 $A$ 的每一列内积为 $0$，故垂直于列空间。

**空间分解（非常关键）**：由于 $N(A) \perp C(A^T)$，任何一个输入向量 $x$ 都可以被唯一地拆分为**行空间上的分量** $x_r$ 与**零空间上的分量** $x_n$：

$$x = x_r + x_n$$

当用 $A$ 对 $x$ 进行线性变换时：$Ax = A(x_r + x_n) = Ax_r + Ax_n = Ax_r + 0 = Ax_r$。（**这是后续理解“伪逆”为什么只能恢复行空间部分的核心所在**）。

## 2. 投影到一维子空间 (Projection onto 1-D Subspaces)

### 2.1 投影公式推导 (向量视角)

目标：将向量 $b$ 投影到由向量 $a$ 张成的直线上。

1. 设投影得到的向量为 $p$。因为 $p$ 在 $a$ 所属的直线上，故 $p$ 必然是 $a$ 的一个标量倍数，设为 $p = \hat{x}a$。

2. 投影产生的误差向量定义为 $e = b - p = b - \hat{x}a$。

3. **核心几何性质**：误差向量 $e$ 必须垂直于投影方向 $a$。

   $$a^Te = 0 \implies a^T(b - \hat{x}a) = 0$$

   $$a^Tb - \hat{x}a^Ta = 0$$

   $$\hat{x} = \frac{a^Tb}{a^Ta}$$

4. 由此得到**投影向量** $p$ 的公式：

   $$p = a\hat{x} = a\frac{a^Tb}{a^Ta}$$

### 2.2 投影矩阵 $P$ (矩阵视角)

在线性代数中，我们希望把“投影”这个操作看作是一个**线性映射**，即存在一个矩阵 $P$，使得输入 $b$ 变成 $p$（即 $p = Pb$）。 对公式变形，因为 $\frac{a^Tb}{a^Ta}$ 这个整体是一个标量，可以重新排列括号（或者利用结合律）：

$$p = a \frac{a^Tb}{a^Ta} = \frac{a (a^Tb)}{a^Ta} = \frac{(a a^T) b}{a^Ta}$$

提取出**一维投影矩阵** $P$：

$$P = \frac{aa^T}{a^Ta}$$

**投影矩阵** $P$ **的性质**：

1. **对称性 (Symmetric)**: $P^T = \left(\frac{aa^T}{a^Ta}\right)^T = \frac{(aa^T)^T}{a^Ta} = \frac{aa^T}{a^Ta} = P$
2. **幂等性 (Idempotent)**: $P^2 = P$。直观理解：对一个向量做第一次投影，它已经到了这条直线上；再做一次同样的投影，它还是在原地。代数推导：$P^2 = \frac{aa^T}{a^Ta} \frac{aa^T}{a^Ta} = \frac{a(a^Ta)a^T}{(a^Ta)^2} = \frac{aa^T}{a^Ta} = P$。
3. **秩为 1**: 若 $a \neq 0$，则 $P$ 的列空间只有一维（就是 $a$ 所在的方向），即 $\text{rank}(P) = 1$。

## 3. 最小二乘法 (Least Squares Approximations)

### 3.1 从无解到近似解 ($Ax=b$ 的困境)

在实际问题中（尤其是数据拟合），方程的个数往往远大于未知数的个数，矩阵 $A$ 成为一个又瘦又高的矩阵，此时 $b$ 几乎不可能恰好落在 $A$ 的列空间 $C(A)$ 内，方程 $Ax=b$ 无解。 **最小二乘法的核心思想**：既然 $b$ 不在 $C(A)$ 中，我们就找一个在 $C(A)$ 中距离 $b$ 最近的向量 $p$（即 $b$ 在 $C(A)$ 上的投影），转而求解 $A\hat{x} = p$。

### 3.2 高维投影与正规方程推导 (Normal Equation)

1. 我们寻找最优解 $\hat{x}$，使得 $A\hat{x} = p$。

2. 误差向量 $e = b - A\hat{x}$。

3. **关键几何性质**：这个误差向量 $e$ 必须垂直于整个列空间 $C(A)$。

4. 根据四大基本子空间定律，垂直于列空间意味着**误差向量** $e$ **位于左零空间** $N(A^T)$ **中**！ 因此，$A^T e = 0$。

5. 将 $e$ 代入：

   $$A^T(b - A\hat{x}) = 0$$

   $$A^Tb - A^TA\hat{x} = 0$$

   得到大名鼎鼎的**正规方程 (Normal Equation)**：

   $$A^TA\hat{x} = A^Tb$$

6. 假设 $A$ 的各列线性无关，则 $A^TA$ 是一个对称正定且可逆的矩阵。解出最优解：

   $$\hat{x} = (A^TA)^{-1}A^Tb$$

### 3.3 高维投影矩阵 $P$

既然 $p = A\hat{x}$，我们将求得的 $\hat{x}$ 代入，可以得到将任意向量 $b$ 投影到矩阵 $A$ 列空间的高维投影矩阵 $P$：

$$p = A(A^TA)^{-1}A^T b$$

所以高维投影矩阵为：

$$P = A(A^TA)^{-1}A^T$$

*(注：如果* $A$ *是可逆方阵，说明它的列空间就是整个空间，*$P = A(A^{-1}(A^T)^{-1})A^T = I$*，投影矩阵就是单位阵，因为向量* $b$ *本来就在空间内。)*

**补充：左零空间投影矩阵** 既然 $b = p + e$，其中 $p \in C(A)$，$e \in N(A^T)$。 $e = b - p = b - Pb = (I - P)b$。 因此，将向量投影到左零空间的投影矩阵为 $I - P$。

### 3.4 【课件例题完整过程】最小二乘直线拟合

**题目**：寻找一条最佳直线 $b = C + Dt$，拟合以下三个数据点：$(t=1, b=1), (t=2, b=2), (t=3, b=2)$。 **1. 构建方程组** $Ax = b$：

$$\begin{matrix} C + 1D = 1 \\ C + 2D = 2 \\ C + 3D = 2 \end{matrix} \implies \begin{bmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{bmatrix} \begin{bmatrix} C \\ D \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}$$

显然这是一个无解的方程组（因为不在一条直线上）。$A = \begin{bmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{bmatrix}, b = \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix}$。

**2. 求解正规方程** $A^TA\hat{x} = A^Tb$： 计算 $A^TA$：

$$A^TA = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 6 & 14 \end{bmatrix}$$

计算 $A^Tb$：

$$A^Tb = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 5 \\ 11 \end{bmatrix}$$

代入正规方程：

$$\begin{bmatrix} 3 & 6 \\ 6 & 14 \end{bmatrix} \begin{bmatrix} C \\ D \end{bmatrix} = \begin{bmatrix} 5 \\ 11 \end{bmatrix}$$

利用二阶矩阵求逆公式：$\text{det}(A^TA) = 3 \times 14 - 6 \times 6 = 42 - 36 = 6$。

$$\begin{bmatrix} C \\ D \end{bmatrix} = \frac{1}{6} \begin{bmatrix} 14 & -6 \\ -6 & 3 \end{bmatrix} \begin{bmatrix} 5 \\ 11 \end{bmatrix} = \frac{1}{6} \begin{bmatrix} 14(5) - 6(11) \\ -6(5) + 3(11) \end{bmatrix} = \frac{1}{6} \begin{bmatrix} 70 - 66 \\ -30 + 33 \end{bmatrix} = \frac{1}{6} \begin{bmatrix} 4 \\ 3 \end{bmatrix} = \begin{bmatrix} 2/3 \\ 1/2 \end{bmatrix}$$

**答案**：最佳拟合直线为 $b = \frac{2}{3} + \frac{1}{2}t$。

### 3.5 【解答手写笔记疑惑】伪逆 $A^+$ (Pseudoinverse) 的几何与代数推导

**你在笔记中的困惑**：“我搞不明白 $A^+$ 是如何推导出来的，有一些矩阵 $x$ 在经过 $A$ 变换后，因为奇异无法逆变换。Pseudoinverse 是为了将能变换的部分进行恢复，而不是恢复整个 $x$。”

**你的直觉完全正确，以下是严谨的解答：**

1. **为什么没有真正的逆？** 根据前面的四大基本子空间：对于任意向量 $x$，都可以拆分成行空间部分 $x_r$ 和零空间部分 $x_n$（$x = x_r + x_n$）。矩阵 $A$ 乘以 $x$ 时：$Ax = Ax_r + Ax_n = Ax_r + 0$。因为零空间部分的信息在变换中被抹零了（降维了），所以从结果 $Ax$ 我们**绝对不可能**找回 $x_n$。
2. **伪逆的目标是什么？** 伪逆的作用就是在信息丢失的情况下“尽最大努力”，只要给我 $b = Ax$，我就帮你把没有被抹零的行空间部分 $x_r$ 给还原出来。换句话说，**伪逆** $A^+$ **是一个从列空间** $C(A)$ **完美映射回行空间** $C(A^T)$ **的矩阵**。
3. **推导（以列满秩矩阵为例 - 左逆）**： 假设 $A$ 是一个 $m \times n$ (且 $m > n$) 的瘦长矩阵，并且列线性无关。 此时零空间 $N(A)$ 只有零向量，没有信息被抹零。但是 $Ax=b$ 会有误差（因为 $b$ 不一定在列空间）。 我们需要把目标投影到列空间，再进行恢复。根据之前的最小二乘法结果：$\hat{x} = (A^TA)^{-1}A^Tb$。 这里的矩阵 $(A^TA)^{-1}A^T$ 就被称为 **左伪逆 (Left Inverse)**。你会发现把它左乘 $A$： $((A^TA)^{-1}A^T) A = (A^TA)^{-1}(A^TA) = I$。
4. **推导（以行满秩矩阵为例 - 右逆，这也是你笔记中对应的类型）**： 假设 $A$ 是一个 $m \times n$ (且 $m < n$) 的矮胖矩阵，并且行线性无关。此时存在巨大的零空间（无穷多解）。 此时要寻找“最小范数解”（即完全不包含零空间成分，只有行空间成分的解 $x_r$）。我们假设 $x_r = A^T y$ （因为它是行空间的向量，所以一定能被 $A^T$ 的列表示出来）。 代入 $Ax_r = b \implies A(A^Ty) = b \implies (AA^T)y = b \implies y = (AA^T)^{-1}b$。 那么 $x_r = A^T(AA^T)^{-1}b$。 这里的提取出来的矩阵 $A^T(AA^T)^{-1}$ 就被称为 **右伪逆 (Right Inverse)**。把它右乘 $A$： $A (A^T(AA^T)^{-1}) = (AA^T)(AA^T)^{-1} = I$。

**总结**：Moore-Penrose 广义伪逆 $A^+$，就是利用正规方程里的 $(A^TA)^{-1}A^T$（左逆） 或 $A^T(AA^T)^{-1}$（右逆），实现对非满秩矩阵的部分还原。

## 4. 标准正交基 (Orthonormal Bases)

### 4.1 定义与性质

一组向量 $q_1, q_2, \dots, q_n$ 如果满足：

1. **相互垂直**：$q_i^T q_j = 0$ (对于 $i \neq j$)

2. **单位长度**：$q_i^T q_i = 1$ (或者 $||q_i|| = 1$) 则称其为标准正交基。 把这些向量作为列向量拼成一个矩阵 $Q = [q_1 \ q_2 \dots q_n]$，那么这会产生一个极其完美的性质：

   $$Q^T Q = I$$

   *(证明：展开* $Q^TQ$ *的矩阵乘法，对角线上的元素都是* $q_i^T q_i = 1$*，非对角线上的元素都是* $q_i^T q_j = 0$*，正好构成单位矩阵。)*

如果 $Q$ 是一个方阵，那么根据 $Q^TQ=I$ 可知：**正交方阵的转置等于它的逆 (**$Q^{-1} = Q^T$**)**。 **重要几何意义**：正交矩阵 $Q$ 作用于向量，**只发生旋转和翻转，绝对不会改变向量的长度和夹角**（即 $||Qx|| = ||x||$）。

### 4.2 当正规方程遇上正交矩阵

如果最小二乘法中的投影矩阵的列构成正交基 $Q$，那么原来的正规方程 $A^TA\hat{x} = A^Tb$ 就会变得无比简单：

$$Q^TQ\hat{x} = Q^Tb \implies I\hat{x} = Q^Tb \implies \hat{x} = Q^Tb$$

不需要求任何矩阵的逆！投影矩阵也会简化为：$P = Q(Q^TQ)^{-1}Q^T = QQ^T$。

## 5. 格拉姆-施密特正交化 (Gram-Schmidt Process) 与 QR 分解

### 5.1 正交化思想

给定一组不相关的基向量 $a, b, c$，我们如何将它们变成一组标准正交基 $q_1, q_2, q_3$？ 核心思想是**不断扣除在新基底上的投影（也就是保留“误差”部分，因为误差与投影方向正交）**。

1. **第一步**：直接保留 $a$ 的方向，定义为 $A = a$。然后归一化得到 $q_1 = \frac{A}{||A||}$。

2. **第二步**：用 $b$ 减去 $b$ 在 $A$ 上的投影。剩下的部分就是与 $A$ 正交的部分 $B$。

   $$B = b - \frac{A^Tb}{A^TA}A = b - (q_1^Tb)q_1$$

   归一化得到 $q_2 = \frac{B}{||B||}$。

3. **第三步**：用 $c$ 减去 $c$ 在 $A$ 和 $B$ 上的投影。

   $$C = c - \frac{A^Tc}{A^TA}A - \frac{B^Tc}{B^TB}B = c - (q_1^Tc)q_1 - (q_2^Tc)q_2$$

   归一化得到 $q_3 = \frac{C}{||C||}$。

### 5.2 【例题】完整的 Gram-Schmidt 过程与 $A=QR$ 分解

**题目**：将以下三个向量进行正交化：$a = \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix}, b = \begin{bmatrix} 2 \\ 0 \\ -2 \end{bmatrix}, c = \begin{bmatrix} 3 \\ -3 \\ 3 \end{bmatrix}$。并求出 $A=QR$ 分解。

**Step 1: 处理** $a$

$$A = \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix}$$

模长 $||A|| = \sqrt{1^2 + (-1)^2 + 0} = \sqrt{2}$。

$$q_1 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix}$$

**Step 2: 处理** $b$ 减去在 $A$ 上的投影：

$$B = b - \frac{A^Tb}{A^TA}A = \begin{bmatrix} 2 \\ 0 \\ -2 \end{bmatrix} - \frac{(1)(2) + (-1)(0) + (0)(-2)}{2} \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ -2 \end{bmatrix} - \frac{2}{2} \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ -2 \end{bmatrix}$$

模长 $||B|| = \sqrt{1^2 + 1^2 + (-2)^2} = \sqrt{6}$。

$$q_2 = \frac{1}{\sqrt{6}} \begin{bmatrix} 1 \\ 1 \\ -2 \end{bmatrix}$$

**Step 3: 处理** $c$ 减去在 $A$ 和 $B$ 上的投影：

$$C = c - \frac{A^Tc}{A^TA}A - \frac{B^Tc}{B^TB}B = \begin{bmatrix} 3 \\ -3 \\ 3 \end{bmatrix} - \frac{3+3+0}{2} \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} - \frac{3-3-6}{6} \begin{bmatrix} 1 \\ 1 \\ -2 \end{bmatrix}$$

$$C = \begin{bmatrix} 3 \\ -3 \\ 3 \end{bmatrix} - 3 \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} - (-1) \begin{bmatrix} 1 \\ 1 \\ -2 \end{bmatrix} = \begin{bmatrix} 3 \\ -3 \\ 3 \end{bmatrix} - \begin{bmatrix} 3 \\ -3 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ -2 \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$$

模长 $||C|| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}$。

$$q_3 = \frac{1}{\sqrt{3}} \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$$

**构建** $Q$ **矩阵与** $R$ **矩阵**

$$Q = \begin{bmatrix} q_1 & q_2 & q_3 \end{bmatrix} = \begin{bmatrix} 1/\sqrt{2} & 1/\sqrt{6} & 1/\sqrt{3} \\ -1/\sqrt{2} & 1/\sqrt{6} & 1/\sqrt{3} \\ 0 & -2/\sqrt{6} & 1/\sqrt{3} \end{bmatrix}$$

$R$ 矩阵是上三角矩阵，反映了原来向量 $a, b, c$ 是如何由 $q_1, q_2, q_3$ 线性组合而成的。$R = Q^T A$ (因为 $Q^TQ=I, A=QR \implies Q^TA = Q^TQR = R$)。利用正交化过程中计算出的内积（投影系数）：

$$R = \begin{bmatrix} q_1^Ta & q_1^Tb & q_1^Tc \\ 0 & q_2^Tb & q_2^Tc \\ 0 & 0 & q_3^Tc \end{bmatrix} = \begin{bmatrix} \sqrt{2} & \sqrt{2} & 3\sqrt{2} \\ 0 & \sqrt{6} & -\sqrt{6} \\ 0 & 0 & \sqrt{3} \end{bmatrix}$$

此时，将矩阵 $A$ 成功分解为正交矩阵 $Q$ 与上三角矩阵 $R$的乘积，这在计算机数值求解最小二乘法中极大提高了运算速度和数值稳定性（不需要计算逆矩阵，只需利用 $R$ 矩阵进行倒推替换即可解出未知数）。

## 6. 函数空间与傅里叶级数初步 (Function Spaces, from PDF P60-62)

作为应用，课件中将正交向量的概念扩展到了无限维度的函数空间（Hilbert Space）。

- **函数内积的定义**：在区间 $[0, 2\pi]$ 上，两个函数 $f(x)$ 和 $g(x)$ 的内积被定义为其乘积的积分：

  $$\langle f, g \rangle = \int_0^{2\pi} f(x)g(x) dx$$

- **函数的正交**：如果 $\int f(x)g(x) dx = 0$，则称这两个函数正交。

- **傅里叶级数的本质**：我们熟悉的傅里叶级数之所以美妙，正是因为它的基底 $\{1, \cos x, \sin x, \cos 2x, \sin 2x, \dots\}$ 是一组**正交基**（任意两个不同的函数在 $0$ 到 $2\pi$ 上的乘积积分为 $0$）。 因此，求傅里叶级数的系数，**本质上就是求函数** $f(x)$ **在各个基底向量（比如** $\sin x$**）上的投影**： 比如，将 $f(x)$ 投影到 $\sin x$ 的方向上（对比向量投影公式 $\hat{x} = \frac{a^Tb}{a^Ta}$）：

  $$b_1 = \frac{\langle f, \sin x \rangle}{\langle \sin x, \sin x \rangle} = \frac{\int_0^{2\pi} f(x)\sin x dx}{\int_0^{2\pi} \sin x \sin x dx}$$

- **勒让德多项式 (Legendre Polynomials)**：普通多项式基底 $\{1, x, x^2, x^3\dots\}$ 不是正交的，这会导致求解投影变得极其复杂。为了让多项式基底变得正交，我们正是对 $\{1, x, x^2, x^3\dots\}$ 运行了 **Gram-Schmidt 正交化过程**，从而得到了著名的勒让德正交多项式基底。


---
title: "线性代数-CH5-特征向量和特征值"
slug: "线性代数-CH5-特征向量和特征值"
description: "线性代数-CH5-特征向量和特征值，待补充摘要。"
pubDate: 2026-06-05
updatedDate: 2026-06-05
tags:
  - 线性代数
  - 修考
category: 修考
draft: true
---

https://drive.google.com/file/d/13AcGBMGjRCq4cmn9RXKdv4-zLZAsxIaP/view

# 线性代数学习笔记：第五章 特征值与特征向量

**(Eigenvalues and Eigenvectors)**

> **备考核心精神**：本章的终极目标是「简化线性变换」。将原本高维且复杂的矩阵乘法变换 $Ax$，转化为简单的标量（常数）乘法 $\lambda x$。一旦我们找到了空间的特殊基底（特征向量），就可以极大地降低运算复杂度，并深入洞察动态系统的长期演化行为。

## 0. 基础概念与引入 (Introduction)

### 核心定义与逻辑推导

- **基本方程式**：$Ax = \lambda x$
  - $A$：$n \times n$ 方阵（代表一种线性变换）。
  - $\lambda$ (Lambda)：**特征值 (Eigenvalue)**，代表在特定方向上变换的缩放比例（纯量）。
  - $x$：**特征向量 (Eigenvector)**，代表经过矩阵 $A$ 变换后，**方向保持不变**的向量。
- **特征方程式 (Characteristic Equation)**：
  - 推导逻辑：将 $Ax = \lambda x$ 移项，得到 $(A - \lambda I)x = 0$。
  - 因为特征向量 $x$ 不能为零向量（$x \neq 0$），这意味着矩阵 $(A - \lambda I)$ 必须有一个非平凡的零空间 (Nullspace)。
  - 矩阵存在非零的零空间的充要条件是它是**奇异矩阵（不可逆）**，因此其行列式必须为零。
  - **结论公式**：$\det(A - \lambda I) = 0$

### 📝 【例题：求解特征值与特征向量】(对应课件 Page 7)

**题目**：给定矩阵 $A = \begin{bmatrix} 4 & -5 \\ 2 & -3 \end{bmatrix}$，求其特征值与对应的特征向量。 **求解过程**：

1. **写出特征方程式**：$\det(A - \lambda I) = 0$

   $$\det \begin{bmatrix} 4-\lambda & -5 \\ 2 & -3-\lambda \end{bmatrix} = (4-\lambda)(-3-\lambda) - (-5)(2) = 0$$

   $$\lambda^2 - \lambda - 12 + 10 = \lambda^2 - \lambda - 2 = 0$$

   因式分解得：$(\lambda - 2)(\lambda + 1) = 0$。 **答案**：特征值为 $\lambda_1 = 2$ 和 $\lambda_2 = -1$。

2. **求解对应的特征向量** $(A - \lambda I)x = 0$：

   - 当 $\lambda_1 = 2$ 时： $A - 2I = \begin{bmatrix} 2 & -5 \\ 2 & -5 \end{bmatrix}$，解 $\begin{bmatrix} 2 & -5 \\ 2 & -5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$，得特征向量 $v_1 = \begin{bmatrix} 5 \\ 2 \end{bmatrix}$。
   - 当 $\lambda_2 = -1$ 时： $A + I = \begin{bmatrix} 5 & -5 \\ 2 & -2 \end{bmatrix}$，解 $\begin{bmatrix} 5 & -5 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$，得特征向量 $v_2 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$。

### 必考性质与快速检验 🌟

1. **迹数定理 (Trace)**：特征值之和 = 矩阵主对角线元素之和。$\sum_{i=1}^n \lambda_i = a_{11} + a_{22} + \dots + a_{nn}$
2. **行列式定理**：特征值之积 = 矩阵的行列式。$\prod_{i=1}^n \lambda_i = \det(A)$ *(在上面的例题中验证：*$2 + (-1) = 1 = 4 + (-3)$*，且* $2 \times (-1) = -2 = \det(A)$*)*
3. **奇异矩阵 (Singular Matrix) 的新视角**：
   - 矩阵 $A$ 不可逆 $\iff \det(A) = 0 \iff$ $A$ **至少有一个特征值为 0**。
4. **衍生矩阵的特征值**：
   - $A^{-1}$：特征值为 $1/\lambda$，特征向量**不变**。
   - $A^T$：特征值**不变**，特征向量**会改变**。

## Layer 2: 矩阵对角化 (Diagonalization)

### 对角化的逻辑与推导

- **目标**：寻找一个基底转换，使得在这个新基底下的变换矩阵变成最简单的对角矩阵。

- **推导**：假设 $A$ 有 $n$ 个线性无关的特征向量 $x_1, \dots, x_n$。我们将它们拼成一个矩阵 $X = [x_1, x_2, \dots, x_n]$。

  $$AX = A[x_1, x_2, \dots, x_n] = [\lambda_1 x_1, \lambda_2 x_2, \dots, \lambda_n x_n] = X \begin{bmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{bmatrix} = X\Lambda$$

- **结论公式**：由 $AX = X\Lambda$，左右同乘 $X^{-1}$，得到 $A = X\Lambda X^{-1}$。

- **充要条件**：矩阵 $A$ 必须有 $n$ **个「线性无关」的特征向量**（否则 $X$ 不可逆）。如果所有特征值互不相同，则必然可以对角化。缺乏足够独立特征向量的矩阵称为**瑕疵矩阵 (Defective Matrix)**，例如 $\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$。

### 对角化的三大应用 🌟 (计算大题常客)

#### 1. 矩阵的高次幂 (Powers)

- **原理**：$A^k = (X\Lambda X^{-1})(X\Lambda X^{-1})\dots(X\Lambda X^{-1}) = X\Lambda^k X^{-1}$。
- 中间的 $X^{-1}X$ 全部抵消化为单位阵 $I$，只需将对角阵的特征值取 $k$ 次方即可。

#### 2. 差分方程式 (Difference Equation) / 离散系统演化

- **模型**：$u_{k+1} = A u_k$。通解为 $u_k = A^k u_0 = c_1\lambda_1^k x_1 + \dots + c_n\lambda_n^k x_n$。

- **📝 【例题：斐波那契数列的极限】** (对应课件 Page 26-29)

  - 规则：$F_{k+2} = F_{k+1} + F_k$。将其转化为矩阵形式：

    $$\begin{bmatrix} F_{k+2} \\ F_{k+1} \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} F_{k+1} \\ F_k \end{bmatrix} \implies u_{k+1} = A u_k$$

  - 求解矩阵 $A = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$ 的特征值：$\lambda^2 - \lambda - 1 = 0 \implies \lambda_1 = \frac{1+\sqrt{5}}{2}, \lambda_2 = \frac{1-\sqrt{5}}{2}$。

  - **结论**：因为 $|\lambda_1| > 1$ 且 $|\lambda_2| < 1$，当 $k \to \infty$ 时，$\lambda_2^k \to 0$。数列的相邻项之比 $\frac{F_{k+1}}{F_k}$ 将收敛于最大的特征值 $\lambda_1 \approx 1.618$（黄金分割率）。

#### 3. 微分方程式 (Differential Equation) / 连续系统演化

- **模型**：$\frac{du}{dt} = Au$。
- **逻辑推导**：基于泰勒展开式 $e^{At} = I + At + \frac{(At)^2}{2!} + \dots$ 代入 $A = X\Lambda X^{-1}$，可以提出前后项变为：$e^{At} = X (I + \Lambda t + \frac{(\Lambda t)^2}{2!} + \dots) X^{-1} = X e^{\Lambda t} X^{-1}$。
- **通解**：$u(t) = e^{At}u_0 = c_1 e^{\lambda_1 t}x_1 + \dots + c_n e^{\lambda_n t}x_n$。

### 系统的长期稳定性判断

| 状态 (Stability)         | 离散系统 $u_{k+1} = Au_k$ 行为由 $\lambda_i^k$ 决定 | 连续系统 $\frac{du}{dt} = Au$ 行为由 $e^{\lambda_i t}$ 决定 |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------------------- |
| **稳定 (收敛至0)**       | 所有 $                                              | \lambda_i                                                   |
| **中性稳定 (震荡/不变)** | 存在 $                                              | \lambda_i                                                   |
| **不稳定 (发散)**        | 至少一个 $                                          | \lambda_i                                                   |

## 通往谱定理之路 (Road to Spectral Theorem)

为了处理更一般的对称性，我们需要将实数域扩展到复数域 $C^n$。

### 相似矩阵 (Similar Matrices)

- **定义**：存在可逆矩阵 $M$，使得 $A = M B M^{-1}$。
- **核心意义**：$A$ 和 $B$ 代表同一个线性变换在不同基底下的表达。相似矩阵**必定拥有完全相同的特征值**。

### 包含复数的特殊矩阵 🌟

- **Hermitian 转置 (**$A^H$**)**：先取转置，再取共轭复数（$\overline{A}^T$）。
- **埃尔米特矩阵 (Hermitian Matrix)**：$A = A^H$。实对称矩阵是它的特例。
  - **极重要性质**：特征值**必定为实数**；对应于不同特征值的特征向量**必定相互正交** ($u^H v = 0$)。
- **反埃尔米特矩阵 (Skew-Hermitian)**：$K = -K^H$。特征值必定为**纯虚数**。
- **酉矩阵 (Unitary Matrix)**：$U^H U = I$（实正交矩阵的推广）。特征值的**绝对值必定为 1** ($|\lambda| = 1$)。

## Layer 3: 谱定理 (Spectral Theorem)

这是线性代数中最核心的定理之一，揭示了对称矩阵的完美结构。

### 定理陈述

- **实对称矩阵定理**：任何实对称矩阵 $A = A^T$，必定可被**正交矩阵 (Orthogonal Matrix,** $Q$**)** 对角化。
  - **公式**：$A = Q\Lambda Q^T$ （由于正交矩阵 $Q^{-1} = Q^T$）。
  - 意味着它不仅有实数特征值，而且必定能找到 $n$ 个相互垂直（正交）的特征向量构成整个空间的标准正交基。
- **Hermitian 矩阵定理**：必定可被酉矩阵对角化 $A = U\Lambda U^H$。

### 谱分解 (Spectral Decomposition)

我们可以将矩阵 $A$ 拆解为多个一秩矩阵的线性组合：

$$A = \lambda_1 (x_1 x_1^T) + \lambda_2 (x_2 x_2^T) + \dots + \lambda_n (x_n x_n^T) = \sum_{i=1}^n \lambda_i P_i$$

*逻辑说明*：其中 $P_i = x_i x_1^T$ 是投影矩阵，代表向特征向量 $x_i$ 方向的投影。这说明**对称矩阵的作用，就是先将向量投影到各个正交的特征方向上，然后按特征值的比例进行拉伸，最后再相加**。

## Layer 1: 乔丹标准型 (Jordan Form)

当我们遇到**瑕疵矩阵**（即缺乏足够的独立特征向量，无法对角化）时，我们能将其化简的最好形式就是乔丹标准型。

- **目标**：寻找可逆矩阵 $M$，使 $J = M^{-1}AM$ 尽可能接近对角阵。

- **乔丹块 (Jordan Block** $J_i$**)** 的结构特征：

  - 主对角线上是特征值 $\lambda_i$。

  - 主对角线的「正上方」是一排 1，其余全为 0。

  - 每一个乔丹块只对应**一个独立的特征向量**。

    $$J_m = \begin{bmatrix} \lambda_i & 1 & 0 \\ 0 & \lambda_i & 1 \\ 0 & 0 & \lambda_i \end{bmatrix}$$

- **广义特征向量 (Generalized Eigenvector)**：因为特征向量不够，我们需要解方程组 $(A - \lambda I)v_{j+1} = v_j$ 来凑齐空间的基底向量。

## Layer 4: 正定矩阵 (Positive Definite Matrices) 🌟🌟🌟 (必考大题)

正定矩阵是对称矩阵中性质最优秀的一类，在机器学习（如协方差矩阵）、物理系统能量、优化理论中无处不在。

### 二次型 (Quadratic Function) 与几何意义

- **定义式**：$f(x) = x^T A x$

- **📝 【例题：二次型多项式与矩阵转换】** (对应课件 Page 66) 对于矩阵 $A = \begin{bmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{bmatrix}$，其二次型展开为：

  $$f(x) = 2x_1^2 - 2x_1 x_2 + 2x_2^2 - 2x_2 x_3 + 2x_3^2$$

  （注意对角线元素对应平方项，非对角线元素 $a_{ij}$ 的两倍对应交叉项 $x_i x_j$）。

### 判断正定矩阵的 5 个等价测试 (Tests for Positive Definite)

只要一个对称矩阵 $A$ 满足以下**任意一项**，它就是正定矩阵（这 5 个条件相互等价）：

1. **能量测试（定义）**：对于所有非零向量 $x$，二次型 $x^T A x > 0$。
2. **特征值测试**：所有特征值 $\lambda_i > 0$。
3. **行列式测试**：所有左上角的主子式行列式 (Leading determinants) $D_k > 0$。
4. **主元测试**：高斯消元法过程中的所有主元 (Pivots) $d_i > 0$。
5. **分解测试**：存在列线性无关的矩阵 $R$，使得 $A = R^T R$。

### 定性分类与多维曲面几何

| 类别                                | 代数条件                              | 3D 几何形状 (函数图像)                           |
| ----------------------------------- | ------------------------------------- | ------------------------------------------------ |
| **正定 (Positive Definite)**        | $x^T A x > 0$, 所有 $\lambda > 0$     | 开口向上的碗 (Bowl) / 存在全局极小值             |
| **负定 (Negative Definite)**        | $x^T A x < 0$, 所有 $\lambda < 0$     | 开口向下的碗 (倒钟) / 存在全局极大值             |
| **半正定 (Positive Semi-Definite)** | $x^T A x \ge 0$, 所有 $\lambda \ge 0$ | 水槽形状 (Trough) / 山谷底线（存在退化的极值点） |
| **不定 (Indefinite)**               | $\lambda$ 有正有负                    | 马鞍面 (Saddle point)                            |

### 📝 【例题：椭球、特征值与几何形状】 (对应课件 Page 71-73)

- 当我们将等式设为常数 $x^T A x = 1$ 时（$A$ 为正定对称矩阵），其图形在几何上是一个**椭球 (Ellipsoid)**。
- **题目**：已知矩阵 $A = \begin{bmatrix} 5 & 4 \\ 4 & 5 \end{bmatrix}$，方程 $5x_1^2 + 8x_1 x_2 + 5x_2^2 = 1$ 代表什么图形？
- **求解分析**：
  1. 求 $A$ 的特征值：$\det\begin{bmatrix} 5-\lambda & 4 \\ 4 & 5-\lambda \end{bmatrix} = (5-\lambda)^2 - 16 = 0 \implies \lambda = 9, 1$。
  2. 求特征向量：$\lambda=9$ 时 $v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$；$\lambda=1$ 时 $v_2 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$。
- **几何意义结论**：
  - 这是一个**椭圆**。
  - **主轴的方向**：由特征向量决定（即与 $x$ 轴夹角 45 度的方向）。
  - **主轴的长度 (半轴长)**：等于 $\frac{1}{\sqrt{\lambda_i}}$。
    - $\lambda=9$ 方向的半轴长为 $1/\sqrt{9} = 1/3$（短轴）。
    - $\lambda=1$ 方向的半轴长为 $1/\sqrt{1} = 1$（长轴）。
  - **核心逻辑**：特征值越大，二次型增长越快，对应到等高线 $x^T A x = 1$ 上，该方向上的轴就越短。

## 📝 观念自测 (ConcepTests - 考前扫盲)

1. **为什么我们急于为矩阵寻找一组完整的“线性独立特征向量”？**
   - **解答**：一旦我们拥有 $n$ 个独立的特征向量，就可以将它们作为空间的一组新“基底”。在这个基底的视角下，原本错综复杂的矩阵变换（互相耦合）就会被“解耦”成对角矩阵形式（$A = X\Lambda X^{-1}$）。这使得计算诸如系统的高次演化 $A^k$ 或指数衰减 $e^{At}$ 变得轻而易举，从而完美揭示动态系统的长期行为。
2. **当你发现一个矩阵是对称矩阵时，你可以立刻断定哪些事实？**
   - **解答**：(1) 它一定有实数的特征值；(2) 它的特征向量必定相互正交；(3) 它绝对不存在“无法对角化”的瑕疵情况，必然满足谱定理 $A = Q\Lambda Q^T$。
   - *(易错点：对称矩阵不一定可逆，如果特征值有 0 仍为奇异矩阵；且对称矩阵的特征值可以有重复。)*
3. **一个正定矩阵具有什么压倒性的优势？**
   - **解答**：不仅拥有对称矩阵所有的完美属性，还能保证空间中的能量（二次型 $x^T A x$）永远大于零。它所有的特征值、所有的主元、所有的左上角子行列式统统大于零，且图形永远呈现向下凸的碗状（有唯一的全局极小值），必然是满秩可逆矩阵。

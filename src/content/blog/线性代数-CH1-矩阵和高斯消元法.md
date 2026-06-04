---
title: "线性代数-CH1-矩阵和高斯消元法"
slug: "线性代数-CH1-矩阵和高斯消元法"
description: "线性代数-CH1-矩阵和高斯消元法，待补充摘要。"
pubDate: 2026-06-02
updatedDate: 2026-06-02
tags:
  - 线性代数
  - 修考
category: 修考
draft: false
---



- https://drive.google.com/drive/folders/1UR_d8kp6l5ho-59pJIpEWtMQc-mGJBC2

- https://www.youtube.com/watch?v=279bZ60wV2E&list=PL68D2uCy1WTNz4hadNnAXaFmb9_0fvDzg&index=2
- https://gemini.google.com/app/c69ed84a27cc0914



![image-20260602200402347](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-CH1-%E7%9F%A9%E9%98%B5%E5%92%8C%E9%AB%98%E6%96%AF%E6%B6%88%E5%85%83%E6%B3%95.assets/image-20260602200402347.png)

# 《线性代数：矩阵与高斯消元法》学习笔记

## 1. 行图像与列图像 (Row Picture and Column Picture)

### 1.1 线性代数的本质

线性代数的核心任务在于求解包含 $n$ 个未知数、共 $n$ 个方程的线性方程组：

$$A\mathbf{x} = \mathbf{b}$$

理解这一方程组通常有两种核心视角：

1. **行图像 (Row Picture)**：寻找超平面的交点。
2. **列图像 (Column Picture)**：寻找列向量的线性组合。

### 1.2 经典对比：以 $2 \times 2$ 方程组为例

考虑如下线性方程组：

$$\begin{aligned} 2x_1 - x_2 &= 0 \\ -x_1 + 2x_2 &= 3 \end{aligned}$$

其对应的矩阵形式为：

$$\begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \end{bmatrix}$$

#### 1) 行图像视角

我们将方程组看作二维平面上的两条直线：

- 直线 $L_1: 2x_1 - x_2 = 0$（通过原点 $\begin{bmatrix}0\\0\end{bmatrix}$ 与 $\begin{bmatrix}1\\2\end{bmatrix}$）
- 直线 $L_2: -x_1 + 2x_2 = 3$（通过 $\begin{bmatrix}-3\\0\end{bmatrix}$ 与 $\begin{bmatrix}0\\1.5\end{bmatrix}$）

求解方程组，本质上是在平面中寻找这两条直线的交点。通过联立求解，可得唯一交点为 $\begin{bmatrix}x_1\\x_2\end{bmatrix} = \begin{bmatrix}1\\2\end{bmatrix}$。

#### 2) 列图像视角

我们将矩阵拆分为列向量，将原方程重新表述为列向量的**线性组合 (Linear Combination)**：

$$x_1 \begin{bmatrix} 2 \\ -1 \end{bmatrix} + x_2 \begin{bmatrix} -1 \\ 2 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \end{bmatrix}$$

- **物理意义**：我们在二维空间中，将第一个列向量 $\mathbf{a}_1 = \begin{bmatrix}2\\-1\end{bmatrix}$ 伸缩 $x_1$ 倍，将第二个列向量 $\mathbf{a}_2 = \begin{bmatrix}-1\\2\end{bmatrix}$ 伸缩 $x_2$ 倍，通过平行四边形定则进行向量加法，目标是拼凑出右侧的目标向量 $\mathbf{b} = \begin{bmatrix}0\\3\end{bmatrix}$。

- **计算结果**：当 $x_1 = 1, x_2 = 2$ 时：

  $$1 \begin{bmatrix} 2 \\ -1 \end{bmatrix} + 2 \begin{bmatrix} -1 \\ 2 \end{bmatrix} = \begin{bmatrix} 2-2 \\ -1+4 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \end{bmatrix}$$

> 📌 **为什么列图像（向量线性组合）比行图像更有优势？**
>
> - 在 $n=3$ 及更高维的空间中，行图像需要我们在高维空间中脑补多个超平面的交集（例如 3D 空间中，每多引入一个方程，就会使解空间降低一个维度：$3\text{D 空间} \rightarrow \text{面} \rightarrow \text{线} \rightarrow \text{点}$）。这在空间几何上极难绘制与直观理解。
> - 而**列图像的判读视角是统一且不随维数升级而复杂的**。无论是 $3\text{D}$ 还是 $n\text{D}$ 空间，列图像永远是“我们在该空间中，寻找 $n$ 个已知向量的线性组合，看其能否合成目标向量 $\mathbf{b}$”。

## 2. 奇异矩阵与线性无关 (Singular Matrix & Linear Independence)

对于线性方程组 $A\mathbf{x} = \mathbf{b}$：我们必须思考，是不是对于任意的右侧向量 $\mathbf{b}$，该方程组都有解？

### 2.1 奇异与非奇异的几何内涵

1. **非奇异情况 (Non-singular)**：
   - **行图像**：所有的平面有且仅有一个交点（无平行、无重合的病态平面）。
   - **列图像**：列向量指向空间中不同的独立方向，通过它们的线性组合能够**铺满 (Span) 整个** $n$ **维空间**。此时对于任何目标向量 $\mathbf{b}$，方程组都有唯一的解。
2. **奇异情况 (Singular)**：
   - **行图像**：存在平面彼此平行，或交于一条线、甚至完全重合，无法形成单一交点。
   - **列图像**：列向量之间存在方向重合或冗余，它们**线性相关**，仅能铺满低维子空间（例如 3D 空间中的 3 个向量共面，仅能铺满一个 2D 平面）。
   - **求解结果**：如果目标向量 $\mathbf{b}$ 恰好落在列向量所张成的低维平面内，则有**无穷多解**；若 $\mathbf{b}$ 落在平面之外，则**无解**。

### 2.2 线性相关与线性无关的精确数学定义

对于 $k$ 个向量 $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k$，考虑其线性组合为零向量的方程：

$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k = \mathbf{0}$$

- **线性无关 (Linear Independence)**： 上式**当且仅当所有系数** $c_1 = c_2 = \dots = c_k = 0$ **时成立**。这意味着没有任何一个向量可以用其他向量的线性组合来表达，每个向量都带来了全新的空间维度信息。此时矩阵的零空间 $N(A)$ 仅包含原点 $\{\mathbf{0}\}$。
- **线性相关 (Linear Dependence)**： 存在一组**不全为零**的系数 $c_1, c_2, \dots, c_k$，使得上式成立。这意味着其中至少有一个向量可以用其余向量的线性组合来表达。此时零空间中存在非零向量 $N(A) \neq \{\mathbf{0}\}$，矩阵奇异。

### 2.3 经典例题解析

#### 【例题 1】判断下列三个向量的线性相关性：

$$\mathbf{v}_1 = \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix}, \quad \mathbf{v}_2 = \begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix}, \quad \mathbf{v}_3 = \begin{bmatrix}1 \\ 3 \\ 4\end{bmatrix}$$

1. 构建矩阵并判断其是否奇异。
2. 探讨当右侧项为 $\mathbf{b} = \begin{bmatrix}2 & 5 & 7\end{bmatrix}^T$ 和 $\mathbf{b} = \begin{bmatrix}2 & 5 & 6\end{bmatrix}^T$ 时方程组解的情况。

**【解析】**

1. **判断相关性**：我们尝试寻找非零组合使其为零向量：

   $$c_1 \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix} + c_2 \begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix} + c_3 \begin{bmatrix}1 \\ 3 \\ 4\end{bmatrix} = \begin{bmatrix}0 \\ 0 \\ 0\end{bmatrix}$$

   观察可知，若取 $c_1 = 3, c_2 = -1, c_3 = -2$：

   $$3 \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix} + (-1)\begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix} + (-2)\begin{bmatrix}1 \\ 3 \\ 4\end{bmatrix} = \begin{bmatrix}3-1-2 \\ 6-0-6 \\ 9-1-8\end{bmatrix} = \begin{bmatrix}0 \\ 0 \\ 0\end{bmatrix}$$

   由于存在不全为 0 的系数满足该式，这三个向量**线性相关**，因此由它们组成的矩阵 $A = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \mathbf{v}_3 \end{bmatrix}$ 是**奇异矩阵 (Singular Matrix)**。

2. **目标向量** $\mathbf{b} = \begin{bmatrix}2\\5\\7\end{bmatrix}$ **时**： 可以发现该目标向量恰好可以由 $\mathbf{v}_1$ 与 $\mathbf{v}_3$ 直接相加得到：

   $$1 \begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix} + 0 \begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix} + 1 \begin{bmatrix}1 \\ 3 \\ 4\end{bmatrix} = \begin{bmatrix}2 \\ 5 \\ 7\end{bmatrix}$$

   这说明 $\mathbf{b}$ 落在向量张成的二维超平面内。由于存在非平凡零解，此时方程组有**无穷多解**。通解形式可写为特解加上零空间向量的任意倍数：

   $$\mathbf{x} = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} + k \begin{bmatrix} 3 \\ -1 \\ -2 \end{bmatrix}, \quad k \in \mathbb{R}$$

3. **目标向量** $\mathbf{b} = \begin{bmatrix}2\\5\\6\end{bmatrix}$ **时**： 由于列向量张成的超平面的约束条件满足：对第一行与第三行相加，应等于第二行的两倍。而对 $\mathbf{b} = \begin{bmatrix}2\\5\\6\end{bmatrix}$：$2 + 6 = 8 \neq 2 \times 5$，所以 $\mathbf{b}$ 并不落在该平面内，方程组**无解**。

#### 【例题 2】（课件 Page 15 补充例题）

对于向量 $\mathbf{v}_1 = \begin{bmatrix}1\\2\\3\end{bmatrix}, \mathbf{v}_2 = \begin{bmatrix}4\\5\\6\end{bmatrix}, \mathbf{v}_3 = \begin{bmatrix}7\\8\\9\end{bmatrix}$，它们是线性无关还是相关？矩阵 $A = \begin{bmatrix} 1&4&7 \\ 2&5&8 \\ 3&6&9 \end{bmatrix}$ 是奇异还是非奇异？

**【解析】** 仔细观察这三个向量，我们可以发现等差特征：

$$\mathbf{v}_1 + \mathbf{v}_3 = \begin{bmatrix}1+7\\2+8\\3+9\end{bmatrix} = \begin{bmatrix}8\\10\\12\end{bmatrix} = 2\mathbf{v}_2$$

变形可得：

$$\mathbf{v}_1 - 2\mathbf{v}_2 + \mathbf{v}_3 = \mathbf{0}$$

系数不全为 0（即为 $[1, -2, 1]^T$），说明三个向量**线性相关**，因此矩阵 $A$ 是**奇异矩阵 (Singular Matrix)**。

#### 【例题 3】（课件 Page 16 经典参数求解题）

考虑方程组：

$$\begin{aligned} x + 4y - 2z &= 1 \\ x + 7y - 6z &= 6 \\ 3y + qz &= t \end{aligned}$$

1. 参数 $q$ 为何值时，系统是奇异的？
2. 在奇异情况下，右侧项 $t$ 为何值时系统有无穷多解？并求出此时满足 $z=1$ 的解。

**【解析】** 我们对方程组的系数矩阵应用消元思想：

$$\begin{bmatrix} 1 & 4 & -2 \\ 1 & 7 & -6 \\ 0 & 3 & q \end{bmatrix}$$

1. **第一步消元**：第 2 行减去第 1 行：

   $$\begin{bmatrix} 1 & 4 & -2 \\ 0 & 3 & -4 \\ 0 & 3 & q \end{bmatrix}$$

2. **第二步消元**：第 3 行减去新的第 2 行：

   $$\begin{bmatrix} 1 & 4 & -2 \\ 0 & 3 & -4 \\ 0 & 0 & q+4 \end{bmatrix}$$

3. **判断奇异性**：若矩阵奇异，则在对角线上必出现零主元。消元后的主元位置为 $1, 3, q+4$。因此，当 $q = -4$ 时，第 3 行主元为 0，系统奇异。

4. **对右侧项进行相同的消元操作**：

   $$\begin{bmatrix} 1 \\ 6 \\ t \end{bmatrix} \xrightarrow{\text{减去第 1 行}} \begin{bmatrix} 1 \\ 5 \\ t \end{bmatrix} \xrightarrow{\text{减去第 2 行}} \begin{bmatrix} 1 \\ 5 \\ t-5 \end{bmatrix}$$

   当 $q = -4$ 时，第三个消元方程变为：

   $$0 \times z = t - 5$$

   要使系统有无穷多解，必须避免出现 $0 = \text{非零常数}$ 的无解情况，因此必须满足 $t = 5$。

5. **求** $z=1$ **的解**： 此时方程组已被简化为上三角形式：

   $$\begin{aligned} x + 4y - 2z &= 1 \\ 3y - 4z &= 5 \end{aligned}$$

   将 $z = 1$ 代入第 2 个方程：

   $$3y - 4(1) = 5 \implies 3y = 9 \implies y = 3$$

   再将 $y = 3, z = 1$ 代入第 1 个方程：

   $$x + 4(3) - 2(1) = 1 \implies x + 10 = 1 \implies x = -9$$

   所以，满足 $z=1$ 时的唯一解为：$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} -9 \\ 3 \\ 1 \end{bmatrix}$。

## 3. 矩阵乘法 (Matrix Multiplication)

### 3.1 矩阵乘法的本质

矩阵乘法在物理和几何意义上本质是**变换 (Transformation)**。

- **左乘矩阵（如** $EA$**）**：本质上是对右侧矩阵 $A$ 执行**行变换**。
- **右乘矩阵（如** $AE$**）**：本质上是对左侧矩阵 $A$ 执行**列变换**。
- **记忆口诀**：**“左行右列”**。

### 3.2 计算矩阵乘法的四种高级视角（以 $C = AB$ 为例）

假设 $A$ 是 $m \times n$ 矩阵，$B$ 是 $n \times p$ 矩阵。

```
                    [ 矩阵乘法 C = AB 的四种视角 ]
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
1. 点积法 (Dot Product)     2. 列向量法 (By Columns)    3. 行向量法 (By Rows)
(行与列对齐内积得到元素)   (A的列向量之线性组合)       (B的行向量之线性组合)
                                                             │
                                 ┌───────────────────────────┘
                                 ▼
                    4. 分块外积法 (By Building Blocks)
                    (Rank-1 矩阵积的叠加：外积和)
```

#### 1) 点积法 (Dot Product)

- **计算方式**：最为传统的计算方法。矩阵 $C$ 中第 $i$ 行、第 $j$ 列的元素 $C_{ij}$，是由 $A$ 的第 $i$ 行与 $B$ 的第 $j$ 列进行内积（对应元素相乘相加）得到的：

  $$C_{ij} = \sum_{k=1}^n A_{ik} B_{kj}$$

#### 2) 列向量法 (By Columns)

- **计算方式**：矩阵 $C$ 的第 $j$ 列，是 $A$ **的所有列向量**以 $B$ **的第** $j$ **列元素**为权重进行的**线性组合**：

  $$\mathbf{c}_j = B_{1j}\mathbf{a}_1 + B_{2j}\mathbf{a}_2 + \dots + B_{nj}\mathbf{a}_n$$

- **物理意义**：输出矩阵的每一列均保留并融合了 $A$ 中各列的信息。

#### 3) 行向量法 (By Rows)

- **计算方式**：矩阵 $C$ 的第 $i$ 行，是 $B$ **的所有行向量**以 $A$ **的第** $i$ **行元素**为权重进行的**线性组合**：

  $$\mathbf{c}_{i*} = A_{i1}\mathbf{b}_{1*} + A_{i2}\mathbf{b}_{2*} + \dots + A_{in}\mathbf{b}_{n*}$$

#### 4) 分块外积法 (By Building Blocks / Outer Product)

- **计算方式**：将矩阵 $C$ 拆解为 $n$ 个相同尺寸的 **Rank-1（秩为 1）矩阵** 的直接叠加。这些 Rank-1 矩阵是由 $A$ 的第 $k$ 个列向量（尺寸为 $m \times 1$）与 $B$ 的第 $k$ 个行向量（尺寸为 $1 \times p$）通过**外积**相乘得到的：

  $$C = \mathbf{a}_1 \mathbf{b}_{1*} + \mathbf{a}_2 \mathbf{b}_{2*} + \dots + \mathbf{a}_n \mathbf{b}_{n*}$$

- **物理意义**：将复杂的变换拆解为基础构建基石（Building Blocks）的叠加，该方法在后续谱分解（Spectral Theorem）中具有极其核心的地位。

### 3.3 四种方法的具体计算展示

以如下两个 $2 \times 2$ 矩阵相乘为例：

$$A = \begin{bmatrix} 1 & 0 \\ 2 & 3 \end{bmatrix}, \quad B = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

#### 1) 点积法 (Dot Product)

$$C = \begin{bmatrix} 1 \cdot a + 0 \cdot c & 1 \cdot b + 0 \cdot d \\ 2 \cdot a + 3 \cdot c & 2 \cdot b + 3 \cdot d \end{bmatrix} = \begin{bmatrix} a & b \\ 2a+3c & 2b+3d \end{bmatrix}$$

#### 2) 列向量法 (By Columns)

- **第 1 列**由 $A$ 的列向量 $\begin{bmatrix}1\\2\end{bmatrix}$ 与 $\begin{bmatrix}0\\3\end{bmatrix}$，用权重 $a, c$ 线性组合：

  $$\mathbf{c}_1 = a \begin{bmatrix} 1 \\ 2 \end{bmatrix} + c \begin{bmatrix} 0 \\ 3 \end{bmatrix} = \begin{bmatrix} a \\ 2a+3c \end{bmatrix}$$

- **第 2 列**由 $A$ 的列向量用权重 $b, d$ 线性组合：

  $$\mathbf{c}_2 = b \begin{bmatrix} 1 \\ 2 \end{bmatrix} + d \begin{bmatrix} 0 \\ 3 \end{bmatrix} = \begin{bmatrix} b \\ 2b+3d \end{bmatrix}$$

#### 3) 行向量法 (By Rows)

- **第 1 行**用 $A$ 的第 1 行元素 $[1, 0]$ 线性组合 $B$ 的行向量：

  $$\mathbf{c}_{1*} = 1 \cdot \begin{bmatrix} a & b \end{bmatrix} + 0 \cdot \begin{bmatrix} c & d \end{bmatrix} = \begin{bmatrix} a & b \end{bmatrix}$$

- **第 2 行**用 $A$ 的第 2 行元素 $[2, 3]$ 线性组合 $B$ 的行向量：

  $$\mathbf{c}_{2*} = 2 \cdot \begin{bmatrix} a & b \end{bmatrix} + 3 \cdot \begin{bmatrix} c & d \end{bmatrix} = \begin{bmatrix} 2a+3c & 2b+3d \end{bmatrix}$$

#### 4) 分块外积法 (By Building Blocks)

$$C = \begin{bmatrix} 1 \\ 2 \end{bmatrix} \begin{bmatrix} a & b \end{bmatrix} + \begin{bmatrix} 0 \\ 3 \end{bmatrix} \begin{bmatrix} c & d \end{bmatrix} = \begin{bmatrix} a & b \\ 2a & 2b \end{bmatrix} + \begin{bmatrix} 0 & 0 \\ 3c & 3d \end{bmatrix} = \begin{bmatrix} a & b \\ 2a+3c & 2b+3d \end{bmatrix}$$

（注：相加的两个矩阵其列向量均成比例，故其 Rank 均为 1，是真正的 Building Blocks。）

## 4. 高斯消元法与三角分解 (Gaussian Elimination & LU Factorization)

### 4.1 高斯消元的矩阵变换本质

高斯消元法的核心目的，是**将原始系数矩阵** $A$ **转化为上三角矩阵** $U$：

$$A \xrightarrow{\text{高斯消元}} U$$

每一次消元步骤（将第 $j$ 行乘上常数并从第 $i$ 行中减去），在矩阵层面上均等价于在左侧乘上一个**初等消元矩阵 (Elementary Elimination Matrix)** $E_{ij}$。

若整个前向消元无须换行，则其矩阵表达式为：

$$G F E A = U$$

其中 $E, F, G$ 均为初等下三角消元矩阵。

### 4.2 三角分解：$A = LU$ 与 $A = LDU$

由于矩阵乘法满足结合律：

$$A = (G F E)^{-1} U$$

我们令 $L = E^{-1} F^{-1} G^{-1}$：

1. **初等消元矩阵求逆的秘密**：由于初等消元矩阵 $E_{ij}$ 的作用是“从第 $i$ 行减去 $l_{ij}$ 倍的第 $j$ 行”，其逆操作就是“加回 $l_{ij}$ 倍的第 $j$ 行”，因此求逆极其简单——**只需将非对角线上的消元系数改变符号即可**：

   $$E_{ij} = \begin{bmatrix} 1 & 0 \\ -l_{ij} & 1 \end{bmatrix} \implies E_{ij}^{-1} = \begin{bmatrix} 1 & 0 \\ l_{ij} & 1 \end{bmatrix}$$

2. **神奇的** $L$ **矩阵**：将这些逆矩阵按顺序相乘得到 $L$。在计算 $E^{-1} F^{-1} G^{-1}$ 时，各个消元乘数 $l_{ij}$ 会**完美、直接地填入下三角矩阵** $L$ **的对应空位中**，而不会发生任何混乱的交叉相乘：

   $$L = \begin{bmatrix} 1 & 0 & 0 \\ l_{21} & 1 & 0 \\ l_{31} & l_{32} & 1 \end{bmatrix}$$

这便是核心的 $A = LU$ **分解**，其中 $L$ 为单位下三角矩阵（主对角线全为 1），$U$ 为消元后的上三角矩阵。 进一步地，如果我们把 $U$ 中的对角线主元提取出来，形成对角矩阵 $D = \text{diag}(d_1, d_2, \dots, d_n)$，则可得到更加对称的 $A = LDU$ **分解**（此时 $L$ 和新的 $U$ 的对角线元素全部为 1）。

### 4.3 疑难解答：解答手写笔记中的核心困惑

#### 💡 疑问 1：既然有了 $A=LU$，为什么在解方程时能表示为 $Lc=b$ 和 $Ux=c$？其物理内涵是什么？

在实际工程计算中，我们极少直接去求 $A^{-1}$，因为其计算量高达 $O(n^3)$。而利用 $A = LU$ 分解，我们可以将求解复杂的 $A\mathbf{x} = \mathbf{b}$ 问题，转换为**求解两个极易计算的三角系统**，总计算量仅为 $O(n^2)$。

- **推导流程**： 我们将 $A = LU$ 代入方程：

  $$A\mathbf{x} = \mathbf{b} \implies (LU)\mathbf{x} = \mathbf{b} \implies L(U\mathbf{x}) = \mathbf{b}$$

  我们此时引入一个中介向量 $\mathbf{c}$，令其满足：

  $$U\mathbf{x} = \mathbf{c}$$

  这样，原方程便成功拆解为两步：

  1. **前向代入 (Forward Substitution)**：解下三角系统 $L\mathbf{c} = \mathbf{b}$。由于 $L$ 是下三角，第一行只包含 $c_1$，我们可以逐行直接解出 $c_1, c_2, \dots, c_n$，无需任何复杂的矩阵消元。
  2. **回代 (Back Substitution)**：解上三角系统 $U\mathbf{x} = \mathbf{c}$。由于 $U$ 是上三角，最后一行仅包含 $x_n$，我们可以从下往上依次代入解出 $x_n, x_{n-1}, \dots, x_1$。

#### 💡 疑问 2：$PA = LDU$ 的本质物理意义是什么？

如果在消元过程中，**对角线上的主元位置出现了 0**，我们便无法继续执行消元操作。此时：

1. **若该位置下方存在非 0 元素**：我们可通过**行交换**来挽救。对应的矩阵操作是乘上置换矩阵 $P$（如 $P_{13}$ 表示交换第 1、3 行）。
2. $PA = LU / LDU$ **的物理意义**：它代表了“带行交换的高斯消元”**。在实际算法中，为了数值稳定性，即使主元位置不为 0，我们也会主动挑选下方最大的元素进行行交换（称为部分主元消元法）。**$P$ **是把消元过程中所有必要的行交换步骤汇总并提前执行。**$PA = LDU$ 告诉我们：只要原矩阵是非奇异的，我们永远可以先对其行进行重新排序（乘上 $P$），使其能被完美地分解为下三角 $L$、对角主元 $D$ 以及对角线为 1 的上三角 $U$。

### 4.4 经典例题：$LU$ 与 $LDU$ 分解演示（Page 37 例题）

#### 【例题 4】

给定矩阵 $A = \begin{bmatrix} 2 & 1 \\ 8 & a \end{bmatrix}$：

1. 参数 $a$ 满足什么条件时，矩阵 $A$ 奇异？
2. 设 $a = 7$，对其执行高斯消元，并求其 $A = LU$ 以及 $A = LDU$ 分解。

**【解析】**

1. **寻找奇异值**： 消元矩阵 $E_{21}$ 需要消除第二行第一列的 $8$。由于主元为 $2$，消元乘数为 $l_{21} = 8/2 = 4$。

   $$E_{21} = \begin{bmatrix} 1 & 0 \\ -4 & 1 \end{bmatrix}$$

   进行一步消元：

   $$E_{21}A = \begin{bmatrix} 1 & 0 \\ -4 & 1 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 8 & a \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 0 & a-4 \end{bmatrix}$$

   若系统奇异，对角线上第二主元必为零，即 $a - 4 = 0 \implies$ $a = 4$。

2. **当** $a = 7$ **时，执行** $A = LU$ **分解**： 代入消元结果，可得消元后的上三角矩阵 $U$：

   $$U = \begin{bmatrix} 2 & 1 \\ 0 & 7-4 \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix}$$

   下三角矩阵 $L$ 则是 $E_{21}$ 的逆矩阵：

   $$L = E_{21}^{-1} = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix}$$

   因此 $A = LU$ 分解结果为：

   $$A = \begin{bmatrix} 2 & 1 \\ 8 & 7 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix}$$

3. **计算** $A = LDU$ **分解**： 我们将 $U = \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix}$ 中的对角线元素提取为对角矩阵 $D$：

   $$D = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}$$

   同时调整消元后的上三角矩阵，使其主对角线全为 $1$：

   $$U_{\text{new}} = D^{-1} U = \begin{bmatrix} 1/2 & 0 \\ 0 & 1/3 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 1/2 \\ 0 & 1 \end{bmatrix}$$

   因此，其 $A = LDU$ 分解结果为：

   $$A = \begin{bmatrix} 1 & 0 \\ 4 & 1 \end{bmatrix} \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1/2 \\ 0 & 1 \end{bmatrix}$$

## 5. 逆矩阵与转置 (Inverse and Transpose)

### 5.1 逆矩阵的定义与重要性质

若一个矩阵 $A$ 是可逆（或非奇异）的，则存在唯一的矩阵 $B$（记作 $A^{-1}$），满足：

$$AB = I \quad \text{且} \quad BA = I$$

#### 重要性质：

1. **双重否定**：$(A^{-1})^{-1} = A$

2. **穿鞋脱鞋原则 (Shoe-and-Sock Principle)**：

   $$(AB)^{-1} = B^{-1} A^{-1} \quad \text{以及} \quad (ABC)^{-1} = C^{-1} B^{-1} A^{-1}$$

   - **物理隐喻**：出门时先穿袜子（$A$）再穿鞋子（$B$），回家后逆转这一切必须先脱鞋子（$B^{-1}$）再脱袜子（$A^{-1}$）。

3. **转置与求逆可交换**：

   $$(A^{-1})^T = (A^T)^{-1}$$

### 5.2 高斯-若尔当求逆法 (Gauss-Jordan Method)

这是求解任意尺寸矩阵逆的最系统化方法。其 SOP 如下：

```
SOP Step 1: 构造增广矩阵 [ A | I ]
                   │
                   ▼
SOP Step 2: 实施前向消元，将左侧 A 变为上三角 U，右侧变为下三角逆的积： [ U | L⁻¹ ]
                   │
                   ▼
SOP Step 3: 实施反向消元（向上消元），将左侧 U 变为主元对角阵并化归为单位矩阵 I： [ I | A⁻¹ ]
```

### 5.3 经典例题：高斯-若尔当符号求逆示范（Page 48 例题）

#### 【例题 5】

利用高斯-若尔当方法求如下矩阵的逆：

$$A = \begin{bmatrix} 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1 \end{bmatrix}$$

**【解析】**

1. **构建增广矩阵** $[A \mid I]$：

   $$\left[ \begin{array}{ccc|ccc} 1 & a & b & 1 & 0 & 0 \\ 0 & 1 & c & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array} \right]$$

2. **实施反向消元**（此时左侧已是上三角，我们只需向上消除非零元素）：

   - **消除第 2 行第 3 列的** $c$：用第 2 行减去第 3 行的 $c$ 倍（$R_2 \leftarrow R_2 - c R_3$）：

     $$\left[ \begin{array}{ccc|ccc} 1 & a & b & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 & 1 & -c \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array} \right]$$

   - **消除第 1 行第 3 列的** $b$：用第 1 行减去第 3 行的 $b$ 倍（$R_1 \leftarrow R_1 - b R_3$）：

     $$\left[ \begin{array}{ccc|ccc} 1 & a & 0 & 1 & 0 & -b \\ 0 & 1 & 0 & 0 & 1 & -c \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array} \right]$$

   - **消除第 1 行第 2 列的** $a$：用第 1 行减去新的第 2 行的 $a$ 倍（$R_1 \leftarrow R_1 - a R_2$）： 注意右侧第一行最后一列的变化：$-b - a(-c) = ac - b$。

     $$\left[ \begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & -a & ac-b \\ 0 & 1 & 0 & 0 & 1 & -c \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array} \right]$$

3. **提取结果**： 此时左侧已完全化为单位矩阵 $I$，因此右侧部分即为所求之逆矩阵 $A^{-1}$：

   $$A^{-1} = \begin{bmatrix} 1 & -a & ac-b \\ 0 & 1 & -c \\ 0 & 0 & 1 \end{bmatrix}$$

### 5.4 转置与对称矩阵 (Symmetric Matrix)

- **转置性质**：

  $$(AB)^T = B^T A^T$$

- **对称矩阵定义**：满足 $A^T = A$ 的矩阵。

- **对称矩阵的重要特性**：

  1. 若对称矩阵 $A$ 可逆，其逆矩阵 $A^{-1}$ 也必然是对称矩阵。

  2. 若对称矩阵可进行 $A = LDU$ 分解，由于对称对称性，其上三角部分必然是下三角部分的转置，即：

     $$U = L^T$$

     因此，对称矩阵的三角分解可统一写为极其漂亮的对称形式：

     $$A = LDL^T$$

  3. 对于任意实矩阵 $R$（哪怕是长方形矩阵），其转置与自身的乘积 $R^T R$ **永远是对称矩阵**。

     - **证明**：

       $$(R^T R)^T = R^T (R^T)^T = R^T R$$

       由于其转置等于自身，得证其必定对称。这一结论在最小二乘法及投影矩阵中应用极广。




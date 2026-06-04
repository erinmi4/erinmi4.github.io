---
title: "线性代数-CH2-向量空间"
slug: "线性代数-CH2-向量空间"
description: "线性代数-CH2-向量空间，待补充摘要。"
pubDate: 2026-06-03
updatedDate: 2026-06-03
tags:
  - 线性代数
  - 修考
category: 修考
draft: false
---

[Chapter 2 Vector Spaces.pdf - Google ドライブ](https://drive.google.com/file/d/1mS47htPniaT_DV77IiZeu-UWPDOQYLql/view?usp=sharing) 

- [**單元 4．向量空間–初探「行空間」與「零空間」**](https://www.youtube.com/watch?v=Z5uWHTAc6TY&list=PL68D2uCy1WTNz4hadNnAXaFmb9_0fvDzg&index=4)

- [**單元 5．向量空間–矩陣的四大子空間**](https://www.youtube.com/watch?v=qCclXBF3mr4&list=PL68D2uCy1WTNz4hadNnAXaFmb9_0fvDzg&index=5)

- [**單元 6．向量空間–兩種矩陣實例：線性轉換矩陣化、圖論**](https://www.youtube.com/watch?v=rIUVEED3BTg&list=PL68D2uCy1WTNz4hadNnAXaFmb9_0fvDzg&index=6)

  

![image-20260603132010041](./%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0-CH2-%E5%90%91%E9%87%8F%E7%A9%BA%E9%97%B4.assets/image-20260603132010041.png)



# 线性代数 Chapter 2: Vector Spaces (向量空间与子空间)

## 1. 向量空间与子空间 (Vector Spaces and Subspaces)

### 1.1 核心概念

- **向量空间 (Vector Space)**：包含所有符合特定维度的向量（例如 $\mathbb{R}^2, \mathbb{R}^n$），并且向量在空间内满足加法和数乘的8条运算法则。

- **子空间 (Subspace)**：一个向量空间的子集，且自身也构成一个向量空间。它必须满足**封闭性 (Closure)**：

  1. **加法封闭**：若 $x$ 和 $y$ 在空间中，则 $x + y$ 仍然在空间中。
  2. **数乘封闭**：若 $x$ 在空间中，则 $cx$ ($c$ 为任意常数) 仍然在空间中。

  - **结论**：任意线性组合 $cx + dy$ 都必须留在该空间中。**这意味着任何子空间都必须经过原点 (包含零向量** $0$**)。**

### 1.2 例题：判断是否为子空间

- **题目**：$\mathbb{R}^2$ 中第一象限的向量集合是子空间吗？
- **答案**：**不是**。虽然它满足加法封闭（正数加正数还是正数），但不满足数乘封闭。若取向量 $x = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$，乘以常数 $c = -1$，得到 $\begin{bmatrix} -1 \\ -1 \end{bmatrix}$，跑到了第三象限，不在原集合中。

## 2. 解的存在性与唯一性 ($Ax=b$)

求解线性方程组 $Ax=b$ 时，本质上是在探究解的存在性和唯一性。

### 2.1 存在性 (Existence)

- **条件**：当且仅当向量 $b$ 位于矩阵 $A$ 的 **列空间 (Column Space,** $C(A)$**)** 里时，$Ax=b$ 才有解。
- **理解**：$Ax$ 是将 $A$ 的列向量用 $x$ 的元素做线性组合。如果这些列向量怎么组合都凑不出 $b$，方程自然无解。

### 2.2 唯一性 (Uniqueness)

- **条件**：如果 $Ax=b$ 有解，它是否唯一取决于 $A$ 的 **零空间 (Null Space,** $N(A)$**)**。
- **【⚠️ 笔记修正】** 你的手写笔记中写到“如果 null space 中只有零向量，也就存在 free variable...” 这是一个笔误。
  - **正确表述**：如果 Null space 只有零向量，意味着**不存在**自由变量 (No free variables)。所有列都是枢轴列 (Pivot columns)。此时解是唯一的。
  - 如果**存在**自由变量，这些自由变量可以任意取值，导致 $Ax=0$ 存在非零解，从而产生**无限多解**。

## 3. 零空间 (Null Space) 与 完全解 (Complete Solution)

**零空间** $N(A)$ 由所有满足 $Ax=0$ 的向量 $x$ 组成。

### 3.1 例题：求 Null Space (手写笔记同款详细过程)

**题目**：求矩阵 $A = \begin{bmatrix} 1 & 3 & 3 & 2 \\ 2 & 6 & 9 & 7 \\ -1 & -3 & 3 & 4 \end{bmatrix}$ 的零空间。

**解答步骤**：

1. **高斯消元** $A \rightarrow U$：

   $$U = \begin{bmatrix} 1 & 3 & 3 & 2 \\ 0 & 0 & 3 & 3 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

2. **划分变量**：

   - 第 1、3 列有主元 (Pivot)，因此 **枢轴变量 (Pivot variables)** 是 $x_1, x_3$。
   - 第 2、4 列没有主元，因此 **自由变量 (Free variables)** 是 $x_2, x_4$。

3. **将枢轴变量用自由变量表示** ($Ux = 0$)：

   - 第二行方程：$3x_3 + 3x_4 = 0 \implies x_3 = -x_4$
   - 第一行方程：$x_1 + 3x_2 + 3x_3 + 2x_4 = 0$ 代入 $x_3$：$x_1 + 3x_2 + 3(-x_4) + 2x_4 = 0 \implies x_1 = -3x_2 + x_4$

4. **写出通解向量**：

   $$x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} -3x_2 + x_4 \\ x_2 \\ -x_4 \\ x_4 \end{bmatrix} = x_2 \begin{bmatrix} -3 \\ 1 \\ 0 \\ 0 \end{bmatrix} + x_4 \begin{bmatrix} 1 \\ 0 \\ -1 \\ 1 \end{bmatrix}$$

   *(操作技巧：分别令一组自由变量为 (1, 0) 和 (0, 1) 来快速求出基础解系)*。

### 3.2 完全解 (Complete Solution)

非齐次方程 $Ax=b$ 的通解 = 一个特解 $x_p$ + 零空间的解 $x_n$。

$$x_{complete} = x_p + x_n$$

- **求特解** $x_p$ **的方法**：将所有的自由变量设为 $0$ ($x_2=0, x_4=0$)，然后求解相应的枢轴变量。
- **几何意义**：零空间的解 $x_n$ 构成一个穿过原点的子空间。加上特解 $x_p$ 后，相当于将这个子空间平移了 $x_p$ 的距离，平移后的平面/直线不再经过原点（不再是子空间，而是解的集合）。

## 4. 四个基本空间 (Four Fundamental Subspaces)

### 4.1 构建空间的基石：Independence, Spanning 与 Basis

要精确描述一个空间，必须使用“基 (Basis)”。理解 Basis 必须先理解以下两个对立统一的概念：

1. **Linear Independence (线性无关 - 信息的浓缩)**： 一组向量中，没有冗余的向量。没有任何一个向量可以由其他向量线性组合得到。若 $c_1v_1 + c_2v_2 + \dots + c_kv_k = 0$，唯一解是 $c_i = 0$。
2. **Spanning (张成 - 信息的扩展)**： 一组向量的所有可能的线性组合，构成了（张成了）一个子空间。
3. **Basis (基 - 不多也不少)**： 基是上述两者的结合。它是一个**最大线性无关组**，同时也是一个**最小生成集**。找到了 Basis，就能用唯一的系数表示空间中的任意向量。
4. **Dimension (维数)**： 一个空间可以有无限多种 Basis，但**所有 Basis 包含的向量数量必定相同**，这个固定的数量就是该空间的维数。

### 4.2 四个空间的全面对比

对于一个 $m \times n$ 的矩阵 $A$，通过高斯消元找到其秩 (Rank) 为 $r$。矩阵不仅孕育了四个基本子空间，且它们的维度之间有极美的对称性（线性代数基本定理）：

| 空间名称     | 符号     | 所在维度       | 维数 (Dimension) | 物理/代数意义                                      |
| ------------ | -------- | -------------- | ---------------- | -------------------------------------------------- |
| **列空间**   | $C(A)$   | $\mathbb{R}^m$ | $r$              | 决定 $Ax=b$ 是否有解。$b$ 必须在列空间中。         |
| **行空间**   | $C(A^T)$ | $\mathbb{R}^n$ | $r$              | $A$ 中所有行的线性组合构成的空间。                 |
| **零空间**   | $N(A)$   | $\mathbb{R}^n$ | $n - r$          | 使 $Ax=0$ 成立的 $x$。决定解是否唯一。             |
| **左零空间** | $N(A^T)$ | $\mathbb{R}^m$ | $m - r$          | 使 $y^T A = 0$ 成立的 $y$ (即产生全零行的行组合)。 |

**维度定理公式**：

- $\dim C(A) = \dim C(A^T) = r$ （行秩 = 列秩）
- $\dim C(A) + \dim N(A^T) = m$
- $\dim C(A^T) + \dim N(A) = n$

### 4.3 高斯消元对四个空间的影响 (⚠️ 核心考点)

高斯消元 ($A \rightarrow U$) 是通过行变换实现的，这深刻影响了如何寻找这四个空间的基。

1. **行空间** $C(A^T)$**：没变！** 行变换本质上就是各行的线性组合，所以消元前后的行空间是同一个。
   - **寻找 Basis**：直接取消元后矩阵 $U$（或 $R$）的**非零行**即可。
2. **零空间** $N(A)$**：没变！** 行变换不改变方程组的解。$Ax=0$ 和 $Ux=0$ 和 $Rx=0$ 是完全等价的。
   - **寻找 Basis**：通过 $U$ 找出自由变量，令其分别取 $1, 0$ 等，解出特解。
3. **列空间** $C(A)$**：变了！** 行变换会破坏列向量的原有关系（例如 $U$ 的列向量下面全是 $0$，怎么组合也出不来 $A$ 中的非零底元）。
   - **寻找 Basis**：**绝对不能**用 $U$ 的列作为基！必须利用 $U$ 识别出主元列 (Pivot columns) 的位置，然后回到**原矩阵** $A$ 中挑出对应的列作为 Basis。
4. **左零空间** $N(A^T)$： 求解 $y^T A = 0$。即寻找什么样的“行组合”能把 $A$ 的行抵消成一整行 $0$。
   - **寻找 Basis**：追踪高斯消元的过程！可以在消元时带上右侧的常数项 $b$。当 $U$ 中出现一行全 $0$ 时，观察右侧 $b$ 的系数是什么。例如，如果右侧是 $6b_1 - 2b_2 + b_3 = 0$，这意味着 $6 \times (\text{第一行}) - 2 \times (\text{第二行}) + 1 \times (\text{第三行}) = \text{全零行}$。那么 $\begin{bmatrix} 6 & -2 & 1 \end{bmatrix}^T$ 就是左零空间的一个基向量。

### 4.4 A = CR 分解

一个矩阵可以被拆解为列空间与行空间矩阵相乘。

- **C 矩阵**：包含 $A$ 的 $r$ 个独立列 (Pivot columns)。

- **R 矩阵**：包含化简后 RREF (行最简阶梯形) 的 $r$ 个非零行。

- **例题**：

  $$A = \begin{bmatrix} 2 & 1 & 3 \\ 3 & 1 & 4 \\ 5 & 7 & 12 \end{bmatrix}$$

  消元发现前两列是独立列，第三列是前两列相加。因此秩 $r=2$。

  $$A = C \times R = \begin{bmatrix} 2 & 1 \\ 3 & 1 \\ 5 & 7 \end{bmatrix} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$

## 5. 图论与关联矩阵 (Graphs and Incidence Matrices)

图论 (Graph Theory) 中的**有向图 (Directed Graph)** 可以完美对应到线性代数的四个基本空间中。我们可以用矩阵来表示图的结构，这个矩阵被称为**关联矩阵 (Incidence Matrix,** $A$**)**。

### 5.1 关联矩阵的构建

- 图由 **节点 (Nodes)** 和 **边 (Edges)** 组成。
- 在关联矩阵 $A$ 中：**行代表边 (Edges)，列代表节点 (Nodes)**。
- **规则**：如果一条边从节点 $j$ 指向节点 $k$，那么在这一行中，第 $j$ 列填 `-1` (离开)，第 $k$ 列填 `+1` (进入)，其余填 `0`。

### 5.2 关联矩阵的四个基本空间的物理意义

假设图有 $m$ 条边， $n$ 个节点。

1. **零空间** $N(A)$:
   - 解 $Ax=0$。这里的 $x$ 代表各个节点的**电势 (Potentials)**。
   - $Ax=0$ 意味着相邻节点之间没有电势差，即图中**所有节点的电势都必须相等**。
   - **Basis**: $x = [1, 1, 1, ..., 1]^T$。
   - **Dimension**: 恒为 $1$。因此矩阵的秩 $r = n - 1$。
2. **列空间** $C(A)$:
   - $Ax = b$。这里的 $b$ 代表边的**电势差**。
   - $b$ 存在解的条件是：围绕任何一个闭合环路 (Loop)，电势差之和必须为0。这正是**基尔霍夫电压定律 (KVL)**！
3. **左零空间** $N(A^T)$:
   - 解 $A^T y = 0$。这里的 $y$ 代表流过每条边的**电流 (Currents)**。
   - $A^T y = 0$ 意味着流入每个节点的电流等于流出每个节点的电流（净电流为0）。这正是**基尔霍夫电流定律 (KCL)**！
   - **Basis**: 图中的每一个**独立环路 (Independent Loop)** 对应左零空间的一个基向量 (环路上的电流顺着流为1，逆着为-1)。
   - **Dimension**: 维数 $m - r = m - n + 1$。这就是图中独立环路的数量。
4. **行空间** $C(A^T)$:
   - 对应图中的 **生成树 (Spanning Tree)**（包含所有节点但**没有环路**的子图）。
   - 行空间的维度 $r = n - 1$ 等于生成树的边数。

### 5.3 欧拉公式 (Euler's Formula)

通过以上维度的分析，我们可以推导出图论中著名的欧拉公式：

$$\text{节点数 (Nodes)} - \text{边数 (Edges)} + \text{独立环路数 (Loops)} = 1$$

对应到矩阵维度即：

$$n - m + \dim(N(A^T)) = 1 \implies n - m + (m - r) = n - r = 1$$

## 6. 线性变换的矩阵化 (Matrixization of Transformations)

许多数学和几何操作（微积分、拉伸、旋转、投影、反射）只要满足线性性质，都能变成“矩阵乘以输入向量”的操作。

**通用推导 5 步法**：

1. 选取输入空间的 Basis。
2. 选取输出空间的 Basis。
3. 观察输入 Basis 向量经过变换后变成什么。
4. 将变换后的结果写成输出 Basis 的线性组合。
5. **这些线性组合的系数，按列排下来，就是变换矩阵** $A$**。**

### 6.1 微积分的矩阵化 (Calculus as Matrices)

我们可以把多项式的求导和积分视为线性变换。假设最高次项为三次，选定基底 (Basis) 为：$1, t, t^2, t^3$。

- **求导矩阵 (Differentiation Matrix,** $A_{diff}$**)**： 求导作用于基底：$(1)'=0$, $(t)'=1$, $(t^2)'=2t$, $(t^3)'=3t^2$。 提取系数按列排布：

  $$A_{diff} = \begin{bmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

  *(验证：这个矩阵的零空间是一维的，基底是* $[1, 0, 0, 0]^T$*，对应物理意义是“常数求导为0”)*。

- **积分矩阵 (Integration Matrix,** $A_{int}$**)**： 同样，积分作用于基底会将次幂升高一位。可以推导出积分的变换矩阵。并且，微积分基本定理可以反映在矩阵乘法上：$A_{diff} A_{int} = I$ （先积分后求导等于没变）。

### 6.2 旋转矩阵 (Rotation Matrix)

- **推导**：选取基向量 $e_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$（x轴）和 $e_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$（y轴）。

- 逆时针旋转 $\theta$ 角度后：

  - $e_1$ 变成了 $\begin{bmatrix} \cos\theta \\ \sin\theta \end{bmatrix}$。
  - $e_2$ 变成了 $\begin{bmatrix} -\sin\theta \\ \cos\theta \end{bmatrix}$。

- **矩阵** (系数按列排)：

  $$Q_\theta = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$

  *(如逆时针转* $90^\circ$*，代入* $\theta=90^\circ$*，得到* $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$*)*

### 6.3 投影矩阵 (Projection Matrix)

- **原理**：将空间中的点垂直投影到一条与 x 轴夹角为 $\theta$ 的直线上。

- **矩阵**：

  $$P = \begin{bmatrix} \cos^2\theta & \sin\theta\cos\theta \\ \sin\theta\cos\theta & \sin^2\theta \end{bmatrix}$$

  *(特点：投影两次等于投影一次，即* $P^2 = P$*)*。

### 6.4 反射矩阵 (Reflection Matrix)

- **原理**：关于直线作对称反射。反射变换 $H$ 可以通过投影矩阵 $P$ 巧妙求出：反射点 = 投影点走两倍的距离再减去原点距离，即 $H = 2P - I$。

- **推导**： 使用倍角公式 ($\cos 2\theta = 2\cos^2\theta - 1$, $\sin 2\theta = 2\sin\theta\cos\theta$) 化简：

- **矩阵**：

  $$H = \begin{bmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{bmatrix}$$

  *(特点：反射两次回到原点，即* $H^2 = I$*，说明反射矩阵的逆矩阵就是它自己* $H^{-1} = H$*)*。

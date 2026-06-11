---
title: "复变函数-CH2.1-解析函数"
slug: "复变函数-CH2.1-解析函数"
description: "复变函数-CH2.1-解析函数，待补充摘要。"
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 复变函数
  - 大阪大学
  - 数学分析
category: "修考"
draft: false
---

[第四讲 解析函数_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV13K4y1h7wC?buvid=XU5EF145F0DFFF3C5E71837D937FA3080CB89&from_spmid=united.player-video-detail.relatedvideo.0&is_story_h5=false&mid=gD1TsSbShVg1Y9hI4zeZKA%3D%3D&plat_id=116&share_from=ugc&share_medium=android&share_plat=android&share_session_id=f4d7054b-0ef9-4534-8134-590ba3bf6db4&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1780936817&unique_k=4ywp3Gh&up_id=1586658&vd_source=f6a1c5561b1c1e28133e4465302990f3&spm_id_from=333.788.videopod.episodes&p=4)

- 【复变函数—C-R方程】 https://www.bilibili.com/video/BV1JL4y1g7BR/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5



# 《复变函数与积分变换》复习笔记：解析函数与导数

本章是复变函数的核心基础。我们将从熟悉的实变函数导数出发，逐步引入复平面上的**导数**与**解析性**，并深入探讨判定解析性的终极武器——**柯西-黎曼方程 (Cauchy-Riemann Equations)**。

## 1. 复变函数的导数与微分

### 1.1 导数的定义

在实变函数中，我们研究自变量沿着一维实数轴的变化。而在复平面上，自变量 $z$ 可以从任意方向趋近于 $z_0$。

**定义：** 设 $w = f(z)$ 在区域 $D$ 内有定义，$z_0 \in D$。若极限

$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$

存在，则称 $f(z)$ 在 $z_0$ 处**可导**。此极限值称为 $f(z)$ 在 $z_0$ 处的**导数**，记作 $f'(z_0)$ 或 $\left.\frac{\mathrm{d}w}{\mathrm{d}z}\right|_{z=z_0}$。

> **注意：** $\Delta z \to 0$ 是指在复平面上以**任意方向**趋近于 $0$。这是一个极强的约束，也是复变函数拥有许多优美性质的源泉。

### 1.2 求导法则

复变函数的求导法则与实变函数**完全一模一样**。 设 $f(z)$ 和 $g(z)$ 可导，则：

- **线性性质：** $[f(z) \pm g(z)]' = f'(z) \pm g'(z)$
- **乘法法则：** $[f(z)g(z)]' = f'(z)g(z) + f(z)g'(z)$
- **商法则：** $\left[\frac{f(z)}{g(z)}\right]' = \frac{f'(z)g(z) - f(z)g'(z)}{[g(z)]^2} \quad (g(z) \neq 0)$
- **复合函数求导（链式法则）：** 若 $w = f(\eta)$ 且 $\eta = g(z)$，则 $\frac{\mathrm{d}w}{\mathrm{d}z} = f'(g(z))g'(z)$

#### 【新增：基础求导例题】

**例题：** 求 $f(z) = z^n$ ($n \in \mathbb{N}^+$) 的导数。

 **解：** 利用二项式定理展开：

$$(z + \Delta z)^n = z^n + n z^{n-1} \Delta z + \frac{n(n-1)}{2} z^{n-2} (\Delta z)^2 + \cdots + (\Delta z)^n$$

代入导数定义：

$$f'(z) = \lim_{\Delta z \to 0} \frac{(z + \Delta z)^n - z^n}{\Delta z} = \lim_{\Delta z \to 0} \left[ n z^{n-1} + \frac{n(n-1)}{2} z^{n-2} \Delta z + \cdots + (\Delta z)^{n-1} \right] = n z^{n-1}$$

因此，与实函数一样，$(z^n)' = n z^{n-1}$。

## 2. 解析函数的概念与性质

### 2.1 解析函数的定义

“可导”仅仅是对单个点而言的，而在复变函数中，我们更关心在一片区域上的优良性质，这就是**解析性**。

**定义：**

1. **点解析：** 若 $f(z)$ 在 $z_0$ 及其**某个邻域** $U(z_0)$ 内处处可导，则称 $f(z)$ 在点 $z_0$ **解析**。
2. **区域解析：** 若 $f(z)$ 在区域 $D$ 内处处可导，则称 $f(z)$ 是区域 $D$ 内的**解析函数**。

### 2.2 可导与解析的关系

复变函数中，这三个概念的强弱关系非常关键，常作为考研或期末的选择填空题：

$$\text{在点 } z_0 \text{ 处：解析} \implies \text{可导} \implies \text{连续}$$

- **解析** $\implies$ **可导**：这是显然的（解析要求邻域内处处可导，自然在中心点可导）。
- **可导** $\not\implies$ **解析**：若函数仅在孤立的点 $z_0$ 可导，而在其任何去心邻域内都有不可导的点，则函数在 $z_0$ 处**不可解析**。
- **连续** $\not\implies$ **可导**：这与实函数一致。

### 2.3 经典例题：连续但处处不可导

**例题：** 证明 $f(z) = \bar{z}$（共轭复数）在复平面上处处连续，但处处不可导。

**证明：**

1. **连续性：** 设 $z = x + iy$，则 $f(z) = x - iy$。由于实部 $u(x,y)=x$ 和虚部 $v(x,y)=-y$ 在全平面连续，故 $f(z)$ 在全平面连续。

2. **不可导性（利用导数定义分析）：** 设 $\Delta z = \Delta x + i \Delta y$。按定义写出变化率的极限：

   $$\lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z} = \lim_{\Delta z \to 0} \frac{\overline{z + \Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\bar{z} + \overline{\Delta z} - \bar{z}}{\Delta z} = \lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z}$$

   代入 $\Delta z = \Delta x + i \Delta y$：

   $$\lim_{\Delta z \to 0} \frac{\overline{\Delta z}}{\Delta z} = \lim_{(\Delta x, \Delta y) \to (0,0)} \frac{\Delta x - i \Delta y}{\Delta x + i \Delta y}$$

   我们从两个不同的方向趋近于 $0$：

   - **沿实轴趋近**（即 $\Delta y = 0, \Delta x \to 0$）：

     $$\lim_{\Delta x \to 0} \frac{\Delta x - i \cdot 0}{\Delta x + i \cdot 0} = \lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x} = 1$$

   - **沿虚轴趋近**（即 $\Delta x = 0, \Delta y \to 0$）：

     $$\lim_{\Delta y \to 0} \frac{0 - i \Delta y}{0 + i \Delta y} = \lim_{\Delta y \to 0} \frac{-i \Delta y}{i \Delta y} = -1$$

     因为沿两个不同方向得到的极限值不相等 ($1 \neq -1$)，所以极限不存在。 **结论：** $f(z) = \bar{z}$ 在复平面上**处处不可导**，当然也**处处不解析**。

## 3. 柯西-黎曼方程 (Cauchy-Riemann)

每一次都用定义去判断可导和解析实在太麻烦了。为此，我们引入解析函数判定的充要条件——**柯西-黎曼方程 (简称 C-R 方程)**。

### 3.1 导数计算公式的推导与证明

设复变函数可写为实部和虚部的形式：

$$f(z) = u(x, y) + i v(x, y)$$

若 $f(z)$ 在 $z = x+iy$ 处可导，意味着不论 $\Delta z = \Delta x + i\Delta y$ 以何种方式趋近于 $0$，商式的极限都存在且相等。

#### **证明过程：**

**方式一：平行于实轴（沿水平方向）趋近，即** $\Delta y = 0, \Delta z = \Delta x \to 0$

$$f'(z) = \lim_{\Delta x \to 0} \frac{[u(x+\Delta x, y) + i v(x+\Delta x, y)] - [u(x,y) + i v(x,y)]}{\Delta x}$$

$$f'(z) = \lim_{\Delta x \to 0} \frac{u(x+\Delta x, y) - u(x,y)}{\Delta x} + i \lim_{\Delta x \to 0} \frac{v(x+\Delta x, y) - v(x,y)}{\Delta x}$$

根据偏导数的定义，上式即为：

$$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x}$$

**方式二：平行于虚轴（沿竖直方向）趋近，即** $\Delta x = 0, \Delta z = i\Delta y \to 0$

$$f'(z) = \lim_{\Delta y \to 0} \frac{[u(x, y+\Delta y) + i v(x, y+\Delta y)] - [u(x,y) + i v(x,y)]}{i\Delta y}$$

注意 $\frac{1}{i} = -i$，所以：

$$f'(z) = \lim_{\Delta y \to 0} \left[ \frac{u(x, y+\Delta y) - u(x,y)}{i\Delta y} + i \frac{v(x, y+\Delta y) - v(x,y)}{i\Delta y} \right]$$

$$f'(z) = -i \frac{\partial u}{\partial y} + \frac{\partial v}{\partial y} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

由于 $f(z)$ 可导，上述两种方式得到的导数值必须相等：

$$\frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}$$

比较实部与虚部，便得到了大名鼎鼎的 **柯西-黎曼方程 (C-R 方程)**：

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \qquad \text{且} \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

同时，我们也得到了**导数的四种等价计算公式**：

$$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y} = \frac{\partial v}{\partial y} + i \frac{\partial v}{\partial x}$$

### 3.2 解析性的判定定理 (重点考点)

如何用 C-R 方程判定一个函数在某点或区域内是否解析？

#### **必要条件定理：**

若 $f(z) = u + iv$ 在区域 $D$ 内**可导**（或解析），则在 $D$ 内 $u(x,y)$ 和 $v(x,y)$ 的偏导数必存在，且**满足 C-R 方程**。

#### **充分条件定理（用于实际判定）：**

若二元函数 $u(x,y)$ 和 $v(x,y)$ 满足以下两个条件：

1. 在区域 $D$ 内**一阶偏导数连续**（即 $u(x,y)$ 和 $v(x,y)$ 可微）；

2. 满足 **C-R 方程**：

   $$\begin{cases} \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \\ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \end{cases}$$

   > 我的理解是
   >
   > 1. 条件：在该点$Z_0$处可导
   > 2. 在邻域，可以认为是一个圆内，各个方向过来的，都是可导的。

则 $f(z) = u + iv$ 在区域 $D$ 内**处处可导（即在** $D$ **内解析）**。

> **SOP (标准作业程序)：**
>
> 1. 写出实部 $u(x,y)$ 与虚部 $v(x,y)$。
> 2. 求出四个偏导数：$\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, $\frac{\partial v}{\partial x}$, $\frac{\partial v}{\partial y}$。
> 3. 列出 C-R 方程组，求解使得方程组成立的点集。
> 4. **判断解析性：** 只有在某点的**邻域内全部满足** C-R 方程，函数在该点才解析。若只是孤立点/孤立曲线满足，则**仅可导，不解析**。

## 4. 典型例题精析

### 例题一：判断可导性与解析性

**题目：** 求 $f(z) = 2xy^2 + i x^2y$ 在何处可导？何处解析？

**解：**

1. **确定实部与虚部：**

   $$u(x, y) = 2xy^2, \qquad v(x, y) = x^2y$$

   由于 $u, v$ 是多项式，它们在整个复平面上都有一阶连续偏导数。

2. **计算偏导数：**

   $$\frac{\partial u}{\partial x} = 2y^2, \qquad \frac{\partial u}{\partial y} = 4xy$$

   $$\frac{\partial v}{\partial x} = 2xy, \qquad \frac{\partial v}{\partial y} = x^2$$

3. **代入 C-R 方程组：**

   $$\begin{cases} \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \implies 2y^2 = x^2 \quad \text{--- (1)} \\ \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies 4xy = -2xy \quad \text{--- (2)} \end{cases}$$

4. **求解方程组：** 由方程 (2) 得：

   $$6xy = 0 \implies x = 0 \text{ 或 } y = 0$$

   - 若 $x = 0$，代入 (1) 得：$2y^2 = 0 \implies y = 0$。
   - 若 $y = 0$，代入 (1) 得：$x^2 = 0 \implies x = 0$。

   所以，C-R 方程**仅在点** $(0,0)$ **处成立**。

5. **结论：**

   - $f(z)$ 仅在 $z = 0$ 处**可导**；
   - 因为在 $z=0$ 的任何邻域内都存在不满足 C-R 方程的点，所以 $f(z)$ 在整个复平面上**处处不解析**。

### 例题二：曲线可导与不解析的典型

**题目：** 求 $f(z) = 2x^3 + i 3y^3$ 在何处可导？何处解析？

**解：**

1. **实部与虚部：**

   $$u(x, y) = 2x^3, \qquad v(x, y) = 3y^3$$

2. **计算偏导数：**

   $$\frac{\partial u}{\partial x} = 6x^2, \qquad \frac{\partial u}{\partial y} = 0$$

   $$\frac{\partial v}{\partial x} = 0, \qquad \frac{\partial v}{\partial y} = 9y^2$$

3. **代入 C-R 方程组：**

   $$\begin{cases} 6x^2 = 9y^2 \implies 2x^2 = 3y^2 \implies \sqrt{2}x = \pm \sqrt{3}y \\ 0 = -0 \quad (\text{恒成立}) \end{cases}$$

4. **求解方程组：** 满足条件的点在两条直线上：

   $$\sqrt{2}x \pm \sqrt{3}y = 0$$

5. **结论：**

   - $f(z)$ 在两条直线 $\sqrt{2}x \pm \sqrt{3}y = 0$ 上**可导**；
   - 因为直线上任何点的任何邻域内都包含不在直线上的点（不满足 C-R 方程），所以 $f(z)$ 在整个复平面上**处处不解析**。

### 例题三：待定系数求解析函数 (高频考题 $\bigstar$)

**题目：** 已知函数 $f(z) = (my^3 + nx^2y) + i(lx^3 - 3xy^2)$ 在整个复平面内解析，求常数 $m, n, l$ 的值。

**解：**

1. **明确已知条件：** 函数在全平面解析 $\implies$ 全平面处处满足 C-R 方程。

2. **提取实部和虚部：**

   $$u(x, y) = my^3 + nx^2y$$

   $$v(x, y) = lx^3 - 3xy^2$$

3. **计算偏导数：**

   $$\frac{\partial u}{\partial x} = 2nxy, \qquad \frac{\partial u}{\partial y} = 3my^2 + nx^2$$

   $$\frac{\partial v}{\partial x} = 3lx^2 - 3y^2, \qquad \frac{\partial v}{\partial y} = -6xy$$

4. **利用 C-R 方程建立待定系数方程：**

   - 条件一：$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$

     $$2nxy = -6xy \implies 2n = -6 \implies n = -3$$

   - 条件二：$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$

     $$3my^2 + nx^2 = -(3lx^2 - 3y^2) = -3lx^2 + 3y^2$$

     对比等式两边 $x^2$ 和 $y^2$ 项的系数：

     $$\begin{cases} y^2\text{ 项系数：} 3m = 3 \implies m = 1 \\ x^2\text{ 项系数：} n = -3l \end{cases}$$

     将 $n = -3$ 代入 $n = -3l$：

     $$-3 = -3l \implies l = 1$$

5. **结论：** 当且仅当 $m=1, n=-3, l=1$ 时，该函数在全平面解析。

## 5. 补充：复偏导数与必要条件 (进阶视角)

在手写笔记的最后，提到了解析函数的另一个必要条件，我们可以用更现代、更高级的**复偏导数**（也称作 Wirtinger 导数）来理解它。

定义自变量 $z = x+iy$ 及其共轭 $\bar{z} = x-iy$。我们可以把 $f(z)$ 视作 $z$ 和 $\bar{z}$ 的函数：

$$\frac{\partial}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial}{\partial x} + i \frac{\partial}{\partial y} \right)$$

将 $f = u+iv$ 代入对 $\bar{z}$ 的偏导数中：

$$\frac{\partial f}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial}{\partial x} + i \frac{\partial}{\partial y} \right) (u + iv) = \frac{1}{2} \left[ \left(\frac{\partial u}{\partial x} - \frac{\partial v}{\partial y}\right) + i \left(\frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}\right) \right]$$

如果 $f(z)$ 满足 C-R 方程：

$$\frac{\partial u}{\partial x} - \frac{\partial v}{\partial y} = 0 \qquad \text{且} \qquad \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} = 0$$

我们会惊喜地发现：

$$\frac{\partial f}{\partial \bar{z}} = 0$$

> **物理/几何意义：** > 一个复变函数解析的本质，就是**它的表达式中不能显式地含有共轭变量** $\bar{z}$。函数必须是“纯粹”关于 $z$ 的函数。这就是为什么像 $f(z) = \bar{z}$， $f(z) = |z|^2 = z\bar{z}$ 这类含有 $\bar{z}$ 的函数在非零处均无法解析的底层原因。

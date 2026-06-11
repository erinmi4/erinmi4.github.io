---
title: "微积分-CH7-微分方程"
slug: "微积分-CH7-微分方程"
description: "微分方程从大类上分为一阶微分方程和二阶微分方程。"
pubDate: 2026-05-04
updatedDate: 2026-05-04
tags:
  - 修考
  - 微积分
  - 大阪大学
  - 东京大学
  - 微分方程
category: 修考
draft: false
heroImage: /images/posts/calculus-ch7-differential-equations/cover.png
---

- [Section 1.1 : Definitions](https://tutorial.math.lamar.edu/Classes/DE/Definitions.aspx)

https://gemini.google.com/app/4bbf17d603e8d276

- [【考研 高等数学 微分方程】_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9/?spm_id_from=333.337.search-card.all.click&vd_source=f6a1c5561b1c1e28133e4465302990f3)

- [7-1-2可分离变量的微分方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=2)

- [7-1-3齐次微分方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=3)

- [7-1-4一阶线性微分方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=4)

- [7-1-5伯努利方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=5)

- [7-1-6全微分方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=6)

- [7-1-7可降阶的微分方程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=7.)

- [7-1-8齐次—线性微分方程—解的结构_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=8)

- [7-1-9非齐次—线性微分方程解的结构_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=9)

  

![image-20260608141725110](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH7-%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B.assets/image-20260608141725110.png)



# 常微分方程核心笔记与典型题解

## 一、 微分方程的基本概念与分类

### 1.1 什么是微分方程？

- **定义**：含有未知函数、未知函数的导数（或微分）以及自变量之间关系的方程，称为**微分方程**。
- **求解目标**：寻找一个具体的函数关系 $y = f(x)$，使其代入方程后左右两端恒等。

### 1.2 微分方程的分类

根据未知函数的自变量个数和方程中未知函数及其导数的关系，微分方程可作如下分类：

#### 1) 按自变量个数分类

- **常微分方程 (Ordinary Differential Equation, ODE)**：未知函数为**一元函数**。

  - *示例*：$\frac{dy}{dx} = 2xy$

- **偏微分方程 (Partial Differential Equation, PDE)**：未知函数为**多元函数**，方程中含有偏导数。

  - *示例*：设 $u = u(x, y)$，则有偏微分方程：

    $$\frac{\partial u}{\partial x} + \frac{\partial u}{\partial y} = x + y$$

#### 2) 按线性与非线性分类

- **线性微分方程**：未知函数 $y$ 及其各阶导数 $y', y'', \dots, y^{(n)}$ 的次数均为**一次**，且它们的系数仅与自变量 $x$ 相关（或为常数）。
- **非线性微分方程**：未知函数或其导数的次数不为一次，或者存在它们相互相乘、求复合函数等非线性项。

> **💡 易错点拨 —— 阶（Order）与次数（Degree）的区别：**
>
> - **阶**：方程中未知函数导数的**最高阶数**。
> - **次数**：方程中最高阶导数的**最高幂次**。
> - 判定线性与否时，必须确保未知函数及其所有导数本身的指数均为 1，且不能有形如 $y \cdot y'$ 或 $\sin(y)$ 的非线性项。

### 1.3 典型判定例题

#### 【例题 1】判定方程 $y' + x^2 y = \sin x$ 的线性性。

- **解析**： 方程中未知函数 $y$ 和一阶导数 $y'$ 均为一次幂，且系数分别为 $x^2$ 和 $1$（仅与自变量 $x$ 有关）。
- **结论**：**一阶线性微分方程**。

#### 【例题 2】判定方程 $y'' + x (y')^2 - y = 1$ 的线性性。

- **解析**： 方程中含有一阶导数的平方项 $(y')^2$，其次数为二次，破坏了线性性质。
- **结论**：**二阶非线性微分方程**。

### 1.4 通解与特解

- **通解 (General Solution)**：
  - 对于一个 $n$ 阶微分方程，其解中含有 $n$ **个相互独立的基本任意常数** $C_1, C_2, \dots, C_n$，此解称为该方程的通解。
- **特解 (Particular Solution)**：
  - 通过给定的**初始条件**（例如 $y|_{x=x_0} = y_0$）确定了通解中任意常数的具体值后，所得到的解称为特解。

## 二、 一阶微分方程的经典类型与解法

在一阶常微分方程中，有五种最为经典的方程类型，它们的求解方法各具特色：

### 2.1 可分离变量的微分方程 (Separable ODEs)

#### 1) 标准形式

$$\frac{dy}{dx} = f(x)g(y)$$

#### 2) 求解方法

1. **分类讨论**：

   - **若** $g(y) \neq 0$：两边同除以 $g(y)$ 并乘 $dx$，将自变量与因变量完全剥离到等号两侧：

     $$\frac{1}{g(y)} dy = f(x) dx$$

     两边同时积分：

     $$\int \frac{1}{g(y)} dy = \int f(x) dx + C \implies G(y) = F(x) + C$$

   - **若存在** $y = y_0$ **使得** $g(y_0) = 0$： 直接代入原方程可知，常数函数 $y = y_0$ 也是方程的解。在写出最终通解时，需检查该特解是否已被包含在通解的常数中。

#### 3) 典型例题

##### 【例 1】求微分方程 $\frac{dy}{dx} = 2xy$ 的通解。

- **详细求解过程**：

  1. **若** $y \neq 0$： 分离变量得：

     $$\frac{1}{y} dy = 2x dx$$

     两边积分：

     $$\int \frac{1}{y} dy = \int 2x dx + C_1$$

     $$\ln|y| = x^2 + C_1 \implies |y| = e^{x^2 + C_1} = e^{C_1} \cdot e^{x^2}$$

     令 $C = \pm e^{C_1}$（此时 $C \neq 0$），则有：

     $$y = C e^{x^2} \quad (C \neq 0)$$

  2. **若** $y = 0$： 直接代入原微分方程：

     $$\text{左边} = \frac{d(0)}{dx} = 0, \quad \text{右边} = 2x \cdot 0 = 0$$

     左右两端相等，故定值常数函数 $y = 0$ 也是方程的一个解。

  3. **合并结论**： 允许常数 $C = 0$ 时，即可将 $y = 0$ 融入通解公式中。

- **最终通解**：

  $$y = C e^{x^2} \quad (C \in \mathbb{R})$$

##### 【例 2】求微分方程 $y dx + x^2 dy - 4 dy = 0$ 满足初始条件 $y|_{x=1} = 2$ 的特解。

- **详细求解过程**：

  1. **整理方程形式**：

     $$y dx + (x^2 - 4) dy = 0 \implies (x^2 - 4) dy = -y dx$$

  2. **分离变量（设** $y \neq 0$ **且** $x \neq \pm 2$**）**：

     $$\frac{1}{y} dy = -\frac{1}{x^2 - 4} dx = \frac{1}{4 - x^2} dx$$

  3. **两边进行积分**： 利用部分分式拆分法：$\frac{1}{4-x^2} = \frac{1}{(2-x)(2+x)} = \frac{1}{4}\left(\frac{1}{2-x} + \frac{1}{2+x}\right)$。

     $$\int \frac{1}{y} dy = \int \frac{1}{4}\left(\frac{1}{2-x} + \frac{1}{2+x}\right) dx$$

     $$\ln|y| = \frac{1}{4} \left( -\ln|2-x| + \ln|2+x| \right) + C_1$$

     $$\ln|y| = \frac{1}{4} \ln\left| \frac{2+x}{2-x} \right| + C_1$$

     两边取指数得：

     $$y = C \sqrt[4]{\left| \frac{2+x}{2-x} \right|}$$

  4. **代入初始条件求解常数** $C$： 当 $x=1, y=2$ 时，自变量区间在 $x \in (-2, 2)$ 内，去掉绝对值符号：

     $$2 = C \sqrt[4]{\frac{2+1}{2-1}} \implies 2 = C \sqrt[4]{3} \implies C = \frac{2}{\sqrt[4]{3}}$$

  5. **确定特解**： 将 $C$ 代入解中，并去掉对应区间内的绝对值：

     $$y = \frac{2}{\sqrt[4]{3}} \sqrt[4]{\frac{2+x}{2-x}} = 2 \sqrt[4]{\frac{2+x}{3(2-x)}}$$

- **最终特解**：

  $$y = 2 \left( \frac{2+x}{6-3x} \right)^{\frac{1}{4}}$$

### 2.2可化为变量分离方程

### 2.2.1 齐次微分方程 (Homogeneous ODEs)

#### 1) 标准形式

$$\frac{dy}{dx} = \varphi\left(\frac{y}{x}\right)$$

- **特点**：右端项中分子与分母的每一项代数幂次相同。例如：

  $$\frac{dy}{dx} = \frac{x^3 + x^2y + xy^2}{y^3}$$

  分子分母同除以 $x^3$ 后可化为关于 $\frac{y}{x}$ 的函数：

  $$\frac{dy}{dx} = \frac{1 + \frac{y}{x} + \left(\frac{y}{x}\right)^2}{\left(\frac{y}{x}\right)^3}$$

#### 2) 求解方法（换元法）

1. **引入新变量**：令 $u = \frac{y}{x}$，即 $y = ux$。

2. **求导代换**：

   $$dy = u dx + x du \implies \frac{dy}{dx} = u + x\frac{du}{dx}$$

3. **分离变量求解**： 将代换关系引入原方程：

   $$u + x\frac{du}{dx} = \varphi(u) \implies x\frac{du}{dx} = \varphi(u) - u$$

   若 $\varphi(u) - u \neq 0$，则：

   $$\frac{1}{\varphi(u) - u} du = \frac{1}{x} dx$$

   两边积分求出 $u(x)$ 后，用 $\frac{y}{x}$ 替换回 $u$。

#### 3) 典型例题

##### 【例 1】求方程 $(x^2 + y^2)dx - xy dy = 0$ 的通解。

- **详细求解过程**：

  1. **变形方程**：

     $$xy dy = (x^2 + y^2)dx \implies \frac{dy}{dx} = \frac{x^2 + y^2}{xy} = \frac{x}{y} + \frac{y}{x}$$

  2. **换元**： 令 $u = \frac{y}{x}$，则 $\frac{dy}{dx} = u + x\frac{du}{dx}$。 原方程变形为：

     $$u + x\frac{du}{dx} = \frac{1}{u} + u \implies x\frac{du}{dx} = \frac{1}{u}$$

  3. **分离变量与积分**：

     $$u du = \frac{1}{x} dx \implies \int u du = \int \frac{1}{x} dx$$

     $$\frac{1}{2}u^2 = \ln|x| + C$$

  4. **代回原变量**：

     $$\frac{1}{2}\left(\frac{y}{x}\right)^2 = \ln|x| + C$$

- **最终通解**：

  $$y^2 = 2x^2(\ln|x| + C)$$

##### 【例 2】求微分方程 $y' = \frac{x}{y} + \frac{y}{x}$ 满足初始条件 $y|_{x=1} = 2$ 的特解。

- **详细求解过程**：

  1. 根据【例 1】的推导，通解的隐式表达为：

     $$\frac{1}{2}\left(\frac{y}{x}\right)^2 = \ln|x| + C$$

  2. 代入初始条件 $x=1, y=2$：

     $$\frac{1}{2}\left(\frac{2}{1}\right)^2 = \ln|1| + C \implies 2 = 0 + C \implies C = 2$$

  3. 带回方程：

     $$\frac{1}{2}\left(\frac{y}{x}\right)^2 = \ln|x| + 2 \implies y^2 = 2x^2(\ln|x| + 2)$$

- **最终特解**：

  $$y = x\sqrt{2\ln|x| + 4} \quad (x > 0)$$

### 2.2.2 分式方程的变量替换法

在常微分方程中，形如：

$$\frac{dy}{dx} = \frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}$$

的方程称为**分式方程**（或一阶线性组合分式方程）。这类方程通常无法直接分离变量，但可以通过巧妙的**变量替换法**，将其转化为**可分离变量方程**或**齐次方程**来求解。

根据分子分母中两条直线 $a_1 x + b_1 y + c_1 = 0$ 与 $a_2 x + b_2 y + c_2 = 0$ 的几何关系（是否过原点、是否平行、是否相交），解法可分为以下**三种情况**：

#### 核心推导基础：复合函数求导

在进行齐次替换时，我们常令 $u = \frac{y}{x}$（即 $y = ux$）。 根据复合函数求导法则（前导后不导 + 后导前不导），对 $x$ 求导得：

$$\frac{dy}{dx} = \frac{d(ux)}{dx} = x \frac{du}{dx} + u$$

> **记忆口诀**：$\frac{dy}{dx} = x u' + u$。这是解决齐次方程的关键桥梁。

#### 第一类情况：$c_1 = c_2 = 0$（齐次方程）

##### 1. 理论说明

当常数项 $c_1$ 和 $c_2$ 均为 $0$ 时，方程退化为经典的**齐次微分方程**：

$$\frac{dy}{dx} = \frac{a_1 x + b_1 y}{a_2 x + b_2 y}$$

此时，分子分母同除以 $x$，即可化为关于 $\frac{y}{x}$ 的函数，进而通过令 $u = \frac{y}{x}$ 实现变量分离。

##### 2. 经典例题

**【例1】** 求解微分方程：

$$\frac{dy}{dx} = \frac{x - y}{x + y}$$

**【解析】**

- **Step 1：化为齐次式** 分子、分母同时除以 $x$：

  $$\frac{dy}{dx} = \frac{1 - \frac{y}{x}}{1 + \frac{y}{x}}$$

- **Step 2：变量代换** 令 $u = \frac{y}{x}$，则 $y = ux$，代入 $\frac{dy}{dx} = x \frac{du}{dx} + u$：

  $$x \frac{du}{dx} + u = \frac{1 - u}{1 + u}$$

  移项整理得：

  $$x \frac{du}{dx} = \frac{1 - u}{1 + u} - u = \frac{1 - 2u - u^2}{1 + u}$$

- **Step 3：变量分离与积分** 将变量分离：

  $$\frac{1 + u}{1 - 2u - u^2} du = \frac{1}{x} dx$$

  两边同时积分：

  $$\int \frac{1 + u}{1 - 2u - u^2} du = \int \frac{1}{x} dx$$

  注意到分母求导有 $d(1 - 2u - u^2) = (-2 - 2u)du = -2(1+u)du$，故左边凑微分：

  $$-\frac{1}{2} \int \frac{d(1 - 2u - u^2)}{1 - 2u - u^2} = \int \frac{1}{x} dx$$

  $$-\frac{1}{2} \ln|1 - 2u - u^2| = \ln|x| + \ln|C_1| \quad (C_1 > 0)$$

  两边同乘 $-2$，并利用对数性质化简：

  $$\ln|1 - 2u - u^2| = -2\ln|x| + \ln|C| = \ln\left|\frac{C}{x^2}\right|$$

  去对数得：

  $$1 - 2u - u^2 = \frac{C}{x^2}$$

  即：

  $$x^2 (1 - 2u - u^2) = C$$

- **Step 4：变量还原** 将 $u = \frac{y}{x}$ 代回上式：

  $$x^2 \left( 1 - 2\frac{y}{x} - \frac{y^2}{x^2} \right) = C$$

  展开整理，得到通解：

  $$x^2 - 2xy - y^2 = C$$

#### 第二类情况：$c_1, c_2$ 不全为 $0$，且 $\frac{a_1}{a_2} = \frac{b_1}{b_2}$（平行线情况）

##### 1. 理论说明

当 $\frac{a_1}{a_2} = \frac{b_1}{b_2}$ 时，说明分子与分母中的未知数线性部分成比例（几何上对应两条平行线）。 此时，我们可以把这个**共同的线性组合**整体设为新变量 $u$，从而直接化为可分离变量方程。

##### 2. 经典例题

**【例2】** 求解微分方程：

$$\frac{dy}{dx} = \frac{y - x + 1}{y - x + 5}$$

**【解析】**

- **Step 1：变量代换** 观察到分子分母中均含有共同的组合 $y - x$，故令：

  $$u = y - x \implies y = u + x$$

  两边对 $x$ 求导：

  $$\frac{dy}{dx} = \frac{du}{dx} + 1$$

- **Step 2：代入原方程并分离变量** 将代换关系代入原方程：

  $$\frac{du}{dx} + 1 = \frac{u + 1}{u + 5}$$

  移项得：

  $$\frac{du}{dx} = \frac{u + 1}{u + 5} - 1 = \frac{-4}{u + 5}$$

  分离变量：

  $$(u + 5) du = -4 dx$$

- **Step 3：积分求解** 两边积分：

  $$\int (u + 5) du = \int -4 dx$$

  $$\frac{1}{2} u^2 + 5u = -4x + C_1$$

  两边同乘 $2$，整理常数项（令 $C = 2C_1$）：

  $$u^2 + 10u = -8x + C$$

- **Step 4：还原变量** 将 $u = y - x$ 代回：

  $$(y - x)^2 + 10(y - x) = -8x + C$$

  展开并整理移项：

  $$(y - x)^2 + 10y - 2x = C$$

#### 第三类情况：$c_1, c_2$ 不全为 $0$，且 $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$（相交线情况）

##### 1. 理论说明与标准求解步骤（SOP）

当 $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ 时，对应平面上两条相交直线。 我们的核心思想是：**通过平移坐标轴，将坐标原点移动到这两条直线的交点** $(\alpha, \beta)$ **处，从而消去常数项** $c_1, c_2$**，将其转化为第一类（齐次方程）求解。**

##### 标准操作步骤（SOP）：

1. **求交点**：联立方程组，求出交点 $(\alpha, \beta)$：

   $$\begin{cases} a_1 x + b_1 y + c_1 = 0 \\ a_2 x + b_2 y + c_2 = 0 \end{cases} \implies \begin{cases} x = \alpha \\ y = \beta \end{cases}$$

2. **坐标平移变换**：令

   $$\begin{cases} x = X + \alpha \\ y = Y + \beta \end{cases} \implies \begin{cases} dX = dx \\ dY = dy \end{cases}$$

3. **代入原方程**：消去常数项，化为关于 $X, Y$ 的齐次方程：

   $$\frac{dY}{dX} = \frac{a_1 X + b_1 Y}{a_2 X + b_2 Y}$$

   按照**第一类情况**求出关于 $X, Y$ 的通解后，再将 $X = x - \alpha, Y = y - \beta$ 代回还原。

##### 2. 经典例题

**【例3】** 求解微分方程：

$$\frac{dy}{dx} = \frac{x - y + 1}{x + y - 3}$$

**【解析】**

- **Step 1：求交点** $(\alpha, \beta)$ 联立分子与分母对应的直线方程：

  $$\begin{cases} x - y + 1 = 0 \\ x + y - 3 = 0 \end{cases}$$

  两式相加得：$2x - 2 = 0 \implies x = 1$。 将 $x = 1$ 代入任意一式得：$y = 2$。 故交点为：

  $$(\alpha, \beta) = (1, 2)$$

- **Step 2：坐标变换** 引入新坐标系 $(X, Y)$，令：

  $$\begin{cases} x = X + 1 \\ y = Y + 2 \end{cases} \implies \begin{cases} dX = dx \\ dY = dy \end{cases}$$

- **Step 3：代入原方程化简** 由于常数项在交点变换下必然被消去，原方程化为：

  $$\frac{dY}{dX} = \frac{(X + 1) - (Y + 2) + 1}{(X + 1) + (Y + 2) - 3} = \frac{X - Y}{X + Y}$$

  观察发现，这与【例1】在形式上完全一致。

- **Step 4：借用齐次方程求解结果** 由【例1】的推导可知，方程 $\frac{dY}{dX} = \frac{X - Y}{X + Y}$ 的通解为：

  $$X^2 - 2XY - Y^2 = C$$

- **Step 5：还原为原变量** $x, y$ 将 $X = x - 1$，$Y = y - 2$ 代回通解公式中：

  $$(x - 1)^2 - 2(x - 1)(y - 2) - (y - 2)^2 = C$$

  *(此即为原微分方程的隐式通解)*

##### 💡 总结复习心法

| 类型         | 条件特征                               | 几何直观     | 变换秘籍                                                     | 变换后方程类型             |
| ------------ | -------------------------------------- | ------------ | ------------------------------------------------------------ | -------------------------- |
| **Type I**   | $c_1 = c_2 = 0$                        | 两线交于原点 | 令 $u = \frac{y}{x}$                                         | 可分离变量方程             |
| **Type II**  | $\frac{a_1}{a_2} = \frac{b_1}{b_2}$    | 两线平行     | 令 $u = a_1 x + b_1 y$                                       | 可分离变量方程             |
| **Type III** | $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$ | 两线相交     | 平移坐标 $\begin{cases} x = X + \alpha \\ y = Y + \beta \end{cases}$ | 先化为 **Type I** 齐次方程 |

### 2.3 一阶线性微分方程 (First-Order Linear ODEs)

一阶线性微分方程是考研和期末考试中的核心重难点，必须熟练掌握其推导过程和最终公式。

#### 1) 分类

- **齐次线性微分方程**：

  $$\frac{dy}{dx} + p(x)y = 0$$

- **非齐次线性微分方程**：

  $$\frac{dy}{dx} + p(x)y = Q(x)$$

#### 2) 齐次微分方程的解法

齐次方程本质是一个可分离变量方程：

$$\frac{1}{y} dy = -p(x) dx \implies \ln|y| = -\int p(x)dx + C_1 \implies y = C e^{-\int p(x)dx}$$

#### 3) 非齐次微分方程的解法 —— 常数变易法 (Variation of Parameters)

1. **设解的形式**： 受齐次解启发，将通解中的常数 $C$ 变易为关于 $x$ 的未知函数 $C(x)$：

   $$y = C(x) e^{-\int p(x)dx}$$

2. **两边求导**：

   $$y' = C'(x) e^{-\int p(x)dx} - C(x)p(x) e^{-\int p(x)dx}$$

3. **代入原非齐次方程** $y' + p(x)y = Q(x)$：

   $$\left[ C'(x) e^{-\int p(x)dx} - C(x)p(x) e^{-\int p(x)dx} \right] + p(x) \left[ C(x) e^{-\int p(x)dx} \right] = Q(x)$$

   项互相抵消，简化为：

   $$C'(x) e^{-\int p(x)dx} = Q(x) \implies C'(x) = Q(x)e^{\int p(x)dx}$$

4. **积分求** $C(x)$：

   $$C(x) = \int Q(x) e^{\int p(x)dx} dx + C$$

5. **代回原式，得到通用通解公式（必须牢记！）**：

   $$y = \left[ \int Q(x) e^{\int p(x)dx} dx + C \right] e^{-\int p(x)dx}$$

#### 4) 典型例题

##### 【例题】求解方程 $\frac{dy}{dx} + 2xy = 4x$。

- **详细求解过程**： 这里对照标准形式，有 $p(x) = 2x, Q(x) = 4x$。

  1. **计算辅助积分**：

     $$\int p(x)dx = \int 2x dx = x^2$$

  2. **套用通解公式**：

     $$y = e^{-x^2} \left[ \int 4x e^{x^2} dx + C \right]$$

  3. **计算括号内的不定积分**： 令 $t = x^2$，则 $dt = 2xdx$：

     $$\int 4x e^{x^2} dx = 2 \int e^t dt = 2e^t = 2e^{x^2}$$

  4. **整理化简**：

     $$y = e^{-x^2} \left[ 2e^{x^2} + C \right] = 2 + Ce^{-x^2}$$

- **最终通解**：

  $$y = 2 + Ce^{-x^2}$$

### 2.4 伯努利方程 (Bernoulli Equations)

#### 1) 标准形式

$$\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0, 1)$$

- **特点**：比标准一阶非齐次方程在右端项多乘了一个未知函数的幂次 $y^n$。

#### 2) 求解方法（降阶转化为线性微分方程）

1. **方程两端同乘以** $y^{-n}$：

   $$y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$$

2. **引入新替换变量**： 令 $z = y^{1-n}$。

3. **求导关系代换**：

   $$\frac{dz}{dx} = (1-n)y^{-n}\frac{dy}{dx} \implies y^{-n}\frac{dy}{dx} = \frac{1}{1-n}\frac{dz}{dx}$$

4. **代入原式化为标准线性方程**：

   $$\frac{1}{1-n}\frac{dz}{dx} + P(x)z = Q(x) \implies \frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)$$

   此方程已转变为关于 $z$ 的一阶标准线性微分方程，可用 2.3 节的公式求解，最后由 $y = z^{\frac{1}{1-n}}$ 代回原变量。

> **⚠️ 注意事项**：在变形时，一定要保证一阶导数项 $\frac{dz}{dx}$ 的系数整理为 1。

#### 3) 典型例题

##### 【例题】求微分方程 $xy' + 2y = 3x^3 y^{\frac{4}{3}}$ 的通解。

- **详细求解过程**：

  1. **标准化**（同除以 $x$，使 $y'$ 系数为 1）：

     $$y' + \frac{2}{x}y = 3x^2 y^{\frac{4}{3}}$$

     这是一个 $n = \frac{4}{3}$ 的伯努利方程。

  2. **同乘以** $y^{-\frac{4}{3}}$：

     $$y^{-\frac{4}{3}}y' + \frac{2}{x}y^{-\frac{1}{3}} = 3x^2$$

  3. **变量代换**： 令 $z = y^{1 - \frac{4}{3}} = y^{-\frac{1}{3}}$，则有：

     $$\frac{dz}{dx} = -\frac{1}{3}y^{-\frac{4}{3}}y' \implies y^{-\frac{4}{3}}y' = -3\frac{dz}{dx}$$

  4. **代入整理**：

     $$-3\frac{dz}{dx} + \frac{2}{x}z = 3x^2 \implies \frac{dz}{dx} - \frac{2}{3x}z = -x^2$$

     此时，关于 $z$ 的线性方程中 $P_z(x) = -\frac{2}{3x}, Q_z(x) = -x^2$。

  5. **计算该线性微分方程的解**： 辅助积分：$\int P_z(x)dx = -\frac{2}{3}\ln|x| \implies e^{\int P_z(x)dx} = x^{-\frac{2}{3}}$（此处不妨设 $x > 0$）。

     $$z = x^{\frac{2}{3}} \left[ \int -x^2 \cdot x^{-\frac{2}{3}} dx + C \right]$$

     $$z = x^{\frac{2}{3}} \left[ -\int x^{\frac{4}{3}} dx + C \right]$$

     $$z = x^{\frac{2}{3}} \left[ -\frac{3}{7} x^{\frac{7}{3}} + C \right] = -\frac{3}{7} x^3 + C x^{\frac{2}{3}}$$

  6. **代回原未知量**： 由于 $z = y^{-\frac{1}{3}}$，则有：

     $$y^{-\frac{1}{3}} = C x^{\frac{2}{3}} - \frac{3}{7} x^3$$

- **最终通解**：

  $$y = \left( C x^{\frac{2}{3}} - \frac{3}{7} x^3 \right)^{-3}$$

### 2.5 全微分方程 (Exact Differential Equations)

#### 1) 标准形式

$$P(x, y)dx + Q(x, y)dy = 0$$

#### 2) 全微分条件判定（恰当性判定）

如果存在一个二元函数 $u(x, y)$ 使得其全微分为：

$$du(x, y) = P(x, y)dx + Q(x, y)dy$$

那么，方程的通解就可以直接表达为：

$$u(x, y) = C$$

由于 $du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy$，所以有关系式：

$$P(x,y) = \frac{\partial u}{\partial x}, \quad Q(x,y) = \frac{\partial u}{\partial y}$$

根据偏导数性质（在混合偏导数连续时，求导顺序可交换）：

$$\frac{\partial^2 u}{\partial y \partial x} = \frac{\partial^2 u}{\partial x \partial y} \implies \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$

- **结论**：方程为全微分方程的**充要条件**是：

  $$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$

#### 3) 求解方法（偏积分法 / 偏导数还原法）

1. **对** $P(x,y)$ **关于** $x$ **进行偏积分**（将 $y$ 暂时看作常数）：

   $$u(x, y) = \int P(x, y)dx + \psi(y)$$

   *其中* $\psi(y)$ *是仅与* $y$ *相关的待定积分项*。

2. **利用对** $y$ **的偏导数求出** $\psi(y)$：

   $$\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}\left( \int P(x, y)dx \right) + \psi'(y) = Q(x, y)$$

   由此可解得 $\psi'(y)$，并积分求得 $\psi(y)$。

3. **写出通解**：

   $$u(x, y) = C$$

#### 4) 典型例题

##### 【例题】求解方程 $xy \cdot dx + \left(\frac{x^2}{2} + \frac{1}{y}\right)dy = 0$。

- **详细求解过程**：

  1. **全微分判定**：

     $$P(x, y) = xy \implies \frac{\partial P}{\partial y} = x$$

     $$Q(x, y) = \frac{x^2}{2} + \frac{1}{y} \implies \frac{\partial Q}{\partial x} = x$$

     因为 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$，故此方程为**全微分方程**。

  2. **偏积分求解原函数** $u(x,y)$：

     $$u(x, y) = \int P(x, y) dx + \psi(y) = \int xy dx + \psi(y) = \frac{1}{2}x^2y + \psi(y)$$

  3. **利用** $Q(x,y)$ **确定** $\psi(y)$：

     $$\frac{\partial u}{\partial y} = \frac{1}{2}x^2 + \psi'(y)$$

     令其等于 $Q(x, y)$：

     $$\frac{1}{2}x^2 + \psi'(y) = \frac{x^2}{2} + \frac{1}{y} \implies \psi'(y) = \frac{1}{y}$$

     积分得到：

     $$\psi(y) = \ln|y|$$

  4. **合成通解**：

     $$u(x, y) = \frac{1}{2}x^2y + \ln|y|$$

- **最终通解**：

  $$\frac{1}{2}x^2y + \ln|y| = C$$


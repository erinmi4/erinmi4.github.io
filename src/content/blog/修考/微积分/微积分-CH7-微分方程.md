---
title: "微积分-CH7-微分方程"
slug: "微积分-CH7-微分方程"
description: "微分方程从大类上分为一阶微分方程和二阶微分方程。"
pubDate: 2026-05-04
updatedDate: 2026-05-04
tags:
  - 修考
  - 微积分
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
- [7-1-10二阶常系数齐次微分方程求解_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=10)
- [7-1-11二阶常系数线性微分方程—类型一_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=11)
- [7-1-12二阶常系数非齐次方程求解—类型二_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Lg411A7T9?spm_id_from=333.788.videopod.episodes&vd_source=f6a1c5561b1c1e28133e4465302990f3&p=12)

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

### 2.2 齐次微分方程 (Homogeneous ODEs)

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

# 高阶微分方程核心笔记 (整理与润色版)

## 引言：为什么研究高阶微分方程？

在实际物理与工程问题中，许多系统不仅与状态的变化率（一阶导数）相关，还与变化率的变化（如加速度、振动等二阶或更高阶导数）密切相关。 然而，任意的高阶微分方程一般难以求出解析通解。因此，我们的核心策略是：

1. **对于一般高阶方程**：寻找特定的结构，通过变量代换将其化为低阶方程求解（即**降阶法**）。
2. **对于线性高阶方程**：利用**解的线性叠加原理**与**特征方程法**，实现标准化、代数化的求解。

# 第一部分：可降阶的高阶微分方程

对于某些特殊的高阶微分方程，其方程中不显含某些变量，可以通过变量代换（作变换）降低其阶数，从而转化为一阶微分方程来求解。

我们主要研究以下三种标准类型：

$$\begin{cases}  y^{(n)} = f(x) & \text{—— 特点：仅含自变量 } x \text{ 和 } n \text{ 阶导数} \\  y'' = f(x, y') & \text{—— 特点：不显含未知函数 } y \\  y'' = f(y, y') & \text{—— 特点：不显含自变量 } x  \end{cases}$$

### 类型一：$y^{(n)} = f(x)$

- **求解 SOP (标准步骤)**： 这类方程最简单，由于右端仅仅是自变量 $x$ 的函数，我们只需要**对两端进行反复积分** $n$ **次**即可得到通解。

#### 【例题 1】求 $y''' = 2x$ 的通解。

**【解析】** 这是一个 $n=3$ 的类型一方程，我们对等式两端连续进行三次积分：

1. **第一次积分**：

   $$y'' = \int 2x \, dx = x^2 + C_1$$

2. **第二次积分**：

   $$y' = \int (x^2 + C_1) \, dx = \frac{1}{3}x^3 + C_1x + C_2$$

3. **第三次积分**：

   $$y = \int \left(\frac{1}{3}x^3 + C_1x + C_2\right) \, dx = \frac{1}{12}x^4 + \frac{C_1}{2}x^2 + C_2x + C_3$$

为了使通解形式更加清爽，我们可以将任意常数 $\frac{C_1}{2}$ 重新记为新的任意常数 $C_1$（这在微分方程中是标准操作）：

$$y = \frac{1}{12}x^4 + C_1x^2 + C_2x + C_3 \quad (C_1, C_2, C_3 \text{ 为任意常数})$$

### 类型二：$y'' = f(x, y')$（不显含 $y$）

- **求解 SOP (标准步骤)**：

  1. **作变换**：令 $y' = p(x)$，则二阶导数 $y'' = p'$。

  2. **代入原方程**：得到关于 $x, p$ 的一阶微分方程：

     $$p' = f(x, p)$$

  3. **求解一阶方程**：求出 $p$ 的通解：

     $$p = y' = \varphi(x, C_1)$$

  4. **二次积分**：再对 $x$ 积分一次，即得原方程通解：

     $$y = \int \varphi(x, C_1) \, dx + C_2$$

#### 【例题 2】求 $xy'' - y' = x^2$ 的通解。

**【解析】** 方程中不显含 $y$，属于类型二。

1. **变量代换**： 令 $y' = p(x)$，则 $y'' = p'$。代入方程得：

   $$x p' - p = x^2$$

2. **化为一阶标准线性方程**（两端同除以 $x$，设 $x > 0$）：

   $$p' - \frac{1}{x} p = x$$

3. **使用一阶非齐次线性方程通解公式**： 这里 $P(x) = -\frac{1}{x}$，$Q(x) = x$。 积分因子为：

   $$\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln x} = \frac{1}{x}$$

   两端同乘 $\mu(x)$ 得：

   $$\left( \frac{p}{x} \right)' = 1 \implies \frac{p}{x} = x + C_1 \implies p = x^2 + C_1x$$

4. **还原并积分**：

   $$y' = x^2 + C_1x$$

   对两端积分：

   $$y = \int (x^2 + C_1x) \, dx = \frac{1}{3}x^3 + \frac{C_1}{2}x^2 + C_2$$

   吸收常数 $\frac{C_1}{2} \to C_1$，最终通解为：

   $$y = \frac{1}{3}x^3 + C_1x^2 + C_2 \quad (C_1, C_2 \text{ 为任意常数})$$

### 类型三：$y'' = f(y, y')$（不显含 $x$）

- **求解 SOP (标准步骤)**：

  1. **作变换**：令 $y' = p$。由于方程不含自变量 $x$，我们**将** $p$ **看作** $y$ **的函数**，即 $p = p(y)$。

  2. **利用链式法则表示二阶导数**：

     $$y'' = \frac{dp}{dx} = \frac{dp}{dy} \cdot \frac{dy}{dx} = p \frac{dp}{dy}$$

  3. **代入原方程**：转化为关于 $y, p$ 的一阶微分方程：

     $$p \frac{dp}{dy} = f(y, p)$$

  4. **分离变量求解**：解出 $p = \varphi(y, C_1)$。

  5. **二次积分**：由 $\frac{dy}{dx} = \varphi(y, C_1)$，分离变量得 $\frac{dy}{\varphi(y, C_1)} = dx$，两端积分即可得到隐式通解。

#### 【例题 3】求 $y y'' - (y')^2 = 0$ 的通解。

**【解析】** 方程不显含 $x$，属于类型三。

1. **变量代换**： 令 $y' = p$，则 $y'' = p \frac{dp}{dy}$。代入原方程：

   $$y \left( p \frac{dp}{dy} \right) - p^2 = 0 \implies p \left( y \frac{dp}{dy} - p \right) = 0$$

2. **分情况讨论**：

   - **情况 A**：若 $p = 0 \implies y' = 0 \implies y = C$（常数解）。

   - **情况 B**：若 $p \neq 0$，则：

     $$y \frac{dp}{dy} = p \implies \frac{dp}{p} = \frac{dy}{y}$$

     两端积分得：

     $$\ln|p| = \ln|y| + \bar{C}_1 \implies p = C_1 y \quad (C_1 \neq 0)$$

3. **还原并积分**：

   $$y' = C_1 y \implies \frac{dy}{y} = C_1 dx$$

   两端积分：

   $$\ln|y| = C_1 x + \bar{C}_2 \implies y = C_2 e^{C_1 x} \quad (C_2 \neq 0)$$

   *注：当* $C_2 = 0$ *时，该式表示* $y = 0$*，已包含在情况 A 中；当* $C_1 = 0$ *时，该式表示* $y = C_2$*，亦为常数解。* 因此，原方程的完整通解可统一写为：

   $$y = C_2 e^{C_1 x} \quad (C_1, C_2 \text{ 为任意常数})$$

# 第二部分：高阶线性微分方程解的结构

> **承上启下**：对于可降阶的微分方程，我们依赖于各种巧妙的代换。但对于更为普遍的“线性”微分方程，我们可以直接利用**线性空间与算子叠加原理**来建立极其精美的解结构。这与线性代数中“非齐次线性方程组的通解 = 齐次通解 + 非齐次特解”的原理完全一致。

二阶线性微分方程的标准形式：

- **齐次 (Homogeneous) 方程**：

  $$y'' + P(x)y' + Q(x)y = 0 \quad \text{—— 右端项为 } 0$$

- **非齐次 (Non-homogeneous) 方程**：

  $$y'' + P(x)y' + Q(x)y = f(x) \quad \text{—— 右端项不为 } 0$$

### 一、齐次线性方程解的结构

#### 【性质 1】(线性叠加性)

若 $y_1(x), y_2(x)$ 是齐次方程的两个解，则它们的任意线性组合：

$$y = C_1 y_1(x) + C_2 y_2(x)$$

也一定是该齐次方程的解。

- **注意**：这不一定是通解，除非 $y_1, y_2$ 满足**线性无关**的条件。

#### 【性质 2】(通解结构定理)

若 $y_1(x), y_2(x)$ 是齐次微分方程的两个**线性无关**的特解，则该方程的通解为：

$$y = C_1 y_1 + C_2 y_2 \quad (C_1, C_2 \text{ 为独立常数})$$

### 核心概念：函数的线性相关与无关性

#### 1. 严格定义

设 $y_1, y_2, \dots, y_n$ 是区间 $I$ 上的 $n$ 个函数。

- 如果存在一组**不全为零**的常数 $k_1, k_2, \dots, k_n$，使得在区间 $I$ 上恒有：

  $$k_1 y_1 + k_2 y_2 + \dots + k_n y_n \equiv 0$$

  则称这 $n$ 个函数在区间 $I$ 上**线性相关** (Linearly Dependent)。

- 反之，若上述等式成立当且仅当 $k_1 = k_2 = \dots = k_n = 0$，则称它们**线性无关** (Linearly Independent)。

#### 2. 双函数判定的简便方法

对于**两个**函数 $y_1, y_2$，它们线性相关的充分必要条件是：**比值为常数**。

$$\frac{y_2}{y_1} \equiv C \implies \text{相关} ； \quad \frac{y_2}{y_1} \neq \text{常数} \implies \text{无关}$$

#### 3. 补充工具：沃伦斯基行列式 (Wronskian)

对于区间 $I$ 上的可导函数 $y_1, y_2$，其 Wronskian 定义为：

$$W(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'$$

- 若 $W(x) \neq 0$，则 $y_1, y_2$ **线性无关**。

#### 【例题 4】判定下列函数组的线性相关性：

1. $\{e^x, 2e^x, \sin x\}$
   - **分析**：由于 $2 \cdot (e^x) - 1 \cdot (2e^x) + 0 \cdot \sin x \equiv 0$。
   - **常数系数**：$k_1 = 2, k_2 = -1, k_3 = 0$（不全为零）。
   - **结论**：**线性相关**。
2. $\{\sin^2 x, \cos^2 x, 1\}$
   - **分析**：利用三角恒等式：$1 \cdot \sin^2 x + 1 \cdot \cos^2 x - 1 \cdot 1 \equiv 0$。
   - **常数系数**：$k_1 = 1, k_2 = 1, k_3 = -1$（不全为零）。
   - **结论**：**线性相关**。
3. $\{1, x, x^2\}$
   - **分析**：设 $k_1 \cdot 1 + k_2 x + k_3 x^2 \equiv 0$。此多项式要在区间上恒为0，必须各项系数都为 0。
   - **结论**：**线性无关**。
4. $\{e^x, e^{2x}\}$
   - **分析**：计算其比值：$\frac{e^{2x}}{e^x} = e^x \neq \text{常数}$。
   - **结论**：**线性无关**。

### 二、非齐次线性方程解的结构与叠加原理

#### 【性质 3】(非齐次通解结构)

非齐次线性微分方程的通解 $y$ 等于其**对应齐次方程的通解** $Y$ 与其**自身的一个特解** $y^*$ 之和：

$$y = Y + y^* = C_1 y_1 + C_2 y_2 + y^*$$

#### 【性质 4 & 性质 5】(解的叠加原理)

设 $y_1^*$ 是 $y'' + P(x)y' + Q(x)y = f_1(x)$ 的解， $y_2^*$ 是 $y'' + P(x)y' + Q(x)y = f_2(x)$ 的解， 则 $y_1^* + y_2^*$ 必然是方程：

$$y'' + P(x)y' + Q(x)y = f_1(x) + f_2(x)$$

的特解。

# 第三部分：二阶常系数齐次线性微分方程的求解

> **承上启下**：有了“找到两个线性无关特解即可写出通解”的结构定理。那么如何具体求出这两个特解呢？对于常系数方程，有一个极度高效的代数化方法。

二阶常系数齐次线性微分方程形式：

$$y'' + p y' + q y = 0 \quad (p, q \text{ 为常数})$$

### 1. 核心启发：特征方程的引入

一阶方程 $y' + k y = 0$ 的解为指数形式 $y = e^{-kx}$。这启发我们猜测二阶常系数方程也具有指数形式解。 设特解为 $y = e^{rx}$（$r$ 为待定常数），则：

$$y' = r e^{rx}, \quad y'' = r^2 e^{rx}$$

代入原方程得：

$$(r^2 + pr + q) e^{rx} = 0$$

由于 $e^{rx} \neq 0$，我们得到一个一元二次方程，称为微分方程的**特征方程**：

$$r^2 + p r + q = 0$$

### 2. 特征根的三种情况与通解对照表

设判别式为 $\Delta = p^2 - 4q$。特征根为 $r_{1,2} = \frac{-p \pm \sqrt{p^2 - 4q}}{2}$：

| 判别式情况   | 特征根的性质                               | 两个线性无关特解 $y_1, y_2$                                  | 齐次微分方程通解 $y$                                   |
| ------------ | ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------ |
| $\Delta > 0$ | 两个不相等的实根 $r_1 \neq r_2$            | $y_1 = e^{r_1 x}, \ y_2 = e^{r_2 x}$                         | $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$                    |
| $\Delta = 0$ | 两个相等的重实根 $r_1 = r_2$               | $y_1 = e^{r_1 x}, \ y_2 = x e^{r_1 x}$                       | $y = (C_1 + C_2 x) e^{r_1 x}$                          |
| $\Delta < 0$ | 一对共轭复根 $r_{1,2} = \alpha \pm i\beta$ | $y_1 = e^{\alpha x} \cos\beta x, \ y_2 = e^{\alpha x} \sin\beta x$ | $y = e^{\alpha x} (C_1 \cos\beta x + C_2 \sin\beta x)$ |

*注：第三种情况中* $\alpha = -\frac{p}{2}$*，*$\beta = \frac{\sqrt{4q-p^2}}{2}$*。其基底特解通过欧拉公式* $e^{i\theta} = \cos\theta + i\sin\theta$ *转化为了实数函数形式。*

#### 【例题 5】求 $y'' - 2y' - 3y = 0$ 的通解。

**【解析】**

1. **写出特征方程**：

   $$r^2 - 2r - 3 = 0 \implies (r-3)(r+1) = 0$$

2. **求解特征根**：

   $$r_1 = 3, \quad r_2 = -1 \quad (\Delta > 0, \text{ 实相异根})$$

3. **写出通解**：

   $$y = C_1 e^{3x} + C_2 e^{-x}$$

#### 【例题 6】求 $y'' - 2y' + 5y = 0$ 的通解。

**【解析】**

1. **写出特征方程**：

   $$r^2 - 2r + 5 = 0$$

2. **求解特征根**：

   $$\Delta = (-2)^2 - 4(1)(5) = -16 < 0$$

   $$r_{1,2} = \frac{2 \pm 4i}{2} = 1 \pm 2i \implies \text{实部 } \alpha = 1, \text{ 虚部 } \beta = 2$$

3. **写出通解**：

   $$y = e^x (C_1 \cos 2x + C_2 \sin 2x)$$

# 第四部分：二阶常系数非齐次方程特解的确定

> **承上启下**：有了非齐次方程通解结构 $y = Y + y^*$，已知齐次通解 $Y$ 的求法后，本节的关键任务就是求出**非齐次特解** $y^*$。我们采用**待定系数法 (Method of Undetermined Coefficients)**。

根据自由项 $f(x)$ 的类型，主要有两种特解设定规则：

### 类型一：$f(x) = e^{\lambda x} P_n(x)$

（其中 $P_n(x)$ 是关于 $x$ 的 $n$ 次多项式）

- **特解设定公式**：

  $$y^* = x^k e^{\lambda x} Q_n(x)$$

  - $Q_n(x)$ 为与 $P_n(x)$ **同次数的待定系数多项式**：

    $$Q_n(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$$

  - $k$**（重根指数）** 的取值规则：

    $$k = \begin{cases}  0 & \lambda \text{ 不是特征根 (即 } \lambda \neq r_1, r_2 \text{)} \\  1 & \lambda \text{ 是单特征根 (即 } \lambda = r_1 \text{ 或 } r_2, \text{ 且 } r_1 \neq r_2 \text{)} \\  2 & \lambda \text{ 是重特征根 (即 } \lambda = r_1 = r_2 \text{)}  \end{cases}$$

#### 【例题 7】求 $2y'' + y' - y = 2e^x$ 的通解。

**【解析】**

1. **第一步：求对应齐次方程的通解** $Y$：

   $$2y'' + y' - y = 0 \implies 2r^2 + r - 1 = 0 \implies (2r-1)(r+1) = 0$$

   特征根为：$r_1 = \frac{1}{2}, \ r_2 = -1$。 齐次通解为：

   $$Y = C_1 e^{\frac{1}{2}x} + C_2 e^{-x}$$

2. **第二步：确定非齐次特解** $y^*$ **的形式**： 自由项 $f(x) = 2e^x \implies \lambda = 1, \ P_0(x) = 2$ (0 次多项式)。

   - **根的比较**：由于 $\lambda = 1$ 不是特征根（$1 \neq \frac{1}{2}$ 且 $1 \neq -1$），故 $k = 0$。
   - **特解形式**：设 $y^* = C e^x$。

3. **第三步：代入确定系数** $C$：

   $$(y^*)' = C e^x, \quad (y^*)'' = C e^x$$

   代入原方程 $2y'' + y' - y = 2e^x$ 得：

   $$2(C e^x) + C e^x - C e^x = 2e^x \implies 2C e^x = 2e^x \implies C = 1$$

   所以特解为：$y^* = e^x$。

4. **第四步：写出原非齐次方程通解**：

   $$y = Y + y^* = C_1 e^{\frac{1}{2}x} + C_2 e^{-x} + e^x$$

#### 【例题 8】求 $y'' - 5y' + 6y = x e^{2x}$ 的通解。

**【解析】**

1. **求齐次通解** $Y$： 特征方程 $r^2 - 5r + 6 = 0 \implies (r-2)(r-3) = 0$。 特征根 $r_1 = 2, \ r_2 = 3$。 齐次通解为：

   $$Y = C_1 e^{2x} + C_2 e^{3x}$$

2. **确定非齐次特解** $y^*$ **形式**： 自由项 $f(x) = x e^{2x} \implies \lambda = 2, \ P_1(x) = x$ (1 次多项式)。

   - **根的比较**：$\lambda = 2$ 是微分方程的**单特征根**，因此重根指数 $k = 1$。

   - **特解形式**：

     $$y^* = x^1 e^{2x} (ax + b) = e^{2x} (ax^2 + bx)$$

3. **求导并代入确定系数** $a, b$： 计算 $y^*$ 的一阶、二阶导数：

   $$(y^*)' = e^{2x}(2ax + b) + 2e^{2x}(ax^2 + bx) = e^{2x}\left[2ax^2 + (2a+2b)x + b\right]$$

   $$(y^*)'' = 2e^{2x}\left[2ax^2 + (2a+2b)x + b\right] + e^{2x}\left[4ax + 2a + 2b\right] = e^{2x}\left[4ax^2 + (8a+4b)x + 2a+4b\right]$$

   将它们代入非齐次方程 $y'' - 5y' + 6y = x e^{2x}$：

   $$e^{2x}\left[4ax^2 + (8a+4b)x + 2a+4b\right] - 5e^{2x}\left[2ax^2 + (2a+2b)x + b\right] + 6e^{2x}(ax^2+bx) = xe^{2x}$$

   两端同消去 $e^{2x}$，合并同类项：

   $$(4a - 10a + 6a)x^2 + (8a+4b - 10a - 10b + 6b)x + (2a+4b - 5b) = x$$

   简化为：

   $$-2a x + (2a - b) = x$$

   系数对应相等，得到联立方程组：

   $$\begin{cases} -2a = 1 \\ 2a - b = 0 \end{cases} \implies a = -\frac{1}{2}, \quad b = -1$$

   因此，特解为：

   $$y^* = e^{2x} \left( -\frac{1}{2}x^2 - x \right)$$

4. **写出完整通解**：

   $$y = Y + y^* = C_1 e^{2x} + C_2 e^{3x} - e^{2x} \left( \frac{1}{2}x^2 + x \right)$$

### 类型二：$f(x) = e^{\lambda x} [P_n(x)\sin \omega x + P_l(x)\cos \omega x]$

- **特解设定公式**：

  $$y^* = x^k e^{\lambda x} [Q_m(x)\sin \omega x + R_m(x)\cos \omega x]$$

  - $m$：设为两项中最高的阶数：$m = \max(n, l)$。

  - $Q_m(x), R_m(x)$：同为 $m$ 次的待定系数多项式。

  - $k$**（重根指数）** 判定规则：

    $$k = \begin{cases}  0 & \lambda \pm i\omega \text{ 不是特征根} \\  1 & \lambda \pm i\omega \text{ 是特征根}  \end{cases}$$

#### 【例题 9】求 $y'' - 2y' + 5y = \cos x$ 的通解。

> 💡 **修正提示**：手写笔记在最后一页此题计算中，其特解结果系数符号存在微小笔误（错把 $\sin x$ 系数写正、$\cos x$ 系数写负）。在此我们给出最严谨的正确步骤推导：

**【解析】**

1. **求齐次方程通解** $Y$： 特征方程为 $r^2 - 2r + 5 = 0 \implies r_{1,2} = 1 \pm 2i$。 齐次通解为：

   $$Y = e^x (C_1 \cos 2x + C_2 \sin 2x)$$

2. **确定特解形式** $y^*$： 自由项 $f(x) = \cos x \implies \lambda = 0, \ \omega = 1$。

   - **复根比对**：$\lambda + i\omega = 0 + i = i$，它不等于特征根 $1 \pm 2i$，所以 $k = 0$。

   - **特解形式**：$m = \max(0,0) = 0$（常数系数）。设特解形式为：

     $$y^* = a\cos x + b\sin x$$

3. **求导并代入原方程**：

   $$(y^*)' = -a\sin x + b\cos x$$

   $$(y^*)'' = -a\cos x - b\sin x$$

   代入原方程 $y'' - 2y' + 5y = \cos x$：

   $$(-a\cos x - b\sin x) - 2(-a\sin x + b\cos x) + 5(a\cos x + b\sin x) = \cos x$$

   整理合并 $\cos x$ 和 $\sin x$ 的同类项：

   $$(4a - 2b)\cos x + (2a + 4b)\sin x = \cos x$$

   建立方程组：

   $$\begin{cases} 4a - 2b = 1 \\ 2a + 4b = 0 \end{cases}$$

   由第二式得 $a = -2b$，代入第一式得：

   $$4(-2b) - 2b = 1 \implies -10b = 1 \implies b = -\frac{1}{10}$$

   进而求得：

   $$a = \frac{1}{5}$$

   所以，正确的特解为：

   $$y^* = \frac{1}{5}\cos x - \frac{1}{10}\sin x$$

4. **原微分方程通解**：

   $$y = Y + y^* = e^x (C_1 \cos 2x + C_2 \sin 2x) + \frac{1}{5}\cos x - \frac{1}{10}\sin x$$

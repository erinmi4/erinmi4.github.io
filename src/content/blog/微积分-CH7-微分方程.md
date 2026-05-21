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
[TOC]
<iframe src="https://drive.google.com/file/d/15NJcGlSc1ICiUh9A3HpmB-ibwseRpr3A/preview" width="640" height="480"></iframe>

- [Section 1.1 : Definitions](https://tutorial.math.lamar.edu/Classes/DE/Definitions.aspx)



<iframe src="https://drive.google.com/file/d/1Nb6qV7uXlGi1cY7VHmI809apAUAdBvdH/preview" width="840" height="480"></iframe>

<iframe src="https://drive.google.com/file/d/15NBqpR8CaXULN28PhNlMCMgWCPIK-7O2/preview" width="840" height="480"></iframe>



# 微分方程题型分类与求解指南

## 核心概念：什么是微分方程？

微分方程的核心价值在于：当我们已知一个未知函数 $y(x)$ 的变化率规律（即导数关系）时，通过建立方程、积分求解来还原出原函数 $y(x)$ 的具体表达式。

> **经典物理引入：牛顿冷却定律**
>
> - **问题背景**：室温恒定为 $25^\circ\text{C}$。在 $t=0$ 时，水温 $T=70^\circ\text{C}$。求水温 $T$ 随时间 $t$ 的变化规律 $T(t)$。
>
> - **建立方程**：根据“温差越大，冷却越快”，变化率与温差成正比：
>
>   $$\frac{dT}{dt} = -k(T - 25) \quad (k > 0)$$
>
> - **求解目的**：通过已知的导数关系 $\frac{dT}{dt}$，求解出未知的温度函数 $T(t)$。

## 一阶线性判定：“三不许”原则

一个关于未知函数 $y$ 的微分方程若要被称为**线性微分方程**，必须对 $y$ 及其各阶导数满足以下三个“不许”原则（自变量 $x$ 无限制）：

1. **不许相乘**：$y$ 与其导数不能乘在一起（例如：$y \cdot y'$ 是非线性的）。
2. **不许有幂次**：$y$ 及其各阶导数的指数只能为 $1$（例如：$y^2$、$(y')^3$ 是非线性的）。
3. **不许嵌套（防禁闭）**：$y$ 及其各阶导数不能作为超越函数的自变量（例如：$\sin y$、$e^y$、$\ln(y')$ 都是非线性的）。

# 一、一阶微分方程 (First-Order DE)

## 💡 一阶方程分类决策树

```
                  一阶微分方程 dy/dx = F(x, y)
                             │
         ┌───────────────────┴───────────────────┐
     可分离变量?                              不可分离变量?
         │                                       │
     [1. 可分离变量法]                 ┌─────────┴─────────┐
                                  是线性方程?          非线性方程?
                                       │                   │
                     ┌─────────────────┴─────────┐     ┌───┴───────────────────────┐
                  齐次型? (Q(x)=0)  非齐次型? (Q(x)≠0) 伯努利型? (y^n)  分式型?      克莱罗型?
                     │                   │               │             │           (y = xy'+f(y'))
               [分离变量]          [常数变易/公式法]    [z=y^(1-n)] [检查 aq-bp]     [解直线与包络]
```

## 1. 可分离变量法 (Separation of Variables)

- **适用形式**：$y' = f(x)g(y)$

- **标准解题步骤 (SOP)**：

  1. 将 $y'$ 写作 $\frac{dy}{dx}$。
  2. 将所有含 $y$ 的项移到等号左边，含 $x$ 的项移到右边：$\frac{1}{g(y)}dy = f(x)dx$。
  3. 两边同时积分：$\int \frac{1}{g(y)}dy = \int f(x)dx + C$。

- **例题**：求解 $y' = 2xy$

  $$\frac{dy}{dx} = 2xy \implies \frac{1}{y}dy = 2xdx$$

  两边同时积分：

  $$\int \frac{1}{y}dy = \int 2xdx \implies \ln|y| = x^2 + C_1 \implies y = C e^{x^2} \quad (C = \pm e^{C_1})$$

## 2. 齐次方程 (Homogeneous Equations)

- **特征**：方程中每一项的变量次数（指数和）相同，可化为 $y' = f\left(\frac{y}{x}\right)$ 的形式。

- **解法（变量替换法）**： 令 $u = \frac{y}{x}$，即 $y = ux$。两边对 $x$ 求导得：

  $$\frac{dy}{dx} = u + x\frac{du}{dx}$$

  代回原方程转化为关于 $u$ 与 $x$ 的**可分离变量方程**：

  $$u + x\frac{du}{dx} = f(u) \implies \frac{du}{f(u) - u} = \frac{dx}{x}$$

- **例题**：求解 $(x^2 + y^2)dx - xydy = 0$

  - **观察**：各项均为 2 次（齐次）。

  - **变形**：

    $$\frac{dy}{dx} = \frac{x^2 + y^2}{xy} = \frac{x}{y} + \frac{y}{x} = \frac{1}{u} + u$$

  - **引入代换** $y = ux$：

    $$u + x\frac{du}{dx} = \frac{1}{u} + u \implies x\frac{du}{dx} = \frac{1}{u}$$

  - **分离变量并积分**：

    $$u du = \frac{1}{x} dx \implies \int u du = \int \frac{1}{x} dx \implies \frac{1}{2}u^2 = \ln|x| + C$$

  - **还原变量**：

    $$\frac{y^2}{2x^2} = \ln|x| + C \implies y^2 = 2x^2(\ln|x| + C)$$

## 3. 线性组合型变量代换：$y' = f(ax + by + c)$

- **特征**：导数仅与 $x$ 和 $y$ 的一次线性组合相关。

- **解法**： 令 $u = ax + by + c$，两边对 $x$ 求导：

  $$\frac{du}{dx} = a + b\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{b}\left(\frac{du}{dx} - a\right)$$

  代回原式转化为关于 $u$ 的一阶可分离变量方程：

  $$\frac{1}{b}\left(\frac{du}{dx} - a\right) = f(u) \implies \frac{du}{dx} = bf(u) + a$$

- **例题**：求解 $dy = (3x + 2y + 1)^2 dx$

  - **第一步：引入代换** 令 $u = 3x + 2y + 1$，则 $\frac{du}{dx} = 3 + 2\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{2}\left(\frac{du}{dx} - 3\right)$。

  - **第二步：建立新方程**

    $$\frac{1}{2}\left(\frac{du}{dx} - 3\right) = u^2 \implies \frac{du}{dx} = 2u^2 + 3 \implies \frac{du}{2u^2 + 3} = dx$$

  - **第三步：积分求解** 两边积分：

    $$\int \frac{1}{2u^2 + 3} du = \int dx \implies \frac{1}{2} \int \frac{1}{u^2 + \left(\sqrt{\frac{3}{2}}\right)^2} du = x + C$$

    利用公式 $\int \frac{1}{u^2+a^2}du = \frac{1}{a}\arctan\frac{u}{a}$：

    $$\frac{1}{2} \cdot \sqrt{\frac{2}{3}} \arctan\left(\sqrt{\frac{2}{3}}u\right) = x + C \implies \frac{\sqrt{6}}{6} \arctan\left(\frac{\sqrt{6}}{3}u\right) = x + C$$

  - **第四步：还原变量**

    $$\frac{\sqrt{6}}{6} \arctan\left[\frac{\sqrt{6}}{3}(3x + 2y + 1)\right] = x + C$$

## 4. 特殊一阶分式线性方程：$\frac{dy}{dx} = f\left( \frac{ax + by + c}{px + qy + r} \right)$

这种方程的核心在于：**探讨分子分母中两条直线的几何关系**（平行或相交），从而进行针对性平移或合并。

### 判定核心：计算交叉系数差 $\Delta = aq - bp$

#### 核心分支 1：若 $aq - bp = 0$ (系数成比例，两直线平行)

- **特征**：$\frac{a}{p} = \frac{b}{q} = k$，原式可化为 $f\left(\frac{ax+by+c}{k(ax+by)+r}\right)$。
- **技巧**：令整体 $u = ax + by$，转化为上一小节的“线性组合型”进行变量分离。
- **例题**：$(x+y+1)dx + (2x+2y-1)dy = 0$ 中，$x+y$ 与 $2x+2y$ 成比例，直接令 $u = x+y$。

#### 核心分支 2：若 $aq - bp \neq 0$ (系数不成比例，两直线相交)

- **特征**：直线 $ax + by + c = 0$ 与 $px + qy + r = 0$ 相交于唯一交点 $(\alpha, \beta)$。

- **技巧：坐标平移（消除常数项法）**：

  1. 解方程组确定交点 $(\alpha, \beta)$：

     $$\begin{cases} ax + by + c = 0 \\ px + qy + r = 0 \end{cases}$$

  2. 引入平移代换（将原点平移到交点）：

     $$x = u + \alpha, \quad y = v + \beta \implies dx = du, \quad dy = dv$$

  3. 代入后常数项自然消去，方程转化为关于 $u, v$ 的**齐次方程**：

     $$\frac{dv}{du} = f\left( \frac{au + bv}{pu + qv} \right)$$

  4. 接着按常规齐次方程法，令 $v = ku$ 求解。

## 5. 一阶线性微分方程 (Linear DE)

- **标准形式**：

  $$\frac{dy}{dx} + P(x)y = Q(x)$$

  - 若 $Q(x) = 0$，称为**齐次线性方程**。
  - 若 $Q(x) \neq 0$，称为**非齐次线性方程**。

### 求解金钥匙：通解公式法

可以直接套用标准通解公式（亦可通过积分因子 $\mu(x) = e^{\int P(x)dx}$ 推导）：

$$y = e^{-\int P(x)dx} \left[ \int Q(x) e^{\int P(x)dx} dx + C \right]$$

- **例题**：求解 $(x^2 - 1)dy + (2xy - \cos x)dx = 0$

  - **Step 1：化为标准型**

    $$\frac{dy}{dx} + \frac{2x}{x^2-1}y = \frac{\cos x}{x^2-1} \implies P(x) = \frac{2x}{x^2-1}, \quad Q(x) = \frac{\cos x}{x^2-1}$$

  - **Step 2：计算积分因子**

    $$\int P(x)dx = \int \frac{2x}{x^2-1}dx = \ln|x^2-1| \implies e^{\int P(x)dx} = x^2-1$$

  - **Step 3：代入通解公式**

    $$y = \frac{1}{x^2-1} \left[ \int \frac{\cos x}{x^2-1} \cdot (x^2-1) dx + C \right] = \frac{1}{x^2-1} \left[ \int \cos x dx + C \right]$$

    $$y = \frac{\sin x + C}{x^2-1}$$

## 6. 一阶非线性：伯努利方程 (Bernoulli Equation)

- **标准形式**：

  $$y' + P(x)y = Q(x)y^n \quad (n \neq 0, 1)$$

- **破局点**：乘上 $y^{-n}$，通过变量代换“降维打击”，将其转化为一阶线性方程。

- **SOP 步骤**：

  1. 等式两边同除以 $y^n$：

     $$y^{-n}y' + P(x)y^{1-n} = Q(x)$$

  2. 设新变量 $z = y^{1-n}$，则对 $x$ 求导为：

     $$\frac{dz}{dx} = (1-n)y^{-n}y' \implies y^{-n}y' = \frac{1}{1-n}z'$$

  3. 代回原式，整理得关于 $z$ 的一阶线性微分方程：

     $$z' + (1-n)P(x)z = (1-n)Q(x)$$

  4. 用一阶线性通解公式求出 $z$，再还原为 $y$。

## 7. 克莱罗方程 (Clairaut's Equation)

- **标准形式**：

  $$y = x y' + f(y')$$

- **特征**：由 $x y'$ 与一个仅含一阶导数的项组成。它不仅拥有一组直线型的**一般解**，还拥有一条由直线族相切围成的非线性**奇异解（包络线）**。

### 求解双轨路径

令 $p = y'$，原方程写成：$y = xp + f(p)$。两边同时对 $x$ 求导：

$$p = p + x\frac{dp}{dx} + f'(p)\frac{dp}{dx} \implies \frac{dp}{dx} (x + f'(p)) = 0$$

#### 轨道 A：求解一般解（直线族）

由 $\frac{dp}{dx} = 0 \implies p = C$（常数）。代回原方程即得通解：

$$\mathbf{y = Cx + f(C)}$$

#### 轨道 B：求解奇异解（包络线）

由 $x + f'(p) = 0 \implies x = -f'(p)$。与原方程联立消去参数 $p$：

$$\begin{cases} x = -f'(p) \\ y = -p f'(p) + f(p) \end{cases}$$

> 💡 **求包络线的快捷求偏导技巧：** 如果已经求出了通解 $F(x,y,C) = Cx + f(C) - y = 0$。想要快速求解奇异解，只需对参数 $C$ 求偏导：
>
> $$\frac{\partial F}{\partial C} = 0 \implies x + f'(C) = 0 \implies C = g(x)$$
>
> 将 $C = g(x)$ 代回通解，即可直接消除 $C$，得到奇异解。

# 二、二阶可降阶微分方程 (Reducible Second-Order DE)

二阶方程如果缺少某些元，可以通过引入中间变量 $p = y'$ 降低一阶，从而化归为一阶微分方程求解。

| 类型       | 缺失项     | 换元设定       | 二阶导数代换            | 降阶后形式                           |
| ---------- | ---------- | -------------- | ----------------------- | ------------------------------------ |
| **类型 ①** | 缺 $y, y'$ | 无需代换       | 直接积分两次            | $y = \iint f(x) dxdx$                |
| **类型 ②** | 缺 $y$     | 设 $y' = p(x)$ | $y'' = \frac{dp}{dx}$   | 一阶方程 $\frac{dp}{dx} = f(x, p)$   |
| **类型 ③** | 缺 $x$     | 设 $y' = p(y)$ | $y'' = p \frac{dp}{dy}$ | 一阶方程 $p \frac{dp}{dy} = f(y, p)$ |

### 类型 ③ 的链式法则关键推导：

由于 $y'$ 被视为关于 $y$ 的函数，即 $y' = p(y)$，根据链式法则对 $x$ 求导：

$$y'' = \frac{d}{dx}(y') = \frac{dp}{dx} = \frac{dp}{dy} \cdot \frac{dy}{dx} = p \frac{dp}{dy}$$

- **经典例题（类型 ③）**：求解 $2yy'' + (y')^2 = 0$

  - **降阶**：设 $y' = p$，$y'' = p \frac{dp}{dy}$。

  - **代入**：

    $$2y \cdot p \frac{dp}{dy} + p^2 = 0 \implies p \left( 2y\frac{dp}{dy} + p \right) = 0$$

  - **分支讨论**：

    1. 若 $p = 0 \implies y' = 0 \implies y = C$（常数解）。

    2. 若 $p \neq 0$，则：

       $$2y\frac{dp}{dy} = -p \implies \frac{dp}{p} = -\frac{dy}{2y}$$

       两边积分：

       $$\ln|p| = -\frac{1}{2}\ln|y| + \ln|C_1| \implies p = \frac{C_1}{\sqrt{y}} \implies \frac{dy}{dx} = \frac{C_1}{\sqrt{y}}$$

    3. **二次积分**：

       $$\sqrt{y} dy = C_1 dx \implies \int y^{1/2} dy = \int C_1 dx \implies \frac{2}{3}y^{3/2} = C_1 x + C_2$$

# 三、二阶线性微分方程 (Second-Order Linear DE)

## 1. 常系数齐次线性方程：$y'' + py' + qy = 0$

通过特征方程 $r^2 + pr + q = 0$ 的判别式 $\Delta = p^2 - 4q$ 确定通解形式：

| 特征根 $r_1, r_2$ 的情况                      | 通解 $y_h$ 的形式                                     |
| --------------------------------------------- | ----------------------------------------------------- |
| **有两个不相等的实根** ($r_1 \neq r_2$)       | $y = C_1e^{r_1x} + C_2e^{r_2x}$                       |
| **有两个相等的实根** ($r_1 = r_2 = r$)        | $y = (C_1 + C_2x)e^{rx}$                              |
| **有一对共轭复根** ($r = \alpha \pm \beta i$) | $y = e^{\alpha x}(C_1\cos \beta x + C_2\sin \beta x)$ |

## 2. 常系数非齐次线性方程：$y'' + py' + qy = f(x)$

其通解构造为：**齐次方程通解** $y_h$ **+ 非齐次方程的一个特解** $Y^*$。

### 求解特解方法 1：待定系数法 (适合简单 $f(x)$)

根据 $f(x)$ 的形式，合理设出含有待定常数的特解形式：

| 非齐次项 $f(x)$ 形式                     | 猜测特解 $Y^*$ 的形式           | 修正规则                                          |
| ---------------------------------------- | ------------------------------- | ------------------------------------------------- |
| **多项式** $P_n(x)$                      | $Q_n(x)$ (同阶多项式)           | 若 $0$ 是特征方程的 $k$ 重根，乘 $x^k$            |
| 指数与多项式 $P_n(x)e^{\lambda x}$       | $Q_n(x)e^{\lambda x}$           | 若 $\lambda$ 是特征方程的 $k$ 重根，乘 $x^k$      |
| 三角函数 $A\cos\omega x + B\sin\omega x$ | $M\cos\omega x + N\sin\omega x$ | 若 $\pm \omega i$ 是特征方程的 $k$ 重根，乘 $x^k$ |

### 求解特解方法 2：常数变易法 (万能积分法)

当非齐次项 $f(x)$ 较为复杂（如 $\sec x$, $\tan x$）无法使用待定系数法时适用。

- **前提**：已知对应的齐次方程的两个线性无关的解 $y_1, y_2$。

- **特解构造形式**：

  $$Y^* = u_1(x) y_1 + u_2(x) y_2$$

- **计算公式**：

  $$u_1(x) = \int \frac{-y_2 f(x)}{W(y_1, y_2)} dx, \quad u_2(x) = \int \frac{y_1 f(x)}{W(y_1, y_2)} dx$$

  其中，分母 $W(y_1, y_2)$ 为**朗斯基 (Wronskian) 行列式**：

  $$W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_1' y_2$$

- **经典例题**：求解 $y'' + y = \sec x$

  1. **求齐次通解**：特征方程 $r^2 + 1 = 0 \implies r = \pm i$。所以 $y_1 = \cos x, \ y_2 = \sin x$。

  2. **计算 Wronskian**：

     $$W = \cos x (\cos x) - (-\sin x)(\sin x) = \cos^2 x + \sin^2 x = 1$$

  3. **计算变易系数**：

     $$u_1 = \int \frac{-\sin x \cdot \sec x}{1} dx = -\int \tan x dx = \ln|\cos x|$$

     $$u_2 = \int \frac{\cos x \cdot \sec x}{1} dx = \int 1 dx = x$$

  4. **写出通解**：

     $$y = C_1\cos x + C_2\sin x + \cos x \ln|\cos x| + x\sin x$$

## 3. 变系数线性微分方程：$y'' + P(x)y' + Q(x)y = f(x)$

对于变系数方程，若能通过观察法或已知条件得到齐次方程 $y'' + P(x)y' + Q(x)y = 0$ 的非零特解，则可通过以下方法降阶或直接求解。

### 场景 A：已知齐次方程的 1 个特解 $v(x)$ $\rightarrow$ 使用降阶法

- **方法核心**：设通解 $y = u(x)v(x)$，代入原方程消去 $u$ 项，转换为关于 $w = u'$ 的一阶线性方程。

- **一阶标准型**：

  $$\frac{dw}{dx} + \left( \frac{2v'}{v} + P(x) \right) w = \frac{f(x)}{v}$$

  解出 $w$ 后积分还原 $u = \int w dx$，最终得到 $y = uv$。

- **例题**：$x^2 y'' - xy' + y = x^2$，已知齐次方程特解为 $y_1 = x$。

  - **规范化方程**：同除以 $x^2$ 得标准型 $y'' - \frac{1}{x}y' + \frac{1}{x^2}y = 1$。

  - **代换**：已知 $v = x, P(x) = -\frac{1}{x}, f(x) = 1$。 代入一阶标准方程：

    $$\frac{dw}{dx} + \left( \frac{2}{x} - \frac{1}{x} \right) w = \frac{1}{x} \implies w' + \frac{1}{x}w = \frac{1}{x}$$

  - **解一阶方程**：积分因子为 $e^{\int \frac{1}{x}dx} = x$。

    $$(xw)' = 1 \implies xw = x + C_1 \implies w = u' = 1 + \frac{C_1}{x}$$

  - **积分还原**：

    $$u = \int \left(1 + \frac{C_1}{x}\right) dx = x + C_1\ln|x| + C_2$$

  - **最终通解**：

    $$y = u \cdot x = x^2 + C_1 x \ln|x| + C_2 x$$

### 场景 B：已知齐次方程的 2 个独立特解 $y_1, y_2$ $\rightarrow$ 广义常数变易法

此时即使方程系数不是常数，只要能求出 Wronskian $W(y_1, y_2)$，即可直接套用**常数变易法**的积分公式求解特解 $Y^*$，进而写出通解。

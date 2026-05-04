---
title: "微积分-CH7-微分方程"
slug: "微积分-CH7-微分方程"
description: "微积分-CH7-微分方程，待补充摘要。"
pubDate: 2026-05-04
updatedDate: 2026-05-04
tags:
  - 修考
  - 微积分
category: 修考
draft: false
heroImage: /images/posts/calculus-ch7-differential-equations/cover.png
---

# 第七章：微分方程 (Differential Equations)

<iframe
  src="/pdfs/differential-equations.pdf"
  width="100%"
  height="800"
  style="border: 1px solid #ddd; border-radius: 8px;"
></iframe>

[打不开时点击查看 PDF](/pdfs/differential-equations.pdf)

微分方程的作用在于：当我们已知一个函数的导数关系（变化规律）时，通过建立方程来求出原函数 $y(x)$。

## 💡 引入实例：牛顿冷却定律

**问题描述**：室温 $25^\circ C$，在 $t=0$ 时，水温 $T=70^\circ C$。求水温 $T$ 随时间 $t$ 的变化规律 $T(t)$。 **建立方程**：

$$\frac{dT}{dt} = -k(T - 25)$$

*注：这里我们已知变化率（导数），目的是求出* $T(t)$ *的具体表达式。*



## 一、 一阶微分方程 (First-Order DE)

### 1. 可分离变量法 (Separation of Variables)

**适用形式**：$y' = f(x)g(y)$ 

**SOP (标准解题步骤)**：

1. 将 $y'$ 写成 $\frac{dy}{dx}$。
2. 将含 $y$ 的项移到等号一边，含 $x$ 的项移到另一边。
3. 两边同时积分。

**例题**：$y' = 2xy$

- 解：$\frac{dy}{dx} = 2xy \implies \frac{1}{y}dy = 2xdx$
- 两边积分：$\int \frac{1}{y}dy = \int 2xdx \implies \ln|y| = x^2 + C$
- 结果：$y = Ce^{x^2}$

### 2. 齐次方程 (Homogeneous Equations)

**特征**：方程中每一项的变量次数（指数和）相同。 

**解法**：令 $u = \frac{y}{x}$，即 $y = ux \implies \frac{dy}{dx} = u + x\frac{du}{dx}$。

**例题**：$(x^2 + y^2)dx - xydy = 0$

- 观察：各项均为 2 次。
- 变形：$\frac{dy}{dx} = \frac{x^2 + y^2}{xy} = \frac{x}{y} + \frac{y}{x}$
- 代入 $u$：$u + x\frac{du}{dx} = \frac{1}{u} + u \implies x\frac{du}{dx} = \frac{1}{u}$
- 分离变量：$u du = \frac{1}{x} dx \implies \frac{1}{2}u^2 = \ln|x| + C$
- 还原：$\frac{y^2}{2x^2} = \ln|x| + C$

### 3. 一阶线性微分方程 (Linear DE)

**标准形式**：$\frac{dy}{dx} + P(x)y = Q(x)$

- 若 $Q(x) = 0$：称为**齐次**线性方程（可用分离变量法）。
- 若 $Q(x) \neq 0$：称为**非齐次**线性方程。

**例题**：$(x^2 - 1)dy + (2xy - \cos x)dx = 0$

- **Step 1: 化为标准型**

  $$\frac{dy}{dx} + \frac{2x}{x^2-1}y = \frac{\cos x}{x^2-1}$$

- **Step 2: 解对应的齐次方程**（分离变量） $\frac{dy}{dx} + \frac{2x}{x^2-1}y = 0 \implies y_h = \frac{C}{x^2-1}$

- **Step 3: 常数变易法**（代回原式） 设 $y = \frac{C(x)}{x^2-1}$，求导代入得 $C'(x) = \cos x$ 则 $C(x) = \sin x + C$

- **最终结果**：$y = \frac{\sin x + C}{x^2-1}$

## 二、 二阶可降阶微分方程 (Reducible Second-Order DE)

针对无法直接求解的二阶方程，通过变量代换降为一阶。

| 类型       | 形式                      | SOP (解题步骤)                            |
| ---------- | ------------------------- | ----------------------------------------- |
| **类型 ①** | $y'' = f(x)$              | 直接连续积分两次。                        |
| **类型 ②** | $y'' = f(x, y')$ (缺 $y$) | 令 $y' = p$，则 $y'' = \frac{dp}{dx}$。   |
| **类型 ③** | $y'' = f(y, y')$ (缺 $x$) | 令 $y' = p$，则 $y'' = p \frac{dp}{dy}$。 |

**例题（类型 ①）**：$y'' = \sin x$

- $y' = \int \sin x dx = -\cos x + C_1$
- $y = \int (-\cos x + C_1) dx = -\sin x + C_1x + C_2$

**例题（类型 ②）**：$(1+x^2)y'' = 2xy'$

- 设 $y' = p$，则 $(1+x^2)\frac{dp}{dx} = 2xp \implies \frac{dp}{p} = \frac{2x}{1+x^2}dx$
- 积分得 $\ln|p| = \ln(1+x^2) + C \implies p = C_1(1+x^2)$
- 还原 $y' = C_1(1+x^2) \implies y = C_1(x + \frac{1}{3}x^3) + C_2$

**例题（类型 ③）**：$2yy'' + (y')^2 = 0$

- 设 $y'=p, y''=p\frac{dp}{dy}$
- 代入：$2yp\frac{dp}{dy} + p^2 = 0 \implies 2y\frac{dp}{dy} = -p$
- 分离变量积分求解。

## 三、 二阶常系数线性微分方程

### 1. 齐次方程：$y'' + py' + qy = 0$

通过特征方程 $r^2 + pr + q = 0$ 的根 $\Delta = p^2 - 4q$ 来确定解的形式：

| 特征根 $r_1, r_2$ 的情况                | 通解 $y$ 的形式                                       |
| --------------------------------------- | ----------------------------------------------------- |
| 有两个不相等的实根 $r_1 \neq r_2$       | $y = C_1e^{r_1x} + C_2e^{r_2x}$                       |
| 有两个相等的实根 $r_1 = r_2 = r$        | $y = (C_1 + C_2x)e^{rx}$                              |
| 有一对共轭复根 $r = \alpha \pm \beta i$ | $y = e^{\alpha x}(C_1\cos \beta x + C_2\sin \beta x)$ |

### 2. 非齐次方程示例

**例题**：$y'' - 4y' + 4y = 2x$

- **先解齐次部分**：$y'' - 4y' + 4y = 0$
- 特征方程：$r^2 - 4r + 4 = 0 \implies (r-2)^2 = 0$
- 特征根：$r_1 = r_2 = 2$（重根情况）
- 齐次通解：$y_h = (C_1 + C_2x)e^{2x}$
- *注：后续需根据* $f(x)=2x$ *设特解 $y^*$ 进一步求解。*

---
title: "微积分-CH3-微分"
slug: "微积分-CH3-微分"
description: "微积分-CH3-微分，待补充摘要。"
pubDate: 2026-05-02
updatedDate: 2026-05-02
tags:
  - 修考
  - 微积分
category: 修考
draft: false
---

# 第二章：微积分之导数篇

## 1. 导数的定义与几何意义

### 1.1 从直线到曲线

- **直线的斜率：** $k = \frac{y_2 - y_1}{x_2 - x_1}$，反映了 $y$ 随 $x$ 变化的快慢。
- **曲线的切线：** 采用“以直代曲”的思想。在曲线上找极度接近的两点，其割线斜率的极限即为该点的切线斜率。

### 1.2 导数的定义

导数的本质是一个**瞬时变化率**。

$$f'(a) = \lim_{\Delta x \to 0} \frac{f(a+\Delta x) - f(a)}{\Delta x} = \frac{dy}{dx}$$

- **物理意义：** 瞬时速度是位移在某一时刻的平均速度极限。
- **本质：** 导数描述的是一个微小的变化量。

## 2. 导数的运算规则

### 2.1 复合函数求导（链式法则 Chain Rule）

对于复合函数 $y = f(g(x))$，引入中间变量 $u = g(x)$。

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

**例题：** 求 $y = \sin(x^2)$ 的导数。

1. 令 $u = x^2 \Rightarrow y = \sin u$
2. $\frac{dy}{du} = \cos u$，$\frac{du}{dx} = 2x$
3. $y' = \cos(x^2) \cdot 2x$

### 2.2 常用导数表（速查）

- $(C)' = 0$
- $(x^\alpha)' = \alpha x^{\alpha-1}$
- $(\sin x)' = \cos x$
- $(\cos x)' = -\sin x$
- $(\ln x)' = \frac{1}{x}$
- $(e^x)' = e^x$
- $(\arctan x)' = \frac{1}{1+x^2}$

## 3. 判断函数的可导性

### 3.1 定义法

判断函数在某点是否可导，必须判断极限 $\lim_{\Delta x \to 0} \frac{f(a+\Delta x) - f(a)}{\Delta x}$ 是否存在且有限。

**例题：** 判断 $f(x) = \begin{cases} x^2 \sin \frac{1}{x} & x \neq 0 \\ 0 & x = 0 \end{cases}$ 在 $x=0$ 处的可导性。

$$\lim_{\Delta x \to 0} \frac{f(0+\Delta x) - f(0)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\Delta x^2 \sin \frac{1}{\Delta x} - 0}{\Delta x} = \lim_{\Delta x \to 0} \Delta x \sin \frac{1}{\Delta x}$$

由于 $\sin \frac{1}{\Delta x}$ 是有界函数，而 $\Delta x \to 0$，根据夹逼准则，极限为 $0$。因此 $f(x)$ 在 $0$ 处可导且 $f'(0)=0$。

**注意：** 在处理分界点导数时，**一定要用极限定义**，不能直接套用求导公式再带入，因为导函数在分界点可能不连续。

### 3.2 可导与连续的关系（修正）

- **可导必连续：** 如果 $f(x)$ 在某点可导，那么它在该点一定连续。
- **连续不一定可导：** 例如 $y = |x|$ 在 $x=0$ 处连续但不可导（尖点）。

## 4. 导数应用：线性近似与极限求解

### 4.1 线性近似（以直代曲）

当 $\Delta x$ 极小时，$f(a+\Delta x) \approx f(a) + f'(a) \cdot \Delta x$。

**例题：** 已知 $f(x) = \sqrt{x}$，求 $\sqrt{4.01}$ 的近似值。

1. 选取基准点 $a=4$，则 $f(4)=2$。
2. 求导：$f'(x) = \frac{1}{2\sqrt{x}} \Rightarrow f'(4) = \frac{1}{4} = 0.25$。
3. $\Delta x = 0.01$。
4. $f(4.01) \approx 2 + 0.25 \times 0.01 = 2.0025$。

### 4.2 利用导数定义求极限

**例题：** $f(x)$ 在 $x=0$ 可导，$f(0)=1, f'(0)=2$，求 $\lim_{x \to 0} \frac{f(x) - e^x}{\sin x}$。 解：

$$\lim_{x \to 0} \frac{f(x) - e^x}{\sin x} = \lim_{x \to 0} \frac{f(x) - f(0) + 1 - e^x}{x \cdot \frac{\sin x}{x}} = \lim_{x \to 0} \left( \frac{f(x)-f(0)}{x} - \frac{e^x-1}{x} \right) = f'(0) - 1 = 2 - 1 = 1$$

## 5. 高阶导数与特殊求导法

### 5.1 莱布尼茨公式（乘积的高阶导数）

类比二项式展开 $(a+b)^n$：

$$(uv)^{(n)} = \sum_{k=0}^n C_n^k u^{(k)} v^{(n-k)}$$

### 5.2 隐函数求导

当 $y$ 与 $x$ 混合在一起时，方程两边同时对 $x$ 求导。 **例题：** $y - xe^y = 1$，求 $y'$。

1. 两边求导：$y' - (e^y + x e^y y') = 0$
2. 整理：$y'(1 - xe^y) = e^y \Rightarrow y' = \frac{e^y}{1-xe^y}$

### 5.3 参数方程求导

若 $\begin{cases} y = f(t) \\ x = g(t) \end{cases}$，则：

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

二阶导数：$\frac{d^2y}{dx^2} = \frac{d}{dt}(\frac{dy}{dx}) \cdot \frac{dt}{dx}$。

## 6. 泰勒公式（Taylor Series）

### 6.1 核心思想

复杂的函数可以通过无穷项多项式来无限拟合。

$$f(x) = a_0 + a_1x + a_2x^2 + \dots + a_nx^n + \dots$$

其中系数 $a_n = \frac{f^{(n)}(0)}{n!}$（麦克劳林级数）。

### 6.2 常用麦克劳林级数

- $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
- $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$
- $e^x = 1 + x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \dots$
- $\frac{1}{1-x} = 1 + x + x^2 + \dots$
- $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$

### 6.3 泰勒公式的应用

1. **代入求极限：** 尤其是在处理复杂的无穷小比较时。
2. **求高阶导数：** **例题：** $f(x) = x^5 \cos x$，求 $f^{(9)}(0)$。 利用 $\cos x$ 展开式：$f(x) = x^5 (1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots) = x^5 - \frac{x^7}{2!} + \frac{x^9}{24} - \dots$ 根据泰勒系数定义，$a_9 = \frac{f^{(9)}(0)}{9!} = \frac{1}{24}$。 所以 $f^{(9)}(0) = \frac{9!}{24} = 15120$。

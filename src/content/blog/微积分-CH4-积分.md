---
title: "微积分-CH4-积分"
slug: "微积分-CH4-积分"
description: "笔记内容的组织顺序为：定积分定义与面积 -> 不定积分换元法（第一类与第二类） -> 分部积分法 -> 定积分性质与特殊公式 -> 变上限积分 -> 定积分的应用（体积）。"
pubDate: 2026-05-03
updatedDate: 2026-05-03
tags:
  - 修考
  - 微积分
category: 修考
draft: false
---

# 第3章 积分部分

## 1. 定积分的概念与定义

定积分在几何上可以表示为曲线与坐标轴之间围成的面积。

**几何背景：** 若 $f(x) \ge 0$，求曲线 $y=f(x)$ 与 $x$ 轴、直线 $x=a, x=b$ 围成的图形面积 $S$。

$$S = \int_{a}^{b} f(x) \, dx$$

## 2. 不定积分计算技巧：换元积分法

### 2.1 第一类换元法：凑微分法

利用微分形式的不变性，将积分式中的部分函数凑成微分项。 

核心思想：$\int f(\varphi(x))\varphi'(x) \, dx = \int f(\varphi(x)) \, d\varphi(x)$。

**常用凑微分公式：**

- $y' \, dx = dy$
- $\sin x \, dx = -d(\cos x)$
- $e^x \, dx = d(e^x)$
- $2x \, dx = d(x^2)$

**例题：**

1. $\int \cos(2x+1) \, dx = \frac{1}{2} \int \cos(2x+1) \, d(2x+1) = \frac{1}{2} \sin(2x+1) + C$
2. $\int \sqrt{4x+3} \, dx = \frac{1}{4} \int (4x+3)^{1/2} \, d(4x+3) = \frac{1}{4} \cdot \frac{2}{3}(4x+3)^{3/2} + C = \frac{1}{6}(4x+3)^{3/2} + C$
3. $\int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx = -\int \frac{1}{\cos x} \, d(\cos x) = -\ln|\cos x| + C$
4. $\int x e^{x^2+1} \, dx = \frac{1}{2} \int e^{x^2+1} \, d(x^2+1) = \frac{1}{2} e^{x^2+1} + C$
5. $\int \frac{1}{e^x + e^{-x}} \, dx = \int \frac{e^x}{e^{2x} + 1} \, dx = \int \frac{1}{1+(e^x)^2} \, d(e^x) = \arctan(e^x) + C$

### 2.2 特殊情况：有理函数与配方法

当分母为二次多项式时，常通过**配方**或**拆分部分分式**解决。

> 主要是看是否有解
>
> 如果有解，就使用部分分式进行展开
>
> 如果无解，就拆成别的能够联想到的

**例题（配方法）：** $\int \frac{1}{x^2+4x+6} \, dx$ 

分母配方：$x^2+4x+6 = (x+2)^2 + 2$ 

原式 $= \int \frac{1}{(x+2)^2 + (\sqrt{2})^2} \, dx$ 联想到 $(\arctan x)' = \frac{1}{1+x^2}$ $= \frac{1}{\sqrt{2}} \arctan\left(\frac{x+2}{\sqrt{2}}\right) + C$

**例题（部分分式）：** $\int \frac{3x-1}{x^2-2x-3} \, dx = \int \frac{3x-1}{(x-3)(x+1)} \, dx$ 

设 $\frac{3x-1}{(x-3)(x+1)} = \frac{A}{x-3} + \frac{B}{x+1}$，解得 $A=2, B=1$。 

原式 $= \int \left( \frac{2}{x-3} + \frac{1}{x+1} \right) \, dx = 2\ln|x-3| + \ln|x+1| + C$

### 2.3 第二类换元法

主要用于消除根号 $\sqrt{ax+b}$ 或 $\sqrt{a^2 \pm x^2}$。

**1. 根式换元：** 解决 $\sqrt{ax+b}$ 问题。 

**例题：** $\int \frac{1}{1+\sqrt{2x+1}} \, dx$ 令 $\sqrt{2x+1} = t$，则 $2x+1 = t^2 \Rightarrow dx = t \, dt$。 

原式 $= \int \frac{t}{1+t} \, dt = \int \frac{t+1-1}{t+1} \, dt = \int (1 - \frac{1}{t+1}) \, dt = t - \ln|1+t| + C$ 

回代：$\sqrt{2x+1} - \ln|1+\sqrt{2x+1}| + C$

**2. 三角换元：** 解决 $\sqrt{a^2-x^2}, \sqrt{x^2-a^2}, \sqrt{x^2+a^2}$ 问题。 

**技巧：** 画直角三角形寻找转换关系。 

> 主要是用来解决根号下的二次问题

**例题：** $\int \frac{dx}{x^2\sqrt{4-x^2}}$ 

令 $x = 2\sin t$，则 $dx = 2\cos t \, dt$。 

原式 $= \int \frac{2\cos t}{(2\sin t)^2 \cdot 2\cos t} \, dt = \int \frac{1}{4\sin^2 t} \, dt = \frac{1}{4} \int \csc^2 t \, dt = -\frac{1}{4} \cot t + C$ 

由 $x=2\sin t$ 画三角形可知 $\cot t = \frac{\sqrt{4-x^2}}{x}$。 结果 $= -\frac{\sqrt{4-x^2}}{4x} + C$

## 3. 分部积分法

**公式：** $\int u \, dv = uv - \int v \, du$

**选取** $u$ **的优先级次序（反对幂三指）：**

1. **反**：反三角函数 ($\arcsin x$)
2. **对**：对数函数 ($\ln x$)
3. **幂**：幂函数 ($x^n$)
4. **三**：三角函数 ($\sin x, \cos x$)
5. **指**：指数函数 ($e^x$) 
   *口诀：谁排在前面，谁就选作* $u$*。*

**例题：** $\int x \sin x \, dx$ 

$x$ 是幂函数，$\sin x$ 是三角函数，

选 $u=x, dv = \sin x \, dx$。 

原式 $= \int x \, d(-\cos x) = -x\cos x - \int (-\cos x) \, dx$ $= -x\cos x + \sin x + C$

## 4. 定积分的性质与特殊公式

### 4.1 常用性质

1. **奇偶性**（区间对称 $[-a, a]$ 时）：
   - 若 $f(x)$ 为奇函数，则 $\int_{-a}^{a} f(x) \, dx = 0$。
   - 若 $f(x)$ 为偶函数，则 $\int_{-a}^{a} f(x) \, dx = 2\int_{0}^{a} f(x) \, dx$。
2. **第二类换元法**：在定积分中使用换元时，必须同时**更换积分上下限**。

### 4.2 华莱士公式 (Wallis Formula / 点火公式)

适用于 $\int_{0}^{\pi/2} \sin^n x \, dx$ 或 $\int_{0}^{\pi/2} \cos^n x \, dx$：

$$I_n = \begin{cases} \frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdots \frac{1}{2} \cdot \frac{\pi}{2}, & n \text{ 为正偶数} \\ \frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdots \frac{2}{3} \cdot 1, & n \text{ 为正奇数} \end{cases}$$

## 5. 变上限积分

**定义：** $S(x) = \int_{a}^{x} f(t) \, dt$

**求导公式：**

1. $\frac{d}{dx} \left[ \int_{a}^{x} f(t) \, dt \right] = f(x)$
2. 复合情况：$\frac{d}{dx} \left[ \int_{\psi(x)}^{\varphi(x)} f(t) \, dt \right] = f(\varphi(x))\varphi'(x) - f(\psi(x))\psi'(x)$

**例题：**

1. $(\int_{0}^{x} e^{t^2} \, dt)' = e^{x^2}$
2. 求 $\int_{\sin x}^{x} e^{t^2} \, dt$ 的导数： 拆分成两个积分：$\int_{0}^{x} e^{t^2} \, dt - \int_{0}^{\sin x} e^{t^2} \, dt$ 求导得：$e^{x^2} - e^{\sin^2 x} \cdot \cos x$

## 6. 定积分的应用

### 6.1 旋转体体积

曲线 $y=f(x)$ 绕 $x$ 轴旋转一周形成的旋转体体积：

$$V = \int_{a}^{b} \pi [f(x)]^2 \, dx$$

*记忆技巧：看成无数个厚度为* $dx$ *的圆盘叠加而成，每个圆盘面积为* $\pi r^2$*，其中* $r = f(x)$*。*

### 6.2 面积的另一种求法（针对反函数）

有时直接求 $\int y \, dx$ 困难，可以利用 $x$ 对 $y$ 的积分：

$$S = \int_{y_1}^{y_2} x \, dy$$

**例题：** 求 $f(x)=\ln x$ 与 $y$ 轴在 $y \in [\frac{1}{2}, 2]$ 范围内的面积。 由 $y = \ln x \Rightarrow x = e^y$。 $S = \int_{1/2}^{2} e^y \, dy = e^y \big|_{1/2}^{2} = e^2 - e^{1/2}$。

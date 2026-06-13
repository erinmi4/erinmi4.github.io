---
title: "微积分-CH8多元函数微分学"
slug: "微积分-CH8多元函数微分学"
description: "微积分-CH8多元函数微分学，待补充摘要。"
pubDate: 2026-05-06
updatedDate: 2026-05-06
tags:
  - 修考
  - 微积分
  - 东京大学
  - 九州大学
category: 修考
draft: false
---

# 第八章 多元函数微分学

- 【多元函数微分学】 https://www.bilibili.com/video/BV1ZK4y1u7WU/?p=2&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- [本地讲义文件](file:///D:/dowload_online/google/%E9%AB%98%E6%95%B0%E4%B8%8B%E5%86%8C+%E5%A4%8D%E4%B9%A0%E8%AE%B2%E5%BA%A7%E8%AE%B2%E4%B9%89%EF%BC%88B%E7%AB%992022%E5%B9%B4%E8%A7%86%E9%A2%91%EF%BC%89.pdf)





title: "微积分-CH8多元函数微分学" slug: "微积分-CH8多元函数微分学" description: "高等数学下册第二章：多元函数微分法系统性复习笔记，包含详尽的概念辨析、公式推导与典型例题。" pubDate: 2026-05-06 updatedDate: 2026-06-12 tags:

- 期末复习
- 微积分
- 多元微分 category: 专业课笔记 draft: false

# 第二章 多元函数微分法与微分学

多元微分学是高数下册的基石。在学习一元函数微分时，我们习惯了在一维数轴上进行“前后”移动。而在多元函数中，自变量的活动范围拓展到了多维空间（如二维平面 $\mathbb{R}^2$ 或三维空间 $\mathbb{R}^3$）。这不仅带来了维度的提升，更引入了**趋近路径无限性**、**方向依赖性**等全新挑战。

本章笔记将带你从“一维”平稳过渡到“多维”，通过严密的数学推导与直观的物理模型，全面攻克多元微分学的核心考点。

## 一、 多元函数的极限

从一元微积分走向多元微积分的第一道门槛，就是**极限的定义**。理解一元极限与多元极限的区别，是避免在多元极限计算中犯错的关键。

### 1. 极限的概念与路径依赖

- **一元函数极限** $x \to a$： 在一维数轴上，自变量 $x$ 只能从 $a$ 的左侧 $x \to a^-$ 或右侧 $x \to a^+$ 两个方向趋近于 $a$。因此，一元极限存在充要条件极为简单：左极限等于右极限。

- **二元函数极限** $(x, y) \to (x_0, y_0)$： 在二维平面上，点 $P(x,y)$ 趋近于 $P_0(x_0, y_0)$ 意味着两点间的欧几里得距离趋于 $0$，即：

  $$\sqrt{(x-x_0)^2 + (y-y_0)^2} \to 0$$

  这个趋近过程不限制路径。点 $P$ 可以沿着直线、抛物线、螺旋线乃至任何不规则的曲线趋近于 $P_0$。平面上的路径有**无数种**。

$$\text{一元极限: } |x-a| \to 0 \quad (\text{仅有2个方向})$$

$$\text{二元极限: } \sqrt{(x-x_0)^2+(y-y_0)^2} \to 0 \quad (\text{无数个方向、无数种路径})$$

> **核心定义**：只有当 $P(x,y)$ 沿着**任意路径**趋于 $P_0(x_0, y_0)$ 时，函数值 $f(x,y)$ 都趋于同一个确定的常数 $L$，才能称该二元极限存在，记作：
>
> $$\lim_{(x,y) \to (x_0, y_0)} f(x,y) = L$$

### 2. 多元极限的计算方法

由于多元极限要求“路径无关”，其计算难度远超一元极限。洛必达法则（L'Hôpital's Rule）在多元极限中**不再适用**。常用的计算手段有：代入法、根式有理化、等价无穷小代换以及夹逼定理。

#### 常用等价无穷小代换（当 $u \to 0$ 时）

- $\sin u \sim u$
- $\tan u \sim u$
- $\arcsin u \sim u$
- $\arctan u \sim u$
- $\ln(1+u) \sim u$
- $e^u - 1 \sim u$
- $(1+u)^\alpha - 1 \sim \alpha u$
- $1 - \cos u \sim \frac{u^2}{2}$

#### 典型例题

##### 例 1（直接代入法）

求极限：

$$\lim_{(x,y)\to(1,0)}\frac{\ln(x+e^{y})}{\sqrt{x^{2}+y^{2}}}$$

**解**： 首先将极限位置 $(1,0)$ 直接代入分母与分子： 分母趋于 $\sqrt{1^2+0^2} = 1 \neq 0$，属于非不定式类型。 直接代入求解：

$$\lim_{(x,y)\to(1,0)}\frac{\ln(x+e^{y})}{\sqrt{x^{2}+y^{2}}} = \frac{\ln(1+e^0)}{\sqrt{1^2+0^2}} = \frac{\ln(2)}{1} = \ln 2$$

##### 例 2（根式有理化法）

求极限：

$$\lim_{(x,y)\to(0,0)}\frac{2-\sqrt{xy+4}}{xy}$$

**解**： 代入发现属于 $\frac{0}{0}$ 型不定式。对分子进行有理化处理（分子、分母同乘 $2 + \sqrt{xy+4}$）：

$$\begin{aligned} \lim_{(x,y)\to(0,0)}\frac{2-\sqrt{xy+4}}{xy} &= \lim_{(x,y)\to(0,0)}\frac{(2-\sqrt{xy+4})(2+\sqrt{xy+4})}{xy(2+\sqrt{xy+4})} \\ &= \lim_{(x,y)\to(0,0)}\frac{4-(xy+4)}{xy(2+\sqrt{xy+4})} \\ &= \lim_{(x,y)\to(0,0)}\frac{-xy}{xy(2+\sqrt{xy+4})} \\ &= \lim_{(x,y)\to(0,0)}\frac{-1}{2+\sqrt{xy+4}} = -\frac{1}{4} \end{aligned}$$

##### 例 3（变量代换与化简）

求极限：

$$\lim_{(x,y)\to(2,0)}\frac{\sin(xy)}{y}$$

**解**： 当 $(x,y) \to (2,0)$ 时，有 $xy \to 0$。因此可以使用等价无穷小代换 $\sin(xy) \sim xy$：

$$\lim_{(x,y)\to(2,0)}\frac{\sin(xy)}{y} = \lim_{(x,y)\to(2,0)}\frac{xy}{y} = \lim_{(x,y)\to(2,0)} x = 2$$

##### 例 4（等价无穷小综合代换）

求极限：

$$\lim_{(x,y)\to(0,0)}\frac{1-\cos(x^{2}+y^{2})}{(x^{2}+y^{2})e^{x^{2}y^{2}}}$$

**解**： 令自变量整体 $u = x^2+y^2$。当 $(x,y) \to (0,0)$ 时，$u \to 0$。 利用等价无穷小 $1-\cos u \sim \frac{u^2}{2}$，即 $1-\cos(x^2+y^2) \sim \frac{(x^2+y^2)^2}{2}$。 同时，当 $(x,y) \to (0,0)$ 时，$e^{x^2y^2} \to e^0 = 1$。 原极限可化简为：

$$\lim_{(x,y)\to(0,0)}\frac{\frac{1}{2}(x^2+y^2)^2}{(x^2+y^2) \cdot 1} = \lim_{(x,y)\to(0,0)}\frac{1}{2}(x^2+y^2) = 0$$

### 3. 如何证明极限不存在（路径相关法）

如果要证明极限存在，我们必须证明与路径无关（通常非常困难，需要用到夹逼准则或极坐标法）。 相反，**要证明极限不存在，只需找到两条不同的趋近路径，使得函数沿这两条路径趋近时的极限值不相等**。

常用路径选择技巧：

1. **射线路径**：令 $y = kx$，观察极限是否与斜率 $k$ 相关。
2. **高阶曲线路径**：如果分子分母各项的次数不齐，可令 $y = kx^2$ 或 $y = kx^3$，使分子和分母的整体次数齐平，从而暴露路径依赖。

#### 典型例题

##### 例 5（线性路径检验）

说明极限是否存在：

$$\lim_{(x,y)\to(0,0)}\frac{xy}{x^{2}+y^{2}}$$

**解**： 观察发现分子二次，分母各项也是二次。设动点 $P(x,y)$ 沿着直线 $y = kx$ 趋于 $(0,0)$。 代入 $y = kx$：

$$\lim_{\substack{(x,y)\to(0,0) \\ y=kx}} \frac{xy}{x^2+y^2} = \lim_{x\to 0}\frac{x(kx)}{x^2+k^2x^2} = \lim_{x\to 0}\frac{kx^2}{x^2(1+k^2)} = \frac{k}{1+k^2}$$

不同的斜率 $k$（即不同的逼近方向）对应不同的极限值。 例如：沿 $y=x$ ($k=1$) 趋近，极限为 $\frac{1}{2}$；沿 $y=0$ ($k=0$) 趋近，极限为 $0$。 因为极限具有唯一性，故**该极限不存在**。

##### 例 6（高阶曲线路径检验）

说明极限是否存在：

$$\lim_{(x,y)\to(0,0)}\frac{x^{2}y}{x^{4}+y^{2}}$$

**解**： 若用射线 $y = kx$ 代入：

$$\lim_{x\to 0}\frac{x^2(kx)}{x^4+k^2x^2} = \lim_{x\to 0}\frac{kx^3}{x^2(x^2+k^2)} = \lim_{x\to 0}\frac{kx}{x^2+k^2} = 0 \quad (k \neq 0)$$

沿着所有非零斜率的直线路径趋近时，极限值皆为 $0$。但这并**不能**说明极限存在！ 观察分母，包含 $x^4$ 和 $y^2$。为了实现分母次数“平起平坐”，我们应该选择抛物线路径 $y = kx^2$： 代入 $y = kx^2$：

$$\lim_{\substack{(x,y)\to(0,0) \\ y=kx^2}} \frac{x^2y}{x^4+y^2} = \lim_{x\to 0}\frac{x^2(kx^2)}{x^4+(kx^2)^2} = \lim_{x\to 0}\frac{kx^4}{x^4(1+k^2)} = \frac{k}{1+k^2}$$

极限值随着抛物线参数 $k$ 的改变而改变。 故，该多元函数的**极限不存在**。

## 二、 偏导数、全微分与多元函数性质关联

研究完“极限”后，我们自然过渡到对“变化率”的研究。在多元函数中，由于自变量变多了，如何定义导数？

### 1. 偏导数 (Partial Derivative)

**直观理解——控制变量法**： 假设你的身体素质（以健康指数 $H$ 表示）受到饮食 $x$、运动 $y$、睡眠 $z$ 三个相互独立的变量影响：$H = f(x, y, z)$。 如果你想单独探究“运动量 $y$”对健康的影响，你必须保持“饮食 $x$”和“睡眠 $z$”完全不变。这种**在保持其他自变量不变的前提下，研究单一变量对函数值变化率影响的导数**，就是偏导数。

- **偏导数定义式**： 若 $z = f(x, y)$ 在点 $(x_0, y_0)$ 的邻域内有定义，则关于 $x$ 的偏导数为：

  $$\frac{\partial f}{\partial x} = \lim_{\Delta x\to 0} \frac{f(x_0+\Delta x, y_0) - f(x_0, y_0)}{\Delta x}$$

  关于 $y$ 的偏导数为：

  $$\frac{\partial f}{\partial y} = \lim_{\Delta y\to 0} \frac{f(x_0, y_0+\Delta y) - f(x_0, y_0)}{\Delta y}$$

- **计算黄金法则**： **求哪个自变量的偏导数，就将其他自变量一律看作常数！**

#### 典型例题

##### 例 7（偏导数基本计算）

求下列函数的偏导数：

1. $s = \frac{u^{2}+v^{2}}{uv}$
2. $u = x^{\frac{y}{z}}$
3. $z = (1+xy)^{y}$
4. 设 $f(x,y)=x+(y-1)\arcsin\sqrt{\frac{x}{y}}$，求 $f_{x}(x,1)$。

**解**： **1.** 首先将公式化简以便于求导：

$$s = \frac{u}{v} + \frac{v}{u}$$

- 视 $v$ 为常数，对 $u$ 求偏导：

  $$\frac{\partial s}{\partial u} = \frac{\partial}{\partial u}\left( \frac{u}{v} + v u^{-1} \right) = \frac{1}{v} - \frac{v}{u^2}$$

- 视 $u$ 为常数，对 $v$ 求偏导：

  $$\frac{\partial s}{\partial v} = \frac{\partial}{\partial v}\left( u v^{-1} + \frac{v}{u} \right) = -\frac{u}{v^2} + \frac{1}{u}$$

**2.** 函数 $u = x^{\frac{y}{z}}$ 具有三个自变量：

- 求 $\frac{\partial u}{\partial x}$ 时，视 $\frac{y}{z}$ 为常数幂指数（套用公试 $(x^a)' = a x^{a-1}$）：

  $$\frac{\partial u}{\partial x} = \frac{y}{z} \cdot x^{\frac{y}{z}-1}$$

- 求 $\frac{\partial u}{\partial y}$ 时，视底数 $x$ 为常数底（套用指数求导公式 $(a^y)' = a^y \ln a$）：

  $$\frac{\partial u}{\partial y} = x^{\frac{y}{z}} \cdot \ln x \cdot \frac{\partial}{\partial y}\left(\frac{y}{z}\right) = \frac{1}{z} x^{\frac{y}{z}} \ln x$$

- 求 $\frac{\partial u}{\partial z}$ 时，同样视 $x$ 为常数底，中间变量 $t = \frac{y}{z}$：

  $$\frac{\partial u}{\partial z} = x^{\frac{y}{z}} \cdot \ln x \cdot \frac{\partial}{\partial z}\left(y z^{-1}\right) = -\frac{y}{z^2} x^{\frac{y}{z}} \ln x$$

**3.** 对于 $z = (1+xy)^{y}$，这是一个典型的幂指函数：

- 求 $\frac{\partial z}{\partial x}$：由于底数含有 $x$ 而指数没有，视指数 $y$ 为常数幂：

  $$\frac{\partial z}{\partial x} = y(1+xy)^{y-1} \cdot \frac{\partial(1+xy)}{\partial x} = y^2(1+xy)^{y-1}$$

- 求 $\frac{\partial z}{\partial y}$：由于底数和指数都含有 $y$，需转化为以 $e$ 为底的指数函数形式：

  $$z = e^{y \ln(1+xy)}$$

  套用复合函数链式法则：

  $$\begin{aligned} \frac{\partial z}{\partial y} &= e^{y\ln(1+xy)} \cdot \frac{\partial}{\partial y} \Big[ y \ln(1+xy) \Big] \\ &= (1+xy)^y \cdot \left[ 1 \cdot \ln(1+xy) + y \cdot \frac{x}{1+xy} \right] \\ &= (1+xy)^y \left[ \ln(1+xy) + \frac{xy}{1+xy} \right] \end{aligned}$$

**4.** **重要技巧——先代后求**： 题目要求关于 $x$ 的偏导数在 $y=1$ 时的表达式。如果我们直接对原式求偏导，过程将极其繁琐。 由于我们只需探究当 $y$ **固定在** $1$ **处** 时，函数随 $x$ 的变化率，我们可以**先将** $y=1$ **代入原函数，再对** $x$ **求导**： 将 $y=1$ 直接代入原式：

$$f(x,1) = x + (1-1)\arcsin\sqrt{\frac{x}{1}} = x$$

此时，再对 $x$ 求导：

$$f_{x}(x,1) = \frac{\partial}{\partial x}(x) = 1$$

*(注：只有对非求导变量，且是在特定点求偏导时，方可使用“先代后求”技巧)*

### 2. 高阶偏导数

类似于一元函数的高阶导数，多元函数也可以求多次偏导。

$$\frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x}\left( \frac{\partial z}{\partial x} \right), \quad \frac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y}\left( \frac{\partial z}{\partial y} \right)$$

$$\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial y}\left( \frac{\partial z}{\partial x} \right) \quad (\text{先对 } x \text{ 求导，再对 } y \text{ 求导})$$

$$\frac{\partial^2 z}{\partial y \partial x} = \frac{\partial}{\partial x}\left( \frac{\partial z}{\partial y} \right) \quad (\text{先对 } y \text{ 求导，再对 } x \text{ 求导})$$

> **克莱罗定理 (Clairaut's Theorem)**： 如果偏导数 $\frac{\partial^2 z}{\partial x \partial y}$ 和 $\frac{\partial^2 z}{\partial y \partial x}$ 在定义域内是**连续**的，那么它们必定相等，即：
>
> $$\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}$$

#### 典型例题

##### 例 8

设函数 $z = x^4 + y^4 - 4x^2y^2$，求所有的二阶偏导数。

**解**： 首先求一阶偏导数：

$$\frac{\partial z}{\partial x} = 4x^3 - 8xy^2, \quad \frac{\partial z}{\partial y} = 4y^3 - 8x^2y$$

进而求二阶偏导数：

$$\frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x}(4x^3 - 8xy^2) = 12x^2 - 8y^2$$

$$\frac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y}(4y^3 - 8x^2y) = 12y^2 - 8x^2$$

$$\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial y}(4x^3 - 8xy^2) = -16xy$$

$$\frac{\partial^2 z}{\partial y \partial x} = \frac{\partial}{\partial x}(4y^3 - 8x^2y) = -16xy$$

可见，在此处 $\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}$ 成立。

### 3. 全微分 (Total Differential)

偏导数虽然好用，但它存在一个巨大的局限性：每次只能允许**一个**自变量发生变化。如果所有自变量（如饮食、运动、睡眠）同时发生微小的变化，我们该如何估算健康指数的总变化量？

这就是**全微分**的思想来源。全微分是用所有自变量偏导数的线性组合，去近似逼近函数值的全增量 $\Delta z$：

- **全微分定义**： 如果函数 $z = f(x, y)$ 在点 $(x, y)$ 处的全增量 $\Delta z = f(x+\Delta x, y+\Delta y) - f(x, y)$ 可以表示为：

  $$\Delta z = A\Delta x + B\Delta y + o(\rho)$$

  其中 $\rho = \sqrt{(\Delta x)^2 + (\Delta y)^2}$，则称函数在该点**可微**，而线性部分 $A\Delta x + B\Delta y$ 即为全微分，记作：

  $$\mathrm{d}z = \frac{\partial z}{\partial x}\mathrm{d}x + \frac{\partial z}{\partial y}\mathrm{d}y$$

#### 全微分的几何直观：

一元函数的微分 $\mathrm{d}y = f'(x)\mathrm{d}x$ 在几何上是用**切线**的纵坐标增量去近似代替**曲线**的纵坐标增量（即以直代弯）。 二元函数的全微分 $\mathrm{d}z$ 在几何上则是用**切平面**的高度变化去近似代替**曲面**的实际高度变化（即以平代曲）。

#### 典型例题与数值近似应用

全微分非常适合用于误差估算和数值近似计算。

##### 例 9（一元微分近似估算）

近似计算 $(2.01)^5$ 的值。

**解**： 设一元辅助函数 $f(x) = x^5$，我们在易求值点 $x_0 = 2$ 处进行线性展开。 由 $f'(x) = 5x^4$ 可得：

$$f(2) = 32, \quad f'(2) = 5 \times 2^4 = 80$$

一元线性近似公式为：$f(x_0 + \Delta x) \approx f(x_0) + f'(x_0)\Delta x$。 将 $x_0 = 2, \Delta x = 0.01$ 代入：

$$(2.01)^5 \approx f(2) + f'(2) \times 0.01 = 32 + 80 \times 0.01 = 32.8$$

*(注：计算器精确值为* $32.8080$*，可见当跨步* $\Delta x$ *很小时，微分近似极为精准。但如果计算* $(2.5)^5$*，跨步* $\Delta x = 0.5$ *偏大，线性近似误差就会急剧上升。)*

### 4. 多元函数连续、偏导存在、可微、偏导连续之间的逻辑关系

这是一元微分与多元微分最本质的区别。一元函数中，“导数存在”与“可微”是完全等价的，且一定能推导出“函数连续”。但在多元函数中，这些性质之间的逻辑链条断裂了。

以下是多元函数核心性质的逻辑关联图：

```
      偏导数 𝜕f/𝜕x, 𝜕f/𝜕y 连续
                 │
                 ▼ (充分条件)
            函数 f 可微
           ╱          ╲
  (必要条件)          (必要条件)
       ╱              ╲
      ▼                ▼
偏导数存在         函数 f 连续
```

#### 核心反直觉结论辨析（修考必记）：

1. **偏导数存在** $\kern-0.5em\not\implies$ **函数连续**
   - *直观解释*：偏导数存在仅仅意味着函数沿着 $x$ 轴平行方向和 $y$ 轴平行方向（十字路口方向）是光滑、可导的。但是如果在斜对角方向上函数是断裂或陡峭跳跃的，整个函数依然是不连续的。
2. **偏导数存在** $\kern-0.5em\not\implies$ **函数可微**
   - 可微要求的是全方位（任意方向）的局部线性逼近，而偏导数仅仅保证了两个相互垂直方向的线性逼近。
3. **偏导连续** $\implies$ **函数可微** $\implies$ **偏导存在且函数连续**
   - “偏导数连续”是保证“可微”的强充分条件，而“可微”则是保证整体连续和偏导数存在的强必要条件。

## 三、 方向导数与梯度

偏导数解决了平行于坐标轴方向的变化率，但如果我们在平面上任意旋转一个角度，沿着任意指定的方向前行，变化率该如何计算？

### 1. 方向导数 (Directional Derivative)

**几何场景**： 你正站在一座大山上，坐标位置为 $(x_0, y_0)$，海拔高度为 $z = f(x,y)$。

- 偏导数 $\frac{\partial z}{\partial x}$ 告诉你向东（$x$ 轴正向）走一步，海拔的变化率。
- 偏导数 $\frac{\partial z}{\partial y}$ 告诉你向北（$y$ 轴正向）走一步，海拔的变化率。
- 现在你决定朝着东偏北 $\theta$ 夹角的方向（设单位方向向量为 $\vec{l} = (\cos\alpha, \cos\beta)$）迈出一步。这步长在 $x$ 方向的投影为 $\cos\alpha$，在 $y$ 方向的投影为 $\cos\beta$。

根据全微分近似，高度的总变化量为：

$$\mathrm{d}z = \frac{\partial f}{\partial x}\mathrm{d}x + \frac{\partial f}{\partial y}\mathrm{d}y \approx \frac{\partial f}{\partial x} (t\cos\alpha) + \frac{\partial f}{\partial y} (t\cos\beta)$$

当移动距离 $t \to 0$ 时，单位距离的高度变化率即为**方向导数**：

$$\frac{\partial f}{\partial l} = \frac{\partial f}{\partial x} \cos\alpha + \frac{\partial f}{\partial y} \cos\beta$$

### 2. 梯度 (Gradient)

有了方向导数公式 $\frac{\partial f}{\partial l} = \frac{\partial f}{\partial x} \cos\alpha + \frac{\partial f}{\partial y} \cos\beta$，我们想知道： **朝着哪一个方向走，海拔上升得最快？（即方向导数取得最大值）**

我们将方向导数写成向量内积的形式：

$$\frac{\partial f}{\partial l} = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right) \cdot ( \cos\alpha, \cos\beta ) = \vec{G} \cdot \vec{u}$$

其中 $\vec{u} = (\cos\alpha, \cos\beta)$ 是前行的单位方向向量 ($|\vec{u}| = 1$)。 而向量 $\vec{G} = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right)$ 仅由当前位置的偏导数决定，称为**梯度向量**，记作：

$$\operatorname{grad} f = \nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right)$$

根据向量点乘公式：

$$\frac{\partial f}{\partial l} = |\nabla f| \cdot |\vec{u}| \cos\theta = |\nabla f| \cos\theta$$

其中 $\theta$ 是梯度向量与前进方向的夹角。

#### 梯度的物理意义：

1. 当 $\theta = 0$ 时（即前进方向**与梯度方向完全一致**），$\cos\theta = 1$ 取得最大值。此时方向导数最大，等于梯度的模长 $|\nabla f|$。 👉 **梯度方向是函数值增长最快的方向（即上山最陡的方向）**。
2. 当 $\theta = \pi$ 时（即前进方向**与梯度反向**），$\cos\theta = -1$ 取得最小值。 👉 **梯度的反方向是函数值下降最快的方向（即下山最陡的方向）**。
3. 当 $\theta = \frac{\pi}{2}$ 时（即方向垂直于梯度），方向导数为 $0$。 👉 **垂直于梯度的方向，高度不发生变化（这就是等高线切线方向）**。

#### 典型例题

##### 例 10

计算函数 $z = e^{xy}$ 在点 $(2, 1)$ 处的：

1. 一阶偏导数
2. 全微分
3. 沿着向量 $\vec{n} = (1, \sqrt{3})$ 方向的方向导数
4. 该点处的梯度向量

**解**： **1.** 计算一阶偏导数：

$$\frac{\partial z}{\partial x} = y e^{xy}, \quad \frac{\partial z}{\partial y} = x e^{xy}$$

代入点 $(2, 1)$：

$$\left.\frac{\partial z}{\partial x}\right|_{(2,1)} = 1 \cdot e^2 = e^2, \quad \left.\frac{\partial z}{\partial y}\right|_{(2,1)} = 2 \cdot e^2 = 2e^2$$

**2.** 全微分为：

$$\left.\mathrm{d}z\right|_{(2,1)} = \left.\frac{\partial z}{\partial x}\right|_{(2,1)} \mathrm{d}x + \left.\frac{\partial z}{\partial y}\right|_{(2,1)} \mathrm{d}y = e^2 \mathrm{d}x + 2e^2 \mathrm{d}y$$

**3.** 将方向向量 $\vec{n} = (1, \sqrt{3})$ 单位化。其模长为 $|\vec{n}| = \sqrt{1^2 + (\sqrt{3})^2} = 2$。 单位方向向量 $\vec{u} = \left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$。 即方向角的余弦为：$\cos\alpha = \frac{1}{2}$，$\cos\beta = \frac{\sqrt{3}}{2}$。 在该方向上的方向导数为：

$$\left.\frac{\partial z}{\partial l}\right|_{(2,1)} = \frac{\partial z}{\partial x}\cos\alpha + \frac{\partial z}{\partial y}\cos\beta = e^2 \cdot \frac{1}{2} + 2e^2 \cdot \frac{\sqrt{3}}{2} = e^2 \left( \frac{1}{2} + \sqrt{3} \right)$$

**4.** 该点处的梯度为一阶偏导数组成的向量：

$$\operatorname{grad} z = \left.\nabla z\right|_{(2,1)} = \left( e^2, 2e^2 \right)$$

### 3. 拓展阅读：基于梯度下降的机器学习模型

你是否好奇人工智能（AI）是如何“学习”的？其实，机器学习中最核心的优化算法——**梯度下降法 (Gradient Descent)**，本质就是方向导数与梯度的应用！

假设我们有一组实验收集到的红点数据 $(x_i, y_i)$（如右图所示）。我们希望找到一条最能拟合这些点的直线：$y = kx + b$。也就是确定最优的斜率 $k$ 和截距 $b$。

我们用“损失函数 $L(k,b)$”来评估当前直线与数据点之间的偏差大小。偏差越小，拟合越好。因此目标是求 $L(k,b)$ 的最小值。

$$L(k,b) = \sum_{i=1}^{n} (kx_i + b - y_i)^2$$

这是一个关于 $k$ 和 $b$ 的二元函数。

#### 算法流程：

1. 随机初始化一个参数位置 $(k_1, b_1)$。

2. 计算损失函数 $L$ 对当前参数的梯度向量 $\nabla L = \left( \frac{\partial L}{\partial k}, \frac{\partial L}{\partial b} \right)$。

3. 因为**梯度反方向是函数下降最快的方向**，我们要让损失值最小，就必须**沿着梯度反方向**更新参数：

   $$(k_{\text{new}}, b_{\text{new}}) = (k_{\text{old}}, b_{\text{old}}) - \alpha \nabla L$$

   其中常数 $\alpha > 0$ 称为“学习率”，控制每次下山的步长。

4. 重复计算梯度并更新，直到梯度趋近于 $\vec{0}$（到达山谷最低点），此时我们就找到了最完美拟合的直线。

## 四、 多元复合函数求导（链式法则）

当函数关系复杂，出现多层嵌套时，如 $z = f(u,v)$，而 $u = g(x,y)$，$v = h(x,y)$，如何计算 $z$ 关于最终自变量 $x, y$ 的导数？

### 1. 树状链条图求导法（考场神技）

多元复合函数求导的核心是画出**自变量链路图（树状图）**。

- **规则 1：同一条路径上的导数用乘法（链上相乘）**。
- **规则 2：通往同一个自变量的不同路径用加法（分路相加）**。
- **注意**：在书写符号时，如果一个节点下只有一个分支，用全导数符号 $\mathrm{d}$；如果一个节点下有多个分支，用偏导数符号 $\partial$。

#### 常见拓扑结构 1：单自变量嵌套 $z = f(u,v)$，$u=u(t)$，$v=v(t)$

由于最终只有一个自变量 $t$，所以得到的是全导数 $\frac{\mathrm{d}z}{\mathrm{d}t}$：

```
     z
   ╱   ╲   (偏导)
  u     v
  │     │   (全导)
  t     t
```

根据规则，求导公式为：

$$\frac{\mathrm{d}z}{\mathrm{d}t} = \frac{\partial z}{\partial u}\frac{\mathrm{d}u}{\mathrm{d}t} + \frac{\partial z}{\partial v}\frac{\mathrm{d}v}{\mathrm{d}t}$$

#### 常见拓扑结构 2：多自变量嵌套 $z = f(u,v)$，$u=u(x,y)$，$v=v(x,y)$

由于最终有 $x$ 和 $y$ 两个自由自变量，因此求的是偏导数 $\frac{\partial z}{\partial x}$ 与 $\frac{\partial z}{\partial y}$：

```
     z
   ╱   ╲   (偏导)
  u     v
 ╱ ╲   ╱ ╲  (偏导)
x   y x   y
```

根据规则，通往 $x$ 的路径有两条（经 $u$ 和经 $v$）：

$$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$$

同理，通往 $y$ 的路径也有两条：

$$\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y}$$

### 2. 典型例题精析

##### 例 11（全微分形式不变性的应用）

设 $z = u^2 + v^2$，而 $u = x+y$，$v = x-y$，求 $\frac{\partial z}{\partial x}$ 和 $\frac{\partial z}{\partial y}$。

**解法一：常规链式法则** 根据树状图：

$$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial x} = (2u \cdot 1) + (2v \cdot 1) = 2(u+v) = 2[(x+y)+(x-y)] = 4x$$

$$\frac{\partial z}{\partial y} = \frac{\partial z}{\partial u}\frac{\partial u}{\partial y} + \frac{\partial z}{\partial v}\frac{\partial v}{\partial y} = (2u \cdot 1) + (2v \cdot (-1)) = 2(u-v) = 2[(x+y)-(x-y)] = 4y$$

**解法二：全微分形式不变性（极速解法）** 由于全微分形式在初等变换下保持结构不变，我们可以写出：

$$\mathrm{d}z = 2u \mathrm{d}u + 2v \mathrm{d}v$$

又因为：

$$\mathrm{d}u = \mathrm{d}x + \mathrm{d}y, \quad \mathrm{d}v = \mathrm{d}x - \mathrm{d}y$$

直接代入 $\mathrm{d}z$ 中：

$$\mathrm{d}z = 2u(\mathrm{d}x + \mathrm{d}y) + 2v(\mathrm{d}x - \mathrm{d}y) = (2u+2v)\mathrm{d}x + (2u-2v)\mathrm{d}y$$

根据全微分定义，$\mathrm{d}x$ 前面的系数就是 $\frac{\partial z}{\partial x}$，$\mathrm{d}y$ 前面的系数就是 $\frac{\partial z}{\partial y}$：

$$\frac{\partial z}{\partial x} = 2u+2v = 4x, \quad \frac{\partial z}{\partial y} = 2u-2v = 4y$$

##### 例 12

设 $z = e^{x-2y}$，其中 $x = \sin t$，$y = t^3$，求全导数 $\frac{\mathrm{d}z}{\mathrm{d}t}$。

**解**： 画出树状关系，路径最终都汇聚于单自变量 $t$：

$$\begin{aligned} \frac{\mathrm{d}z}{\mathrm{d}t} &= \frac{\partial z}{\partial x}\frac{\mathrm{d}x}{\mathrm{d}t} + \frac{\partial z}{\partial y}\frac{\mathrm{d}y}{\mathrm{d}t} \\ &= \left(e^{x-2y}\right) \cdot (\cos t) + \left(-2e^{x-2y}\right) \cdot (3t^2) \\ &= e^{x-2y}(\cos t - 6t^2) \\ &= e^{\sin t - 2t^3}(\cos t - 6t^2) \end{aligned}$$

##### 例 13（直接影响与间接影响的路径辨析）

设 $u = f(x, y, z) = e^{x^2+y^2+z^2}$，其中 $z = x^2 \sin y$，求偏导数 $\frac{\partial u}{\partial x}$ 和 $\frac{\partial u}{\partial y}$。

**解**： 这个例子非常有启发性。这里 $u$ 受到 $x,y,z$ 的直接控制，但中间变量 $z$ 本身又受到 $x,y$ 的控制。 这就像企业的生产成本，受到水电费、材料费等直接影响，但材料费上涨本身又会间接推高水电费。

画出树状图：

```
       u
    ╱  │  ╲
   x   y   z
   │   │  ╱ ╲
   x   y x   y
```

我们在对最终变量 $x$ 求偏导时，必须把所有通往最终自变量 $x$ 的路径都加起来： 一条是 $u \to x$ 的直接路径，另一条是 $u \to z \to x$ 的间接路径。

$$\frac{\partial u}{\partial x} = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial z}\frac{\partial z}{\partial x}$$

- 直接偏导：$\frac{\partial f}{\partial x} = 2x e^{x^2+y^2+z^2}$

- 链条传导：$\frac{\partial f}{\partial z} = 2z e^{x^2+y^2+z^2}$，$\frac{\partial z}{\partial x} = 2x \sin y$ 代入公式：

  $$\begin{aligned} \frac{\partial u}{\partial x} &= 2x e^{x^2+y^2+z^2} + \left(2z e^{x^2+y^2+z^2}\right)(2x \sin y) \\ &= 2x e^{x^2+y^2+z^2}(1 + 2z \sin y) \\ &= 2x e^{x^2+y^2+x^4\sin^2 y}(1 + 2x^2 \sin^2 y) \end{aligned}$$

  同理，通往 $y$ 的路径也是一条直接偏导加一条间接偏导：

  $$\begin{aligned} \frac{\partial u}{\partial y} &= \frac{\partial f}{\partial y} + \frac{\partial f}{\partial z}\frac{\partial z}{\partial y} \\ &= 2y e^{x^2+y^2+z^2} + \left(2z e^{x^2+y^2+z^2}\right)(x^2 \cos y) \\ &= 2e^{x^2+y^2+z^2}(y + z x^2 \cos y) \\ &= 2e^{x^2+y^2+x^4\sin^2 y}(y + x^4 \sin y \cos y) \end{aligned}$$

##### 例 14（重难点：复合函数的高阶偏导数）

设 $w = f(x+y+z, xyz)$ 具有二阶连续偏导数，求 $\frac{\partial w}{\partial x}$ 和混合二阶偏导数 $\frac{\partial^{2}w}{\partial x\partial z}$。

**解**： 为了理清结构，我们引入中间变量：$u = x+y+z$，$v = xyz$。 此时 $w = f(u, v)$，一阶偏导数 $\frac{\partial w}{\partial u}$ 记为 $f'_1$，$\frac{\partial w}{\partial v}$ 记为 $f'_2$。 根据链式法则：

$$\frac{\partial w}{\partial x} = \frac{\partial f}{\partial u}\frac{\partial u}{\partial x} + \frac{\partial f}{\partial v}\frac{\partial v}{\partial x} = f'_1 \cdot 1 + f'_2 \cdot yz = f'_1 + yz f'_2$$

接下来求关于 $z$ 的二阶混合偏导数：

$$\frac{\partial^2 w}{\partial x \partial z} = \frac{\partial}{\partial z}\left( \frac{\partial w}{\partial x} \right) = \frac{\partial}{\partial z} \left( f'_1 + yz f'_2 \right)$$

利用求导的加法与乘法法则展开：

$$\frac{\partial^2 w}{\partial x \partial z} = \frac{\partial f'_1}{\partial z} + y \left( 1 \cdot f'_2 + z \frac{\partial f'_2}{\partial z} \right) = \frac{\partial f'_1}{\partial z} + y f'_2 + yz \frac{\partial f'_2}{\partial z}$$

**至关重要的一步**：$f'_1$ 和 $f'_2$ 依然是以 $u$ 和 $v$ 为自变量的多元复合函数！ 所以对它们关于 $z$ 求导时，**必须重新应用链式法则**：

- 对 $f'_1$ 关于 $z$ 求偏导：

  $$\frac{\partial f'_1}{\partial z} = \frac{\partial f'_1}{\partial u}\frac{\partial u}{\partial z} + \frac{\partial f'_1}{\partial v}\frac{\partial v}{\partial z} = f''_{11} \cdot 1 + f''_{12} \cdot xy = f''_{11} + xy f''_{12}$$

- 对 $f'_2$ 关于 $z$ 求偏导：

  $$\frac{\partial f'_2}{\partial z} = \frac{\partial f'_2}{\partial u}\frac{\partial u}{\partial z} + \frac{\partial f'_2}{\partial v}\frac{\partial v}{\partial z} = f''_{21} \cdot 1 + f''_{22} \cdot xy = f''_{21} + xy f''_{22}$$

由于 $f$ 具有二阶连续偏导数，故混偏对称：$f''_{12} = f''_{21}$。 将上述关系代回混合偏导原式：

$$\begin{aligned} \frac{\partial^2 w}{\partial x \partial z} &= \left( f''_{11} + xy f''_{12} \right) + y f'_2 + yz \left( f''_{12} + xy f''_{22} \right) \\ &= f''_{11} + (xy + yz) f''_{12} + xy^2z f''_{22} + y f'_2 \\ &= f''_{11} + y(x+z)f''_{12} + xy^2z f''_{22} + y f'_2 \end{aligned}$$

*(注：本题是考研与期末考试中极易失分的高阶混合偏导典型题，关键在于要牢记一阶偏导数仍是复合函数。)*

## 五、 隐函数求导公式

在实际应用中，函数关系并不总是以明确的 $y = f(x)$（显函数）形式呈现，很多时候是以方程 $F(x,y)=0$ 或 $F(x,y,z)=0$（隐函数）定义。

### 1. 隐函数存在定理 1（一元隐函数）

若方程 $F(x, y) = 0$ 确定了一元隐函数 $y = y(x)$，在公式两侧同时对 $x$ 求导（利用复合函数求导）：
> 本质上 $F$ 是关于$x,y$ 的函数
> $y$ 是关于 $x$ 的函数
> 所以需要[[Chain rule]]来进行求导
$$\frac{\partial F}{\partial x} \cdot 1 + \frac{\partial F}{\partial y} \cdot \frac{\mathrm{d}y}{\mathrm{d}x} = 0 \implies \frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{F_x}{F_y} \quad (F_y \neq 0)$$

##### 例 15

已知隐函数方程 $\sin y + e^x - xy^2 = 0$，求其导数 $\frac{\mathrm{d}y}{\mathrm{d}x}$。

**解法一：一元微分隐函数求导（高数上册方法）** 方程两边同时对 $x$ 求导，注意 $y$ 是 $x$ 的函数：

$$(\cos y) y' + e^x - \left( 1 \cdot y^2 + x \cdot 2yy' \right) = 0$$

收集含 $y'$ 的项并提取公因式：

$$y' \left( \cos y - 2xy \right) = y^2 - e^x \implies y' = \frac{y^2 - e^x}{\cos y - 2xy}$$


**解法二：利用隐函数定理 1 偏导公式（高数下册偏导法，极简）** 令 $F(x, y) = \sin y + e^x - xy^2$。 直接求其偏导数（计算简单，不易出错）：

$$F_x = e^x - y^2, \quad F_y = \cos y - 2xy$$

根据定理公式：

$$\frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{F_x}{F_y} = -\frac{e^x - y^2}{\cos y - 2xy} = \frac{y^2 - e^x}{\cos y - 2xy}$$

### 2. 隐函数存在定理 2（二元隐函数）

若方程 $F(x, y, z) = 0$ 确定了二元隐函数 $z = f(x, y)$，则有：

$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z} \quad (F_z \neq 0)$$

##### 例 16
 $z = f(x, y)$，
设 $x^2 + y^2 + z^2 - 4z = 0$，求其二阶偏导数 $\frac{\partial^2 z}{\partial x^2}$。

**解**： 令隐函数表达式为 $F(x, y, z) = x^2 + y^2 + z^2 - 4z$。 首先计算一阶偏导数：

$$F_x = 2x, \quad F_z = 2z - 4$$

利用定理公式求一阶隐偏导：

$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z} = -\frac{2x}{2z-4} = \frac{x}{2-z}$$

接下来求二阶偏导：对 $\frac{\partial z}{\partial x}$ 再对 $x$ 求偏导，此时**牢记** $z$ **是关于** $x$ **的函数**：

$$\begin{aligned} \frac{\partial^2 z}{\partial x^2} &= \frac{\partial}{\partial x}\left( \frac{x}{2-z} \right) \\ &= \frac{1 \cdot (2-z) - x \cdot \left( -\frac{\partial z}{\partial x} \right)}{(2-z)^2} \\ &= \frac{(2-z) + x \left( \frac{x}{2-z} \right)}{(2-z)^2} = \frac{(2-z)^2 + x^2}{(2-z)^3} \end{aligned}$$

### 3. 隐函数存在定理 3（方程组确定的隐函数）

如果自变量和因变量的关系由方程组给出：

$$\begin{cases} F(x, y, u, v) = 0 \\ G(x, y, u, v) = 0 \end{cases}$$

此方程组确定了两个二元自变量函数 $u = u(x,y)$ 和 $v = v(x,y)$。

求偏导通法： 直接在方程组两边分别对 $x$（或对 $y$）求偏导，将偏导数 $\frac{\partial u}{\partial x}$ 和 $\frac{\partial v}{\partial x}$ 视作线性方程组中的未知数，通过代数消元法或**克莱姆法则 ([[Cramer's Rule]])** 求解。

##### 例 17

设由方程组 $\begin{cases} xu - yv = 0 \\ yu + xv = 1 \end{cases}$ 确定了隐函数 $u, v$，求偏导数 $\frac{\partial u}{\partial x}$。

**解**： 方程组两边同时对自变量 $x$ 求偏导，注意 $u, v$ 是 $x$ 的隐函数，而 $y$ 在此时视作常数：

$$\begin{cases} u + x\frac{\partial u}{\partial x} - y\frac{\partial v}{\partial x} = 0 \\ y\frac{\partial u}{\partial x} + v + x\frac{\partial v}{\partial x} = 0 \end{cases}$$

整理方程组，把未知数项放在左边，常数项移到右边：

$$\begin{cases} x\frac{\partial u}{\partial x} - y\frac{\partial v}{\partial x} = -u \\ y\frac{\partial u}{\partial x} + x\frac{\partial v}{\partial x} = -v \end{cases}$$

这是一个关于 $\frac{\partial u}{\partial x}$ 和 $\frac{\partial v}{\partial x}$ 的二元一次线性方程组。 使用代数消元法： 第一个方程乘以 $x$，第二个方程乘以 $y$：

$$\begin{cases} x^2\frac{\partial u}{\partial x} - xy\frac{\partial v}{\partial x} = -xu \\ y^2\frac{\partial u}{\partial x} + xy\frac{\partial v}{\partial x} = -yv \end{cases}$$

两式相加，消去含 $\frac{\partial v}{\partial x}$ 的项：

$$(x^2 + y^2)\frac{\partial u}{\partial x} = -(xu + yv) \implies \frac{\partial u}{\partial x} = -\frac{xu+yv}{x^2+y^2}$$

## 六、 几何应用：切平面、法平面、切线与法线

多元微分在几何上提供了极其强大的工具，让我们能精确计算任意空间曲面的“切平面”和空间曲线的“切线”。

### 1. 核心公式导航表

| 几何对象类型 | 表达方程                                                     | 关键方向向量 / 法向量              | 切平面 / 切线方程                                            | 法线 / 法平面方程                                           |
| ------------ | ------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| **空间曲面** | $F(x,y,z)=0$                                                 | 法向量 $\vec{n} = (F_x, F_y, F_z)$ | $F_x(x-x_0) + F_y(y-y_0) + F_z(z-z_0) = 0$                   | $\frac{x-x_0}{F_x} = \frac{y-y_0}{F_y} = \frac{z-z_0}{F_z}$ |
| **空间曲线** | 参数方程 $\begin{cases} x=x(t) \\ y=y(t) \\ z=z(t) \end{cases}$ | 切向量 $\vec{T} = (x', y', z')$    | $\frac{x-x_0}{x'(t_0)} = \frac{y-y_0}{y'(t_0)} = \frac{z-z_0}{z'(t_0)}$ | $x'(x-x_0) + y'(y-y_0) + z'(z-z_0) = 0$                     |

#### 几何对应记忆口诀：

- **曲面**有**切平面**（由法向量控制）和**法线**。
- **曲线**有**切线**（由切向量控制）和**法平面**。

##### 例 18

求空间曲线 $\begin{cases} x^{2}+y^{2}+z^{2}=6 \\ x+y+z=0 \end{cases}$ 在点 $(0, \sqrt{3}, -\sqrt{3})$ 处的切线与法平面方程。

**解**： 由于曲线由两个曲面的交线隐式给出，我们有两种方法求切向量。 **最快的方法——全微分求导比值法**： 视 $x$ 为自变量，对两方程同时对 $x$ 求导（寻找切向量分量比值 $1 : \frac{\mathrm{d}y}{\mathrm{d}x} : \frac{\mathrm{d}z}{\mathrm{d}x}$）：

$$\begin{cases} 2x + 2y\frac{\mathrm{d}y}{\mathrm{d}x} + 2z\frac{\mathrm{d}z}{\mathrm{d}x} = 0 \\ 1 + \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{\mathrm{d}z}{\mathrm{d}x} = 0 \end{cases}$$

将已知点 $(0, \sqrt{3}, -\sqrt{3})$ 代入：

$$\begin{cases} 2(0) + 2\sqrt{3}\frac{\mathrm{d}y}{\mathrm{d}x} - 2\sqrt{3}\frac{\mathrm{d}z}{\mathrm{d}x} = 0 \implies \frac{\mathrm{d}y}{\mathrm{d}x} - \frac{\mathrm{d}z}{\mathrm{d}x} = 0 \\ 1 + \frac{\mathrm{d}y}{\mathrm{d}x} + \frac{\mathrm{d}z}{\mathrm{d}x} = 0 \end{cases}$$

解得：

$$\frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{1}{2}, \quad \frac{\mathrm{d}z}{\mathrm{d}x} = -\frac{1}{2}$$

因此，曲线在点 $(0, \sqrt{3}, -\sqrt{3})$ 处的方向切向量可写为：

$$\vec{T} = \left( 1, \frac{\mathrm{d}y}{\mathrm{d}x}, \frac{\mathrm{d}z}{\mathrm{d}x} \right) = \left( 1, -\frac{1}{2}, -\frac{1}{2} \right) \sim (2, -1, -1)$$

- **切线方程**：

  $$\frac{x-0}{2} = \frac{y-\sqrt{3}}{-1} = \frac{z+\sqrt{3}}{-1}$$

- **法平面方程**（以切向量作为法向量 $\vec{n} = (2, -1, -1)$）：

  $$2(x-0) - 1(y-\sqrt{3}) - 1(z+\sqrt{3}) = 0 \implies 2x - y - z = 0$$

## 七、 多元函数的极值

最后，我们关注多元微分学的最顶层应用：求最大值和最小值（最优化问题）。主要分为**无条件极值**与**有条件约束极值**。

### 1. 无条件极值（二次判别法）

求函数 $f(x, y)$ 无条件极值的标准解题程序：

1. **第一步：求驻点** 解方程组 $\begin{cases} f_x(x, y) = 0 \\ f_y(x, y) = 0 \end{cases}$，得到驻点 $(x_i, y_i)$。

2. **第二步：求二阶导数值** 对每个驻点分别计算：

   $$A = f''_{xx}(x_i, y_i), \quad B = f''_{xy}(x_i, y_i), \quad C = f''_{yy}(x_i, y_i)$$

3. **第三步：极值二次判别** 计算判别式 $\Delta = AC - B^2$：

   - **若** $\Delta > 0$**：存在极值。**
     - 当 $A < 0$ 时，取得**极大值**；
     - 当 $A > 0$ 时，取得**极小值**。
   - **若** $\Delta < 0$**：不存在极值**（此点为鞍点 / Saddle Point）。
   - **若** $\Delta = 0$**：无法判定**（需使用更高阶导数或定义进行分析）。

#### 典型例题

##### 例 19

求函数 $f(x,y)=x^{3}-y^{3}+3x^{2}+3y^{2}-9x$ 的所有极值。

**解**： **第一步：求驻点** 求一阶偏导数并令其为 $0$：

$$\begin{cases} f_x = 3x^2 + 6x - 9 = 0 \implies x^2 + 2x - 3 = 0 \implies (x+3)(x-1) = 0 \\ f_y = -3y^2 + 6y = 0 \implies -3y(y-2) = 0 \end{cases}$$

解得自变量组合：$x = 1$ 或 $x = -3$；$y = 0$ 或 $y = 2$。 得到 4 个驻点：$(1, 0)$，$(1, 2)$，$(-3, 0)$，$(-3, 2)$。

**第二步与第三步：计算二阶导数并作二次判别** 求二阶偏导数通用式：

$$f''_{xx} = 6x + 6, \quad f''_{xy} = 0, \quad f''_{yy} = -6y + 6$$

对 4 个驻点分别代入检测：

1. **对驻点** $(1, 0)$：

   $$A = f''_{xx}(1,0) = 12, \quad B = 0, \quad C = f''_{yy}(1,0) = 6$$

   $$\Delta = AC - B^2 = 12 \times 6 - 0^2 = 72 > 0$$

   因为 $\Delta > 0$ 且 $A = 12 > 0$，函数在 $(1,0)$ 处取得**极小值**：

   $$f(1,0) = 1^3 - 0^3 + 3(1)^2 + 3(0)^2 - 9(1) = -5$$

2. **对驻点** $(1, 2)$：

   $$A = f''_{xx}(1,2) = 12, \quad B = 0, \quad C = f''_{yy}(1,2) = -6$$

   $$\Delta = AC - B^2 = 12 \times (-6) - 0^2 = -72 < 0$$

   因为 $\Delta < 0$，该驻点**不是极值点**（为鞍点）。

3. **对驻点** $(-3, 0)$：

   $$A = f''_{xx}(-3,0) = -12, \quad B = 0, \quad C = f''_{yy}(-3,0) = 6$$

   $$\Delta = AC - B^2 = (-12) \times 6 - 0^2 = -72 < 0$$

   因为 $\Delta < 0$，该驻点**不是极值点**。

4. **对驻点** $(-3, 2)$：

   $$A = f''_{xx}(-3,2) = -12, \quad B = 0, \quad C = f''_{yy}(-3,2) = -6$$

   $$\Delta = AC - B^2 = (-12) \times (-6) - 0^2 = 72 > 0$$

   因为 $\Delta > 0$ 且 $A = -12 < 0$，函数在 $(-3,2)$ 处取得**极大值**：

   $$f(-3,2) = (-3)^3 - 2^3 + 3(-3)^2 + 3(2)^2 - 9(-3) = -27 - 8 + 27 + 12 + 27 = 31$$

### 2. 有条件约束极值（拉格朗日乘数法）

**实际应用场景**： 在实际生活中，我们往往要在资源有限的约束下最大化目标（如周长、体积、收益）。 例如：在约束条件 $g(x,y) = 0$ 之下，求目标函数 $f(x,y)$ 的极值。

#### 直观概念模型——修路与等高线

假设你负责在山上修一条公路（公路路线由约束条件 $g(x,y) = 0$ 确定），你想要找出公路上的海拔最高点。

- 如果我们把山的等高线（目标函数 $f(x,y)$ 的等值线）画出来。

- 只要公路路线与等高线保持相交，就说明沿着公路往前走，海拔还能继续变化（升高或降低）。

- **只有当公路路线与等高线正好相切（平行）的那一点，公路才达到了局部的最高点（或最低点）**。

- 因为两条曲线在相切点处的法线方向相同，意味着它们的**梯度向量平行**：

  $$\nabla f = \lambda \nabla g$$

  引入常数 $\lambda \neq 0$（拉格朗日乘子）。

#### 求解方法——拉格朗日辅助函数：

构造拉格朗日函数：

$$L(x, y, \lambda) = f(x, y) + \lambda g(x, y)$$

令其各偏导数皆为 $0$，解方程组寻找候选极值点：

$$\begin{cases} L_x = f_x + \lambda g_x = 0 \\ L_y = f_y + \lambda g_y = 0 \\ L_\lambda = g(x, y) = 0 \end{cases}$$

#### 典型例题

##### 例 20

已知直角三角形的斜边长度为定值 $l$，求当两直角边长度取何值时，该直角三角形具有最大周长。

**解**： 设直角三角形的两条直角边长度分别为 $x, y$。

- **目标函数**（周长最大）：

  $$f(x, y) = x + y + l$$

- **约束条件方程**（直角边与斜边几何关系）：

  $$x^2 + y^2 = l^2 \implies g(x, y) = x^2 + y^2 - l^2 = 0 \quad (x>0, y>0)$$

构造拉格朗日乘数辅助函数：

$$L(x, y, \lambda) = (x + y + l) + \lambda \left( x^2 + y^2 - l^2 \right)$$

对 $x, y, \lambda$ 求偏导并令其为 $0$：

$$\begin{cases} L_x = 1 + 2\lambda x = 0 \implies x = -\frac{1}{2\lambda} \\ L_y = 1 + 2\lambda y = 0 \implies y = -\frac{1}{2\lambda} \\ L_\lambda = x^2 + y^2 - l^2 = 0 \end{cases}$$

由前两式可以直接得出：

$$x = y$$

代入第三式几何约束条件中：

$$x^2 + x^2 = l^2 \implies 2x^2 = l^2 \implies x = \frac{l}{\sqrt{2}}$$

因此解得：

$$x = y = \frac{l}{\sqrt{2}}, \quad \lambda = -\frac{\sqrt{2}}{2l}$$

由于实际物理背景下一定存在最大周长，此时唯一的驻点即为最大值点。 **结论**：当两直角边相等（即三角形为**等腰直角三角形**，且直角边长为 $\frac{l}{\sqrt{2}}$）时，该三角形的周长取得最大值。

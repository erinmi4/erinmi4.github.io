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



# 📘 微分方程全能解题指南与考点精析

微分方程的核心意义在于：**当我们已知一个函数的导数关系（即事物发展的瞬时变化规律）时，通过建立方程、运用代换降维或结构转化，逆向求出系统的原状态函数** $y(x)$**。**

## 🎯 核心解题决策树（拿到题目第一步看什么）

![mermaid-drawing](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH7-%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B.assets/mermaid-drawing.png)

## 一、 一阶微分方程 (First-Order DE)

### 1. 经典基础一阶方程对照表

| 方程名称           | 标准形式                                    | 变换核心与通解公式                                           |
| ------------------ | ------------------------------------------- | ------------------------------------------------------------ |
| **一阶线性齐次**   | $y' + P(x)y = 0$                            | $y = C e^{-\int P(x)dx}$                                     |
| **一阶线性非齐次** | $y' + P(x)y = Q(x)$                         | $y = e^{-\int P(x)dx} \left[ \int Q(x)e^{\int P(x)dx} dx + C \right]$ |
| **伯努利方程**     | $y' + P(x)y = Q(x)y^n$  $(n \neq 0, 1)$     | 两边同除以 $y^n$，令 $z = y^{1-n}$。 转化为线性方程： $z' + (1-n)P(x)z = (1-n)Q(x)$ |
| **可分离变量形**   | $\frac{dy}{dx} = f(x)g(y)$                  | $\int \frac{1}{g(y)} dy = \int f(x) dx + C$                  |
| **齐次方程**       | $\frac{dy}{dx} = f\left(\frac{y}{x}\right)$ | 令 $y = ux \implies \frac{dy}{dx} = u + x\frac{du}{dx}$。 转化为：$\int \frac{du}{f(u)-u} = \int \frac{dx}{x}$ |
| **线性代换形**     | $\frac{dy}{dx} = f(ax+by+c)$                | 令 $u = ax+by+c \implies \frac{du}{dx} = a + b f(u)$ (转化为分离变量形) |

### 2. 缺失考点补充 ①：微分方程的几何构建 (DE Formulation)

**解题核心**：已知含有一个或多个任意常数 $C_i$ 的曲线族方程 $F(x, y, C_1, C_2, \dots) = 0$，通过对其求导，结合原方程**消去所有任意常数**，从而建立描述该曲线族共同几何特征的微分方程。

#### 📝 经典例题

求在直角坐标系中，所有与 $y$ 轴相切于原点的圆族所满足的微分方程。

#### 💡 详细步骤

1. **建立几何方程**： 圆心在 $x$ 轴上且与 $y$ 轴相切于原点的圆，其圆心坐标为 $(\frac{C}{2}, 0)$，半径为 $\frac{C}{2}$。圆方程为：

   $$(x - \frac{C}{2})^2 + y^2 = (\frac{C}{2})^2 \implies x^2 + y^2 = Cx \quad (C \neq 0)$$

2. **求导获取导数关系**： 等式两边同时对自变量 $x$ 求导：

   $$2x + 2y \frac{dy}{dx} = C \implies C = 2x + 2yy'$$

3. **消去常数** $C$： 将 $C$ 代回原圆方程中：

   $$x^2 + y^2 = (2x + 2yy')x \implies x^2 + y^2 = 2x^2 + 2xyy'$$

   整理得到该圆族的微分方程：

   $$x^2 + 2xy\frac{dy}{dx} - y^2 = 0$$

### 3. 缺失考点补充 ②：全微分方程与积分因子 (Exact DE & Integrating Factors)

#### (1) 全微分方程 (Exact Differential Equation)

**判定标准**：形如 $P(x,y)dx + Q(x,y)dy = 0$ 的方程，若满足下述对称偏导关系，则为全微分方程：

$$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$

其通解形式为 $u(x,y) = C$，其中 $u(x,y) = \int P(x,y)dx + \int \left[ Q(x,y) - \frac{\partial}{\partial y}\int P(x,y)dx \right] dy$。

#### 📝 经典例题

解微分方程：$(x^3 - 2xy - y)dx + (y^3 - x^2 - x)dy = 0$。

#### 💡 详细步骤

1. **全微分判定**： 令 $P(x,y) = x^3 - 2xy - y$，$Q(x,y) = y^3 - x^2 - x$。

   $$\frac{\partial P}{\partial y} = -2x - 1, \quad \frac{\partial Q}{\partial x} = -2x - 1$$

   因为 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$，故此方程为全微分方程。

2. **积分求解原函数**： 对 $P(x,y)$ 关于 $x$ 进行偏积分（将 $y$ 视为常数）：

   $$u(x,y) = \int (x^3 - 2xy - y)dx = \frac{x^4}{4} - x^2y - yx + h(y)$$

   将上式对 $y$ 求偏导并与 $Q(x,y)$ 进行比对：

   $$\frac{\partial u}{\partial y} = -x^2 - x + h'(y) = y^3 - x^2 - x \implies h'(y) = y^3$$

   对 $h'(y)$ 积分得：$h(y) = \frac{y^4}{4}$。

3. **写出通解**： 原方程的通解为 $u(x,y) = C_1$，即：

   $$\frac{x^4}{4} - x^2y - xy + \frac{y^4}{4} = C_1 \implies x^4 + y^4 - 4xy(x+1) = C \quad (C = 4C_1)$$

#### (2) 积分因子法 (Integrating Factor)

若 $\frac{\partial P}{\partial y} \neq \frac{\partial Q}{\partial x}$，则方程非全微分。若能找到一个函数 $\mu(x,y)$ 乘以原方程后使其变为全微分方程，则称 $\mu$ 为**积分因子**。

- **单变量积分因子判定**：
  1. 若 $\frac{1}{Q}\left(\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}\right) = F(x)$ 仅为 $x$ 的函数 $\implies \mu(x) = e^{\int F(x) dx}$
  2. 若 $\frac{1}{P}\left(\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}\right) = G(y)$ 仅为 $y$ 的函数 $\implies \mu(y) = e^{-\int G(y) dy}$

#### 📝 经典例题

解微分方程：$(1-2x^2y)dx + x(2y-x^2)dy = 0$。

#### 💡 详细步骤

1. **测试全微分性**： $P = 1 - 2x^2y$，$Q = 2xy - x^3 \implies \frac{\partial P}{\partial y} = -2x^2$，$ \frac{\partial Q}{\partial x} = 2y - 3x^2$。 两者不相等，非全微分方程。

2. **寻找积分因子**： 计算偏导差：$\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} = -2x^2 - (2y - 3x^2) = x^2 - 2y$。 利用公式检测是否仅与 $x$ 相关：

   $$\frac{1}{Q}\left(\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}\right) = \frac{x^2 - 2y}{x(2y - x^2)} = -\frac{2y - x^2}{x(2y - x^2)} = -\frac{1}{x}$$

   此式仅与 $x$ 相关，因此存在仅含 $x$ 的积分因子：

   $$\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln|x|} = \frac{1}{x}$$

3. **转化并求解新方程**： 将原方程乘以 $\mu(x) = \frac{1}{x}$：

   $$\left(\frac{1}{x} - 2xy\right)dx + (2y - x^2)dy = 0$$

   此时新方程中，新的 $P_{new} = \frac{1}{x} - 2xy$，$Q_{new} = 2y - x^2$，易证 $\frac{\partial P_{new}}{\partial y} = \frac{\partial Q_{new}}{\partial x} = -2x$。 对 $P_{new}$ 关于 $x$ 积分：

   $$u(x,y) = \int \left(\frac{1}{x} - 2xy\right)dx = \ln|x| - x^2y + h(y)$$

   求 $y$ 偏导：

   $$\frac{\partial u}{\partial y} = -x^2 + h'(y) = 2y - x^2 \implies h'(y) = 2y \implies h(y) = y^2$$

   故方程的通解为：

   $$\ln|x| - x^2y + y^2 = C$$

### 4. 缺失考点补充 ③：正交轨迹群 (Orthogonal Trajectories)

**解题核心**： 在几何学与物理学（如流线与等势线）中，若求与曲线族 $f(x, y, y') = 0$ 处处垂直相交的另一曲线族，只需**将已知曲线族微分方程中的** $y'$ **替换为** $-\frac{1}{y'}$，解出新方程即可。

#### 📝 经典例题

求抛物线族 $y^2 = Cx$ 的正交轨迹群。

#### 💡 详细步骤

1. **求原曲线族的微分方程**： 对原方程求导：$2yy' = C$。 消去常数 $C$（由于 $C = \frac{y^2}{x}$）：

   $$2yy' = \frac{y^2}{x} \implies y' = \frac{y}{2x}$$

2. **建立正交轨迹的微分方程**： 将 $y'$ 替换为 $-\frac{1}{y'}$：

   $$-\frac{1}{y'} = \frac{y}{2x} \implies y' = -\frac{2x}{y}$$

3. **积分求解新方程**： 这是一个非常简单的可分离变量方程：

   $$y dy = -2x dx \implies \int y dy = \int -2x dx \implies \frac{y^2}{2} = -x^2 + C_0$$

   整理成标准几何形式：

   $$2x^2 + y^2 = C \quad (C = 2C_0)$$

   **物理与几何几何意义**：抛物线群 $y^2 = Cx$ 的正交轨迹是一组同心的椭圆群 $2x^2 + y^2 = C$。

### 5. 特殊一阶非线性分式方程

针对具有线性分式构造的方程：$\frac{dy}{dx} = f\left( \frac{ax + by + c}{px + qy + r} \right)$，其解法完全取决于行列式交叉相乘之差：$\Delta = aq - bp$。

```
                       分式线性构造检测 (aq - bp)
                                    │
                  ┌─────────────────┴─────────────────┐
            aq - bp = 0                         aq - bp ≠ 0
            (系数成比例)                        (两直线相交)
                  │                                   │
         [系数平行的整体代换]                  [平移坐标消去常数项]
           令 u = px + qy                      解联立方程组得交点 (α, β)
                  │                            令 x = u + α, y = v + β
         转化为【可分离变量形】                 转化为【同次齐次方程】
```

### 6. 克莱罗方程 (Clairaut's Equation) 与包络线

**标准形式**：

$$y = x y' + f(y')$$

克莱罗方程非常特殊，它有两组截然不同的解：

1. **一般解（直线族）**：直接用任意常数 $C$ 替代 $y'$ 即可：

   $$y = Cx + f(C)$$

2. **奇异解（包络线）**：由直线族围成的一条曲线，该曲线在每一点都与直线族中的某一条切合。

#### 📝 经典例题

解微分方程 $y = x y' + (y')^2 - 1$，并求出它的包络线（奇异解）。

#### 💡 详细步骤

1. **求一般解**： 令 $y' = p \implies y = px + p^2 - 1$。 对两边求关于 $x$ 的导数：

   $$y' = p = p + xp' + 2pp' \implies p'(x + 2p) = 0$$

   - 分支 1：$p' = 0 \implies p = C$（常数）。 代回原方程，直接得到**一般解**：

     $$\mathbf{y = Cx + C^2 - 1} \quad (\text{一簇直线群})$$

2. **求奇异解（包络线）**：

   - 分支 2：$x + 2p = 0 \implies p = -\frac{x}{2}$。 将其代回原方程中消去中间变量 $p$：

     $$y = \left(-\frac{x}{2}\right)x + \left(-\frac{x}{2}\right)^2 - 1 = -\frac{x^2}{2} + \frac{x^2}{4} - 1$$

     得到**奇异解**：

     $$\mathbf{y = -\frac{1}{4}x^2 - 1} \quad (\text{包络抛物线})$$

3. **快捷偏导法（Envelope Method）**： 如果你已经求得了一般解 $y = Cx + C^2 - 1$，可以直接对参数 $C$ 求偏导：

   $$\frac{\partial}{\partial C}[Cx + C^2 - 1 - y] = 0 \implies x + 2C = 0 \implies C = -\frac{x}{2}$$

   代入一般解同样可以秒杀奇异解：$y = -\frac{1}{4}x^2 - 1$。

## 二、 二阶可降阶微分方程 (Reducible Second-Order DE)

通过换元策略，将难以攻克的二阶导数降为一阶进行逐级突破。

| 类型特征                                     | SOP 解题步骤                                                 |
| -------------------------------------------- | ------------------------------------------------------------ |
| **类型 ①：**$y'' = f(x)$                     | **直接连续两次积分**：1) $y' = \int f(x)dx + C_1$2) $y = \int \left( \int f(x)dx \right)dx + C_1x + C_2$ |
| **类型 ②：**$y'' = f(x, y')$  (缺原函数 $y$) | **令一阶导为新变量** $p$：令 $y' = p(x)$，则 $y'' = \frac{dp}{dx}$。代入转化为关于 $p(x)$ 的一阶方程，求出 $p$ 后再积分一次。 |
| **类型 ③：**$y'' = f(y, y')$  (缺自变量 $x$) | **引入链式法则将** $y$ **视作自变量**：令 $y' = p(y)$。对 $x$ 求导时利用复合链式法则：$y'' = \frac{dp}{dx} = \frac{dp}{dy} \cdot \frac{dy}{dx} = p \frac{dp}{dy}$。代入转化为关于 $p(y)$ 的一阶方程。 |

### 💡 缺失考点补充 ④：初值问题 (IVP) 与 边值问题 (BVP) 的边界条件区分

- **初值问题 (IVP)**：所有约束条件都在**同一个自变量点**给出。例如：$y(0) = y_0, y'(0) = y'_0$。
- **边值问题 (BVP)**：约束条件在**两个或多个不同的边界自变量点**给出。例如：$y(0) = a, y(L) = b$。（教材 P155 追记 6.1）

#### 📝 经典例题

求解二阶微分方程 $y'' + y = 0$，使其满足边值条件：$y(0) = 2, y\left(\frac{\pi}{2}\right) = 1$。

#### 💡 详细步骤

1. **写出通解**： 对于常系数齐次方程 $y'' + y = 0$，特征方程为 $r^2 + 1 = 0 \implies r = \pm i$。 通解为：

   $$y(x) = C_1 \cos x + C_2 \sin x$$

2. **带入边界条件定常数**：

   - 带入第一个边界点 $x = 0$：

     $$y(0) = C_1 \cos 0 + C_2 \sin 0 = 2 \implies C_1 = 2$$

   - 带入第二个边界点 $x = \frac{\pi}{2}$：

     $$y\left(\frac{\pi}{2}\right) = C_1 \cos\left(\frac{\pi}{2}\right) + C_2 \sin\left(\frac{\pi}{2}\right) = 1 \implies C_2 \cdot 1 = 1 \implies C_2 = 1$$

3. **得出特解**：

   $$y(x) = 2\cos x + \sin x$$

## 三、 二阶常系数线性微分方程 (Constant-Coefficient Linear DE)

### 1. 齐次方程：$y'' + py' + qy = 0$

建立特征方程 $r^2 + pr + q = 0$，根据根的判别式 $\Delta = p^2 - 4q$ 确定通解形式：

- $\Delta > 0$**（两个不相等实根** $r_1 \neq r_2$**）**：

  $$y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$$

- $\Delta = 0$**（两个相等实根** $r_1 = r_2 = r$**）**：

  $$y = (C_1 + C_2 x) e^{r x}$$

- $\Delta < 0$**（共轭复根** $r = \alpha \pm \beta i$**）**：

  $$y = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x)$$

### 2. 缺失考点补充 ⑤：欧拉微分方程 (Euler-Cauchy Equation)

**识别特征**：各项系数中自变量 $x$ 的次数与其对应的导数阶数完全一致，如：

$$x^2 \frac{d^2y}{dx^2} + a x \frac{dy}{dx} + b y = f(x) \quad (x > 0)$$

#### 🛠️ 解法核心

引入坐标代换 $x = e^t \implies t = \ln x$。则导数算子转换为关于 $t$ 的常系数算子 $D = \frac{d}{dt}$：

1. $x \frac{dy}{dx} = Dy$
2. $x^2 \frac{d^2y}{dx^2} = D(D-1)y$
3. 转化为常系数方程：$[D(D-1) + aD + b]y = f(e^t)$

#### 📝 经典例题

解微分方程：$x^2 y'' - xy' + y = 3x^3$。

#### 💡 详细步骤

1. **变量替换**： 令 $x = e^t$，$t = \ln x$。令 $D = \frac{d}{dt}$。 原方程可改写为：

   $$D(D-1)y - Dy + y = 3e^{3t} \implies (D^2 - 2D + 1)y = 3e^{3t}$$

2. **解对应的齐次方程**： 常系数齐次方程为 $(D^2 - 2D + 1)y = 0$，其特征方程为：

   $$r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0 \implies r_1 = r_2 = 1 \quad (\text{重根})$$

   其齐次解为：

   $$y_h = (C_1 + C_2 t)e^t \implies y_h = (C_1 + C_2 \ln x)x$$

3. **求非齐次特解**： 由于非齐次项为 $3e^{3t}$，且自变量系数 $3$ 不是特征方程的根，故设特解形式为 $Y^* = A e^{3t}$。 代入常系数方程：

   $$(D^2 - 2D + 1)(Ae^{3t}) = 3e^{3t} \implies A(9 - 6 + 1)e^{3t} = 3e^{3t} \implies 4A = 3 \implies A = \frac{3}{4}$$

   所以特解为 $Y^* = \frac{3}{4}e^{3t} = \frac{3}{4}x^3$。

4. **写出最终通解**：

   $$y = y_h + Y^* = (C_1 + C_2 \ln x)x + \frac{3}{4}x^3$$

## 四、 变系数线性微分方程高级解法 (Advanced Non-Constant Coefficient DE)

面对系数随 $x$ 变化的非线性/变系数方程：$y'' + p(x)y' + q(x)y = f(x)$，有四套高阶解法。

### 1. 缺失考点补充 ⑥：同伴齐次方程特解的“观察/发现法”

在变系数方程解法中，第一步往往需要我们先知道同伴齐次方程 $y'' + p(x)y' + q(x)y = 0$ 的一个特解。通过分析系数 $p(x), q(x)$，可以直接利用下表“秒杀”出第一个特解 $y_1(x)$：

| 满足系数的关系条件                                     | 对应的同伴齐次特解 $y_1(x)$ |
| ------------------------------------------------------ | --------------------------- |
| $$p(x) + x \cdot q(x) = 0$$                            | $$y_1 = x$$                 |
| $$m(m-1) + m \cdot x \cdot p(x) + x^2 \cdot q(x) = 0$$ | $$y_1 = x^m$$               |
| $$1 + p(x) + q(x) = 0$$                                | $$y_1 = e^x$$               |
| $$1 - p(x) + q(x) = 0$$                                | $$y_1 = e^{-x}$$            |
| $$m^2 + m \cdot p(x) + q(x) = 0$$                      | $$y_1 = e^{mx}$$            |

### 2. 降阶法 (Reduction of Order - 已知 1 个齐次特解)

**适用场景**：已知同伴齐次方程的一个特解为 $y_1$。 **核心代换**： 设通解为 $y = u(x)y_1(x)$。 对其连续求导，带回原非齐次方程整理后，其关于 $u$ 的原函数项会全部消去，仅剩下 $u''$ 与 $u'$ 项。 令 $w = u'$ 即可顺利转化为关于 $w$ 的**一阶线性微分方程**：

$$w' + \left( \frac{2y'_1}{y_1} + p(x) \right)w = \frac{f(x)}{y_1}$$

#### 📝 经典例题

解微分方程 $x^2 y'' - 3xy' + 3y = 2x^3 - x^2$。

#### 💡 详细步骤

1. **寻找齐次特解**： 将原方程化为标准型：$y'' - \frac{3}{x}y' + \frac{3}{x^2}y = 2x - 1$。 其中 $p(x) = -\frac{3}{x}$，$q(x) = \frac{3}{x^2}$。 套用观察法条件（一）：

   $$p(x) + x \cdot q(x) = -\frac{3}{x} + x\left(\frac{3}{x^2}\right) = 0$$

   由于满足条件，直接确定其齐次方程的一个非零特解为：$\mathbf{y_1 = x}$。

2. **降阶代换**： 设 $y = ux \implies y' = u'x + u \implies y'' = u''x + 2u'$。 将导数关系代入原微分方程：

   $$x^2(u''x + 2u') - 3x(u'x + u) + 3ux = 2x^3 - x^2$$

   $$x^3 u'' + 2x^2 u' - 3x^2 u' - 3xu + 3xu = 2x^3 - x^2$$

   $$x^3 u'' - x^2 u' = 2x^3 - x^2 \implies u'' - \frac{1}{x}u' = 2 - \frac{1}{x}$$

3. **解一阶线性方程**： 令 $w = u'$，则：

   $$w' - \frac{1}{x}w = 2 - \frac{1}{x}$$

   利用一阶线性微分方程求解公式（积分因子为 $\frac{1}{x}$）：

   $$\frac{w}{x} = \int \left(2 - \frac{1}{x}\right)\frac{1}{x} dx = \int \left(\frac{2}{x} - \frac{1}{x^2}\right) dx = 2\ln|x| + \frac{1}{x} + C_1$$

   $$u' = w = 2x\ln|x| + 1 + C_1x$$

4. **积分还原原变量**： 对 $u'$ 积分（利用分部积分法求解 $\int 2x\ln|x|dx$）：

   $$u(x) = \int (2x\ln|x| + 1 + C_1x)dx = x^2\ln|x| - \frac{x^2}{2} + x + \frac{C_1}{2}x^2 + C_2$$

   由于 $\frac{C_1}{2}$ 与 $-\frac{1}{2}$ 均为常数，可合并为新常数 $K_1$：

   $$u(x) = x^2\ln|x| + x + K_1 x^2 + C_2$$

   因为最初代换为 $y = ux$，故通解为：

   $$y = ux = x^3\ln|x| + x^2 + K_1 x^3 + C_2 x$$

### 3. 广义常数变易法 (Variation of Parameters - 已知 2 个齐次特解)

**适用场景**：已知同伴齐次方程的两个线性无关特解 $y_1, y_2$。 **求解公式**： 非齐次方程的特解为 $Y_0 = u_1(x)y_1(x) + u_2(x)y_2(x)$，其系数可通过下述积分直接套出：

$$u_1(x) = \int \frac{-y_2 f(x)}{W(y_1, y_2)} dx, \quad u_2(x) = \int \frac{y_1 f(x)}{W(y_1, y_2)} dx$$

其中分母 $W(y_1, y_2) = y_1 y_2' - y_1' y_2$ 为 **朗斯基行列式 (Wronskian)**。

#### 📝 经典例题

解变系数方程：$x^2 y'' - 2xy' + 2y = x^3\ln x$，已知其同伴齐次方程的两个特解为 $y_1 = x, y_2 = x^2$。

#### 💡 详细步骤

1. **标准化非齐次项**： 务必先将非齐次方程化为最高阶导数系数为 1 的标准型：

   $$y'' - \frac{2}{x}y' + \frac{2}{x^2}y = x\ln x \implies f(x) = x\ln x$$

2. **计算 Wronskian 决定因式**：

   $$W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y'_1 & y'_2 \end{vmatrix} = \begin{vmatrix} x & x^2 \\ 1 & 2x \end{vmatrix} = x(2x) - x^2(1) = x^2 \quad (\neq 0, \text{说明解线性无关})$$

3. **求变易系数** $u_1, u_2$：

   $$u_1(x) = \int \frac{-x^2 (x\ln x)}{x^2} dx = -\int x\ln x dx$$

   使用分部积分法：

   $$u_1(x) = -\left[ \frac{x^2}{2}\ln x - \int \frac{x}{2} dx \right] = -\frac{x^2}{2}\ln x + \frac{x^2}{4}$$

   $$u_2(x) = \int \frac{x (x\ln x)}{x^2} dx = \int \ln x dx = x\ln x - x$$

4. **组装特解与通解**： 非齐次特解为：

   $$Y_0 = u_1 y_1 + u_2 y_2 = \left( -\frac{x^2}{2}\ln x + \frac{x^2}{4} \right)x + \left( x\ln x - x \right)x^2$$

   $$Y_0 = -\frac{x^3}{2}\ln x + \frac{x^3}{4} + x^3\ln x - x^3 = \frac{x^3}{2}\ln x - \frac{3}{4}x^3$$

   最终方程通解（齐次通解 + 变系数特解）：

   $$y = C_1 x + C_2 x^2 + \frac{x^3}{2}\ln x - \frac{3}{4}x^3$$

   *(注：由于* $-\frac{3}{4}x^3$ *的积分形式在更一般的情况下能与齐次解部分合并，这里保留其完整物理特解形式。)*

### 4. 缺失考点补充 ⑦：标准形转换法 (Standard Form Transformation / Normal Form)

**解题核心**：对于一般二阶线性非齐次微分方程：

$$y'' + p(x)y' + q(x)y = f(x)$$

如果其中含有复杂的一阶导数项 $p(x)y'$，可以通过代换 $y(x) = u(x)v(x)$，令：

$$v(x) = e^{-\frac{1}{2}\int p(x)dx}$$

从而**彻底消去一阶导数项**，将方程转化为不含一阶导数的**标准形（Normal Form）**：

$$u'' + P(x)u = R(x)$$

其中：

- $$P(x) = q(x) - \frac{1}{2}p'(x) - \frac{1}{4}p^2(x)$$
- $$R(x) = \frac{f(x)}{v(x)}$$

#### 📝 经典例题

解微分方程：$y'' + 2xy' + x^2 y = 0$。

#### 💡 详细步骤

1. **识别参数并计算** $v(x)$： 这里 $p(x) = 2x, q(x) = x^2, f(x) = 0$。 计算转换核函数 $v(x)$：

   $$v(x) = e^{-\frac{1}{2}\int 2x dx} = e^{-\frac{x^2}{2}}$$

2. **计算标准形系数** $P(x)$ **与** $R(x)$：

   $$P(x) = q(x) - \frac{1}{2}p'(x) - \frac{1}{4}p^2(x) = x^2 - \frac{1}{2}(2) - \frac{1}{4}(4x^2) = x^2 - 1 - x^2 = -1$$

   由于非齐次项 $f(x) = 0$，故：

   $$R(x) = 0$$

3. **建立并求解标准形方程**： 新方程为：

   $$u'' - u = 0$$

   这是一个非常简单的常系数齐次方程，特征方程为 $r^2 - 1 = 0 \implies r = \pm 1$。 其通解为：

   $$u(x) = C_1 e^x + C_2 e^{-x}$$

4. **还原原变量** $y(x)$： 由于 $y = u \cdot v$，代回转换核：

   $$y(x) = e^{-\frac{x^2}{2}} \left( C_1 e^x + C_2 e^{-x} \right)$$

   *(此方法在解量子力学中的一维薛定谔方程或特殊的变系数物理模型时极其好用。)*
   
   ​	

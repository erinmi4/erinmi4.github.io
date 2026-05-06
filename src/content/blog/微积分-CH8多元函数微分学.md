---
title: "微积分-CH8多元函数微分学"
slug: "微积分-CH8多元函数微分学"
description: "微积分-CH8多元函数微分学，待补充摘要。"
pubDate: 2026-05-06
updatedDate: 2026-05-06
tags:
  - 修考
  - 微积分
category: 修考
draft: false
---

# 第八章 多元函数微分学

【【高等数学（下）】概念理解+解题方法  7小时 精讲速学！】 https://www.bilibili.com/video/BV1ZK4y1u7WU/?p=2&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

## 一、 多元函数的极限

### 1. 极限的概念

- **一元极限 vs 多元极限**：
  - 一元函数的极限 $x \to x_0$ 只有左右两个方向。
  - 多元函数的极限 $(x, y) \to (x_0, y_0)$ 有无数个方向。
- **定义核心**：我们定义极限为“点到点的距离趋近于 0”，而不限制趋近的具体方向。

![image-20260506165611780](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH8%E5%A4%9A%E5%85%83%E5%87%BD%E6%95%B0%E5%BE%AE%E5%88%86%E5%AD%A6.assets/image-20260506165611780.png)

### 2. 计算方法与例题

多元极限计算通常采用 **代入法** 或 **化简法**。

**例 1（根式有理化）**： 求 $\lim_{(x,y)\to(0,0)} \frac{2 - \sqrt{xy+4}}{xy}$ 

解：分子有理化

$$\lim_{(x,y)\to(0,0)} \frac{(2 - \sqrt{xy+4})(2 + \sqrt{xy+4})}{xy(2 + \sqrt{xy+4})} = \lim_{(x,y)\to(0,0)} \frac{-xy}{xy(2 + \sqrt{xy+4})} = -\frac{1}{4}$$

**例 2（等价无穷小替换）**： 求 $\lim_{(x,y)\to(0,0)} \frac{1 - \cos(x^2+y^2)}{(x^2+y^2)e^{xy^2}}$ 

解：利用 $1 - \cos u \sim \frac{1}{2}u^2$ 且 $e^{xy^2} \to 1$

$$\lim_{(x,y)\to(0,0)} \frac{\frac{1}{2}(x^2+y^2)^2}{(x^2+y^2) \cdot 1} = \lim_{(x,y)\to(0,0)} \frac{1}{2}(x^2+y^2) = 0$$

### 3. 如何说明极限不存在（路径相关法）

若沿着不同路径趋近于同一点时，极限值不同，则该极限不存在。

**例 3**：说明 $\lim_{(x,y)\to(0,0)} \frac{xy}{x^2+y^2}$ 是否存在。

 解：设路径为直线 $y = kx$

$$\lim_{x\to 0} \frac{x(kx)}{x^2+(kx)^2} = \lim_{x\to 0} \frac{kx^2}{x^2(1+k^2)} = \frac{k}{1+k^2}$$

极限值随斜率 $k$ 的变化而变化，说明不同方向趋近时大小不一，故**极限不存在**。

**例 4**：说明 $\lim_{(x,y)\to(0,0)} \frac{x^2y}{x^4+y^2}$ 是否存在。 

解：为了让分子分母的次数“平起平坐”，设路径为抛物线 $y = kx^2$

$$\lim_{x\to 0} \frac{x^2(kx^2)}{x^4+(kx^2)^2} = \lim_{x\to 0} \frac{kx^4}{x^4(1+k^2)} = \frac{k}{1+k^2}$$

同样，极限值依赖于 $k$，故**极限不存在**（说明沿不同抛物线趋近结果不同）。

## 二、 多元函数微分学：导数与全微分

### 1. 偏导数 (Partial Derivative)

- **直观理解**：成绩 = $f(\text{时间, 方法, 环境})$。偏导数反映了“单一因素的变化如何影响最终结果”。
- **本质**：变化率。
- **计算法则**：**求哪个变量的偏导，就把哪个变量看作变量，其余变量全看作常数。**

**例 5**：$z = (1+xy)^y$，求 $\frac{\partial z}{\partial x}$ 和 $\frac{\partial z}{\partial y}$ 

解：

1. 求 $\frac{\partial z}{\partial x}$ 时，视 $y$ 为常数：

   $$\frac{\partial z}{\partial x} = y(1+xy)^{y-1} \cdot \frac{\partial(1+xy)}{\partial x} = y^2(1+xy)^{y-1}$$

2. 求 $\frac{\partial z}{\partial y}$ 时，涉及幂指函数 $z = e^{y \ln(1+xy)}$：

   $$\frac{\partial z}{\partial y} = e^{y \ln(1+xy)} \cdot \left[ \ln(1+xy) + y \cdot \frac{x}{1+xy} \right] = (1+xy)^y \left[ \ln(1+xy) + \frac{xy}{1+xy} \right]$$

### 2. 全微分 (Total Differential)

- **公式**：$dz = \frac{\partial z}{\partial x} dx + \frac{\partial z}{\partial y} dy$
- **理解**：类似于一元函数中的线性近似。它描述了当 $x$ 和 $y$ 同时发生微小变化时，函数 $z$ 的总变化。

### 3. 各种性质间的关系图

![image-20260506165649796](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH8%E5%A4%9A%E5%85%83%E5%87%BD%E6%95%B0%E5%BE%AE%E5%88%86%E5%AD%A6.assets/image-20260506165649796.png)

- **偏导数连续** $\implies$ **函数可微** $\implies$ **函数连续**。
- **函数可微** $\implies$ **偏导数存在**。
- 注意：**偏导数存在** 并不一定推导出 **函数连续**。
- 直观比喻：
  - **偏导**：只能在 $x, y$ 轴正交的方向上行动。
  - **连续**：可以从任意方向靠近。

## 三、 方向导数与梯度

### 1. 方向导数 (Directional Derivative)

- **定义**：函数在某一指定方向 $l$ 上的变化率。

- **公式**：$\frac{\partial f}{\partial l} = \frac{\partial f}{\partial x} \cos \alpha + \frac{\partial f}{\partial y} \cos \beta$ 其中 $\alpha, \beta$ 是方向 $l$ 与坐标轴的夹角。

- **向量视角**：方向导数可以看作是 **梯度向量** 与 **方向单位向量** 的点积：

  $$\frac{\partial f}{\partial l} = (\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}) \cdot (\cos \alpha, \sin \alpha) = \nabla f \cdot \vec{u}$$

### 2. 梯度 (Gradient)

- **定义**：$\text{grad} f = \nabla f = (\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y})$。
- **物理意义**：
  1. 梯度方向是函数**增加最快**的方向。
  2. 梯度的模 $| \nabla f |$ 是函数最大的变化率。
  3. 反方向是减小最快的方向；垂直方向变化率为 0。

**例 6**：已知 $\frac{\partial z}{\partial x} = e^2, \frac{\partial z}{\partial y} = 2e^2$，求梯度和变化率为 0 的方向。 解：

1. 梯度为 $(e^2, 2e^2)$。
2. 设变化率为 0 的方向为 $(a, b)$，则点积为 0： $a \cdot e^2 + b \cdot 2e^2 = 0 \implies a + 2b = 0$。 取一组解如 $(-2, 1)$。

## 四、 复合函数求导（链式法则）

计算核心是绘制**树状图**。

**例 7**：$z = u^2 + v^2$，$u = x + y$，$v = x - y$，求 $\frac{\partial z}{\partial x}$ 

解：根据链式法则（路径相加，链上相乘）：

$$\frac{\partial z}{\partial x} = \frac{\partial z}{\partial u} \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \frac{\partial v}{\partial x} = (2u \cdot 1) + (2v \cdot 1) = 2(u+v) = 4x$$

![image-20260506165734351](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH8%E5%A4%9A%E5%85%83%E5%87%BD%E6%95%B0%E5%BE%AE%E5%88%86%E5%AD%A6.assets/image-20260506165734351.png)

## 五、 多元函数的极值

### 1. 无条件极值

**判定步骤**：

1. **找驻点**：令 $\frac{\partial f}{\partial x} = 0, \frac{\partial f}{\partial y} = 0$，解出 $(x_i, y_i)$。
2. **二次判别**：设 $A = f''_{xx}, B = f''_{xy}, C = f''_{yy}$。
   - 计算 $\Delta = AC - B^2$：
     - 若 $\Delta > 0$：存在极值。且 $A > 0$ 为极小值，$A < 0$ 为极大值。
     - 若 $\Delta < 0$：不是极值点（鞍点）。
     - 若 $\Delta = 0$：无法判断。

**例 8**：$f(x,y) = x^3 - y^3 + 3(x^2 + y^2) - 9x$ 

解：

1. 求导：$f'_x = 3x^2 + 6x - 9 = 0, f'_y = -3y^2 + 6y = 0$。
2. 驻点：$(1,0), (1,2), (-3,0), (-3,2)$。
3. 检查 $AC-B^2$ 进行判断。

### 2. 有条件极值（拉格朗日乘数法）

- **场景**：在约束条件 $g(x,y) = 0$ 下求 $f(x,y)$ 的极值。
- **方法**：构造拉格朗日函数 $L(x,y,\lambda) = f(x,y) + \lambda g(x,y)$。
- **直观理解（修路与大山）**： 假设有一座大山（函数 $f$），现在要在山上修一条公路（约束条件 $g$）。公路的最高点，必然出现在“公路方向与等高线相切”的时候。此时，两者的梯度向量平行：$\nabla f = \lambda \nabla g$。

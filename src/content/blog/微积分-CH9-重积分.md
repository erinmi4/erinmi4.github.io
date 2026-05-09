---
title: "微积分-CH9-重积分"
slug: "微积分-CH9-重积分"
description: "微积分-CH9-重积分，待补充摘要。"
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 修考
  - 微积分
category: 修考
draft: false
---

【【高等数学（下）】概念理解+解题方法  7小时 精讲速学！】 https://www.bilibili.com/video/BV1ZK4y1u7WU/?p=3&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

<iframe src="https://drive.google.com/file/d/1HRCXEakSpWJtYA_pceA-A6pxSMgdJrig/preview" width="640" height="480"></iframe>



<iframe src="https://drive.google.com/file/d/1rHBpgoPY3kRrkNS8xApxxkftzfKinjyd/preview" width="640" height="480"></iframe>



![image-20260509132410776](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509132410776.png)



# 一：二重积分

## 1. 常见二重积分

>  SOP

1. 画出积分区域
2. 选定积分次序（从x方向还是y方向）
3. 写出积分式

这份图片详细展示了一个二重积分的解题过程，具体内容提取如下：

### **题目信息**

**题目 3.1.1**：计算 $\iint_{D} xy \mathrm{d}\sigma$，其中 $D$ 是由直线 $y=1, x=2, y=x$ 所围成的区域。

##### **第 1 步：画出积分区域**

图片展示了一个直角坐标系，积分区域 $D$ 是一个三角形区域，其顶点分别为 $(1, 1), (2, 1), (2, 2)$。

##### **第 2 步：切割区域，确定各子区域的上下/左右边界**

图片展示了两种切割方式：

- **竖切（Type I 区域）**：
  - **下边界**：$y_1 = 1$
  - **上边界**：$y_2 = x$
  - $x$ 的范围是从 $1$ 到 $2$。
- **横切（Type II 区域）**：
  - **左边界**：$x_1 = y$
  - **右边界**：$x_2 = 2$
  - $y$ 的范围是从 $1$ 到 $2$。

##### **第 3 步：将二重积分写为二次积分，计算**

**① 竖切法：**

$$\iint_{D} xy \mathrm{d}\sigma = \int_{1}^{2} \left[ \int_{1}^{x} xy \mathrm{d}y \right] \mathrm{d}x = \int_{1}^{2} \left[ x \cdot \frac{y^2}{2} \right]_{1}^{x} \mathrm{d}x = \int_{1}^{2} \left( \frac{x^3 - x}{2} \right) \mathrm{d}x = \left( \frac{x^4}{8} - \frac{x^2}{4} \right) \bigg|_{1}^{2} = \frac{9}{8}$$

**② 横切法：**

$$\iint_{D} xy \mathrm{d}\sigma = \int_{1}^{2} \left[ \int_{y}^{2} xy \mathrm{d}x \right] \mathrm{d}y = \int_{1}^{2} \left[ y \cdot \frac{x^2}{2} \right]_{y}^{2} \mathrm{d}y = \int_{1}^{2} \left( 2y - \frac{y^3}{2} \right) \mathrm{d}y = \left( y^2 - \frac{y^4}{8} \right) \bigg|_{1}^{2} = \frac{9}{8}$$

*(注：横切法步骤中的最后一步 $\mathrm{d}x$ 应为笔误，实际应为 $\mathrm{d}y$)*

## 2. 利用**极坐标变换**来简化二重积分的计算

这道题目展示了如何利用**极坐标变换**来简化二重积分的计算。

>  当积分区域 $D$ 是圆形、扇形，或者被积函数中含有 $x^2 + y^2$ 时，使用极坐标通常是最优解。

以下是该题目的详细解析：

### **1. 题目分析**

**题目 3.1.3**：计算 $\iint_{D} \mathrm{e}^{-x^2-y^2} \mathrm{d}\sigma$。

- **积分区域 $D$**：圆心在原点、半径为 $a$ 的圆周所围成的闭区域。
- **被积函数**：$\mathrm{e}^{-(x^2+y^2)}$，包含明显的平方和项。

------

### **2. 极坐标转换原理**

在极坐标系中，我们进行如下代换：

- **坐标代换**：$x = \rho \cos\theta, y = \rho \sin\theta$。
- **关系式**：$x^2 + y^2 = \rho^2$。
- **面积微元**：$\mathrm{d}\sigma = \rho \mathrm{d}\rho \mathrm{d}\theta$（切记不要漏掉雅可比行列式中的 $\rho$）。

------

### **3. 确定积分范围**

由于区域 $D$ 是半径为 $a$ 的完整圆盘：

- **极径 $\rho$** 的范围：从中心 $0$ 到边缘 $a$，即 $0 \le \rho \le a$。
- **极角 $\theta$** 的范围：绕原点一周，即 $0 \le \theta \le 2\pi$。

------

### **4. 计算步骤**

根据转换公式，原积分变为：

$$\iint_{D} \mathrm{e}^{-\rho^2} \rho \mathrm{d}\rho \mathrm{d}\theta$$

**第一步：化为累次积分**

$$\int_{0}^{2\pi} \mathrm{d}\theta \int_{0}^{a} \mathrm{e}^{-\rho^2} \rho \mathrm{d}\rho$$

**第二步：计算关于 $\rho$ 的内层积分**

利用凑微分法，注意到 $\mathrm{d}(-\rho^2) = -2\rho \mathrm{d}\rho$，所以 $\rho \mathrm{d}\rho = -\frac{1}{2} \mathrm{d}(-\rho^2)$：

$$\int_{0}^{a} \mathrm{e}^{-\rho^2} \rho \mathrm{d}\rho = \left[ -\frac{1}{2} \mathrm{e}^{-\rho^2} \right]_{0}^{a} = -\frac{1}{2}(\mathrm{e}^{-a^2} - \mathrm{e}^0) = \frac{1}{2}(1 - \mathrm{e}^{-a^2})$$

**第三步：计算关于 $\theta$ 的外层积分**

$$\int_{0}^{2\pi} \frac{1}{2}(1 - \mathrm{e}^{-a^2}) \mathrm{d}\theta = \frac{1}{2}(1 - \mathrm{e}^{-a^2}) \cdot 2\pi = \pi(1 - \mathrm{e}^{-a^2})$$

------

### **结论**

该二重积分的最终结果为：

$$\pi(1 - \mathrm{e}^{-a^2})$$

这种方法避开了直角坐标系下极其复杂的反三角函数计算，利用对称性和极坐标的特性极大地简化了过程。

## 3. 对称性和奇偶性

这道题目展示了在处理复杂的二重积分时，

> 利用**积分区域的对称性**和**被积函数的奇偶性**来简化计算的高级技巧。

以下是针对题目 3.1.5 的详细提取与解析：

### **1. 题目信息**

**题目 3.1.5**：计算二重积分 $\iint_{D} y \left( 1 + x \mathrm{e}^{\frac{x^2+y^2}{2}} \right) \mathrm{d}\sigma$。

- **积分区域 $D$**：由直线 $y=x$，$y=-1$，$x=1$ 所围成的区域。
- **区域拆分**：为了利用对称性，将区域 $D$ 划分为四个部分 $D_1, D_2, D_3, D_4$。
- ![image-20260509145211606](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509145211606.png)

------

### **2. 核心解题思路：对称性与奇偶性**

首先将积分拆分为两部分：

$$\iint_{D} y \left( 1 + x \mathrm{e}^{\frac{x^2+y^2}{2}} \right) \mathrm{d}\sigma = \iint_{D} y \mathrm{d}\sigma + \iint_{D} yxe^{\frac{x^2+y^2}{2}} \mathrm{d}\sigma$$

针对第二部分积分 $f(x,y) = yxe^{\frac{x^2+y^2}{2}}$，利用以下特性进行简化：

- **关于 $x$ 的奇偶性**：
  - 函数对于 $x$ 是**奇函数**（即 $f(-x, y) = -f(x, y)$）。
  - 区域 $D_1$ 与 $D_2$ 关于 $y$ 轴对称。
  - **结论**：在 $D_1 + D_2$ 区域上的积分为 $0$。
- **关于 $y$ 的奇偶性**：
  - 函数对于 $y$ 也是**奇函数**（即 $f(x, -y) = -f(x, y)$）。
  - 区域 $D_3$ 与 $D_4$ 关于 $x$ 轴对称。
  - **结论**：在 $D_3 + D_4$ 区域上的积分为 $0$。

由此可见，整个区域 $D$ 上该项的积分结果为 **$0$**。

------

### **3. 计算剩余部分**

原本复杂的积分现在简化为仅计算第一项：

$$\iint_{D} y \mathrm{d}\sigma$$

**设定积分限（竖切法）**：

- $x$ 的范围：从 $-1$ 到 $1$。
- $y$ 的范围：从下边界直线 $y=-1$ 到上边界直线 $y=x$。

**具体计算过程**：

1. **化为累次积分**：

   $$\int_{-1}^{1} \mathrm{d}x \int_{-1}^{x} y \mathrm{d}y$$

2. **计算内层积分**：

   $$\int_{-1}^{x} y \mathrm{d}y = \left[ \frac{y^2}{2} \right]_{-1}^{x} = \frac{x^2 - 1}{2}$$

3. **计算外层积分**：

   $$\int_{-1}^{1} \frac{x^2 - 1}{2} \mathrm{d}x = \frac{1}{2} \left[ \frac{x^3}{3} - x \right]_{-1}^{1} = \frac{1}{2} \left[ \left( \frac{1}{3} - 1 \right) - \left( -\frac{1}{3} + 1 \right) \right] = \frac{1}{2} \left( -\frac{2}{3} - \frac{2}{3} \right) = -\frac{2}{3}$$

------

### **结论**

最终结果为：

$$-\frac{2}{3}$$

**总结提示**：在遇到含有指数项且区域具有对称性的二重积分时，优先检查被积函数的奇偶性，往往能直接“消掉”最难计算的部分。

## 4. 关于 $y=x$ 对称情况

这道题目（题目 3.1.6）展示了利用

>  **积分区域的轮换对称性**来简化复杂二重积分的经典技巧。
>
> 这种方法的核心在于：如果区域 $D$ 关于直线 $y=x$ 对称，那么在被积函数中交换 $x$ 和 $y$ 的位置，积分值保持不变。

以下是该题目的详细解析：

### **1. 题目信息**

**题目 3.1.6**：计算二重积分 $I = \iint_{D} \frac{3\sqrt{\sin^2 x} + 2\sqrt{\sin^2 y}}{\sqrt{\sin^2 x} + \sqrt{\sin^2 y}} \mathrm{d}\sigma$。

- **积分区域 $D$**：$x^2 + y^2 \le 4, x \ge 0, y \ge 0$。
- 这是一个位于第一象限、半径为 $2$ 的 **$1/4$ 圆盘**。
- ![image-20260509145321378](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509145321378.png)

------

### **2. 核心技巧：轮换对称性**

**观察区域 $D$：**

在 $D$ 的定义中，将 $x$ 和 $y$ 互换符号，方程变为 $y^2 + x^2 \le 4, y \ge 0, x \ge 0$，区域保持不变。这意味着 $D$ 关于直线 **$y=x$ 对称**。

**利用对称性转换：**

由于区域对称，我们可以得出：

$$\iint_{D} f(x, y) \mathrm{d}\sigma = \iint_{D} f(y, x) \mathrm{d}\sigma$$

因此，将原式中的 $x$ 和 $y$ 互换，得到另一个相等的积分式：

$$I = \iint_{D} \frac{3\sqrt{\sin^2 y} + 2\sqrt{\sin^2 x}}{\sqrt{\sin^2 y} + \sqrt{\sin^2 x}} \mathrm{d}\sigma$$

------

### **3. 计算步骤**

为了消去复杂的三角函数项，我们将原积分的两种形式相加：

1. **两式相加**：

   $$2I = \iint_{D} \left( \frac{3\sqrt{\sin^2 x} + 2\sqrt{\sin^2 y}}{\sqrt{\sin^2 x} + \sqrt{\sin^2 y}} + \frac{3\sqrt{\sin^2 y} + 2\sqrt{\sin^2 x}}{\sqrt{\sin^2 y} + \sqrt{\sin^2 x}} \right) \mathrm{d}\sigma$$

2. **合并同分母项**：

   $$2I = \iint_{D} \frac{(3+2)\sqrt{\sin^2 x} + (2+3)\sqrt{\sin^2 y}}{\sqrt{\sin^2 x} + \sqrt{\sin^2 y}} \mathrm{d}\sigma = \iint_{D} \frac{5(\sqrt{\sin^2 x} + \sqrt{\sin^2 y})}{\sqrt{\sin^2 x} + \sqrt{\sin^2 y}} \mathrm{d}\sigma$$

3. **化简被积函数**：

   被积函数直接简化为常数 $5$：

   $$2I = \iint_{D} 5 \mathrm{d}\sigma = 5 \iint_{D} 1 \mathrm{d}\sigma$$

4. **计算几何面积**：

   $\iint_{D} 1 \mathrm{d}\sigma$ 即为区域 $D$ 的面积。由于 $D$ 是半径为 $2$ 的 $1/4$ 圆：

   $$\text{面积} = \frac{1}{4} \pi (2)^2 = \pi$$

5. **求得最终结果**：

   $$2I = 5\pi \implies I = \frac{5}{2}\pi$$

------

### **结论**

最终结果为：

$$\frac{5}{2}\pi$$

**总结**：当你看到被积函数非常复杂（如含有无法直接积分的三角函数），但分子分母的结构具有某种对称性，且积分区域关于 $y=x$ 对称时，这种“**两式相加、化繁为简**”的轮换对称法通常是解题的关键。

# 二：三重积分

## 1. 普通三重积分转化为三次积分

这份图片详细讲解了**三重积分**的解题过程，主要采用了“先一后二”（投影法）的思路。以下是题目 3.2.1 的详细解析：

### **1. 题目信息**

**题目 3.2.1**：计算三重积分 $\iiint_{\Omega} xz \, \mathrm{d}x\mathrm{d}y\mathrm{d}z$。

- **积分区域 $\Omega$**：由曲面 $z=0$，$z=y$，$y=1$，$y=x^2$ 所围成的空间闭区域。

------

### **2. 解题步骤**

#### **第 1 步：分析几何区域**

![image-20260509145801180](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509145801180.png)

- **投影区域**：观察俯视图，区域 $\Omega$ 在 $xOy$ 平面上的投影是一个由抛物线 $y=x^2$ 和直线 $y=1$ 围成的区域。
  - 交点计算：$x^2=1 \implies x = \pm 1$。
  - 范围：$-1 \le x \le 1$，$x^2 \le y \le 1$。
- **高度范围**：对于投影区域内的任意一点 $(x, y)$，高度 $z$ 从底面 $z=0$ 到顶面 $z=y$。

#### **第 2 步：转化积分形式**

将三重积分转化为累次积分：

$$\iiint_{\Omega} xz \, \mathrm{d}x\mathrm{d}y\mathrm{d}z = \int_{-1}^{1} \mathrm{d}x \int_{x^2}^{1} \mathrm{d}y \int_{0}^{y} xz \, \mathrm{d}z$$

#### **第 3 步：具体计算**

1. **内层积分（关于 $z$）**：

   $$\int_{0}^{y} xz \, \mathrm{d}z = \left[ x \cdot \frac{z^2}{2} \right]_{0}^{y} = \frac{xy^2}{2}$$

2. **中层积分（关于 $y$）**：

   $$\int_{x^2}^{1} \frac{xy^2}{2} \, \mathrm{d}y = \left[ \frac{xy^3}{6} \right]_{x^2}^{1} = \frac{x(1)^3 - x(x^2)^3}{6} = \frac{x - x^7}{6}$$

3. **外层积分（关于 $x$）**：

   $$\int_{-1}^{1} \frac{x - x^7}{6} \, \mathrm{d}x = \left[ \frac{1}{6} \left( \frac{x^2}{2} - \frac{x^8}{8} \right) \right]_{-1}^{1}$$

   由于被积函数 $f(x) = \frac{x - x^7}{6}$ 是**奇函数**，且积分区间 $[-1, 1]$ 关于原点对称，根据对称性直接得出结果：

   $$\int_{-1}^{1} \frac{x - x^7}{6} \, \mathrm{d}x = 0$$

------

### **结论**

该三重积分的最终结果为 **$0$**。

**关键点总结**：

- **投影法**：本题先确定 $x, y$ 的平面范围，再确定 $z$ 的垂直范围。
- **对称性**：在最后一步利用奇函数在对称区间积分为 $0$ 的特性，可以极大地简化计算量。

## 2. 三重积分的多维解法

### 1. 题目要求

计算 $I = \iiint_{\Omega} z \, dx dy dz$

- **积分区域 $\Omega$**：由旋转抛物面 $z = x^2 + y^2$ 与平面 $z = 4$ 围成的闭区域。

------

### 2. 三种解法对比

#### **方法一：柱面坐标法（推荐）**

![image-20260509150400501](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509150400501.png)

利用对称性，令 $x = \rho\cos\theta, y = \rho\sin\theta, z = z$。

- **积分限**：$\theta \in [0, 2\pi]$，$\rho \in [0, 2]$，$z \in [\rho^2, 4]$。
- **雅可比行列式**：$dV = \rho \, d\rho d\theta dz$。

$$\begin{aligned} I &= \int_{0}^{2\pi} d\theta \int_{0}^{2} d\rho \int_{\rho^2}^{4} z \cdot \rho \, dz \\ &= 2\pi \int_{0}^{2} \rho \left[ \frac{1}{2} z^2 \right]_{\rho^2}^{4} d\rho \\ &= \pi \int_{0}^{2} (16\rho - \rho^5) \, d\rho \\ &= \pi \left[ 8\rho^2 - \frac{\rho^6}{6} \right]_{0}^{2} = \pi \left( 32 - \frac{64}{6} \right) = \frac{64}{3}\pi \end{aligned}$$

#### **方法二：先重后单（切片法）**

将区域沿 $z$ 轴水平切割成厚度为 $dz$ 的圆盘。

![image-20260509150351209](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509150351209.png)

- **截面性质**：高度为 $z$ 时，截面 $D_z$ 是半径为 $r = \sqrt{z}$ 的圆。

- **截面积**：$A(z) = \pi r^2 = \pi z$。

- **计算**：

  $$I = \int_{0}^{4} z \cdot A(z) \, dz = \int_{0}^{4} \pi z^2 \, dz = \left[ \frac{\pi z^3}{3} \right]_{0}^{4} = \frac{64}{3}\pi$$

#### **方法三：直角坐标法（原始做法）**

先对 $z$ 积分，再处理 $xOy$ 面上的二重积分：

$$I = \int_{-2}^{2} dx \int_{-\sqrt{4-x^2}}^{\sqrt{4-x^2}} dy \int_{x^2+y^2}^{4} z \, dz = \dots = \frac{64}{3}\pi$$

------

### 💡 疑难避坑：无法想象形状怎么办？

如果在考试或科研中难以快速建模，可以采用**代数投影法**：

1. **分类方程**：

   - **含 $z$ 类**：$z = x^2 + y^2$ (下底) 和 $z = 4$ (上顶)。
   - **不含 $z$ 类**：(本题暂无)。

2. **确定投影 $D_{xy}$**：

   将含 $z$ 的方程联立，消去 $z$：$x^2 + y^2 = 4$。这就是投影区域的边界。

3. **确定上下限**：

   - $z$ 的范围由含 $z$ 的方程直接给出：$x^2 + y^2 \le z \le 4$。
   - $x, y$ 的范围由第 2 步得到的投影圆域给出。



## 3. 三重积分化为三次积分

### 1. 题目要求

将三重积分 $I = \iiint_{\Omega} f(x, y, z) \, dx dy dz$ 化为三次积分。

- **积分区域 $\Omega$**：由双曲抛物面 $z=xy$ 及平面 $x+y-1=0$、$z=0$ 所围成的闭区域。

------

### 2. 解题步骤（“三步走”法则）

- **第一步：投影**

  求出空间区域 $\Omega$ 在 $xOy$ 面上的投影区域 $D$。

  ![image-20260509150158451](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509150158451.png)

- **第二步：定上下**

  确定空间区域的上顶面和下底面方程，写出关于 $z$ 的积分限。

- **第三步：定平面范围**

  根据投影区域 $D$，确定 $x$ 和 $y$ 的积分限。

------

### 3. 详细解答过程

#### **Step 1: 确定投影区域 $D$**

根据边界条件 $x+y=1$、$x=0$、$y=0$（由第一象限 $xy \ge 0$ 及平面围成），投影区域 $D$ 为 $xOy$ 平面上由三条直线围成的三角形区域：

$$D = \{ (x, y) \mid 0 \le x \le 1, \, 0 \le y \le 1-x \}$$

#### **Step 2: 确定 $z$ 的积分上下限**

在投影区域 $D$ 内，$xy \ge 0$。

- **上顶面**：$z = xy$

- **下底面**：$z = 0$

  因此，$z$ 的积分范围为 $[0, xy]$，内层积分为：

  $$\int_{0}^{xy} f(x, y, z) \, dz$$

#### **Step 3: 写出三次积分形式**

利用“先 $z$ 后 $y$ 再 $x$”的顺序（竖切法），将结果组合：

$$I = \int_{0}^{1} dx \int_{0}^{1-x} dy \int_{0}^{xy} f(x, y, z) \, dz$$

> [!TIP] **思维总结**
>
> 本题的核心在于通过**投影法**（柱面坐标化的前身）将三维空间问题降维。由于底面在 $xOy$ 面且边界清晰，选择先对 $z$ 积分是最直接的路径。



# 4. 重积分的应用

这份内容整理了多元函数微积分中非常关键的**曲面应用**（面积、质心、转动惯量）以及相关的几何推导背景。

------

## 📐 高等数学笔记：重积分的几何与物理应用

### 1. 核心公式汇总

#### **A. 曲面面积 (Surface Area)**

若空间曲面 $S$ 由 $z = f(x, y)$ 确定，其在 $xOy$ 平面上的投影区域为 $D$，则面积 $A$ 为：

$$A = \iint_{D} \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \, dA$$

> **原理推导：**
>
> 1. **切平面法向量**：曲面在点 $(x_0, y_0)$ 处的法向量为 $\vec{n} = (f_x, f_y, -1)$。
>
> 2. **夹角余弦**：切平面与 $xOy$ 平面（法向量为 $\vec{k}=(0,0,1)$）的夹角 $\gamma$ 满足：
>
>    $$\cos \gamma = \frac{|-1|}{\sqrt{f_x^2 + f_y^2 + (-1)^2}} = \frac{1}{\sqrt{1 + f_x^2 + f_y^2}}$$
>
> 3. **面积元素关系**：$d\sigma = \frac{dxdy}{\cos \gamma} = \sqrt{1 + f_x^2 + f_y^2} \, dxdy$。
>
> ![image-20260509150609192](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509150609192.png)

#### **B. 物理应用 (Mass & Moments)**

设定面密度为 $\rho(x, y)$：

- **质量 (Mass)**：$m = \iint_{D} \rho(x, y) \, d\sigma$

- **质心 (Center of Mass)**：

  $\bar{x} = \frac{1}{m} \iint_{D} x \rho(x, y) \, d\sigma, \quad \bar{y} = \frac{1}{m} \iint_{D} y \rho(x, y) \, d\sigma$

- **转动惯量 (Moment of Inertia)**：

  $I_x = \iint_{D} y^2 \rho(x, y) \, d\sigma, \quad I_y = \iint_{D} x^2 \rho(x, y) \, d\sigma$

------

### 2. 典型题解：题目 3.3.1

**【题目】**：抛物线 $z = y^2$（从 $z=0$ 到 $z=2$）绕 $z$ 轴旋转一周得到曲面，求其面积。

**【解】**：

![image-20260509150553951](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH9-%E9%87%8D%E7%A7%AF%E5%88%86.assets/image-20260509150553951.png)

1. **建立方程**：

   旋转曲面方程为 $z = x^2 + y^2$。

   由 $0 \le z \le 2$ 可知，其在 $xOy$ 面上的投影区域 $D$ 为：$x^2 + y^2 \le 2$（半径 $R = \sqrt{2}$ 的圆）。

2. **求偏导数**：

   $\frac{\partial z}{\partial x} = 2x, \quad \frac{\partial z}{\partial y} = 2y$。

3. **代入面积公式并利用极坐标计算**：

   $$\begin{aligned} A &= \iint_{D} \sqrt{1 + (2x)^2 + (2y)^2} \, dx dy \\ &= \int_{0}^{2\pi} d\theta \int_{0}^{\sqrt{2}} \sqrt{1 + 4\rho^2} \cdot \rho \, d\rho \\ &= 2\pi \cdot \frac{1}{8} \int_{0}^{\sqrt{2}} (1 + 4\rho^2)^{\frac{1}{2}} \, d(1 + 4\rho^2) \\ &= \frac{\pi}{4} \cdot \left[ \frac{2}{3} (1 + 4\rho^2)^{\frac{3}{2}} \right]_{0}^{\sqrt{2}} \\ &= \frac{\pi}{6} \left[ (1 + 4 \cdot 2)^{\frac{3}{2}} - 1^{\frac{3}{2}} \right] \\ &= \frac{\pi}{6} (27 - 1) = \frac{13\pi}{3} \end{aligned}$$

------


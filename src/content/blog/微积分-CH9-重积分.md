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

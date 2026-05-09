---
title: "算法导论-CH4-分治法"
slug: "算法导论-CH4-分治法"
description: "分治法是一种重要的算法设计范式，其核心思想是将一个难以直接解决的大问题，分割成一些规模较小的相同问题，便以此类推，直至问题规模小到可以轻易解决。"
pubDate: 2026-05-08
updatedDate: 2026-05-08
tags:
  - 数据结构与算法
  - 算法导论
  - 修考
category: 修考
draft: false 
---

<iframe src="https://drive.google.com/file/d/1OYM7tG0cpI00M_XPZjKi8fW0TOrlFl8m/preview" width="640" height="480"></iframe>

- 算法导论（第四版）第四章：分治法　前言 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/529434436
- 算法导论（第四版）第四章：分治法　第一节：矩阵乘法 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/539932424
- 算法导论（第四版）第四章：分治法　第二节：矩阵乘法的Strassen算法 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/540241667
  - 【2.9 Strassen矩阵乘法.】 【精准空降到 20:29】 https://www.bilibili.com/video/BV1upGbz5EbW/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5&t=1229
- 算法导论（第四版）第四章：分治法　第三节：用代入法求解递归式 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/540453224
  - 【代入法（数学归纳法）计算递归算法时间复杂度】 https://www.bilibili.com/video/BV1FgWzzpEcj/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
  
- 算法导论（第四版）第四章：分治法　第四节：用递归树法求解递归式 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/540889250
- 算法导论（第四版）第四章：分治法　第五节：用主方法求解递归式 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/541678195
  - 【【算法分析设计速成课】主定理求时间复杂度】 https://www.bilibili.com/video/BV1SdrHBUEyQ/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

- 算法导论（第四版）第四章：分治法　第六节：连续情况下的主定理的证明 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/529434777
- 算法导论（第四版）第四章：分治法　第七节：Akra-Bazzi递归式 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/542523546





# 第 4 章 分治法 (Divide and Conquer) 学习笔记

分治法是一种重要的算法设计范式，其核心思想是将一个难以直接解决的大问题，分割成一些规模较小的相同问题，便以此类推，直至问题规模小到可以轻易解决。

## 4.1 分治法的基本步骤与递归式

### 1. 如何解决递归问题

解决一个递归问题通常包含以下两个主要情况：

- **Base Case (基本情况)**：问题规模足够小，可以直接求解。
- **Recursive Case (递归情况)**：
  1. **Divide (分解)**：将原问题分解为若干个规模较小的子问题。
  2. **Conquer (解决)**：递归地求解各子问题。若子问题足够小，则直接求解。
  3. **Combine (合并)**：将子问题的解合并为原问题的解。

### 2. 算法的递归描述式

一个分治算法的运行时间通常可以用递归方程表示：

$$T(n) = \begin{cases} \Theta(1) & n \le n_0 \\ aT(n/b) + D(n) + C(n) & n > n_0 \end{cases}$$

其中：

- $n_0$ 是**分水岭**，区分了基本情况和递归情况。
- $a$ 是分解出的子问题个数。
- $n/b$ 是每个子问题的规模（通常 $b=2$）。
- $D(n)$ 是分解问题的代价。
- $C(n)$ 是合并解的代价。

> **注意**：在理论分析时，虽然 $n/b$ 往往需要取整（$\lfloor n/b \rfloor$ 或 $\lceil n/b \rceil$），但为了简便，通常会省略取整符号。

## 4.2 求解递归式的三种方法

### 方法一：代入法 (Substitution Method)

**标准操作流程 (SOP)：**

1. **猜测**：使用常数符号猜测解的形式（如 $O(g(n))$）。
2. **证明**：使用数学归纳法求出解中的常数，并证明解是正确的。

**技巧：**

- **缩小范围**：可以通过证明 $O$ 界（上界）和 $\Omega$ 界（下界）来夹逼出 $\Theta$ 界。
- **相似推导**：相似的递归式通常有相似的解。例如 $T(n) = 2T(n/2 + 17) + \Theta(n)$ 的解通常也是 $O(n \lg n)$。
- **减去低阶项**：为了使归纳法成立，有时需要从猜测中减去一个低阶项。
  - *例题*：$T(n) = 2T(n/2) + \Theta(1)$。若猜测 $T(n) \le cn$，推导时可能无法消掉常数项。此时改猜 $T(n) \le cn - d$（$d$ 为常数），则更容易配平。

#### 代入法实例推导

**题目：** 求解 $T(n) = 2T(\lfloor n/2 \rfloor) + \Theta(n)$ **猜测：** $T(n) = O(n \lg n)$，即存在 $c, n_0 > 0$，使得 $\forall n > n_0, T(n) \le cn \lg n$。

**证明：** 假设对于 $n/2$ 成立，即 $T(\lfloor n/2 \rfloor) \le c \lfloor n/2 \rfloor \lg (\lfloor n/2 \rfloor)$。 代入递归式：

$$\begin{aligned} T(n) &\le 2(c \lfloor n/2 \rfloor \lg \lfloor n/2 \rfloor) + \Theta(n) \\ &\le 2(c \cdot \frac{n}{2} \lg \frac{n}{2}) + \Theta(n) \\ &= cn (\lg n - \lg 2) + \Theta(n) \\ &= cn \lg n - cn + \Theta(n) \end{aligned}$$

只要 $c$ 足够大，使得 $cn \ge \Theta(n)$，则有 $T(n) \le cn \lg n$。 **结论：** 猜测成立。

### 方法二：递归树法 (Recursion-tree Method)

递归树法将递归过程视觉化，每个节点代表该层子问题的代价。

**实例：** $T(n) = 3T(n/4) + \Theta(n^2)$

- 根节点代价为 $cn^2$。
- 第二层有 3 个子节点，每个代价为 $c(n/4)^2$。
- 总代价即为所有层代价之和。
- 经计算，该递归项呈几何级数递减，总代价受根节点支配，$T(n) = O(n^2)$。

![image-20260509190806569](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH4-%E5%88%86%E6%B2%BB%E6%B3%95.assets/image-20260509190806569.png)

### 方法三：主方法 (Master Method)

主方法是解决形如 $T(n) = aT(n/b) + f(n)$ 递归式的“菜谱”。

**分水岭函数：** $n^{\log_b a}$ 比较 $f(n)$ 与 $n^{\log_b a}$ 的增长速度：

- **Case 1**：$f(n) = O(n^{\log_b a - \epsilon})$。 $n^{\log_b a}$ 增长更快，则 $T(n) = \Theta(n^{\log_b a})$。
- **Case 2**：$f(n) = \Theta(n^{\log_b a} \lg^k n)$（通常 $k=0$）。 两者增长速度相近，则 $T(n) = \Theta(n^{\log_b a} \lg^{k+1} n)$。
- **Case 3**：$f(n) = \Omega(n^{\log_b a + \epsilon})$ 且满足正则条件 $af(n/b) \le cf(n)$。 $f(n)$ 增长更快，则 $T(n) = \Theta(f(n))$。

## 4.3 经典案例分析

### 1. 归并排序 (Merge Sort)

递归式：$T(n) = 2T(n/2) + \Theta(n)$ 通过主方法 Case 2 可知：$T(n) = \Theta(n \lg n)$。

### 2. 矩阵乘法与 Strassen 算法

#### 普通分治法矩阵乘法

将 $n \times n$ 矩阵拆分为 $4$ 个 $(n/2) \times (n/2)$ 的子矩阵。 计算 $C = A \cdot B$ 需要 8 次子矩阵乘法和 4 次矩阵加法。

- **递归式**：$T(n) = 8T(n/2) + \Theta(n^2)$
- **分析**：根据主方法，$n^{\log_2 8} = n^3$，由于 $n^3$ 远大于 $f(n) = n^2$，属于 Case 1。
- **结果**：$T(n) = \Theta(n^3)$。
- **思考**：为什么普通分治没优化？因为“根系太多，树太茂盛”，递归分支（8个）过多导致计算量巨大。

#### Strassen 算法

**核心贡献**：将递归分支从 8 个减少到了 7 个。 **实现方式**：通过增加复杂的加法和减法，减少了 1 次关键的乘法。

- **递归式**：$T(n) = 7T(n/2) + n^2$
- **分析**：$n^{\log_2 7} \approx n^{2.81}$。
- **结果**：$T(n) = \Theta(n^{\log_2 7}) = O(n^{2.81})$。 虽然 Strassen 算法在常数项上较大，但在处理超大规模矩阵时，其渐进性能优于 $\Theta(n^3)$。

![图片](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH4-%E5%88%86%E6%B2%BB%E6%B3%95.assets/image.webp)

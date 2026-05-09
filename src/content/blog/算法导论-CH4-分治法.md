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

**题目：** 求解 $T(n) = 2T(\lfloor n/2 \rfloor) + \Theta(n)$ 

**猜测：** $T(n) = O(n \lg n)$，即存在 $c, n_0 > 0$，使得 $\forall n > n_0, T(n) \le cn \lg n$。

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



# 例题

------

## 1. 使用主方法 (Master Method) 求解递归式（CLRS 4.5-1）

主方法适用于形式为 $T(n) = aT(n/b) + f(n)$ 的递归式。在本题中，$a = 2, b = 4$，临界函数为：

$$n^{\log_b a} = n^{\log_4 2} = n^{1/2} = \sqrt{n}$$

### a. $T(n) = 2T(n/4) + 1$

- **分析**：$f(n) = 1$。
- **比较**：$f(n) = O(n^{1/2 - \epsilon})$，其中 $0 < \epsilon \le 1/2$。
- **结论**：满足主方法**情况 1**。
- **解**：$T(n) = \Theta(\sqrt{n})$。

### b. $T(n) = 2T(n/4) + \sqrt{n}$

- **分析**：$f(n) = \sqrt{n}$。
- **比较**：$f(n) = \Theta(n^{1/2})$。
- **结论**：满足主方法**情况 2**。
- **解**：$T(n) = \Theta(\sqrt{n} \lg n)$。

### c. $T(n) = 2T(n/4) + \sqrt{n} \lg^2 n$

- **分析**：$f(n) = \sqrt{n} \lg^2 n$。
- **比较**：属于情况 2 的扩展（$f(n) = \Theta(n^{\log_b a} \lg^k n)$，其中 $k=2$）。
- **结论**：满足**广义情况 2**。
- **解**：$T(n) = \Theta(\sqrt{n} \lg^3 n)$。

### d. $T(n) = 2T(n/4) + n$

- **分析**：$f(n) = n$。
- **比较**：$f(n) = \Omega(n^{1/2 + \epsilon})$，其中 $0 < \epsilon \le 1/2$。
- **正则性检查**：$af(n/b) = 2(n/4) = n/2 \le cn$，当 $1/2 \le c < 1$ 时成立。
- **结论**：满足主方法**情况 3**。
- **解**：$T(n) = \Theta(n)$。

### e. $T(n) = 2T(n/4) + n^2$

- **分析**：$f(n) = n^2$。
- **比较**：$f(n) = \Omega(n^{1/2 + \epsilon})$，其中 $0 < \epsilon \le 3/2$。
- **正则性检查**：$af(n/b) = 2(n/4)^2 = n^2/8 \le cn^2$，当 $1/8 \le c < 1$ 时成立。
- **结论**：满足主方法**情况 3**。
- **解**：$T(n) = \Theta(n^2)$。

------

**💡 笔记提示：**

- **情况 1**：$f(n)$ 增长慢于临界函数，解由临界函数决定。
- **情况 2**：$f(n)$ 与临界函数同阶，解需加一个 $\lg n$ 因子。
- **情况 3**：$f(n)$ 增长快于临界函数，解由 $f(n)$ 决定（需满足正则性条件）。



要设计一个渐近性能快于 Strassen 算法（其复杂度约为 $O(n^{\lg 7}) \approx O(n^{2.81})$）的算法，我们需要利用主方法来约束 $a$ 的取值。

以下是整理后的详细推导过程：

------

## 1.2 渐近快于 Strassen 的分治算法设计（CLRS 4.5-2)

### 1. 建立递归模型

根据题目描述，我们将 $n \times n$ 矩阵分解为 $n/4 \times n/4$ 的子矩阵。已知分解和合并的代价为 $\Theta(n^2)$，设子问题个数为 $a$，则递归式为：

$$T(n) = aT(n/4) + \Theta(n^2)$$

### 2. 确定目标复杂度

Strassen 算法的运行时间为 $T(n) = \Theta(n^{\lg 7})$。

为了使新算法**渐近快于** Strassen 算法，我们需要满足：

$$T(n) = O(n^{\lg 7 - \delta}) \quad (\text{其中 } \delta > 0)$$

### 3. 应用主方法 (Master Method)

对于递归式 $T(n) = aT(n/4) + \Theta(n^2)$：

- **临界项**：$n^{\log_4 a}$
- **驱动项**：$f(n) = \Theta(n^2)$

由于我们需要算法尽可能快，其复杂度由递归树的叶子节点（即临界项）决定，这对应主方法的**情况 1**：

若 $f(n) = O(n^{\log_4 a - \epsilon})$，则 $T(n) = \Theta(n^{\log_4 a})$。

### 4. 求解 $a$ 的最大值

要使 $T(n) = \Theta(n^{\log_4 a})$ 优于 $O(n^{\lg 7})$，必须满足：

$$\log_4 a < \lg 7$$

利用换底公式 $\log_4 a = \frac{\ln a}{\ln 4}$ 和 $\lg 7 = \frac{\ln 7}{\ln 2}$：

$$\frac{\ln a}{2 \ln 2} < \frac{\ln 7}{\ln 2}$$

$$\frac{1}{2} \ln a < \ln 7$$

$$\ln a < 2 \ln 7 = \ln(7^2)$$

$$a < 49$$

### 5. 结论

为了保证算法在渐近意义上严格快于 Strassen 算法，且 $a$ 必须为整数：

- $a$ 的最大取值为 **48**。

------

**验证：**

- 若 $a=48$，则 $T(n) = \Theta(n^{\log_4 48}) \approx \Theta(n^{2.792})$。
- Strassen 算法 $T(n) = \Theta(n^{\log_2 7}) \approx \Theta(n^{2.807})$。
- $2.792 < 2.807$，结论成立。

这份解答涵盖了使用代入法（Substitution Method）证明递归式复杂度的核心技巧。为了使逻辑更加清晰，我为你优化了排版，并对证明中的关键常数约束和归纳步骤进行了标注。

------

## 2. CLRS 4.3-1 使用代入法证明递归式

### a. $T(n) = T(n-1) + n \implies T(n) = O(n^2)$

- **猜测**：$T(n) \le cn^2$

- **证明**：

  $T(n) \le c(n-1)^2 + n = c(n^2 - 2n + 1) + n = cn^2 - (2c-1)n + c$

- **约束**：要使 $T(n) \le cn^2$，需 $-(2c-1)n + c \le 0$，即 $n(2c-1) \ge c$。

  当 $c \ge 1$ 且 $n \ge 1$ 时成立（或 $c > 1/2$ 时对足够大的 $n$ 成立）。

### b. $T(n) = T(n/2) + \Theta(1) \implies T(n) = O(\lg n)$

- **猜测**：$T(n) \le c \lg n - b$（注：减去常数 $b$ 有助于处理 $\Theta(1)$）

- **证明**：

  $T(n) \le c \lg(n/2) - b + d = c(\lg n - 1) - b + d = c \lg n - b - (c - d)$

- **约束**：只要 $c \ge d$（其中 $d$ 是 $\Theta(1)$ 的隐含常数），结论成立。

### c. $T(n) = 2T(n/2) + n \implies T(n) = \Theta(n \lg n)$

- **上界 $O(n \lg n)$**：

  猜测 $T(n) \le cn \lg n$。

  $T(n) \le 2c(n/2) \lg(n/2) + n = cn(\lg n - 1) + n = cn \lg n - (c - 1)n \le cn \lg n$（当 $c \ge 1$ 时）。

- **下界 $\Omega(n \lg n)$**：

  猜测 $T(n) \ge cn \lg n$。

  $T(n) \ge 2c(n/2) \lg(n/2) + n = cn \lg n - (c - 1)n \ge cn \lg n$（当 $c \le 1$ 时）。

### d. $T(n) = 2T(n/2 + 17) + n \implies T(n) = O(n \lg n)$

- **技巧**：由于存在 $+17$ 项，直接使用 $cn \lg n$ 无法消去常数，需使用更强的归纳假设：$T(n) \le c(n - a) \lg(n - a)$。

- **证明简述**：

  $T(n) \le 2c(n/2 + 17 - a) \lg(n/2 + 17 - a) + n$

  令 $a = 34$，则式子变为 $c(n + 34 - 2a) \lg(n/2) + n = c(n - 34)(\lg n - 1) + n$。

  展开后通过选择足够大的 $c$，可以证明其 $\le c(n-34)\lg(n-34)$。

### e. $T(n) = 2T(n/3) + \Theta(n) \implies T(n) = \Theta(n)$

- **上界 $O(n)$**：

  猜测 $T(n) \le cn$。

  $T(n) \le 2c(n/3) + dn = (2/3c + d)n$。

  只要 $2/3c + d \le c$，即 $c \ge 3d$，结论成立。

- **下界 $\Omega(n)$**：

  同理，取 $c \le 3d$ 即可证明 $T(n) \ge cn$。

### f. $T(n) = 4T(n/2) + \Theta(n) \implies T(n) = \Theta(n^2)$

- **上界 $O(n^2)$**：

  猜测 $T(n) \le c_1n^2 - c_2n$（减去低阶项以抵消 $\Theta(n)$）。

  $T(n) \le 4(c_1(n/2)^2 - c_2(n/2)) + dn = c_1n^2 - 2c_2n + dn = c_1n^2 - c_2n - (c_2 - d)n$。

  当 $c_2 \ge d$ 时，上界成立。

- **下界 $\Omega(n^2)$**：

  猜测 $T(n) \ge c_1n^2$。

  $T(n) \ge 4c_1(n/2)^2 + dn = c_1n^2 + dn \ge c_1n^2$（对正数 $d$ 显然成立）。

------

**💡 专家提示：**

在使用代入法时，如果发现数学推导无法消去多余的项，通常有两种策略：

1. **减去低阶项**：如 f 题中使用 $cn^2 - dn$。
2. **变量代换**：如 d 题中处理偏移量 $+17$ 的技巧。

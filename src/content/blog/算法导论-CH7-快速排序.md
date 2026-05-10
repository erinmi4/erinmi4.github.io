---
title: "算法导论-CH7-快速排序"
slug: "算法导论-CH7-快速排序"
description: "算法导论-CH7-快速排序，待补充摘要。"
pubDate: 2026-05-10
updatedDate: 2026-05-10
tags:
  - 数据结构与算法
  - 算法导论
  - 修考
category: 修考
draft: false 
---

<iframe src="https://drive.google.com/file/d/1SNBi6v4TtKTRgwp6_anKiuEFwoHGm0sl/preview" width="640" height="480"></iframe>

- 算法导论（第四版）第七章：快速排序　前言 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/548622761
  - [【Day26】[演算法]-快速排序法Quick Sort](https://ithelp.ithome.com.tw/articles/10278644)
- 算法导论（第四版）第七章：快速排序　第一节：快速排序的说明 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/548700769
- 算法导论（第四版）第七章：快速排序　第二节：快速排序的性能 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/548906646
- 算法导论（第四版）第七章：快速排序　第三节：快速排序的随机化版本 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/549118974
- 算法导论（第四版）第七章：快速排序　第四节：快速排序的分析 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/549267719

# 第七章 快速排序 (QuickSort) 学习笔记

## 1. 快速排序概述

快速排序是一种经典的**原地排序算法**（In-place Algorithm），其核心思想是**分治法**（Divide and Conquer）。

- **最坏运行时间**：$\Theta(n^2)$
- **平均运行时间**：$\Theta(n \lg n)$
- **空间复杂度**：$O(\lg n)$（递归调用的栈空间）

## 2. 7.1 快速排序的说明与划分机制

快速排序的关键在于 **PARTITION（划分）** 程序，它实现了对子数组 $A[p:r]$ 的原地重排。

### 2.1 划分逻辑简述

1. **选择 Pivot**：选择一个基准值（通常选 $A[r]$）。
2. **双指针遍历**：使用 $i$ 和 $j$ 两个指针。
   - 指针 $j$ 扫描数组，如果 $A[j] \le pivot$，则将其交换到左侧。
   - 指针 $i$ 维护“小于等于 pivot”区域的边界。
3. **重构区域**：最终数组被划分为三个区域： `[小于等于 pivot 区域] [pivot] [大于 pivot 区域]`

![image-20260510131655837](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH7-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.assets/image-20260510131655837.png)

### 2.2 伪代码实现

```python
QUICKSORT(A, p, r)
    if p < r
        q = PARTITION(A, p, r)
        QUICKSORT(A, p, q - 1)
        QUICKSORT(A, q + 1, r)

PARTITION(A, p, r)
    x = A[r]          # 枢轴 (pivot)
    i = p - 1         # i 是小于等于 x 区域的最后一个元素的下标
    for j = p to r - 1
        if A[j] ≤ x
            i = i + 1
            exchange A[i] with A[j]
    exchange A[i + 1] with A[r]
    return i + 1      # 返回 pivot 的新位置
```

### 2.3 思考题 7.1-2：全相同元素处理

**问题**：当数组 $A[p:r]$ 中元素全相同时，`PARTITION` 返回的 $q$ 是什么？如何修改使得此时返回 $q = \lfloor (p+r)/2 \rfloor$？

**解答**：

- **现状**：若元素全相同，`if A[j] ≤ x` 永远成立，`i` 会增加到 $r-1$，最终返回 $q = r$。这会导致最坏情况。
- **改进**：通过计数判断是否全相同。

```python
PARTITION_MODIFIED(A, p, r)
    x = A[r]
    i = p - 1
    count = 0
    for j = p to r - 1
        if A[j] <= x
            if A[j] == x: count = count + 1
            i = i + 1
            exchange A[i] with A[j]
    if count == r - p: # 说明所有元素都等于 pivot
        return floor((p + r) / 2)
    exchange A[i + 1] with A[r]
    return i + 1
```

## 3. 7.2 快速排序的性能与误区纠正

### 3.1 性能核心点

快排的性能高度取决于**数组划分是否均匀**，这直接受 `pivot` 选择的影响。

### 3.2 深度思考：为什么不是一直都是 $O(n^2)$？

**误区**：认为“每一轮都要比较 $n-1$ 次，所以总时间是 $n^2$”。 **纠正**：

- **一轮比较次数**：当前子数组长度为 $m$ 时，比较次数约为 $m$。
- **分治的魔力**：
  - **最坏情况**：每次划分产生 $n-1$ 和 $0$。总比较：$n + (n-1) + \dots + 1 = \Theta(n^2)$。
  - **最好情况**：每次划分产生 $n/2$ 和 $n/2$。总比较：$n + 2 \times (n/2) + 4 \times (n/4) \dots$ 每一层总和都是 $n$，共有 $\lg n$ 层。总时间为 $\Theta(n \lg n)$。
- **直观理解**：快排越“混乱”越快；若数据已经有序且 pivot 选得不好，反而最慢。

### 3.3 具体案例分析

#### 7.2.1 最坏情况 (Worst-case)

当划分产生规模为 $n-1$ 和 $0$ 的子问题时：

$$T(n) = T(n-1) + T(0) + \Theta(n) = T(n-1) + \Theta(n) = \Theta(n^2)$$

- **典型案例**：已排序数组选第一个或最后一个作为 pivot。

#### 7.2.2 最好情况 (Best-case)

当划分产生规模均为 $n/2$ 的子问题时：

$$T(n) = 2T(n/2) + \Theta(n) = \Theta(n \lg n)$$

#### 7.2.3 平衡划分 (Balanced Partition)

即使划分比例不完美（如 9:1）：

$$T(n) = T(9/10 n) + T(1/10 n) + \Theta(n)$$

其递归树深度依然是 $\log_{10/9} n = \Theta(\lg n)$，故运行时间仍为 $\Theta(n \lg n)$。这说明**只要划分是常数比例的，算法就很快**。

![image-20260510131901258](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH7-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.assets/image-20260510131901258.png)

### 3.4 相关练习题

- **7.2-2**：全相同元素数组。划分产生 $n-1$ 和 $0$，递归式 $T(n) = T(n-1) + \Theta(n)$，结果为 $\Theta(n^2)$。
- **7.2-3**：降序排序数组。划分产生 $0$ 和 $n-1$，同上，结果为 $\Theta(n^2)$。

## 4. 7.3 快速排序的随机化版本

为了避免在特定输入下（如已排序数组）触发最坏情况，我们引入随机性。

### 4.1 随机化算法

在划分前，随机选择一个元素与 $A[r]$ 交换。

```python
RANDOMIZED-PARTITION(A, p, r)
    i = RANDOM(p, r)
    exchange A[r] with A[i]
    return PARTITION(A, p, r)

RANDOMIZED-QUICKSORT(A, p, r)
    if p < r
        q = RANDOMIZED-PARTITION(A, p, r)
        RANDOMIZED-QUICKSORT(A, p, q - 1)
        RANDOMIZED-QUICKSORT(A, q + 1, r)
```

### 4.2 思考题

- **7.3-1**：为什么分析期望运行时间？
  - 因为随机化不改变最坏情况（依然可能运气极差抽到最小），但极大降低了最坏情况发生的概率。期望值代表了现实中最典型的表现。
- **7.3-2**：RANDOM 被调用次数？
  - 无论最好最坏，总会调用 $\Theta(n)$ 次。因为每个元素都有机会被选作枢轴，且递归树总共有 $n$ 个节点。

## 5. 7.4 快速排序的严格数学分析

### 5.1 最坏情况代入法证明

猜测 $T(n) \le cn^2$：

$$T(n) = \max_{0 \le q \le n-1} \{ T(q) + T(n-1-q) \} + \Theta(n)$$

代入：$T(n) \le c(n-1)^2 + \Theta(n) = cn^2 - (2n-1)c + \Theta(n) \le cn^2$（当 $c$ 足够大）。 结合 $\Omega(n^2)$ 证明，得出最坏情况为 $\Theta(n^2)$。

### 5.2 关键引理证明（思考题 7.4-3）

**问题**：证明 $f(q) = q^2 + (n-q-1)^2$ 在 $q=0$ 或 $q=n-1$ 时取最大。 **证明**：

- $f'(q) = 4q - 2n + 2$
- $f''(q) = 4 > 0$（开口向上）
- 极小值在 $q = (n-1)/2$ 处。最大值必然在区间端点 $q=0$ 或 $q=n-1$ 处取得。即 $f(0) = f(n-1) = (n-1)^2$。

### 5.3 期望时间分析与指示器变量（7.4-4）

设 $X_{ij}$ 为指示器随机变量，代表 $z_i$ 与 $z_j$ 是否发生过比较。

$$E[X] = \sum_{i=1}^{n-1} \sum_{j=i+1}^n \frac{2}{j-i+1}$$

通过调和级数性质：

$$E[X] = \sum_{i=1}^{n-1} \sum_{k=1}^{n-i} \frac{2}{k+1} \approx \sum_{i=1}^{n-1} 2 \ln n = \Omega(n \lg n)$$

## 6. 7.4-5 实践优化：快排与插入排序结合

**策略**：当子数组规模小于 $k$ 时停止递归，最后对整个数组进行一次插入排序。

**运行时间证明**：

- 快排部分：递归树深度减少，复杂度为 $O(n \lg(n/k))$。
- 插入排序部分：共 $n/k$ 个长度为 $k$ 的块。总时间 $O(n/k \cdot k^2) = O(nk)$。
- **总时间**：$O(nk + n \lg(n/k))$。
- **选择** $k$：理论上应选择满足 $lg k \ge \frac{c_i}{c_q} k$ 的 $k$，实际上需通过实验测试得出隐藏常数的最优解。

## 例题

### 7.1-1

画图说明PARTITION在数组 A=⟨13,19,9,5,12,8,7,4,21,2,6,11⟩ 上的操作过程。

解答：

对应第三版7.1-1。

![img](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH7-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.assets/v2-c4396efc18ddd43ca9f13113ae28c94f_r.jpg)



### 7.2-1

**运用代入法证明 $T(n)=T(n−1)+Θ(n)$ 的解为 $T(n)=Θ(n^2)$ 。**

解答：

对应第三版7.2-1。

猜测 $T(n)≤cn^2$，则

$T(n)≤c(n−1)^2+dn=cn^2+(d−2c)n+c≤cn^2$

其中 $c>\frac{d}{2},n≥\frac{c}{2c−d}$。






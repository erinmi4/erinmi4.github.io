---
title: "算法导论-CH2-排序与分治"
slug: "算法导论-CH2-排序与分治"
description: "从基础排序算法到循环不变式证明，再到分治法及复杂度分析的完整体系。"
pubDate: 2026-05-06
updatedDate: 2026-05-06
tags:
  - 数据结构与算法
  - 算法导论
  - 修考
category: 修考
draft: false
---

# 算法导论学习笔记：排序与分治

- 算法导论（第四版）第二章：入门　第三节：设计算法 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/546214732
- 算法导论（第四版）第二章：入门　思考题 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/546216658

<iframe src="https://drive.google.com/file/d/1UrJ48xoCejeUxnWqP4bBWjoEK3uDyi-O/preview" width="640" height="480"></iframe>

## 第一部分：算法入门与插入排序

### 1. 什么是排序？

在一组向量（数组）拥有多个维度（属性）时，我们通常选择一个**主维度**进行排序。

- **例子**：在一张学生成绩表中，包含学号、姓名、成绩。我们可以根据学号排序，也可以根据成绩排序。
- **直观理解**：插入排序就像我们打扑克牌时整理手牌。每次从桌上摸起一张牌，将其插入到左手已排好序的牌中的正确位置。

### 2. 插入排序 (Insertion Sort) 伪代码

```
INSERTION-SORT(A, n)
    for i = 2 to n
        key = A[i]
        j = i - 1
        // 将 A[i] 插入到已排序序列 A[1..i-1] 中
        while j > 0 and A[j] > key
            A[j + 1] = A[j]
            j = j - 1
        A[j + 1] = key
```

## 第二部分：循环不变式 (Loop Invariant)

### 1. 什么是循环不变式？

循环不变式用于证明算法的正确性，类似于**数学归纳法**。它需要满足以下三个性质：

1. **初始化 (Initialization)**：在循环的第一轮迭代开始之前，该性质成立。
2. **保持 (Maintenance)**：如果在循环的某一次迭代开始之前它是成立的，那么在下一次迭代开始之前它也保持成立。
3. **终止 (Termination)**：当循环结束时，不变式能提供一个有用的性质，证明算法达到了预期目标。

### 2. 例题：求数组 $A[1 : n]$ 的元素和

- **伪代码**：

  ```
  SUM-ARRAY(A, n)
      sum = 0
      for i = 1 to n
          sum = sum + A[i]
      return sum
  ```

- **循环不变式**：`sum` 记录了子数组 $A[1 : i]$ 的元素和。

  - **初始化**：$i = 1$ 前，`sum = 0`，代表空数组的和，正确。
  - **保持**：第 $i$ 轮循环将 $A[i]$ 加到 `sum` 中，因此下轮迭代前 `sum` 包含 $A[1 : i]$。
  - **终止**：$i = n + 1$，循环结束，此时 `sum` 为 $A[1 : n]$ 的总和。

### 3. 例题：查找问题 (Linear Search)

- **输入**：数组 $A[1 : n]$ 和目标元素 $x$。

- **输出**：若 $x$ 存在，返回下标 $i$；否则返回 `NIL`。

- **伪代码**：

  ```
  LINEAR-SEARCH(A, n, x)
      for i = 1 to n
          if A[i] == x
              return i
      return NIL
  ```

- **循环不变式**：子数组 $A[1 : i-1]$ 中不包含目标元素 $x$。

  - **初始化**：$i = 1$，$A[1:0]$ 为空集，性质成立。
  - **保持**：若 $A[i] \neq x$，则 $A[1 : i]$ 均不等于 $x$，进入下一轮循环时性质保持。
  - **终止**：若 $i = n + 1$，说明遍历全集仍未找到 $x$，返回 `NIL`。

## 第三部分：算法分析

我们不仅关注程序的耗时，更关注**算法本身的效率**（时间复杂度）。

### 1. 选择排序 (Selection Sort)

- **策略**：在 $A[1:n]$ 中找到最小元素与 $A[1]$ 交换；再在 $A[2:n]$ 中找最小元素与 $A[2]$ 交换，以此类推。

- **伪代码**：

  ```
  SELECTION-SORT(A, n)
      for i = 1 to n - 1
          minIndex = i
          for j = i + 1 to n
              if A[j] < A[minIndex]
                  minIndex = j
          swap(A[i], A[minIndex])
  ```

- **复杂度分析**： 设交换操作需 $c$ 步，运行时间为：

  $$\sum_{i=1}^{n-1} (n - i + c) = \frac{1}{2}n^2 + (c - \frac{1}{2})n - c = \Theta(n^2)$$

  **结论**：选择排序的最好和最坏运行时间均为 $\Theta(n^2)$。

### 2. 运行情况分类

- **最坏情况 (Worst Case)**：给出了运行时间的**上界**，是分析的首选。
- **平均情况 (Average Case)**：运行时间的数学期望。

## 第四部分：设计算法——分治法 (Divide and Conquer)

分治模式包含三个步骤：

1. **分解 (Divide)**：将原问题分解为若干个规模较小、相互独立、与原问题形式相同的子问题。
2. **解决 (Conquer)**：递归地解这些子问题。若子问题足够小，则直接求解。
3. **合并 (Combine)**：将子问题的解合并为原问题的解。

### 1. 归并排序 (Merge Sort)

![图片](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH2-%E6%8E%92%E5%BA%8F%E4%B8%8E%E5%88%86%E6%B2%BB.assets/image.webp)

归并排序是分治法的典型应用。核心在于 `MERGE` 过程，可以理解为两个排好序的扑克牌堆合并。

- **MERGE 伪代码**：

```
MERGE(A, p, q, r)
    nL = q - p + 1    // 左子数组长度
    nR = r - q        // 右子数组长度
    let L[0 : nL-1] and R[0 : nR-1] be new arrays
    for i = 0 to nL - 1
        L[i] = A[p + i]
    for j = 0 to nR - 1
        R[j] = A[q + j + 1]
    i = 0, j = 0, k = p
    while i < nL and j < nR
        if L[i] ≤ R[j]
            A[k] = L[i]; i = i + 1
        else 
            A[k] = R[j]; j = j + 1
        k = k + 1
    // 处理剩余元素
    while i < nL
        A[k] = L[i]; i = i + 1; k = k + 1
    while j < nR
        A[k] = R[j]; j = j + 1; k = k + 1
```

- **递归主函数**：

```
MERGE-SORT(A, p, r)
    if p ≥ r
        return
    q = ⌊(p + r) / 2⌋
    MERGE-SORT(A, p, q)
    MERGE-SORT(A, q + 1, r)
    MERGE(A, p, q, r)
```

### 2. 复杂度分析

归并排序的时间复杂度递推式为：

$$T(n) = \begin{cases} \Theta(1) & n = 1 \\ 2T(n/2) + \Theta(n) & n > 1 \end{cases}$$

该方程的解为 $T(n) = \Theta(n \lg n)$。

## 第五部分：数学归纳法证明递推式

### 任务：证明 $T(n) = 2T(n/2) + n$ 的解为 $T(n) = n \lg n$

（假设 $n = 2^k$）

- **归纳基础 (Induction Basis)**： 当 $n = 2^1$ 时，$T(2) = 2 \cdot T(1) + 2$。 若设 $T(1) = 0$（或从基础点 $T(2)=2$ 开始）： $T(2) = 2 \lg 2 = 2 \cdot 1 = 2$，成立。

- **归纳假设 (Induction Hypothesis)**： 假设对于任意 $i = 2^k$，命题 $\mathcal{P}(i)$ 为真，即 $T(2^k) = 2^k \cdot k$。

- **归纳步骤 (Induction Step)**： 当 $n = 2^{k+1}$ 时：

  $$T(2^{k+1}) = 2T(2^{k+1}/2) + 2^{k+1}$$

  $$= 2T(2^k) + 2^{k+1}$$

  根据假设 $T(2^k) = 2^k \cdot k$ 代入：

  $$= 2(k \cdot 2^k) + 2^{k+1}$$

  $$= k \cdot 2^{k+1} + 2^{k+1}$$

  $$= (k + 1)2^{k+1}$$

  由于 $k+1 = \lg 2^{k+1}$，所以：

  $$T(2^{k+1}) = 2^{k+1} \lg 2^{k+1} = n \lg n$$

  **结论**：命题成立。

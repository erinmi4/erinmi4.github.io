---
title: "算法导论-CH6-堆排序"
slug: "算法导论-CH6-堆排序"
description: "算法导论-CH6-堆排序，待补充摘要。"
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 数据结构与算法
  - 算法导论
  - 修考
category: 修考
draft: false 
---

<iframe src="https://drive.google.com/file/d/1EEf2VMvmVw21bMGgK1CVGMIfzUqxFVgu/preview" width="840" height="480"></iframe>

- 算法导论（第四版）第六章：堆排序　前言 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/546914975
- 算法导论（第四版）第六章：堆排序　第一节：堆 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/546961002
- 算法导论（第四版）第六章：堆排序　第二节：维护堆的性质 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/547085751
- 算法导论（第四版）第六章：堆排序　第三节：建堆 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/547317596
- 算法导论（第四版）第六章：堆排序　第四节：堆排序算法 - 千葉原的文章 - 知乎
  https://zhuanlan.zhihu.com/p/547760130

# 第六章：堆排序 (Heap Sort) 学习笔记

## 1. 堆的基本概念与结构

### 1.1 特点

- **运行时间**：$O(n \lg n)$。
- **空间特性**：原地排序（In-place sort），即不需要额外的辅助数组。
- **数据结构**：堆通常指**二叉堆**（Binary Heap），可以看作一棵完全二叉树。
  ![image-20260509103600641](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/image-20260509103600641.png)

### 1.2 堆的数组表示

堆可以用一个数组 $A$ 来表示。给定一个结点的下标 $i$，我们可以快速计算其父结点和左右孩子的下标（注意：以下公式基于数组下标从 $1$ 开始）：

- **PARENT(i)**：$\lfloor i/2 \rfloor$
- **LEFT(i)**：$2i$
- **RIGHT(i)**：$2i + 1$

> **注意**：如果数组从 $0$ 开始，则：$Parent(i) = \lfloor (i-1)/2 \rfloor$, $Left(i) = 2i+1$, $Right(i) = 2i+2$。

![image-20260509105018794](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/image-20260509105018794.png)

### 1.3 堆的分类

- **最大堆 (Max-Heap)**：满足 $A[PARENT(i)] \ge A[i]$。堆顶是最大元素，常用于**堆排序**。
- **最小堆 (Min-Heap)**：满足 $A[PARENT(i)] \le A[i]$。堆顶是最小元素，常用于构造**优先队列**。



## 2. 维护堆的性质 (MAX-HEAPIFY)

### 2.1 目的

当结点的左右子树都是最大堆，但根结点可能小于其孩子时，通过该操作将该元素“下沉”（Sink），使以该结点为根的子树满足最大堆性质。

![image-20260509104930365](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/image-20260509104930365.png)

### 2.2 伪代码

```
MAX-HEAPIFY(A, i)
    l = LEFT(i)
    r = RIGHT(i)
    if l ≤ A.heap-size and A[l] > A[i]
        largest = l
    else largest = i
    if r ≤ A.heap-size and A[r] > A[largest]
        largest = r
    if largest ≠ i
        exchange A[i] with A[largest]
        MAX-HEAPIFY(A, largest)
```

### 2.3 性能分析

- **递归式**：$T(n) \le T(2n/3) + \Theta(1)$。
- **解释**：在最坏情况下（底层半满），子树的最大规模约为 $2n/3$。
- **复杂度**：由主定理得 $T(n) = O(\lg n)$。

## 3. 建堆 (BUILD-MAX-HEAP)

### 3.1 过程

采用**自底向上**的方法，将一个无序数组转化成最大堆。

![image-20260509105849718](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/image-20260509105849718.png)

### 3.2 伪代码

```
BUILD-MAX-HEAP(A, n)
    A.heap-size = n
    for i = floor(n/2) down to 1
        MAX-HEAPIFY(A, i)
```

### 3.3 关键点思考

- **为什么从** $\lfloor n/2 \rfloor$ **开始？** 因为下标为 $\lfloor n/2 \rfloor + 1$ 到 $n$ 的结点全是叶子结点，每个叶子结点本身就可以看作一个符合性质的堆。
- **为什么是倒序（从后往前）？** `MAX-HEAPIFY` 假设左右子树已经是堆。如果从前往后，调整根结点时其子树尚未处理，无法保证最终结果是最大堆。
- **复杂度**：虽然简单分析为 $O(n \lg n)$，但通过精确计算，该过程的紧确界为 $O(n)$。

## 4. 堆排序算法 (HEAPSORT)

### 4.1 核心思想

利用最大堆不断提取“当前最大值”放入数组末尾。

### 4.2 步骤

1. 构建最大堆。
2. 将堆顶 $A[1]$（最大值）与堆末尾 $A[i]$ 交换。
3. 堆规模减 1。
4. 对新的堆顶执行 `MAX-HEAPIFY`。



画图描绘数组 A=⟨5,13,2,25,7,17,20,8,4⟩ 执行HEAPSORT的过程。

解答：

对应第三版6.4-1。

![img](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/v2-2bd1a12d1b3de358e725c3ea52c10ae1_r.jpg)

### 4.3 伪代码

```
HEAPSORT(A, n)
    BUILD-MAX-HEAP(A, n)
    for i = n downto 2
        swap(A[1], A[i])
        A.heap-size = A.heap-size - 1
        MAX-HEAPIFY(A, 1)
```

- **运行时间**：$\Theta(n \lg n)$。

## 5. 优先队列 (Priority Queues)

优先队列是一种用来维护一组元素的数据结构，每个元素都有一个关键字（Key）。

### 5.1 基本操作

- `MAX-HEAP-INSERT(A, x)`：插入元素。
- `MAX-HEAP-MAXIMUM(A)`：返回最大值。
- `MAX-HEAP-EXTRACT-MAX(A)`：去掉并返回最大值。
- `MAX-HEAP-INCREASE-KEY(A, i, k)`：将下标为 $i$ 的元素值增加到 $k$。



#### 说明 MAX-HEAP-EXTRACT-MAX 在堆 A=⟨15,13,9,5,12,8,7,4,0,6,2,1⟩ 上的操作过程。

解答：

对应第三版6.5-1。

第一步：移除堆顶元素；

第二步：堆顶元素设为堆最后一个元素，堆规模减少一；

第三步：重新调整为大顶堆。

![img](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/v2-82cab28a9ea31c1c49b2a4604a9edd72_r.jpg)

#### 说明 MAX-HEAP-INSERT(A,10) 在堆 A=⟨15,13,9,5,12,8,7,4,0,6,2,1⟩ 上的操作过程。

解答：

对应第三版6.5-2。

第一步：堆末尾增加一个元素，堆规模增加一；

第二步：重新调整为大顶堆。

![img](./%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA-CH6-%E5%A0%86%E6%8E%92%E5%BA%8F.assets/v2-ee5d0a58875ce3ae4b53830b503e09ab_r.jpg)

### 5.2 核心伪代码

**提取最大值：**

```
MAX-HEAP-EXTRACT-MAX(A)
    if A.heap-size < 1: error "heap underflow"
    max = A[1]
    A[1] = A[A.heap-size]
    A.heap-size = A.heap-size - 1
    MAX-HEAPIFY(A, 1)
    return max
```

**增加关键字 (Bubble Up)：**

```
MAX-HEAP-INCREASE-KEY(A, i, key)
    if key < A[i]: error "new key is smaller than current key"
    A[i] = key
    while i > 1 and A[PARENT(i)] < A[i]
        exchange A[i] with A[PARENT(i)]
        i = PARENT(i)
```

## 6. 补充习题与深度思考

### 6.1 堆元素的删除 (MAX-HEAP-DELETE)

**题目**：设计一个 $O(\lg n)$ 的算法删除堆中下标为 $i$ 的元素。 

**解答**：

1. 将要删除的位置替换为堆的最后一个元素。
2. 堆规模减 1。
3. 比较新元素与原元素（或与其父结点/子结点）的大小，决定向上调整（Increase-Key 逻辑）还是向下调整（Heapify 逻辑）。

```
MAX-HEAP-DELETE(A, i)
    last_val = A[A.heap-size]
    A.heap-size = A.heap-size - 1
    if i > A.heap-size: return // 边界处理
    
    if last_val > A[i]
        // 变大了，向上冒泡
        A[i] = last_val
        while i > 1 and A[PARENT(i)] < A[i]
            exchange A[i] with A[PARENT(i)]
            i = PARENT(i)
    else
        // 变小了，向下沉溺
        A[i] = last_val
        MAX-HEAPIFY(A, i)
```

*注：笔记中提到的错误写法是因为仅调用 `MAX-HEAPIFY` 可能无法处理元素变大需要向上的情况（如删除较小的子结点并替换为较大的末尾结点时）。*

### 6.2 插入时的 $-\infty$ 技巧

**题目**：为什么 `MAX-HEAP-INSERT` 先设为 $-\infty$ 再增加？ 

**解答**：为了复用 `MAX-HEAP-INCREASE-KEY`。因为该函数第一步会检查 `key < A[i]`。设为 $-\infty$ 保证了新插入的任何值 $k$ 都满足 $k \ge -\infty$，从而能通过校验并正确“冒泡”到合适位置。

### 6.3 合并 K 个有序链表 (6.5-11)

**目标**：$O(n \lg k)$ 时间合并 $k$ 个总计 $n$ 个元素的有序链表。 

**核心思路**：

1. 建立一个大小为 $k$ 的**最小堆**。
2. 将每个链表的头结点放入堆中。
3. 每次弹出堆顶（当前最小），将其加入合并后的链表。
4. 如果被弹出的结点还有下一个结点，则将下一个结点入堆。

**Java 实现示例：**

```
class Solution {
    class Status implements Comparable<Status> {
        int val;
        ListNode ptr;
        Status(int val, ListNode ptr) { this.val = val; this.ptr = ptr; }
        public int compareTo(Status s2) { return this.val - s2.val; }
    }

    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Status> queue = new PriorityQueue<>();
        for (ListNode node : lists) {
            if (node != null) queue.offer(new Status(node.val, node));
        }
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        while (!queue.isEmpty()) {
            Status f = queue.poll();
            tail.next = f.ptr;
            tail = tail.next;
            if (f.ptr.next != null) {
                queue.offer(new Status(f.ptr.next.val, f.ptr.next));
            }
        }
        return dummy.next;
    }
}
```
















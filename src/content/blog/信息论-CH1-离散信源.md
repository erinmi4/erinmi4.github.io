---
title: "信息论-CH1-离散信源"
slug: "信息论-CH1-离散信源"
description: "信息论-CH1-离散信源，待补充摘要。"
pubDate: 2026-04-29
updatedDate: 2026-04-29
tags:
  - 信息论
  - 修考
category: 修考
draft: false
---

# 信息论笔记：离散信源与马尔可夫模型

[2024信息论与编码原理期末复习](https://www.bilibili.com/video/BV1b1421r7vn/?buvid=XU5EF145F0DFFF3C5E71837D937FA3080CB89&from_spmid=search.search-result.0.0&is_story_h5=false&mid=gD1TsSbShVg1Y9hI4zeZKA%3D%3D&plat_id=116&share_from=ugc&share_medium=android&share_plat=android&share_session_id=455d2c3a-6869-44da-b97c-d980dbccba49&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1777387517&unique_k=B2iGPaz&up_id=427516537&vd_source=f6a1c5561b1c1e28133e4465302990f3)

## 第一章：离散信源 (Discrete Sources)

### 1. 基本概念

信源的传输过程本质上是从符号集中抽取符号并发送。

- **自信息 (Self-information)**：表示某一具体符号的不确定性。
  - **原理**：符号发生的概率越低，其携带的信息量越大（不确定性越高）。
  - **公式**：$I(x_i) = -\log_2 P(x_i)$
  - **单位**：bit (比特)
- **信源熵 (Source Entropy)**：信源的平均不确定性，即自信息的统计平均值。
  - **公式**：$H(X) = E[I(x_i)] = \sum_{i} P(x_i) I(x_i) = -\sum_{i} P(x_i) \log_2 P(x_i)$
  - **性质**：
    - **极大性**：当信源中各符号等概率分布时，熵达到最大值 $H_{max} = \log_2 N$（$N$ 为符号个数）。
    - **示例**：对于二元信源 $X = \{0, 1\}$，若 $P = [2/3, 1/3]$，则 $H(2/3, 1/3) < H(1/2, 1/2)$。任何使概率趋于均等化的变动都会增加信源熵。

### 2. 离散无记忆信源的扩展

- **定义**：每次发送消息都互相独立，不受之前符号的影响。
  - **概率表示**：$P(X_1, X_2, \dots, X_N) = \prod_{i=1}^N P(X_i)$
- **N次扩展信源 (**$X^N$**)**：
  - **符号数**：若原信源有 $n$ 个符号，则扩展信源有 $n^N$ 个复合符号。
  - **扩展信源熵**：$H(X^N) = N \cdot H(X)$
  - **单位**：bit / $N$ 个信源符号

## 第二章：有记忆信源 (Sources with Memory)

### 1. 联合熵与条件熵

在有记忆信源中，符号之间存在关联。

- **条件概率**：$P(x|y) = \frac{P(x,y)}{P(y)}$ （已知 $y$ 情况下 $x$ 发生的概率）。

- **条件熵 (Conditional Entropy)**：$H(X|Y)$ 表示在已知 $Y$ 的情况下，$X$ 的不确定性。

- **联合熵 (Joint Entropy)**：$H(X, Y) = H(Y) + H(X|Y) = H(X) + H(Y|X)$

  - *注：联合概率分布与时间起点无关（平稳性）。*

  ![Conditional entropy - Wikipedia](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH1-%E7%A6%BB%E6%95%A3%E4%BF%A1%E6%BA%90.assets/images.png)

### 2. 马尔可夫信源 (Markov Sources)

马尔可夫信源是一种特殊的有记忆信源，当前状态只与前一个（或前 $m$ 个）状态有关。

![Hidden Markov Models ...](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH1-%E7%A6%BB%E6%95%A3%E4%BF%A1%E6%BA%90.assets/images-1777468665057-3.jpeg)

#### 解题标准步骤 (SOP):

1. **构建状态转移矩阵** $P$：

   - 矩阵元素 $P_{ij}$ 表示从状态 $S_i$ 转移到状态 $S_j$ 的概率。

   - 每一行的概率之和必须为 1。

     $$\vec{P} = \begin{bmatrix} P_{11} & P_{12} & P_{13} \\ P_{21} & P_{22} & P_{23} \\ P_{31} & P_{32} & P_{33} \end{bmatrix}$$

2. **判断平稳分布（各态历经性）**：

   - 检查是否存在一个 $n$，使得 $P^n$ 的每一项都非零。

3. **求解稳态分布** $\vec{w}$：

   - 利用方程组：
     - $\vec{w} = \vec{w} \cdot \vec{P}$
     - $\sum w_i = 1$
   - 其中 $\vec{w} = [w_1, w_2, w_3]$ 代表各符号在长期运行下的概率。

4. **计算极限熵 (Entropy Rate)** $H_\infty$：

   - $H_\infty = \sum_{i} w_i H(S|S=s_i)$
   - 即各状态下的条件熵按稳态概率加权平均。

## 第三章：信源效率与冗余度

- **效率 (**$\eta$**)**：实际信源熵与理想最大熵的比值。

  $$\eta = \frac{H_\infty}{H_0}$$

  - $H_\infty$：实际信源熵（考虑了相关性）。
  - $H_0$：独立等概情况下的最大熵（$\log_2 N$）。

- **冗余度 (**$\xi$**)**：信源中多余的部分。

  $$\xi = 1 - \eta$$

## 第四章：典型例题解析

### 例题 1：黑白气象传真图

信源 $X = \{\text{黑}, \text{白}\}$，已知 $P(\text{黑}) = 0.3, P(\text{白}) = 0.7$。

1. **无关联情况**： $H(X) = -(0.3 \log_2 0.3 + 0.7 \log_2 0.7) \approx 0.88 \text{ bit/符号}$
2. **有关联情况 (马尔可夫)**： 已知转移概率 $P(b|b)=0.8, P(w|b)=0.2, P(b|w)=0.1, P(w|w)=0.9$。
   - 转移矩阵 $P = \begin{bmatrix} 0.8 & 0.2 \\ 0.1 & 0.9 \end{bmatrix}$
   - 解稳态方程：$[w_1, w_2] \begin{bmatrix} 0.8 & 0.2 \\ 0.1 & 0.9 \end{bmatrix} = [w_1, w_2]$ 且 $w_1+w_2=1$。
   - 解得：$w_1 = 1/3, w_2 = 2/3$。
   - 计算 $H_\infty = \frac{1}{3}H(0.8, 0.2) + \frac{2}{3}H(0.1, 0.9) \approx 0.55 \text{ bit/符号}$。

- **结论**：符号间的依赖关系（记忆性）显著降低了信源熵（减少了不确定性）。

### 例题 2：二元独立信源

信源产生 0, 1 序列，$P(0)=0.4, P(1)=0.6$，无记忆。

1. **平稳性**：由于概率不随时间改变且互相独立，该信源是平稳的。
2. **计算**：
   - $H(X) = H(0.4, 0.6) = 0.97 \text{ bit/符号}$
   - $H(X^2) = 2 \cdot H(X) = 1.94 \text{ bit/2个符号}$
   - $H(X_3 | X_1 X_2) = H(X) = 0.97$ （因无记忆，条件不起作用）。
   - $\lim_{N \to \infty} H_N(X) = H(X) = 0.97$。
3. **扩展符号**：$X^4$ 的可能符号包括从 `0000` 到 `1111` 共 16 种组合。

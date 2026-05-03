---
title: "概率论-CH1-样本空间、事件的关系与运算"
slug: "概率论-CH1-样本空间、事件的关系与运算"
description: "概率论-CH1-样本空间、事件的关系与运算，待补充摘要。"
pubDate: 2026-05-03
updatedDate: 2026-05-03
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

# 第一章：样本空间、事件的关系与运算

[样本空间、事件的关系与运算](https://www.bilibili.com/video/BV1SC4y1m7Fo?buvid=XU5EF145F0DFFF3C5E71837D937FA3080CB89&from_spmid=main.space-contribution.0.0&is_story_h5=false&mid=gD1TsSbShVg1Y9hI4zeZKA%3D%3D&plat_id=116&share_from=ugc&share_medium=android&share_plat=android&share_session_id=2f03c5a9-07b3-4335-8da2-af7b79b7439f&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1777450130&unique_k=X1JFnZh&up_id=1586658&vd_source=f6a1c5561b1c1e28133e4465302990f3)

## 1. 概率论的基本概念

概率论研究的是随机现象的统计规律性。虽然单个随机事件的发生具有偶然性，但大量重复试验中事件的发生往往呈现出某种确定性的规律。

- **核心目的**：量化不确定性（Quantifying Uncertainty）。

## 2. 样本空间 (Sample Space)

**定义**：随机试验所有可能结果的集合称为样本空间，通常用 $S$ 或 $\Omega$ 表示。

- **样本点**：样本空间中的每一个元素（即每一个实验结果）称为样本点。

- **示例**：掷一枚硬币，观察正反面。

  $$S = \{ \text{正面 (head)}, \text{反面 (tail)} \}$$

## 3. 事件 (Event)

**定义**：样本空间 $S$ 的子集称为随机事件，简称事件。

- 当且仅当该子集中的某一个样本点出现时，称该**事件发生**。
- **特殊事件**：
  - **必然事件**：样本空间 $S$ 本身，每次试验一定发生。
  - **不可能事件**：空集 $\emptyset$，每次试验都不可能发生。

## 4. 事件的关系与运算

事件的运算本质上是集合的运算。通过集合的语言，我们可以精确描述概率命题。

### (1) 包含关系

如果事件 $A$ 发生必然导致事件 $B$ 发生，则称 $B$ 包含 $A$，记作 $A \subset B$。

### (2) 和事件 (并集)

记作 $A \cup B$ 或 $A + B$。

- **含义**：事件 $A$ 与 $B$ 至少有一个发生。

### (3) 积事件 (交集)

记作 $A \cap B$ 或 $AB$。

- **含义**：事件 $A$ 与 $B$ 同时发生。

### (4) 补事件 (对立事件)

记作 $A^c$ 或 $\bar{A}$。

- **含义**：事件 $A$ 不发生。
- **关系**：$A \cup \bar{A} = S$ 且 $A \cap \bar{A} = \emptyset$。

### (5) 差事件

记作 $A - B$。

- **含义**：事件 $A$ 发生而事件 $B$ 不发生。
- **集合表示**：$A - B = A \cap \bar{B} = A - (A \cap B)$。即从 $A$ 中减去属于 $B$ 的部分。

### (6) 互斥事件 (互不相容事件)

如果 $A$ 与 $B$ 不能同时发生，即 $A \cap B = \emptyset$，则称 $A$ 与 $B$ 互斥。

## 5. 事件的运算律

设 $A, B, C$ 为事件，满足以下运算规则：

1. **交换律**：$A \cup B = B \cup A$；$A \cap B = B \cap A$
2. **结合律**：$(A \cup B) \cup C = A \cup (B \cup C)$；$(A \cap B) \cap C = A \cap (B \cap C)$
3. **分配律**：
   - $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
   - $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
4. **德·摩根律 (De Morgan's Laws)**：
   - $\overline{A \cup B} = \bar{A} \cap \bar{B}$ （并的补等于补的交）
   - $\overline{A \cap B} = \bar{A} \cup \bar{B}$ （交的补等于补的并）

## 6. 综合例题：射击试验

**题目描述**： 某射手向一个目标连续射击三次。

- 设 $A_i = \{ \text{第 } i \text{ 次命中} \}, \quad i = 1, 2, 3$。
- 设 $B_j = \{ \text{命中的次数为 } j \}, \quad j = 0, 1, 2, 3$。

**任务**：用 $A_i$ 表示事件 $B_j$。

**解析**：

1. **三次均未命中 (**$B_0$**)**： 即第一次没中、第二次没中且第三次也没中。

   $$B_0 = \bar{A}_1 \cap \bar{A}_2 \cap \bar{A}_3$$

   根据德·摩根律，也可以表示为：

   $$B_0 = \overline{A_1 \cup A_2 \cup A_3}$$

   （注：这表示“至少命中一次”的对立事件）。

2. **恰好命中三次 (**$B_3$**)**： 即三次全部命中。

   $$B_3 = A_1 \cap A_2 \cap A_3$$

3. **恰好命中两次 (**$B_2$**)**： 分为三种情况：中12、中13、中23。

   $$B_2 = (A_1 \cap A_2 \cap \bar{A}_3) \cup (A_1 \cap \bar{A}_2 \cap A_3) \cup (\bar{A}_1 \cap A_2 \cap A_3)$$

4. **恰好命中一次 (**$B_1$**)**： 分为三种情况：仅中第1次、仅中第2次、仅中第3次。

   $$B_1 = (A_1 \cap \bar{A}_2 \cap \bar{A}_3) \cup (\bar{A}_1 \cap A_2 \cap \bar{A}_3) \cup (\bar{A}_1 \bar{A}_2 A_3)$$

**延伸思考**：

- **“至少命中一次”** 可以表示为：$A_1 \cup A_2 \cup A_3$。
- **“至少命中两次”** 可以表示为：$B_2 \cup B_3$。

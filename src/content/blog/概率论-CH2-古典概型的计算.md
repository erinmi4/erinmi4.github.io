---
title: "条件概率、独立性与事件组合"
slug: "概率论-CH2-古典概型的计算"
description: "概率论-CH2-古典概型的计算，待补充摘要。"
pubDate: 2026-05-03
updatedDate: 2026-05-03
tags:
  - 概率论
  - 修考
category: 修考
draft: false
---

https://www.eecs70.org/assets/pdf/notes/n14.pdf

# 概率论精益笔记：条件概率、独立性与事件组合

https://gemini.google.com/app/185114fc732f363e

## 一、 条件概率 (Conditional Probability)

### 1.1 核心直觉与背景

在现实世界中，**现在的动作往往会对未来产生影响**。

- **经典对比**：
  - **独立事件（投硬币）**：如果你连续投了 10 次硬币都是反面（T），第 11 次投出正面（H）的概率仍然是精确的 $50\%$。硬币没有记忆，前期的动作不影响未来。
  - **非独立事件（发牌）**：一副包含 26 张红牌和 26 张黑牌的扑克。如果前 10 次发出来的全是红牌，那么此时牌堆中只剩下 16 张红牌和 26 张黑牌。此时下一张摸到红牌的概率变成了 $\frac{16}{42}$。发牌这一“过去的动作”改变了我们对“未来概率”的感知。

### 1.2 条件概率的定义

对于同一概率空间中的两个事件 $A$ 和 $B$（其中 $\mathbb{P}[B] > 0$），在**已知事件** $B$ **发生**的条件下，**事件** $A$ **发生的条件概率**定义为：

$$\mathbb{P}[A|B] = \frac{\mathbb{P}[A \cap B]}{\mathbb{P}[B]}$$

![image-20260524111457460](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH2-%E5%8F%A4%E5%85%B8%E6%A6%82%E5%9E%8B%E7%9A%84%E8%AE%A1%E7%AE%97.assets/image-20260524111457460.png)

### 💡 疑问解答 1：我不明白为什么要“归一化”？

你在笔记中提到了计算步骤：

1. 先对所有样本点缩放，归一化；
2. 对属于 $A \cap B$ 的所有点求和。

**为什么要归一化（Normalize）？**

- **样本空间的缩小**：原本我们的样本空间是全局空间 $\Omega$，其所有样本点的概率之和为 $\mathbb{P}[\Omega] = 1$。

- 当我们得知“$B$ 已经发生”时，任何不在 $B$ 中的样本点 $\omega \notin B$ 都不可能发生了。此时，**新的样本空间缩小为了** $B$。

- 如果直接继承原样本点的概率，整个新空间（即 $B$）的所有样本点概率之和为 $\sum_{\omega \in B} \mathbb{P}[\omega] = \mathbb{P}[B]$。因为通常 $\mathbb{P}[B] < 1$，这违反了概率论的第二公理——**样本空间的总概率必须为 1**。

- 为了建立一个合法的概率分布，我们需要对 $B$ 内部的所有样本点进行**同比例拉伸（缩放）**，使它们的和重新等于 1。

- 缩放因子就是 $\frac{1}{\mathbb{P}[B]}$。归一化后的新样本点概率为：

  $$\mathbb{P}[\omega | B] = \frac{\mathbb{P}[\omega]}{\mathbb{P}[B]} \quad (\omega \in B)$$

- 将 $A$ 与 $B$ 的交集 $A \cap B$ 中所有样本点的这一新概率求和，就得到了条件概率：

  $$\mathbb{P}[A|B] = \sum_{\omega \in A \cap B} \mathbb{P}[\omega | B] = \sum_{\omega \in A \cap B} \frac{\mathbb{P}[\omega]}{\mathbb{P}[B]} = \frac{\mathbb{P}[A \cap B]}{\mathbb{P}[B]}$$

  这就是归一化的数学本质。

### 1.3 经典例题解析

#### 例题 1：球放入箱子 (Balls and Bins)

将 $m=4$ 个有标签的球随机放入 $n=3$ 个有标签的箱子中（样本空间总大小为 $3^4 = 81$）。 设：

- 事件 $B$ = 第二个箱子为空
- 事件 $A$ = 第一个箱子为空

**求：在已知第二个箱子为空的条件下，第一个箱子也为空的概率** $\mathbb{P}[A|B]$**。**

- **计算** $\mathbb{P}[B]$： 第二个箱子为空，意味着所有的球只能选择第 1 或 第 3 个箱子。每个球有 2 种选择，共 $2^4 = 16$ 种情况。

  $$\mathbb{P}[B] = \left(\frac{2}{3}\right)^4 = \frac{16}{81}$$

- **计算** $\mathbb{P}[A \cap B]$： $A \cap B$ 表示第 1 和第 2 个箱子都为空，即所有的球必须全部落入第 3 个箱子。每个球只有 1 种选择。

  $$\mathbb{P}[A \cap B] = \left(\frac{1}{3}\right)^4 = \frac{1}{81}$$

- **计算条件概率** $\mathbb{P}[A|B]$：

  $$\mathbb{P}[A|B] = \frac{\mathbb{P}[A \cap B]}{\mathbb{P}[B]} = \frac{1/81}{16/81} = \frac{1}{16}$$

- **物理意义**：无条件概率 $\mathbb{P}[A] = \frac{16}{81} \approx 19.8\%$。而一旦知道第二个箱子是空的，第一个箱子也是空的概率骤降至 $\mathbb{P}[A|B] = \frac{1}{16} = 6.25\%$。因为第二个箱子空了，球不得不往其他箱子里挤，导致第一个箱子变空的概率显著变小。

#### 例题 2：发牌问题 (Card Dealing)

从 52 张标准扑克牌中随机发 2 张牌。 设：

- 事件 $B$ = 第一张牌是 Ace
- 事件 $A$ = 第二张牌是 Ace

**求：已知第一张是 Ace，第二张也是 Ace 的概率** $\mathbb{P}[A|B]$**。**

- **方法一：样本空间分析**

  - 样本空间总样本点数（考虑顺序）：$52 \times 51$。

  - $A \cap B$（两张都是 Ace）：由于牌堆中一共有 4 张 Ace，前两张都是 Ace 的情况有 $4 \times 3 = 12$ 种。

    $$\mathbb{P}[A \cap B] = \frac{4 \times 3}{52 \times 51} = \frac{12}{2652}$$

  - $B$（第一张是 Ace）：$\mathbb{P}[B] = \frac{4}{52} = \frac{1}{13}$。

  - 条件概率：

    $$\mathbb{P}[A|B] = \frac{\mathbb{P}[A \cap B]}{\mathbb{P}[B]} = \frac{\frac{12}{52 \times 51}}{\frac{4}{52}} = \frac{3}{51} = \frac{1}{17}$$

- **方法二：缩减样本空间直觉（极力推荐！）** 一旦已知第一张发出来的是 Ace，原 52 张牌中还剩 51 张牌，其中 Ace 只剩下 3 张。 因此，在这一新现实下，第二张摸到 Ace 的概率直截了当就是：

  $$\mathbb{P}[A|B] = \frac{3}{51}$$

## 二、 贝叶斯推断 (Bayesian Inference)

贝叶斯推断本质上是**根据新的观测结果（证据），来更新我们对某一未知事件（假设）的概率认知**。

- **先验概率 (Prior Probability)** $\mathbb{P}[A]$：在观测之前，我们对事件 $A$ 发生概率的初始评估（基于历史经验或统计数据）。
- **后验概率 (Posterior Probability)** $\mathbb{P}[A|B]$：在观测到证据 $B$ 发生之后，我们对事件 $A$ 概率更新后的认知。

### 💡 疑问解答 2：如何明白是这类（贝叶斯推断）题型呢？

当你做题时，如果题目具有以下三个经典特征，它就是典型的贝叶斯题型：

1. **存在一个隐秘的真实状态（假设** $A$**）**：例如“此人是否有病”、“邮件是否为垃圾邮件”、“犯人是否有罪”。并且已知这个状态在自然界中的初始分布（**先验概率** $\mathbb{P}[A]$）。
2. **存在一个不完美的检测手段（证据** $B$**）**：例如“试剂检测结果”、“关键词过滤器”、“目击证词”。并且题目会告诉你这个手段在已知真实状态下的准确率/错误率（**条件概率** $\mathbb{P}[B|A]$ 与 $\mathbb{P}[B|\bar{A}]$）。
3. **问题往往是“逆向”的**：手段是看得到的（$B$ 阳性），状态是看不到的（$A$ 有病）。题目会问：**“在观测到现象** $B$ **的情况下，真实状态是** $A$ **的概率是多少？”** 也就是求 $\mathbb{P}[A|B]$。

### 2.1 经典例题：疾病检测

#### 【题目描述】

某制药公司推出一种检测某种遗传病的试剂，其临床表现如下：

1. **患病者检测（患病** $A$**）**：有 $90\%$ 呈现阳性（$P$），$10\%$ 呈现阴性（$N$，假阴性）。
2. **健康者检测（健康** $H$ **或** $\bar{A}$**）**：有 $80\%$ 呈现阴性（$N$），$20\%$ 呈现阳性（$P$，假阳性）。
3. **先验概率**：该疾病在美国人口中的发病率为 $5\%$。

**问题：如果一个人随机接受检测并呈现阳性（**$P$**），他真正患病的概率** $\mathbb{P}[A|P]$ **是多少？**

#### 【数学建模】

- 先验概率：$\mathbb{P}[A] = 0.05 \implies \mathbb{P}[\bar{A}] = 0.95$（健康人占 $95\%$）。

- 条件概率（似然）：

  $$\mathbb{P}[P|A] = 0.90 \quad (\text{患病者呈阳性})$$

  $$\mathbb{P}[P|\bar{A}] = 0.20 \quad (\text{健康者呈阳性})$$

- 我们想求后验概率 $\mathbb{P}[A|P]$。根据条件概率定义：

  $$\mathbb{P}[A|P] = \frac{\mathbb{P}[A \cap P]}{\mathbb{P}[P]} = \frac{\mathbb{P}[P|A]\mathbb{P}[A]}{\mathbb{P}[P]}$$

  ![image-20260524111642289](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH2-%E5%8F%A4%E5%85%B8%E6%A6%82%E5%9E%8B%E7%9A%84%E8%AE%A1%E7%AE%97.assets/image-20260524111642289.png)

### 💡 疑问解答 3：公式 $\mathbb{P}[B] = \mathbb{P}[A \cap B] + \mathbb{P}[\bar{A} \cap B]$ 是怎么来的？

这是**全概率公式**在空间二分情况下的体现。我们可以从文氏图和逻辑上直观理解：

- 任何人，要么是“患者”（事件 $A$），要么是“健康人”（事件 $\bar{A}$）。这两个人群**互不相交**且**合起来等于整个人口** $\Omega$（即构成了一个划分）。

- “检测呈阳性”（事件 $B$）这个人群，可以被完美地切割成两部分：

  1. 既是患者又呈阳性的人：$A \cap B$
  2. 既是健康人又呈阳性的人：$\bar{A} \cap B$

- 因为 $A$ 和 $\bar{A}$ 是互斥的，所以这两部分人也绝不可能重合。因此，阳性总人数的概率可以直接相加：

  $$\mathbb{P}[B] = \mathbb{P}[A \cap B] + \mathbb{P}[\bar{A} \cap B]$$

- 展开它们：

  $$\mathbb{P}[B] = \mathbb{P}[B|A]\mathbb{P}[A] + \mathbb{P}[B|\bar{A}]\mathbb{P}[\bar{A}]$$

#### 【疾病检测计算过程】

1. **分母计算（总阳性率** $\mathbb{P}[P]$**）**：

   $$\mathbb{P}[P] = \mathbb{P}[P|A]\mathbb{P}[A] + \mathbb{P}[P|\bar{A}](1 - \mathbb{P}[A])$$

   $$\mathbb{P}[P] = (0.90 \times 0.05) + (0.20 \times 0.95) = 0.045 + 0.190 = 0.235$$

2. **分子计算（真正患病且呈阳性** $\mathbb{P}[A \cap P]$**）**：

   $$\mathbb{P}[A \cap P] = \mathbb{P}[P|A]\mathbb{P}[A] = 0.90 \times 0.05 = 0.045$$

3. **后验概率** $\mathbb{P}[A|P]$：

   $$\mathbb{P}[A|P] = \frac{0.045}{0.235} = \frac{9}{47} \approx 19.1\%$$

- **反直觉的结论**：尽管测试的敏感度高达 $90\%$，但如果一个人测出阳性，他真正得病的概率居然**还不到** $20\%$！
- **原因分析**：因为基础患病率极低（仅 $5\%$），哪怕健康人只有 $20\%$ 的误报率，健康人群基数巨大（$95\%$）产生的假阳性绝对人数（$0.19$）也远远超过了真阳性人数（$0.045$）。

### 💡 知识点澄清：条件概率 vs 贝叶斯 vs 全概率

你在笔记中提到：“计算有些不清楚，且容易混淆 Bayes 和 conditional probability。”

这里为你梳理它们的关系，并强烈肯定你的直觉：**“贝叶斯公式 = 上半部分条件概率，下半部分全概率公式”**。这个理解非常深刻且精准！

1. **条件概率** $\mathbb{P}[A|B] = \frac{\mathbb{P}[A \cap B]}{\mathbb{P}[B]}$： 这是**定义式**。它就像是物理学中的“速度 = 路程 / 时间”，是通用规则。

2. **全概率公式** $\mathbb{P}[B] = \sum \mathbb{P}[B|A_i]\mathbb{P}[A_i]$： 这是**分母拆解法**。当我们在自然界中无法直接获得事件 $B$ 的概率时，我们通过“分情况讨论（对样本空间进行划分）”，把各个情况下的 $B$ 累加起来得到 $\mathbb{P}[B]$。

3. **贝叶斯公式 (Bayes' Rule)**： 它是前两者的**大统一结合体**。它把条件概率定义式中的分子、分母同时用已知量展开：

   $$\mathbb{P}[A_i|B] = \frac{\text{分子：条件概率展开}}{\text{分母：全概率展开}} = \frac{\mathbb{P}[B|A_i]\mathbb{P}[A_i]}{\sum_{j=1}^{n} \mathbb{P}[B|A_j]\mathbb{P}[A_j]}$$

   所以，**贝叶斯公式并没有发明新概念，它只是用全概率公式去计算条件概率中的分母**。

## 三、 全概率公式与贝叶斯公式的推广 (Generalization)

### 3.1 划分的定义

如果事件 $A_1, A_2, \dots, A_n$ 满足：

1. $A_1 \cup A_2 \cup \dots \cup A_n = \Omega$ （不漏：并集为全集）
2. $A_i \cap A_j = \emptyset \quad (\forall i \ne j)$ （不重：两两互斥）

则称这一组事件为样本空间的一个**划分（Partition）**。

### 3.2 推广公式

对于任意事件 $B$：

- **全概率公式**：

  $$\mathbb{P}[B] = \sum_{i=1}^{n} \mathbb{P}[B \cap A_i] = \sum_{i=1}^{n} \mathbb{P}[B|A_i]\mathbb{P}[A_i]$$

- **贝叶斯公式**：

  $$\mathbb{P}[A_i|B] = \frac{\mathbb{P}[B|A_i]\mathbb{P}[A_i]}{\sum_{j=1}^{n}\mathbb{P}[B|A_j]\mathbb{P}[A_j]}$$

### 3.3 经典例题解析

#### 例题 3：网球比赛 (Tennis Match — 全概率经典)

你要和一位随机选手的打网球。对手可能是高手 $X$ 或普通选手 $Y$。

- 选到选手 $X$ 的概率为 $0.6$；选到选手 $Y$ 的概率为 $0.4$。
- 如果对手是 $X$，你赢的概率是 $0.7$。
- 如果对手是 $Y$，你赢的概率是 $0.3$。

**求：你赢下这场网球赛的概率** $\mathbb{P}[\text{Win}]$**。**

- **解答**：

  - 划分：$B_X$ = 选到 $X$，$\mathbb{P}[B_X]=0.6$；$B_Y$ = 选到 $Y$，$\mathbb{P}[B_Y]=0.4$。

  - 条件赢率：$\mathbb{P}[\text{Win}|B_X] = 0.7$，$\mathbb{P}[\text{Win}|B_Y] = 0.3$。

  - 应用全概率公式：

    $$\mathbb{P}[\text{Win}] = \mathbb{P}[\text{Win}|B_X]\mathbb{P}[B_X] + \mathbb{P}[\text{Win}|B_Y]\mathbb{P}[B_Y]$$

    $$\mathbb{P}[\text{Win}] = (0.7 \times 0.6) + (0.3 \times 0.4) = 0.42 + 0.12 = 0.54$$

#### 例题 4：球与双箱 (Balls and Bins — 贝叶斯经典)

有两个箱子盛放黑白球：

- **Bin 1**：有 3 个黑球，2 个白球。
- **Bin 2**：有 1 个黑球，1 个白球。 现在以等概率（各 $0.5$）随机选择一个箱子，并从中随机摸出一颗球。

**求：已知摸出的是白球（**$\bigcirc$**），它来自 Bin 1 的概率** $\mathbb{P}[\text{Bin 1} | \bigcirc]$**。**

![image-20260524111722604](./%E6%A6%82%E7%8E%87%E8%AE%BA-CH2-%E5%8F%A4%E5%85%B8%E6%A6%82%E5%9E%8B%E7%9A%84%E8%AE%A1%E7%AE%97.assets/image-20260524111722604.png)

- **建立模型**：

  - 箱子先验：$\mathbb{P}[\text{Bin 1}] = 0.5$, $\mathbb{P}[\text{Bin 2}] = 0.5$。

  - 摸出白球的似然度：

    $$\mathbb{P}[\bigcirc | \text{Bin 1}] = \frac{2}{5} = 0.4$$

    $$\mathbb{P}[\bigcirc | \text{Bin 2}] = \frac{1}{2} = 0.5$$

- **全概率算分母** $\mathbb{P}[\bigcirc]$：

  $$\mathbb{P}[\bigcirc] = \mathbb{P}[\bigcirc | \text{Bin 1}]\mathbb{P}[\text{Bin 1}] + \mathbb{P}[\bigcirc | \text{Bin 2}]\mathbb{P}[\text{Bin 2}]$$

  $$\mathbb{P}[\bigcirc] = \left(\frac{2}{5} \times \frac{1}{2}\right) + \left(\frac{1}{2} \times \frac{1}{2}\right) = \frac{1}{5} + \frac{1}{4} = \frac{9}{20} = 0.45$$

- **贝叶斯公式求后验** $\mathbb{P}[\text{Bin 1} | \bigcirc]$：

  $$\mathbb{P}[\text{Bin 1} | \bigcirc] = \frac{\mathbb{P}[\bigcirc | \text{Bin 1}]\mathbb{P}[\text{Bin 1}]}{\mathbb{P}[\bigcirc]} = \frac{\frac{2}{5} \times \frac{1}{2}}{\frac{9}{20}} = \frac{1/5}{9/20} = \frac{4}{9} \approx 44.4\%$$

## 四、 事件的组合 (Combinations of Events)

计算机科学和复杂系统建模中，我们通常需要处理多个简单事件的交集 $\bigcap A_i$（逻辑与 AND）或并集 $\bigcup A_i$（逻辑或 OR）。

### 4.1 独立事件 (Independent Events)

- **定义**：如果两个事件 $A$ 和 $B$ 满足：

  $$\mathbb{P}[A \cap B] = \mathbb{P}[A] \times \mathbb{P}[B]$$

  则称 $A$ 和 $B$ 是**相互独立的**。

- **等价关系**：在 $\mathbb{P}[B] > 0$ 时，独立性等价于：

  $$\mathbb{P}[A|B] = \mathbb{P}[A]$$

  即：$B$ **的发生与否，完全不影响我们对** $A$ **发生概率的认知**。

- **🚨 注意：两两独立不等于相互独立**

  - **反例（投两次硬币）**：

    - $A$ = 第一次投出 H（概率 $1/2$）
    - $B$ = 第二次投出 H（概率 $1/2$）
    - $C$ = 两次投出相同的结果（即 HH 或 TT，概率 $1/2$）

  - 容易验证：

    $$\mathbb{P}[A \cap B] = \frac{1}{4} = \mathbb{P}[A]\mathbb{P}[B]$$

    $$\mathbb{P}[A \cap C] = \mathbb{P}[\text{HH}] = \frac{1}{4} = \mathbb{P}[A]\mathbb{P}[C]$$

    $$\mathbb{P}[B \cap C] = \mathbb{P}[\text{HH}] = \frac{1}{4} = \mathbb{P}[B]\mathbb{P}[C]$$

    它们是**两两独立**的。

  - 但是，如果已知 $A$ 和 $B$ 都发生了（第一次和第二次都是 H），那么 $C$（两次相同）发生的概率直接变成了 1，不再是 $1/2$。

    $$\mathbb{P}[A \cap B \cap C] = \mathbb{P}[\text{HH}] = \frac{1}{4} \ne \mathbb{P}[A]\mathbb{P}[B]\mathbb{P}[C] = \frac{1}{8}$$

    所以三个事件合在一起**并不是相互独立（Mutual Independence）的**。

### 4.2 事件的交集 (Intersections — 乘法公式)

当事件不独立时，我们必须使用条件概率的链式法则（乘法公式）来计算交集的概率。

#### 乘法公式 (Product Rule)

对于任意事件 $A, B$：

$$\mathbb{P}[A \cap B] = \mathbb{P}[A] \times \mathbb{P}[B|A]$$

推广到 $n$ 个事件的交集：

$$\mathbb{P}\left[\bigcap_{i=1}^{n} A_i\right] = \mathbb{P}[A_1] \times \mathbb{P}[A_2 | A_1] \times \mathbb{P}[A_3 | A_1 \cap A_2] \times \dots \times \mathbb{P}\left[A_n | \bigcap_{i=1}^{n-1} A_i\right]$$

#### 经典案例：三门问题 (Monty Hall Revisited)

- 设：

  - $C_1$ = 参赛者选了 1 号门，概率 $\mathbb{P}[C_1] = \frac{1}{3}$
  - $P_2$ = 奖品在 2 号门后，概率 $\mathbb{P}[P_2|C_1] = \mathbb{P}[P_2] = \frac{1}{3}$（选门与奖品分布独立）
  - $H_3$ = 主持人打开了 3 号门。

- 在参赛者选了 1 号门，且奖品在 2 号门时，主持人无法开 1 号（被选了）和 2 号（有奖），因此被迫只能开 3 号门。所以条件概率为：

  $$\mathbb{P}[H_3 | C_1 \cap P_2] = 1$$

- **求：参赛者选 1 号、奖品在 2 号且主持人开 3 号门的交集概率。**

  $$\mathbb{P}[C_1 \cap P_2 \cap H_3] = \mathbb{P}[C_1] \times \mathbb{P}[P_2 | C_1] \times \mathbb{P}[H_3 | C_1 \cap P_2] = \frac{1}{3} \times \frac{1}{3} \times 1 = \frac{1}{9}$$

- **求：换门后中奖的概率** $\mathbb{P}[P_2 | C_1 \cap H_3]$： 已知 $\mathbb{P}[H_3|C_1] = 1/2$，因此分母 $\mathbb{P}[C_1 \cap H_3] = \mathbb{P}[C_1]\mathbb{P}[H_3|C_1] = \frac{1}{3} \times \frac{1}{2} = \frac{1}{6}$。

  $$\mathbb{P}[P_2 | C_1 \cap H_3] = \frac{\mathbb{P}[C_1 \cap P_2 \cap H_3]}{\mathbb{P}[C_1 \cap H_3]} = \frac{1/9}{1/6} = \frac{2}{3}$$

  这在数学上严谨证明了：**换门中奖的概率是 2/3**！

### 4.3 事件的并集 (Unions — 容斥定理)

### 💡 疑问解答 4：关于拉斯维加斯掷骰子例题与容斥原理的使用

#### 【例题：拉斯维加斯骰子游戏】

你选一个 1 到 6 之间的数字，赌场掷 3 个骰子。只要有至少一个骰子显示你的数字，你就赢。

- **赌场欺骗性算法**：每个骰子出你数字的概率是 $\frac{1}{6}$，3 个骰子所以概率是 $3 \times \frac{1}{6} = 50\%$。
- **为什么错了？**：因为这三个骰子可能同时出现你的数字（事件重叠）。

#### 容斥定理 (Inclusion-Exclusion Principle) 的使用

>  为了求并集的概率 $\mathbb{P}[A_1 \cup A_2 \cup A_3]$，我们不能直接相加，必须通过“加单项，减双相，加三相”来消除重复计数：

$$\mathbb{P}[A_1 \cup A_2 \cup A_3] = \mathbb{P}[A_1] + \mathbb{P}[A_2] + \mathbb{P}[A_3] - \Big(\mathbb{P}[A_1 \cap A_2] + \mathbb{P}[A_1 \cap A_3] + \mathbb{P}[A_2 \cap A_3]\Big) + \mathbb{P}[A_1 \cap A_2 \cap A_3]$$

因为每次扔骰子都是**相互独立**的：

- 每一个单项：$\mathbb{P}[A_i] = \frac{1}{6}$
- 每一个双项相交：$\mathbb{P}[A_i \cap A_j] = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$
- 三项相交：$\mathbb{P}[A_1 \cap A_2 \cap A_3] = \left(\frac{1}{6}\right)^3 = \frac{1}{216}$

代入容斥原理公式计算：

$$\mathbb{P}[\text{Win}] = \left(3 \times \frac{1}{6}\right) - \left(3 \times \frac{1}{36}\right) + \frac{1}{216}$$

$$\mathbb{P}[\text{Win}] = \frac{1}{2} - \frac{1}{12} + \frac{1}{216} = \frac{108 - 18 + 1}{216} = \frac{91}{216} \approx 42.1\%$$

真实的胜率只有 $42.1\%$，远低于赌场宣称的 $50\%$！

### 🌟 考试保命捷径：补集法 (Complementary Method)

**当多个事件相互独立，求“至少发生一个（并集）”的概率时，容斥定理通常极其繁琐。最快、最不易错的策略是——算它的对立面（一个都不发生）！**

- “至少一个骰子投中”的对立面是：“所有骰子全都没投中”。

- 每次投不中的概率为 $1 - \frac{1}{6} = \frac{5}{6}$。

- 因为 3 个骰子相互独立，全不中的概率为：

  $$\mathbb{P}[\text{全不中}] = \left(\frac{5}{6}\right)^3 = \frac{125}{216}$$

- 因此，你赢（至少中一个）的概率为：

  $$\mathbb{P}[\text{Win}] = 1 - \mathbb{P}[\text{全不中}] = 1 - \frac{125}{216} = \frac{91}{216} \approx 42.1\%$$

  一行公式搞定！这就是补集法的威力。

### 4.4 联合限界 (Union Bound)

对任意一组事件 $A_1, A_2, \dots, A_n$（不需要相互独立，也不需要互斥），它们的并集概率一定不会超过各项概率的简单加和：

$$\mathbb{P}\left[\bigcup_{i=1}^{n} A_i\right] \le \sum_{i=1}^{n} \mathbb{P}[A_i]$$

这是一个非常粗糙但在计算机科学和算法分析（如证明某个概率算法的失败率上限）中极其有用和强大的工具。





---

# 例题

# 確率空間与事件组合：精选实战练习指南

这份指南旨在将你正在学习的 **CS 70 Note 14** 理论知识，与你上传的日本概率教材（Chapter 1 & 2）中的经典习题进行深度融合。通过这些习题的练习，你将能彻底巩固对条件概率、独立性、贝叶斯和容斥原理的理解。

## 🧭 核心专业术语对照表 (日-汉-英)

在阅读教材题目和解答时，掌握以下日文概率学术语能让你的复习事半功倍：

| 日文术语                  | 中文翻译            | 英文对应                      | Note 14 对应概念                          |
| ------------------------- | ------------------- | ----------------------------- | ----------------------------------------- |
| **標本空間** ($\Omega$)   | 样本空间            | Sample Space                  | Sample Space $\Omega$                     |
| **事象** ($A, B$)         | 事件                | Event                         | Event                                     |
| **根元事象**              | 样本点 / 基本事件   | Elementary Event              | Sample Point $\omega$                     |
| **条件付き確率**          | 条件概率            | Conditional Probability       | Conditional Probability $\mathbb{P}[A\|B$ |
| **排反**                  | 互斥                | Mutually Exclusive / Disjoint | Mutually Exclusive $A \cap B = \emptyset$ |
| **独立**                  | 独立（两两独立）    | Independent                   | Pairwise Independence                     |
| **互いに独立 / 相互独立** | 相互独立            | Mutually Independent          | Mutual Independence                       |
| **乗法定理**              | 乘法定理 / 链式法则 | Product Rule / Chain Rule     | Theorem 14.1 Product Rule                 |
| **余事象の原理**          | 补集法 / 余事件原理 | Complementary Probability     | Complement Rule $1 - \mathbb{P}[\bar{A}]$ |
| **期待値 / 平均**         | 期望 / 平均值       | Expectation / Mean            | Expectation $\mathbb{E}[X]$               |
| **分散**                  | 方差                | Variance                      | Variance $\mathbb{V}(X)$                  |

## 🎯 第一板块：条件概率、独立性与容斥原理（核心必刷题）

### 推荐题目：Chapter 2 — 問題 13 (第 28-29 页)

> **🔥 推荐指数：★★★★★** > **🎯 对应 Note 14 考点**：条件概率的计算、独立性（两两独立 vs 相互独立）、排反事件、容斥原理（Inclusion-Exclusion）。

#### 【原题中文翻译】

从自然数 $1 \sim 120$ 中随机选择一个数。设事象 $A_i$ 为“选出的数是 $i$ 的倍数”构成的集合。求：

1. 求 $\mathbb{P}(A_2), \mathbb{P}(A_3), \mathbb{P}(A_4), \mathbb{P}(A_5), \mathbb{P}(A_6), \mathbb{P}(A_7), \mathbb{P}(A_8), \mathbb{P}(A_9), \mathbb{P}(A_{10})$ 的概率。
2. 证明「$A_2$ 与 $A_3$ 是独立的」。并求出在 $i \le 10$ 中，所有与 $A_3$ 独立的 $A_i$。
3. 计算条件概率 $\mathbb{P}(A_6|A_8)$ 和 $\mathbb{P}(A_5|A_8)$。
4. 证明 $A_2, A_3, A_5$ 三个事件是相互独立的（相互独立）。
5. 举出一个与 $A_7$ 互为排反（互斥）的 $A_i$ 的例子。
6. 计算并集概率 $\mathbb{P}(A_2 \cup A_3)$ 和 $\mathbb{P}(A_2 \cup A_3 \cup A_5)$。

#### 💡 巩固解析与自测答案

- **第 (1) 问：基础概率**

  - 样本空间总数 $\#(\Omega) = 120$。
  - $\mathbb{P}(A_2) = \frac{60}{120} = \frac{1}{2}$
  - $\mathbb{P}(A_3) = \frac{40}{120} = \frac{1}{3}$
  - $\mathbb{P}(A_5) = \frac{24}{120} = \frac{1}{5}$
  - $\mathbb{P}(A_8) = \frac{15}{120} = \frac{1}{8}$
  - $\mathbb{P}(A_6) = \frac{20}{120} = \frac{1}{6}$

- **第 (2) 问：两两独立的验证**

  - **独立性判别式**：$\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)$。
  - $A_2 \cap A_3$ 代表“既是 2 的倍数又是 3 的倍数”，即 6 的倍数（$A_6$）。
  - 验证：$\mathbb{P}(A_2 \cap A_3) = \mathbb{P}(A_6) = \frac{1}{6}$。而 $\mathbb{P}(A_2)\mathbb{P}(A_3) = \frac{1}{2} \times \frac{1}{3} = \frac{1}{6}$。
  - 因为两边相等，所以 $A_2$ **与** $A_3$ **独立**。
  - 同理，当且仅当 $\text{gcd}(3, i) = 1$ 且 $120$ 能被 $3i$ 整除时，独立性成立。在 $i \le 10$ 中，与 $A_3$ 独立的有 $A_2, A_4, A_5, A_8, A_{10}$。

- **第 (3) 问：条件概率与独立性的直观结合**

  - **计算** $\mathbb{P}(A_6|A_8)$：

    $$\mathbb{P}(A_6|A_8) = \frac{\mathbb{P}(A_6 \cap A_8)}{\mathbb{P}(A_8)} = \frac{\mathbb{P}(A_{24})}{\mathbb{P}(A_8)} = \frac{5/120}{15/120} = \frac{5}{15} = \frac{1}{3}$$

  - **计算** $\mathbb{P}(A_5|A_8)$：

    $$\mathbb{P}(A_5|A_8) = \frac{\mathbb{P}(A_5 \cap A_8)}{\mathbb{P}(A_8)} = \frac{\mathbb{P}(A_{40})}{\mathbb{P}(A_8)} = \frac{3/120}{15/120} = \frac{3}{15} = \frac{1}{5}$$

  - **🎯 重点思考**：注意到 $\mathbb{P}(A_5|A_8) = \frac{1}{5} = \mathbb{P}(A_5)$。这在数学上直接印证了 $A_5$ **与** $A_8$ **相互独立**（得知 $A_8$ 发生并不能改变 $A_5$ 的发生概率）。

- **第 (4) 问：相互独立性（Mutual Independence）的完整证明**

  - 根据手写笔记和 Note 14 Section 4.1，要证明三个事件相互独立，必须满足以下**4个条件**：
    1. $\mathbb{P}(A_2 \cap A_3) = \mathbb{P}(A_2)\mathbb{P}(A_3)$ （已证：$\frac{1}{6} = \frac{1}{2} \times \frac{1}{3}$）
    2. $\mathbb{P}(A_3 \cap A_5) = \mathbb{P}(A_{15}) = \frac{8}{120} = \frac{1}{15}$。而 $\mathbb{P}(A_3)\mathbb{P}(A_5) = \frac{1}{3} \times \frac{1}{5} = \frac{1}{15}$。（成立）
    3. $\mathbb{P}(A_2 \cap A_5) = \mathbb{P}(A_{10}) = \frac{12}{120} = \frac{1}{10}$。而 $\mathbb{P}(A_2)\mathbb{P}(A_5) = \frac{1}{2} \times \frac{1}{5} = \frac{1}{10}$。（成立）
    4. **三项交集**：$\mathbb{P}(A_2 \cap A_3 \cap A_5) = \mathbb{P}(A_{30}) = \frac{4}{120} = \frac{1}{30}$。而 $\mathbb{P}(A_2)\mathbb{P}(A_3)\mathbb{P}(A_5) = \frac{1}{2} \times \frac{1}{3} \times \frac{1}{5} = \frac{1}{30}$。（成立）
  - 由于两两独立且三者交集公式全部满足，因此 $A_2, A_3, A_5$ **相互独立**。

- **第 (5) 问：排反（Disjoint）的物理直观**

  - 排反意味着不能同时发生，即 $A_7 \cap A_i = \emptyset$。
  - 我们只需要找一个在 $1 \sim 120$ 之间与 7 没有共同公倍数的集合。比如 $A_{20}$，因为 $20$ 的倍数有 $\{20, 40, 60, 80, 100, 120\}$，里面没有任何一个是 7 的倍数。所以 $A_7 \cap A_{20} = \emptyset$。

- **第 (6) 问：容斥原理的应用**

  - **两事件并集**：

    $$\mathbb{P}(A_2 \cup A_3) = \mathbb{P}(A_2) + \mathbb{P}(A_3) - \mathbb{P}(A_2 \cap A_3) = \frac{1}{2} + \frac{1}{3} - \frac{1}{6} = \frac{2}{3}$$

  - **三事件并集（定理 14.2 容斥定理实战）**：

    $$\mathbb{P}(A_2 \cup A_3 \cup A_5) = \mathbb{P}(A_2) + \mathbb{P}(A_3) + \mathbb{P}(A_5) - \Big[\mathbb{P}(A_2 \cap A_3) + \mathbb{P}(A_3 \cap A_5) + \mathbb{P}(A_2 \cap A_5)\Big] + \mathbb{P}(A_2 \cap A_3 \cap A_5)$$

    $$\mathbb{P}(A_2 \cup A_3 \cup A_5) = \frac{1}{2} + \frac{1}{3} + \frac{1}{5} - \left[\frac{1}{6} + \frac{1}{15} + \frac{1}{10}\right] + \frac{1}{30} = \frac{11}{15}$$

## 🎯 第二板块：补集法与独立重复试验（提升实战直觉）

### 推荐题目：Chapter 1 — 問題 07 (第 14-15 页)

> **🔥 推荐指数：★★★★☆** > **🎯 对应 Note 14 考点**：Section 4.3 拉斯维加斯投骰子模型的延伸——**补集法（Complementary Method）**的威力。

#### 【原题中文翻译】

1. 同时掷 3 个骰子，求点数之和为 9 和点数之和为 10 的概率，并比较大小。
2. **德·梅尔经典问题 (De Méré's Problem)**：
   - 试验甲：投掷 1 个骰子 4 次，求“至少出现一次 6 点”的概率。
   - 试验乙：同时投掷 2 个骰子 24 次，求“至少出现一次双 6（六六）”的概率。 比较试验甲与试验乙的概率大小，哪一个在赌博中更占优势？

#### 💡 巩固解析与解题思路

- **第 (1) 问：样本空间等可能性（Equally Likely）**

  - 在计算概率时，必须保证每个基本事件是等可能的。投掷 3 个骰子共有 $6^3 = 216$ 种等可能的结果。
  - 和为 9 的组合与排列数：
    - $(1, 2, 6) \rightarrow 6$ 种排列
    - $(1, 3, 5) \rightarrow 6$ 种排列
    - $(1, 4, 4) \rightarrow 3$ 种排列
    - $(2, 2, 5) \rightarrow 3$ 种排列
    - $(2, 3, 4) \rightarrow 6$ 种排列
    - $(3, 3, 3) \rightarrow 1$ 种排列
    - 总计 **25 种**。$\mathbb{P}(\text{Sum} = 9) = \frac{25}{216}$。
  - 和为 10 的组合与排列数：
    - $(1, 3, 6) \rightarrow 6$ 种排列；$(1, 4, 5) \rightarrow 6$ 种排列；$(2, 2, 6) \rightarrow 3$ 种排列
    - $(2, 3, 5) \rightarrow 6$ 种排列；$(2, 4, 4) \rightarrow 3$ 种排列；$(3, 3, 4) \rightarrow 3$ 种排列
    - 总计 **27 种**。$\mathbb{P}(\text{Sum} = 10) = \frac{27}{216}$。
  - **结论**：和为 10 的概率更高。

- **第 (2) 问：补集法（大招）**

  - **试验甲**：“至少出现一次 6” 的对立面是 “4次投掷全部不出现 6”。

    $$\mathbb{P}(\text{甲}) = 1 - \left(\frac{5}{6}\right)^4 = 1 - \frac{625}{1296} \approx 51.77\%$$

  - **试验乙**：掷两颗骰子，一次投出双 6 的概率为 $\frac{1}{36}$，投不出双 6 的概率为 $\frac{35}{36}$。“24次至少出现一次双 6”的对立面是“24次全都没有双 6”。

    $$\mathbb{P}(\text{乙}) = 1 - \left(\frac{35}{36}\right)^{24} \approx 49.14\%$$

  - **结论**：$\mathbb{P}(\text{甲}) > 50\% > \mathbb{P}(\text{乙})$。所以在赌博中，赌“单骰子4次内出6”是赢钱的，而赌“双骰子24次内出双6”是送钱的。这个经典问题完美体现了**独立试验并集概率中补集法的简便性**。

## 🎯 第三板块：非复元抽样与条件概率链（卡牌问题实战）

### 推荐题目：Chapter 1 — 問題 08 第 (3) 问 (第 16-17 页)

> **🔥 推荐指数：★★★★☆** > **🎯 对应 Note 14 考点**：Section 1 中发牌（非复元抽样）的例子。展示了不放回抽取时，后续事件是如何“不独立”于前续事件的。

#### 【原题中文翻译】

有 12 张牌，上面分别写着数字 $1 \sim 12$。随机抽取 1 张牌，**不放回（元に戻さないで）**，接着抽取第 2 张牌。设第一次抽出的数字为 $X$，第二次抽出的数字为 $Y$。求：

1. $\mathbb{P}(X=3)$
2. $\mathbb{P}(X=3 \cap Y=3)$
3. $\mathbb{P}(X=3 \cap Y=2)$
4. $\mathbb{P}(\max(X, Y) \le 4)$

#### 💡 巩固解析与解题思路

- **第 (1) 问**：显然，第一次摸牌时，12张牌机会均等。

  $$\mathbb{P}(X=3) = \frac{1}{12}$$

- **第 (2) 问（重要直觉）**： 由于是非复元抽样，第一张摸出 3 之后，牌堆中已经没有 3 了。因此 $X=3$ 与 $Y=3$ 不可能同时发生。

  $$\mathbb{P}(X=3 \cap Y=3) = 0$$

- **第 (3) 问（乘法定理应用）**： 根据乘法定理（Theorem 14.1 Product Rule）：

  $$\mathbb{P}(X=3 \cap Y=2) = \mathbb{P}(X=3) \times \mathbb{P}(Y=2 | X=3)$$

  - 第一次抽到 3 的概率 $\mathbb{P}(X=3) = \frac{1}{12}$。

  - 在已知 $X=3$ 的条件下，还剩 11 张牌，其中 2 只有一张。所以条件概率 $\mathbb{P}(Y=2 | X=3) = \frac{1}{11}$。

    $$\mathbb{P}(X=3 \cap Y=2) = \frac{1}{12} \times \frac{1}{11} = \frac{1}{132}$$

- **第 (4) 问（缩减样本空间法）**：

  - $\max(X, Y) \le 4$ 意味着 $X$ 和 $Y$ 都必须在 $\{1, 2, 3, 4\}$ 之中。

  - 相当于在 12 张牌里不放回地摸两张，这两张都在前 4 张中的概率。

  - 样本空间总数：$_{12}P_2 = 12 \times 11 = 132$。

  - 满足条件的事件数：$_4P_2 = 4 \times 3 = 12$。

    $$\mathbb{P}(\max(X, Y) \le 4) = \frac{12}{132} = \frac{1}{11}$$

## 🎯 第四板块：全概率公式的神奇应用（彩票公平性证明）

### 推荐题目：Chapter 1 — Page 16 “Tea Time” (くじ引きの公平性)

> **🔥 推荐指数：★★★★★** > **🎯 对应 Note 14 考点**：Section 3.1 & 3.2 **全概率公式 (Total Probability Rule)** 的综合演绎。

#### 【问题描述与证明】

有 10 张彩票，其中有 2 张是中奖彩票。人们一个接一个地不放回抽牌。

- 设事件 $A$ = 第 1 个人中奖。
- 设事件 $B$ = 第 2 个人中奖。 证明：不管是第一个抽还是第二个抽，抽中的概率是完全公平的，即 $\mathbb{P}(A) = \mathbb{P}(B) = \frac{2}{10}$。

#### 💡 巩固解析与完整推导

1. **第一个人中奖概率** $\mathbb{P}(A)$： 非常直观：

   $$\mathbb{P}(A) = \frac{2}{10}$$

   不中奖的概率为 $\mathbb{P}(A^c) = \frac{8}{10}$。

2. **第二个人中奖概率** $\mathbb{P}(B)$**（全概率讨论）**： 第二个人中不中奖，完全受第一个人摸牌结果的影响。因此，我们必须根据第一个人的情况**分情况讨论**（对样本空间进行划分 $A$ 与 $A^c$）：

   - **情况 1：第一个人中奖了（事件** $A$ **发生）**。此时剩 9 张牌，中奖牌只剩 1 张。第二个人中奖的条件概率为：

     $$\mathbb{P}(B|A) = \frac{1}{9}$$

   - **情况 2：第一个人没中奖（事件** $A^c$ **发生）**。此时剩 9 张牌，中奖牌还有 2 张。第二个人中奖的条件概率为：

     $$\mathbb{P}(B|A^c) = \frac{2}{9}$$

3. **应用全概率公式计算** $\mathbb{P}(B)$：

   $$\mathbb{P}(B) = \mathbb{P}(B|A)\mathbb{P}(A) + \mathbb{P}(B|A^c)\mathbb{P}(A^c)$$

   $$\mathbb{P}(B) = \left(\frac{1}{9} \times \frac{2}{10}\right) + \left(\frac{2}{9} \times \frac{8}{10}\right) = \frac{2}{90} + \frac{16}{90} = \frac{18}{90} = \frac{2}{10}$$

**🎉 证明完毕！** 第二个人的中奖概率同样精确等于 $\frac{2}{10}$。这不仅在数学上非常优美，还用**全概率公式**严谨地证明了日常生活中“先抽彩票和后抽彩票概率一样”的直觉。

## 🚀 你的黄金复习策略

我建议你采取以下步骤来最大化巩固效果：

1. **第一步**：拿出一张白纸，闭卷尝试解答 **Chapter 2 — 問題 13** 的所有小问。这道题是 Note 14 最完美的综合检验。
2. **第二步**：遇到卡壳时，对照上文中我为你写下的 **💡 巩固解析与自测答案**。重点体会“相互独立性的 4 个验证公式”以及“条件概率是如何通过缩减样本空间快速看出来的”。
3. **第三步**：阅读 **Chapter 1 Page 16 “Tea Time” 的彩票中奖问题**。在草稿纸上自己画出概率树状图，感受全概率公式在不同分支上的流动。

这本日本教材非常注重“直觉与公式结合”，非常适合你目前的学习阶段。祝你刷题愉快，有任何不理解的步骤，随时发给我，我们一起推导！

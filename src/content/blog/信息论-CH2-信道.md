---
title: "信息论-CH2-信道"
slug: "信息论笔记：信道、平均互信息与信道容量"
description: "信息论-CH2-信道，待补充摘要。"
pubDate: 2026-05-01
updatedDate: 2026-05-01
tags:
  - 信息论
  - 修考
category: 修考
draft: false
---

# 信息论笔记：信道、平均互信息与信道容量

## 一、 信道的基本概念

### 1.1 系统模型

在通信系统中，信道是传输信息的媒介。其逻辑位置如下： `信源 -> 信源编码 -> 信道编码 -> [信道] -> 信道译码 -> ...`

![7-1. CHANNEL CAPACITY](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/images-1777634187598-6.png)

- **信道的输入**：是**符号**（Symbols），而非原始消息。
- **数学模型**：
  - 输入变量 $X = \{x_1, x_2, \dots, x_r\}$
  - 输出变量 $Y = \{y_1, y_2, \dots, y_s\}$
  - 信道特性由**转移概率** $P(y_j|x_i)$ 唯一描述。

### 1.2 互信息 (Mutual Information)

互信息表示通过观察 $Y$ 的某个输出，对消除关于 $X$ 的不确定性的贡献量。

![Shannon's Information Theory – Science4All](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/Noisy-Communication2.png)



- **单符号互信息**：

  $$I(x_i; y_j) = I(x_i) - I(x_i | y_j) = \log_2 \frac{1}{P(x_i)} - \log_2 \frac{1}{P(x_i|y_j)} = \log_2 \frac{P(x_i | y_j)}{P(x_i)}$$

  *其本质是：先验不确定性 - 后验不确定性（即“获知原理”）。*

- **平均互信息** $I(X; Y)$： 对所有可能的输入和输出取统计平均：

  $$I(X; Y) = H(X) - H(X|Y)$$

  其中：

  - $H(X)$：信源熵（先验不确定性）。
  - $H(X|Y)$：**信道疑义度**（Equivocation），观测到 $Y$ 后对 $X$ 仍然存在的不确定性。

### 1.3 维恩图 (Venn Diagram) 关系

平均互信息可以看作是两个随机变量集合的**交集部分**：

![A Deep Conceptual Guide to Mutual Information | by Sean McClure | The  Startup | Medium](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/1f4gd1WKovdfSSTF3SPoDlA.png)

- $I(X; Y) = H(X) - H(X|Y)$
- $I(X; Y) = H(Y) - H(Y|X)$
- $I(X; Y) = H(X) + H(Y) - H(X, Y)$

**条件互信息示例**： 对于三个变量 $X_1, X_2, X_3$：

$$I(X_1; X_2 | X_3) = I(X_1; X_2, X_3) - I(X_1; X_3)$$

## 二、 信道矩阵与转移概率

### 2.1 信道转移矩阵 $P(Y|X)$



信道由矩阵 $\mathbf{P}$ 表示，每一行对应一个输入 $x_i$，每一列对应一个输出 $y_j$：

$$\mathbf{P} = \begin{bmatrix} P(y_1|x_1) & P(y_2|x_1) & \dots \\ P(y_1|x_2) & P(y_2|x_2) & \dots \\ \vdots & \vdots & \ddots \end{bmatrix}$$

- **特性**：每一行的概率之和必为 $1$。

### 2.2 输入与输出的关系

已知输入分布 $P_X = [P(x_1), P(x_2), \dots, P(x_r)]$，输出分布 $P_Y$ 为：

$$P_Y = P_X \cdot \mathbf{P}$$

*(注：这与马尔可夫链的状态转移矩阵乘法非常相似)*

### 2.3 二元对称信道 (BSC)

最典型的信道模型，输入输出均为 $\{0, 1\}$，错误传输概率为 $p$，正确传输概率为 $\bar{p} = 1-p$：

$$\mathbf{P}_{BSC} = \begin{bmatrix} \bar{p} & p \\ p & \bar{p} \end{bmatrix}$$

![Binary symmetric channel - Wikipedia](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/500px-Binary_symmetric_channel_(en).svg.png)

## 三、 特殊信道类型

| 信道类型     | 特点                 | 熵关系                 | 矩阵特征             |
| ------------ | -------------------- | ---------------------- | -------------------- |
| **无噪无损** | 输入输出一一对应     | $H(X\|Y)=0, H(Y\|X)$   | 单位矩阵或其置换矩阵 |
| **有损无噪** | 一个输入对应多个输出 | $H(Y\|X) > 0, H(X\|Y)$ | 每列只有一个非零元素 |
| **有噪无损** | 多个输入对应一个输出 | $H(X\|Y) > 0, H(Y\|X)$ | 每行只有一个非零元素 |

- **噪声熵** $H(Y|X)$：信道噪声引起的不确定性。
- **疑义度** $H(X|Y)$：由于信道损伤导致从输出端无法完全推回输入端的不确定性。

## 四、 信道容量 (Channel Capacity)

### 4.1 定义

信道容量 $C$ 是在所有可能的输入分布 $P(X)$ 中，平均互信息的最大值：

$$C = \max_{P(X)} I(X; Y) \quad (\text{单位: bit/symbol})$$

### 4.2 对称信道及其容量计算

- **行对称**：矩阵每一行都是第一行的置换。
- **列对称**：矩阵每一列都是第一列的置换。
- **对称信道（强对称）**：既是行对称又是列对称。

**计算公式**： 对于 $r$ 进制输入、$s$ 进制输出的对称信道，若矩阵任一行为 $(p_1, p_2, \dots, p_s)$：

$$C = \log_2 s - H(p_1, p_2, \dots, p_s)$$

*注：对于 BSC，*$C = \log_2 2 - H(p, 1-p) = 1 - H(p)$*。*

### 4.3 信道冗余度

$$C = 1 - \text{效率} = 1 - \frac{R}{C}$$

其中 $R$ 是实际传输速率（实际互信息）。

## 五、 典型例题整理

### 例1：计算疑义度与互信息

![图片](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/image.webp)

**已知**：$P_X = [0.6, 0.4]$，信道矩阵 $\mathbf{P} = \begin{bmatrix} 5/6 & 1/6 \\ 3/4 & 1/4 \end{bmatrix}$。

1. **计算噪声熵** $H(Y|X)$： $H(Y|X) = 0.6 \cdot H(5/6, 1/6) + 0.4 \cdot H(3/4, 1/4) \approx 0.71 \text{ bit/symbol}$
2. **计算输出分布** $P_Y$： $P_Y = [0.6, 0.4] \cdot \begin{bmatrix} 5/6 & 1/6 \\ 3/4 & 1/4 \end{bmatrix} = [0.8, 0.2]$
3. **计算互信息** $I(X; Y)$： $I(X; Y) = H(Y) - H(Y|X) = H(0.8, 0.2) - 0.71 \approx 0.7219 - 0.71 = 0.0119 \text{ bit/symbol}$

### 例2：BSC 传输能力判断



![图片](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/image-1777637333287-18.webp)

**已知**：BSC 错误率 $p=0.02$，符号速率 $1500 \text{ symbol/s}$，消息长度 $14000 \text{ bit}$，时限 $10 \text{ s}$。

1. **计算信道容量** $C$： $C = 1 - H(0.02, 0.98) \approx 1 - 0.1414 = 0.8586 \text{ bit/symbol}$
2. **计算** $10$ **秒内最大传输量**： $MaxBits = 1500 \text{ symbol/s} \times 0.8586 \text{ bit/symbol} \times 10 \text{ s} \approx 12879 \text{ bit}$
3. **结论**： 因 $12879 < 14000$，故在 $10$ 秒内**不能**无失真地传完该消息序列。

![图片](./%E4%BF%A1%E6%81%AF%E8%AE%BA-CH2-%E4%BF%A1%E9%81%93.assets/image-1777637322850-15.webp)

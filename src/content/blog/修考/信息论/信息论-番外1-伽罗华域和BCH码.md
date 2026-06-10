---
title: "通信路符号化：有限域（ガロア体）与 BCH 码深度解析"
slug: "信息论-番外1-伽罗华域和BCH码"
description: "信息论-番外1-伽罗华域和BCH码，待补充摘要。"
pubDate: 2026-05-21
updatedDate: 2026-05-21
tags:
  - 信息论
  - 修考
category: 修考
draft: false
---

<iframe src="https://drive.google.com/file/d/1adevLnui8ZSgbeAMq6phggNWVehUj08L/preview" width="640" height="480"></iframe>

[Bose-Chaudhuri Hocquenghem (BCH) Codes](http://elearn.psgcas.ac.in/nptel/courses/video/108102117/lec23.pdf)

# 通信路符号化：有限域（ガロア体）与 BCH 码深度解析

在现代信息与编码理论中，**信道编码（Channel Coding）** 的核心使命是解决数据在传输过程中的抗干扰问题。我们可以将 BCH 码（Bose-Chaudhuri-Hocquenghem 码）的复杂代数框架归结为两个最根本的工程用途：

1. **编码（发送端）**：为原始数据自动附带一段量身定制的“校验尾巴”，使其具备抵御突发错误的能力。
2. **译码与纠错（接收端）**：当接收到的数据在信道中受噪声篡改后，译码器能够精准锁定错误发生的位置，并在不要求重传的情况下原地修复它。

本笔记按照从**有限域代数基础**到**代数编码、译码及数学限界证明**的完整逻辑链条进行系统性整理与润色。

## 第一部分：有限域基础（Galois Field）

要彻底理解 BCH 码的精妙设计，必须首先掌握其底层的数学土壤——**有限域（Galois Field）**。

### 1. 什么是域（Field）与有限域？

- **域（Field）**：一种对加、减、乘、除（除数不为 0）四则运算均封闭的代数系统。我们熟知的有理数集 $\mathbb{Q}$、实数集 $\mathbb{R}$ 和复数集 $\mathbb{C}$ 都是无限域。

- **有限域（Finite Field / Galois Field）**：仅含有有限个元素的域，记作 $GF(q)$，其中元素的个数 $q$ 称为域的**位数（Order）**。

- **存在性定理**：有限域 $GF(q)$ 存在的充要条件是其位数 $q$ 为某个素数 $p$ 的正整数幂，即：

  $$q = p^m \quad (p \text{ 为素数}, m \ge 1)$$

### 2. 素体（Prime Field） $GF(p)$

当 $m = 1$ 时，有限域 $GF(p)$ 称为**素体**。它可以通过对整数集进行模 $p$ 运算（$\bmod p$）来构造：

- **加法与乘法**：普通的整数加法与乘法，最后结果对 $p$ 取模。

#### 示例：最小的素体 $GF(2)$

$GF(2) = \{0, 1\}$，其运算本质上是二进制逻辑运算：

- **加法（等同于异或** $\oplus$**）**：

  $$0 \oplus 0 = 0, \quad 0 \oplus 1 = 1, \quad 1 \oplus 0 = 1, \quad 1 \oplus 1 = 0$$

- **乘法（等同于逻辑与** $\cdot$**）**：

  $$0 \cdot 0 = 0, \quad 0 \cdot 1 = 0, \quad 1 \cdot 0 = 0, \quad 1 \cdot 1 = 1$$

#### 示例：素体 $GF(7)$

其元素为 $\{0, 1, 2, 3, 4, 5, 6\}$，加法与乘法均在模 7 意义下进行：

- 加法例：$4 + 5 = 9 \equiv 2 \pmod 7$
- 乘法例：$3 \times 5 = 15 \equiv 1 \pmod 7$

### 3. 扩大域（Extension Field） $GF(p^m)$

当 $m \ge 2$ 时，我们不能简单地通过模 $p^m$ 的算术运算来构造域（因为模合数会产生因子，导致除法失效）。 为了构造 $GF(p^m)$，我们需要引入一个 $GF(p)$ 上的 $m$ **次原始多项式（Primitive Polynomial）** $F(x)$，并设其一个根为 $\alpha$。由于 $F(\alpha) = 0$，我们可以将 $\alpha$ 作为“新元素”引入，并通过 $\alpha$ 的幂次逐步生成整个域。

在 $GF(2^m)$ 中，域的所有元素可表示为：

$$GF(2^m) = \{0, 1, \alpha, \alpha^2, \dots, \alpha^{2^m-2}\}$$

其中 $\alpha$ 满足 $\alpha^{2^m-1} = 1$，$\alpha$ 称为 $GF(2^m)$ 的**原始元（Primitive Element）**。

#### 实战：构造扩域 $GF(2^4)$

已知 $GF(2)$ 上的 4 次多项式 $F(x) = x^4 + x + 1$ 是一个原始多项式。设其根为 $\alpha$，即：

$$F(\alpha) = \alpha^4 + \alpha + 1 = 0 \implies \alpha^4 = \alpha + 1 \quad (\text{因为 } -1 = 1 \bmod 2)$$

我们通过将 $\alpha^4 = \alpha + 1$ 这一递推关系代入，可以将所有高次幂 $\alpha^i$ 都简化为次数小于 4 的多项式。其**幂表示**、**多项式展开（基底表示）\**与\**二进制矢量表示**的完整对照如下表所示：

| 幂表示 $\alpha^i$ | 多项式展开 $a_3\alpha^3 + a_2\alpha^2 + a_1\alpha + a_0$ | 矢量表示 $(a_3, a_2, a_1, a_0)$ |
| ----------------- | -------------------------------------------------------- | ------------------------------- |
| $0$               | $0$                                                      | $0000$                          |
| $\alpha^0 = 1$    | $1$                                                      | $0001$                          |
| $\alpha^1$        | $\alpha$                                                 | $0010$                          |
| $\alpha^2$        | $\alpha^2$                                               | $0100$                          |
| $\alpha^3$        | $\alpha^3$                                               | $1000$                          |
| $\alpha^4$        | $\alpha + 1$                                             | $0011$                          |
| $\alpha^5$        | $\alpha^2 + \alpha$                                      | $0110$                          |
| $\alpha^6$        | $\alpha^3 + \alpha^2$                                    | $1100$                          |
| $\alpha^7$        | $\alpha^3 + \alpha + 1$                                  | $1011$                          |
| $\alpha^8$        | $\alpha^2 + 1$                                           | $0101$                          |
| $\alpha^9$        | $\alpha^3 + \alpha$                                      | $1010$                          |
| $\alpha^{10}$     | $\alpha^2 + \alpha + 1$                                  | $0111$                          |
| $\alpha^{11}$     | $\alpha^3 + \alpha^2 + \alpha$                           | $1110$                          |
| $\alpha^{12}$     | $\alpha^3 + \alpha^2 + \alpha + 1$                       | $1111$                          |
| $\alpha^{13}$     | $\alpha^3 + \alpha^2 + 1$                                | $1101$                          |
| $\alpha^{14}$     | $\alpha^3 + 1$                                           | $1001$                          |
| $\alpha^{15} = 1$ | $\alpha^4 + \alpha = 1$                                  | $0001$                          |

> **关键代数法则**：
>
> - **乘法**：直接利用幂表示进行指数相加，若指数超过 14，则模 15。例如：$\alpha^7 \cdot \alpha^9 = \alpha^{16} = \alpha^1$。
> - **加法**：直接利用多项式展开或矢量表示进行异或（XOR）计算。例如：$\alpha^4 + \alpha^8 = (0011) \oplus (0101) = 0110 = \alpha^5$。

#### 拓展：$p > 2$ 的素体扩大域构造示例 $GF(3^2)$

对于 $GF(3) = \{0,1,2\}$，选取 $2$ 次原始多项式 $x^2 + x + 2$。设其根为 $\beta$，则有：

$$\beta^2 + \beta + 2 = 0 \implies \beta^2 = -\beta - 2 \equiv 2\beta + 1 \pmod 3$$

利用该递推关系可生成 $GF(3^2)$ 的 8 个非零元：

- $\beta^2 = 2\beta + 1$
- $\beta^3 = \beta(2\beta + 1) = 2\beta^2 + \beta = 2(2\beta + 1) + \beta = 5\beta + 2 \equiv 2\beta + 2 \pmod 3$
- $\beta^4 = \beta(2\beta + 2) = 2\beta^2 + 2\beta = 2(2\beta + 1) + 2\beta = 6\beta + 2 \equiv 2 \pmod 3$
- $\beta^5 = 2\beta$
- $\beta^6 = 2\beta^2 = 2(2\beta + 1) = 4\beta + 2 \equiv \beta + 2 \pmod 3$
- $\beta^7 = \beta(\beta + 2) = \beta^2 + 2\beta = (2\beta + 1) + 2\beta = 4\beta + 1 \equiv \beta + 1 \pmod 3$
- $\beta^8 = \beta(\beta + 1) = \beta^2 + \beta = (2\beta + 1) + \beta = 3\beta + 1 \equiv 1 \pmod 3$

这与 PDF 中展示的幂表示和矢量表示完美吻合，证明了有限域构造方法的普适性。

## 第二部分：BCH 码的基本原理与编码（发送端）

![image-20260521114049829](./%E4%BF%A1%E6%81%AF%E8%AE%BA-%E7%95%AA%E5%A4%961-%E4%BC%BD%E7%BD%97%E5%8D%8E%E5%9F%9F%E5%92%8CBCH%E7%A0%81.assets/image-20260521114049829.png)

### 1. 什么是 BCH 码？

BCH 码是一种功能极强的**多（双）元巡回码**。

- **设计参数**：设其纠错能力为 $t$，设计最小距离为 $d = 2t + 1$。

- **生成多项式**：在 $GF(2^m)$ 中，为了确保码字能够纠正 $t$ 个错误，我们需要设计一个特殊的生成多项式 $G(x)$。它必须同时包含连续的 $2t$ 个有限域根：$\alpha, \alpha^2, \alpha^3, \dots, \alpha^{2t}$。

- **最小公倍式构造**：

  $$G(x) = \text{LCM}\Big(m_1(x), m_2(x), \dots, m_{2t}(x)\Big)$$

  其中 $m_i(x)$ 是以 $\alpha^i$ 为根的 $GF(2)$ 上的最低次数多项式，称为 $\alpha^i$ 的**最小多项式**。

  > So, if you remember the cyclic codes right they formed a subclass of this linear block codes. Now we are moving within the domains of cyclic codes, so BCH codes are a subclass of cyclic codes and are known for the multiple error correcting ability. We will see that very good BCH codes which stands for Bose-Chaudhuri-Hocquenghem codes are over non binary fields. So we have GF q over which BCH codes are defined and they can correct several errors, burst errors and are pretty strong in the error correcting capability. So if we go to a sub classification we find that BCH codes form a subclass of cyclic codes. So linear block codes we developed a rich theory, then we went to cyclic codes again more theory to use cyclic codes in terms of polynomial representation, and then we will have BCH codes. We can use the techniques already developed for LBC, cyclic codes all are applicable for BCH codes.

### 2. 核心用途一：编码（如何自动附带校验尾巴）

**直观理解**：BCH 码的编码过程本质上是**多项式带余除法**。 我们将待发送的信息序列转化为多项式 $M(x)$，先将其向左移位（乘以 $x^{n-k}$，为校验位留出空位），然后除以生成多项式 $G(x)$。得到的**余数多项式**就是我们的“校验尾巴”。

#### 📝【例题 1】

假设我们需要发送一组 4 比特的原始信息：`1010`。 已知我们选用的 BCH 码生成多项式为 $G(x) = x^3 + x + 1$（对应二进制系数为 `1011`）。请构造出最终发送的系统码字。

##### 步骤 1：将信息序列转换成多项式

信息为 `1010`，其对应的多项式为：

$$M(x) = 1 \cdot x^3 + 0 \cdot x^2 + 1 \cdot x^1 + 0 \cdot x^0 = x^3 + x$$

##### 步骤 2：左移位，为校验位留出空腔

由于 $G(x)$ 的最高次数为 3（校验位长 $n-k = 3$），我们将信息多项式向左平移 3 位（即乘以 $x^3$）：

$$M(x) \cdot x^3 = (x^3 + x) \cdot x^3 = x^6 + x^4$$

这在二进制串上表现为：`1010000`（原信息后方补了 3 个 0）。

##### 步骤 3：进行模 2 长除法求取余数

我们用 $x^6 + x^4$ 除以 $G(x) = x^3 + x + 1$。

- **重要规则**：由于在 $GF(2)$ 中加减法等同于**异或（XOR）**，因此长除法中的每一次相减均使用异或运算。

二进制长除法演算过程如下：

```
             1011  （商，在编码中不使用）
        _________
 1011  | 1010000
         1011       <- 1010 异或 1011
         ----
         0001000    <- 移位下落得到 1000
           1011     <- 1000 异或 1011
           ----
           00110    <- 剩余 110，此时次数已低于除数，除法结束
```

算得的余数二进制为 `110`（多项式为 $x^2 + x$）。

##### 🎯 最终编码输出

我们将算好的校验余数填入步骤 2 预留的空位中：

$$\text{最终码字} = 1010000 \oplus 110 = 1010110$$

- 前 4 位 `1010` 是未被破坏的原始信息，后 3 位 `110` 是 BCH 码自动生成的校验信息。

## 第三部分：BCH 码的译码与纠错（接收端）

### 1. 核心用途二：簡易糾錯原理

接收端在收到可能夹杂干扰的数据后，再次将其除以生成多项式 $G(x)$：

- 若**余数为 0**：说明传输信道完美，数据无误，直接提取前 4 位即可。
- 若**余数不为 0**：说明传输中发生了比特翻转。余数在学术上被称为**伴随式（Syndrome）**。BCH 码通过数学机制，使得每一个不同的伴随式都唯一对应了某一个位置的错误。

#### 📝【例题 2】

假设接收端收到了受干扰的信号 `1011110`。已知生成多项式依然为 $G(x) = x^3 + x + 1$（对应 `1011`），请问是否出错？若出错，如何修复？

##### 步骤 1：检验错误（计算余数伴随式）

我们用收到的序列 `1011110` 直接对除数 `1011` 进行异或除法：

```
             1000  （商）
        _________
 1011  | 1011110
         1011
         ----
         0000110   <- 剩余 110，无法再除
```

余数为 `110`，不为 0。判定信号在传输中被噪声篡改！

##### 步骤 2：定位嫌疑人并精准修复

在 BCH 码的规则中，错误图样与伴随式有一一映射的物理规律：

- 若右起第 1 位（$x^0$ 项）翻转，余数必为 `001`。
- 若右起第 2 位（$x^1$ 项）翻转，余数必为 `010`。
- 若右起第 3 位（$x^2$ 项）翻转，余数必为 `100`。
- 若右起第 4 位（$x^3$ 项）翻转，余数必为 `110`。

由于我们计算出的伴随式恰好为 `110`！ 这瞬间暴露了错误：**右起第 4 位发生了比特翻转**。

##### 🎯 纠错结案

我们将接收数据 `1 0 1 [1] 1 1 0` 的右起第 4 位（标记括号处）进行取反（将 `1` 修正为 `0`）：

$$1011110 \to 1010110$$

剥离后方 3 位校验尾巴 `110`，接收端成功无损还原出发送端发送的原始核心数据：`1010`！

## 第四部分：代数复号的高级侦探破案（以 $t = 2$ 为核心）

在突发错误较多（如同时错 2 个及以上比特）时，普通循环码因无法建表而失效。BCH 码此时展现出其卓越的代数纠错威力：它不需要死记硬背查表，而是利用有限域的代数方程，单凭数学计算就能在庞大的搜索空间中瞬间抓出所有的“内鬼”。

我们将这套精妙的复号（译码）过程，凝练为以下三步：

```
graph TD
    A[接收多项式 Yx] --> B[第一步: 提取指纹 Syndrome]
    B --> C[第二步: 建立关系网 错误位置多项式]
    C --> D[第三步: 全城搜捕 Chien 搜索]
    D --> E[精准纠错与译码]
```

### 🕵️‍♂️ 第一步：提取指纹（计算伴随式 Syndrome）

设发送码字多项式为 $W(x)$，信道错误多项式为 $E(x)$。接收端实际拿到的信号为：

$$Y(x) = W(x) \oplus E(x)$$

为了寻找错误，我们将生成多项式中预埋的连续有限域根 $\alpha, \alpha^2, \alpha^3, \dots, \alpha^{2t}$ 代入到 $Y(x)$ 中。 算出的结果集合 $\{S_1, S_2, \dots, S_{2t}\}$ 即为**伴随式（指纹）**：

$$S_i = Y(\alpha^i) = E(\alpha^i) \quad (i = 1, 2, \dots, 2t)$$

> 💡 **有限域特征简化法**：在二元域 $GF(2)$ 上，对于任意多项式均满足 $S_{2k} = S_k^2$。 证明：
>
> $$[F(x)]^2 = F(x^2) \quad (\text{特征为 2 的域中，交叉项系数均为 2，模 2 自动消去})$$
>
> 因此我们只需计算奇数项伴随式（如 $S_1, S_3$），偶数项可以直接平方求得。这极大缩减了计算量！

### 🕵️‍♂️ 第二步：建立关系网（构造错误位置多项式）

假设信道中共有 $l$ 个比特发生了翻转，其错误位置分别为 $j_1, j_2, \dots, j_l$。 我们定义错误位置多项式 $\sigma(z)$，其根的倒数正好指示了错误的位置：

$$\sigma(z) = (1 - \alpha^{j_1}z)(1 - \alpha^{j_2}z)\dots(1 - \alpha^{j_l}z) = 1 + \sigma_1 z + \sigma_2 z^2 + \dots + \sigma_l z^l$$

#### $t=2$（允许同时错 2 个比特）时的通用关系式推导

根据定义，当错误个数 $l=2$ 时：

$$\sigma(z) = (1 - \alpha^{j_1}z)(1 - \alpha^{j_2}z) = 1 + (\alpha^{j_1} + \alpha^{j_2})z + \alpha^{j_1}\alpha^{j_2} z^2$$

我们已知伴随式为：

$$S_1 = \alpha^{j_1} + \alpha^{j_2}$$

$$S_3 = \alpha^{3j_1} + \alpha^{3j_2}$$

由于在有限域中：

$$S_1^3 = (\alpha^{j_1} + \alpha^{j_2})^3 = \alpha^{3j_1} + \alpha^{3j_2} + \alpha^{j_1}\alpha^{j_2}(\alpha^{j_1} + \alpha^{j_2}) = S_3 + \alpha^{j_1}\alpha^{j_2} S_1$$

移项（加减同义）后，我们立即解出：

$$\alpha^{j_1}\alpha^{j_2} = (S_1^3 + S_3) S_1^{-1}$$

将该系数代回，得到极其优雅的 $t=2$ **通用错误位置方程式**：

$$\sigma(z) = 1 + S_1 z + (S_1^3 + S_3) S_1^{-1} z^2$$

### 🕵️‍♂️ 第三步：实战演练——抓捕两个内鬼（完整解析）

#### 📝【例题 3】

我们使用一个总长度为 15 的 $(15, 7)$ BCH 码。已知其生成多项式为：

$$G(x) = \text{LCM}\Big(m_1(x), m_3(x)\Big) = (x^4 + x + 1)(x^4 + x^3 + x^2 + x + 1) = x^8 + x^7 + x^6 + x^4 + 1$$

接收端收到了信号：`111000011110010`。假设信道中最多发生了 2 个错误。请恢复出正确的原始发送信息。

#### 步骤 1：提取指纹（伴随式计算）

接收数据对应的多项式表达式为：

$$Y(x) = x^{14} + x^{13} + x^{12} + x^7 + x^6 + x^5 + x^4 + x$$

我们计算奇数项伴随式 $S_1$ 与 $S_3$。

##### 1. 计算 $S_1 = Y(\alpha)$：

$$S_1 = \alpha^{14} + \alpha^{13} + \alpha^{12} + \alpha^7 + \alpha^6 + \alpha^5 + \alpha^4 + \alpha$$

我们将各分量查表转换为 $GF(2^4)$ 的矢量并相加（XOR）：

- $\alpha^{14} = 1001$
- $\alpha^{13} = 1101$
- $\alpha^{12} = 1111$
- $\alpha^7  = 1011$
- $\alpha^6  = 1100$
- $\alpha^5  = 0110$
- $\alpha^4  = 0011$
- $\alpha^1  = 0010$

按列异或相加： $$\begin{array}{rccccc} \alpha^{14}: & 1 & 0 & 0 & 1 \ \alpha^{13}: & 1 & 1 & 0 & 1 \ \alpha^{12}: & 1 & 1 & 1 & 1 \ \alpha^7:  & 1 & 0 & 1 & 1 \ \alpha^6:  & 1 & 1 & 0 & 0 \ \alpha^5:  & 0 & 1 & 1 & 0 \ \alpha^4:  & 0 & 0 & 1 & 1 \ \alpha^1:  & 0 & 0 & 1 & 0 \ \hline \text{XOR } \Sigma: & 1 & 0 & 1 & 1 & \implies \alpha^7 \end{array}$$ 算得：

$$S_1 = \alpha^7$$

##### 2. 计算 $S_3 = Y(\alpha^3)$：

$$S_3 = \alpha^{42} + \alpha^{39} + \alpha^{36} + \alpha^{21} + \alpha^{18} + \alpha^{15} + \alpha^{12} + \alpha^3$$

根据指数模 15 简化原则：

$$\alpha^{42} = \alpha^{12}, \quad \alpha^{39} = \alpha^9, \quad \alpha^{36} = \alpha^6, \quad \alpha^{21} = \alpha^6, \quad \alpha^{18} = \alpha^3, \quad \alpha^{15} = 1$$

代入上式，因模 2 域下成对的相同项相加消去（即 $\alpha^{12}+\alpha^{12}=0$, $\alpha^6+\alpha^6=0$, $\alpha^3+\alpha^3=0$）：

$$S_3 = (\alpha^{12} + \alpha^{12}) + \alpha^9 + (\alpha^6 + \alpha^6) + (\alpha^3 + \alpha^3) + 1 + \alpha^{12} + \alpha^3$$

$$S_3 = \alpha^9 + 1$$

将矢量代入计算：

$$\alpha^9 + 1 = (1010) \oplus (0001) = 1011 = \alpha^7$$

算得：

$$S_3 = \alpha^7$$

因为指纹 $S_1, S_3 \neq 0$，判定数据已被篡改。

#### 步骤 2：建立关系网（构造多项式）

我们将 $S_1 = \alpha^7, S_3 = \alpha^7$ 代入 $t=2$ 的通用方程：

1. **求** $S_1^3$：

   $$S_1^3 = (\alpha^7)^3 = \alpha^{21} = \alpha^6$$

2. **求分子** $S_1^3 + S_3$：

   $$S_1^3 + S_3 = \alpha^6 + \alpha^7 = (1100) \oplus (1011) = 0111 = \alpha^{10}$$

3. **求分母逆元** $S_1^{-1}$：

   $$S_1^{-1} = (\alpha^7)^{-1} = \alpha^{-7} = \alpha^8 \quad (\text{因为 } 15 - 7 = 8)$$

4. **求** $\sigma_2$ **系数**：

   $$\sigma_2 = (S_1^3 + S_3) S_1^{-1} = \alpha^{10} \cdot \alpha^8 = \alpha^{18} = \alpha^3$$

由此，我们成功构建出**错误位置多项式**：

$$\sigma(z) = 1 + \alpha^7 z + \alpha^3 z^2$$

#### 步骤 3：全城搜捕（Chien 搜索）

寻找方程 $\sigma(z) = 0$ 的根。最优雅而彻底的工程方法就是将有限域内的所有可能位置 $z = \alpha^0, \alpha^1, \dots, \alpha^{14}$ 逐一塞入方程进行“排队过筛”。

- 测试 $z = \alpha^0$：

  $$\sigma(1) = 1 + \alpha^7 + \alpha^3 = 1 + (\alpha^3 + \alpha + 1) + \alpha^3 = \alpha \neq 0$$

- 测试 $z = \alpha^1$：

  $$\sigma(\alpha) = 1 + \alpha^8 + \alpha^5 = 1 + (\alpha^2 + 1) + (\alpha^2 + \alpha) = \alpha \neq 0$$

- **测试** $z = \alpha^2$：

  $$\sigma(\alpha^2) = 1 + \alpha^9 + \alpha^7 = 1 + (\alpha^3 + \alpha) + (\alpha^3 + \alpha + 1) = 0$$

  **奇迹发生！**$z = \alpha^2$ **是方程的一个根！**

- 测试 $z = \alpha^3 \dots \alpha^9$，结果均不为 0。

- **测试** $z = \alpha^{10}$：

  $$\sigma(\alpha^{10}) = 1 + \alpha^{17} + \alpha^{23} = 1 + \alpha^2 + \alpha^8 = 1 + \alpha^2 + (\alpha^2 + 1) = 0$$

  **第二个嫌疑人落网！**$z = \alpha^{10}$ **也是方程的根！**

#### 步骤 4：收网捕获与洗白（纠错）

我们搜捕到了两个根：$z_1 = \alpha^2$ 与 $z_2 = \alpha^{10}$。 根据多项式定义，错误位置即为这两个根的**倒数（逆元）**：

- 错误位置 1：

  $$\alpha^{-j_1} = \alpha^2 \implies j_1 \equiv -2 \equiv 13 \pmod{15}$$

  这表明多项式的 $x^{13}$ **项（从右往左数第 13 位）** 出了错。

- 错误位置 2：

  $$\alpha^{-j_2} = \alpha^{10} \implies j_2 \equiv -10 \equiv 5 \pmod{15}$$

  这表明多项式的 $x^5$ **项（从右往左数第 5 位）** 也出了错。

##### 纠错动作

我们把收到的错误数据中对应的出错比特强行翻转（1 变 0）：

```
 索引位置 (i):  14 [13] 12  11  10   9   8   7   6  [5]  4   3   2   1   0
 接收二进制:     1   1   1   0   0   0   0   1   1   1   1   0   0   1   0
                    |                               |
                (反转)                           (反转)
                    v                               v
 修正后码字:     1   0   1   0   0   0   0   1   1   0   1   0   0   1   0
```

🎯 **结案**： 纠错洗白后的正确码字为：`101000011010010`。 我们成功攻克了多点受扰的恶劣信道，达成了 100% 精准纠错！

## 第五部分：BCH 码最小距离限界（BCH Bound）的数学证明

为什么按照连续根构造的 BCH 码，其实际纠错能力一定能达到设计指标（即证明最小码距 $d_{min} \ge d$）？ 这三页 PPT 构成了一个极为精妙的数学证明。我们可以将其生动地比喻为一场“频域真空消消乐”。

### (a) 底层工具：有限域原始元的正交性

设原始元为 $\alpha$，码长 $n = 2^m - 1$。对于任意整数 $j$ ($0 \le j < n$)，满足：

$$\sum_{i=0}^{n-1} \alpha^{ij} = \begin{cases} n \equiv 1 \pmod p & ; \ j = 0 \\ 0 & ; \ j \neq 0 \end{cases}$$

#### 证明：

- 当 $j = 0$ 时，$\alpha^0 = 1$，上式为 $n$ 个 1 相加，由于 $n = p^m - 1 \equiv -1 \equiv 1 \pmod p$ （对二元域成立）。

- 当 $j \neq 0$ 时，上式为等比数列求和：

  $$\sum_{i=0}^{n-1} (\alpha^j)^i = \frac{1 - (\alpha^j)^n}{1 - \alpha^j} = \frac{1 - (\alpha^n)^j}{1 - \alpha^j}$$

  因为 $\alpha$ 是 $n$ 阶原始元，所以 $\alpha^n = 1$，从而分子为 $1 - 1 = 0$。 **大白话**：这是一个“旋转向量过滤器”。只要 $j \neq 0$，域内转圈的向量相加必定完美抵消。

### (b) & (c) 有限域傅里叶变换（时频域对偶）

利用正交性，我们可以将时域信号 $w$ 与频域信号 $\tilde{w}$ 关联起来：

- **频域变换（DFT）**：$\tilde{W}_j = \sum_{i=0}^{n-1} w_i \alpha^{ij}$
- **时域反变换（IDFT）**：$w_i = \sum_{j=0}^{n-1} \tilde{W}_j \alpha^{-ij}$

#### 频域的“连续真空区”

因为 BCH 码的生成多项式 $G(x)$ 天生包含连续的根：$1, \alpha, \alpha^2, \dots, \alpha^{d-2}$，所以任何合法码字 $w(x)$ 代入这些根后，结果必定为 0。 而“代入根”在数学上恰好对应其频域的频谱分量！由此，我们锁定了 BCH 码在频域中的硬性特征：

$$\tilde{w}_0 = \tilde{w}_1 = \dots = \tilde{w}_{d-2} = 0$$

**这在频域中强行切出了一道长度为** $d-1$ **的“真空全零区”！**

### (d) 终极反推：频域真空度限制了时域的零点

我们把整个频域信号写成多项式形式 $\tilde{W}(x)$。由于前 $d-1$ 项全为 0，多项式只能从 $x^{d-1}$ 次项开始写：

$$\tilde{W}(x) = \tilde{W}_{n-1} x^{n-1} + \dots + \tilde{W}_{d-1} x^{d-1} = x^{d-1} \Big( \tilde{W}_{n-1} x^{n-d} + \dots + \tilde{W}_{d-1} \Big)$$

提取公因式 $x^{d-1}$ 后，右侧括号内多项式的最高次数仅剩下 $n-d$ 次。

根据代数基本定理，一个最高次数为 $n-d$ 的多项式，其非零根（能够让多项式输出为 0 的非零值）**最多只有** $n-d$ **个**。

这意味着，时域中的每一个编码值 $w_i$（由频域多项式求值得到）为 0 的个数，在 $n$ 个位置中最多只能占有 $n-d$ 个！

#### 锁定汉明重量下限：

- 总长为 $n$。

- 值为 0 的位置最多只有 $n-d$ 个。

- 非零位置（即 1 的个数，即汉明重量 $W_H(w)$）至少有：

  $$\text{非零个数} \ge n - (n - d) = d$$

根据线性码的性质，码字集合中非零元素的最小个数即为该编码的最小码距 $d_{min}$。 至此，我们完成了极具数学美感的严格证明：

$$d_{min} \ge d$$

> 💡 **高度概括**： 频域被硬性挖去的 $d-1$ 个连续零点，迫使频域多项式的最高次数急剧萎缩。这导致该多项式在时域能吐出 `0` 的次数受到了严格限制。无处安放的能量迫使时域码字必须顶出至少 $d$ 个 `1`。 数学规律在这里完美交汇，共同焊死了 BCH 码固若金汤的纠错下限！




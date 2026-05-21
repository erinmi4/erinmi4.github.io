---
title: "第五章 离散时间傅里叶变换 (DTFT) 学习笔记"
slug: "信号与系统-CH5-离散时间傅里叶变换"
description: "信号与系统-CH5-离散时间傅里叶变换，待补充摘要。"
pubDate: 2026-05-16
updatedDate: 2026-05-16
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
heroImage: /images/posts/Signal-and-system/memo.jpg
---

<iframe src="https://drive.google.com/file/d/1AcpjV9NFNM9nzM_xe6p0fBxjygzPPlh9/preview" width="640" height="480"></iframe>

# 第五章 离散时间傅里叶变换 (DTFT) 学习笔记

本篇笔记主要整理了离散时间非周期信号与周期信号的傅里叶变换（DTFT）表示，详细推导了三种经典信号的变换对，并阐述了周期信号在 DTFT 框架下的冲激串表示法。

## 5.1 非周期信号的表示：离散时间傅里叶变换 (DTFT)

### 5.1.1 从傅里叶级数（DFS）到傅里叶变换（DTFT）的直观理解

在连续时间信号中，我们已经学到：一个周期方波信号的傅里叶系数 $a_k$ 可以视为其单周期内非周期信号包络函数的采样值。随着信号周期 $N$ 的增大，频域中的采样样本会变得越来越密集。

对于周期为 $N$ 的离散周期信号 $x[n]$，其傅里叶级数表示为：

$$x[n] = \frac{1}{N} \sum_{k=\langle N \rangle} X(e^{j k \omega_0}) e^{j k \omega_0 n}$$

其中基频为 $\omega_0 = \frac{2\pi}{N}$，则 $\frac{1}{N} = \frac{\omega_0}{2\pi}$。代入上式可得：

$$x[n] = \frac{1}{2\pi} \sum_{k=\langle N \rangle} X(e^{j k \omega_0}) e^{j k \omega_0 n} \cdot \omega_0$$

**极限演变：** 随着周期 $N \to \infty$：

1. 基频 $\omega_0 \to 0$（记作微分项 $d\omega$）。
2. 离散求和的区间 $\sum_{k=\langle N \rangle} \omega_0$ 演变为在一个 $2\pi$ 区间内的连续积分。
3. 离散频率 $k\omega_0$ 变为连续频率变量 $\omega$。

从而，上述公式演变为傅里叶逆变换（IDTFT）积分式：

$$x[n] = \frac{1}{2\pi} \int_{2\pi} X(e^{j\omega}) e^{j\omega n} d\omega$$

相对应的，离散时间傅里叶变换（DTFT）的正变换公式为：

$$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} x[n] e^{-j\omega n}$$

### 5.1.2 离散时间傅里叶变换经典求法与例子

#### ① 例子 1：单边指数衰减信号

**已知：**

$$x[n] = a^n u[n], \quad |a| < 1$$

**求其 DTFT** $X(e^{j\omega})$**：** 根据正变换定义公式：

$$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} a^n u[n] e^{-j\omega n} = \sum_{n=0}^{+\infty} (a e^{-j\omega})^n$$

由于 $|a| < 1$ 且 $|e^{-j\omega}| = 1$，则公比 $|a e^{-j\omega}| = |a| < 1$。 本质上，利用**无穷等比数列（几何级数）求和公式** $\sum_{n=0}^{\infty} q^n = \frac{1}{1-q}$，可得：

$$X(e^{j\omega}) = \frac{1}{1 - a e^{-j\omega}}$$

![例5.1信号的傅里叶变换](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH5-%E7%A6%BB%E6%95%A3%E6%97%B6%E9%97%B4%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2.assets/image-20260516224158806.png)

#### ② 例子 2：双边指数衰减信号

**已知：**

$$x[n] = a^{|n|}, \quad |a| < 1$$

**求其 DTFT** $X(e^{j\omega})$**：** 将双边序列拆分为负半轴与正半轴（重合部分在 $n=0$ 处处理）：

$$X(e^{j\omega}) = \sum_{n=-\infty}^{+\infty} a^{|n|} e^{-j\omega n} = \sum_{n=-\infty}^{-1} a^{-n} e^{-j\omega n} + \sum_{n=0}^{+\infty} a^n e^{-j\omega n}$$

对于第一部分，令 $m = -n$（范围从 $1$ 到 $+\infty$）：

$$\sum_{m=1}^{+\infty} a^m e^{j\omega m} = \sum_{m=1}^{+\infty} (a e^{j\omega})^m = \frac{a e^{j\omega}}{1 - a e^{j\omega}}$$

对于第二部分，同例子 1：

$$\sum_{n=0}^{+\infty} (a e^{-j\omega})^n = \frac{1}{1 - a e^{-j\omega}}$$

合并两部分并通分：

$$X(e^{j\omega}) = \frac{a e^{j\omega}}{1 - a e^{j\omega}} + \frac{1}{1 - a e^{-j\omega}}$$

$$X(e^{j\omega}) = \frac{a e^{j\omega}(1 - a e^{-j\omega}) + (1 - a e^{j\omega})}{(1 - a e^{j\omega})(1 - a e^{-j\omega})}$$

$$X(e^{j\omega}) = \frac{a e^{j\omega} - a^2 + 1 - a e^{j\omega}}{1 - a(e^{j\omega} + e^{-j\omega}) + a^2}$$

利用欧拉公式 $e^{j\omega} + e^{-j\omega} = 2 \cos\omega$，化简整理可得：

$$X(e^{j\omega}) = \frac{1 - a^2}{1 - 2a \cos\omega + a^2}$$

![image-20260516224418005](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH5-%E7%A6%BB%E6%95%A3%E6%97%B6%E9%97%B4%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2.assets/image-20260516224418005.png)

#### ③ 例子 3：对称离散矩形脉冲信号

**已知：**

$$x[n] = \begin{cases} 1, & |n| \le N_1 \\ 0, & |n| > N_1 \end{cases}$$

**求其 DTFT** $X(e^{j\omega})$**：** 依据定义展开：

$$X(e^{j\omega}) = \sum_{n=-N_1}^{N_1} 1 \cdot e^{-j\omega n}$$

设整体平移变量，或利用等比数列求和：

$$X(e^{j\omega}) = e^{j\omega N_1} \sum_{k=0}^{2N_1} e^{-j\omega k}$$

$$X(e^{j\omega}) = e^{j\omega N_1} \cdot \frac{1 - e^{-j\omega(2N_1 + 1)}}{1 - e^{-j\omega}}$$

$$X(e^{j\omega}) = \frac{e^{j\omega N_1} - e^{-j\omega(N_1 + 1)}}{1 - e^{-j\omega}}$$

分子分母同时提取半角项以配凑正弦函数（欧拉公式 $\sin\theta = \frac{e^{j\theta} - e^{-j\theta}}{2j}$）：

$$X(e^{j\omega}) = \frac{e^{-j\omega/2} \left( e^{j\omega(N_1 + 1/2)} - e^{-j\omega(N_1 + 1/2)} \right)}{e^{-j\omega/2} \left( e^{j\omega/2} - e^{-j\omega/2} \right)}$$

$$X(e^{j\omega}) = \frac{\sin\left[\omega\left(N_1 + \frac{1}{2}\right)\right]}{\sin\left(\frac{\omega}{2}\right)}$$

## 5.2 周期信号的离散时间傅里叶变换

### 5.2.1 引入思路与复指数信号的 DTFT

周期信号本身是不满足绝对可和条件的，但若利用**频域中的冲激串**，我们便能将周期信号统一纳入到 DTFT 的理论体系中。

在连续时间情况下，复指数信号 $e^{j\omega_0 t}$ 的傅里叶变换是位于 $\omega = \omega_0$ 处的单个冲激。 在离散时间情况下，由于 DTFT 具有 $2\pi$ 的周期性，我们可以猜想复指数信号 $x[n] = e^{j\omega_0 n}$ 在频域中应该对应一个**周期性冲激串**。

**【必须牢记的变换对】：**

$$x[n] = e^{j\omega_0 n} \quad \longleftrightarrow \quad X(e^{j\omega}) = \sum_{l=-\infty}^{+\infty} 2\pi \delta(\omega - \omega_0 - 2\pi l)$$

### 5.2.2 一般周期信号的傅里叶变换

现考虑一个任意的周期序列 $x[n]$，其基波周期为 $N$。 我们可以将其展开为离散时间傅里叶级数（DFS）：

$$x[n] = \sum_{k=\langle N \rangle} a_k e^{j k \omega_0 n} = \sum_{k=\langle N \rangle} a_k e^{j k \left(\frac{2\pi}{N}\right) n}$$

利用线性性质和复指数信号的变换对，对两边直接求离散时间傅里叶变换：

$$X(e^{j\omega}) = \sum_{k=\langle N \rangle} a_k \left[ \sum_{l=-\infty}^{+\infty} 2\pi \delta\left(\omega - \frac{2\pi k}{N} - 2\pi l\right) \right]$$

因为 $2\pi l$ 可以等价地写成 $\frac{2\pi}{N} \cdot (l N)$，这说明通过调节求和变量，双重求和公式可以合并为一个单变量求和。由于 $a_k$ 本身关于 $k$ 是周期为 $N$ 的（即 $a_k = a_{k+N}$），整个公式可以化简为：

$$\bigstar \quad X(e^{j\omega}) = \sum_{k=-\infty}^{+\infty} 2\pi a_k \delta\left(\omega - \frac{2\pi k}{N}\right)$$

### 5.2.3 物理意义与另一种理解方式

我们可以把一个周期信号的 DTFT $X(e^{j\omega})$ 形象地理解为：

- 它是由一串**发生在其基波频率** $\omega_0 = \frac{2\pi}{N}$ **的整倍数频率上**的冲激构成的。
- 每一个冲激的位置处于 $\omega = \frac{2\pi k}{N}$。
- 该位置处的冲激面积（强度）恰好等于 $2\pi a_k$（即 $2\pi$ 倍的傅里叶级数系数）。

通过这种方式，周期信号的傅里叶级数系数（DFS）与非周期信号的傅里叶变换（DTFT）完美地联系在了一起。

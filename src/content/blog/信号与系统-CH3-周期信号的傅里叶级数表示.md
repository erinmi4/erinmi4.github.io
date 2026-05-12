---
title: "信号与系统-CH3-周期信号的傅里叶级数表示"
slug: "信号与系统-CH3-周期信号的傅里叶级数表示"
description: "傅里叶变换是19世纪发展并发现的众多具有深远影响和革命性意义的数学理论之一。19世纪，让-巴普蒂斯·约瑟夫·傅里叶提出，任意一个变量的函数，无论连续还是不连续，或许都可以表示为正弦与余弦函数之和。也就是说，任意一个随时间变化（甚至随空间变化）的信号x(t)
，或许都能表示为正弦和余弦函数的叠加，即线性组合。将一个函数表示为无穷多个正弦与余弦函数之和的形式，就是傅里叶级数。"
pubDate: 2026-05-10
updatedDate: 2026-05-10
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
heroImage: /images/posts/Signal-and-system/memo.jpg

---

- [04 信号的傅里叶级数     如何从频率角度重构周期信号](https://www.lamda.nju.edu.cn/yehj/dsp2021/04.pdf)

- [Decomposing Fourier transforms — an introduction to time-frequency decomposition](https://dibsmethodsmeetings.github.io/fourier-transforms/)

- [Fourier Series](https://mathworld.wolfram.com/FourierSeries.html)
- [Properties of Fourier Series (Part 1)](https://youtu.be/ED--r1lByl4?si=CsfaV2fj7YGAUnra)
- [Properties of Fourier Series (Part 2)](https://www.youtube.com/watch?v=U7YwVMEHAVI&list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO&index=165)
- [Properties of Fourier Series (Part 3)](https://www.youtube.com/watch?v=3OmFm-Qi7nE&list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO&index=166)

<iframe src="https://drive.google.com/file/d/1y5tNMfgRGOKWfLqVpXnxrhL5xl7S-1zp/preview" width="640" height="480"></iframe>

![Decomposing Fourier transforms — an introduction to time-frequency decomposition](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/fourier_series-011.png)

![Fourier transform time and frequency domains](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/Fourier_transform_time_and_frequency_domains.gif)

> 该动画展示了由6个正弦波分解而成的方波6分量近似值。这些分量频率在函数的频域中呈现为尖锐的峰值。

> 傅里叶变换的主要结果是傅里叶系数，这些系数用于计算信号中不同频率对应的功率谱：功率谱衡量了信号中各频率成分的贡献强度。

![Continuous Fourier transform of rect and sinc functions](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/Continuous_Fourier_transform_of_rect_and_sinc_functions.gif)

> 连续傅里叶变换将时域中的连续输入函数转换为频域中的新函数。



# 第三章：周期信号的傅里叶级数表示

## 3.0 引言 (Introduction)

本章的核心出发点是：**将信号表示为一组基本信号的线性组合**。 在信号与系统分析中，我们选择 **复指数函数**（Complex Exponentials）作为基本信号。

## 3.1为什么选择复指数信号？

1. **特征函数性质**：线性时不变（LTI）系统对复指数信号的响应仍然是相同频率的复指数信号，改变的仅仅是复幅度（幅度与相位）。
2. **普适性**：通过傅里叶分析，大部分信号都可以分解为复指数信号的组合，从而简化系统响应的计算。

- **连续时间系统**：$e^{st} \xrightarrow{H} H(s)e^{st}$
- **离散时间系统**：$z^n \xrightarrow{H} H(z)z^n$

## 3.2证明（连续时间 LTI 系统）

设系统的冲激响应为 $h(t)$，输入信号为 $x(t) = e^{st}$，则输出 $y(t)$ 为：

$$y(t) = \int_{-\infty}^{+\infty} h(\tau)x(t-\tau)d\tau = \int_{-\infty}^{+\infty} h(\tau)e^{s(t-\tau)}d\tau$$

$$y(t) = e^{st} \int_{-\infty}^{+\infty} h(\tau)e^{-s\tau}d\tau$$

令 $H(s) = \int_{-\infty}^{+\infty} h(\tau)e^{-s\tau}d\tau$（即系统函数），则有：

$$y(t) = H(s)e^{st}$$

## 3.3 连续时间周期信号的傅里叶级数表示

### 3.3.1 成谐波关系的复指数信号集

对于周期为 $T$、基频为 $\omega_0 = \frac{2\pi}{T}$ 的周期信号，我们使用如下复指数信号集：

$$\phi_k(t) = e^{jk\omega_0 t}, \quad k = 0, \pm 1, \pm 2, \dots$$

这些信号的共同周期都是 $T$。

### 3.3.2 傅里叶级数形式

周期信号 $x(t)$ 可以表示为这些成谐波关系的复指数信号的线性组合：

$$x(t) = \sum_{k=-\infty}^{+\infty} a_k e^{jk\omega_0 t}$$

其中 $a_k$ 称为**傅里叶级数系数**或**频谱系数**。

- $a_0$：直流分量（信号的平均值）。

- **三角函数形式**：利用欧拉公式，$x(t)$ 也可以改写为正弦和余弦的组合形式：

  $$x(t) = a_0 + 2 \sum_{k=1}^{\infty} [B_k \cos(k\omega_0 t) - C_k \sin(k\omega_0 t)]$$

## 3.3.3 确定系数 $a_k$（分析公式）

求系数的关键在于利用复指数信号在区间 $T$ 上的**正交性**。

**推导步骤：**

1. 在 $x(t) = \sum_{k=-\infty}^{+\infty} a_k e^{jk\omega_0 t}$ 两边同时乘以 $e^{-jn\omega_0 t}$。

2. 在一个周期 $T$ 内积分：

   $$\int_T x(t)e^{-jn\omega_0 t} dt = \int_T \left( \sum_{k=-\infty}^{+\infty} a_k e^{jk\omega_0 t} \right) e^{-jn\omega_0 t} dt$$

3. 交换积分与求和顺序：

   $$\int_T x(t)e^{-jn\omega_0 t} dt = \sum_{k=-\infty}^{+\infty} a_k \left[ \int_T e^{j(k-n)\omega_0 t} dt \right]$$

4. 利用正交性：

   - 当 $k=n$ 时，积分为 $\int_T 1 dt = T$。
   - 当 $k \neq n$ 时，积分为 $0$。

5. 得到 **分析公式**：

   $$a_k = \frac{1}{T} \int_T x(t) e^{-jk\omega_0 t} dt$$

## 例 3.5：周期性方波的傅里叶级数分析

**信号定义**（在一个周期内）：

$$x(t) = \begin{cases} 1, & |t| < T_1 \\ 0, & T_1 < |t| < T/2 \end{cases}$$

基波周期为 $T$，基频 $\omega_0 = 2\pi/T$。

![image-20260510171140989](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/image-20260510171140989.png)

### 1. 求直流分量 $a_0$

$$a_0 = \frac{1}{T} \int_{-T_1}^{T_1} 1 dt = \frac{2T_1}{T}$$

这代表了信号在周期内的平均值（占空比）。

### 2. 求 $a_k$ ($k \neq 0$)

$$a_k = \frac{1}{T} \int_{-T_1}^{T_1} e^{-jk\omega_0 t} dt = \left[ \frac{1}{-jk\omega_0 T} e^{-jk\omega_0 t} \right]_{-T_1}^{T_1}$$

$$a_k = \frac{e^{jk\omega_0 T_1} - e^{-jk\omega_0 T_1}}{jk\omega_0 T} = \frac{2\sin(k\omega_0 T_1)}{k\omega_0 T}$$

利用 $\omega_0 T = 2\pi$，整理得：

$$a_k = \frac{\sin(k\omega_0 T_1)}{k\pi}, \quad k \neq 0$$

> $a_k$：傅里叶级数的第 $k$ 次谐波系数。
>
> $\omega_0$：基波角频率，且 $\omega_0 = \frac{2\pi}{T}$。
>
> $T$：信号的周期。
>
> $T_1$：脉冲半宽度（详见下文）。
>
> 在描述一个周期为 $T$ 的矩形波时，$T_1$ 通常定义为**脉冲在零点附近的持续半宽度**。
>
> - **物理含义**：如果一个周期内的脉冲中心在 $t=0$ 处，那么该脉冲的范围是从 $-T_1$ 到 $+T_1$。
> - **脉冲全宽**：整个脉冲的持续时间（脉宽）为 $2T_1$。
> - **占空比**：该信号的占空比（Duty Cycle）可以表示为 $\frac{2T_1}{T}$。

### 结论与观察

![image-20260510171203740](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/image-20260510171203740.png)

- 系数 $a_k$ 的包络呈现 $\text{Sa}(x)$ 函数形状。
- 当 $T$ 增加（周期变长）时，频谱线变得更加密集。
- 对于特定的 $T = 4T_1$，当 $k$ 为偶数时 $a_k = 0$。

## 3.4 傅里叶级数表示的收敛性

对于周期信号，傅里叶级数并不总是收敛于原信号。需要满足 **狄里赫利（Dirichlet）条件**：

1. 在任何周期内，$x(t)$ 绝对可积：$\int_T |x(t)| dt < \infty$。
2. 在任何有限区间内，$x(t)$ 具有有限个起伏变化（极大值和极小值）。
3. 在任何有限区间内，$x(t)$ 具有有限个不连续点。

## 3.5 连续时间傅里叶级数的性质

若 $x(t) \leftrightarrow a_k$ 且 $y(t) \leftrightarrow b_k$，周期均为 $T$，基频 $\omega_0 = 2\pi/T$。

### 1. 线性 (Linearity)

$$Ax(t) + By(t) \leftrightarrow Aa_k + Bb_k$$

### 2. 时移性质 (Time Shifting)

$$x(t - t_0) \leftrightarrow a_k e^{-jk\omega_0 t_0}$$

- **注意**：时移不改变频谱的**模**（$|a_k|$ 不变），只改变相位。

### 3. 共轭与共轭对称性 (Conjugation)

$$x^*(t) \leftrightarrow a_{-k}^*$$

- 若 $x(t)$ 是实信号，则 $a_k = a_{-k}^*$（共轭对称）。
- 若 $x(t)$ 是**实偶**函数，则 $a_k$ 也是**实偶**函数。
- 若 $x(t)$ 是**实奇**函数，则 $a_k$ 是**纯虚奇**函数。

### 4. 时间反置 (Time Reversal)

$$x(-t) \leftrightarrow a_{-k}$$

### 5. 时域尺度变换 (Time Scaling)

$$x(\alpha t) \leftrightarrow a_k$$

- **注意**：系数 $a_k$ 虽然没变，但信号的周期变为了 $T/\alpha$，基频变为了 $\alpha \omega_0$。

### 6. 相乘性质 (Multiplication)

两个周期信号在时域相乘，对应于其系数的**离散卷积**：

$$x(t)y(t) \leftrightarrow h_k = \sum_{l=-\infty}^{+\infty} a_l b_{k-l}$$

### 7 微分性质 (Differentiation Property) —— 重点补充

若周期信号 $x(t)$ 的傅里叶级数系数为 $a_k$，则其导数的傅里叶级数系数为：

$$\frac{dx(t)}{dt} \longleftrightarrow jk\omega_0 a_k$$

**意义**：

- 时域的微分对应频域乘以系数 $jk\omega_0$。
- 对于某些“分段常数”信号（如方波），求导后会变成冲激串，其频谱极易求解，从而可以反推出原信号的频谱。

### 8.  帕塞瓦尔定理 (Parseval's Relation)

周期信号在时域的平均功率等于其各次谐波分量功率的总和：

$$\frac{1}{T} \int_T |x(t)|^2 dt = \sum_{k=-\infty}^{+\infty} |a_k|^2$$

## 3.6 性质综合应用例题

### 例 3.6：利用线性与时移性质求位移方波

考虑信号 $g(t)$，其周期 $T=4$，求其傅里叶级数

![image-20260510173110109](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/image-20260510173110109.png)

它是例 3.5 中对称方波 $x(t)$（$T_1=1, T=4$）经过平移和直流偏移得到的：

$$g(t) = x(t-1) - \frac{1}{2}$$

**求解过程**：

1. **时移项**：已知 $x(t) \leftrightarrow a_k$，根据时移性质，$x(t-1) \leftrightarrow b_k = a_k e^{-jk\omega_0(1)}$。由于 $T=4, \omega_0 = \pi/2$，则 $b_k = a_k e^{-jk\pi/2}$。
2. **直流项**：$-1/2$ 仅影响 $k=0$ 时的系数。

> 注意为什么没有影响 其他k项
>
> 因为傅里叶级数本质是反应功率情况的功率特征
>
> 这里下降但是相对是没有改变的。

3. **组合结果**：

$$d_k = \begin{cases} a_k e^{-jk\pi/2}, & k \neq 0 \\ a_0 - \frac{1}{2}, & k = 0 \end{cases}$$

代入例 3.5 结果 $a_k = \frac{\sin(k\pi/2)}{k\pi}$ 和 $a_0 = 1/2$，得：

$$d_k = \begin{cases} \frac{\sin(k\pi/2)}{k\pi} e^{-jk\pi/2}, & k \neq 0 \\ 0, & k = 0 \end{cases}$$

### 例 3.7：利用微分性质求三角波频谱

考虑周期为 $T=4$ 的三角波 $x(t)$，求其傅里叶级数

![image-20260510173306052](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/image-20260510173306052.png)

其导数 $\frac{dx(t)}{dt}$ 正好是例 3.6 中的方波 $g(t)$。

**求解过程**：

1. 设三角波系数为 $e_k$，$g(t)$ 系数为 $d_k$。

2. 根据微分性质：$d_k = jk\omega_0 e_k = jk(\pi/2)e_k$。

3. 反推 $e_k$ ($k \neq 0$)：

   $$e_k = \frac{d_k}{jk(\pi/2)} = \frac{\sin(k\pi/2)}{jk\pi \cdot jk(\pi/2)} e^{-jk\pi/2} = \frac{2\sin(k\pi/2)}{j(k\pi)^2} e^{-jk\pi/2}$$

4. **直流分量**：通过面积法求平均值，$e_0 = \frac{1}{4} \int_0^4 x(t)dt = 1/2$。

### 例 3.8：周期冲激串 (Impulse Train)

周期冲激串是采样理论的基础，定义为：

$$x(t) = \sum_{k=-\infty}^{+\infty} \delta(t - kT)$$

**频谱分析**：

$$a_k = \frac{1}{T} \int_{-T/2}^{T/2} \delta(t) e^{-jk\omega_0 t} dt = \frac{1}{T}$$

**结论**：周期冲激串的傅里叶级数系数全部相等，均为 $1/T$。这说明冲激串包含所有谐波分量，且强度一致。

**进阶：利用冲激串求方波导数** 方波 $g(t)$ 的导数 $q(t)$ 可以表示为两个位移冲激串之差：

$$q(t) = x(t+T_1) - x(t-T_1)$$

利用线性与时移性质，可直接写出 $q(t)$ 的系数 $b_k$，再结合微分性质 $b_k = jk\omega_0 c_k$，即可得到方波系数 $c_k = \frac{\sin(k\omega_0 T_1)}{k\pi}$。这与分析公式计算结果完全一致，证明了性质法的有效性。

![image-20260510173412568](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/image-20260510173412568.png)

### 例 3.9：根据性质反推信号（综合实战）

**已知条件**：

1. $x(t)$ 是实信号。
2. $T=4$，系数为 $a_k$。
3. $a_k = 0$ 对于 $|k| > 1$（信号只含直流和基波）。
4. $b_k = e^{-jk\pi/2} a_{-k}$ 对应的信号是奇信号。
5. 平均功率 $\frac{1}{4} \int_4 |x(t)|^2 dt = 1/2$。

**推导过程**：

1. **条件 1 & 3**：$x(t) = a_0 + a_1 e^{j\pi t/2} + a_{-1} e^{-j\pi t/2}$。实信号要求 $a_0$ 实数，$a_1 = a_{-1}^*$。

2. **条件 4**：$b_k$ 对应信号为 $x(-(t-1))$。若其为奇信号且 $x(t)$ 为实信号，则要求 $b_k$ 为纯虚数。 推导得 $b_0=0 \Rightarrow a_0=0$。且 $b_1 = -b_{-1}$。

3. **条件 5**：利用帕塞瓦尔定理：$|a_0|^2 + |a_1|^2 + |a_{-1}|^2 = 1/2$。 因 $a_0=0$ 且 $|a_1|=|a_{-1}|$，得 $2|a_1|^2 = 1/2 \Rightarrow |a_1| = 1/2$。

4. **结合奇信号要求**：最终确定 $a_1$ 必须使信号转化为正弦或余弦形式。经校验得：

   $$x(t) = \pm \cos(\pi t / 2) \text{ 或 } \pm \sin(\pi t / 2)$$

   （具体符号根据条件 4 的奇函数约束进一步确定，如 $a_1 = -1/2$ 时 $x(t) = -\cos(\pi t / 2)$）。

## 重点总结 (Key Takeaways)

1. **对称性**：实偶信号对应实偶频谱；实奇信号对应纯虚奇频谱。
2. **微分法**：遇到折线或阶跃信号，优先考虑求导。
3. **能量守恒**：帕塞瓦尔定理连接了时域强度与频域幅度。





# 课后题

### 3.1

【【信号与系统课后题逐题精讲】奥本海姆第二版《信号与系统》课后题逐题详细解析【第一章~第五章】】 https://www.bilibili.com/video/BV1nj42197yF/?p=67&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

### 3.2

【【信号与系统课后题逐题精讲】奥本海姆第二版《信号与系统》课后题逐题详细解析【第一章~第五章】】 https://www.bilibili.com/video/BV1nj42197yF/?p=68&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

- 注意指数的共轭怎么写
- cos与sin之间的转换，为什么不是 n + pi/2  ，而是整个内部 + pi/2



### 3.3

【【信号与系统课后题逐题精讲】奥本海姆第二版《信号与系统》课后题逐题详细解析【第一章~第五章】】 https://www.bilibili.com/video/BV1nj42197yF/?p=69&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

这一题也错了，但是我认为是因为我对于**欧拉公式**不熟练掌握

### 3.4

【【信号与系统课后题逐题精讲】奥本海姆第二版《信号与系统》课后题逐题详细解析【第一章~第五章】】 https://www.bilibili.com/video/BV1nj42197yF/?p=70&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

很重要

> 我原本认为应该用性质，也就是 时移 来求解
>
> 但是使用冲激串的方法似乎更加简单

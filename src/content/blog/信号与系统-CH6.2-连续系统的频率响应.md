---
title: "信号与系统-CH6.2-连续系统的频率响应"
slug: "信号与系统-CH6.2-连续系统的频率响应"
description: "本篇笔记对连续时间 LTI（线性时不变）系统的频率响应进行了系统性整理。重点解决频率响应的定义、存在条件、一阶系统的计算步骤，以及复数复频响应在极坐标（幅频与相频）下的转换原理。"
pubDate: 2026-05-24
updatedDate: 2026-05-24
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

# 连续系统的频率响应 (Frequency Response of Continuous-Time Systems)

本篇笔记对连续时间 LTI（线性时不变）系统的频率响应进行了系统性整理。重点解决频率响应的定义、存在条件、一阶系统的计算步骤，以及复数复频响应在极坐标（幅频与相频）下的转换原理。

https://www.youtube.com/watch?v=T_DdDa_nUak&list=PLX6FA3vfNTfChkbNQGxVPrIsvkC_DwNV6&index=20&t=38s

## 一、 频率响应的物理背景与定义

对于一个线性时不变（LTI）系统，其冲激响应为 $h(t)$。

若输入一个复指数信号（单频悬波信号） $x(t) = e^{j\omega t}$，根据时域卷积，系统的输出 $y(t)$ 为：

$$y(t) = h(t) * x(t) = \int_{-\infty}^{+\infty} h(\tau) x(t - \tau) \, d\tau$$

将 $x(t-\tau) = e^{j\omega(t-\tau)} = e^{j\omega t} \cdot e^{-j\omega \tau}$ 代入上式：

$$y(t) = \int_{-\infty}^{+\infty} h(\tau) e^{j\omega t} e^{-j\omega \tau} \, d\tau$$

由于积分是对 $\tau$ 进行的，与 $t$ 无关，我们可以将 $e^{j\omega t}$ 提取到积分符号外面：

$$y(t) = e^{j\omega t} \left[ \int_{-\infty}^{+\infty} h(\tau) e^{-j\omega \tau} \, d\tau \right]$$

我们定义括号中的积分项为系统的**频率响应 (Frequency Response)**，记作 $H(j\omega)$：

$$\boxed{H(j\omega) = \int_{-\infty}^{+\infty} h(\tau) e^{-j\omega \tau} \, d\tau}$$

从数学形式上看，**系统的频率响应** $H(j\omega)$ **就是系统冲激响应** $h(t)$ **的傅里叶变换 (Fourier Transform)**。

此时，系统的输出可以简写为：

$$y(t) = H(j\omega) e^{j\omega t}$$

> **物理意义**：当复指数信号（或正弦信号）通过 LTI 系统时，输出信号的**频率不发生改变**，仅仅是其**幅度**和**相位**受到了系统频率响应 $H(j\omega)$ 的调制。

## 二、 频率响应的存在条件：系统稳定性证明

### 1. 核心问题

$H(j\omega)$ 怎么求？它在什么时候会存在？

### 2. 收敛性证明（存在条件）

要使频率响应 $H(j\omega)$ 存在，其积分在数学上必须收敛。我们对其取绝对值进行评估：

$$|H(j\omega)| = \left| \int_{-\infty}^{+\infty} h(\tau) e^{-j\omega\tau} \, d\tau \right|$$

根据复数积分的三角不等式性质（积分的模小于或等于模的积分）：

$$|H(j\omega)| \le \int_{-\infty}^{+\infty} \left| h(\tau) e^{-j\omega\tau} \right| \, d\tau$$

因为对于任意实数 $\omega$ 和 $\tau$，复指数项的模总为 $1$，即 $\left|e^{-j\omega\tau}\right| = 1$，所以上式可化简为：

$$\boxed{|H(j\omega)| \le \int_{-\infty}^{+\infty} |h(\tau)| \, d\tau}$$

若要保证 $|H(j\omega)|$ 是一个有界的确定值（即 $H(j\omega)$ 存在且不发散），必须满足：

$$\int_{-\infty}^{+\infty} |h(\tau)| \, d\tau < \infty$$

### 3. 结论

这正是 **系统绝对可积（System Absolutely Integrable）** 的条件，在信号与系统中，这等价于 **系统必须是稳定系统 (Stable System)**。

- **结论**：**只有稳定系统，其频率响应** $H(j\omega)$ **才存在。**

## 三、 经典例题：一阶系统的频率响应计算

### 1. 题目

已知一个 LTI 系统的冲激响应为 $h(t) = e^{-at} u(t)$，其中常数 $a > 0$。求该系统的频率响应 $H(j\omega)$。

> **前置思考**：为什么要限定 $a > 0$？
>
> - 如果 $a < 0$，当 $t \to +\infty$ 时，$e^{-at}$ 会趋于无穷大，系统发散（不稳定），其频率响应将不存在。
> - 只有 $a > 0$，系统在时域上随时间逐渐衰减（Decay），系统稳定，积分才收敛。

### 2. 计算过程

将 $h(\tau) = e^{-a\tau} u(\tau)$ 代入频率响应公式：

$$H(j\omega) = \int_{-\infty}^{+\infty} e^{-a\tau} u(\tau) e^{-j\omega\tau} \, d\tau$$

利用单位阶跃函数 $u(\tau)$ 的性质（在 $\tau < 0$ 时为 $0$，在 $\tau \ge 0$ 时为 $1$），我们可以将积分区间缩减至 $[0, +\infty)$：

$$H(j\omega) = \int_{0}^{+\infty} e^{-a\tau} \cdot 1 \cdot e^{-j\omega\tau} \, d\tau$$

合并指数项：

$$H(j\omega) = \int_{0}^{+\infty} e^{-(a + j\omega)\tau} \, d\tau$$

求解该定积分：

$$H(j\omega) = \left[ \frac{1}{-(a + j\omega)} e^{-(a + j\omega)\tau} \right]_{0}^{+\infty}$$

分别代入上限 $+\infty$ 和下限 $0$：

- **代入上限** $\tau \to +\infty$：

  $$e^{-(a + j\omega)\tau} = e^{-a\tau} \cdot e^{-j\omega\tau}$$

  由于 $a > 0$，当 $\tau \to +\infty$ 时，实指数部分 $e^{-a\tau} \to 0$。虽然虚指数部分 $e^{-j\omega\tau}$ 是一个在单位圆上旋转的悬波（无法确定具体取值），但由于乘以了趋于 $0$ 的实数项，整体极限趋于 $0$：

  $$\lim_{\tau \to +\infty} e^{-(a + j\omega)\tau} = 0$$

- **代入下限** $\tau = 0$：

  $$e^{-(a + j\omega) \cdot 0} = e^0 = 1$$

将上述结果代入定积分公式中：

$$H(j\omega) = \frac{1}{-(a + j\omega)} \cdot (0 - 1) = \frac{1}{a + j\omega}$$

### 3. 结论

对于一阶系统 $h(t) = e^{-at} u(t) \quad (a>0)$，其频率响应为：

$$\boxed{H(j\omega) = \frac{1}{a + j\omega}}$$

## 四、 重点解析：相频与幅频分析（攻克“并不理解”部分的转换原理）

在你的笔记中，你对一阶系统（设 $a = 1$ 时）得到的频率响应 $H(j\omega) = \frac{1}{1 + j\omega}$，在变换为模与相角时写道“**并不理解**”：

$$H(j\omega) = \frac{1}{A e^{j\arctan(\omega)}} \quad \text{（不理解此处）}$$

下面我们用**复数的极坐标形式**为你进行彻底的数学拆解。

### 1. 分母的极坐标表示法

分母是一个复数：$z = 1 + j\omega$。在复平面上，其实部为 $1$，虚部为 $\omega$。

任何复数 $z = x + jy$ 都可以写成极坐标形式（指数形式）：

$$z = |z| e^{j\theta}$$

其中：

- **模（Magnitude）**：

  $$|z| = A = \sqrt{x^2 + y^2} = \sqrt{1^2 + \omega^2}$$

- **相角（Phase/Angle）**：

  $$\theta = \angle z = \arctan\left(\frac{y}{x}\right) = \arctan\left(\frac{\omega}{1}\right) = \arctan(\omega)$$

因此，分母可以写为：

$$1 + j\omega = \sqrt{1 + \omega^2} \, e^{j\arctan(\omega)}$$

### 2. 整体频率响应的化简

现在我们把分母的极坐标形式代回 $H(j\omega)$ 中：

$$H(j\omega) = \frac{1}{1 + j\omega} = \frac{1}{\sqrt{1 + \omega^2} \, e^{j\arctan(\omega)}}$$

将分母的指数项移到分子（指数变号）：

$$H(j\omega) = \frac{1}{\sqrt{1 + \omega^2}} \, e^{-j\arctan(\omega)}$$

根据欧拉公式和复数定义，任何系统频响都可以表示为：

$$H(j\omega) = |H(j\omega)| e^{j \angle H(j\omega)}$$

对比上式，我们可以清晰地分出**幅频响应（模）\**和\**相频响应（相角）**：

#### (1) 幅频响应 (Magnitude Response)

$$\boxed{|H(j\omega)| = \frac{1}{\sqrt{1 + \omega^2}}}$$

- 当 $\omega = 0$ 时，$|H(j0)| = 1$。
- 当 $\omega = 1$ 时，$|H(j1)| = \frac{1}{\sqrt{2}} \approx 0.707$ （此频率通常被称为 **3dB 截止频率**）。
- 当 $\omega \to +\infty$ 时，$|H(j\omega)| \to 0$。
- **物理意义**：该系统允许低频信号通过，抑制高频信号，这是一个典型的**低通滤波器 (Low-pass Filter)**。其幅频特性曲线呈单调递减趋势（如下图 hand-drawn 曲线所示）。

```
  |H(jω)|
    ^
1.0 |------\
    |       \
0.7 |        \ (ω = 1)
    |         \
    +-------------------> ω
    0         1
```

#### (2) 相频响应 (Phase Response)

$$\boxed{\angle H(j\omega) = -\arctan(\omega)}$$

- 当 $\omega = 0$ 时，$\angle H(j0) = -\arctan(0) = 0$。
- 当 $\omega = 1$ 时，$\angle H(j1) = -\arctan(1) = -45^\circ$（或 $-\frac{\pi}{4}$）。
- 当 $\omega \to +\infty$ 时，$\angle H(j\omega) \to -90^\circ$（或 $-\frac{\pi}{2}$）。
- **物理意义**：系统对信号产生相位滞后，随着频率 $\omega$ 的增加，相位滞后从 $0^\circ$ 逐渐增大并趋近于 $-90^\circ$。

## 五、 拓展与补充例题（来自参考视频）

为了保证你知识体系的完整性，这里补充了视频中提到的另外三个关键例题：

### 拓展例题 1：积分器系统（$a=0$ 的临界发散情况）

如果一阶系统中的常数 $a = 0$，即系统的冲激响应为：

$$h(t) = u(t) \quad \text{（理想积分器）}$$

我们判断其频率响应是否存在：

$$\int_{-\infty}^{+\infty} |h(\tau)| \, d\tau = \int_{0}^{+\infty} 1 \, d\tau = +\infty$$

- **结论**：该积分不收敛，系统是不稳定的（属于临界稳定）。因此，其传统的傅里叶变换频率响应积分在普通函数意义下**不存在**（在广义函数意义下需借助 $\delta(\omega)$ 描述，即 $H(j\omega) = \frac{1}{j\omega} + \pi\delta(\omega)$）。

### 拓展例题 2：理想延迟系统 (Ideal Delay System)

#### 1. 题目

一个理想延迟系统满足：$y(t) = x(t - t_d)$，求其频率响应。

#### 2. 求解

首先确定该系统的冲激响应 $h(t)$：

$$h(t) = \delta(t - t_d)$$

代入频率响应公式：

$$H(j\omega) = \int_{-\infty}^{+\infty} \delta(\tau - t_d) e^{-j\omega\tau} \, d\tau$$

利用冲击函数的**抽样性质 (Sifting Property)**，积分结果直接等于被积函数在 $\tau = t_d$ 处的值：

$$\boxed{H(j\omega) = e^{-j\omega t_d}}$$

#### 3. 幅频与相频分析

- **幅频响应**：$|H(j\omega)| = |e^{-j\omega t_d}| = 1$ （全通系统，所有频率成分无损通过）。
- **相频响应**：$\angle H(j\omega) = -\omega t_d$ （相角与频率成正比，即**线性相位**）。

### 拓展例题 3：周期信号输入下的系统响应分析

若系统的输入 $x(t)$ 是一个周期为 $T_0$ 的周期信号，可以展开为傅里叶级数：

$$x(t) = \sum_{k=-\infty}^{+\infty} a_k e^{jk\omega_0 t} \quad \left(\omega_0 = \frac{2\pi}{T_0}\right)$$

因为系统是线性时不变（LTI）系统，由于频率响应的性质，每个单频成分 $e^{jk\omega_0 t}$ 对应的输出为 $H(jk\omega_0) e^{jk\omega_0 t}$。

根据叠加原理，系统的总输出 $y(t)$ 为：

$$\boxed{y(t) = \sum_{k=-\infty}^{+\infty} a_k H(jk\omega_0) e^{jk\omega_0 t}}$$

> **应用总结**：只要知道了系统的频率响应 $H(j\omega)$，就能轻松求出任何周期信号或非周期信号通过系统后的时域输出，这就是频域分析的强大之处。

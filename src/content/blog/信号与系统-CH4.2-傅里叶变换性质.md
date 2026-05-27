---
title: "信号与系统-CH4.2-傅里叶变换性质"
slug: "信号与系统-CH4.2-傅里叶变换性质"
description: "信号与系统-CH4.2-傅里叶变换性质，待补充摘要。"
pubDate: 2026-05-27
updatedDate: 2026-05-27
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

【【公开课】 信號與系統 - 臺灣科技大學 - 黃騰毅教授】 https://www.bilibili.com/video/BV1PE411X7b8/?p=21&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

https://gemini.google.com/app/a40e1a76ffa52904

![image-20260527172506409](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527172506409.png)

# 傅里叶变换性质与周期信号谱分析整理笔记

## 导言：如何“转个弯”用傅里叶变换解决周期信号？

在之前的学习中，我们通常使用傅里叶级数（FS）**来分析周期信号（Periodic Signals），而使用**傅里叶变换（FT）来分析非周期信号（Aperiodic Signals）。

然而，**傅里叶变换实际上可以同时应用到周期和非周期信号上。** 遇到周期信号时，我们需要“转个弯”：**先用傅里叶级数将其展开为多个复指数单频分量，再通过引入狄拉克冲激函数** $\delta(\omega)$ **分别对每个分量求傅里叶变换。**

## 一、 周期信号的傅里叶变换

### 1. 理论推导

一个周期为 $T_0$ 的连续周期信号 $x(t)$ 可以展开为指数形式的傅里叶级数：

$$x(t) = \sum_{k=-\infty}^{+\infty} a_k e^{j k \omega_0 t} \quad \left(\text{其中 } \omega_0 = \frac{2\pi}{T_0}\right)$$

我们知道，单频复指数信号 $e^{j \omega_0 t}$ 的连续傅里叶变换（FT）为：

$$\mathcal{F}\{e^{j \omega_0 t}\} = 2\pi \delta(\omega - \omega_0)$$

根据傅里叶变换的**线性性质**，对周期信号 $x(t)$ 的两边同时求傅里叶变换，可得：

$$\boxed{X(j\omega) = \sum_{k=-\infty}^{+\infty} 2\pi a_k \delta(\omega - k \omega_0)}$$

### 2. 经典例题：连续冲激串（Impulse Train）的傅里叶变换

**【题目】** 已知连续冲激串信号 $p(t) = \sum_{n=-\infty}^{+\infty} \delta(t - n T_s)$，求其傅里叶变换 $P(j\omega)$。

**【标准求解步骤 (SOP)】**

- **Step 1：变成傅里叶级数形式** 由于 $p(t)$ 是以 $T_s$ 为周期的信号，其基波角频率为 $\omega_s = \frac{2\pi}{T_s}$。我们可以将其表示为傅里叶级数：

  $$p(t) = \sum_{k=-\infty}^{+\infty} a_k e^{j k \omega_s t}$$

- **Step 2：求取傅里叶系数** $a_k$ 取一个周期区间 $\left[-\frac{T_s}{2}, \frac{T_s}{2}\right]$ 进行积分。由于该区间内只有 $t=0$ 处有一个冲激信号 $\delta(t)$：

  $$a_k = \frac{1}{T_s} \int_{-T_s/2}^{T_s/2} \delta(t) e^{-j k \omega_s t} dt$$

  根据冲激函数的**筛选性质**（Sifting Property），当 $t=0$ 时，$e^{0} = 1$，上式可化简为：

  $$a_k = \frac{1}{T_s} \cdot 1 = \frac{1}{T_s}$$

  由此得到 $p(t)$ 的傅里叶级数展开式为：

  $$p(t) = \sum_{k=-\infty}^{+\infty} \frac{1}{T_s} e^{j k \omega_s t}$$

- **Step 3：对每一项求傅里叶变换** 利用上面推导出的周期信号傅里叶变换通用公式，直接求得：

  $$P(j\omega) = \sum_{k=-\infty}^{+\infty} \frac{1}{T_s} \cdot 2\pi \delta(\omega - k \omega_s) = \boxed{\sum_{k=-\infty}^{+\infty} \frac{2\pi}{T_s} \delta(\omega - k \omega_s)}$$

**【物理意义】** 时域上的周期冲激串在频域上**依然是冲激串**。时域里的脉冲间隔为 $T_s$，而频域里的频谱脉冲间隔为 $\omega_s = \frac{2\pi}{T_s}$。二者的疏密程度呈反比关系。

![image-20260527170512007](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527170512007.png)

## 二、 时移性质 (Delay Property)

### 1. 数学表述

若 $x(t) \longleftrightarrow X(j\omega)$，则：

$$\boxed{x(t - t_d) \longleftrightarrow e^{-j\omega t_d} X(j\omega)}$$

### 2. 数学证明

根据傅里叶变换的定义：

$$\mathcal{F}\{x(t - t_d)\} = \int_{-\infty}^{+\infty} x(t - t_d) e^{-j\omega t} dt$$

令 $\tau = t - t_d$，则 $t = \tau + t_d$，微分项 $dt = d\tau$。当 $t \to \pm\infty$ 时，$\tau \to \pm\infty$ 保持不变。代入积分得：

$$\mathcal{F}\{x(t - t_d)\} = \int_{-\infty}^{+\infty} x(\tau) e^{-j\omega (\tau + t_d)} d\tau = e^{-j\omega t_d} \int_{-\infty}^{+\infty} x(\tau) e^{-j\omega \tau} d\tau = e^{-j\omega t_d} X(j\omega)$$

证明完毕。

![延迟性质](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527170943212.png)

### 3. 系统角度的理解 (卷积思想)

除了公式形式证明外，还可以站在 LTI 系统的角度来理解时移：

1. 信号延迟 $t_d$ 可以看作是将输入信号 $x(t)$ 送入一个“理想延迟系统”。该系统的单位冲激响应为 $h(t) = \delta(t - t_d)$。

2. 在时域上，输出信号 $y(t)$ 是输入与冲激响应的卷积：

   $$y(t) = x(t) * \delta(t - t_d) = x(t - t_d)$$

3. 理想延迟系统的频率响应 $H(j\omega)$ 是 $h(t)$ 的傅里叶变换：

   $$H(j\omega) = \mathcal{F}\{\delta(t - t_d)\} = e^{-j\omega t_d}$$

4. 根据时域卷积定理，频域对应相乘：

   $$Y(j\omega) = X(j\omega) \cdot H(j\omega) = X(j\omega) e^{-j\omega t_d}$$

### 4. 经典应用例题

**【题目】** 已知单边指数衰减信号 $e^{-at} u(t) \longleftrightarrow \frac{1}{a + j\omega} \ (a > 0)$。求延迟信号 $e^{-a(t-5)} u(t-5)$ 的傅里叶变换。

**【解答】** 观察可知，待求信号相当于原信号 $x(t) = e^{-at} u(t)$ 向右平移了 $t_d = 5$ 个单位。 直接应用时移性质：

$$\mathcal{F}\{e^{-a(t-5)} u(t-5)\} = \boxed{\frac{1}{a + j\omega} e^{-j 5 \omega}}$$

## 三、 频移性质 (Frequency Shift)

### 1. 数学表述

若 $x(t) \longleftrightarrow X(j\omega)$，则：

$$\boxed{x(t) e^{j \omega_0 t} \longleftrightarrow X(j(\omega - \omega_0))}$$

> **💡 口诀提示（时移同，频移反）：**
>
> - **时移**：自变量减 $t_d$，对应频域乘上带负号的指数项 $e^{-j\omega t_d}$。
> - **频移**：时域乘上带正号的指数项 $e^{j\omega_0 t}$，对应频域自变量减去 $\omega_0$，即 $X(j(\omega - \omega_0))$。

### 2. 数学证明

对方程式左边求积分：

$$\mathcal{F}\{x(t) e^{j \omega_0 t}\} = \int_{-\infty}^{+\infty} \left[ x(t) e^{j \omega_0 t} \right] e^{-j\omega t} dt = \int_{-\infty}^{+\infty} x(t) e^{-j(\omega - \omega_0) t} dt$$

对比傅里叶变换定义式 $X(j\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j\omega t} dt$，上式中的 $\omega$ 被代换为了 $\omega - \omega_0$。 故：

$$\mathcal{F}\{x(t) e^{j \omega_0 t}\} = X(j(\omega - \omega_0))$$

证明完毕。

![image-20260527171548051](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527171548051.png)

### 3. 补充应用例题（调制与频谱搬移）

**【题目】** 已知一个基带信号 $y(t) = \frac{\sin(7t)}{\pi t}$。

1. 求其傅里叶变换 $Y(j\omega)$。
2. 若将该信号乘上复指数信号 $e^{j\omega_0 t}$，求调制后信号 $g(t) = y(t) e^{j\omega_0 t}$ 的频谱。

**【解答】**

1. 信号 $y(t) = \frac{\sin(7t)}{\pi t}$ 是典型的 Sinc 函数形式。我们知道 $\frac{\sin(Wt)}{\pi t} \longleftrightarrow \text{rect}\left(\frac{\omega}{2W}\right)$。 这里 $W = 7$，故其频谱 $Y(j\omega)$ 是一个低通对称矩形谱：

   $$Y(j\omega) = \begin{cases} 1, & |\omega| < 7 \\ 0, & |\omega| > 7 \end{cases}$$

2. 根据频移性质，调制后信号 $g(t) = y(t) e^{j\omega_0 t}$ 的频谱将整体平移 $\omega_0$：

   $$G(j\omega) = Y(j(\omega - \omega_0)) = \begin{cases} 1, & \omega_0 - 7 < \omega < \omega_0 + 7 \\ 0, & \text{其他} \end{cases}$$

**【图形化展示说明】** 在时域相乘前，原频谱矩形中心位于 $\omega = 0$ 处，宽度为 $14$（范围为 $[-7, 7]$）；时域乘上复指数信号后，整个三角形或矩形频谱将整体搬移，使得新频谱中心对准 $\omega_0$：

```
       原基带频谱 Y(jω)                         调制后频谱 G(jω)
            ┌───┐                                    ┌───┐
            │   │                                    │   │
     ───────┴───┴─────── ──> ω                ───────┴───┴─────── ──> ω
           -7   7                                  ω₀-7 ω₀+7
            (中心为 0)                              (中心为 ω₀)
```

## 四、 尺度变换性质 (Scaling Property)

### 1. 数学表述

若 $x(t) \longleftrightarrow X(j\omega)$，对于任意非零实数 $a$：

$$\boxed{x(at) \longleftrightarrow \frac{1}{|a|} X\left(j\frac{\omega}{a}\right)}$$

### 2. 分情况严格证明

根据定义：

$$\mathcal{F}\{x(at)\} = \int_{-\infty}^{+\infty} x(at) e^{-j\omega t} dt$$

设 $\tau = at$，则 $t = \frac{\tau}{a}$ 且 $dt = \frac{d\tau}{a}$。

- **情况 1：当** $a > 0$ **时**： 由于 $a$ 为正数，积分上下限保持不变（$t \to \pm\infty \implies \tau \to \pm\infty$）：

  $$\mathcal{F}\{x(at)\} = \int_{-\infty}^{+\infty} x(\tau) e^{-j\omega \frac{\tau}{a}} \frac{d\tau}{a} = \frac{1}{a} \int_{-\infty}^{+\infty} x(\tau) e^{-j\left(\frac{\omega}{a}\right) \tau} d\tau = \frac{1}{a} X\left(j\frac{\omega}{a}\right)$$

- **情况 2：当** $a < 0$ **时**： 由于 $a$ 为负数，积分上下限颠倒（当 $t \to -\infty$ 时 $\tau \to +\infty$，反之亦然）：

  $$\mathcal{F}\{x(at)\} = \int_{+\infty}^{-\infty} x(\tau) e^{-j\omega \frac{\tau}{a}} \frac{d\tau}{a} = -\frac{1}{a} \int_{-\infty}^{+\infty} x(\tau) e^{-j\left(\frac{\omega}{a}\right) \tau} d\tau$$

  由于 $a < 0$，其绝对值满足 $-a = |a| \implies -\frac{1}{a} = \frac{1}{|a|}$。 因此：

  $$\mathcal{F}\{x(at)\} = \frac{1}{|a|} X\left(j\frac{\omega}{a}\right)$$

综合以上两种情况：

$$\mathcal{F}\{x(at)\} = \frac{1}{|a|} X\left(j\frac{\omega}{a}\right)$$

证明完毕。

![image-20260527171744698](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527171744698.png)

### 3. 物理意义：时频互补

1. **时域压缩（变瘦），频域展宽（变胖）**：若 $|a| > 1$，说明信号在时域上被压缩（信号变化更快），其频带范围会向外扩展，幅度同时衰减为 $\frac{1}{|a|}$。因为更陡峭的时域跳变需要更丰富的高频分量。
2. **时域展宽（变胖），频域压缩（变瘦）**：若 $0 < |a| < 1$，信号在时域被放慢拉宽，在频域其带宽则会变窄（高频分量减少）。
3. **极限物理推论**： 时域高度集中的冲激信号 $\delta(t)$（时宽接近 $0$），其傅里叶变换在全频域值为 $1$（带宽为无无穷大）。这印证了“**时间越短，频宽越宽**”。在高速数字信号传输中，由于开关切换速度极快，系统所要求的传输带宽必须非常巨大。

![image-20260527171825391](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527171825391.png)

### 4. 补充应用例题

**【题目】** 已知双边指数衰减信号 $x(t) = e^{-|t|}$ 的傅里叶变换为 $X(j\omega) = \frac{2}{1 + \omega^2}$。求信号 $y(t) = e^{-|3t|}$ 的傅里叶变换。

**【解答】** 显然，这里 $a = 3$。应用尺度变换公式可得：

$$Y(j\omega) = \frac{1}{|3|} X\left(j\frac{\omega}{3}\right) = \frac{1}{3} \cdot \frac{2}{1 + \left(\frac{\omega}{3}\right)^2} = \frac{1}{3} \cdot \frac{2}{\frac{9 + \omega^2}{9}} = \frac{1}{3} \cdot \frac{18}{9 + \omega^2} = \boxed{\frac{6}{9 + \omega^2}}$$

## 五、 时域微分性质 (Differential Property)

### 1. 数学表述

若 $x(t) \longleftrightarrow X(j\omega)$，则信号导数的傅里叶变换为：

$$\boxed{\frac{d x(t)}{dt} \longleftrightarrow j\omega X(j\omega)}$$

### 2. 数学证明（利用反变换公式）

利用傅里叶反变换（Synthesis Equation）定义式：

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega$$

对等式两边关于时间 $t$ 求导：

$$\frac{d x(t)}{dt} = \frac{d}{dt} \left[ \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) e^{j\omega t} d\omega \right]$$

将导数算子移入积分号内部（由于积分变量是 $\omega$，因此求导只对包含 $t$ 的指数项起作用）：

$$\frac{d x(t)}{dt} = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\omega) \left( \frac{d(e^{j\omega t})}{dt} \right) d\omega = \frac{1}{2\pi} \int_{-\infty}^{+\infty} \left[ j\omega X(j\omega) \right] e^{j\omega t} d\omega$$

对比反变换格式，括号中的部分 $\left[ j\omega X(j\omega) \right]$ 显然就是微分后信号 $\frac{dx(t)}{dt}$ 的傅里叶变换。 故：

$$\mathcal{F}\left\{\frac{d x(t)}{dt}\right\} = j\omega X(j\omega)$$

证明完毕。

![image-20260527172005099](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527172005099.png)

### 3. 经典例题

**【题目】** 已知单边指数信号 $x(t) = e^{-at} u(t) \longleftrightarrow \frac{1}{a + j\omega} \ (a > 0)$。求信号 $g(t) = \frac{d}{dt} \left[ e^{-at} u(t) \right]$ 的傅里叶变换。

**【解答】** 利用时域微分性质，由于微分一次对应在频域乘以一个 $j\omega$，因此：

$$\mathcal{F}\left\{\frac{d}{dt} (e^{-at} u(t))\right\} = j\omega \cdot \mathcal{F}\{e^{-at} u(t)\} = \boxed{\frac{j\omega}{a + j\omega}}$$

## 六、 卷积性质 (Convolution Property)

### 1. 数学表述

若 $x(t) \longleftrightarrow X(j\omega)$，$h(t) \longleftrightarrow H(j\omega)$，则：

$$\boxed{x(t) * h(t) \longleftrightarrow X(j\omega) \cdot H(j\omega)}$$

> **💡 核心结论：** 时域的卷积运算，转换到频域之后简化成了普通的**代数乘法**。这极大地便利了对线性时不变（LTI）系统输出的分析与求解。

### 2. 经典例题：双 Sinc 信号的时域卷积

**【题目】** 已知时域信号 $x_1(t) = \frac{\sin(100\pi t)}{\pi t}$，系统冲激响应 $h(t) = \frac{\sin(200\pi t)}{\pi t}$。求该系统的时域输出 $y(t) = x_1(t) * h(t)$。

**【标准求解步骤 (SOP)】**

- **Step 1：转换到频域中求乘积** 如果直接在时域做卷积积分，计算会非常繁琐。我们“转个弯”，利用卷积定理在频域求解：

  $$Y(j\omega) = X_1(j\omega) \cdot H(j\omega)$$

- **Step 2：求取输入与频响的矩形谱** 根据标准变换对 $\frac{\sin(Wt)}{\pi t} \longleftrightarrow \text{rect}\left(\frac{\omega}{2W}\right)$：

  - 对于 $x_1(t)$，基带半带宽为 $W_1 = 100\pi$：

    $$X_1(j\omega) = \begin{cases} 1, & |\omega| < 100\pi \\ 0, & |\omega| > 100\pi \end{cases}$$

  - 对于 $h(t)$，基带半带宽为 $W_2 = 200\pi$：

    $$H(j\omega) = \begin{cases} 1, & |\omega| < 200\pi \\ 0, & |\omega| > 200\pi \end{cases}$$

- **Step 3：频域矩形谱相乘** 在频域中，这是一个“窄矩形”乘以“宽矩形”的过程：

  - $X_1(j\omega)$ 的频带在 $[-100\pi, 100\pi]$ 之间，高度为 $1$。
  - $H(j\omega)$ 的频带在 $[-200\pi, 200\pi]$ 之间，高度为 $1$。

  两者的重叠乘积取决于窄区间部分。因此相乘结果仍然等于原窄矩形本身：

  $$Y(j\omega) = X_1(j\omega) \cdot H(j\omega) = \begin{cases} 1 \cdot 1 = 1, & |\omega| < 100\pi \\ 0, & |\omega| > 100\pi \end{cases} = X_1(j\omega)$$

```
     X₁(jω) (输入频谱)               H(jω) (系统频响)              Y(jω) (输出频谱)
         ┌───┐                          ┌───────┐                      ┌───┐
         │ 1 │                          │   1   │                      │ 1 │
   ──────┴───┴──────              ──────┴───────┴──────          ──────┴───┴──────
       -100π 100π                     -200π   200π                   -100π 100π
```

- **Step 4：求反变换得到输出** $y(t)$ 由于输出频谱 $Y(j\omega)$ 与输入频谱 $X_1(j\omega)$ 完全相同，直接进行反变换可得：

  $$y(t) = \mathcal{F}^{-1}\{Y(j\omega)\} = \boxed{\frac{\sin(100\pi t)}{\pi t}}$$

**【物理意义】** 当一个带宽较窄的低通信号（小盒子）通过一个通带更宽的理想低通系统（大盒子）时，由于信号中所有的频域分量均能毫无损伤地通过该系统，因此输出信号将完美地“维持原状”。

## 七、 时域相乘性质 (Multiplication Property)

### 1. 数学表述

若 $x(t) \longleftrightarrow X(j\omega)$，$y(t) \longleftrightarrow Y(j\omega)$，则：

$$\boxed{x(t) \cdot y(t) \longleftrightarrow \frac{1}{2\pi} X(j\omega) * Y(j\omega)}$$

> **⚠️ 注意：** 时域的乘法对应频域的**卷积**运算，但频域结果前必须带上系数 $\frac{1}{2\pi}$。这是由于傅里叶反变换公式中含有分母 $2\pi$ 导致的。

### 2. 数学推导与证明

设 $w(t) = x(t) y(t)$。求其傅里叶变换：

$$W(j\omega) = \int_{-\infty}^{+\infty} x(t) y(t) e^{-j\omega t} dt$$

将 $x(t)$ 代换为它的傅里叶反变换形式（为了不与外层自变量混淆，内层反变换频域积分变量设为 $\theta$）：

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\theta) e^{j\theta t} d\theta$$

代入 $W(j\omega)$ 积分中：

$$W(j\omega) = \int_{-\infty}^{+\infty} \left[ \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\theta) e^{j\theta t} d\theta \right] y(t) e^{-j\omega t} dt$$

交换积分顺序，把与 $t$ 无关的项（包括 $\theta$ 的单项）提到最外层：

$$W(j\omega) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\theta) \left[ \int_{-\infty}^{+\infty} y(t) e^{-j(\omega - \theta) t} dt \right] d\theta$$

注意到方括号内的积分，其核心格式正好符合 $y(t)$ 傅里叶变换定义在频率为 $\omega - \theta$ 处的值：

$$\int_{-\infty}^{+\infty} y(t) e^{-j(\omega - \theta) t} dt = Y(j(\omega - \theta))$$

代回，得：

$$W(j\omega) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} X(j\theta) Y(j(\omega - \theta)) d\theta$$

根据频域积分卷积公式定义，上式可以写为：

$$W(j\omega) = \frac{1}{2\pi} X(j\omega) * Y(j\omega)$$

证明完毕。

![image-20260527172441279](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4.2-%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2%E6%80%A7%E8%B4%A8.assets/image-20260527172441279.png)

### 3. 补充经典应用例题：正弦幅度调制（AM）

**【题目】** 在通信原理中，发送端信号需要搬移到高频带才能发射。设基带信号为 $x(t)$，其频谱为 $X(j\omega)$，载波信号为余弦信号 $y(t) = \cos(\omega_c t)$。求调制信号 $w(t) = x(t) \cos(\omega_c t)$ 的傅里叶变换 $W(j\omega)$。

**【解答】**

1. 确定载波信号的频谱：

   $$y(t) = \cos(\omega_c t) \longleftrightarrow Y(j\omega) = \pi [\delta(\omega - \omega_c) + \delta(\omega + \omega_c)]$$

2. 采用相乘性质求频域卷积：

   $$W(j\omega) = \frac{1}{2\pi} X(j\omega) * Y(j\omega) = \frac{1}{2\pi} X(j\omega) * \left( \pi [\delta(\omega - \omega_c) + \delta(\omega + \omega_c)] \right)$$

   提取常数因子：

   $$W(j\omega) = \frac{1}{2} X(j\omega) * \left[ \delta(\omega - \omega_c) + \delta(\omega + \omega_c) \right]$$

3. 根据冲激函数的卷积平移性质 $A(\omega) * \delta(\omega - \omega_0) = A(\omega - \omega_0)$，展开上式得：

   $$W(j\omega) = \boxed{\frac{1}{2} \left[ X(j(\omega - \omega_c)) + X(j(\omega + \omega_c)) \right]}$$

**【物理物理结论】** 时域中将信号乘以频率为 $\omega_c$ 的余弦信号，在频域中代表将原低通频谱 $X(j\omega)$ 均分为两半，分别搬移（调制）到 $\pm \omega_c$ 的高频位置。

## 八、 傅里叶变换基本性质汇总表

| 性质名称     | 时域表示 $x(t)$         | 频域表示 $X(j\omega)$                                     | 备注说明                                |
| ------------ | ----------------------- | --------------------------------------------------------- | --------------------------------------- |
| **线性性质** | $a x_1(t) + b x_2(t)$   | $a X_1(j\omega) + b X_2(j\omega)$                         | 积分运算的天然线性特性                  |
| **时移性质** | $x(t - t_d)$            | $X(j\omega) e^{-j\omega t_d}$                             | 时延对应频域的相角位移                  |
| **频移性质** | $x(t) e^{j \omega_0 t}$ | $X(j(\omega - \omega_0))$                                 | 频移代表调制，符号与时移相反            |
| **尺度变换** | $x(at)$                 | $\frac{1}{\vert a \vert} X\left(j\frac{\omega}{a}\right)$ | 时缩频伸；时伸频缩（互补性）            |
| **时域微分** | $\frac{d x(t)}{dt}$     | $j\omega X(j\omega)$                                      | 微分简化为频域的代数相乘                |
| **时域卷积** | $x(t) * h(t)$           | $X(j\omega) H(j\omega)$                                   | LTI 系统分析核心定理                    |
| **时域相乘** | $x(t) y(t)$             | $\frac{1}{2\pi} X(j\omega) * Y(j\omega)$                  | 相乘对应卷积，注意系数 $\frac{1}{2\pi}$ |

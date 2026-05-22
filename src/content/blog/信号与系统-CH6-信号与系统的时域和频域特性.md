---
title: "信号与系统-CH6-信号与系统的时域和频域特性"
slug: "信号与系统-CH6-信号与系统的时域和频域特性"
description: "信号与系统-CH6-信号与系统的时域和频域特性，待补充摘要。"
pubDate: 2026-05-22
updatedDate: 2026-05-22
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
---

<iframe src="https://drive.google.com/file/d/1IdY6EOJnn5WtIbNj7mA5e8ldCib4b6Tz/preview" width="640" height="480"></iframe>



- 【【公开课】 信號與系統 - 臺灣科技大學 - 黃騰毅教授】 https://www.bilibili.com/video/BV1PE411X7b8/?p=12&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

# 第 6 章 信号与系统的时域和频域特性

## 6.1 傅里叶变换的模和相位表示

对于一个线性时不变（LTI）系统，除了时域的卷积表示法外，利用频域的系统频率响应是另一种极具物理直观的分析方法。在频域中，时域的微分、差分和卷积运算均转化为代数运算，极大地简化了系统响应的求解。

一般来说，信号和系统的傅里叶变换是复数值，可以用其**模（幅度）\**和\**相位**来表示。

### 6.1.1 极坐标表示与 LTI 系统的响应

对于连续时间信号，其傅里叶变换可以写成极坐标形式：

$$X(j\omega) = |X(j\omega)| e^{j\angle X(j\omega)}$$

由于 LTI 系统的输入输出关系在频域满足：

$$Y(j\omega) = X(j\omega) H(j\omega)$$

因此，输出信号的幅频与相频响应分别满足：

1. **幅度关系（改变信号各频率分量的相对大小）：**

   $$|Y(j\omega)| = |X(j\omega)| \cdot |H(j\omega)|$$

2. **相位关系（改变信号各频率分量的相对相位关系）：**

   $$\angle Y(j\omega) = \angle X(j\omega) + \angle H(j\omega)$$

### 6.1.2 相位对信号时域波形的影响

如果一个系统仅改变输入信号的相位，而保持各频率分量的幅度不变（即幅度全通系统 $|H(j\omega)| = 1$），时域波形会发生怎样的变化？这取决于系统的相频响应是否为**线性**。

#### 1. 常数相位移（Constant Phase Shift）与波形畸变

若系统在所有正频率上引入一个恒定的相移 $-\theta_0$。为了保证实信号的共轭对称性（即 $\angle H(-j\omega) = -\angle H(j\omega)$），其相频响应必须满足：

$$\angle H(j\omega) = -\theta_0 \operatorname{sgn}(\omega)$$

> **【经典例题】常数相移对多频率信号波形的影响**
>
> **设输入信号**：$x(t) = \cos(\omega_1 t) + \cos(\omega_2 t)$（包含两个不同的频率分量，$\omega_1 \neq \omega_2$）。
>
> **求解**：通过上述常数相移系统后的输出信号 $y(t)$。
>
> **完善过程与分析**： 每一个余弦分量均产生 $-\theta_0$ 的相移，因此输出信号为：
>
> $$y(t) = \cos(\omega_1 t - \theta_0) + \cos(\omega_2 t - \theta_0)$$
>
> 我们分析每个分量在时域上的实际延迟时间：
>
> - 频率为 $\omega_1$ 的分量，其时间延迟为：$t_1 = \frac{\theta_0}{\omega_1}$
> - 频率为 $\omega_2$ 的分量，其时间延迟为：$t_2 = \frac{\theta_0}{\omega_2}$
>
> 显而易见，因为 $\omega_1 \neq \omega_2$，所以 $t_1 \neq t_2$。
>
> **结论**：虽然各个分量的幅度没有改变，但由于不同频率成分的时域延迟不一致，各分量的时域相对位置发生了错位，导致输出波形 $y(t)$ 相比于输入波形 $x(t)$ 产生了**严重的相位畸变（Phase Distortion）**。

#### 2. 线性相位（Linear Phase）与无失真传输

若系统的相频响应与频率成正比，即：

$$\angle H(j\omega) = -\omega t_0$$

此时，频率响应可写为 $H(j\omega) = |H(j\omega)| e^{-j\omega t_0}$。若设系统为全通型（$|H(j\omega)| = 1$），则：

$$Y(j\omega) = X(j\omega) e^{-j\omega t_0}$$

根据傅里叶变换的时移性质，对应的时域输出为：

$$y(t) = x(t - t_0)$$

**结论**：所有频率分量的时间延迟均为常数 $t_0$（因为 $t_d = \frac{\omega t_0}{\omega} = t_0$）。信号在时域上仅仅发生整体的时间平移，而**波形完全不产生任何畸变**。这说明在线性系统设计中，**线性相位**是保持信号波形不变的关键条件。

### 6.1.3 群时延（Group Delay）

为了定量描述非线性相位系统对信号中不同频率成分造成的不同延迟，引入**群时延**的概念。

#### 1. 定义

- **连续时间系统**：

  $$\tau_g(\omega) = -\frac{d}{d\omega} \angle H(j\omega)$$

- **离散时间系统**：

  $$\tau_g(e^{j\omega}) = -\frac{d}{d\omega} \angle H(e^{j\omega})$$

#### 2. 物理意义

群时延代表了一个以某中心频率 $\omega_0$ 为中心的窄带信号（包络）通过系统时所经历的时域延迟。

- 若 $\tau_g(\omega) = t_0$（常数），说明系统具有线性相位，所有频率成分延时一致，无相位失真。
- 若 $\tau_g(\omega)$ 随频率变化，则不同频率的窄带信号延迟不同，会导致信号在时域上被拉宽或色散（Dispersion）。

## 6.2 理想频率选择性滤波器的时域特性

理想频率选择性滤波器在频域具有陡峭的截止特性，但在时域表现出明显的振荡和非因果性。

### 6.2.1 连续时间理想低通滤波器（Ideal LPF）

#### 1. 频域响应

设其截止频率为 $\omega_c$，系统响应定义为：

$$H(j\omega) = \begin{cases} 1, & |\omega| < \omega_c \\ 0, & |\omega| > \omega_c \end{cases}$$

#### 2. 时域冲激响应推导

通过逆傅里叶变换求解 $h(t)$：

$$h(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} H(j\omega) e^{j\omega t} d\omega = \frac{1}{2\pi} \int_{-\omega_c}^{\omega_c} 1 \cdot e^{j\omega t} d\omega$$

$$h(t) = \left. \frac{1}{2\pi} \cdot \frac{e^{j\omega t}}{jt} \right|_{-\omega_c}^{\omega_c} = \frac{e^{j\omega_c t} - e^{-j\omega_c t}}{2\pi jt} = \frac{\sin(\omega_c t)}{\pi t} = \frac{\omega_c}{\pi} \operatorname{sa}(\omega_c t)$$

其中，$\operatorname{sa}(x) = \frac{\sin x}{x}$（或写为 $\operatorname{sinc}$ 函数格式）。

### 6.2.2 离散时间理想低通滤波器

#### 1. 频域响应（以 $2\pi$ 为周期）

$$H(e^{j\omega}) = \begin{cases} 1, & |\omega| < \omega_c \\ 0, & \omega_c < |\omega| \le \pi \end{cases}$$

#### 2. 时域冲激响应推导

$$h[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} H(e^{j\omega}) e^{j\omega n} d\omega = \frac{1}{2\pi} \int_{-\omega_c}^{\omega_c} 1 \cdot e^{j\omega n} d\omega$$

$$h[n] = \left. \frac{1}{2\pi} \cdot \frac{e^{j\omega n}}{jn} \right|_{-\omega_c}^{\omega_c} = \frac{\sin(\omega_c n)}{\pi n}$$

### 6.2.3 时频对偶性与不确定性原理

分析 $h(t) = \frac{\sin(\omega_c t)}{\pi t}$（或 $h[n]$）的数学波形：

1. 冲激响应的第一个过零点发生在 $\omega_c t = \pi \implies t_1 = \frac{\pi}{\omega_c}$。

2. 包含大部分能量的时域主瓣宽度为：

   $$\Delta t = 2 t_1 = \frac{2\pi}{\omega_c}$$

**时频权衡规律**：

- **频域越窄，时域越宽**：若截止频率 $\omega_c$ 越小（频域越窄），主瓣宽度 $\Delta t$ 越宽，能量在时域分布越分散。
- **频域越宽，时域越窄**：若截止频率 $\omega_c$ 变大，主瓣变窄，时域过渡越快。当 $\omega_c \to \infty$ 时，时域冲激响应收敛为狄拉克冲激信号 $\delta(t)$。

### 6.2.4 非因果性与物理不可实现性

从理想低通滤波器的冲激响应 $h(t)$ 来看，由于对任意的 $t < 0$，都有 $h(t) \neq 0$，这意味着**系统在激励输入之前就已经产生了响应**。因此，理想滤波器是**非因果系统**，在物理上是无法直接实现的。

#### 物理实现的折中方案（因果近似）

为了得到因果系统，我们可以为理想滤波器引入一个线性相位延时 $t_0$：

$$H(j\omega) = e^{-j\omega t_0} \quad (|\omega| < \omega_c)$$

其冲激响应在时域整体右移：

$$h(t) = \frac{\sin\omega_c(t-t_0)}{\pi(t-t_0)}$$

若 $t_0$ 足够大，则当 $t < 0$ 时，$h(t)$ 的值已经衰减得极小。此时进行时域截断（将 $t < 0$ 的部分强制置零），便可以得到一个物理可实现的因果近似滤波器。 然而，这会带来两个代价：

1. **系统引入了传输时延** $t_0$：这对于要求实时响应的系统是不利的。
2. **吉布斯现象（Gibbs Phenomenon）**：时域截断等价于给系统乘上了一个时域窗函数，在频域表现为通带和阻带产生涟波（起伏），且过渡带变宽。

## 6.3 一阶连续时间系统的时域与频域特性

### 6.3.1 数学描述与响应推导

#### 1. 微分方程

一阶连续时间系统的输入输出关系由如下一阶微分方程描述：

$$\tau \frac{dy(t)}{dt} + y(t) = x(t) \quad (\tau > 0 \text{ 为时间常数})$$

#### 2. 系统频率响应

对微分方程两边取傅里叶变换：

$$\tau (j\omega) Y(j\omega) + Y(j\omega) = X(j\omega) \implies H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} = \frac{1}{1 + j\omega \tau}$$

#### 3. 冲激响应 $h(t)$

通过傅里叶反变换（或直接解微分方程在 $\delta(t)$ 下的零状态响应）：

$$h(t) = \frac{1}{\tau} e^{-t/\tau} u(t)$$

#### 4. 阶跃响应 $s(t)$

当输入 $x(t) = u(t)$ 时，利用积分关系 $s(t) = \int_{-\infty}^{t} h(\lambda) d\lambda$：

$$s(t) = \int_{0}^{t} \frac{1}{\tau} e^{-\lambda/\tau} d\lambda \, u(t) = \left( 1 - e^{-t/\tau} \right) u(t)$$

### 6.3.2 频域特性与 3dB 截止频率

分析 $H(j\omega) = \frac{1}{1 + j\omega \tau}$ 的幅频与相频响应：

- **幅频响应**：

  $$|H(j\omega)| = \frac{1}{\sqrt{1 + (\omega\tau)^2}}$$

- **相频响应**：

  $$\angle H(j\omega) = -\arctan(\omega\tau)$$

#### 3dB 截止频率（半功率带宽）

当频率满足 $\omega_c = \frac{1}{\tau}$ 时：

$$|H(j\omega_c)| = \frac{1}{\sqrt{1 + 1}} = \frac{1}{\sqrt{2}} \approx 0.707$$

系统的功率在该频率下降为低频（直流）功率的一半（即下降约 $3\text{dB}$）。此时相角为 $\angle H(j\omega_c) = -\arctan(1) = -45^\circ$。

### 6.3.3 时频特性折中

1. **时域角度（看时间常数** $\tau$**）**：
   - 阶跃响应 $s(t) = (1 - e^{-t/\tau})u(t)$ 上升到稳态值的 $63.2\%$ 需要的时间为 $t = \tau$；上升到 $90\%$ 约需要 $2.3\tau$。
   - $\tau$ 越小，时域响应收敛和上升得越快，系统的**时域快速性**越好。
2. **频域角度（看带宽** $\omega_c$**）**：
   - 带宽为 $\omega_c = \frac{1}{\tau}$。
   - $\tau$ 越小，截止频率 $\omega_c$ 越大，通频带越宽，允许通过的高频信号分量越多。

**结论**：一阶系统的“时域窄（快）”完美对应于“频域宽（带宽大）”。

### 6.3.4 一阶系统实例分析

> **【典型例题】一阶 RC 低通滤波器分析**
>
> 在如下图所示的 RC 串联电路中，输入为电压源 $x(t)$，输出为电容两端电压 $y(t)$。已知电阻阻值为 $R$，电容容值为 $C$。
>
> ```
>        R
>   o───[  ]───┬───o
>   +          │   +
>  x(t)      [C]  y(t)
>   -          │   -
>   o──────────┴───o
> ```
>
> **(a) 列出描述该系统的微分方程并确定时间常数** $\tau$**；** **(b) 求解系统的冲激响应** $h(t)$ **及阶跃响应** $s(t)$**；** **(c) 若要求电路的 3dB 截止频率为** $1000 \text{ rad/s}$**，RC 参数应满足什么关系？此时若输入** $x(t) = \cos(1000 t)$**，求稳态输出** $y(t)$**。**
>
> **【详细解答】**
>
> **(a)** 根据基尔霍夫电压定律（KVL），回路的电流为 $i(t) = C \frac{dy(t)}{dt}$。电阻两端电压为 $R \cdot i(t) = RC \frac{dy(t)}{dt}$。 因此回路方程为：
>
> $$RC \frac{dy(t)}{dt} + y(t) = x(t)$$
>
> 这是一个标准的一阶连续系统，时间常数为：
>
> $$\tau = RC$$
>
> **(b)** 由一阶系统标准公式，可直接写出系统的冲激响应和阶跃响应：
>
> $$h(t) = \frac{1}{RC} e^{-t/(RC)} u(t)$$
>
> $$s(t) = \left( 1 - e^{-t/(RC)} \right) u(t)$$
>
> **(c)** 3dB 截止频率 $\omega_c = \frac{1}{\tau} = \frac{1}{RC} = 1000 \text{ rad/s}$，故参数需满足：
>
> $$RC = 10^{-3} \text{ s}$$
>
> 此时系统的频率响应为：
>
> $$H(j\omega) = \frac{1}{1 + j \frac{\omega}{1000}}$$
>
> 当输入为余弦信号 $x(t) = \cos(1000 t)$ 时，其工作频率为 $\omega_0 = 1000 \text{ rad/s}$。在该频率处的系统频率响应为：
>
> $$H(j1000) = \frac{1}{1 + j1} = \frac{1}{\sqrt{2}} e^{-j\pi/4}$$
>
> 根据复正弦信号通过 LTI 系统的性质，稳态输出为：
>
> $$y(t) = |H(j1000)| \cos(1000 t + \angle H(j1000)) = \frac{1}{\sqrt{2}} \cos\left(1000 t - \frac{\pi}{4}\right)$$

## 6.4 二阶连续时间系统的时域与频域特性

### 6.4.1 标准微分方程形式

二阶连续系统的标准时域微分方程为：

$$\frac{d^2 y(t)}{dt^2} + 2\zeta\omega_n \frac{dy(t)}{dt} + \omega_n^2 y(t) = \omega_n^2 x(t)$$

其中：

- $\omega_n > 0$ 称为**无阻尼自然振荡频率**（Undamped Natural Frequency）。
- $\zeta \ge 0$ 称为**阻尼比**（Damping Ratio）。

对应的系统频率响应（傅里叶变换）为：

$$H(j\omega) = \frac{\omega_n^2}{(j\omega)^2 + 2\zeta\omega_n(j\omega) + \omega_n^2} = \frac{1}{1 - \left(\frac{\omega}{\omega_n}\right)^2 + j 2\zeta \left(\frac{\omega}{\omega_n}\right)}$$

### 6.4.2 极点分布与阻尼状态

系统的特征根（即系统函数极点）为二次方程 $s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$ 的根：

$$s_{1,2} = -\zeta\omega_n \pm \omega_n \sqrt{\zeta^2 - 1}$$

阻尼比 $\zeta$ 的取值决定了系统的极点分布和时域响应的物理特征：

| 阻尼比范围      | 极点分布类型           | 系统状态                         | 时域响应特点                                 |
| --------------- | ---------------------- | -------------------------------- | -------------------------------------------- |
| $\zeta > 1$     | 两个不相等的负实数极点 | **过阻尼 (Overdamped)**          | 响应为两指数衰减项叠加，无振荡，趋近慢       |
| $\zeta = 1$     | 两个重合的负实数极点   | **临界阻尼 (Critically damped)** | 无振荡，是系统能不发生振荡趋向稳定的最快状态 |
| $0 < \zeta < 1$ | 一对共轭复极点         | **欠阻尼 (Underdamped)**         | 指数衰减的正弦振荡，兼顾快速性但产生超调     |
| $\zeta = 0$     | 一对位于虚轴的纯虚极点 | **无阻尼 (Undamped)**            | 等幅的正弦谐振振荡，频率为 $\omega_n$        |

### 6.4.3 欠阻尼阶跃响应的精细推导（$0 < \zeta < 1$）

在欠阻尼状态下，极点为：

$$s_{1,2} = -\zeta\omega_n \pm j \omega_d$$

其中 $\omega_d = \omega_n \sqrt{1 - \zeta^2}$ 称为**阻尼自然频率**。

#### 1. 阶跃响应表达式推导

系统函数为：

$$H(s) = \frac{\omega_n^2}{(s + \zeta\omega_n)^2 + \omega_d^2}$$

阶跃响应的拉氏变换为：

$$S(s) = \frac{H(s)}{s} = \frac{\omega_n^2}{s \left[ (s + \zeta\omega_n)^2 + \omega_d^2 \right]}$$

利用部分分式展开法：

$$S(s) = \frac{1}{s} - \frac{s + 2\zeta\omega_n}{(s + \zeta\omega_n)^2 + \omega_d^2} = \frac{1}{s} - \frac{(s + \zeta\omega_n) + \frac{\zeta\omega_n}{\omega_d} \omega_d}{(s + \zeta\omega_n)^2 + \omega_d^2}$$

对上述各项进行拉普拉斯反变换，可得时域阶跃响应为：

$$s(t) = \left[ 1 - e^{-\zeta\omega_n t} \left( \cos(\omega_d t) + \frac{\zeta}{\sqrt{1 - \zeta^2}} \sin(\omega_d t) \right) \right] u(t)$$

为了将其合并为单一简谐项，引入辅助角 $\theta$。设：

$$\sin\theta = \zeta, \quad \cos\theta = \sqrt{1 - \zeta^2} \implies \tan\theta = \frac{\zeta}{\sqrt{1-\zeta^2}}$$

代入括号中展开：

$$\cos(\omega_d t) + \frac{\sin\theta}{\cos\theta} \sin(\omega_d t) = \frac{\cos(\omega_d t)\cos\theta + \sin(\omega_d t)\sin\theta}{\cos\theta} = \frac{\cos(\omega_d t - \theta)}{\sqrt{1 - \zeta^2}}$$

所以，**阶跃响应的标准形式**为：

$$s(t) = \left[ 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1 - \zeta^2}} \cos(\omega_d t - \theta) \right] u(t) \quad (\theta = \arccos\sqrt{1-\zeta^2})$$

#### 2. 时域性能指标分析

- **超调量（Overshoot,** $M_p\%$**）**： 阶跃响应的冲激响应 $h(t) = \frac{ds(t)}{dt} = \frac{\omega_n}{\sqrt{1-\zeta^2}} e^{-\zeta\omega_n t} \sin(\omega_d t) u(t)$。 令 $h(t) = 0$ 求得第一个峰值发生的时间（峰值时间）为：

  $$t_p = \frac{\pi}{\omega_d}$$

  将 $t_p$ 代入阶跃响应 $s(t)$：

  $$s(t_p) = 1 + \exp\left( -\frac{\pi \zeta}{\sqrt{1-\zeta^2}} \right)$$

  因此，最大百分比超调量仅取决于阻尼比 $\zeta$：

  $$M_p\% = \exp\left( -\frac{\pi \zeta}{\sqrt{1-\zeta^2}} \right) \times 100\%$$

  $\zeta$ 越小，超调量越大，振荡越剧烈。

- **建立时间（Settling Time,** $t_s$**）**： 建立时间决定于包络线 $e^{-\zeta\omega_n t}$ 的衰减速度。阻尼指数 $\sigma = \zeta\omega_n$ 越大，衰减越快，系统稳定得越快。

### 6.4.4 二阶系统的频域共振峰分析

分析二阶系统幅频特性：

$$|H(j\omega)| = \frac{1}{\sqrt{\left[1 - \left(\frac{\omega}{\omega_n}\right)^2\right]^2 + \left[2\zeta\left(\frac{\omega}{\omega_n}\right)\right]^2}}$$

设归一化频率变量 $g(u) = (1-u^2)^2 + 4\zeta^2 u^2$，其中 $u = \frac{\omega}{\omega_n}$。我们求极小值点以找到幅值的极大值点。 对 $g(u)$ 关于 $u$ 求导并令其为 0：

$$\frac{dg(u)}{du} = 2(1-u^2)(-2u) + 8\zeta^2 u = 4u(u^2 - 1 + 2\zeta^2) = 0$$

得到非零实根：

$$u_r = \frac{\omega_r}{\omega_n} = \sqrt{1 - 2\zeta^2}$$

#### 1. 共振发生的条件

必须有 $1 - 2\zeta^2 > 0 \implies \zeta < \frac{1}{\sqrt{2}} \approx 0.707$。

- 当 $\zeta \ge 0.707$ 时，系统无共振峰，其幅频响应自 $\omega = 0$ 起单调递减。

- 当 $0 \le \zeta < 0.707$ 时，幅频响应在**共振频率**处呈现峰值：

  $$\omega_r = \omega_n \sqrt{1 - 2\zeta^2}$$

#### 2. 共振峰值 $M_p$

将 $u_r = \sqrt{1 - 2\zeta^2}$ 代入幅频公式，化简可得共振峰值为：

$$M_p = |H(j\omega_r)| = \frac{1}{2\zeta \sqrt{1 - \zeta^2}}$$

**时频性能冲突规律**： $\zeta$ 越小，时域响应速度越快，但超调量 $M_p\%$ 越大，振荡越强；对应在频域，共振峰值 $M_p$ 会变得非常尖锐。因此在控制和电路系统设计中，通常选择 $\zeta \approx 0.707$ 以达到时域无过大超调、频域无共振峰的最佳折中状态。

### 6.4.5 二阶系统实例分析

> **【典型例题】二阶 RLC 谐振电路时频特性**
>
> 在 RLC 串联谐振电路中，输入为电压源 $x(t)$，输出选为电容两端电压 $y(t)$。
>
> ```
>        R          L
>   o───[  ]───────(  )───┬───o
>   +                     │   +
>  x(t)                 [C]  y(t)
>   -                     │   -
>   o─────────────────────┴───o
> ```
>
> **(a) 列出描述电路的微分方程，并用电路参数表示** $\omega_n$ **和** $\zeta$**；** **(b) 设** $L = 10 \text{ mH}$**，**$C = 10\ \mu\text{F}$**。若要使电路工作在临界阻尼状态（**$\zeta = 1$**），电阻** $R$ **应取何值？** **(c) 若电阻取** $R = 10\ \Omega$**，其余参数不变。计算此时的共振频率** $\omega_r$ **和共振峰值** $M_p$**。**
>
> **【详细解答】**
>
> **(a)** 由 KVL，电感电压为 $L \frac{di}{dt}$，电阻电压为 $R \cdot i$，电容电压为 $y(t)$。因 $i(t) = C \frac{dy(t)}{dt}$，代入可得：
>
> $$LC \frac{d^2y(t)}{dt^2} + RC \frac{dy(t)}{dt} + y(t) = x(t)$$
>
> 两边除以 $LC$，标准化为：
>
> $$\frac{d^2y(t)}{dt^2} + \frac{R}{L} \frac{dy(t)}{dt} + \frac{1}{LC} y(t) = \frac{1}{LC} x(t)$$
>
> 对比标准方程，可得：
>
> $$\omega_n^2 = \frac{1}{LC} \implies \omega_n = \frac{1}{\sqrt{LC}}$$
>
> $$2\zeta\omega_n = \frac{R}{L} \implies \zeta = \frac{R}{2L\omega_n} = \frac{R}{2}\sqrt{\frac{C}{L}}$$
>
> **(b)** 临界阻尼要求 $\zeta = 1$，则：
>
> $$\frac{R}{2}\sqrt{\frac{C}{L}} = 1 \implies R = 2\sqrt{\frac{L}{C}}$$
>
> 代入数据 $L = 10 \times 10^{-3} \text{ H}$，$C = 10 \times 10^{-6} \text{ F}$：
>
> $$R = 2 \times \sqrt{\frac{10^{-2}}{10^{-5}}} = 2 \times \sqrt{1000} \approx 63.25\ \Omega$$
>
> **(c)** 若 $R = 10\ \Omega$，则：
>
> $$\omega_n = \frac{1}{\sqrt{10^{-2} \times 10^{-5}}} = \frac{1}{\sqrt{10^{-7}}} \approx 3162.28 \text{ rad/s}$$
>
> $$\zeta = \frac{10}{2} \times \sqrt{\frac{10^{-5}}{10^{-2}}} = 5 \times \sqrt{10^{-3}} \approx 0.158$$
>
> 因为 $\zeta \approx 0.158 < 0.707$，电路存在频域共振峰。
>
> 共振频率为：
>
> $$\omega_r = \omega_n \sqrt{1 - 2\zeta^2} \approx 3162.28 \times \sqrt{1 - 2(0.158)^2} \approx 3162.28 \times 0.975 \approx 3083.2 \text{ rad/s}$$
>
> 共振峰值为：
>
> $$M_p = \frac{1}{2\zeta \sqrt{1 - \zeta^2}} = \frac{1}{2 \times 0.158 \times \sqrt{1 - 0.158^2}} \approx \frac{1}{0.316 \times 0.987} \approx 3.21$$

## 6.5 离散时间一阶与二阶系统

### 6.5.1 一阶离散时间系统

#### 1. 差分方程

$$y[n] - a y[n-1] = x[n] \quad (|a| < 1 \text{ 保证因果系统稳定性})$$

#### 2. 系统函数与频率响应

$$H(z) = \frac{1}{1 - a z^{-1}} \implies H(e^{j\omega}) = \frac{1}{1 - a e^{-j\omega}}$$

#### 3. 冲激响应

$$h[n] = a^n u[n]$$

#### 4. 时频特性分类讨论

- **当** $0 < a < 1$ **时**：
  - 时域：$h[n]$ 呈单调指数衰减。
  - 频域：$|H(e^{j\omega})|$ 在 $\omega = 0$（低频）处取得极大值 $\frac{1}{1-a}$，在 $\omega = \pi$（高频）处取得极小值 $\frac{1}{1+a}$。
  - 属性：**低通滤波器**。$a$ 越接近 1，通带越窄，滤波选择性越好，但时域衰减越慢。
- **当** $-1 < a < 0$ **时**：
  - 时域：$h[n]$ 正负交替振荡衰减。
  - 频域：$|H(e^{j\omega})|$ 在 $\omega = \pi$ 取得极大值 $\frac{1}{1-|a|}$，在 $\omega = 0$ 取得极小值 $\frac{1}{1+|a|}$。
  - 属性：**高通滤波器**。

### 6.5.2 二阶离散时间系统

对于含有一对共轭复极点 $z_{1,2} = r e^{\pm j\theta}$（其中 $0 < r < 1$）的二阶离散系统：

#### 1. 系统函数

$$H(z) = \frac{1}{(1 - r e^{j\theta} z^{-1})(1 - r e^{-j\theta} z^{-1})} = \frac{1}{1 - 2r\cos\theta z^{-1} + r^2 z^{-2}}$$

#### 2. 冲激响应

$$h[n] = \frac{r^n \sin((n+1)\theta)}{\sin\theta} u[n]$$

表现为按指数 $r^n$ 衰减、振荡角频率为 $\theta$ 的简谐衰减序列。

#### 3. 频域特性

- 频率响应：

  $$H(e^{j\omega}) = \frac{1}{1 - 2r\cos\theta e^{-j\omega} + r^2 e^{-j2\omega}}$$

- 当极点接近单位圆（即 $r \to 1$）时，系统在 $\omega = \pm \theta$ 处会产生极窄的强共振峰。

- $r$ 越靠近 1，频域的选择性越尖锐，但时域振荡持续衰减时间越长。

### 6.5.3 课后经典例题精解

> **【课后习题 6.65】离散时间巴特沃思滤波器设计与分析**
>
> 对于一个一阶离散时间巴特沃思低通滤波器，其频率响应的模平方定义为：
>
> $$|B(e^{j\omega})|^2 = \frac{1}{1 + \left( \frac{\tan(\omega/2)}{\tan(\omega_c/2)} \right)^{2N}}$$
>
> 其中截止频率定为 $\omega_c = \pi / 2$，阶数设定为 $N = 1$。
>
> **(a) 利用三角恒等式证明：**$|B(e^{j\omega})|^2 = \cos^2(\omega/2)$**。** **(b) 令** $B(e^{j\omega}) = a \cos(\omega/2)$**，当复常数** $a$ **满足什么条件时，其模平方与 (a) 一致？** **(c) 证明 (b) 中的系统函数可对应于如下一阶差分方程，并确定实系数** $\alpha$**、**$\beta$ **和时延** $\gamma$ **的值：**
>
> $$y[n] = \alpha x[n] + \beta x[n-\gamma]$$
>
> **【规范化证明与推导过程】**
>
> **(a) 证明**： 将 $\omega_c = \pi/2$ 和 $N = 1$ 代入模平方表达式中：
>
> $$|B(e^{j\omega})|^2 = \frac{1}{1 + \left( \frac{\tan(\omega/2)}{\tan(\pi/4)} \right)^2}$$
>
> 易知 $\tan(\pi/4) = 1$，则公式化简为：
>
> $$|B(e^{j\omega})|^2 = \frac{1}{1 + \tan^2(\omega/2)}$$
>
> 根据三角学基本恒等式 $1 + \tan^2\theta = \sec^2\theta = \frac{1}{\cos^2\theta}$，代入上式得：
>
> $$|B(e^{j\omega})|^2 = \frac{1}{\sec^2(\omega/2)} = \cos^2(\omega/2)$$
>
> 证明完毕。
>
> **(b) 求解复常数** $a$： 已知 $B(e^{j\omega}) = a \cos(\omega/2)$，其模平方为：
>
> $$|B(e^{j\omega})|^2 = |a \cos(\omega/2)|^2 = |a|^2 \cos^2(\omega/2)$$
>
> 为了使其与 (a) 中的结果 $\cos^2(\omega/2)$ 保持相同，必须满足：
>
> $$|a|^2 = 1 \implies a = e^{j\phi} \quad (\phi \in \mathbb{R})$$
>
> 也就是说，$a$ 可以是任何位于复平面单位圆上的复数值。
>
> **(c) 求解差分方程参数**： 对差分方程两边进行傅里叶变换：
>
> $$Y(e^{j\omega}) = \alpha X(e^{j\omega}) + \beta e^{-j\omega \gamma} X(e^{j\omega})$$
>
> 系统的频率响应（传输函数）为：
>
> $$H(e^{j\omega}) = \frac{Y(e^{j\omega})}{X(e^{j\omega})} = \alpha + \beta e^{-j\omega \gamma}$$
>
> 设 (b) 中的频率响应为 $B(e^{j\omega}) = a \cos(\omega/2)$。为了让系统对应一个**因果且可实现的离散时间 LTI 系统**，我们将余弦函数改写为欧拉公式形式：
>
> $$\cos(\omega/2) = \frac{e^{j\omega/2} + e^{-j\omega/2}}{2}$$
>
> 代入得：
>
> $$B(e^{j\omega}) = a \left( \frac{e^{j\omega/2} + e^{-j\omega/2}}{2} \right)$$
>
> 为了消去项中的正指数项 $e^{j\omega/2}$（它在时域对应非因果的超前项），由 (b) 小题，我们可以选择取在单位圆上的复数值：
>
> $$a = e^{-j\omega/2}$$
>
> 代入后展开：
>
> $$B(e^{j\omega}) = e^{-j\omega/2} \left( \frac{e^{j\omega/2} + e^{-j\omega/2}}{2} \right) = \frac{1}{2} + \frac{1}{2} e^{-j\omega}$$
>
> 此时，该系统函数与差分方程系统函数 $H(e^{j\omega}) = \alpha + \beta e^{-j\omega \gamma}$ 完全一一对应。对比系数可得：
>
> $$\alpha = \frac{1}{2}, \quad \beta = \frac{1}{2}, \quad \gamma = 1$$
>
> 此时对应的时域因果差分方程即为一个两点滑动平均滤波器：
>
> $$y[n] = \frac{1}{2} x[n] + \frac{1}{2} x[n-1]$$

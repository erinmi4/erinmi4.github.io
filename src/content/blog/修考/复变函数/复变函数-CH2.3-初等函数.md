---
title: "复变函数-CH2.3-初等函数"
slug: "复变函数-CH2.3-初等函数"
description: "复变函数-CH2.3-初等函数，待补充摘要。"
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 复变函数
  - 大阪大学
  - 数学分析
category: "修考"
draft: false
---

- [第六讲 初等函数_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV13K4y1h7wC?buvid=XU5EF145F0DFFF3C5E71837D937FA3080CB89&from_spmid=united.player-video-detail.relatedvideo.0&is_story_h5=false&mid=gD1TsSbShVg1Y9hI4zeZKA%3D%3D&plat_id=116&share_from=ugc&share_medium=android&share_plat=android&share_session_id=f4d7054b-0ef9-4534-8134-590ba3bf6db4&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1780936817&unique_k=4ywp3Gh&up_id=1586658&vd_source=f6a1c5561b1c1e28133e4465302990f3&spm_id_from=333.788.videopod.episodes&p=6)

# 复变函数与积分变换：初等函数核心笔记

本章核心探讨复数域上的初等函数。与实变函数相比，复初等函数既保留了原有的运算性质，又展现出复域特有的多值性、周期性与相互转化的奇妙联系。

## 一、指数函数 (Exponential Function)

### 1. 定义与欧拉公式

在实域中，我们熟悉 $f(x) = e^x$。在复域中，设自变量 $z = x + iy$（其中 $x, y \in \mathbb{R}$），定义**复指数函数**为：

$$f(z) = e^z = e^{x+iy} = e^x \cdot e^{iy}$$

借助经典的**欧拉公式（Euler's Formula）** $e^{iy} = \cos y + i \sin y$，可将其展开为代数形式：

$$e^z = e^x (\cos y + i \sin y)$$

> **设计代号/记号说明：** 当指数部分表达式较长（例如 $e^{\frac{x^2+y^2}{3}}$）时，为了排版美观与阅读方便，常写作 $\exp(z)$，即：
> 
> $$\exp\left(\frac{2-\pi i}{3}\right) = e^{\frac{2-\pi i}{3}}$$

### 2. 分析性质

1. **解析性**：$e^z$ 在复平面 $\mathbb{C}$ 上**处处解析**（即为整函数），且其导数保持不变：
    
    $$(e^z)' = e^z$$
2. **模与实部、虚部**：
    
    - 模长：$|e^z| = e^x$ （注意：复指数函数的模仅由其**实部**决定）
        
    - 实部：$\text{Re}\{e^z\} = e^x \cos y$
        
    - 虚部：$\text{Im}\{e^z\} = e^x \sin y$
        
3. **幅角**：$\text{Arg}(e^z) = y + 2k\pi \quad (k \in \mathbb{Z})$
    
4. **周期性（复域独有性质）**： 实指数函数 $e^x$ 是单调递增的，无周期性；但复指数函数 $e^z$ 是**以** $2\pi i$ **为基本周期的周期函数**。
    
    $$e^{z + 2k\pi i} = e^z \quad (k \in \mathbb{Z})$$
    
    _注：这是因为_ $e^{2k\pi i} = \cos(2k\pi) + i \sin(2k\pi) = 1$_。_
    

### 【例题1详解】

**题目**：求 $\exp\left(\frac{2 - \pi i}{3}\right)$ 的实部与虚部。

**解**： 首先将指数部分的实部与虚部拆开：

$$z = \frac{2 - \pi i}{3} = \frac{2}{3} - \frac{\pi}{3}i$$

代入复指数函数展开公式，此时 $x = \frac{2}{3}$，$y = -\frac{\pi}{3}$：

$$\exp\left(\frac{2-\pi i}{3}\right) = e^{\frac{2}{3}} \left[ \cos\left(-\frac{\pi}{3}\right) + i \sin\left(-\frac{\pi}{3}\right) \right]$$

利用三角函数的诱导公式 $\cos(-\theta) = \cos\theta$，$\sin(-\theta) = -\sin\theta$：

$$\cos\left(-\frac{\pi}{3}\right) = \frac{1}{2}, \quad \sin\left(-\frac{\pi}{3}\right) = -\frac{\sqrt{3}}{2}$$

带入计算：

$$\exp\left(\frac{2-\pi i}{3}\right) = e^{\frac{2}{3}} \left( \frac{1}{2} - i\frac{\sqrt{3}}{2} \right) = \frac{1}{2}e^{\frac{2}{3}} - i\frac{\sqrt{3}}{2}e^{\frac{2}{3}}$$

- **实部**：$\text{Re}\left\{\exp\left(\frac{2 - \pi i}{3}\right)\right\} = \frac{1}{2}e^{\frac{2}{3}}$
    
- **虚部**：$\text{Im}\left\{\exp\left(\frac{2 - \pi i}{3}\right)\right\} = -\frac{\sqrt{3}}{2}e^{\frac{2}{3}}$
    

## 二、对数函数 (Logarithmic Function)

对数函数是指数函数的反函数。在复域中，正是因为指数函数具有周期性，导致其反函数——对数函数变成了**多值函数**。

### 1. 核心推导与直观理解（解答你的疑惑：“到底怎么得到的？”）

你在手写笔记中提到：“_我没看懂这里，到底是怎得到的？_” 我们通过下面的推导来解开这个疑惑：
$$\boxed{
\begin{aligned}
w&=\ln z \\
&\Downarrow \\
e^w&=z \\
&\Downarrow \\
w=u+iv,\qquad z=re^{i\theta} \\
&\Downarrow \\
e^{u+iv}=re^{i\theta} \\
&\Downarrow \\
e^u=r,\qquad v=\theta+2k\pi \\
&\Downarrow \\
u=\ln r,\qquad v=\theta+2k\pi.
\end{aligned}
}$$

设 $w = u + iv$ 是 $z = r e^{i\theta}$ 的对数，即：

$$w = \text{Ln } z \iff e^w = z$$

我们将 $w = u + iv$ 和 $z$ 的极坐标形式 $z = |z|e^{i\text{Arg } z} = r e^{i(\theta + 2k\pi)}$ 代入：

$$e^{u+iv} = r e^{i\theta}$$

利用指数运算性质拆开左边：

$$e^u \cdot e^{iv} = r e^{i\theta}$$

这是一个复数相等的等式。根据复数相等的条件（**模相等，幅角相差** $2k\pi$）：

1. **模长相等**：$e^u = r \implies e^u = |z|$ 因为 $u$ 是实数，$|z|$ 是正实数，所以这里的对数是**实域下的普通自然对数**：
    
    $$u = \ln |z|$$
2. **幅角对应**：$v$ 必须是 $z$ 的某一个幅角：
    
    $$v = \text{Arg } z = \arg z + 2k\pi \quad (k \in \mathbb{Z})$$
    
    其中 $\arg z$ 是幅角主值（通常限制在 $(-\pi, \pi]$）。
    

将 $u$ 和 $v$ 重新组合回 $w = u + iv$：

$$\text{Ln } z = \ln |z| + i (\arg z + 2k\pi) = (\ln |z| + i \arg z) + 2k\pi i$$

为了书写简便，我们将主值部分定义为单值函数 $\ln z = \ln |z| + i \arg z$。由此可得：

$$\text{Ln } z = \ln z + 2k\pi i \quad (k \in \mathbb{Z})$$

> **★ 关键避坑总结（大小写区别）：**
> 
> - **大写** $\text{Ln } z$：表示**多值**对数函数，包含无数个值（因为主值分支加减了 $2k\pi i$）。
>     
> - **小写** $\ln z$：表示**单值**对数主值分支，此时限定幅角为 $\arg z \in (-\pi, \pi]$。
>     
> - $\ln |z|$：纯实数运算，指复数模长（正实数）的普通自然对数。
>     

### 2. 分析性质与导数

1. **多值性**：对于任意一个复数 $z \neq 0$，$\text{Ln } z$ 都有无穷多个值，各值之间相差 $2\pi i$ 的整数倍。
    
2. **导数**：在除去原点及负实轴的解析区域内，对数函数的导数与实域一致：
    
    $$(\text{Ln } z)' = \frac{1}{z}$$

### 【例题2详解】

**题目**：求 $\text{Ln } i$。

**解**： 首先求复数 $z = i$ 的模与幅角主值：

- 模长：$|i| = 1 \implies \ln|i| = \ln 1 = 0$
    
- 幅角主值：由于 $i$ 位于虚轴正半轴，所以 $\arg i = \frac{\pi}{2}$ 代入多值对数公式：
    
    $$\text{Ln } i = \ln|i| + i\left(\arg i + 2k\pi\right) = 0 + i\left(\frac{\pi}{2} + 2k\pi\right) = i\left(\frac{\pi}{2} + 2k\pi\right) \quad (k \in \mathbb{Z})$$
    
    也可以提取出公因式写成：
    
    $$\text{Ln } i = i\pi \left(\frac{1}{2} + 2k\right) \quad (k \in \mathbb{Z})$$

### 【例题3详解】

**题目**：求 $\text{Ln}(2 - \sqrt{2}i)$。

**解**： 设 $z = 2 - \sqrt{2}i$（位于第四象限）。

1. 计算模长：
    
    $$|z| = \sqrt{2^2 + (-\sqrt{2})^2} = \sqrt{4 + 2} = \sqrt{6}$$
    
    因此，对数实部为：$\ln|z| = \ln \sqrt{6} = \frac{1}{2}\ln 6$
    
2. 计算幅角主值 $\arg z$： 因为 $z$ 处于第四象限：
    
    $$\arg z = \arctan\left(\frac{\text{Im}(z)}{\text{Re}(z)}\right) = \arctan\left(\frac{-\sqrt{2}}{2}\right) = -\arctan\frac{\sqrt{2}}{2}$$
3. 代入公式：
    
    $$\text{Ln}(2 - \sqrt{2}i) = \ln\sqrt{6} + i\left(-\arctan\frac{\sqrt{2}}{2} + 2k\pi\right) \quad (k \in \mathbb{Z})$$
    
    整理得到：
    
    $$\text{Ln}(2 - \sqrt{2}i) = \ln\sqrt{6} - i\arctan\frac{\sqrt{2}}{2} + 2k\pi i \quad (k \in \mathbb{Z})$$

## 三、幂函数 (Power Function) —— 转化为对数问题

有了指数函数与对数函数后，复域下的任意幂函数 $w = z^b$ 都可以得到统一的定义。

### 1. 定义

在实数域中，当 $a>0$ 时，我们有 $a^b = e^{b \ln a}$。在复域中，为了定义一般复数的复数次幂，我们采用完全类似的结构：

$$z^b = e^{b \text{Ln } z} \quad (z \neq 0, \, b \in \mathbb{C})$$

> **★ 转化思想：** 所有的幂运算，本质上都被转化为了**对数运算**。 因为 $\text{Ln } z$ 是多值的，所以当指数 $b$ 不是整数时，$z^b$ 通常也是**多值函数**。

- **若** $b = n$**（正整数）**：$z^n$ 是单值的。
    
- **若** $b = \frac{1}{n}$**（分式）**：$z^{1/n}$ 有 $n$ 个不同的值（即复数开方根）。
    
- **若** $b$ **是无理数或复数**：$z^b$ 有无穷多个值。
    

### 【例题4详解】

**题目**：求 $3^i$ 的所有值。

**解**： 根据幂函数的定义，将底数 $3$ 写为对数形式：

$$3^i = e^{i \text{Ln } 3}$$

首先计算底数的复对数 $\text{Ln } 3$：

- 实数 $3$ 的模 $|3| = 3$，幅角主值 $\arg 3 = 0$（因为它在正实轴上）。
    
- 故 $\text{Ln } 3 = \ln 3 + i(0 + 2k\pi) = \ln 3 + 2k\pi i \quad (k \in \mathbb{Z})$。
    

将 $\text{Ln } 3$ 代回幂指数公式：

$$3^i = e^{i(\ln 3 + 2k\pi i)} = e^{i\ln 3 + 2k\pi i^2} = e^{-2k\pi + i\ln 3} \quad (k \in \mathbb{Z})$$

利用指数乘法拆开：

$$3^i = e^{-2k\pi} \cdot e^{i\ln 3}$$

最后对后半部分的复指数项应用欧拉公式展开：

$$3^i = e^{-2k\pi} \left[ \cos(\ln 3) + i \sin(\ln 3) \right] \quad (k \in \mathbb{Z})$$

_注：由于_ $k$ _可以取全体整数，所以_ $3^i$ _有无穷多个值。每个值的模长为_ $e^{-2k\pi}$_，幅角主值为_ $\ln 3$_。_

## 四、三角函数与双曲函数 (Trigonometric & Hyperbolic Functions)

通过欧拉公式，复域下的三角函数与双曲函数可以通过指数函数直接定义。

### 1. 核心定义公式

- **正弦函数**：
    
    $$\sin z = \frac{e^{iz} - e^{-iz}}{2i}$$
- **余弦函数**：
    
    $$\cos z = \frac{e^{iz} + e^{-iz}}{2}$$
- **双曲正弦**（Notated as $\sinh z$ or $\text{sh } z$）：
    
    $$\sinh z = \frac{e^z - e^{-z}}{2}$$
- **双曲余弦**（Notated as $\cosh z$ or $\text{ch } z$）：
    
    $$\cosh z = \frac{e^z + e^{-z}}{2}$$

### 2. 三角函数与双曲函数的互化（桥梁公式）

你在手写笔记中写道：“_双曲函数... 有些记不得了_”。实际上，你只需要记住**最关键的转化桥梁**，就能在三角函数与双曲函数之间自由切换，再也不用死记硬背两套公式：

$$\sin(iz) = i\sinh z \quad \iff \quad \sinh(iz) = i\sin z$$$$\cos(iz) = \cosh z \quad \iff \quad \cosh(iz) = \cos z$$

### 【例题5详解】

**题目**：求 $\cos(\pi + 5i)$，并将其表示为双曲函数形式。

**解**： **方法一：直接代入复余弦公式（推荐，最不容易出错）** 设 $z = \pi + 5i$，代入余弦定义式：

$$\cos(\pi + 5i) = \frac{e^{i(\pi + 5i)} + e^{-i(\pi + 5i)}}{2}$$

展开指数项：

$$\cos(\pi + 5i) = \frac{e^{i\pi - 5} + e^{-i\pi + 5}}{2} = \frac{e^{-5}e^{i\pi} + e^5 e^{-i\pi}}{2}$$

我们知道 $e^{i\pi} = e^{-i\pi} = -1$（欧拉恒等式），代入：

$$\cos(\pi + 5i) = \frac{-e^{-5} - e^5}{2} = -\frac{e^5 + e^{-5}}{2}$$

根据双曲余弦的定义 $\cosh 5 = \frac{e^5 + e^{-5}}{2}$，最终化简结果为：

$$\cos(\pi + 5i) = -\cosh 5$$

**方法二：利用三角函数和角公式与互化公式** 利用三角和差公式：

$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$$

将 $\alpha = \pi, \beta = 5i$ 代入：

$$\cos(\pi + 5i) = \cos\pi\cos(5i) - \sin\pi\sin(5i)$$

已知 $\cos\pi = -1$，$\sin\pi = 0$，所以：

$$\cos(\pi + 5i) = -\cos(5i)$$

利用互化公式 $\cos(ix) = \cosh x$：

$$\cos(5i) = \cosh 5 \implies \cos(\pi + 5i) = -\cosh 5$$

两种方法结果完全一致，方法二更为简捷。

## 五、反三角函数与反双曲函数 (Inverse Functions)

反三角函数与反双曲函数在复平面上均通过**多值对数函数** $\text{Ln}$ 来定义。

### 🚨 纠错与防坑特别提示（课件 Typo 修正）

在学校课件/PPT中，反三角函数部分的公式存在严重的印刷错误。课件上把反正切函数 $\text{Arctan } z$ 和反双曲正切函数 $\text{Artanh } z$ 混淆了。请务必参照以下修正后的正确公式进行复习：

1. **反正弦**：$\text{Arcsin } z = -i \text{Ln}\left(iz + \sqrt{1 - z^2}\right)$
    
2. **反余弦**：$\text{Arccos } z = -i \text{Ln}\left(z + \sqrt{z^2 - 1}\right)$ _(课件中错写为了_ $iz$_，应修正为_ $z$_)_
    
3. **反正切**：$\text{Arctan } z = -\frac{i}{2} \text{Ln}\left(\frac{1 + iz}{1 - iz}\right)$
    
4. **反双曲正切**（手写记作 $\text{Artanh } z$ 或 $\text{Arth } z$）：$\text{Artanh } z = \frac{1}{2} \text{Ln}\left(\frac{1 + z}{1 - z}\right)$ _(课件将此处错误地标注成了_ $\text{Arctan } z$_)_
    

### 【核心推导】以反正弦 $\text{Arcsin } z$ 为例

我们如何推导出反正弦公式呢？ 设 $w = \text{Arcsin } z \implies \sin w = z$。 根据正弦定义：

$$\frac{e^{iw} - e^{-iw}}{2i} = z \implies e^{iw} - e^{-iw} = 2iz$$

等式两边同乘以 $e^{iw}$：

$$\left(e^{iw}\right)^2 - 2iz\left(e^{iw}\right) - 1 = 0$$

这是一个关于 $e^{iw}$ 的二次方程。利用求根公式求出 $e^{iw}$：

$$e^{iw} = \frac{2iz + \sqrt{(-2iz)^2 - 4(1)(-1)}}{2} = \frac{2iz + \sqrt{-4z^2 + 4}}{2} = iz + \sqrt{1 - z^2}$$

两边取多值对数：

$$iw = \text{Ln}\left(iz + \sqrt{1 - z^2}\right)$$

两边同除以 $i$（即乘以 $-i$）：

$$w = \text{Arcsin } z = -i \text{Ln}\left(iz + \sqrt{1 - z^2}\right)$$

通过这种方法，所有反三角函数都能被转化成我们最擅长处理的 $\text{Ln}$ **对数问题**。

### 【例题6详解】

**题目**：求 $\text{Arcsin } 3$ 的所有值。

**解**： 将 $z = 3$ 代入反正弦对数表示式：

$$\text{Arcsin } 3 = -i \text{Ln}\left(3i + \sqrt{1 - 3^2}\right) = -i \text{Ln}\left(3i + \sqrt{-8}\right)$$

由于 $\sqrt{-8}$ 是多值的（即具有两个根 $\pm i2\sqrt{2}$），因此：

$$\text{Arcsin } 3 = -i \text{Ln}\left(3i \pm i2\sqrt{2}\right) = -i \text{Ln}\left[ \left(3 \pm 2\sqrt{2}\right)i \right]$$

这里我们需要计算括号内复数的对数。 设 $W_1 = \left(3 + 2\sqrt{2}\right)i$ 和 $W_2 = \left(3 - 2\sqrt{2}\right)i$。 因为 $3 > 2\sqrt{2} \approx 2.828$，所以这两个数都是**纯虚数且位于正半轴**。

- 它们的幅角主值均为：$\arg W_1 = \arg W_2 = \frac{\pi}{2}$。
    
- 它们的模长分别为：$|W_1| = 3 + 2\sqrt{2}$，以及 $|W_2| = 3 - 2\sqrt{2}$。
    

代入多值对数公式：

$$\text{Ln}\left[ \left(3 \pm 2\sqrt{2}\right)i \right] = \ln\left(3 \pm 2\sqrt{2}\right) + i\left(\frac{\pi}{2} + 2k\pi\right) \quad (k \in \mathbb{Z})$$

再乘以前面的系数 $-i$：

$$\text{Arcsin } 3 = -i \left[ \ln\left(3 \pm 2\sqrt{2}\right) + i\left(\frac{\pi}{2} + 2k\pi\right) \right]$$

展开并化简（注意 $-i^2 = 1$）：

$$\text{Arcsin } 3 = \left(\frac{\pi}{2} + 2k\pi\right) - i \ln\left(3 \pm 2\sqrt{2}\right) \quad (k \in \mathbb{Z})$$

> **进一步精简（完美答案展现形式）：** 观察到：
> 
> $$\ln\left(3 - 2\sqrt{2}\right) = \ln\left[ \frac{(3 - 2\sqrt{2})(3 + 2\sqrt{2})}{3 + 2\sqrt{2}} \right] = \ln\left( \frac{1}{3 + 2\sqrt{2}} \right) = -\ln\left(3 + 2\sqrt{2}\right)$$
> 
> 因而，这两个对数值刚好互为相反数。故最终答案可完美精简写作：
> 
> $$\text{Arcsin } 3 = \left(\frac{\pi}{2} + 2k\pi\right) \mp i \ln\left(3 + 2\sqrt{2}\right) \quad (k \in \mathbb{Z})$$
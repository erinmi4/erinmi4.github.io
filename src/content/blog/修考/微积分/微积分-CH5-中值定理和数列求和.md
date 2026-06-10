---
title: "微积分-CH5-中值定理和数列求和"
slug: "微积分-CH5-中值定理和数列求和"
description: "这份笔记涵盖了高等数学中**微分中值定理**的应用以及数列求和（求极限）的常见技巧。"
pubDate: 2026-05-04
updatedDate: 2026-05-04
tags:
  - 修考
  - 微积分
category: 修考
draft: false
---

### 微分中值定理与数列求和笔记整理

------

## 第一部分：微分中值定理 (CH5)

### 1. 共同前提条件

在使用以下中值定理前，必须确保函数 $f(x)$ 满足：

1. 在闭区间 $[a, b]$ 上**连续**。
2. 在开区间 $(a, b)$ 内**可导**。

### 2. 罗尔定理 (Rolle's Theorem)

- **内容**：如果 $f(a) = f(b)$，则至少存在一点 $\xi \in (a, b)$，使得 $f'(\xi) = 0$。
- **直观理解**：如果一段连续光滑曲线的两个端点高度相等，那么中间至少有一个位置的切线是水平的。

### 3. 拉格朗日中值定理 (Lagrange Mean Value Theorem)

- **内容**：存在 $\xi \in (a, b)$，使得：

  $$f'(\xi) = \frac{f(b) - f(a)}{b - a}$$

- **物理意义**：在运动过程中，至少有一个时刻的**瞬时速度**等于全程的**平均速度**。

- **主要用途**：将“函数值的差”转化为“导数形式”，即 $f(b) - f(a) = f'(\xi)(b - a)$。

------

### 4. 重点技巧：构造辅助函数

#### **例题 1**

已知 $f(x)$ 在 $[a, b]$ 上满足中值定理条件，且 $b f(a) - a f(b) = 0$。证明：存在 $\xi \in (a, b)$，使得 $f(\xi) = \xi f'(\xi)$。

**解析（SOP 操作流程）：**

1. **观察结论**：将结论中的 $\xi$ 替换为 $x$，整理成等于 0 的形式：

   $$f(x) - x f'(x) = 0 \quad \Rightarrow \quad f'(x) - \frac{1}{x} f(x) = 0$$

2. **寻找辅助函数 $G(x)$**：

   我们希望构造 $G(x)$ 使得 $G'(x) = 0$ 能推导出上述式子。

   利用公式 $G(x) = e^{\int a'(x) dx} f(x)$，此处 $a'(x) = -\frac{1}{x}$。

   则 $a(x) = -\ln x$，故 $G(x) = e^{-\ln x} f(x) = \frac{f(x)}{x}$。

3. **验证端点值**：

   $G(a) = \frac{f(a)}{a}$，$G(b) = \frac{f(b)}{b}$。

   由已知条件 $b f(a) - a f(b) = 0 \Rightarrow \frac{f(a)}{a} = \frac{f(b)}{b}$。

   由于 $G(a) = G(b)$，根据**罗尔定理**，必存在 $\xi \in (a, b)$ 使得 $G'(\xi) = 0$。

4. **得出结论**：

   $G'(x) = \frac{f'(x) \cdot x - f(x)}{x^2} = 0 \Rightarrow \xi f'(\xi) - f(\xi) = 0 \Rightarrow f(\xi) = \xi f'(\xi)$。证毕。

------

#### **例题 2：证明不等式**

已知 $0 < a < b$，证明：$\frac{b - a}{b} < \ln b - \ln a < \frac{b - a}{a}$。

**证明：**

1. 设 $f(x) = \ln x$，则 $f(x)$ 在 $[a, b]$ 上满足中值定理条件。

2. 由拉格朗日中值定理，存在 $\xi \in (a, b)$ 使得：

   $$f(b) - f(a) = f'(\xi)(b - a) \Rightarrow \ln b - \ln a = \frac{1}{\xi}(b - a)$$

3. 由于 $a < \xi < b$，取倒数得：$\frac{1}{b} < \frac{1}{\xi} < \frac{1}{a}$。

4. 不等式各项同乘以 $(b - a)$：

   $$\frac{b - a}{b} < \frac{b - a}{\xi} < \frac{b - a}{a}$$

5. 代入第 2 步的结论，得：$\frac{b - a}{b} < \ln b - \ln a < \frac{b - a}{a}$。证毕。

------

## 第二部分：数列求和与极限技巧

### 1.化简（裂项相消）

适用于可以将无穷项转化成有限项（首尾抵消）的情况。

- **例**：$\sum \frac{1}{n(n+1)}$

  $$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots + \frac{1}{n(n+1)} = (1 - \frac{1}{2}) + (\frac{1}{2} - \frac{1}{3}) + \dots + (\frac{1}{n} - \frac{1}{n+1}) = 1 - \frac{1}{n+1}$$

  当 $n \to \infty$ 时，极限为 1。

### 2. 夹逼定理 (Squeeze Theorem)：缩放

适用于分子或分母中有部分项对整体影响较小（可放缩）的情况。

- **例题**：求 $\lim_{n \to \infty} \left( \frac{n+1}{\sqrt{n^4+1^2}} + \frac{n+2}{\sqrt{n^4+2^2}} + \dots + \frac{n+n}{\sqrt{n^4+n^2}} \right)$

  **分析**：观察到分母中的 $k^2$（$1^2, 2^2, \dots$）相对于 $n^4$ 是次要项。

  - **分子总和**：$n + (1+2+\dots+n) = n + \frac{n(n+1)}{2} = \frac{3n^2+n}{2}$。
  - **放大**（取最小分母）：$\frac{\frac{3n^2+n}{2}}{\sqrt{n^4+1}}$
  - **缩小**（取最大分母）：$\frac{\frac{3n^2+n}{2}}{\sqrt{n^4+n^2}}$
  - **取极限**：当 $n \to \infty$ 时，两端极限均为 $\frac{3}{2}$。故原式极限为 $\frac{3}{2}$。

### 3. 定积分定义法

当数列呈 $\frac{1}{n} \sum f(\frac{k}{n})$ 形式时，可视为黎曼和。

- **核心思想**：$\frac{1}{n}$ 视为 $dx$，$\frac{k}{n}$ 视为自变量 $x$。

- **例题**：求 $\lim_{n \to \infty} \left( \frac{1}{n+1} + \frac{1}{n+2} + \dots + \frac{1}{n+n} \right)$

  **转化**：

  $$\lim_{n \to \infty} \sum_{k=1}^{n} \frac{1}{n+k} = \lim_{n \to \infty} \frac{1}{n} \sum_{k=1}^{n} \frac{1}{1 + \frac{k}{n}}$$

  **积分**：

  $$\int_0^1 \frac{1}{1+x} dx = \ln(1+x) \Big|_0^1 = \ln 2$$

------

**提示**：在处理中值定理题时，若结论涉及 $\xi f'(\xi)$ 这种形式，优先考虑辅助函数 $G(x) = \frac{f(x)}{x}$；若涉及 $f' + f$，则考虑 $e^x f(x)$。

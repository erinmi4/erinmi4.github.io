---
title: "复变函数-CH1-复数及其运算 以及复变函数的极限和连续"
slug: "复变函数-CH1-复数及其运算"
description: "复变函数-CH1-复数及其运算，待补充摘要。"
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 复变函数
  - 大阪大学
  - 数学分析
category: "修考"
draft: false
---

- 【第一讲 复数及其运算】 https://www.bilibili.com/video/BV13K4y1h7wC/?share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
- 【复数的幂和根、棣莫弗公式、】 https://www.bilibili.com/video/BV13K4y1h7wC/?p=2&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5

## 第一阶段：复数及其运算

### 一、 复数的引入与代数形式（Algebraic Form）

#### 1. 虚数单位 $i$ 的引入

在实数域中，方程 $x^2 + 1 = 0$ 无解（判别式 $\Delta < 0$）。为了解决此类方程的求解问题，数学家引入了一个全新的数——**虚数单位** $i$（在电工学中为了免与电流 $i$ 混淆，常记为 $j$），定义：

$$i^2 = -1$$

#### 2. $i$ 的高次方周期性

由于 $i^2 = -1$，虚数单位的高次方呈现明显的以 $4$ 为周期的循环特性（$n \in \mathbb{Z}$）：

- $i^{4n} = 1$
- $i^{4n+1} = i$
- $i^{4n+2} = -1$
- $i^{4n+3} = -i$

#### 3. 复数的定义

一个复数 $z$ 由**实部**和**虚部**两部分组成，其标准代数形式为：

$$z = a + bi \quad (a, b \in \mathbb{R})$$

其中：

- **实部（Real Part）**：记作 $\text{Re}(z) = a$
- **虚部（Imaginary Part）**：记作 $\text{Im}(z) = b$（**注意：虚部是实数** $b$**，而不是** $bi$）。

根据实虚部的取值，复数可以分类为：

- 当 $\text{Im}(z) = b = 0$ 时，$z$ 为**实数**。
- 当 $\text{Im}(z) = b \neq 0$ 且 $\text{Re}(z) = a = 0$ 时，$z = bi$ 称为**纯虚数**。
- 当且仅当两个复数的实部和虚部分别相等时，这两个复数相等。**复数之间无法比较大小**（因为复数集不能建立保持四则运算顺序的全序关系）。

### 二、 复数的四则运算（Algebraic Operations）

设 $z_1 = a + bi$，$z_2 = c + di$，复数的加减乘运算类似于多项式运算法则（合并同类项，并将 $i^2$ 替换为 $-1$）。

#### 1. 加法与减法

实部与实部相加减，虚部与虚部相加减：

$$z_1 \pm z_2 = (a \pm c) + (b \pm d)i$$

#### 2. 乘法

展开多项式并合并：

$$z_1 \cdot z_2 = (a+bi)(c+di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$

#### 3. 除法（分母实数化）

> **起承转合提示**：为了化简分母含 $i$ 的分式，我们需要利用平方差公式将分母转化为实数。这需要让分母乘以它的**共轭复数**。

$$\frac{z_1}{z_2} = \frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{(c+di)(c-di)} = \frac{(ac+bd) + (bc-ad)i}{c^2 + d^2} = \frac{ac+bd}{c^2+d^2} + \frac{bc-ad}{c^2+d^2}i$$

##### 📝 【手写例题 1】

计算 $\frac{1+2i}{3+4i}$。

**【详细解析】** 分子分母同乘以分母的共轭复数 $3-4i$：

$$\frac{1+2i}{3+4i} = \frac{(1+2i)(3-4i)}{(3+4i)(3-4i)} = \frac{3 - 4i + 6i - 8i^2}{3^2 + 4^2}$$

由于 $i^2 = -1$，分子化简为 $3 + 2i + 8 = 11 + 2i$，分母为 $9 + 16 = 25$：

$$\frac{1+2i}{3+4i} = \frac{11+2i}{25} = \frac{11}{25} + \frac{2}{25}i$$

### 三、 复数的几何表示与三种表示形式的转换

#### 1. 几何表示：复平面（Complex Plane）

复数 $z = a + bi$ 与直角坐标系下的点 $P(a, b)$ 构成一一对应关系。横轴（$x$ 轴）称为**实轴**，纵轴（$y$ 轴）称为**虚轴**。

同时，$z$ 也可以用从原点指向点 $P(a, b)$ 的向量 $\vec{OP}$ 表示：

- **模（Modulus）** $r$：向量的长度，记作 $|z|$。

  $$r = |z| = \sqrt{a^2 + b^2}$$

- **幅角（Argument）** $\theta$：从正实轴逆时针旋转到向量 $\vec{OP}$ 的夹角，记作 $\text{Arg}(z)$。

  $$\text{Arg}(z) = \theta + 2k\pi \quad (k \in \mathbb{Z})$$

- **幅角主值（Principal Argument）** $\text{arg}(z)$：满足区间 $(-\pi, \pi]$ 的唯一幅角 $\theta$。

##### 💡 核心解答：计算幅角主值时，什么时候需要加减 $\pi$？

由于计算 $\theta = \arctan\left(\frac{b}{a}\right)$ 时，单值 $\arctan$ 函数的值域仅为 $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$，它无法区分第一与第三象限（或第二与第四象限）。因此需要**根据点** $(a,b)$ **所在的象限进行手动修正**：

$$\theta = \text{arg}(z) = \begin{cases}  \arctan\left(\frac{b}{a}\right), & z \text{ 在第一、四象限 (} a > 0 \text{)} \\ \arctan\left(\frac{b}{a}\right) + \pi, & z \text{ 在第二象限 (} a < 0, b \ge 0 \text{)} \\ \arctan\left(\frac{b}{a}\right) - \pi, & z \text{ 在第三象限 (} a < 0, b < 0 \text{)} \\ \frac{\pi}{2}, & a=0, b>0 \\ -\frac{\pi}{2}, & a=0, b<0  \end{cases}$$

#### 2. 复数的三种表示形式

1. **代数形式**：$z = a + bi$

2. **三角形式**：由 $a = r\cos\theta$ 和 $b = r\sin\theta$ 导入：

   $$z = r(\cos\theta + i\sin\theta)$$

3. **指数形式**：借助**欧拉公式** $e^{i\theta} = \cos\theta + i\sin\theta$，复数可写为：

   $$z = r e^{i\theta}$$

#### 3. 形式转换经典例题

##### 📝 【手写例题 2】（第三象限转换）

将复数 $z = -\sqrt{12} - 2i$ 表示为三角形式与指数形式。

**【详细解析】**

1. **化简代数式**：$z = -2\sqrt{3} - 2i$，所以实部 $a = -2\sqrt{3}$，虚部 $b = -2$。

2. **求模长** $r$：

   $$r = |z| = \sqrt{(-2\sqrt{3})^2 + (-2)^2} = \sqrt{12 + 4} = 4$$

3. **求幅角主值** $\theta$： 因为 $a < 0, b < 0$，该点位于**第三象限**。根据象限修正公式：

   $$\theta = \arctan\left(\frac{-2}{-2\sqrt{3}}\right) - \pi = \arctan\left(\frac{1}{\sqrt{3}}\right) - \pi = \frac{\pi}{6} - \pi = -\frac{5}{6}\pi$$

4. **写出转换结果**：

   - **三角形式**：$z = 4\left[\cos\left(-\frac{5}{6}\pi\right) + i\sin\left(-\frac{5}{6}\pi\right)\right]$
   - **指数形式**：$z = 4 e^{-i\frac{5}{6}\pi}$

##### 📝 【非标三角形式转化】（手写补充）

将非标准三角形式 $z = \sin\frac{\pi}{5} + i\cos\frac{\pi}{5}$ 转化为标准三角形式。

**【重要警示】** 标准三角形式要求**实部为余弦** $\cos$**，虚部系数为正弦** $\sin$。而当前表达式实部为 $\sin$，虚部为 $\cos$，不能直接使用其角度。

**【详细解析】** 利用诱导公式 $\sin\alpha = \cos\left(\frac{\pi}{2} - \alpha\right)$ 与 $\cos\alpha = \sin\left(\frac{\pi}{2} - \alpha\right)$ 进行转换：

$$\sin\frac{\pi}{5} = \cos\left(\frac{\pi}{2} - \frac{\pi}{5}\right) = \cos\frac{3\pi}{10}$$

$$\cos\frac{\pi}{5} = \sin\left(\frac{\pi}{2} - \frac{\pi}{5}\right) = \sin\frac{3\pi}{10}$$

由此可得标准三角形式及模长 $r$ 和主值角 $\theta$：

- **标准三角形式**：$z = \cos\frac{3\pi}{10} + i\sin\frac{3\pi}{10} \quad (\text{此时 } r=1)$
- **指数形式**：$z = e^{i\frac{3}{10}\pi}$

### 四、 乘积、商与幂运算（Multiplication, Division & Powers）

> **起承转合提示**：在代数形式下进行高次方或乘除运算非常繁琐。如果转化为**三角形式**或**指数形式**，乘除法将直接变为“模相乘除，幅角相加减”，极其便利。

已知 $z_1 = r_1 e^{i\theta_1}$，$z_2 = r_2 e^{i\theta_2}$：

#### 1. 乘法（模相乘，幅角相加）

$$z_1 \cdot z_2 = (r_1 e^{i\theta_1})(r_2 e^{i\theta_2}) = r_1 r_2 e^{i(\theta_1 + \theta_2)} = r_1 r_2 [\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]$$

#### 2. 除法（模相除，幅角相减）

$$\frac{z_1}{z_2} = \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)} = \frac{r_1}{r_2} [\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)]$$

#### 3. 幂运算与棣莫弗公式（De Moivre's Formula）

复数的 $n$ 次方幂为：

$$z^n = (r e^{i\theta})^n = r^n e^{i n \theta} = r^n (\cos n\theta + i\sin n\theta)$$

特别地，当 $r = 1$ 时，得到著名的**棣莫弗公式**：

$$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$$

##### 📝 【手写例题 3】（高次幂求解）

求 $z^3$，其中 $z = \sqrt{12} - 2i$。

**【关于手写疑惑“我前面的过程好像是错的”的澄清】** 手写稿中提到“我前面的过程好像是错的”。实际上，你的最终答案 $-64i$ **完全正确**！这里为你写出最严谨、无破绽的推导步骤：

1. **化简并写出代数形式**：$z = 2\sqrt{3} - 2i$

2. **求模长**：$r = \sqrt{(2\sqrt{3})^2 + (-2)^2} = \sqrt{12 + 4} = 4$

3. **求幅角（第四象限）**：

   $$\theta = \arctan\left(\frac{-2}{2\sqrt{3}}\right) = \arctan\left(-\frac{1}{\sqrt{3}}\right) = -\frac{\pi}{6}$$

   所以其三角形式为：$z = 4\left[\cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)\right]$

4. **运用棣莫弗公式计算** $z^3$：

   $$z^3 = 4^3 \left[\cos\left(3 \times \left(-\frac{\pi}{6}\right)\right) + i\sin\left(3 \times \left(-\frac{\pi}{6}\right)\right)\right]$$

   $$z^3 = 64 \left[\cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right)\right]$$

   由于 $\cos\left(-\frac{\pi}{2}\right) = 0$，$\sin\left(-\frac{\pi}{2}\right) = -1$：

   $$z^3 = 64 [0 + i(-1)] = -64i$$

### 五、 复数的方根（Roots of Complex Numbers）

#### 1. 方根公式的推导

求解 $w = \sqrt[n]{z}$（即 $w^n = z$）。 设 $z = r e^{i(\theta + 2k\pi)}$（利用周期性引入 $2k\pi$），并设 $w = \rho e^{i\phi}$。 根据 $w^n = z$，得：

$$\rho^n e^{in\phi} = r e^{i(\theta + 2k\pi)}$$

由此可列方程：

1. $\rho^n = r \implies \rho = r^{\frac{1}{n}}$（这是实数域下的开正根）
2. $n\phi = \theta + 2k\pi \implies \phi = \frac{\theta + 2k\pi}{n}$

因此得到复数的 $n$ **次方根公式**：

$$w_k = \sqrt[n]{z} = r^{\frac{1}{n}} \left( \cos\frac{\theta + 2k\pi}{n} + i\sin\frac{\theta + 2k\pi}{n} \right) \quad (k \in \mathbb{Z})$$

#### 2. 核心考点深度解惑

##### ❓ 疑问一：为什么 $k$ 只能取 $0$ 到 $n-1$ 共 $n$ 个数？

**答**：因为三角函数具有 $2\pi$ 周期性。 当我们尝试代入 $k = n$ 时，其对应的角度为：

$$\phi_n = \frac{\theta + 2n\pi}{n} = \frac{\theta}{n} + 2\pi$$

此时 $\cos\phi_n = \cos\left(\frac{\theta}{n}\right)$，$\sin\phi_n = \sin\left(\frac{\theta}{n}\right)$，其对应的值与 $k = 0$ 时完全重合。 同理，当 $k = n+1$ 时与 $k=1$ 重合。因此，**在复数范围内，非零复数** $z$ **的** $n$ **次方根有且仅有** $n$ **个不同的值**，它们在复平面上分布在以原点为圆心、半径为 $r^{1/n}$ 的圆周上，并将其 $n$ **等分**。

##### ❓ 疑问二：$\sqrt[4]{16}$ 的答案真的只有 2 吗？为什么总是忘记加上 $2k\pi$？

**答**：在**实数域**内，由于只考虑实数解，$\sqrt[4]{16}$ 的确只有正根 2（若考虑实数方程解则是 $\pm 2$）。但在**复数域**内，根的数量必须等同于开方次数，即 $\sqrt[4]{16}$ **有 4 个复数解**。 为了求出完整的复数解，必须引入多值性幅角 $\theta + 2k\pi$。

**【计算** $\sqrt[4]{16}$ **的 4 个复数解】**

1. 写出 $16$ 的复数形式：$z = 16 = 16(\cos 0 + i\sin 0)$（模长 $r=16$，幅角主值 $\theta=0$）。

2. 代入方根公式：

   $$w_k = 16^{\frac{1}{4}} \left( \cos\frac{0 + 2k\pi}{4} + i\sin\frac{0 + 2k\pi}{4} \right) = 2 \left( \cos\frac{k\pi}{2} + i\sin\frac{k\pi}{2} \right) \quad (k=0,1,2,3)$$

3. 分别求出 4 个解：

   - $k = 0 \implies w_0 = 2(\cos 0 + i\sin 0) = 2$
   - $k = 1 \implies w_1 = 2\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) = 2i$
   - $k = 2 \implies w_2 = 2(\cos\pi + i\sin\pi) = -2$
   - $k = 3 \implies w_3 = 2\left(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}\right) = -2i$

复数域下 4 个解为：$\pm 2, \pm 2i$。

##### 📝 【手写例题 4】

求 $\sqrt[4]{1+i}$ 的所有复根。

**【SOP 标准作业流程演示】**

- **Step 1：转化为三角形式** 对于 $z = 1+i$，其模长 $r = \sqrt{1^2+1^2} = \sqrt{2}$，幅角主值 $\theta = \arctan(1/1) = \frac{\pi}{4}$：

  $$1+i = \sqrt{2} \left( \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} \right)$$

- **Step 2：代入方根公式**

  $$w_k = (\sqrt{2})^{\frac{1}{4}} \left[ \cos\left( \frac{\frac{\pi}{4} + 2k\pi}{4} \right) + i\sin\left( \frac{\frac{\pi}{4} + 2k\pi}{4} \right) \right] \quad (k=0,1,2,3)$$

  $$w_k = 2^{\frac{1}{8}} \left[ \cos\left( \frac{\pi}{16} + \frac{k\pi}{2} \right) + i\sin\left( \frac{\pi}{16} + \frac{k\pi}{2} \right) \right]$$

- **Step 3：展开求出 4 个不同的根**

  - 当 $k = 0$ 时：$w_0 = 2^{\frac{1}{8}} \left( \cos\frac{\pi}{16} + i\sin\frac{\pi}{16} \right)$
  - 当 $k = 1$ 时：$w_1 = 2^{\frac{1}{8}} \left( \cos\frac{9\pi}{16} + i\sin\frac{9\pi}{16} \right)$
  - 当 $k = 2$ 时：$w_2 = 2^{\frac{1}{8}} \left( \cos\frac{17\pi}{16} + i\sin\frac{17\pi}{16} \right)$
  - 当 $k = 3$ 时：$w_3 = 2^{\frac{1}{8}} \left( \cos\frac{25\pi}{16} + i\sin\frac{25\pi}{16} \right)$

### 六、 共轭复数（Conjugate Complex Numbers）

#### 1. 概念与几何意义

设 $z = a + bi$，其**共轭复数**（记作 $\bar{z}$）定义为实部相同、虚部互为相反数的复数：

$$\bar{z} = a - bi$$

**几何意义**：在复平面上，共轭复数 $z$ 与 $\bar{z}$ **关于实轴对称**。

#### 2. 核心代数关系（用 $z$ 与 $\bar{z}$ 表达实部、虚部）

通过联立 $z = a + bi$ 与 $\bar{z} = a - bi$，我们可以得到两个将复数分拆的重要公式：

- **求实部**：$z + \bar{z} = 2a \implies a = \text{Re}(z) = \frac{z + \bar{z}}{2}$

- **求虚部**：$z - \bar{z} = 2bi \implies b = \text{Im}(z) = \frac{z - \bar{z}}{2i}$

  > **公式化简小技巧**：分母上的虚数单位 $i$ 可以通过分子分母同乘以 $i$（或利用 $1/i = -i$）移动到分子，从而写成手写笔记中的漂亮结构：
  >
  > $$b = \text{Im}(z) = -\frac{i}{2}(z - \bar{z})$$

#### 3. 模与共轭的乘积关系

$$z \cdot \bar{z} = (a+bi)(a-bi) = a^2 + b^2 = |z|^2$$

即**复数与其共轭复数的乘积，等于该复数模长的平方**。这也是我们在“除法”中进行分母实数化的理论依据！

#### 4. 共轭运算的基本性质

- $\overline{z_1 \pm z_2} = \bar{z}_1 \pm \bar{z}_2$（共轭运算对加减法具有分配律）
- $\overline{z_1 \cdot z_2} = \bar{z}_1 \cdot \bar{z}_2$（共轭运算对乘法具有分配律）
- $\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\bar{z}_1}{\bar{z}_2}$
- $\overline{(\bar{z})} = z$（双重共轭等于其自身）






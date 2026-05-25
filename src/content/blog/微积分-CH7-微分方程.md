---
title: "微积分-CH7-微分方程"
slug: "微积分-CH7-微分方程"
description: "微分方程从大类上分为一阶微分方程和二阶微分方程。"
pubDate: 2026-05-04
updatedDate: 2026-05-04
tags:
  - 修考
  - 微积分
category: 修考
draft: false
heroImage: /images/posts/calculus-ch7-differential-equations/cover.png
---
[TOC]
<iframe src="https://drive.google.com/file/d/15NJcGlSc1ICiUh9A3HpmB-ibwseRpr3A/preview" width="640" height="480"></iframe>

- [Section 1.1 : Definitions](https://tutorial.math.lamar.edu/Classes/DE/Definitions.aspx)



<iframe src="https://drive.google.com/file/d/1Nb6qV7uXlGi1cY7VHmI809apAUAdBvdH/preview" width="840" height="480"></iframe>

<iframe src="https://drive.google.com/file/d/15NBqpR8CaXULN28PhNlMCMgWCPIK-7O2/preview" width="840" height="480"></iframe>



4. # 📘 微分方程全能解题指南与考点精析

   微分方程的核心意义在于：**当已知一个未知函数的导数关系（即瞬时变化规律）时，通过建立方程、运用代换降维或结构转化，逆向求出系统的原状态函数** $y(x)$**。**

   ## 🎯 一阶微分方程解题决策树
   
   在面对任何一阶常微分方程时，应在脑海中快速检索以下分类步骤：
   
   ```mermaid
   graph TD
       %% 流程节点定义
       A([拿到一阶微分方程])
       
       %% 第一层判断
       B{是否可分离变量?<br>dy/dx = f_x * g_y}
       C{形如 dy/dx = f_ax+by+c ?}
       
       A --> B
       A --> C
   
       %% 左侧分支：可分离变量
       B -- 是 --> B1[直接分离变量并积分求解]
       
       %% 右侧分支：特殊代换
       C -- 是 --> C1["令 u = ax+by+c 换元<br>转化为可分离变量方程"]
       C -- 否 --> D{是否含有分式/齐次型?<br>dy/dx = f_y/x}
       D -- 是 --> D1["齐次方程: 令 u = y/x<br>代入 dy/dx = u + x * du/dx"]
   
       %% 核心结构分支
       B1 --> E{判断方程结构}
       C1 --> E
       D -- 否 --> E
       D1 --> E
   
       %% 线性结构
       E --> F{"1. 线性结构?<br>y' + P_x*y = Q_x*yⁿ"}
       F -- "n = 0 或 1<br>一阶线性" --> F1["直接套用求根公式<br>或采用常数变易法"]
       F -- "n ≠ 0, 1<br>伯努利方程" --> F2["全式除以 yⁿ，令 z = y¹⁻ⁿ<br>转化为一阶线性方程"]
   
       %% 全微分结构
       E --> G{"2. 全微分方程?<br>P_x,y dx + Q_x,y dy = 0<br>且偏导 dP/dy = dQ/dx"}
       G -- 是 --> G1[采用偏积分法或对偶线积分法求解]
       G -- 否 --> G2["寻找单变量积分因子 μ_x 或 μ_y<br>乘入原式使其成为全微分"]
   
       %% 几何与特殊
       E --> H{"3. 几何与特殊类型"}
       H --> H1["<b>几何构建</b><br>求导后消去方程中的任意常数 C"]
       H --> H2["<b>正交轨迹</b><br>将原方程中的 y' 替换为 -1/y' 建立新方程"]
       H --> H3["<b>克莱罗方程</b><br>y = xy' + f_y'<br>求通解直线族与奇异解包络线"]
   
       %% 样式定义与统一绑定
       classDef startEnd fill:#f9f,stroke:#333,stroke-width:2px;
       classDef condition fill:#ffecc0,stroke:#ffb300,stroke-width:2px;
       classDef process fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px;
       classDef special fill:#e8f5e9,stroke:#4caf50,stroke-width:2px;
   
       class A startEnd;
       class B,C,D,E,F,G,H condition;
       class B1,C1,D1,F1,F2,G1,G2 process;
       class H1,H2,H3 special;
   ```
   
   ## 第一章：微分方程基本概念
   
   ### 1.1 核心定义与分类
   
   - **阶数 (Order)**：微分方程中出现的导数的最高阶数。
   - **线性微分方程判定（“三不许”法则）**： 若方程关于 $y$ 及其各阶导数 $y', y'', \dots, y^{(n)}$ 是线性的，必须满足以下三个条件：
     1. **不许相乘**：$y$ 及其导数之间不能相乘（如 $y \cdot y'$ 是非线性的）。
     2. **不许有幂次**：$y$ 或其各阶导数的指数只能为通常的 1（如 $y^2$、$(y')^3$ 是非线性的）。
     3. **不许嵌套**：$y$ 及其各阶导数不能作为其他非线性函数（如三角函数、指数函数、对数函数等）的自变量（如 $\sin(y)$、$e^{y'}$ 是非线性的）。
   
   ### 1.2 解的分类与物理/几何意义
   
   - **通解 (General Solution)**：含有独立任意常数的个数与微分方程的阶数相等的解。
   - **特解 (Particular Solution)**：通过给定初始条件或边界条件确定了常数值后的解。
   - **初值问题 (IVP)**：约束条件全部在**同一个自变量点**给出。例如：$y(0) = y_0, y'(0) = y'_0$。
   - **边值问题 (BVP)**：约束条件在**两个或多个不同的自变量点**给出。例如：$y(0) = a, y(L) = b$。
   
   ### 1.3 考点一：初值问题 (IVP) 与边值问题 (BVP) 的解法对比
   
   #### 📝 经典例题
   
   设二阶微分方程为 $y'' + y = 0$，已知其通解形式为 $y(x) = C_1 \cos x + C_2 \sin x$。
   
   1. 求解满足初始条件 $y(0) = 2, y'(0) = 1$ 的特解。
   2. 求解满足边界条件 $y(0) = 2, y\left(\frac{\pi}{2}\right) = 1$ 的特解。
   
   #### 💡 详细步骤
   
   **第一问：初值问题 (IVP)**
   
   1. **求导通解**：
   
      $$y'(x) = -C_1 \sin x + C_2 \cos x$$
   
   2. **带入** $x = 0$ **的初始条件**：
   
      $$y(0) = C_1 \cos 0 + C_2 \sin 0 = 2 \implies C_1 = 2$$
   
      $$y'(0) = -C_1 \sin 0 + C_2 \cos 0 = 1 \implies C_2 = 1$$
   
   3. **确定特解**：
   
      $$y(x) = 2 \cos x + \sin x$$
   
   **第二问：边值问题 (BVP)**
   
   1. **带入第一个边界点** $x = 0$：
   
      $$y(0) = C_1 \cos 0 + C_2 \sin 0 = 2 \implies C_1 = 2$$
   
   2. **带入第二个边界点** $x = \frac{\pi}{2}$：
   
      $$y\left(\frac{\pi}{2}\right) = C_1 \cos\left(\frac{\pi}{2}\right) + C_2 \sin\left(\frac{\pi}{2}\right) = 1 \implies C_1 \cdot 0 + C_2 \cdot 1 = 1 \implies C_2 = 1$$
   
   3. **确定特解**：
   
      $$y(x) = 2 \cos x + \sin x$$
   
   ### 1.4 考点二：从几何曲线族构建微分方程 (DE Formulation)
   
   **方法核心**：若已知含有 $n$ 个独立任意常数 $C_i$ 的曲线族方程，通过对该方程连续求导 $n$ 次，并与原方程联立**消去所有的任意常数**，即可建立该曲线族满足的微分方程。
   
   #### 📝 经典例题
   
   求在直角坐标系中，所有与 $y$ 轴相切于原点的圆族所满足的微分方程。
   
   #### 💡 详细步骤
   
   1. **建立几何曲线族方程**： 圆心在 $x$ 轴上且与 $y$ 轴相切于原点，设圆心为 $(\frac{C}{2}, 0)$，半径为 $\frac{C}{2}$。其圆方程为：
   
      $$\left(x - \frac{C}{2}\right)^2 + y^2 = \left(\frac{C}{2}\right)^2 \implies x^2 - Cx + \frac{C^2}{4} + y^2 = \frac{C^2}{4}$$
   
      整理得：
   
      $$x^2 + y^2 = Cx \quad (C \neq 0)$$
   
   2. **两边关于** $x$ **求导**：
   
      $$2x + 2y \frac{dy}{dx} = C \implies C = 2x + 2yy'$$
   
   3. **代回原方程消去常数** $C$： 将 $C$ 的表达式代入 $x^2 + y^2 = Cx$：
   
      $$x^2 + y^2 = (2x + 2yy')x \implies x^2 + y^2 = 2x^2 + 2xyy'$$
   
      整理得到所求的微分方程：
   
      $$x^2 + 2xy\frac{dy}{dx} - y^2 = 0$$
   
   ## 第二章：一阶微分方程的分类与求解
   
   ### 2.1 可分离变量微分方程 (Separation of Variables)
   
   **标准形式**：
   
   $$\frac{dy}{dx} = f(x)g(y)$$
   
   **解题步骤**：将含 $y$ 的项移至等号左边，含 $x$ 的项移至等号右边，两边同时求积分。
   
   #### 📝 经典例题
   
   解微分方程：$y' = 2xy$。
   
   #### 💡 详细步骤
   
   1. **写成微分形式并分离变量**：
   
      $$\frac{dy}{dx} = 2xy \implies \frac{1}{y} dy = 2x dx \quad (y \neq 0)$$
   
   2. **两边同时求不定积分**：
   
      $$\int \frac{1}{y} dy = \int 2x dx \implies \ln|y| = x^2 + C_0$$
   
   3. **求解原函数** $y(x)$：
   
      $$|y| = e^{x^2 + C_0} = e^{C_0} \cdot e^{x^2}$$
   
      令 $C = \pm e^{C_0}$（且考虑到 $y = 0$ 也是原方程的平凡解），故通解为：
   
      $$y(x) = C e^{x^2} \quad (C \text{ 为任意常数})$$
   
   ### 2.2 齐次微分方程与换元法 (Homogeneous & Substitution)
   
   #### 2.2.1 齐次形 $y' = f\left(\frac{y}{x}\right)$
   
   **解题核心**：引入新变量 $u = \frac{y}{x}$，即 $y = ux$。两边求导得 $y' = u + x u'$，带入原方程将其转化为可分离变量方程。
   
   #### 📝 经典例题
   
   解微分方程：$(x^2 + y^2)dx - xydy = 0$。
   
   #### 💡 详细步骤
   
   1. **变形为标准齐次形式**：
   
      $$\frac{dy}{dx} = \frac{x^2 + y^2}{xy} = \frac{x}{y} + \frac{y}{x}$$
   
   2. **引入代换** $y = ux \implies \frac{dy}{dx} = u + x\frac{du}{dx}$：
   
      $$u + x\frac{du}{dx} = \frac{1}{u} + u \implies x\frac{du}{dx} = \frac{1}{u}$$
   
   3. **分离变量并积分**：
   
      $$u du = \frac{1}{x} dx \implies \int u du = \int \frac{1}{x} dx$$
   
      $$\frac{1}{2}u^2 = \ln|x| + C_0 \implies u^2 = 2\ln|x| + 2C_0$$
   
   4. **还原变量并整理**： 将 $u = \frac{y}{x}$ 代回上式，并令 $C = 2C_0$：
   
      $$\frac{y^2}{x^2} = 2\ln|x| + C \implies y^2 = x^2 (2\ln|x| + C)$$
   
   #### 2.2.2 线性代换形 $y' = f(ax+by+c)$
   
   **解题核心**：令整个多项式为新自变量 $u = ax+by+c$，则对 $x$ 求导可得 $u' = a + b y' \implies y' = \frac{u' - a}{b}$，带入原方程即可分离变量。
   
   #### 📝 经典例题
   
   解微分方程：$\frac{dy}{dx} = (3x + 2y + 1)^2$。
   
   #### 💡 详细步骤
   
   1. **设代换元**： 令 $u = 3x + 2y + 1$，两边对 $x$ 求导得：
   
      $$\frac{du}{dx} = 3 + 2\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{\frac{du}{dx} - 3}{2}$$
   
   2. **代入原方程建立关于** $u$ **的新方程**：
   
      $$\frac{\frac{du}{dx} - 3}{2} = u^2 \implies \frac{du}{dx} = 2u^2 + 3$$
   
   3. **分离变量并积分**：
   
      $$\frac{1}{2u^2 + 3} du = dx \implies \int \frac{1}{2u^2 + 3} du = \int dx$$
   
      利用积分公式 $\int \frac{1}{x^2 + a^2} dx = \frac{1}{a} \arctan\left(\frac{x}{a}\right)$，此处将分母变形为 $2\left(u^2 + \frac{3}{2}\right)$：
   
      $$\frac{1}{2} \int \frac{1}{u^2 + \left(\sqrt{\frac{3}{2}}\right)^2} du = \frac{1}{2} \cdot \sqrt{\frac{2}{3}} \arctan \left( \sqrt{\frac{2}{3}} u \right) = \frac{\sqrt{6}}{6} \arctan \left( \frac{\sqrt{6}}{3}u \right)$$
   
      故积分结果为：
   
      $$\frac{\sqrt{6}}{6} \arctan \left( \frac{\sqrt{6}}{3}u \right) = x + C$$
   
   4. **还原变量**： 将 $u = 3x + 2y + 1$ 代回：
   
      $$\frac{\sqrt{6}}{6} \arctan \left[ \frac{\sqrt{6}}{3}(3x + 2y + 1) \right] = x + C$$
   
   #### 2.2.3 线性分式形 $\frac{dy}{dx} = f\left( \frac{ax + by + c}{px + qy + r} \right)$
   
   **解题核心**：取决于两条直线 $ax + by + c = 0$ 与 $px + qy + r = 0$ 的空间几何位置，计算交叉乘积之差：$\Delta = aq - bp$。
   
   - **情况一：**$\Delta = aq - bp = 0$**（两直线平行）**： 说明系数成比例，即 $px + qy = k(ax + by)$。直接令 $u = ax + by$ 进行代换。
   - **情况二：**$\Delta = aq - bp \neq 0$**（两直线相交）**： 利用坐标平移，将坐标原点平移至两直线交点 $(\alpha, \beta)$。令 $x = u + \alpha, y = v + \beta \implies dx = du, dy = dv$，消去常数项，转化为标准的同次齐次方程。
   
   #### 📝 经典例题（两直线平行：$\Delta = 0$）
   
   解微分方程：$(x + y + 1)dx + (2x + 2y - 1)dy = 0$。
   
   #### 💡 详细步骤
   
   1. **系数分析**： 变形方程为：
   
      $$\frac{dy}{dx} = -\frac{x + y + 1}{2x + 2y - 1}$$
   
      此处分子系数 $(1, 1)$ 与分母系数 $(2, 2)$ 比例一致，即 $2x+2y = 2(x+y)$，行列式值 $\Delta = 1\times 2 - 1\times 2 = 0$。
   
   2. **设代换元**： 令 $u = x + y \implies y = u - x \implies \frac{dy}{dx} = \frac{du}{dx} - 1$。
   
   3. **带入方程化简**：
   
      $$\frac{du}{dx} - 1 = -\frac{u + 1}{2u - 1} \implies \frac{du}{dx} = 1 - \frac{u + 1}{2u - 1} = \frac{u - 2}{2u - 1}$$
   
   4. **分离变量并积分**：
   
      $$\frac{2u - 1}{u - 2} du = dx \implies \left( 2 + \frac{3}{u - 2} \right) du = dx$$
   
      两边积分：
   
      $$\int \left( 2 + \frac{3}{u - 2} \right) du = \int dx \implies 2u + 3\ln|u - 2| = x + C_1$$
   
   5. **还原变量**： 代回 $u = x+y$：
   
      $$2(x + y) + 3\ln|x + y - 2| = x + C_1 \implies x + 2y + 3\ln|x + y - 2| = C_1$$
   
   #### 📝 经典例题（两直线相交：$\Delta \neq 0$）
   
   解微分方程：$\frac{dy}{dx} = \frac{x + y - 1}{x - y + 3}$。
   
   #### 💡 详细步骤
   
   1. **系数分析并求交点**： 交叉相乘之差 $\Delta = 1\times(-1) - 1\times 1 = -2 \neq 0$。求交点方程组：
   
      $$\begin{cases} x + y - 1 = 0 \\ x - y + 3 = 0 \end{cases} \implies \alpha = -1, \beta = 2$$
   
   2. **平移坐标变换**： 令 $x = u - 1, y = v + 2 \implies dx = du, dy = dv$，代入原方程：
   
      $$\frac{dv}{du} = \frac{(u - 1) + (v + 2) - 1}{(u - 1) - (v + 2) + 3} = \frac{u + v}{u - v}$$
   
   3. **齐次化求解**： 变形为 $\frac{dv}{du} = \frac{1 + \frac{v}{u}}{1 - \frac{v}{u}}$。令 $v = ku \implies \frac{dv}{du} = k + u\frac{dk}{du}$：
   
      $$k + u\frac{dk}{du} = \frac{1 + k}{1 - k} \implies u\frac{dk}{du} = \frac{1 + k}{1 - k} - k = \frac{1 + k^2}{1 - k}$$
   
   4. **分离变量积分**：
   
      $$\frac{1 - k}{1 + k^2} dk = \frac{1}{u} du \implies \left( \frac{1}{1 + k^2} - \frac{k}{1 + k^2} \right) dk = \frac{1}{u} du$$
   
      $$\arctan k - \frac{1}{2}\ln(1 + k^2) = \ln|u| + C_0$$
   
      $$\arctan k = \ln|u|\sqrt{1 + k^2} + C_0$$
   
   5. **还原原坐标系变量**： 将 $k = \frac{v}{u}$ 代回：
   
      $$\arctan\left(\frac{v}{u}\right) = \ln\sqrt{u^2 + v^2} + C_0$$
   
      代入最初平移公式 $u = x+1, v = y-2$：
   
      $$\arctan\left(\frac{y - 2}{x + 1}\right) = \ln\sqrt{(x + 1)^2 + (y - 2)^2} + C_0$$
   
   ### 2.3 一阶线性微分方程 (First-Order Linear DE)
   
   **标准形式**：
   
   $$\frac{dy}{dx} + P(x)y = Q(x)$$
   
   - 若 $Q(x) = 0$，称为**齐次线性方程**。
   - 若 $Q(x) \neq 0$，称为**非齐次线性方程**。
   
   **通解通用公式**：
   
   $$y(x) = e^{-\int P(x)dx} \left[ \int Q(x) e^{\int P(x)dx} dx + C \right]$$
   
   #### 📝 经典例题
   
   解微分方程：$(x^2 - 1)dy + (2xy - \cos x)dx = 0$。
   
   #### 💡 详细步骤
   
   1. **标准化变形**： 两边同除以 $(x^2 - 1)dx$：
   
      $$\frac{dy}{dx} + \frac{2x}{x^2 - 1}y = \frac{\cos x}{x^2 - 1}$$
   
      此处满足标准一阶非齐次形式，其中 $P(x) = \frac{2x}{x^2 - 1}$，$Q(x) = \frac{\cos x}{x^2 - 1}$。
   
   2. **计算核心积分因子** $e^{\int P(x)dx}$：
   
      $$\int P(x) dx = \int \frac{2x}{x^2 - 1} dx = \ln|x^2 - 1| \implies e^{\int P(x)dx} = x^2 - 1$$
   
   3. **套用通解公式**：
   
      $$y(x) = \frac{1}{x^2 - 1} \left[ \int \frac{\cos x}{x^2 - 1} \cdot (x^2 - 1) dx + C \right]$$
   
      $$y(x) = \frac{1}{x^2 - 1} \left[ \int \cos x dx + C \right] = \frac{\sin x + C}{x^2 - 1}$$
   
   ### 2.4 伯努利方程 (Bernoulli Equation)
   
   **标准形式**：
   
   $$y' + P(x)y = Q(x)y^n \quad (n \neq 0, 1)$$
   
   **求解核心**：
   
   1. 方程两边同除以 $y^n$，得到：
   
      $$y^{-n}y' + P(x)y^{1-n} = Q(x)$$
   
   2. 设新变量 $z = y^{1-n}$。对 $x$ 求导：
   
      $$z' = (1-n)y^{-n}y' \implies y^{-n}y' = \frac{1}{1-n}z'$$
   
   3. 代入后，将非线性方程降维打击为**关于** $z$ **的一阶线性微分方程**：
   
      $$z' + (1-n)P(x)z = (1-n)Q(x)$$
   
   #### 📝 经典例题
   
   解微分方程：$y' + \frac{1}{x}y = x^2 y^3$。
   
   #### 💡 详细步骤
   
   1. **除以** $y^3$ **降维**：
   
      $$y^{-3}y' + \frac{1}{x}y^{-2} = x^2$$
   
   2. **设代换变量** $z = y^{-2}$：
   
      $$z' = -2y^{-3}y' \implies y^{-3}y' = -\frac{1}{2}z'$$
   
   3. **带回建立关于** $z$ **的一阶标准线性方程**：
   
      $$-\frac{1}{2}z' + \frac{1}{x}z = x^2 \implies z' - \frac{2}{x}z = -2x^2$$
   
      此处关于 $z$ 满足线性方程，其 $P_z(x) = -\frac{2}{x}$，$Q_z(x) = -2x^2$。
   
   4. **计算** $z$ **的通解**：
   
      - 计算积分因子：$e^{\int P_z(x)dx} = e^{-2\ln|x|} = x^{-2}$。
   
      - 套用线性通解公式：
   
        $$z(x) = x^2 \left[ \int (-2x^2) \cdot x^{-2} dx + C \right] = x^2 \left[ \int -2 dx + C \right] = x^2 (C - 2x)$$
   
   5. **还原原变量** $y$： 因为 $z = y^{-2} = \frac{1}{y^2}$，故通解为：
   
      $$\frac{1}{y^2} = x^2(C - 2x) \implies y^2 = \frac{1}{Cx^2 - 2x^3}$$
   
   ### 2.5 全微分方程与积分因子 (Exact DE & Integrating Factors)
   
   #### 2.5.1 全微分方程 (Exact Differential Equation)
   
   **判定标准**： 对于 $P(x,y)dx + Q(x,y)dy = 0$，若在目标区域内恒有：
   
   $$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$
   
   则方程为全微分方程。 
   
   **解题步骤**： 原函数 $u(x,y) = C$。计算原函数最通用的方法是**偏积分法**：
   
   $$u(x,y) = \int P(x,y)dx + \phi(y)$$
   
   利用 $\frac{\partial u}{\partial y} = Q(x,y)$ 确定未知函数 $\phi(y)$ 的表达式。
   
   #### 📝 经典例题 (教材经典题)
   
   解微分方程：$(y^2 + e^x \sin y)dx + (2xy + e^x \cos y)dy = 0$。
   
   #### 💡 详细步骤
   
   1. **全微分判定**：
   
      $$P(x,y) = y^2 + e^x \sin y \implies \frac{\partial P}{\partial y} = 2y + e^x \cos y$$
   
      $$Q(x,y) = 2xy + e^x \cos y \implies \frac{\partial Q}{\partial x} = 2y + e^x \cos y$$
   
      由于 $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ 恒成立，故原方程为全微分方程。
   
   2. **偏积分法求解原函数**： 对 $P(x,y)$ 关于 $x$ 偏求积分（此时将 $y$ 视为常数）：
   
      $$u(x,y) = \int (y^2 + e^x \sin y)dx = xy^2 + e^x \sin y + \phi(y)$$
   
   3. **求偏导比对** $Q(x,y)$ **确定** $\phi(y)$：
   
      $$\frac{\partial u}{\partial y} = 2xy + e^x \cos y + \phi'(y) = 2xy + e^x \cos y$$
   
      由此可得：
   
      $$\phi'(y) = 0 \implies \phi(y) = C_0$$
   
   4. **写出通解**：
   
      $$xy^2 + e^x \sin y = C \quad (C \text{ 为任意常数})$$
   
   #### 2.5.2 积分因子法 (Integrating Factor)
   
   当 $\frac{\partial P}{\partial y} \neq \frac{\partial Q}{\partial x}$ 时，方程非全微分。但如果能找到一个因子 $\mu(x,y)$，使得 $\mu P dx + \mu Q dy = 0$ 成为全微分方程，则称其为**积分因子**。 **常见单变量积分因子判定律**：
   
   - 若 $\frac{1}{Q}\left(\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}\right) = F(x)$ 仅与 $x$ 相关 $\implies \mu(x) = e^{\int F(x)dx}$
   - 若 $\frac{1}{P}\left(\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}\right) = G(y)$ 仅与 $y$ 相关 $\implies \mu(y) = e^{-\int G(y)dy}$
   
   #### 📝 经典例题
   
   解微分方程：$(1 - 2x^2y)dx + x(2y - x^2)dy = 0$。
   
   #### 💡 详细步骤
   
   1. **测试全微分性质**：
   
      $$P = 1 - 2x^2y \implies \frac{\partial P}{\partial y} = -2x^2$$
   
      $$Q = 2xy - x^3 \implies \frac{\partial Q}{\partial x} = 2y - 3x^2$$
   
      非全微分方程。
   
   2. **检测并求积分因子**： 计算偏导之差：$\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} = -2x^2 - (2y - 3x^2) = x^2 - 2y$。 测试关于 $x$ 的单变量依赖：
   
      $$\frac{1}{Q}\left(\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}\right) = \frac{x^2 - 2y}{x(2y - x^2)} = -\frac{2y - x^2}{x(2y - x^2)} = -\frac{1}{x}$$
   
      此式仅与 $x$ 相关，故存在积分因子：
   
      $$\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln|x|} = \frac{1}{x} \quad (x > 0)$$
   
   3. **两边乘以** $\mu(x)$ **构建全微分方程**：
   
      $$\left(\frac{1}{x} - 2xy\right)dx + (2y - x^2)dy = 0$$
   
      此时，新方程中 $P_{new} = \frac{1}{x} - 2xy$，$Q_{new} = 2y - x^2$，容易验证 $\frac{\partial P_{new}}{\partial y} = \frac{\partial Q_{new}}{\partial x} = -2x$。
   
   4. **偏积分求解**：
   
      $$u(x,y) = \int \left(\frac{1}{x} - 2xy\right)dx = \ln|x| - x^2y + \phi(y)$$
   
      对 $y$ 偏导比对：
   
      $$\frac{\partial u}{\partial y} = -x^2 + \phi'(y) = 2y - x^2 \implies \phi'(y) = 2y \implies \phi(y) = y^2$$
   
      故原方程通解为：
   
      $$\ln|x| - x^2y + y^2 = C$$
   
   ### 2.6 克莱罗方程 (Clairaut's Equation) 与包络线
   
   **标准形式**：
   
   $$y = x y' + f(y')$$
   
   **解题核心**：
   
   1. **求一般解**：令 $y' = C$，直接代入即为直线族通解：
   
      $$y = Cx + f(C)$$
   
   2. **求奇异解（包络线）**： 对一般解关于参数 $C$ 求偏导：
   
      $$\frac{\partial}{\partial C}\left[ Cx + f(C) - y \right] = 0 \implies x + f'(C) = 0$$
   
      由此消去参数 $C$，即可得到切于上述所有一般解直线的曲线（奇异解）。
   
   #### 📝 经典例题
   
   解微分方程 $y = x y' + (y')^2 - 1$，并求出它的奇异解（包络线）。
   
   #### 💡 详细步骤
   
   1. **换元法理论求导推导**： 令 $y' = p$，则方程写为 $y = px + p^2 - 1$。 两边对 $x$ 求导：
   
      $$y' = p = p + x p' + 2p p' \implies p'(x + 2p) = 0$$
   
   2. **分支一：确定一般解**： 由 $p' = 0 \implies p = C$（常数）。 代回原方程，得一般解：
   
      $$\mathbf{y = Cx + C^2 - 1} \quad (\text{直线族})$$
   
   3. **分支二：确定奇异解**： 由 $x + 2p = 0 \implies p = -\frac{x}{2}$。 代回原方程消去 $p$：
   
      $$y = \left(-\frac{x}{2}\right)x + \left(-\frac{x}{2}\right)^2 - 1 = -\frac{x^2}{4} - 1$$
   
      故奇异解（包络线）为：
   
      $$\mathbf{y = -\frac{1}{4}x^2 - 1} \quad (\text{抛物线})$$
   
   4. **验证偏导法**： 对一般解中关于 $C$ 求导：$\frac{d}{dC}(Cx + C^2 - 1) = 0 \implies x + 2C = 0 \implies C = -\frac{x}{2}$，代回同样可得奇异解。
   
   ### 2.7 几何应用：正交轨迹群 (Orthogonal Trajectories)
   
   **解题核心**： 若要寻找一个曲线族，与给定的曲线族 $F(x, y, C) = 0$ 处处正交垂直：
   
   1. 先对原曲线方程求导，**消去常数** $C$，建立原曲线族的微分方程：$y' = g(x, y)$。
   2. 因为正交，正交切线斜率满足 $y'_{orth} \cdot y'_{orig} = -1$。因此，**将原微分方程中的** $y'$ **直接替换为** $-\frac{1}{y'}$。
   3. 求解这个新建立的微分方程。
   
   #### 📝 经典例题
   
   求抛物线族 $y^2 = Cx$ 的正交轨迹群。
   
   #### 💡 详细步骤
   
   1. **建立原曲线族的微分方程**： 对原方程求导：$2yy' = C$。 由于原式 $C = \frac{y^2}{x}$，代入消去 $C$：
   
      $$2yy' = \frac{y^2}{x} \implies y' = \frac{y}{2x}$$
   
   2. **构建正交关系新方程**： 将 $y'$ 替换为 $-\frac{1}{y'}$：
   
      $$-\frac{1}{y'} = \frac{y}{2x} \implies y' = -\frac{2x}{y}$$
   
   3. **分离变量法求解**：
   
      $$y dy = -2x dx \implies \int y dy = \int -2x dx$$
   
      $$\frac{1}{2}y^2 = -x^2 + C_0 \implies 2x^2 + y^2 = C \quad (C = 2C_0)$$
   
      **几何几何意义**：抛物线群 $y^2 = Cx$ 的正交轨迹是一组同心的椭圆群 $2x^2 + y^2 = C$。
   
   ## 第三章：二阶可降阶微分方程
   
   针对无法直接求解的二阶方程，通过变量代换，消去 $y$ 或 $x$，将其降为一阶微分方程进行逐级突破。
   
   | 类型特征                                     | SOP 解题步骤                                                 |
   | -------------------------------------------- | ------------------------------------------------------------ |
   | **类型 ①：**$y'' = f(x)$                     | **直接连续两次积分**即可求解。                               |
   | **类型 ②：**$y'' = f(x, y')$  (缺原函数 $y$) | **令一阶导为新自变量** $p$：令 $y' = p$，则 $y'' = \frac{dp}{dx}$。带入求解关于 $p(x)$ 的一阶方程，求得 $p$ 后再积分一次还原 $y$。 |
   | **类型 ③：**$y'' = f(y, y')$  (缺自变量 $x$) | **利用链式法则将** $y$ **视作自变量**：令 $y' = p(y)$。利用复合函数链式法则对 $x$ 求导：$y'' = \frac{dp}{dx} = \frac{dp}{dy} \cdot \frac{dy}{dx} = p \frac{dp}{dy}$。代入转化为关于 $p(y)$ 的一阶方程。 |
   
   ### 📝 经典例题 (类型 ①)
   
   解微分方程：$y'' = \sin x$。
   
   #### 💡 详细步骤
   
   1. **进行第一次积分**：
   
      $$y' = \int \sin x dx = -\cos x + C_1$$
   
   2. **进行第二次积分**：
   
      $$y = \int (-\cos x + C_1) dx = -\sin x + C_1x + C_2$$
   
   ### 📝 经典例题 (类型 ②)
   
   解微分方程：$(1+x^2)y'' = 2xy'$。
   
   #### 💡 详细步骤
   
   1. **换元降阶**： 令 $y' = p$，则 $y'' = \frac{dp}{dx}$。
   
      $$(1+x^2)\frac{dp}{dx} = 2xp \implies \frac{dp}{p} = \frac{2x}{1+x^2} dx \quad (p \neq 0)$$
   
   2. **分离变量积分求出** $p(x)$：
   
      $$\int \frac{1}{p} dp = \int \frac{2x}{1+x^2} dx \implies \ln|p| = \ln(1+x^2) + C_0$$
   
      $$p(x) = C_1(1+x^2) \quad (C_1 = \pm e^{C_0})$$
   
   3. **二次积分还原** $y(x)$：
   
      $$y' = C_1(1+x^2) \implies y = C_1 \int (1+x^2)dx$$
   
      $$y(x) = C_1 \left( x + \frac{1}{3}x^3 \right) + C_2$$
   
   ### 📝 经典例题 (类型 ③)
   
   解微分方程：$2yy'' + (y')^2 = 0$。
   
   #### 💡 详细步骤
   
   1. **链式法则换元降阶**： 令 $y' = p$，则 $y'' = p \frac{dp}{dy}$。代入原方程：
   
      $$2yp\frac{dp}{dy} + p^2 = 0 \implies p \left( 2y\frac{dp}{dy} + p \right) = 0$$
   
      - 若 $p = 0 \implies y = C$（平凡常数解）。
      - 若 $2y\frac{dp}{dy} + p = 0$：
   
   2. **解关于** $p$ **的一阶可分离变量方程**：
   
      $$2y\frac{dp}{dy} = -p \implies \frac{2}{p} dp = -\frac{1}{y} dy \quad (p, y \neq 0)$$
   
      $$\int \frac{2}{p} dp = -\int \frac{1}{y} dy \implies 2\ln|p| = -\ln|y| + C_0 \implies \ln(p^2) = \ln\left(\frac{1}{|y|}\right) + C_0$$
   
      $$p^2 = \frac{C_1}{y} \implies p = \pm \sqrt{\frac{C_1}{y}}$$
   
   3. **二次积分还原** $y(x)$：
   
      $$\frac{dy}{dx} = \pm \frac{\sqrt{C_1}}{\sqrt{y}} \implies \sqrt{y} dy = \pm \sqrt{C_1} dx$$
   
      两边积分：
   
      $$\int y^{1/2} dy = \pm \sqrt{C_1} \int dx \implies \frac{2}{3}y^{3/2} = \pm \sqrt{C_1}x + C_2$$
   
      两边平方整理可写成隐函数形式通解。
   
   ## 第四章：二阶常系数线性微分方程
   
   ### 4.1 齐次方程：$y'' + py' + qy = 0$
   
   建立特征方程：
   
   $$r^2 + pr + q = 0$$
   
   计算判别式 $\Delta = p^2 - 4q$，确定通解形式：
   
   - $\Delta > 0$**：两个不相等实根** $r_1 \neq r_2$
   
     $$y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}$$
   
   - $\Delta = 0$**：两个相等实根** $r_1 = r_2 = r$
   
     $$y(x) = (C_1 + C_2 x) e^{r x}$$
   
   - $\Delta < 0$**：一对共轭复根** $r = \alpha \pm \beta i$
   
     $$y(x) = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x)$$
   
   ### 4.2 非齐次方程待定系数法 (Undetermined Coefficients)
   
   针对 $y'' + py' + qy = f(x)$，若非齐次项 $f(x)$ 是常见函数（多项式、指数、三角函数），可以通过“猜测”特解的形式求解：
   
   | 自由项 $f(x)$ 的具体形式                                 | 猜测特解 $y_p(x)$ 的设法                                     |
   | -------------------------------------------------------- | ------------------------------------------------------------ |
   | $$P_n(x)$$ ( $n$ 次多项式)                               | $$y_p = x^k Q_n(x)$$                                         |
   | $$P_n(x)e^{\alpha x}$$                                   | $$y_p = x^k Q_n(x)e^{\alpha x}$$                             |
   | $$e^{\alpha x} [P_m(x)\cos\beta x + Q_l(x)\sin\beta x]$$ | $$y_p = x^k e^{\alpha x} [S_N(x)\cos\beta x + T_N(x)\sin\beta x]$$  (其中 $N = \max(m, l)$) |
   
   - **重根修正因子** $x^k$ **的确定**：
     - 若 $\alpha$（或 $\alpha \pm \beta i$）**不是**特征方程的根，$k = 0$。
     - 若 $\alpha$ 是特征方程的**单根**，$k = 1$。
     - 若 $\alpha$ 是特征方程的**重根**，$k = 2$。
   
   ### 4.3 常数变易法 (Variation of Parameters)
   
   **适用场景**：非齐次项 $f(x)$ 形式复杂（如 $\sec x, \tan x$ 等），无法简单设特解。 **方法理论**：设其对应的齐次方程的两个独立解为 $y_1, y_2$。则非齐次特解可设为：
   
   $$y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x)$$
   
   利用两层积分直接求解特解系数：
   
   $$u_1(x) = \int \frac{-y_2 f(x)}{W(y_1, y_2)} dx, \quad u_2(x) = \int \frac{y_1 f(x)}{W(y_1, y_2)} dx$$
   
   其中分母 $W(y_1, y_2) = y_1 y_2' - y_1' y_2$ 被称为**朗斯基行列式 (Wronskian)**。
   
   #### 📝 经典例题 (教材经典题)
   
   解微分方程：$y'' + n^2 y = \sec nx \quad (n > 0)$。
   
   #### 💡 详细步骤
   
   1. **解同伴齐次方程**： 齐次方程 $y'' + n^2 y = 0$ 的特征方程为 $r^2 + n^2 = 0 \implies r = \pm n i$。 两个线性无关的齐次特解为：
   
      $$y_1(x) = \cos nx, \quad y_2(x) = \sin nx$$
   
   2. **计算朗斯基行列式 (Wronskian)**：
   
      $$W(y_1, y_2) = \begin{vmatrix} \cos nx & \sin nx \\ -n\sin nx & n\cos nx \end{vmatrix} = n\cos^2 nx - (-n\sin^2 nx) = n$$
   
   3. **求积分系数** $u_1(x)$ **和** $u_2(x)$： $$\begin{aligned} u_1(x) &= \int \frac{-y_2(x) f(x)}{W} dx = \int \frac{-\sin nx \cdot \sec nx}{n} dx \ &= -\frac{1}{n} \int \frac{\sin nx}{\cos nx} dx = \frac{1}{n^2} \ln|\cos nx| + C_1 \end{aligned}$$
   
      $$\begin{aligned} u_2(x) &= \int \frac{y_1(x) f(x)}{W} dx = \int \frac{\cos nx \cdot \sec nx}{n} dx \ &= \frac{1}{n} \int 1 dx = \frac{x}{n} + C_2 \end{aligned}$$
   
   4. **组装最终通解**：
   
      $$y(x) = C_1 \cos nx + C_2 \sin nx + \frac{\cos nx}{n^2}\ln|\cos nx| + \frac{x\sin nx}{n}$$
   
   ## 第五章：变系数线性微分方程
   
   面对更具一般性的变系数方程：$y'' + p(x)y' + q(x)y = f(x)$，需要依靠以下高级代换工具。
   
   ### 5.1 欧拉方程 (Euler-Cauchy Equation)
   
   **识别特征**：各项自变量 $x$ 的次数与其对应的导数阶数完全相同：
   
   $$x^2 \frac{d^2y}{dx^2} + a x \frac{dy}{dx} + b y = f(x) \quad (x > 0)$$
   
   **解题核心**：引入自变量换元 $x = e^t \implies t = \ln x$。则导数变换为关于新算子 $D = \frac{d}{dt}$ 的形式：
   
   - $x \frac{dy}{dx} = Dy$
   - $x^2 \frac{d^2y}{dx^2} = D(D-1)y$ 原方程转化为常系数方程：$[D(D-1) + aD + b]y = f(e^t)$。
   
   #### 📝 经典例题
   
   解微分方程：$x^2 y'' - xy' + y = 3x^3$。
   
   #### 💡 详细步骤
   
   1. **算子代换**： 令 $x = e^t$。则原式转换为：
   
      $$D(D-1)y - Dy + y = 3(e^t)^3 \implies (D^2 - 2D + 1)y = 3e^{3t}$$
   
   2. **解特征方程**： 齐次部分特征根：$r^2 - 2r + 1 = 0 \implies (r-1)^2 = 0 \implies r = 1 \quad (\text{重根})$。 齐次通解：
   
      $$y_h(t) = (C_1 + C_2 t) e^t \implies y_h(x) = (C_1 + C_2 \ln x)x$$
   
   3. **待定系数法求非齐次特解**： 设特解 $Y(t) = A e^{3t}$，代回方程：
   
      $$(9A - 6A + A)e^{3t} = 3e^{3t} \implies 4A = 3 \implies A = \frac{3}{4}$$
   
      特解为 $Y(t) = \frac{3}{4}e^{3t} \implies Y(x) = \frac{3}{4}x^3$。
   
   4. **得到通解**：
   
      $$y(x) = (C_1 + C_2 \ln x)x + \frac{3}{4}x^3$$
   
   ### 5.2 同伴齐次方程特解的“观察/发现法”
   
   在处理复杂的变系数二阶线性方程时，如果我们能快速发现对应齐次方程 $y'' + p(x)y' + q(x)y = 0$ 的一个特解 $y_1$，则可以大幅度降低求解难度。 考试与解题中最常用的**观察快速匹配表**如下：
   
   | 若系数 $p(x), q(x)$ 满足关系式：                       | 即可直接确定一个特解 $y_1(x)$： |
   | ------------------------------------------------------ | ------------------------------- |
   | $$p(x) + x \cdot q(x) = 0$$                            | $$y_1(x) = x$$                  |
   | $$m(m-1) + m \cdot x \cdot p(x) + x^2 \cdot q(x) = 0$$ | $$y_1(x) = x^m$$                |
   | $$1 + p(x) + q(x) = 0$$                                | $$y_1(x) = e^x$$                |
   | $$1 - p(x) + q(x) = 0$$                                | $$y_1(x) = e^{-x}$$             |
   | $$m^2 + m \cdot p(x) + q(x) = 0$$                      | $$y_1(x) = e^{mx}$$             |
   
   ### 5.3 降阶法 (Reduction of Order - 已知 1 个齐次特解)
   
   **适用场景**：已知同伴齐次方程的一个特解为 $y_1(x)$。 **求解核心**：
   
   1. 设非齐次方程通解为 $y = u(x) y_1(x)$。
   2. 连续求导并代回原非齐次方程后，**所有含有** $u(x)$ **原函数的项会自动全部相消**，方程退化为仅含 $u''$ 和 $u'$ 的形式。
   3. 设新变量 $w = u'$，将其转化为一阶线性微分方程求解。
   
   #### 📝 经典例题 (教材经典题 6)
   
   已知 $y_1 = e^{2x}$ 是同伴齐次方程 $(x+1)y'' - (2x+3)y' + 2y = 0$ 的一个解，求非齐次方程的通解：
   
   $$(x+1)y'' - (2x+3)y' + 2y = xe^x$$
   
   #### 💡 详细步骤
   
   1. **设代换元并求导**： 设 $y = u e^{2x}$：
   
      $$y' = u' e^{2x} + 2u e^{2x}$$
   
      $$y'' = u'' e^{2x} + 4u' e^{2x} + 4u e^{2x}$$
   
   2. **代入原方程消去** $u$ **项**：
   
      $$(x+1)(u'' + 4u' + 4u)e^{2x} - (2x+3)(u' + 2u)e^{2x} + 2ue^{2x} = xe^x$$
   
      两边同除以 $e^{2x}$ 并整理：
   
      $$(x+1)u'' + [4(x+1) - (2x+3)]u' + [4(x+1) - 2(2x+3) + 2]u = xe^{-x}$$
   
      $$(x+1)u'' + (2x+1)u' = xe^{-x} \implies u'' + \frac{2x+1}{x+1} u' = \frac{x}{x+1} e^{-x}$$
   
   3. **降阶：令** $w = u'$**，建立一阶线性方程**：
   
      $$w' + \frac{2x+1}{x+1} w = \frac{x}{x+1} e^{-x}$$
   
      - 计算积分因子：
   
        $$\int \frac{2x+1}{x+1} dx = \int \left( 2 - \frac{1}{x+1} \right) dx = 2x - \ln|x+1| \implies \mu(x) = \frac{e^{2x}}{x+1}$$
   
      - 两边同乘积分因子：
   
        $$\frac{d}{dx}\left[ w \frac{e^{2x}}{x+1} \right] = \frac{x}{x+1}e^{-x} \cdot \frac{e^{2x}}{x+1} = \frac{x e^x}{(x+1)^2}$$
   
   4. **精妙积分确定** $w$： 注意到关键导数公式：$\frac{d}{dx}\left( \frac{e^x}{x+1} \right) = \frac{e^x(x+1) - e^x}{(x+1)^2} = \frac{xe^x}{(x+1)^2}$。 因此直接积分得：
   
      $$w \frac{e^{2x}}{x+1} = \frac{e^x}{x+1} + C_1 \implies w = u' = e^{-x} + C_1(x+1)e^{-2x}$$
   
   5. **积分求** $u$ **进而求出通解** $y$： 对 $u'$ 积分：
   
      $$u(x) = \int e^{-x} dx + C_1 \int (x+1)e^{-2x} dx = -e^{-x} - C_1 \left( \frac{x}{2} + \frac{3}{4} \right) e^{-2x} + C_2$$
   
      代回 $y = u e^{2x}$ 并重新吸收整合任意常数：
   
      $$y(x) = -e^x + A(2x+3) + B e^{2x}$$
   
   ### 5.4 广义常数变易法 (已知 2 个齐次特解)
   
   **适用场景**：已知变系数方程对应齐次方程的两个线性无关的特解 $y_1, y_2$。 **方法理论**：可以直接套用变数变易公式求解。 特别地，可以用此方法与 5.2 中的“观察法”配合，直接秒杀一系列复杂的变系数非齐次方程。
   
   #### 📝 经典例题 (教材经典题 7-1)
   
   解微分方程：
   
   $$y'' + \frac{1}{x}y' - \frac{4}{x^2}y = x \quad (x > 0)$$
   
   #### 💡 详细步骤
   
   1. **运用观察法发现齐次解**： 同伴齐次方程为 $y'' + \frac{1}{x}y' - \frac{4}{x^2}y = 0$。此为欧拉型，代入 $y = x^m$ 观察：
   
      $$m(m-1) + m - 4 = 0 \implies m^2 - 4 = 0 \implies m = \pm 2$$
   
      故我们瞬间获得同伴齐次方程的两个独立特解：
   
      $$y_1 = x^2, \quad y_2 = x^{-2}$$
   
   2. **计算 Wronskian 行列式**：
   
      $$W(y_1, y_2) = \begin{vmatrix} x^2 & x^{-2} \\ 2x & -2x^{-3} \end{vmatrix} = x^2 (-2x^{-3}) - (x^{-2})(2x) = -\frac{4}{x}$$
   
   3. **套用广义变易公式求** $u_1, u_2$（此时非齐次项 $f(x) = x$）：
   
      $$u_1(x) = \int \frac{-y_2 f(x)}{W} dx = \int \frac{-x^{-2} \cdot x}{-\frac{4}{x}} dx = \int \frac{1}{4} dx = \frac{x}{4} + C_1$$
   
      $$u_2(x) = \int \frac{y_1 f(x)}{W} dx = \int \frac{x^2 \cdot x}{-\frac{4}{x}} dx = \int -\frac{x^4}{4} dx = -\frac{x^5}{20} + C_2$$
   
   4. **组装通解**：
   
      $$y(x) = u_1 y_1 + u_2 y_2 = \left( \frac{x}{4} + C_1 \right)x^2 + \left( -\frac{x^5}{20} + C_2 \right)x^{-2}$$
   
      $$y(x) = C_1 x^2 + C_2 x^{-2} + \frac{x^3}{4} - \frac{x^3}{20} = C_1 x^2 + C_2 x^{-2} + \frac{1}{5}x^3$$
   
   ### 5.5 标准形转换法 (Normal Form / 消去一阶导数项)
   
   **适用场景**：面对二阶线性方程 $y'' + p(x)y' + q(x)y = f(x)$，若一阶导数项 $p(x)y'$ 极其复杂，可以通过变换消除它。 **解题核心**： 设 $y(x) = u(x)v(x)$，令变换因子为：
   
   $$v(x) = e^{-\frac{1}{2}\int p(x)dx}$$
   
   则原方程可彻底消去一阶导数项，转化为**标准形 (Normal Form)**：
   
   $$u'' + P(x)u = R(x)$$
   
   其中：
   
   - $$P(x) = q(x) - \frac{1}{2}p'(x) - \frac{1}{4}p^2(x)$$
   - $$R(x) = \frac{f(x)}{v(x)}$$
   
   #### 📝 经典例题
   
   解微分方程：$y'' + 2xy' + x^2 y = 0$。
   
   #### 💡 详细步骤
   
   1. **提取变系数并计算变换因子** $v(x)$： 此处 $p(x) = 2x$，$q(x) = x^2$。
   
      $$v(x) = e^{-\frac{1}{2}\int 2x dx} = e^{-\frac{x^2}{2}}$$
   
   2. **计算标准形参数**：
   
      $$P(x) = q(x) - \frac{1}{2}p'(x) - \frac{1}{4}p^2(x) = x^2 - \frac{1}{2}(2) - \frac{1}{4}(4x^2) = -1$$
   
      $$R(x) = 0$$
   
   3. **求解简化后的标准形方程**： 方程简化为：
   
      $$u'' - u = 0 \implies u(x) = C_1 e^x + C_2 e^{-x}$$
   
   4. **还原原函数** $y(x)$：
   
      $$y(x) = u(x)v(x) = e^{-\frac{x^2}{2}} \left( C_1 e^x + C_2 e^{-x} \right)$$

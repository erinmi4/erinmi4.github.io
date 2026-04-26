---
title: "微积分-CH2-微分"
description: "微积分-CH2-微分，待补充摘要。"
pubDate: 2026-04-25
updatedDate: 2026-04-25
tags:
  - 修考
  - 微积分
category: 修考
draft: true
---

![NotebookLM Mind Map (3)](./%E5%BE%AE%E7%A7%AF%E5%88%86-CH2-%E5%BE%AE%E5%88%86.assets/NotebookLM%20Mind%20Map%20(3).png)



# From Limits to the Derivative: A Guide to Conceptual Evolution

## 1. The Gateway: Why We Study Change
Welcome, explorer. You are about to embark on a journey that transforms how you perceive the world. Mathematics often seems static—fixed numbers and unmoving shapes—but the reality of our universe is motion. Calculus is the language of that motion, a way to deconstruct the "hidden motion" within seemingly still functions.

By shifting our focus from the **macroscopic** (average change over a distance) to the **microscopic** (the change at a single, precise moment), we unlock the ability to predict the future of a moving object or the curvature of a lens. This transition from "nearly there" to "exactly then" is the heart of the evolution from limits to derivatives.

> **Core Insight:** "To understand change, we must learn to look at a single moment without losing the context of the journey. The derivative is the mathematical tool that allows us to capture the 'instant' by perfecting the art of the 'limit'."

Before we can capture a single moment of change, we must first master the language of "nearly there": the **Limit**.

---

## 2. The Foundation: The Limit and the Art of Approaching
At its core, a limit describes the value a function $f(x)$ approaches as the input $x$ gets closer and closer to a specific point $a$. Crucially, the function does not need to be defined at $x=a$ for the limit to exist. We write this as: 
$$\lim_{x\to a}f(x)=A$$

### Criteria for Existence
For a limit to truly exist at point $a$, the function must approach the same value from both directions. In the language of mathematical analysis, we define this using one-sided limits:

| Type of Limit        | Notation              | Meaning                                                      |
| :------------------- | :-------------------- | :----------------------------------------------------------- |
| **Right-side Limit** | $\lim_{x\to a^+}f(x)$ | The value $f(x)$ approaches as $x$ nears $a$ from the right ($x > a$). |
| **Left-side Limit**  | $\lim_{x\to a^-}f(x)$ | The value $f(x)$ approaches as $x$ nears $a$ from the left ($x < a$). |
| **The Limit**        | $\lim_{x\to a}f(x)=A$ | **Existence Rule:** Only exists if the Left and Right limits are equal to $A$. |

### The Arithmetic of Limits (Theorem 2.1)
Limits are "well-behaved," allowing us to break down complex expressions into manageable logic. If $f(x) \to A$ and $g(x) \to B$ as $x \to a$:

* **Sum/Difference:** $f(x) \pm g(x) \to A \pm B$.
* **Product:** $f(x)g(x) \to AB$ (including constant multiples $cf(x) \to cA$).
* **Quotient:** $f(x)/g(x) \to A/B$, provided $B \neq 0$.
* **The Squeeze Theorem:** If $f(x) \le h(x) \le g(x)$ and both $f(x)$ and $g(x)$ approach $A$, then $h(x)$ is "squeezed" and must also approach $A$.

---

## 3. The Bridge: Continuity and the Unbroken Path
A function is continuous at a point if there are no "gaps," "jumps," or "breaks" in its graph. This bridge is built on three strict conditions:

1.  **$f(a)$ must exist:** The function is actually defined at the point.
2.  **$\lim_{x\to a}f(x)$ must exist:** The path from the left and right meet at the same "height."
3.  **$\lim_{x\to a}f(x) = f(a)$:** The limit and the actual point are identical.

### The Power of Continuity
Continuous functions follow the **Intermediate Value Theorem (Theorem 2.7)**. If $f(x)$ is continuous on a closed interval $[a, b]$, it must pass through every value $\eta$ between $f(a)$ and $f(b)$. This is the logical proof that continuous functions don't "jump"—if a path starts below a line and ends above it, it must cross it.

> **Note: Continuity vs. Differentiability**
> Being continuous is a prerequisite for being differentiable, but it is not a guarantee. Differentiability implies continuity, but the reverse is not true. A function can be "connected" but have a sharp corner (like $f(x) = |x|$ at $x=0$), or oscillate so violently that a single slope cannot be determined.

---

## 4. The Transformation: Defining the Derivative
The derivative is the "instantaneous" rate of change. While an average slope requires a **Secant Line** connecting two distinct points, the derivative allows us to find the slope of a **Tangent Line** at exactly one point.

### The Formal Definition
The derivative $f'(a)$ is the limit of the difference quotient as the interval $h$ shrinks to nothing:

$$f'(a) = \lim_{h\to 0} \frac{f(a + h) - f(a)}{h}$$



### Dual Interpretations
* **Geometric Meaning:** The slope of the tangent line to the curve $y=f(x)$ at point $P(a, f(a))$.
* **Physical Interpretation:** The instantaneous rate of change (e.g., velocity if $f(x)$ represents position).

**When does the Derivative fail?** Differentiability requires that the limit above exists and is finite. It fails if the "Right-side" and "Left-side" derivatives don't match (forming a "cusp"). It also fails if the limit simply does not exist due to infinite oscillation at the point.

---

## 5. The Toolbox: Rules of Differentiation
Calculating derivatives via limits is the foundation, but shortcuts allow us to calculate change with elegance and speed.

### Basic Derivatives Table (Theorems 2.10 - 2.14)
| Function $f(x)$      | Derivative $f'(x)$    | Function $f(x)$      | Derivative $f'(x)$ |
| :------------------- | :-------------------- | :------------------- | :----------------- |
| **Constant** $C$     | $0$                   | **Sine** $\sin x$    | $\cos x$           |
| **Power** $x^\alpha$ | $\alpha x^{\alpha-1}$ | **Cosine** $\cos x$  | $-\sin x$          |
| **Exp** $e^x$        | $e^x$                 | **Tangent** $\tan x$ | $\sec^2 x$         |
| **Log** $\ln x$      | $1/x$                 | **$\arcsin x$**      | $1/\sqrt{1-x^2}$   |
| **$\arctan x$**      | $1/(1+x^2)$           |                      |                    |

### The "Power Tools" of Calculus
* **The Chain Rule:** The ultimate tool for composite functions.
    1.  **Identify:** Label the inner function $u = f(x)$ and outer $z = g(u)$.
    2.  **Differentiate:** Find $dz/du$ and $du/dx$.
    3.  **Multiply:** $\frac{dz}{dx} = \frac{dz}{du} \cdot \frac{du}{dx}$.
* **Inverse Function Derivative:** Allows finding the derivative of difficult functions (like $\ln x$) by using their easier inverses (like $e^y$).
* **Higher-Order Derivatives & Concavity:** The second derivative $f''(x)$ tells us about the "bending" of the curve. If $f''(x) > 0$, the curve is **concave up** (it "holds water").

---

## 6. The Horizon: Power Applications (L'Hôpital and Taylor)
### L'Hôpital's Rule (Theorem 2.21)
If a limit results in $0/0$ or $\infty/\infty$, you can differentiate the numerator and denominator separately: 
$$\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$$
**The 7 Indeterminate Forms:**

1. $0/0$ 
1.   $\infty/\infty$ 
1. $\infty - \infty$ 
1. $0 \times \infty$ 
1. $1^\infty$ 
1.  $0^0$ 
1.  $\infty^0$

### Taylor and Maclaurin Series (Theorems 2.19 - 2.20)
These approximate complex functions as simple polynomials near a point:
* $e^x \approx 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
* $\sin x \approx x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
* $\cos x \approx 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$

---

## 7. Mastery Checklist: Thinking Like a Mathematician
### The Conceptual Roadmap
1.  **Limits:** Can I approach a value without touching it?
2.  **Continuity:** Is the path unbroken?
3.  **Differentiability:** Is the path smooth enough to have a single, non-oscillating slope?
4.  **Optimization:** Where does the change stop (maxima/minima/concavity)?

### Self-Assessment Checklist
* [ ] I can identify existence via right-side and left-side limits.
* [ ] I can state the 3 conditions for continuity.
* [ ] I can explain the Intermediate Value Theorem.
* [ ] I can apply Rolle's Theorem and the Mean Value Theorem.
* [ ] I can differentiate composite functions using the Chain Rule.
* [ ] I can use $f''(x)$ to determine if a curve is concave up or down.
* [ ] I can recognize the 7 indeterminate forms and apply L'Hôpital's Rule.
* [ ] I can expand $e^x$, $\sin x$, and $\cos x$ into Maclaurin Series.

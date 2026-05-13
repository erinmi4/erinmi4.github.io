---
title: "信号与系统-CH4-连续时间傅里叶变换"
slug: "信号与系统-CH4-连续时间傅里叶变换"
description: "信号与系统-CH4-连续时间傅里叶变换，待补充摘要。"
pubDate: 2026-05-13
updatedDate: 2026-05-13
tags:
  - 信号与系统
  - 修考
category: 修考
draft: false
heroImage: /images/posts/Signal-and-system/memo.jpg
---

<iframe src="https://drive.google.com/file/d/1swoknPIgOfUl8tTfsskYIxS_Q4Ta2o4a/preview" width="640" height="480"></iframe>



![image-20260513110708982](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH4-%E8%BF%9E%E7%BB%AD%E6%97%B6%E9%97%B4%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2.assets/image-20260513110708982.png)



#### 常见信号的傅里叶变换对	

1. **指数信号变换对**

- **时域信号 $x(t)$**: $e^{-at}u(t), \quad a > 0$
- **频域变换 $X(j\omega)$**: $\frac{1}{a + j\omega}$

2. **单位冲激函数变换对**

- **时域信号 $x(t)$**: $\delta(t)$
- **频域变换 $X(j\omega)$**: $1$

3. **矩形脉冲信号变换对**

- **时域信号 $x(t)$**:

  $$x(t) = \begin{cases} 1, & |t| < T_1 \\ 0, & |t| > T_1 \end{cases}$$

- **频域变换 $X(j\omega)$**: $2\frac{\sin \omega T_1}{\omega}$

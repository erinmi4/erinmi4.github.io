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

<iframe src="https://drive.google.com/file/d/1y5tNMfgRGOKWfLqVpXnxrhL5xl7S-1zp/preview" width="640" height="480"></iframe>

![Decomposing Fourier transforms — an introduction to time-frequency decomposition](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/fourier_series-011.png)

![Fourier transform time and frequency domains](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/Fourier_transform_time_and_frequency_domains.gif)

> 该动画展示了由6个正弦波分解而成的方波6分量近似值。这些分量频率在函数的频域中呈现为尖锐的峰值。

> 傅里叶变换的主要结果是傅里叶系数，这些系数用于计算信号中不同频率对应的功率谱：功率谱衡量了信号中各频率成分的贡献强度。

![Continuous Fourier transform of rect and sinc functions](./%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F-CH3-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7%E7%9A%84%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0%E8%A1%A8%E7%A4%BA.assets/Continuous_Fourier_transform_of_rect_and_sinc_functions.gif)

> 连续傅里叶变换将时域中的连续输入函数转换为频域中的新函数。




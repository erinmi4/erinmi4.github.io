---
title: 计算理论-CH09-PDA
slug: 计算理论-CH09-PDA
description: 计算理论-CH09-PDA，待补充摘要。
pubDate: 2026-06-16
updatedDate: 2026-06-16
tags:
  - 大阪大学
  - 计算理论
category: 修考
draft: false
aliases:
  - PDA
  - Pushdown Automaton
  - 压栈自动机
---
> **PDA 几乎总是围绕一个核心思想：有限状态机 + 一个栈（Stack）**。只要理解这个栈是如何工作的，大部分题目都能解决。
> PDA = Finite Automaton + Stack
> 
```
           输入串
              │
              ▼

        ┌──────────┐
        │  State   │
        └──────────┘
              │
              ▼
        ┌──────────┐
        │  Stack   │
        └──────────┘
```


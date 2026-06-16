---
title: "离散数学-CH01-Predicate Logic"
slug: "离散数学-CH01-Predicate-Logic"
description: "离散数学-CH01-Predicate Logic，待补充摘要。"
pubDate: 2026-06-15
updatedDate: 2026-06-15
tags:
  - 大阪大学
  - 离散数学
  - 修考
category: 修考
draft: false
---
> [!note]
> 从大阪大学近十几年的离散数学真题来看，**Predicate Logic（谓词逻辑，一阶逻辑）几乎是每隔一两年就会出现的大题**，主要考察：
> 
> - 将自然语言翻译成 Predicate Formula（谓词公式）。
> - 判断 Formula 是否 valid（永真）或 satisfiable（可满足）。
> - Universal Quantifier（全称量词）与 Existential Quantifier（存在量词）的等价变换。
> - Free Variable（自由变量）与 Bound Variable（约束变量）。
> - Skolemization（Skolem 化）。
> - Prenex Normal Form（前束范式）和 Conjunctive Normal Form（CNF）。
> - Resolution Principle（归结原理）证明不可满足。
> - 利用谓词逻辑描述图、集合、数字等性质。
> 
> 这些内容在 2012、2013、2015、2017、2018、2019、2020 等年份都可以看到。

- [离散数学-CH1-数理逻辑](离散数学-CH1-数理逻辑.md)
- 【谓词逻辑】 https://www.bilibili.com/video/BV1kTsizDE4Q/?p=4&share_source=copy_web&vd_source=27abef6992749c2b76e3f7b2a2c835b5
	- https://tingwu.aliyun.com/doc/transcripts/dej8nbp2pxy59pog?sl=1# 《3 - 高数叔离散数学速成课 p03 课时三命题逻辑推理理论 [BV1kTsizDE4Q_p3]_temp》

| 中文句型          | Predicate Logic                                            |
| ------------- | ---------------------------------------------------------- |
| 所有 A 都是 B     | $\forall x\,(A(x)\rightarrow B(x))$                        |
| 存在一个 A 是 B    | $\exists x\,(A(x)\land B(x))$                              |
| 只有 A 才是 B     | $\forall x\,(B(x)\rightarrow A(x))$                        |
| 并非所有 A 都是 B   | $\exists x\,(A(x)\land \neg B(x))$                         |
| 不存在 A 是 B     | $\neg\exists x\,(A(x)\land B(x))$                          |
| 每个 A 都有一个 B   | $\forall x\,(A(x)\rightarrow \exists y\,B(x,y))$（根据具体谓词调整） |
| 存在一个 B 属于所有 A | $\exists y\,\forall x\,(\cdots)$                           |


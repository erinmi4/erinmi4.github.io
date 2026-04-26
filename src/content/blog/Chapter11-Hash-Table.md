---
title: "Chapter11 Hash Table"
description: "Chapter11 Hash Table，待补充摘要。"
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 修考
  - 数据结构与算法
category: 修考
draft: true
---

![NotebookLM Mind Map (2)](./Chapter11-Hash-Table.assets/NotebookLM%20Mind%20Map%20(2).png)

# Hash Tables: Foundations, Functions, and Implementation

This study guide provides a comprehensive overview of hash tables as a data structure for implementing dictionaries. It covers theoretical foundations, collision resolution strategies, hash function design, and practical considerations for modern computer architectures.



## Study Quiz

**1. What is the primary advantage of a hash table over a direct-address table when the universe of possible keys** **U** **is significantly larger than the number of keys** **K** **actually stored?** A direct-address table requires a slot for every possible key in the universe, which is impractical or impossible if U is very large or infinite. A hash table reduces storage requirements to \Theta(|K|) by using a hash function to map keys to a smaller range of array indices.

**2. Define the "load factor"** **\alpha** **and explain how it differs between chaining and open addressing.** The load factor \alpha is defined as n/m, where n is the number of elements and m is the number of slots. In chaining, \alpha can be less than, equal to, or greater than 1 because slots point to external lists; in open addressing, \alpha can never exceed 1 because all elements must fit within the table itself.

**3. Under the assumption of independent uniform hashing, what is the average-case time complexity for a search operation in a hash table using chaining?** Under this assumption, both successful and unsuccessful searches take \Theta(1 + \alpha) time. This includes the O(1) time to compute the hash function and access the slot, plus the time to traverse the average list length represented by the load factor.

**4. What is a "collision" in the context of hashing, and why is it impossible to avoid entirely if** **|U| > m****?** A collision occurs when two distinct keys map to the same hash table slot (h(k_1) = h(k_2)). Because the universe of keys is larger than the number of available slots, the Pigeonhole Principle dictates that at least two keys must map to the same value, making collisions inevitable.

**5. How does "universal hashing" improve upon "static hashing" when dealing with a malicious adversary?** Static hashing uses a fixed hash function, allowing an adversary to choose keys that all hash to the same slot, forcing \Theta(n) search time. Universal hashing selects a hash function at random from a carefully designed family at runtime, ensuring that the probability of a collision between any two keys is at most 1/m, regardless of the keys chosen.

**6. Briefly describe the "multiplication method" for creating hash functions.** The multiplication method involves multiplying the key k by a constant A (where 0 < A < 1), extracting the fractional part of kA, multiplying that fraction by m, and taking the floor of the result. It is flexible because the choice of m is not critical to the performance of the hash function.

**7. Explain the "linear probing" method of open addressing.** Linear probing resolves collisions by checking the next available slot in a cyclic sequence: h(k, i) = (h_1(k) + i) \text{ mod } m. If the first-choice slot is occupied, the algorithm probes the subsequent slots (i=1, 2, \dots) until an empty one is found or the table is determined to be full.

**8. What is "primary clustering" and which collision resolution method does it affect?** Primary clustering is a phenomenon in linear probing where long runs of occupied slots build up over time. This occurs because an empty slot preceded by i full slots has a higher probability ((i+1)/m) of being filled next, which increases average search times as clusters grow.

**9. How does the "wee hash function" utilize the concept of "rounds"?** The wee hash function applies a quadratic transformation f_a(k) = \text{swap}((2k^2 + ak) \text{ mod } 2^w) repeatedly over a specified number of rounds (e.g., r=4). This iterative approach, combined with adding "salt" and bit-swapping, creates a complex, one-to-one mapping that approximates a random oracle.

**10. Why are memory hierarchies significant when evaluating the practical performance of hash tables?** Modern CPUs access data in cache blocks (e.g., 64 bytes) rather than individual words; accessing a new cache block from main memory is significantly slower than accessing data already in the cache. Consequently, linear probing is often faster in practice than double hashing because it explores sequential memory locations within the same cache block.

\--------------------------------------------------------------------------------

## Answer Key

1. **Storage Efficiency:** Hash tables use space proportional to the number of stored keys rather than the total possible keys.
2. **Load Factor:** \alpha = n/m. In chaining, \alpha is the average chain length (can be >1); in open addressing, \alpha represents table fullness (must be \le 1).
3. **Average Complexity:** \Theta(1 + \alpha), which simplifies to O(1) if n = O(m).
4. **Collisions:** Multiple keys mapping to one slot; impossible to avoid because the domain is larger than the range.
5. **Universal Hashing:** Randomizing the function choice at runtime prevents predictable worst-case scenarios.
6. **Multiplication Method:** h(k) = \lfloor m(kA \text{ mod } 1) \rfloor.
7. **Linear Probing:** Sequential, cyclic searching for the next empty slot (h_1(k)+i) \text{ mod } m.
8. **Primary Clustering:** The buildup of long sequences of occupied slots in linear probing, increasing search latency.
9. **Wee Hash Rounds:** Iterating a transformation r times to ensure complexity and randomization of the input key.
10. **Memory Hierarchies:** Physical memory layout makes sequential access (linear probing) much faster than random access (double hashing) due to cache block fetching.

\--------------------------------------------------------------------------------

## Essay Questions

1. **The Evolution from Direct Addressing to Hashing:** Trace the conceptual transition from direct-address tables to hash tables. Discuss the trade-offs between worst-case time guarantees in direct addressing and average-case efficiency in hashing, specifically focusing on memory constraints.
2. **Collision Resolution: Chaining vs. Open Addressing:** Compare and contrast chaining and open addressing. Analyze how their performance is affected by the load factor \alpha, their memory overhead (pointers vs. table slots), and their respective difficulties regarding the deletion operation.
3. **The Mathematics of Universal Hashing:** Explain the formal definition of a universal family of hash functions. Describe the number-theoretic construction h_{ab}(k) = ((ak + b) \text{ mod } p) \text{ mod } m and prove why this family provides a collision probability of at most 1/m.
4. **Practical vs. Theoretical Performance:** Discuss why linear probing, despite having the theoretical disadvantage of primary clustering in the RAM model, is often the preferred implementation in modern systems. Incorporate the impact of cache blocks and memory hierarchies in your argument.
5. **Designing for Variable-Length Inputs:** Using the "wee hash function" and the `WEE` procedure as a model, discuss the challenges of hashing variable-length strings or vectors. Explain the importance of "salting," length-dependent keys (a+2t), and iterative processing (CBC-MAC style) in these designs.

\--------------------------------------------------------------------------------

## Glossary of Key Terms

| Term                             | Definition                                                   |
| -------------------------------- | ------------------------------------------------------------ |
| **Chaining**                     | A collision resolution technique where all elements that hash to the same slot are stored in a linked list. |
| **Collision**                    | An event where two or more distinct keys are mapped to the same index by a hash function. |
| **Cryptographic Hash**           | A robust, complex pseudorandom function (like SHA-256) that maps arbitrary-length inputs to fixed-length outputs. |
| **Dictionary Operations**        | The standard set of operations supported by hash tables: INSERT, SEARCH, and DELETE. |
| **Direct Addressing**            | A simple technique where each key k corresponds directly to an index k in an array. |
| **Double Hashing**               | An open-addressing technique that uses two auxiliary hash functions to determine both the starting slot and the step size for probing. |
| **Hash Function**                | A deterministic function h that maps keys from a universe U to a range of slots \{0, 1, \dots, m-1\}. |
| **Independent Uniform Hashing**  | A theoretical ideal where every key hashes to any slot with equal probability, independent of other keys. |
| **Linear Probing**               | An open-addressing technique where collisions are resolved by searching the hash table sequentially for the next empty slot. |
| **Load Factor (****\alpha****)** | The ratio n/m, representing the average number of elements per slot in a hash table. |
| **Open Addressing**              | A method of collision resolution where all elements are stored directly within the hash table's slots without external storage. |
| **Primary Clustering**           | The tendency of occupied slots in linear probing to form long contiguous runs, slowing down operations. |
| **Probe Sequence**               | The permutation of slots examined when searching or inserting in an open-addressing hash table. |
| **Random Oracle**                | A theoretical ideal deterministic function that provides a randomly selected output for each unique input. |
| **Satellite Data**               | Extra information associated with a key that is stored alongside it in the data structure. |
| **Slot**                         | An individual position or entry within a hash table or direct-address table. |
| **Universal Hashing**            | A randomized hashing strategy where the hash function is chosen at random from a family of functions with provable collision bounds. |
| **Wee Hash Function**            | A register-efficient hash function family based on quadratic transformations and bit-swapping, inspired by RC6. |

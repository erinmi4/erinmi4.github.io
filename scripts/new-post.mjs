import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run new:post -- "文章标题"');
  process.exit(1);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const blogDir = path.join(repoRoot, "src", "content", "blog");

function formatToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai"
  }).format(new Date());
}

function toFileStem(value) {
  return value
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function quoteYaml(value) {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

const fileStem = toFileStem(title);

if (!fileStem) {
  console.error("Could not derive a valid file name from the provided title.");
  process.exit(1);
}

const filePath = path.join(blogDir, `${fileStem}.md`);

try {
  await fs.access(filePath);
  console.error(`Post already exists: ${path.relative(repoRoot, filePath)}`);
  process.exit(1);
} catch {
  // File does not exist, continue.
}

const today = formatToday();
const content = `---
title: ${quoteYaml(title)}
slug: ${quoteYaml(fileStem)}
description: ${quoteYaml(`${title}，待补充摘要。`)}
pubDate: ${today}
updatedDate: ${today}
tags:
  - "未分类"
category: "分类"
draft: true
---

## 这篇文章想解决什么问题

先用 2 到 4 句话写清楚这篇文章的核心问题、结论和适用范围。

## 正文

在这里开始写正文。
`;

await fs.writeFile(filePath, content, "utf8");

console.log(`Created ${path.relative(repoRoot, filePath)}`);

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);

function readArgs(values) {
  const positional = [];
  let dir = "";

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];

    if (value === "--dir" || value === "-d") {
      dir = values[index + 1] ?? "";
      index += 1;
      continue;
    }

    positional.push(value);
  }

  const rawTitle = positional.join(" ").trim();

  return { rawTitle, dir };
}

const { rawTitle, dir: requestedDir } = readArgs(args);

if (!rawTitle) {
  console.error('Usage: npm run new:post -- [--dir "修考/线性代数"] "文章标题"');
  console.error('   or: npm run new:post -- "修考/线性代数/文章标题"');
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

function toSafePathSegments(value) {
  return value
    .split(/[\\/]+/)
    .map((segment) => segment.trim())
    .filter(Boolean)
    .map(toFileStem)
    .filter(Boolean)
    .filter((segment) => segment !== "." && segment !== "..");
}

function quoteYaml(value) {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function splitTitleAndDirectory(value, explicitDir) {
  const normalized = value.replace(/\\/g, "/");
  const parts = normalized.split("/").map((part) => part.trim()).filter(Boolean);

  if (explicitDir) {
    return {
      title: value.trim(),
      dirSegments: toSafePathSegments(explicitDir)
    };
  }

  if (parts.length > 1) {
    return {
      title: parts.at(-1),
      dirSegments: toSafePathSegments(parts.slice(0, -1).join("/"))
    };
  }

  return {
    title: value.trim(),
    dirSegments: ["未分类"]
  };
}

const { title, dirSegments } = splitTitleAndDirectory(rawTitle, requestedDir);
const fileStem = toFileStem(title);

if (!fileStem) {
  console.error("Could not derive a valid file name from the provided title.");
  process.exit(1);
}

const targetDir = path.join(blogDir, ...dirSegments);
const filePath = path.join(targetDir, `${fileStem}.md`);
const assetsDir = path.join(targetDir, `${fileStem}.assets`);

try {
  await fs.access(filePath);
  console.error(`Post already exists: ${path.relative(repoRoot, filePath)}`);
  process.exit(1);
} catch {
  // File does not exist, continue.
}

const today = formatToday();
const inferredCategory = dirSegments[0] ?? "未分类";
const content = `---
title: ${quoteYaml(title)}
slug: ${quoteYaml(fileStem)}
description: ${quoteYaml(`${title}，待补充摘要。`)}
pubDate: ${today}
updatedDate: ${today}
tags:
  - "未分类"
category: ${quoteYaml(inferredCategory)}
draft: true
---

## 这篇文章想解决什么问题

先用 2 到 4 句话写清楚这篇文章的核心问题、结论和适用范围。

## 正文

在这里开始写正文。
`;

await fs.mkdir(targetDir, { recursive: true });
await fs.mkdir(assetsDir, { recursive: true });
await fs.writeFile(filePath, content, "utf8");

console.log(`Created ${path.relative(repoRoot, filePath)}`);
console.log(`Created ${path.relative(repoRoot, assetsDir)}`);

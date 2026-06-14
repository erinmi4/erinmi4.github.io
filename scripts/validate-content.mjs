import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const blogDir = path.join(repoRoot, "src", "content", "blog");

async function collectMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function getFrontmatter(raw, filePath) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    throw new Error(`Missing frontmatter in ${path.relative(repoRoot, filePath)}`);
  }

  return match[1];
}

function getField(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));

  if (!match) {
    return null;
  }

  const rawValue = match[1].trim();

  if (
    (rawValue.startsWith('"') && rawValue.endsWith('"')) ||
    (rawValue.startsWith("'") && rawValue.endsWith("'"))
  ) {
    return rawValue.slice(1, -1).trim();
  }

  return rawValue;
}

function getEffectiveSlug(frontmatter, filePath) {
  const explicitSlug = getField(frontmatter, "slug");

  return explicitSlug || path.basename(filePath, path.extname(filePath));
}

function toFileStem(value) {
  return value
    .trim()
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function isValidDate(value) {
  return value && !Number.isNaN(new Date(value).getTime());
}

function validateYamlListShape(frontmatter, relativePath, errors) {
  const lines = frontmatter.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!/^\s+-\s+/.test(line)) {
      continue;
    }

    let previousIndex = index - 1;
    while (previousIndex >= 0 && lines[previousIndex].trim() === "") {
      previousIndex -= 1;
    }

    const previousLine = lines[previousIndex] ?? "";
    const continuesList = /^\s+-\s+/.test(previousLine);
    const startsList = /^\s*[A-Za-z][\w-]*:\s*$/.test(previousLine);

    if (!continuesList && !startsList) {
      errors.push(
        `${relativePath}: frontmatter list item on line ${index + 2} is not under a list key; did you forget "tags:"?`
      );
    }
  }
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function cleanLocalUrl(value) {
  const withoutHash = value.split("#")[0].split("?")[0].trim();

  try {
    return decodeURI(withoutHash);
  } catch {
    return withoutHash;
  }
}

async function resolveLocalAssetPath(cleanLink, filePath) {
  const decodedLink = cleanLocalUrl(cleanLink);
  const noteDir = path.dirname(filePath);
  const directPath = path.resolve(noteDir, decodedLink);

  if (await pathExists(directPath)) {
    return directPath;
  }

  const isBareFilename = !decodedLink.includes("/") && !decodedLink.includes("\\");

  if (!isBareFilename) {
    return null;
  }

  const obsidianAssetPath = path.resolve(noteDir, "assets", decodedLink);

  if (await pathExists(obsidianAssetPath)) {
    return obsidianAssetPath;
  }

  return null;
}

async function validateLocalAssetLinks(raw, filePath, relativePath, errors) {
  const imageExtensions = new Set([".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
  const links = [];
  const markdownImagePattern = /!\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g;
  const obsidianImagePattern = /!\[\[([^\]\n]+?)\]\]/g;
  const htmlImagePattern = /<(?:img|source)\b[^>]*(?:src|srcset)=["']([^"']+)["']/gi;

  for (const pattern of [markdownImagePattern, htmlImagePattern]) {
    let match;

    while ((match = pattern.exec(raw))) {
      links.push(match[1]);
    }
  }

  let obsidianMatch;

  while ((obsidianMatch = obsidianImagePattern.exec(raw))) {
    links.push(obsidianMatch[1].split("|")[0].trim());
  }

  for (const link of links) {
    const cleanLink = cleanLocalUrl(link);

    if (
      !cleanLink ||
      cleanLink.startsWith("/") ||
      cleanLink.startsWith("#") ||
      /^[a-z]+:/i.test(cleanLink)
    ) {
      continue;
    }

    if (!imageExtensions.has(path.extname(cleanLink).toLowerCase())) {
      continue;
    }

    if (!(await resolveLocalAssetPath(cleanLink, filePath))) {
      errors.push(`${relativePath}: local image not found: ${link}`);
    }
  }
}

const files = await collectMarkdownFiles(blogDir);
const errors = [];
const slugMap = new Map();

for (const filePath of files) {
  const relativePath = path.relative(repoRoot, filePath);
  const raw = await fs.readFile(filePath, "utf8");
  let frontmatter;

  try {
    frontmatter = getFrontmatter(raw, filePath);
  } catch (error) {
    errors.push(error.message);
    continue;
  }

  await validateLocalAssetLinks(raw, filePath, relativePath, errors);
  validateYamlListShape(frontmatter, relativePath, errors);

  for (const key of ["title", "description", "pubDate", "category"]) {
    const value = getField(frontmatter, key);

    if (!value || value.toLowerCase?.() === "null") {
      errors.push(`${relativePath}: "${key}" must be present and non-empty.`);
    }
  }

  for (const key of ["pubDate", "updatedDate"]) {
    const value = getField(frontmatter, key);

    if (value && !isValidDate(value)) {
      errors.push(`${relativePath}: "${key}" must be a valid date.`);
    }
  }

  const title = getField(frontmatter, "title");
  const explicitSlug = getField(frontmatter, "slug");
  const fileStem = path.basename(filePath, path.extname(filePath));

  if (title && !explicitSlug && toFileStem(title) !== fileStem) {
    errors.push(
      `${relativePath}: title no longer matches the file-derived slug; add an explicit "slug" or rename the file.`
    );
  }

  const slug = getEffectiveSlug(frontmatter, filePath);
  const collision = slugMap.get(slug);

  if (collision) {
    errors.push(
      `Duplicate slug "${slug}" in ${path.relative(repoRoot, collision)} and ${relativePath}.`
    );
  } else {
    slugMap.set(slug, filePath);
  }
}

if (errors.length > 0) {
  console.error("Content validation failed:");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exit(1);
}

console.log(`Content validation passed for ${files.length} markdown files.`);

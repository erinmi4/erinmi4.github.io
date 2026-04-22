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

  for (const key of ["title", "description", "pubDate", "category"]) {
    const value = getField(frontmatter, key);

    if (!value || value.toLowerCase?.() === "null") {
      errors.push(`${relativePath}: "${key}" must be present and non-empty.`);
    }
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

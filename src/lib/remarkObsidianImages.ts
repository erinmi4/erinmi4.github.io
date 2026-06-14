import fs from "node:fs";
import path from "node:path";

interface MdastNode {
  type: string;
  value?: string;
  url?: string;
  alt?: string;
  title?: string | null;
  children?: MdastNode[];
}

const IMAGE_EXTENSIONS = new Set([".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const WIKI_IMAGE_PATTERN = /!\[\[([^\]\n]+?)\]\]/g;

function isLocalUrl(value: string): boolean {
  return (
    value.trim() !== "" &&
    !value.startsWith("/") &&
    !value.startsWith("#") &&
    !/^[a-z]+:/i.test(value)
  );
}

function splitUrl(value: string): { cleanUrl: string; suffix: string } {
  const match = value.match(/^([^?#]*)([?#].*)?$/);
  return {
    cleanUrl: match?.[1]?.trim() ?? value.trim(),
    suffix: match?.[2] ?? ""
  };
}

function decodeUrlPath(value: string): string {
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

function encodeUrlPath(value: string): string {
  return encodeURI(value.replace(/\\/g, "/"));
}

function hasImageExtension(value: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(value).toLowerCase());
}

function resolveObsidianImageUrl(rawUrl: string, filePath: string): string {
  if (!isLocalUrl(rawUrl)) {
    return rawUrl;
  }

  const { cleanUrl, suffix } = splitUrl(rawUrl);
  const decodedUrl = decodeUrlPath(cleanUrl);

  if (!hasImageExtension(decodedUrl)) {
    return rawUrl;
  }

  const noteDir = path.dirname(filePath);
  const directPath = path.resolve(noteDir, decodedUrl);

  if (fs.existsSync(directPath)) {
    return `${encodeUrlPath(decodedUrl)}${suffix}`;
  }

  const isBareFilename = !decodedUrl.includes("/") && !decodedUrl.includes("\\");
  const assetRelativeUrl = path.posix.join("assets", decodedUrl);
  const assetPath = path.resolve(noteDir, "assets", decodedUrl);

  if (isBareFilename && fs.existsSync(assetPath)) {
    return `${encodeUrlPath(assetRelativeUrl)}${suffix}`;
  }

  return rawUrl;
}

function parseWikiImage(value: string, filePath: string): MdastNode {
  const [rawTarget, ...labelParts] = value.split("|");
  const target = rawTarget.trim();
  const label = labelParts.join("|").trim();
  const alt = label && !/^\d+(?:x\d+)?$/.test(label) ? label : "";

  return {
    type: "image",
    url: resolveObsidianImageUrl(target, filePath),
    alt,
    title: null
  };
}

function splitWikiImages(value: string, filePath: string): MdastNode[] | null {
  WIKI_IMAGE_PATTERN.lastIndex = 0;

  const nodes: MdastNode[] = [];
  let cursor = 0;
  let matched = false;

  for (const match of value.matchAll(WIKI_IMAGE_PATTERN)) {
    const [raw, inner] = match;
    const start = match.index ?? 0;

    if (start > cursor) {
      nodes.push({ type: "text", value: value.slice(cursor, start) });
    }

    nodes.push(parseWikiImage(inner, filePath));
    cursor = start + raw.length;
    matched = true;
  }

  if (!matched) {
    return null;
  }

  if (cursor < value.length) {
    nodes.push({ type: "text", value: value.slice(cursor) });
  }

  return nodes;
}

function transformChildren(children: MdastNode[] | undefined, filePath: string): MdastNode[] | undefined {
  if (!children) {
    return children;
  }

  const transformed: MdastNode[] = [];

  for (const child of children) {
    if (child.type === "image" && typeof child.url === "string") {
      child.url = resolveObsidianImageUrl(child.url, filePath);
      transformed.push(child);
      continue;
    }

    if (child.type === "text" && typeof child.value === "string") {
      const replacement = splitWikiImages(child.value, filePath);

      if (replacement) {
        transformed.push(...replacement);
        continue;
      }
    }

    if (Array.isArray(child.children)) {
      child.children = transformChildren(child.children, filePath);
    }

    transformed.push(child);
  }

  return transformed;
}

export default function remarkObsidianImages() {
  return function transformer(tree: MdastNode, file: { path?: string; history?: string[] }) {
    const filePath = file.path || file.history?.[0];

    if (!filePath) {
      return;
    }

    tree.children = transformChildren(tree.children, filePath);
  };
}

interface HastNode {
  type: string;
  value?: string;
  tagName?: string;
  children?: HastNode[];
  properties?: Record<string, unknown>;
}

const SKIP_TAGS = new Set(["code", "pre", "script", "style", "kbd", "samp"]);
const MARK_PATTERN = /==([^=\n][^=\n]*?)==/g;

function splitMarkedText(value: string): HastNode[] | null {
  MARK_PATTERN.lastIndex = 0;

  const nodes: HastNode[] = [];
  let cursor = 0;
  let matched = false;

  for (const match of value.matchAll(MARK_PATTERN)) {
    const [raw, highlighted] = match;
    const start = match.index ?? 0;

    if (start > cursor) {
      nodes.push({ type: "text", value: value.slice(cursor, start) });
    }

    nodes.push({
      type: "element",
      tagName: "mark",
      properties: {},
      children: [{ type: "text", value: highlighted }]
    });

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

function transformChildren(children: HastNode[] | undefined): HastNode[] | undefined {
  if (!children) {
    return children;
  }

  const transformed: HastNode[] = [];

  for (const child of children) {
    if (child.type === "text" && typeof child.value === "string") {
      const replacement = splitMarkedText(child.value);

      if (replacement) {
        transformed.push(...replacement);
        continue;
      }

      transformed.push(child);
      continue;
    }

    if (child.type === "element" && child.tagName && !SKIP_TAGS.has(child.tagName)) {
      child.children = transformChildren(child.children);
    }

    transformed.push(child);
  }

  return transformed;
}

export default function rehypeMark() {
  return function transformer(tree: HastNode) {
    if (tree.type === "root" || tree.type === "element") {
      tree.children = transformChildren(tree.children);
    }
  };
}

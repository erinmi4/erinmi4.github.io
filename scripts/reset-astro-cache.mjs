import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const astroCacheFiles = [
  path.join(repoRoot, ".astro", "data-store.json"),
  path.join(repoRoot, "node_modules", ".astro", "data-store.json")
];

let removedCount = 0;

for (const astroCacheFile of astroCacheFiles) {
  try {
    await fs.unlink(astroCacheFile);
    removedCount += 1;
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      continue;
    }

    throw error;
  }
}

if (removedCount > 0) {
  console.log(`Removed ${removedCount} stale Astro content cache file(s).`);
}

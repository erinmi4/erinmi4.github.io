import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const astroCacheFile = path.join(repoRoot, ".astro", "data-store.json");

try {
  await fs.unlink(astroCacheFile);
  console.log("Removed stale Astro content cache.");
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    process.exit(0);
  }

  throw error;
}

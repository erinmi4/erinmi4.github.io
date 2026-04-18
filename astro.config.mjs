import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import rehypeMark from "./src/lib/rehypeMark.ts";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://erinmi4.github.io",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeMark],
    shikiConfig: {
      theme: "github-light"
    }
  }
});

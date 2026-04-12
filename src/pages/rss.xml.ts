import rss from "@astrojs/rss";
import { getAllPosts, getPostUrl, type BlogEntry } from "../lib/content";
import { siteConfig } from "../lib/site";

export async function GET() {
  const posts = await getAllPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.siteUrl,
    items: posts.map((post: BlogEntry) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getPostUrl(post)
    }))
  });
}

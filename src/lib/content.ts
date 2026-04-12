import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;
export type PageEntry = CollectionEntry<"pages">;

export async function getAllPosts() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);

  return posts.sort(
    (left: BlogEntry, right: BlogEntry) =>
      right.data.pubDate.getTime() - left.data.pubDate.getTime()
  );
}

export async function getPageBySlug(slug: string) {
  const pages = (await getCollection("pages")).filter((page) => !page.data.draft);
  return pages.find((page: PageEntry) => page.slug === slug);
}

export async function getTagMap() {
  const posts = await getAllPosts();
  const tagMap = new Map<string, BlogEntry[]>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const bucket = tagMap.get(tag) ?? [];
      bucket.push(post);
      tagMap.set(tag, bucket);
    }
  }

  return new Map(
    [...tagMap.entries()].sort((left, right) =>
      left[0].localeCompare(right[0], "zh-CN")
    )
  );
}

export async function getCategoryMap() {
  const posts = await getAllPosts();
  const categoryMap = new Map<string, BlogEntry[]>();

  for (const post of posts) {
    const bucket = categoryMap.get(post.data.category) ?? [];
    bucket.push(post);
    categoryMap.set(post.data.category, bucket);
  }

  return new Map(
    [...categoryMap.entries()].sort((left, right) =>
      left[0].localeCompare(right[0], "zh-CN")
    )
  );
}

export async function getArchiveGroups() {
  const posts = await getAllPosts();
  const archiveMap = new Map<string, BlogEntry[]>();

  for (const post of posts) {
    const key = `${post.data.pubDate.getFullYear()}-${String(
      post.data.pubDate.getMonth() + 1
    ).padStart(2, "0")}`;
    const bucket = archiveMap.get(key) ?? [];
    bucket.push(post);
    archiveMap.set(key, bucket);
  }

  return [...archiveMap.entries()].map(([key, entries]) => {
    const [year, month] = key.split("-");

    return {
      key,
      year,
      month,
      entries
    };
  });
}

export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options
  }).format(date);
}

export function getPostUrl(post: BlogEntry) {
  return `/posts/${post.slug}/`;
}

export function getTagUrl(tag: string) {
  return `/tags/${encodeURIComponent(tag)}/`;
}

export function getCategoryUrl(category: string) {
  return `/categories/${encodeURIComponent(category)}/`;
}

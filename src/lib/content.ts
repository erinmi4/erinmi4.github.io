import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;
export type PageEntry = CollectionEntry<"pages">;
export type PostSortOption = "date-desc" | "date-asc" | "title-asc" | "title-desc";

const titleCollator = new Intl.Collator("zh-CN", {
  numeric: true,
  sensitivity: "base"
});

function comparePosts(left: BlogEntry, right: BlogEntry, sort: PostSortOption) {
  const leftTitle = left.data.title;
  const rightTitle = right.data.title;
  const leftDate = left.data.pubDate.getTime();
  const rightDate = right.data.pubDate.getTime();

  switch (sort) {
    case "date-asc":
      return leftDate - rightDate || titleCollator.compare(leftTitle, rightTitle);
    case "title-asc":
      return titleCollator.compare(leftTitle, rightTitle) || rightDate - leftDate;
    case "title-desc":
      return titleCollator.compare(rightTitle, leftTitle) || rightDate - leftDate;
    case "date-desc":
    default:
      return rightDate - leftDate || titleCollator.compare(leftTitle, rightTitle);
  }
}

function getDateKey(date: Date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

export async function getAllPosts() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);

  return sortPosts(posts, "date-desc");
}

export function sortPosts(posts: BlogEntry[], sort: PostSortOption = "date-desc") {
  return [...posts].sort((left, right) => comparePosts(left, right, sort));
}

export async function getPageBySlug(slug: string) {
  const pages = (await getCollection("pages")).filter((page) => !page.data.draft);
  return pages.find((page: PageEntry) => page.slug === slug);
}

export async function getAllPages() {
  return (await getCollection("pages")).filter((page) => !page.data.draft);
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
    const dayMap = new Map<string, BlogEntry[]>();

    for (const post of entries) {
      const dayKey = getDateKey(post.data.pubDate);
      const bucket = dayMap.get(dayKey) ?? [];
      bucket.push(post);
      dayMap.set(dayKey, bucket);
    }

    return {
      key,
      year,
      month,
      entries,
      dayGroups: [...dayMap.entries()].map(([dayKey, dayEntries]) => ({
        key: dayKey,
        date: dayEntries[0].data.pubDate,
        entries: dayEntries
      }))
    };
  });
}

export async function getTimelineGroups() {
  const posts = await getAllPosts();
  const timelineMap = new Map<string, BlogEntry[]>();

  for (const post of posts) {
    const key = getDateKey(post.data.pubDate);
    const bucket = timelineMap.get(key) ?? [];
    bucket.push(post);
    timelineMap.set(key, bucket);
  }

  return [...timelineMap.entries()].map(([key, entries]) => ({
    key,
    date: entries[0].data.pubDate,
    entries
  }));
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

export function getDateAnchorId(key: string) {
  return `date-${key}`;
}

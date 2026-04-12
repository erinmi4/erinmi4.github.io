import { getAllPages, getAllPosts, getPostUrl } from "../lib/content";

export async function GET() {
  const [posts, pages] = await Promise.all([getAllPosts(), getAllPages()]);

  const payload = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      url: getPostUrl(post),
      type: "post",
      category: post.data.category,
      tags: post.data.tags,
      body: post.body
    })),
    ...pages.map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: `/${page.slug}/`,
      type: "page",
      category: page.data.category,
      tags: page.data.tags,
      body: page.body
    }))
  ];

  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

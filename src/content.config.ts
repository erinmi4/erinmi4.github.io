import { defineCollection, z } from "astro:content";

const documentSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  category: z.string(),
  draft: z.boolean().default(false),
  heroImage: z.string().optional()
});

const blog = defineCollection({
  schema: documentSchema
});

const pages = defineCollection({
  schema: documentSchema
});

export const collections = {
  blog,
  pages
};

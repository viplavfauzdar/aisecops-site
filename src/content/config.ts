import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const whitepapers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    version: z.string(),
    pubDate: z.date()
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
});

export const collections = { blog, whitepapers, pages };

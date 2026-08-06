import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    toc: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    hidden: z.boolean().default(false),
  }),
});

const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    urls: z.array(z.string()),
    url_prefix: z.array(z.string()),
    desc: z.array(z.string()).default([]),
    hidden: z.boolean().default(false),
  }),
});

export const collections = { posts, links };

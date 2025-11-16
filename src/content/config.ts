import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('mindfulwrld'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Location data for map
    location: z.object({
      lat: z.number(),
      lng: z.number(),
      name: z.string(),
    }).optional(),
    featured: z.boolean().default(false),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    // About Me section
    aboutImage: z.string().optional(),
    // Latest Video
    videoId: z.string().optional(),
    videoTitle: z.string().optional(),
    // Socials
    instagram: z.string().optional(),
    instagramPersonal: z.string().optional(),
    snapchat: z.string().optional(),
    email: z.string().optional(),
    // Hero images
    heroImages: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'pages': pagesCollection,
};

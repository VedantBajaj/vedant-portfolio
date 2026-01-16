import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    status: z.enum(['Public', 'Anonymized', 'Internal']).default('Anonymized'),
    highlights: z.array(z.string()).optional()
  })
});

export const collections = { "case-studies":caseStudies, };

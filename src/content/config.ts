import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		// Transform string to Date object
		permalink: z.string().optional(),
		published: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(''),
		image: z.string().optional().default(''),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().default(''),
	
		/* For internal use */
		prevTitle: z.string().default(''),
		prevSlug: z.string().default(''),
		nextTitle: z.string().default(''),
		nextSlug: z.string().default(''),
	}),
});

export const collections = { docs };

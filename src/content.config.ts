import { notionLoader, notionPageSchema } from '@chlorinec-pkgs/notion-astro-loader';
import { transformedPropertySchema } from '@chlorinec-pkgs/notion-astro-loader/schemas';
import { defineCollection, z } from 'astro:content';
import { NOTION_TOKEN, NOTION_WORKS_DATABASE_ID } from 'astro:env/server';

const works = defineCollection({
	loader: notionLoader({
		auth: NOTION_TOKEN,
		database_id: NOTION_WORKS_DATABASE_ID,
	}),
	schema: notionPageSchema({
		properties: z.object({
			title: transformedPropertySchema.title,
		}),
	}),
});

export const collections = {
	works,
};

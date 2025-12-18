import { notionLoader, notionPageSchema } from '@chlorinec-pkgs/notion-astro-loader';
import { propertySchema, transformedPropertySchema } from '@chlorinec-pkgs/notion-astro-loader/schemas';
import { defineCollection, z } from 'astro:content';
import { NOTION_TOKEN, NOTION_WORKS_DATABASE_ID } from 'astro:env/server';

import { WorkContext, WorkType } from './context/work/types';

const works = defineCollection({
	loader: notionLoader({
		auth: NOTION_TOKEN,
		database_id: NOTION_WORKS_DATABASE_ID,
	}),
	schema: notionPageSchema({
		properties: z.object({
			slug: transformedPropertySchema.rich_text,
			title: transformedPropertySchema.title,
			type: transformedPropertySchema.multi_select.pipe(z.array(z.enum(WorkType))),
			engagement: transformedPropertySchema.select.pipe(z.enum(WorkContext)),
			thumbnail: propertySchema.files.refine((file) => file.files.length > 0, {
				message: 'サムネイル画像は 1 枚以上設定する必要があります',
			}),
			logo: propertySchema.files,
			logoAlt: transformedPropertySchema.rich_text,
			date: transformedPropertySchema.date.transform((date, ctx) => {
				if (date == null) {
					ctx.addIssue({ code: 'custom', message: '日付が設定されていません' });
					return z.NEVER;
				}
				return date;
			}),
			description: transformedPropertySchema.rich_text,
			assigning: transformedPropertySchema.rich_text,
			logoPosition: transformedPropertySchema.select.pipe(z.enum(['inline', 'left'])),
			links: transformedPropertySchema.rich_text
				.transform((linkText) => linkText.split('\n'))
				.pipe(z.array(z.string().url())),
			pickUp: transformedPropertySchema.checkbox,
		}),
	}),
});

export const collections = {
	works,
};

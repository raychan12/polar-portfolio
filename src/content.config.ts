import { notionLoader, notionPageSchema } from '@chlorinec-pkgs/notion-astro-loader';
import { propertySchema, transformedPropertySchema } from '@chlorinec-pkgs/notion-astro-loader/schemas';
import { defineCollection, z } from 'astro:content';
import { NOTION_TOKEN, NOTION_WORKS_DATABASE_ID } from 'astro:env/server';

import { WorkContext, WorkType } from './context/work/types';

const works = defineCollection({
	loader: notionLoader({
		auth: NOTION_TOKEN,
		database_id: NOTION_WORKS_DATABASE_ID,
		sorts: [
			{
				// 基本、こちらで並び順を指定してもらう
				property: '掲載順',
				direction: 'ascending',
			},
			{
				// こちらは掲載順が被ってしまった際に、並び順を決定的にするためのバックアップ
				timestamp: 'last_edited_time',
				direction: 'ascending',
			},
		],
	}),
	schema: notionPageSchema({
		properties: z.object({
			Slug: transformedPropertySchema.rich_text,
			作品タイプ: transformedPropertySchema.multi_select.pipe(z.array(z.enum(WorkType))),
			制作形態: transformedPropertySchema.select.pipe(z.enum(WorkContext)),
			サムネイル画像: propertySchema.files.refine((file) => file.files.length > 0, {
				message: 'サムネイル画像は 1 枚以上設定する必要があります',
			}),
			ロゴ画像: propertySchema.files,
			ロゴタイトル: transformedPropertySchema.rich_text,
			日付: transformedPropertySchema.date.transform((date, ctx) => {
				if (date == null) {
					ctx.addIssue({ code: 'custom', message: '日付が設定されていません' });
					return z.NEVER;
				}
				return date;
			}),
			概要: transformedPropertySchema.rich_text,
			担当部分: transformedPropertySchema.rich_text,
			ロゴ配置: transformedPropertySchema.select.pipe(z.enum(['inline', 'left'])),
			リンク: transformedPropertySchema.rich_text
				.transform((linkText) => linkText.split('\n'))
				.pipe(z.array(z.string().url())),
			トップページで表示: transformedPropertySchema.checkbox,
		}),
	}),
});

export const collections = {
	works,
};

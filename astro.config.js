import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig, envField, fontProviders } from 'astro/config';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const { ADOBE_PROJECT_ID } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

if (ADOBE_PROJECT_ID == null) {
	console.warn('ADOBE_PROJECT_ID is not set - English font (Avenir) will not work');
}

export default defineConfig({
	site: 'https://ijus.art',
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
	image: {
		responsiveStyles: true,
		// /debug_to_be_removed/work で使用
		// TODO: 消す
		domains: ['picsum.photos'],
		remotePatterns: [
			// Notionの画像を利用できるようにする
			{
				protocol: 'https',
				hostname: '**.amazonaws.com',
			},
		],
	},
	experimental: {
		fonts: [
			{
				name: 'Avenir LT Pro',
				cssVariable: '--font-avenir',
				provider: fontProviders.adobe({ id: ADOBE_PROJECT_ID ?? '' }),
				weights: [200, 500, 800],
				// Use system local font is Web Font is not available
				fallbacks: ['Avenir'],
			},
			{
				name: 'Cormorant SC',
				cssVariable: '--font-cormorant-sc',
				provider: fontProviders.google(),
				weights: [600, 700],
				fallbacks: ['Times New Roman'],
			},
			{
				name: 'Hina Mincho',
				cssVariable: '--font-hina-mincho',
				provider: fontProviders.google({
					experimental: {
						glyphs: { 'Hina Mincho': ['涼夏 / raychan'] },
					},
				}),
				fallbacks: ['Hiragino Mincho', 'Yu Mincho', 'Noto Serif JP'],
			},
		],
	},
	integrations: [icon()],
	env: {
		schema: {
			NOTION_TOKEN: envField.string({
				context: 'server',
				access: 'secret',
				required: true,
			}),
			NOTION_WORKS_DATABASE_ID: envField.string({
				context: 'server',
				access: 'secret',
				required: true,
			}),
		},
	},
});

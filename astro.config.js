import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig, fontProviders } from 'astro/config';
import { loadEnv } from 'vite';

const { ADOBE_PROJECT_ID } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

if (ADOBE_PROJECT_ID === undefined) {
	console.warn('ADOBE_PROJECT_ID is not set - English font (Avenir) will not work');
}

export default defineConfig({
	site: 'https://ijus.art',
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
	image: {
		responsiveStyles: true,
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
		],
	},
});

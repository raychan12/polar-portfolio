// @ts-check
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://ijus.art',
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});

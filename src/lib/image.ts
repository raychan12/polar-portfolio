import type { GetImageResult } from 'astro';

export type ImgTagAttributes = {
	src: string;
	srcset?: string;
	width?: number;
	height?: number;
	// getImage() の返り値の attributes が Record<string, any> になっている
} & Record<string, unknown>;

export const getImageToImgAttrs = (image: GetImageResult): ImgTagAttributes => ({
	src: image.src,
	srcset: image.srcSet.attribute,
	...image.attributes,
});

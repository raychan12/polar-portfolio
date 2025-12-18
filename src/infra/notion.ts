import { fileToImageAsset } from '@chlorinec-pkgs/notion-astro-loader';
import type { ImageTransform } from 'astro';
import { getImage } from 'astro:assets';

export type ImgTagAttributes = {
	src: string;
	srcset?: string;
	width?: number;
	height?: number;
	// getImage() の返り値の attributes が Record<string, any> になっている
} & Record<string, unknown>;

type FileObject = Parameters<typeof fileToImageAsset>[0];
type ProcessNotionImageOption = Pick<ImageTransform, 'width' | 'height' | 'widths'>;

export const processNotionImage = async (
	file: FileObject,
	option: ProcessNotionImageOption,
): Promise<ImgTagAttributes> => {
	const originalURL = await fileToImageAsset(file);

	const optimizedImage = await getImage({
		...originalURL.rawOptions,
		format: 'webp',
		...option,
	});

	return {
		src: optimizedImage.src,
		srcset: optimizedImage.srcSet.attribute,
		...optimizedImage.attributes,
	};
};

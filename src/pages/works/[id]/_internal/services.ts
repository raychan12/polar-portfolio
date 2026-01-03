import { getImage } from 'astro:assets';

import type { Work } from '../../../../context/work/definitions';
import { getImageToImgAttrs } from '../../../../foundation/utils/ImageUtils';

import type { ThumbnailGallery, VisualImageAttrs } from './definitions';

export const processImageForThumbnailGallery = async (work: Work): Promise<ThumbnailGallery> => {
	const visualImageAttrs = await Promise.all(
		work.visualImageUrl.map(
			async (img) =>
				({
					mainImage: getImageToImgAttrs(
						await getImage({
							src: img,
							width: 320,
							height: 320,
							densities: [1, 2],
						}),
					),
					selectorImage: getImageToImgAttrs(
						await getImage({
							src: img,
							width: 80,
							height: 80,
							densities: [1, 2],
						}),
					),
				}) satisfies VisualImageAttrs,
		),
	);

	return { work, visualImageAttrs };
};

import type { UnresolvedImageTransform } from 'astro';
import { getImage } from 'astro:assets';

import { getTopThumbnailUrl } from '../../context/work/services';
import type { Work } from '../../context/work/types';
import { getImageToImgAttrs } from '../../utils/imageUtils';

import type { WorkCardProps } from './components/WorkCard';

export const processImageForWorkCard = async (work: Work): Promise<WorkCardProps> => {
	const [visualImage, logoImage] = await Promise.all([
		getImage({ src: getTopThumbnailUrl(work), width: 227, height: 320, densities: [1, 2] }),
		getImage({
			src: work.logoUrl,
			...inferLogoRenderDimension(work),
		}),
	]);

	return {
		work,
		visualImageAttrs: getImageToImgAttrs(visualImage),
		logoImageAttrs: getImageToImgAttrs(logoImage),
	};
};

const inferLogoRenderDimension = (work: Work): Partial<UnresolvedImageTransform> => {
	if (work.logoPosition === 'left') {
		return {
			width: 160,
			densities: [1, 2],
			inferSize: true,
		};
	}

	// inline の場合は、どういうサイズで表示されるのかがよくわからないので、
	// ある程度の横幅の画像を準備する。960px (WorkCard の幅の) は絶対に超えない
	return {
		widths: [160, 320, 480, 640, 960],
		inferSize: true,
	};
};

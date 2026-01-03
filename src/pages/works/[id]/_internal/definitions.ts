import type { Work } from '../../../../context/work/definitions';
import type { ImgTagAttributes } from '../../../../foundation/utils/ImageUtils';

export type ThumbnailGallery = {
	work: Work;
	visualImageAttrs: VisualImageAttrs[];
};

export type VisualImageAttrs = {
	mainImage: ImgTagAttributes;
	selectorImage: ImgTagAttributes;
};

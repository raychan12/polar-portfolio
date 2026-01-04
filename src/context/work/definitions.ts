import type { ImgTagAttributes } from '../../foundation/utils/ImageUtils';
import type { EnumLike } from '../../foundation/utils/TypeUtils';

export type Work = {
	id: string;
	displayOrder: number | null;
	visualImageUrl: string[];
	logoUrl: string;
	description: string;
	logoAlt: string;
	date: WorkDate;
	types: WorkType[];
	context: WorkContext;
	assigning: string;
	logoPosition: 'left' | 'inline';
	links: string[];
	pickUp: boolean;
};

export type WorkCard = {
	work: Work;
	visualImageAttrs: ImgTagAttributes;
	logoImageAttrs: ImgTagAttributes;
};

export type WorkDate = { instant: Date; period?: never } | { instant?: never; period: { from: Date; to: Date } };

export const WorkType = {
	UIUX: 'uiux',
	GRAPHIC: 'graphic',
	SOSAKU: 'sosaku',
} as const;
export type WorkType = EnumLike<typeof WorkType>;

export const WorkContext = {
	COMMISSION: 'commission',
	COLLABORATION: 'collaboration',
	CORPORATE: 'corporate',
	PERSONAL: 'personal',
} as const;
export type WorkContext = EnumLike<typeof WorkContext>;

export type ContextFilterQuery = WorkContext | null;
export type TypesFilterQuery = WorkType[];

export type FilterQuery = {
	context: ContextFilterQuery;
	types: TypesFilterQuery;
};

export type ThumbnailGallery = {
	work: Work;
	visualImageAttrs: VisualImageAttrs[];
};

export type VisualImageAttrs = {
	mainImage: ImgTagAttributes;
	selectorImage: ImgTagAttributes;
};

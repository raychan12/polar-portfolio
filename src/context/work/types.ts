import type { ImgTagAttributes } from '../../infra/notion';

export type Work = {
	id: string;
	visualImageUrl: ImgTagAttributes[];
	logoUrl: ImgTagAttributes;
	description: string;
	logoAlt: string;
	date: WorkDate;
	types: WorkType[];
	context: WorkContext;
	assigning: string;
	logoPosition: 'left' | 'inline';
	links: string[];
};

export type WorkDate = { instant: Date; period?: never } | { instant?: never; period: { from: Date; to: Date } };

export const WorkType = ['uiux', 'graphic', 'sosaku'] as const;
export type WorkType = (typeof WorkType)[number];

export const WorkContext = ['commission', 'collaboration', 'corporate', 'personal'] as const;
export type WorkContext = (typeof WorkContext)[number];

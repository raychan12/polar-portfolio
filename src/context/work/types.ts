export type Work = {
	visualImageUrl: string;
	logoUrl: string;
	description: string;
	logoAlt: string;
	date: WorkDate;
	types: WorkType[];
	context: WorkContext;
	assigning: string;
	logoPosition: 'left' | 'inline';
};

export type WorkDate = { instant: Date; period?: never } | { instant?: never; period: { from: Date; to: Date } };

export const workType = ['uiux', 'graphic', 'sosaku'] as const;
export type WorkType = (typeof workType)[number];

export const workContext = ['commission', 'collaboration', 'corporate', 'personal'] as const;
export type WorkContext = (typeof workContext)[number];

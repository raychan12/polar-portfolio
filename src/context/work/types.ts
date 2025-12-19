export type Work = {
	id: string;
	visualImageUrl: string[];
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

export const WorkType = ['uiux', 'graphic', 'sosaku'] as const;
export type WorkType = (typeof WorkType)[number];

export const WorkContext = ['commission', 'collaboration', 'corporate', 'personal'] as const;
export type WorkContext = (typeof WorkContext)[number];

export const getTopThumbnailUrl = (work: Work): string => {
	const topThumbnail = work.visualImageUrl[0];
	if (topThumbnail == null) {
		throw new Error(`Expected to have at least one thumnbail for work '${work.id}'`);
	}

	return topThumbnail;
};

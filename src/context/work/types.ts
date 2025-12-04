export type Work = {
	visualImageUrl: string;
	logoUrl: string;
	description: string;
	logoAlt: string;
	date: WorkDate;
	tags: string[];
	assigning: string;
	logoPosition: 'left' | 'inline';
};

export type WorkDate = { instant: Date; period?: never } | { instant?: never; period: { from: Date; to: Date } };

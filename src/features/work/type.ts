export interface Work {
	visualImageUrl: string;
	logoUrl: string;
	description: string;
	logoAlt: string;
	dateInstant?: Date;
	datePeriod?: { from: Date; to: Date };
	tags: string[];
	assigning: string;
	logoPosition: 'left' | 'inline';
}

export const workCategory = ['all', 'uiux', 'graphic', 'sosaku'] as const;
export type WorkCategory = (typeof workCategory)[number];

export const workContext = ['all', 'commission', 'collaboration', 'corporate', 'personal'] as const;
export type WorkContext = (typeof workContext)[number];

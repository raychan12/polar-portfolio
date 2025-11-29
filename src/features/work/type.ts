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

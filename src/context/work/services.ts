import type { Work } from './types';

export const getTopThumbnailUrl = (work: Work): string => {
	const topThumbnail = work.visualImageUrl.at(0);
	if (topThumbnail == null) {
		throw new Error(`Expected to have at least one thumnbail for work '${work.id}'`);
	}

	return topThumbnail;
};

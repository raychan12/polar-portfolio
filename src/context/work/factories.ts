import type { Work } from './types';

const baseSampleWork: Work = {
	id: 'work',
	visualImageUrl: [
		{ src: 'https://picsum.photos/id/1/226/320', width: 226, height: 320 },
		{ src: 'https://picsum.photos/id/2/226/320', width: 226, height: 320 },
		{ src: 'https://picsum.photos/id/3/226/320', width: 226, height: 320 },
		{ src: 'https://picsum.photos/id/4/226/320', width: 226, height: 320 },
		{ src: 'https://picsum.photos/id/5/226/320', width: 226, height: 320 },
	],
	logoUrl: { src: 'https://picsum.photos/id/1/320/320', width: 320, height: 320 },
	logoPosition: 'left',
	description: '映画「数分間のエールを」合同誌',
	logoAlt: '数ページのエールを',
	types: ['graphic', 'sosaku'],
	context: 'commission',
	date: { instant: new Date('2025/12/1') },
	assigning: '文章 / 表紙イラスト / デザイン / 編集',
	links: ['https://twitter.com/2ji_yellmovie/', 'https://example.com/'],
};

/**
 * landscape, logo at left, instant date
 */
export const createSampleWork = (original: Partial<Work> = {}): Work => {
	return { ...baseSampleWork, ...original };
};

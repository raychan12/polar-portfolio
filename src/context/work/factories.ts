import type { Work } from './types';

const baseSampleWork: Work = {
	visualImageUrl: 'https://picsum.photos/id/1/226/320',
	logoUrl: 'https://picsum.photos/id/1/320/320',
	logoPosition: 'left',
	description: '映画「数分間のエールを」合同誌',
	logoAlt: '数ページのエールを',
	tags: ['design', 'sosaku'],
	date: { instant: new Date('2025/12/1') },
	assigning: '文章 / 表紙イラスト / デザイン / 編集',
};

/**
 * landscape, logo at left, instant date
 */
export const createSampleWork = (original: Partial<Work> = {}): Work => {
	return { ...baseSampleWork, ...original };
};

// Debug only
// TODO: リリース時に消すか、デバッグ時にしか出せないような形にする

import { add } from 'date-fns';

import type { Work } from './type';

export const particularWork: Work = {
	visualImageUrl: 'https://picsum.photos/id/1/226/320',
	logoUrl: 'https://picsum.photos/id/1/320/320',
	logoPosition: 'left',
	description: '映画「数分間のエールを」合同誌',
	logoAlt: '数ページのエールを',
	tags: ['design', 'sosaku'],
	date: { instant: new Date('2025/12/1') },
	assigning: '文章 / 表紙イラスト / デザイン / 編集',
};

export const generateSampleWork = (index: number): Work => {
	// Safety: この関数は小数を扱わない
	/* eslint-disable @typescript-eslint/restrict-template-expressions */

	const horizontalImage = index % 3 === 0;
	const inlineLogo = index % 4 === 0;
	const instantDate = index % 2 === 0;

	const [imgWidth, imgHeight] = horizontalImage ? [640, 480] : [226, 320];
	const [logoWidth, logoHeight] = inlineLogo ? [320, 80] : [1080, 1920];
	const logoPosition = inlineLogo ? 'inline' : 'left';

	const baseDate = add('2024-01-01', { days: index * 15 });
	const date =
		instantDate ? { instant: baseDate } : { period: { from: baseDate, to: add(baseDate, { days: (index % 14) + 1 }) } };

	return {
		visualImageUrl: `https://picsum.photos/id/${index}/${imgWidth}/${imgHeight}`,
		logoUrl: `https://picsum.photos/id/${index}/${logoWidth}/${logoHeight}`,
		description: `説明文 (#${index})`.repeat((index % 5) * 3 + 1),
		logoAlt: `Logo Alt #${index}`,
		date,
		tags: ['design', 'sosaku'],
		assigning: `担当箇所 (#${index})`.repeat((index % 5) * 5 + 1),
		logoPosition,
	};

	/* eslint-enable @typescript-eslint/restrict-template-expressions */
};

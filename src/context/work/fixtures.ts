import { createSampleWork } from './factories';
import type { Work } from './types';

export const createWorkWithPortraitFixture = (): Work =>
	createSampleWork({
		visualImageUrl: [
			`https://picsum.photos/id/100/480/640`,
			`https://picsum.photos/id/101/480/640`,
			`https://picsum.photos/id/102/480/640`,
			`https://picsum.photos/id/103/480/640`,
			`https://picsum.photos/id/104/480/640`,
		],
	});

export const createWorkWithInlineLogoFixture = (): Work =>
	createSampleWork({
		logoPosition: 'inline',
		logoUrl: `https://picsum.photos/id/100/320/80`,
	});

export const createWorkWithPeriodFixture = (): Work =>
	createSampleWork({
		date: { period: { from: new Date('2024-01-01'), to: new Date('2024-03-31') } },
	});

export const createWorkWithLongTextFixture = (): Work =>
	createSampleWork({
		description: `説明文`.repeat(30),
		assigning: `担当箇所`.repeat(30),
	});

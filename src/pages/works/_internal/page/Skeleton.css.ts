import { style } from '@vanilla-extract/css';

import { vars } from '../../../../styles/theme.css';

export const skeleton = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const filter = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
});

export const filterButtonSkeleton = style({
	width: '300px',
	height: '32px',
	backgroundColor: vars.color.text.secondary,
	opacity: '20%',
	borderRadius: '4px',
});

export const workList = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const workCardSkeleton = style({
	width: '100%',
	maxWidth: '960px',
	height: '320px',
	backgroundColor: vars.color.text.secondary,
	opacity: '20%',
	borderRadius: '4px',
});

export const workListForCrawler = style({
	display: 'flex',
	flexDirection: 'column',
	height: '64px',
	overflow: 'hidden',
});

export const spacing = style({
	marginTop: '128px',
});

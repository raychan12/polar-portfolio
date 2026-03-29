import { style } from '@vanilla-extract/css';

import { BreakPoints } from '../../styles/theme.css';

export const main = style({
	flexGrow: 1,
	width: '100%',
	maxWidth: '1200px',
	padding: '60px 32px',
	marginInline: 'auto',
	'@media': {
		[BreakPoints.MIN_720]: {
			padding: '120px 64px',
		},
		[BreakPoints.MIN_1000]: {
			padding: '120px',
		},
	},
});

export const smallTopPadding = style({
	paddingTop: '80px',
});

import { style } from '@vanilla-extract/css';

import { BreakPoints } from '../styles/theme.css';

export const main = style({
	flexGrow: 1,
	width: '100%',
	maxWidth: '1440px',
	padding: '60px 32px',
	marginInline: 'auto',
	'@media': {
		[BreakPoints.sp]: {
			padding: '60px',
		},
		[BreakPoints.pc]: {
			padding: '60px 120px',
		},
	},
});

export const smallTopPadding = style({
	paddingTop: '80px',
});

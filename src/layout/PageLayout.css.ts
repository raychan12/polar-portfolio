import { style } from '@vanilla-extract/css';

import { breakPoints } from '../styles/theme.css';

export const main = style({
	flexGrow: 1,
	width: '100%',
	maxWidth: '1440px',
	padding: '60px 32px',
	marginInline: 'auto',
	'@media': {
		[breakPoints.sm]: {
			padding: '60px',
		},
		[breakPoints.lg]: {
			padding: '60px 120px',
		},
	},
});

export const smallTopPadding = style({
	paddingTop: '80px',
});

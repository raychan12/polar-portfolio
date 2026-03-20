import { style } from '@vanilla-extract/css';

import { DeprecatedBreakPoints } from '../../styles/theme.css';

export const main = style({
	flexGrow: 1,
	width: '100%',
	maxWidth: '1200px',
	padding: '60px 32px',
	marginInline: 'auto',
	'@media': {
		[DeprecatedBreakPoints.SP]: {
			padding: '120px 60px',
		},
		[DeprecatedBreakPoints.PC]: {
			padding: '120px',
		},
	},
});

export const smallTopPadding = style({
	paddingTop: '80px',
});

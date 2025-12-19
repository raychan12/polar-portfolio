import { style } from '@vanilla-extract/css';

import { breakPoints, vars } from '../../../styles/theme.css';

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '48px',
	'@media': {
		[breakPoints.md]: {
			display: 'grid',
			gridTemplateColumns: '320px minmax(0, 1fr)',
			gridTemplateRows: 'auto auto',
			gap: '108px',
		},
	},
});

export const backButton = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	font: vars.text.en.description,
});

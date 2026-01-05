import { style } from '@vanilla-extract/css';

import { BreakPoints } from '../../styles/theme.css';

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '48px',
	'@media': {
		[BreakPoints.TABLET]: {
			display: 'grid',
			gridTemplateColumns: '320px minmax(0, 1fr)',
			gridTemplateRows: 'auto auto',
			gap: '108px',
		},
	},
});

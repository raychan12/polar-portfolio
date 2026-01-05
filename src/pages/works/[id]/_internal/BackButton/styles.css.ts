import { style } from '@vanilla-extract/css';

import { vars } from '../../../../../foundation/styles/theme.css';

export const backButton = style({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	font: vars.text.en.description,
});

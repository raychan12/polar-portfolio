import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const footer = style({
	display: 'flex',
	alignItems: 'end',
	justifyContent: 'space-between',
	background: vars.color.brand.primary,
	padding: '60px 120px 48px',
});

export const logos = style({
	display: 'flex',
	gap: '40px',
	alignItems: 'center',
});

export const copyright = style({
	font: vars.text.en.exception,
	color: vars.color.text.tertiary,
});

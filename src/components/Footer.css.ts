import { style } from '@vanilla-extract/css';

import { theme } from '../styles/theme.css';

export const footer = style({
	display: 'flex',
	alignItems: 'end',
	justifyContent: 'space-between',
	background: theme.color.brand.primary,
	padding: '60px 120px 48px',
});

export const logos = style({
	display: 'flex',
	gap: '40px',
	alignItems: 'center',
});

export const copyright = style({
	font: theme.text.en.exception,
	color: theme.color.text.tertiary,
});

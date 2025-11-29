import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const footer = style({
	background: vars.color.brand.primary,
	padding: '40px 120px',
	color: vars.color.text.tertiary,
});

export const container = style({
	display: 'flex',
	alignItems: 'stretch',
	justifyContent: 'space-between',
	maxWidth: '1200px',
	marginInline: 'auto',
});

export const linkList = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '8px',
	height: '100%',
});

export const link = style({
	fontFamily: vars.font.en,
	fontSize: '0.875em',
	fontWeight: 300,
});

export const right = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'end',
	justifyContent: 'space-between',
});

export const logos = style({
	display: 'flex',
	gap: '40px',
	alignItems: 'center',
});

export const copyright = style({
	font: vars.text.en.exception,
});

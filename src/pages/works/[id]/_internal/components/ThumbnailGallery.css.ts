import { style } from '@vanilla-extract/css';

import { vars } from '../../../../../styles/theme.css';

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '48px',
});

export const mainImage = style({
	width: '320px',
	height: '320px',
	objectFit: 'contain',
});

export const selectorList = style({
	display: 'flex',
	gap: '16px',
	maxWidth: '100%',
	overflowX: 'auto',
});

export const selectorListElement = style({
	flexShrink: 0,
});

export const selectorImage = style({
	width: '80px',
	height: '80px',
	objectFit: 'cover',
	borderRadius: '4px',
	border: '1px solid transparent',
});

export const currentImage = style({
	borderColor: vars.color.brand.primary,
});

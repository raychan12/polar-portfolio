import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const link = style({
	fontFamily: vars.font.enSerif,
	fontSize: '1.5em',
	fontWeight: 600,
});

export const iconLink = style({
	verticalAlign: 'bottom',
});

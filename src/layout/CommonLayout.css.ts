import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const body = style({
	fontFamily: vars.font.full,
	lineHeight: vars.lineHeight.default,
});

import { style } from '@vanilla-extract/css';

import { theme } from '../styles/theme.css';

export const body = style({
	fontFamily: theme.font.full,
	lineHeight: theme.lineHeight.default,
});

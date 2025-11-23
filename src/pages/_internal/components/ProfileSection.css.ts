import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/theme.css';

export const name = style({
	fontFamily: vars.font.jpMincho,
	fontSize: '1.25em',
	fontWeight: 400,
});

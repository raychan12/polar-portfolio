import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const root = style({
	position: 'relative',
	height: '200px',
	padding: '56px 140px',
	display: 'flex',
	alignItems: 'end',
});

export const backgroundImage = style({
	aspectRatio: 'unset',
	position: 'absolute',
	inset: 0,
	zIndex: -1,
});

export const titleText = style({
	width: 'fit-content',
	padding: '0 20px 7px 10px',
	color: vars.color.text.tertiary,
	fontFamily: vars.font.enSerif,
	fontSize: '32px',
	borderBottom: `1px solid ${vars.color.text.tertiary}`,
});

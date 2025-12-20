import { style } from '@vanilla-extract/css';

import { BreakPoints, vars } from '../styles/theme.css';

export const root = style({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	overflow: 'hidden',
});

export const main = style({
	position: 'relative',
	width: '100%',
	maxWidth: '1200px',
	height: '200px',
	display: 'flex',
	alignItems: 'end',
});

export const image = style({
	position: 'absolute',
	objectPosition: 'left center',
	objectFit: 'cover',
	boxShadow: '0px 0px 32px 0px #00000029',
	width: '100%',
	height: '100%',
	zIndex: -1,
});

export const background = style({
	position: 'absolute',
	inset: '0px',
	width: '100%',
	height: '100%',
	aspectRatio: 'unset',
	scale: 1.5,
	objectFit: 'cover',
	filter: 'blur(32px)',
	zIndex: -2,
});

export const titleText = style({
	width: 'fit-content',
	padding: '0 20px 7px 10px',
	margin: '32px 40px',
	color: vars.color.text.tertiary,
	fontFamily: vars.font.enSerif,
	fontSize: '32px',
	borderBottom: `1px solid ${vars.color.text.tertiary}`,
	zIndex: 1,
	'@media': {
		[BreakPoints.sm]: {
			margin: '56px 140px',
		},
	},
});

import { style } from '@vanilla-extract/css';

import { BreakPoints, vars } from '../../../styles/theme.css';

export const root = style({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	overflow: 'hidden',
});

export const main = style({
	position: 'relative',
	height: '100dvh',
	'@media': {
		[BreakPoints.tablet]: {
			height: '800px',
		},
	},
});

export const image = style({
	objectPosition: '20% center',
	objectFit: 'cover',
	boxShadow: '0px 0px 32px 0px #00000029',
	width: '100%',
	height: '100%',
	'@media': {
		[BreakPoints.tablet]: {
			objectPosition: 'left center',
		},
	},
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
	zIndex: -1,
});

export const phrase = style({
	position: 'absolute',
	right: '32px',
	bottom: '120px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'end',
	'@media': {
		[BreakPoints.tablet]: {
			gap: '20px',
			right: '120px',
			alignItems: 'center',
			flexDirection: 'row',
		},
	},
});

export const phraseImage = style({
	display: 'none',
	'@media': {
		[BreakPoints.tablet]: {
			display: 'block',
		},
	},
});

export const phraseImageSm = style({
	display: 'block',
	'@media': {
		[BreakPoints.tablet]: {
			display: 'none',
		},
	},
});

export const scroll = style({
	position: 'absolute',
	bottom: '24px',
	right: '32px',
	display: 'flex',
	alignItems: 'end',
	gap: '8px',
	color: 'white',
	'@media': {
		[BreakPoints.tablet]: {
			display: 'none',
		},
	},
});

export const scrollText = style({
	fontFamily: vars.font.enSerif,
	fontSize: '20px',
});

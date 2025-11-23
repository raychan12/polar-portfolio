import { style } from '@vanilla-extract/css';

export const root = style({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	overflow: 'hidden',
});

export const main = style({
	position: 'relative',
	height: '100dvh',
});

export const image = style({
	objectPosition: 'left center',
	objectFit: 'cover',
	boxShadow: '0px 0px 32px 0px #00000029',
	width: '100%',
	height: '100%',
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
	right: '120px',
	bottom: '120px',
	display: 'flex',
	alignItems: 'center',
	gap: '20px',
});

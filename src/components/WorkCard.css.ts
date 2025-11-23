import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const root = style({
	display: 'flex',
	width: '100%',
	minHeight: '320px',
	maxWidth: '960px',
	boxShadow: '0px 4px 32px 0px #3C638729',
	backgroundColor: vars.color.bg.primary,
});

export const visualImageContainer = style({
	flexShrink: 0,
	position: 'relative',
	overflow: 'hidden',
	width: '227px',
	transform: 'translate(0)',
	marginRight: '80px',
});

export const visualImage = style({
	position: 'absolute',
	inset: 0,
	width: '100%',
	height: '100%',
	objectFit: 'contain',
});

export const visualImageBackground = style({
	position: 'absolute',
	inset: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	filter: 'blur(64px)',
	scale: 1.5,
	zIndex: -1,
});

export const logoLeft = style({
	width: '160px',
	height: '100%',
	objectFit: 'contain',
	marginBlock: 'auto',
	marginRight: '40px',
});

export const logoInline = style({
	width: '100%',
	objectFit: 'contain',
	objectPosition: 'left',
	maxHeight: '100px',
});

export const workInfo = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '16px',
	paddingBlock: '20px',
	paddingRight: '40px',
});

export const workInfoSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

export const descriptionText = style({
	font: vars.text.jp.description,
});

export const tagsList = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px 20px',
	font: vars.text.en.caption,
});

export const tagsLink = style({
	'color': vars.color.accent.beta,
	':visited': {
		color: vars.color.accent.alpha,
	},
});

export const dateText = style({
	font: vars.text.en.exception,
	color: vars.color.text.secondary,
});

export const assigningText = style({
	font: vars.text.jp.description,
	lineHeight: '200%',
});

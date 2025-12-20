import { style } from '@vanilla-extract/css';

import { vars } from '../../../../../styles/theme.css';

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '32px',
});

export const metaSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
});

export const tagsList = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px 20px',
});

export const tagsLink = style({
	font: vars.text.en.caption,
	color: vars.color.text.secondary,
	textDecoration: 'underline',
});

export const subSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

export const descriptionText = style({
	font: vars.text.jp.description,
});

export const logoInline = style({
	width: '100%',
	height: '100%',
	aspectRatio: 'unset',
	objectFit: 'contain',
	objectPosition: 'left',
	maxWidth: '60%',
	maxHeight: '200px',
});

export const dateText = style({
	font: vars.text.en.exception,
	color: vars.color.text.secondary,
});

export const assigningText = style({
	font: vars.text.jp.description,
	lineHeight: '200%',
});

export const externalLinkSection = style({
	display: 'flex',
	gap: '8px',
	color: vars.color.brand.primary,
});

export const externalLinkList = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px',
});

export const externalLinkIcon = style({
	flexShrink: 0,
});

export const externalLink = style({
	display: 'flex',
	gap: '8px',
	font: vars.text.en.caption,
	selectors: {
		'&:not(:last-child)::after': {
			display: 'block',
			content: '"/"',
		},
	},
});

export const detailSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
});

export const detailSectionTitle = style({
	font: vars.text.en.sectionTitle,
	color: vars.color.brand.primary,
});

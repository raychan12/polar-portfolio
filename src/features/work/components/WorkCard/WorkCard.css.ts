import { style } from '@vanilla-extract/css';

import { vars } from '../../../../styles/theme.css';

// <a> タグの中に <a> はネストできないので、nav.tagsList の取り扱いに関して
// この記事を参考にしています:
// https://zenn.dev/ixkaito/articles/nested-links-using-subgrid

export const root = style({
	display: 'grid',
	gridTemplateRows: '1fr repeat(3, max-content) 1fr',
	gridTemplateColumns: 'max-content max-content 1fr',
	gridTemplateAreas: `
		". . ."
		". . ."
		". . tags"
		". . ."
		". . ."
	`,
	rowGap: '8px',
	alignContent: 'center',
	width: '100%',
	minHeight: '320px',
	maxWidth: '960px',
	paddingRight: '80px',
	boxShadow: '0px 4px 32px 0px rgba(60, 99, 135, 0.16)',
	backgroundColor: vars.color.bg.primary,
	transition: '300ms transform, 300ms box-shadow',
	transform: 'scale(1.0)',
	selectors: {
		'&:is(:hover, :focus-visible)': {
			boxShadow: '0px 4px 60px 0px rgba(60, 99, 135, 0.25)',
			transform: 'scale(1.01)',
		},
	},
});

export const grid = style({
	width: '100%',
	gridColumn: '1 / 4',
	gridRow: '1 / 6',
	display: 'grid',
	gridTemplateRows: 'subgrid',
	gridTemplateColumns: 'subgrid',
	gridTemplateAreas: `
		"img logo ."
		"img logo title"
		"img logo tags"
		"img logo meta"
		"img logo ."
	`,
});

export const visualImageContainer = style({
	gridArea: 'img',
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
	gridArea: 'logo',
	marginRight: '40px',
	width: '160px',
	height: '100%',
	objectFit: 'contain',
});

export const logoInline = style({
	width: '100%',
	objectFit: 'contain',
	objectPosition: 'left',
	maxHeight: '100px',
});

export const titleSection = style({
	gridArea: 'title',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

export const descriptionText = style({
	font: vars.text.jp.description,
});

export const tagsList = style({
	pointerEvents: 'none',
	gridArea: 'tags',
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px 20px',
	font: vars.text.en.caption,
});

export const tagsLink = style({
	pointerEvents: 'all',
	color: vars.color.text.secondary,
	textDecoration: 'underline',
});

export const metaSection = style({
	gridArea: 'meta',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

export const dateText = style({
	font: vars.text.en.exception,
	color: vars.color.text.secondary,
});

export const assigningText = style({
	font: vars.text.jp.description,
	lineHeight: '200%',
});

import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css';

import { BreakPoints, vars } from '../../../../../styles/theme.css';

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

export const tagsLinkColor = createVar();

export const tagsLink = style({
	font: vars.text.en.description,
	color: fallbackVar(tagsLinkColor, vars.color.text.secondary),
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
	maxWidth: '350px',
	maxHeight: '200px',
	'@media': {
		[BreakPoints.TABLET]: {
			maxWidth: '60%',
		},
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

export const externalLinkSection = style({
	display: 'flex',
	gap: '8px',
	color: vars.color.brand.primary,
});

export const externalLinkList = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '8px',
	// 外部リンクリストの左のアイコンとの上下中央揃え
	paddingTop: '4px',
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

export const renderedContent = style({
	fontFamily: vars.font.jp,
	lineHeight: '200%',
});

// FIXME: Markdown コンテンツが入る div 以下のスタイリングのために globalStyle を
//        使っているけど、もう少しいいやり方がありそう

globalStyle(`${renderedContent} h1`, {
	fontSize: '1.75em',
	lineHeight: '200%',
	marginBlock: '1em 0.5em',
});

globalStyle(`${renderedContent} h2`, {
	fontSize: '1.5em',
	lineHeight: '200%',
	marginBlock: '1em 0.5em',
});

globalStyle(`${renderedContent} h3`, {
	fontSize: '1.3em',
	lineHeight: '200%',
	marginBlock: '1em 0.5em',
});

globalStyle(`${renderedContent} b`, {
	fontWeight: 600,
});

globalStyle(`${renderedContent} i`, {
	fontStyle: 'italic',
});

globalStyle(`${renderedContent} u`, {
	textDecoration: 'underline',
});

globalStyle(`${renderedContent} s`, {
	textDecoration: 'line-through',
});

globalStyle(`${renderedContent} code`, {
	fontFamily: 'monospace',
});

globalStyle(`${renderedContent} a`, {
	textDecoration: 'underline',
	color: vars.color.accent.alpha,
});

globalStyle(`${renderedContent} ul`, {
	marginLeft: '1.5em',
	listStyle: 'disc',
});

globalStyle(`${renderedContent} ol`, {
	marginLeft: '1.5em',
	listStyle: 'decimal',
});

globalStyle(`${renderedContent} li`, {
	paddingLeft: '0.5em',
});

globalStyle(`${renderedContent} .color-blue`, {
	color: vars.color.brand.primary,
});

// TODO: 他にも Notion コンテンツからパースされている
//       スタイルはいろいろあるので、必要に応じてスタイルを追加

import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/theme.css';

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const content = style({
	display: 'flex',
	gap: '40px',
});

export const avatar = style({
	borderRadius: '100%',
});

export const name = style({
	fontFamily: vars.font.jpMincho,
	fontSize: '1.25em',
	fontWeight: 400,
	WebkitTextStroke: `1px ${vars.color.text.primary}`,
});

export const bio = style({
	font: vars.text.jp.description,
	fontWeight: 400,
	lineHeight: '200%',
	marginTop: '16px',
});

export const shirokumaText = style({
	'display': 'inline-block',
	'position': 'relative',
	':after': {
		content: '',
		display: 'block',
		position: 'absolute',
		width: '80px',
		height: '80px',
		maxWidth: 'none',
		maxHeight: 'none',
		borderRadius: '120px',
		bottom: '50%',
		opacity: '0%',
		background: `url(/shirokuma.webp)`,
		backgroundSize: 'contain',
		transition: 'opacity 2000ms, bottom 2000ms',
	},
	'selectors': {
		'&:hover:after': {
			opacity: '75%',
			bottom: '105%',
		},
	},
});

export const linksList = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '4px 32px',
	marginTop: '16px',
});

export const link = style({
	color: vars.color.brand.primary,
	borderBottom: `2px solid transparent`,
	transition: '150ms border-bottom-color',
	fontSize: '24px',
	selectors: {
		'&:is(:hover, :focus-visible)': {
			borderBottomColor: vars.color.brand.primary,
		},
	},
});

export const linkIcon = style({
	verticalAlign: 'bottom',
});

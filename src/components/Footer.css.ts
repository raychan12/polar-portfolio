import { style } from '@vanilla-extract/css';

import { BreakPoints, vars } from '../styles/theme.css';

export const footer = style({
	display: 'grid',
	gridTemplateRows: 'auto auto',
	gridTemplateColumns: 'auto auto',
	gridTemplateAreas: `
		"link logo"
		"copyright copyright"
	`,
	background: vars.color.brand.primary,
	padding: '24px 48px',
	color: vars.color.text.tertiary,
	gap: '12px',
	'@media': {
		[BreakPoints.TABLET]: {
			padding: '40px 120px',
		},
	},
});

export const container = style({
	display: 'flex',
	alignItems: 'stretch',
	justifyContent: 'space-between',
	maxWidth: '1200px',
	marginInline: 'auto',
});

export const linksList = style({
	gridArea: 'link',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '8px',
	height: '100%',
});

export const link = style({
	fontFamily: vars.font.en,
	fontSize: '0.875em',
	fontWeight: 300,
});

export const identify = style({
	gridArea: 'logo',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'end',
	justifyContent: 'space-between',
});

export const logos = style({
	display: 'flex',
	gap: '16px',
	alignItems: 'center',
	'@media': {
		[BreakPoints.TABLET]: {
			gap: '40px',
		},
	},
});

export const ljusLogo = style({
	width: '60px',
	height: '60px',
	'@media': {
		[BreakPoints.TABLET]: {
			width: '120px',
			height: '120px',
		},
	},
});

export const circleLogo = style({
	width: '95px',
	height: '35.5px',
	'@media': {
		[BreakPoints.TABLET]: {
			width: '190px',
			height: '71px',
		},
	},
});

export const copyright = style({
	gridArea: 'copyright',
	font: vars.text.en.exception,
	width: '100%',
	textAlign: 'end',
});

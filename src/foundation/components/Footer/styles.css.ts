import { style } from '@vanilla-extract/css';

import { BreakPoints, vars } from '../../styles/theme.css';

export const footer = style({
	background: vars.color.brand.primary,
	padding: '32px 32px 24px',
	color: vars.color.text.tertiary,
	'@media': {
		[BreakPoints.MIN_720]: {
			padding: '42px 64px',
		},
		[BreakPoints.MIN_1000]: {
			padding: '42px 120px',
		},
	},
});

export const container = style({
	display: 'grid',
	gridTemplateRows: 'auto auto',
	gridTemplateColumns: 'auto auto',
	gridTemplateAreas: `
		"link logo"
		"copyright copyright"
	`,
	gap: '12px',
	width: '100%',
	maxWidth: '960px',
	margin: '0 auto',
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
	alignItems: 'center',
	'@media': {
		[BreakPoints.MIN_720]: {
			gap: '40px',
		},
	},
});

export const ljusLogo = style({
	width: '73px',
	height: '73px',
	'@media': {
		[BreakPoints.MIN_720]: {
			width: '120px',
			height: '120px',
		},
	},
});

export const circleLogo = style({
	width: '130px',
	height: '48px',
	'@media': {
		[BreakPoints.MIN_720]: {
			width: '188px',
			height: '69px',
		},
	},
});

export const copyright = style({
	gridArea: 'copyright',
	fontWeight: 500,
	fontSize: '0.875rem',
	width: '100%',
	textAlign: 'end',
});

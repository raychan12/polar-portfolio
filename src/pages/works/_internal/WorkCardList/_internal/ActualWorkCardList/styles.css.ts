import { style } from '@vanilla-extract/css';

import { vars } from '../../../../../../foundation/styles/theme.css';

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const filter = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
});

export const workList = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const seeMoreButton = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '240px',
	marginInline: 'auto',
	paddingBlock: '20px',
	border: `2px solid ${vars.color.brand.primary}`,
	color: vars.color.brand.primary,
	fontFamily: vars.font.en,
	fontSize: '24px',
	transition: 'color 300ms, background-color 300ms',
	cursor: 'pointer',
	selectors: {
		'&:is(:hover, :focus-visible)': {
			color: vars.color.text.tertiary,
			backgroundColor: vars.color.brand.primary,
		},
	},
});

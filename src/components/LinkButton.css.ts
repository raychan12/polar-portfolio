import { style } from '@vanilla-extract/css';

import { vars } from '../styles/theme.css';

export const root = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '4px',
	width: '240px',
	marginInline: 'auto',
	paddingBlock: '20px',
	border: `2px solid ${vars.color.brand.primary}`,
	color: vars.color.brand.primary,
	fill: vars.color.text.tertiary,
	fontSize: '24px',
	transition: 'color 300ms, background-color 300ms',
	selectors: {
		'&:is(:hover, :focus-visible)': {
			color: vars.color.text.tertiary,
			backgroundColor: vars.color.brand.primary,
		},
	},
});

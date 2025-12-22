import { style } from '@vanilla-extract/css';

import { vars } from '../../../../styles/theme.css';

export const list = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '2px 8px',
});

export const button = style({
	fontFamily: vars.font.en,
	fontWeight: 300,
	color: `var(--filter-button-type-color, ${vars.color.text.secondary})`,
	textDecoration: 'underline',
	borderRadius: '4px',
	padding: '4px 8px',
	selectors: {
		'&[aria-current="page"]': {
			color: vars.color.text.tertiary,
			backgroundColor: `var(--filter-button-type-color, ${vars.color.text.secondary})`,
		},
	},
});

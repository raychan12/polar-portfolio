import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/theme.css';

export const list = style({
	display: 'flex',
	gap: '8px',
});

export const tagText = style({
	// TODO: テキスト色について確認する
	fontFamily: vars.font.en,
	fontWeight: 300,
	color: vars.color.text.secondary,
	borderRadius: '4px',
	padding: '4px 8px',
	selectors: {
		'&[aria-current="page"]': {
			color: vars.color.text.tertiary,
			backgroundColor: vars.color.text.secondary,
		},
	},
	textDecoration: 'underline',
});

import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/theme.css';

export const root = style({
	fontSize: '32px',
	fontWeight: 800,
	fontFamily: vars.font.en,
	lineHeight: '125%',
	color: vars.color.brand.primary,
	borderBottom: `4px solid ${vars.color.brand.primary}`,
	paddingInline: '20px 60px',
	width: 'fit-content',
});

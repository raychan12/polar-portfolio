import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/theme.css';

export const root = style({
	fontSize: '32px',
	// Figma 上では 800 ですが、実際に font-weight: 800 の Avenir を
	// 表示してみるとかなり太くなるので、500 を指定しています
	fontWeight: 500,
	fontFamily: vars.font.en,
	lineHeight: '125%',
	color: vars.color.brand.primary,
	borderBottom: `4px solid ${vars.color.brand.primary}`,
	paddingInline: '20px 60px',
	width: 'fit-content',
});

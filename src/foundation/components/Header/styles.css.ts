import { style } from '@vanilla-extract/css';

import { DeprecatedBreakPoints, vars } from '../../styles/theme.css';

export const root = style({
	position: 'absolute',
	right: 'calc(max(50vw - 600px, 0px) + 20px)',
	top: '40px',
	display: 'flex',
	color: 'white',
	'@media': {
		[DeprecatedBreakPoints.SP]: {
			right: 'calc(max(50vw - 600px, 0px) + 40px)',
		},
	},
});

export const link = style({
	display: 'flex',
	alignItems: 'center',
	height: '36px',
	fontFamily: vars.font.enSerif,
	fontSize: '24px',
	fontWeight: 600,
	paddingInline: '10px',
	selectors: {
		'&[aria-current="page"]': {
			borderBottom: `1px solid ${vars.color.text.tertiary}`,
		},
	},
});

export const iconLink = style({
	verticalAlign: 'bottom',
});

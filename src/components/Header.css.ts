import { style } from '@vanilla-extract/css';

import { BreakPoints, vars } from '../styles/theme.css';

export const root = style({
	position: 'absolute',
	right: 'calc(max(50vw - 600px, 0px) + 20px)',
	top: '40px',
	display: 'flex',
	color: 'white',
	'@media': {
		[BreakPoints.SP]: {
			right: 'calc(max(50vw - 600px, 0px) + 40px)',
		},
	},
});

export const link = style({
	fontFamily: vars.font.enSerif,
	fontSize: '1.5em',
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

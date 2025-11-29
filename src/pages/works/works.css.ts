import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/theme.css';

export const filters = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
});

export const worksList = style({
	marginTop: '40px',
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const backLink = style({
	marginTop: '60px',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	fontFamily: vars.font.en,
	fontWeight: 300,
	fontSize: '1em',
});

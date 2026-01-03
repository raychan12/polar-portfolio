import { style } from '@vanilla-extract/css';

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const worksList = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
});

export const work = style({
	justifyItems: 'center',
});

export const linkButton = style({
	marginTop: '40px',
});

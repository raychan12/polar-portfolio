import { style } from '@vanilla-extract/css';

export const main = style({
	flexGrow: 1,
	width: '100%',
	maxWidth: '1440px',
	/* FIXME: padding-top は、ヘッダーがない場合 (トップページ) は 120px だけど、
	 *				ヘッダーがある場合は 76px に縮こまる */
	padding: '120px',
	marginInline: 'auto',
});

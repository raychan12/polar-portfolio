import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

const typography = {
	pageTitle: '700 1.875rem',
	popupTitle: '700 1.5rem',
	copy: '700 1.25rem',
	subcopy: '700 1rem',
	description: '300 1rem',
	sectionTitle: '700 0.875rem',
	caption: '300 0.875rem',
	exception: '500 0.875rem',
} as const;

const font = {
	en: "'Avenir', Roboto",
	jp: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN'",
	full: "'Avenir', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
} as const;

function createTypeConfig(lang: keyof typeof font): { [key in keyof typeof typography]: string } {
	return Object.fromEntries(
		Object.entries(typography).map(([typographyKey, typographyValue]) => [
			typographyKey,
			`${typographyValue} ${font[lang]}`,
		]),
	) as { [key in keyof typeof typography]: string };
}

export const theme = createGlobalTheme(':root', {
	color: {
		brand: {
			primary: '#3c6387',
		},
		bg: {
			primary: '#ffffff',
			secondary: '#ffffff',
		},
		text: {
			primary: '#222222',
			secondary: '#555555',
			tertiary: '#ffffff',
		},
		accent: {
			alpha: '#527cb4',
			beta: '#3c8bc0',
			gamma: '#15b98b',
		},
	},
	font,
	text: {
		en: createTypeConfig('en'),
		jp: createTypeConfig('jp'),
	},
	lineHeight: {
		default: '150%',
	},
});

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
});

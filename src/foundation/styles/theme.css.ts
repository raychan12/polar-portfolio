import { createGlobalTheme } from '@vanilla-extract/css';

const font = {
	en: "var(--font-avenir), 'Avenir', Roboto",
	enSerif: 'var(--font-cormorant-sc), serif, system-ui',
	jp: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN'",
	jpMincho: 'var(--font-hina-mincho), serif, system-ui',
	full: "var(--font-avenir), 'Avenir', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, -apple-system, BlinkMacSystemFont, sans-serif, system-ui",
} as const;

export const vars = createGlobalTheme(':root', {
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
	lineHeight: {
		default: '150%',
	},
} as const);

export const DeprecatedBreakPoints = {
	SP: 'screen and (min-width: 640px)',
	TABLET: 'screen and (min-width: 744px)',
	PC: 'screen and (min-width: 1000px)',
} as const;

export const BreakPoints = {
	MIN_720: 'screen and (min-width: 720px)',
	MIN_1000: 'screen and (min-width: 1000px)',
	MIN_1200: 'screen and (min-width: 1200px)',
} as const;

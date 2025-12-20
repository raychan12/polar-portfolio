import { createGlobalTheme } from '@vanilla-extract/css';

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
	en: "var(--font-avenir), 'Avenir', Roboto",
	enSerif: 'var(--font-cormorant-sc), serif, system-ui',
	jp: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN'",
	jpMincho: 'var(--font-hina-mincho), serif, system-ui',
	full: "var(--font-avenir), 'Avenir', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, -apple-system, BlinkMacSystemFont, sans-serif, system-ui",
} as const;

/**
 * typography の各値に `font[lang]` を付け加えて、`${typography} ${font}` の形のトークンを作ります。
 * そのまま CSS `font` 指定に使える値になります。
 *
 * @example
 * ```ts
 * import { style } from "@vanilla-extract";
 * import { theme } from "../styles/theme.css";
 *
 * // Hiragino Sans W7 が 1.875em で表示されるように指定されます
 * const foo = style({ font: theme.text.ja.pageTitle });
 * ```
 */
const createTypeConfig = <T extends keyof typeof font>(
	lang: T,
): { [key in keyof typeof typography]: `${(typeof typography)[key]} ${(typeof font)[T]}` } =>
	Object.fromEntries(
		Object.entries(typography).map(([typographyKey, typographyValue]) => [
			typographyKey,
			`${typographyValue} ${font[lang]}`,
		]),
	) as { [key in keyof typeof typography]: `${(typeof typography)[key]} ${(typeof font)[T]}` };

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
	text: {
		en: createTypeConfig('en'),
		jp: createTypeConfig('jp'),
	},
	lineHeight: {
		default: '150%',
	},
} as const);

export const BreakPoints = {
	sp: 'screen and (min-width: 640px)',
	tablet: 'screen and (min-width: 744px)',
	pc: 'screen and (min-width: 1000px)',
} as const;

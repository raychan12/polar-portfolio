import { style } from '@vanilla-extract/css';

import { theme } from '../../styles/theme.css';

export const textJpExamples = Object.entries(theme.text.jp).map(([key, value]) => [key, style({ font: value })]);

export const textEnExamples = Object.entries(theme.text.en).map(([key, value]) => [key, style({ font: value })]);

export const colorExamples = Object.entries(theme.color)
	.flatMap(([colorKey, value]) => Object.entries(value).map(([key, cssVar]) => [`${colorKey}.${key}`, cssVar]))
	.map(([key, value]) => [
		key,
		style({
			backgroundColor: '#ddd',
			color: value,
		}),
	]);

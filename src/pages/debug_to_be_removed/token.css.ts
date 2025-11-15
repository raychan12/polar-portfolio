import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/theme.css';

export const textJpExamples = Object.entries(vars.text.jp).map(([key, value]) => [key, style({ font: value })]);

export const textEnExamples = Object.entries(vars.text.en).map(([key, value]) => [key, style({ font: value })]);

export const colorExamples = Object.entries(vars.color)
	.flatMap(([colorKey, value]) => Object.entries(value).map(([key, cssVar]) => [`${colorKey}.${key}`, cssVar]))
	.map(([key, value]) => [
		key,
		style({
			backgroundColor: '#ddd',
			color: value,
		}),
	]);

import { vars } from '../../styles/theme.css';

import type { WorkType } from './types';

export const workTypeColorsCSS: Record<WorkType, string> = {
	uiux: vars.color.accent.alpha,
	graphic: vars.color.accent.beta,
	sosaku: vars.color.accent.gamma,
};

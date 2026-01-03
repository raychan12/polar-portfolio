import { vars } from '../../foundation/styles/theme.css';

import type { WorkType } from './definitions';

export const workTypeColorMap: Record<WorkType, string> = {
	uiux: vars.color.accent.alpha,
	graphic: vars.color.accent.beta,
	sosaku: vars.color.accent.gamma,
};

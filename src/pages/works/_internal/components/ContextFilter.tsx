import type { FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';

import { WorkContext } from '../../../../context/work/types';
import type { ContextFilterQuery } from '../query';

import { list, button } from './Filter.css';

const ContextFilterButtons = ['all', ...WorkContext] as const;
type ContextFilterButtons = (typeof ContextFilterButtons)[number];

type Props = {
	currentContext: ContextFilterQuery;
	onContextUpdate: (query: ContextFilterQuery) => void;
};

export const ContextFilter: FunctionComponent<Props> = ({ currentContext, onContextUpdate }) => {
	const getToggledContexts = useCallback(
		(selectedContext: ContextFilterButtons): ContextFilterQuery => {
			if (selectedContext === 'all') {
				return;
			}

			if (selectedContext === currentContext) {
				return;
			}

			return selectedContext;
		},
		[currentContext],
	);

	const handleClick = useCallback(
		(context: ContextFilterButtons) => () => {
			onContextUpdate(getToggledContexts(context));
		},
		[getToggledContexts, onContextUpdate],
	);

	const isCurrentContext = useCallback(
		(context: ContextFilterButtons) => {
			if (currentContext === undefined) {
				return context === 'all';
			}

			return currentContext === context;
		},
		[currentContext],
	);

	return (
		<nav aria-label="作品形態">
			<ul class={list}>
				{ContextFilterButtons.map((context) => (
					<li>
						<button
							class={button}
							onClick={handleClick(context)}
							aria-current={isCurrentContext(context) ? 'page' : undefined}>
							#{context}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

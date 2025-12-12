import type { FunctionComponent } from 'preact';

import { workContext } from '../../../../context/work/types';
import type { ContextFilterQuery } from '../query';

import { list, button } from './Filter.css';

const ContextFilterButtons = ['all', ...workContext] as const;
type ContextFilterButtons = (typeof ContextFilterButtons)[number];

type Props = {
	currentContext: ContextFilterQuery;
	onContextUpdate: (query: ContextFilterQuery) => void;
};

export const ContextFilter: FunctionComponent<Props> = ({ currentContext, onContextUpdate }) => {
	const getToggledContexts = (selectedContext: ContextFilterButtons): ContextFilterQuery => {
		if (selectedContext === 'all') {
			return undefined;
		}

		if (selectedContext === currentContext) {
			return undefined;
		}

		return selectedContext;
	};

	const handleClick = (context: ContextFilterButtons) => () => {
		onContextUpdate(getToggledContexts(context));
	};

	const isCurrentContext = (context: ContextFilterButtons) => {
		if (currentContext === undefined) {
			return context === 'all';
		}

		return currentContext === context;
	};

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

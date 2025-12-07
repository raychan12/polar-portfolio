import type { FunctionComponent } from 'preact';

import { workContext } from '../../../../context/work/types';
import type { FilterQuery } from '../query';

import { list, button } from './Filter.css';

const contextFilterButtons = ['all', ...workContext] as const;
type ContextFilterButtons = (typeof contextFilterButtons)[number];

type Props = {
	currentContext: FilterQuery['context'];
	onContextUpdate: (query: FilterQuery['context']) => void;
};

export const ContextFilter: FunctionComponent<Props> = ({ currentContext, onContextUpdate }) => {
	const getToggledContexts = (selectedContext: ContextFilterButtons): FilterQuery['context'] => {
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
				{contextFilterButtons.map((context) => (
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

import type { FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';

import { WorkContext } from '../../../../../../context/work/definitions';
import type { ContextFilterQuery } from '../../../../../../context/work/definitions';
import type { EnumLike } from '../../../../../../foundation/utils/TypeUtils';

import { list, button } from './styles.css';

const ContextFilterButtons = {
	ALL: 'all',
	...WorkContext,
} as const;
type ContextFilterButtons = EnumLike<typeof ContextFilterButtons>;

type Props = {
	currentContext: ContextFilterQuery;
	onContextUpdate: (query: ContextFilterQuery) => void;
};

export const ContextFilter: FunctionComponent<Props> = ({ currentContext, onContextUpdate }) => {
	const getToggledContexts = useCallback(
		(selectedContext: ContextFilterButtons): ContextFilterQuery => {
			if (selectedContext === 'all') {
				return null;
			}

			if (selectedContext === currentContext) {
				return null;
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
			if (currentContext == null) {
				return context === 'all';
			}

			return currentContext === context;
		},
		[currentContext],
	);

	return (
		<nav aria-label="作品形態">
			<ul class={list}>
				{Object.values(ContextFilterButtons).map((context) => (
					<li key={context}>
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

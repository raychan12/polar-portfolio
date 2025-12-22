import type { FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';

import { workTypeColorsCSS } from '../../../../context/work/styles';
import { WorkType } from '../../../../context/work/types';
import type { TypesFilterQuery } from '../query';

import { list, button } from './Filter.css';

const TypeFilterButtons = ['all', ...WorkType] as const;
type TypeFilterButtons = (typeof TypeFilterButtons)[number];

type Props = {
	currentTypes: TypesFilterQuery;
	onTypesUpdate: (query: TypesFilterQuery) => void;
};

export const TypesFilter: FunctionComponent<Props> = ({ currentTypes, onTypesUpdate }) => {
	const getToggledTypes = useCallback(
		(selectedType: TypeFilterButtons): TypesFilterQuery => {
			if (selectedType === 'all') {
				return [];
			}

			if (currentTypes.includes(selectedType)) {
				return currentTypes.filter((type) => type !== selectedType);
			}

			return [...currentTypes, selectedType];
		},
		[currentTypes],
	);

	const handleClick = useCallback(
		(type: TypeFilterButtons) => () => {
			onTypesUpdate(getToggledTypes(type));
		},
		[getToggledTypes, onTypesUpdate],
	);

	const isCurrentTypes = useCallback(
		(type: TypeFilterButtons) => {
			if (type === 'all') {
				return currentTypes.length === 0;
			}

			return currentTypes.includes(type);
		},
		[currentTypes],
	);

	return (
		<nav aria-label="作品タイプ">
			<ul class={list}>
				{TypeFilterButtons.map((type) => (
					<li>
						<button
							class={button}
							onClick={handleClick(type)}
							aria-current={isCurrentTypes(type) ? 'page' : undefined}
							style={{ '--filter-button-type-color': type === 'all' ? undefined : workTypeColorsCSS[type] }}>
							#{type}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

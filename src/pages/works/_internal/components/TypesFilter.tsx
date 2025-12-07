import type { FunctionComponent } from 'preact';

import { workTypeColorsCSS } from '../../../../context/work/styles';
import { workType } from '../../../../context/work/types';
import type { FilterQuery } from '../query';

import { list, button } from './Filter.css';

const typeFilterButtons = ['all', ...workType] as const;
type TypeFilterButtons = (typeof typeFilterButtons)[number];

type Props = {
	currentTypes: FilterQuery['types'];
	onTypesUpdate: (query: FilterQuery['types']) => void;
};

export const TypesFilter: FunctionComponent<Props> = ({ currentTypes, onTypesUpdate }) => {
	const getToggledTypes = (selectedType: TypeFilterButtons): FilterQuery['types'] => {
		if (selectedType === 'all') {
			return [];
		}

		if (currentTypes.includes(selectedType)) {
			return currentTypes.filter((type) => type !== selectedType);
		}

		return [...currentTypes, selectedType];
	};

	const handleClick = (type: TypeFilterButtons) => () => {
		onTypesUpdate(getToggledTypes(type));
	};

	const isCurrentTypes = (type: TypeFilterButtons) => {
		if (currentTypes.length === 0) {
			return type === 'all';
		}

		return (currentTypes as string[]).includes(type);
	};

	return (
		<nav aria-label="作品タイプ">
			<ul class={list}>
				{typeFilterButtons.map((type) => (
					<li>
						<button
							class={button}
							onClick={handleClick(type)}
							aria-current={isCurrentTypes(type) ? 'page' : undefined}
							style={{ color: type === 'all' ? undefined : workTypeColorsCSS[type] }}>
							#{type}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

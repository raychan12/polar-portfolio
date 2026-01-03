import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { FunctionComponent } from 'preact';
import { useCallback } from 'preact/hooks';

import { WorkType } from '../../../../../../context/work/definitions';
import type { TypesFilterQuery } from '../../../../../../context/work/definitions';
import { workTypeColorMap } from '../../../../../../context/work/styles.css';
import type { EnumLike } from '../../../../../../foundation/utils/TypeUtils';

import { list, button, filterButtonTypeColor } from './styles.css';

const TypeFilterButtons = {
	ALL: 'all',
	...WorkType,
} as const;
type TypeFilterButtons = EnumLike<typeof TypeFilterButtons>;

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
				{Object.values(TypeFilterButtons).map((type) => (
					<li key={type}>
						<button
							class={button}
							onClick={handleClick(type)}
							aria-current={isCurrentTypes(type) ? 'page' : undefined}
							style={assignInlineVars({
								[filterButtonTypeColor]: type === 'all' ? undefined : workTypeColorMap[type],
							})}>
							#{type}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

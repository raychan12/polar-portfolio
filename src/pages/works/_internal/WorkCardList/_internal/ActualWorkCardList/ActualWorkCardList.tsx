import type { FunctionComponent } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';

import { WorkCard } from '../../../../../../context/work/components/WorkCard/WorkCard';
import type {
	ContextFilterQuery,
	FilterQuery,
	TypesFilterQuery,
	WorkCard as WorkCardType,
} from '../../../../../../context/work/definitions';
import { parseFilterQuery, filterQueryToSearchParam, checkWorkMatch } from '../../../../../../context/work/services';
import { ContextFilter } from '../Filter/ContextFilter';
import { TypesFilter } from '../Filter/TypesFilter';

import { filter, root, workList } from './styles.css';

type Props = {
	workCards: WorkCardType[];
};

export const ActualWorkCardList: FunctionComponent<Props> = ({ workCards }) => {
	const [query, setQuery] = useState(parseFilterQuery(new URLSearchParams(window.location.search)));

	const handleQueryUpdate = useCallback((query: FilterQuery) => {
		setQuery(query);
		history.replaceState(undefined, '', `/works/?${filterQueryToSearchParam(query).toString()}`);
	}, []);
	const handleTypesQueryUpdate = useCallback(
		(types: TypesFilterQuery) => {
			handleQueryUpdate({ ...query, types });
		},
		[query, handleQueryUpdate],
	);
	const handleContextQueryUpdate = useCallback(
		(context: ContextFilterQuery) => {
			handleQueryUpdate({ ...query, context });
		},
		[query, handleQueryUpdate],
	);

	const filteredWork = useMemo(() => workCards.filter((work) => checkWorkMatch(work.work, query)), [query, workCards]);

	return (
		<div className={root}>
			<div className={filter}>
				<TypesFilter currentTypes={query.types} onTypesUpdate={handleTypesQueryUpdate} />
				<ContextFilter currentContext={query.context} onContextUpdate={handleContextQueryUpdate} />
			</div>
			<ul className={workList}>
				{filteredWork.map((work) => (
					<li key={work.work.id}>
						<WorkCard {...work} />
					</li>
				))}
			</ul>
		</div>
	);
};

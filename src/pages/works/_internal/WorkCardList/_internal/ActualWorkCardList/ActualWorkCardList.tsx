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

const PAGE_SIZE = 5;

export const ActualWorkCardList: FunctionComponent<Props> = ({ workCards }) => {
	const [query, setQuery] = useState(parseFilterQuery(new URLSearchParams(window.location.search)));
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

	const handleQueryUpdate = useCallback((query: FilterQuery) => {
		setQuery(query);
		setVisibleCount(PAGE_SIZE);
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
	const visibleWork = useMemo(() => filteredWork.slice(0, visibleCount), [filteredWork, visibleCount]);
	const hasMore = useMemo(() => visibleCount < filteredWork.length, [visibleCount, filteredWork]);

	const handleSeeMoreClick = useCallback(() => {
		setVisibleCount((current) => current + PAGE_SIZE);
	}, []);

	return (
		<div className={root}>
			<div className={filter}>
				<TypesFilter currentTypes={query.types} onTypesUpdate={handleTypesQueryUpdate} />
				<ContextFilter currentContext={query.context} onContextUpdate={handleContextQueryUpdate} />
			</div>
			<ul className={workList}>
				{visibleWork.map((work) => (
					<li key={work.work.id}>
						<WorkCard {...work} />
					</li>
				))}
			</ul>
			{hasMore ?
				<button type="button" onClick={handleSeeMoreClick}>
					see more
				</button>
			:	null}
		</div>
	);
};

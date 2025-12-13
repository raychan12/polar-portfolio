import type { FunctionComponent } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';

import type { Work } from '../../../../context/work/types';
import { WorkCard } from '../../../../features/work/components/WorkCard';
import { ContextFilter } from '../components/ContextFilter';
import { TypesFilter } from '../components/TypesFilter';
import {
	checkWorkMatch,
	filterQueryToSearchParam,
	parseFilterQuery,
	type ContextFilterQuery,
	type FilterQuery,
	type TypesFilterQuery,
} from '../query';

import { filter, root, workList } from './Actual.css';

type Props = {
	works: Work[];
};

export const Actual: FunctionComponent<Props> = ({ works }) => {
	const [query, setQuery] = useState(parseFilterQuery(new URLSearchParams(window.location.search)));

	const handleQueryUpdate = (query: FilterQuery) => {
		setQuery(query);
		history.replaceState(undefined, '', `/works/?${filterQueryToSearchParam(query).toString()}`);
	};

	const handleTypesQueryUpdate = useCallback(
		(types: TypesFilterQuery) => {
			handleQueryUpdate({ ...query, types });
		},
		[query],
	);

	const handleContextQueryUpdate = useCallback(
		(context: ContextFilterQuery) => {
			handleQueryUpdate({ ...query, context });
		},
		[query],
	);

	const filteredWork = useMemo(() => works.filter((work) => checkWorkMatch(work, query)), [query, works]);

	return (
		<div className={root}>
			<div className={filter}>
				<TypesFilter currentTypes={query.types} onTypesUpdate={handleTypesQueryUpdate} />
				<ContextFilter currentContext={query.context} onContextUpdate={handleContextQueryUpdate} />
			</div>
			<ul className={workList}>
				{filteredWork.map((work) => (
					<li>
						<WorkCard key={work.id} work={work} />
					</li>
				))}
			</ul>
		</div>
	);
};

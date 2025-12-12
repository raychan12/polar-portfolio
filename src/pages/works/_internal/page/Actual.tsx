import type { FunctionComponent } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import { ContextFilter } from '../components/ContextFilter';
import { TypesFilter } from '../components/TypesFilter';
import {
	filterQueryToSearchParam,
	parseFilterQuery,
	type ContextFilterQuery,
	type FilterQuery,
	type TypesFilterQuery,
} from '../query';

import { filter, root } from './Actual.css';

export const Actual: FunctionComponent = () => {
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

	return (
		<div className={root}>
			<div className={filter}>
				<TypesFilter currentTypes={query.types} onTypesUpdate={handleTypesQueryUpdate} />
				<ContextFilter currentContext={query.context} onContextUpdate={handleContextQueryUpdate} />
			</div>
			<p>TODO: Work list</p>
		</div>
	);
};

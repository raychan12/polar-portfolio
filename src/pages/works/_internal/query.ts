import { WorkContext, WorkType } from '../../../context/work/types';

export type FilterQuery = {
	context: WorkContext | null;
	types: WorkType[];
};

export const filterQueryToSearchParam = (query: FilterQuery): URLSearchParams => {
	return new URLSearchParams({
		context: query.context ?? '',
		types: query.types.length > 0 ? query.types.join(' ') : '',
	});
};

export const parseFilterQuery = (params: URLSearchParams): FilterQuery => {
	return {
		context: parseContext(params.get('context')),
		types: parseTypes(params.get('types')),
	};
};

const parseContext = (contextQuery: string | null): WorkContext | null => {
	if (contextQuery == null) {
		return null;
	}

	if (WorkContext.includes(contextQuery as WorkContext)) {
		return contextQuery as WorkContext;
	}

	return null;
};

const parseTypes = (typesQuery: string | null): WorkType[] => {
	if (typesQuery == null) {
		return [];
	}

	const typesList = typesQuery
		.split(' ')
		.map((type) => type.trim())
		.filter((type) => WorkType.includes(type as WorkType)) as WorkType[];

	return typesList;
};

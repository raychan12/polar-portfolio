import { WorkContext, WorkType, type Work } from '../../../context/work/types';

export type ContextFilterQuery = WorkContext | null;
export type TypesFilterQuery = WorkType[];

export type FilterQuery = {
	context: ContextFilterQuery;
	types: TypesFilterQuery;
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

export const checkWorkMatch = (work: Work, query: FilterQuery) => {
	return (
		(query.context == null || query.context === work.context) &&
		(query.types.length === 0 || query.types.some((type) => work.types.includes(type)))
	);
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

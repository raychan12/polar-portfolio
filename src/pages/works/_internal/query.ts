import { workContext, workType, type WorkContext, type WorkType } from '../../../context/work/types';

export type FilterQuery = {
	context: WorkContext | 'all';
	type: WorkType[] | 'all';
};

export const filterQueryToSearchParam = (query: FilterQuery): URLSearchParams => {
	return new URLSearchParams({
		context: query.context === 'all' ? '' : query.context,
		type: query.type === 'all' || query.type.length === 0 ? '' : query.type.join('+'),
	});
};

export const parseFilterQuery = (params: URLSearchParams): FilterQuery => {
	return {
		context: parseToContext(params.get('context')) ?? 'all',
		type: parseToTypeList(params.get('type')) ?? 'all',
	};
};

const parseToTypeList = (typeQuery: string | null): WorkType[] | undefined => {
	if (typeQuery == null) {
		return undefined;
	}

	const typeList = typeQuery
		.split('+')
		.map((type) => type.trim())
		.filter((type) => workType.includes(type as WorkType)) as WorkType[];

	if (typeList.length === 0) {
		return undefined;
	}

	return typeList;
};

const parseToContext = (contextQuery: string | null): WorkContext | undefined => {
	if (contextQuery == null) {
		return undefined;
	}

	if (workContext.includes(contextQuery as WorkContext)) {
		return contextQuery as WorkContext;
	}

	return undefined;
};

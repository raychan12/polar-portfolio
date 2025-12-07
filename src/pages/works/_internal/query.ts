import { workContext, workType, type WorkContext, type WorkType } from '../../../context/work/types';

export type FilterQuery = {
	context: WorkContext | undefined;
	types: WorkType[] | undefined;
};

export const parseFilterQuery = (params: URLSearchParams): FilterQuery => {
	return {
		context: parseContext(params.get('context')),
		types: parseTypes(params.get('types')),
	};
};

const parseContext = (contextQuery: string | null): WorkContext | undefined => {
	if (contextQuery == null) {
		return undefined;
	}

	if (workContext.includes(contextQuery as WorkContext)) {
		return contextQuery as WorkContext;
	}

	return undefined;
};

const parseTypes = (typesQuery: string | null): WorkType[] | undefined => {
	if (typesQuery == null) {
		return undefined;
	}

	const typesList = typesQuery
		.split(' ')
		.map((type) => type.trim())
		.filter((type) => workType.includes(type as WorkType)) as WorkType[];

	if (typesList.length === 0) {
		return undefined;
	}

	return typesList;
};

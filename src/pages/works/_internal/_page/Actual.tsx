import type { FunctionComponent } from 'preact';

import { parseFilterQuery } from '../query';

import { actual } from './Actual.css';

type Props = {
	searchParams: URLSearchParams;
};

export const Actual: FunctionComponent<Props> = ({ searchParams }) => {
	const query = parseFilterQuery(searchParams);

	// TODO: Replace with the actual content
	return <p className={actual}>✅ Loaded with query: {JSON.stringify(query)}</p>;
};

import type { FunctionComponent } from 'preact';

import { parseFilterQuery } from '../query';

import { actual } from './Actual.css';

export const Actual: FunctionComponent = () => {
	const query = parseFilterQuery(new URLSearchParams(window.location.search));

	// TODO: Replace with the actual content
	return <p className={actual}>✅ Loaded with query: {JSON.stringify(query)}</p>;
};

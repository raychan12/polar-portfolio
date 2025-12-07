import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Actual } from './Actual';
import { Skeleton } from './Skeleton';

export const Content: FunctionComponent = () => {
	const [searchParams, setSearchParams] = useState<URLSearchParams | undefined>(undefined);

	useEffect(() => {
		setSearchParams(new URLSearchParams(window.location.search));
	}, []);

	if (searchParams === undefined) {
		return <Skeleton />;
	}

	return <Actual searchParams={searchParams} />;
};

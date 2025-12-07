import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Actual } from './Actual';
import { Skeleton } from './Skeleton';

export const Content: FunctionComponent = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) {
		return <Skeleton />;
	}

	return <Actual />;
};

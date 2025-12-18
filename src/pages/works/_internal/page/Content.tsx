import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import type { Work } from '../../../../context/work/types';

import { Actual } from './Actual';
import { Skeleton } from './Skeleton';

type Props = {
	works: Work[];
};

export const Content: FunctionComponent<Props> = ({ works }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) {
		return <Skeleton works={works} />;
	}

	return <Actual works={works} />;
};

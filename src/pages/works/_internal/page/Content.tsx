import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import type { WorkCardProps } from '../../../../features/work/components/WorkCard';

import { Actual } from './Actual';
import { Skeleton } from './Skeleton';

type Props = {
	workCardProps: WorkCardProps[];
};

export const Content: FunctionComponent<Props> = ({ workCardProps }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) {
		return <Skeleton />;
	}

	return <Actual workCardProps={workCardProps} />;
};

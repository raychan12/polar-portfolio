import type { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import type { WorkCard } from '../../../../context/work/definitions';

import { ActualWorkCardList } from './_internal/ActualWorkCardList/ActualWorkCardList';
import { SkeletonWorkCardList } from './_internal/SkeletonWorkCardList/SkeletonWorkCardList';

type Props = {
	workCards: WorkCard[];
};

export const WorkCardList: FunctionComponent<Props> = ({ workCards }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) {
		return <SkeletonWorkCardList workCards={workCards} />;
	}

	return <ActualWorkCardList workCards={workCards} />;
};

import type { FunctionComponent } from 'preact';

import type { Work } from '../../../../context/work/types';
import { WorkCard } from '../../../../features/work/components/WorkCard';

import {
	skeleton,
	filter,
	filterButtonSkeleton,
	workList,
	workCardSkeleton,
	workListForCrawler,
	spacing,
} from './Skeleton.css';

type Props = {
	works: Work[];
};

export const Skeleton: FunctionComponent<Props> = ({ works }) => {
	return (
		<div className={skeleton} aria-hidden>
			<div className={filter}>
				<div className={filterButtonSkeleton} />
				<div className={filterButtonSkeleton} />
			</div>
			<div className={workList}>
				{Array.from({ length: 10 }).map(() => (
					<div className={workCardSkeleton} />
				))}
			</div>
			<div className={workListForCrawler}>
				<div className={spacing} />
				{works.map((work) => (
					<WorkCard work={work} />
				))}
			</div>
		</div>
	);
};

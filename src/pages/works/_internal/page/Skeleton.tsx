import type { FunctionComponent } from 'preact';

import { WorkCard, type WorkCardProps } from '../../../../features/work/components/WorkCard';

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
	workCardProps: WorkCardProps[];
};

export const Skeleton: FunctionComponent<Props> = ({ workCardProps }) => {
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
				{workCardProps.map((work) => (
					<WorkCard {...work} />
				))}
			</div>
		</div>
	);
};

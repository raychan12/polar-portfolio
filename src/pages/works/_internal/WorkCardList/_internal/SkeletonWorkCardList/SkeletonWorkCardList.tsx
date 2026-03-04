import type { FunctionComponent } from 'preact';

import { WorkCard } from '../../../../../../context/work/components/WorkCard/WorkCard';
import type { WorkCard as WorkCardType } from '../../../../../../context/work/definitions';

import {
	skeleton,
	filter,
	filterButtonSkeleton,
	workList,
	workCardSkeleton,
	workListForCrawler,
	spacing,
} from './styles.css';

type Props = {
	workCards: WorkCardType[];
};

export const SkeletonWorkCardList: FunctionComponent<Props> = ({ workCards }) => {
	return (
		<div className={skeleton} aria-hidden>
			<div className={filter}>
				<div className={filterButtonSkeleton} />
				<div className={filterButtonSkeleton} />
			</div>
			<ul className={workList}>
				{Array.from({ length: 10 }).map((_, i) => (
					<li key={i} className={workCardSkeleton} />
				))}
			</ul>
			<ul className={workListForCrawler}>
				<li className={spacing} />
				{workCards.map((work) => (
					<li key={work.work.id}>
						<WorkCard {...work} />
					</li>
				))}
			</ul>
		</div>
	);
};

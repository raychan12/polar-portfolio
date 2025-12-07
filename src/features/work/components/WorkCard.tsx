import { format } from 'date-fns';
import type { FunctionComponent } from 'preact';

import type { Work } from '../../../context/work/types';

import {
	root,
	visualImage,
	visualImageBackground,
	visualImageContainer,
	logoLeft,
	logoInline,
	workInfo,
	workInfoSection,
	descriptionText,
	tagsList,
	tagsLink,
	dateText,
	assigningText,
} from './WorkCard.css';

export type WorkCardProps = {
	work: Work;
};

export const WorkCard: FunctionComponent<WorkCardProps> = ({ work }) => {
	const { visualImageUrl, logoUrl, description, logoAlt, date, tags, assigning, logoPosition } = work;

	return (
		<article className={root}>
			<div className={visualImageContainer}>
				{/* TODO: alt 確認する */}
				<img className={visualImage} src={visualImageUrl} alt="" width={227} height={320} />
				<img className={visualImageBackground} src={visualImageUrl} alt="" width={23} height={32} />
			</div>

			{logoPosition === 'left' && (
				<img
					className={logoLeft}
					src={logoUrl}
					alt={logoAlt}
					// widths / inferSize 相当の最適化は Astro 側ではなくなります
				/>
			)}

			<div className={workInfo}>
				<div className={workInfoSection}>
					<h2 className={descriptionText}>{description}</h2>
					{logoPosition === 'inline' && (
						<img
							className={logoInline}
							src={logoUrl}
							alt={logoAlt}
							// layout="constrained" / inferSize 相当もここでは通常の <img> になります
						/>
					)}
				</div>

				<div className={workInfoSection}>
					<nav className={tagsList}>
						{/* TODO: リンク先があってるかを確認する */}
						{tags.map((tag) => (
							<a key={tag} className={tagsLink} href={`/works?tag=${encodeURIComponent(tag)}`}>
								#{tag}
							</a>
						))}
					</nav>

					<span className={dateText}>
						{date.instant != null && (
							<time dateTime={format(date.instant, 'yyyy-MM-dd')}>{format(date.instant, 'yyyy.MM.dd')}</time>
						)}

						{date.period != null && (
							<>
								<time dateTime={format(date.period.from, 'yyyy-MM-dd')}>{format(date.period.from, 'yyyy.MM.dd')}</time>
								{' - '}
								<time dateTime={format(date.period.to, 'yyyy-MM-dd')}>
									{format(
										date.period.to,
										date.period.from.getFullYear() === date.period.to.getFullYear() ? 'MM.dd' : 'yyyy.MM.dd',
									)}
								</time>
							</>
						)}
					</span>

					<p className={assigningText}>{assigning}</p>
				</div>
			</div>
		</article>
	);
};

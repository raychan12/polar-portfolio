import { format } from 'date-fns';
import type { FunctionComponent } from 'preact';

import { workTypeColorsCSS } from '../../../context/work/styles';
import { getTopThumbnailUrl, type Work } from '../../../context/work/types';

import {
	root,
	visualImage,
	visualImageBackground,
	visualImageContainer,
	logoLeft,
	logoInline,
	descriptionText,
	tagsList,
	tagsLink,
	dateText,
	assigningText,
	titleSection,
	metaSection,
	grid,
} from './WorkCard.css';

type Props = {
	work: Work;
};

export const WorkCard: FunctionComponent<Props> = ({ work }) => {
	const { id, logoUrl, description, logoAlt, date, context, types: type, assigning, logoPosition } = work;

	const visualImageUrl = getTopThumbnailUrl(work);

	return (
		<article className={root}>
			<a href={`/works/${id}`} className={grid}>
				<div className={visualImageContainer}>
					{/* TODO: alt 確認する */}
					<img className={visualImage} src={visualImageUrl} alt="" width={227} height={320} />
					<img className={visualImageBackground} src={visualImageUrl} alt="" width={23} height={32} />
				</div>

				{logoPosition === 'left' && <img className={logoLeft} src={logoUrl} alt={logoAlt} />}

				<div className={titleSection}>
					<h2 className={descriptionText}>{description}</h2>
					{logoPosition === 'inline' && <img className={logoInline} src={logoUrl} alt={logoAlt} />}
				</div>

				<div className={metaSection}>
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
			</a>

			<nav className={tagsList}>
				{type.map((tag) => (
					<a
						key={tag}
						className={tagsLink}
						href={`/works?type=${encodeURIComponent(tag)}`}
						style={{ color: workTypeColorsCSS[tag] }}>
						#{tag}
					</a>
				))}
				<a className={tagsLink} href={`/works?context=${encodeURIComponent(context)}`}>
					#{context}
				</a>
			</nav>
		</article>
	);
};

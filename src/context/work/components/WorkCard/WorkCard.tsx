import { assignInlineVars } from '@vanilla-extract/dynamic';
import { format } from 'date-fns';
import type { FunctionComponent } from 'preact';
import { useMemo } from 'preact/hooks';

import type { WorkCard as WorkCardType } from '../../definitions';
import { workTypeColorMap } from '../../styles.css';

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
	smLogoSection,
	smLogo,
	tagsLinkColor,
} from './styles.css';

export type Props = WorkCardType;

export const WorkCard: FunctionComponent<Props> = ({ work, visualImageAttrs, logoImageAttrs }) => {
	const { id, description, logoAlt, date, types: type, assigning, logoPosition } = work;
	const instantDateHyphen = useMemo(() => {
		return date.instant != null ? format(date.instant, 'yyyy-MM-dd') : null;
	}, [date.instant]);
	const instantDateDot = useMemo(() => {
		return date.instant != null ? format(date.instant, 'yyyy.MM.dd') : null;
	}, [date.instant]);
	const periodDateFromHyphen = useMemo(() => {
		return date.period != null ? format(date.period.from, 'yyyy-MM-dd') : null;
	}, [date.period]);
	const periodDateFromDot = useMemo(() => {
		return date.period != null ? format(date.period.from, 'yyyy.MM.dd') : null;
	}, [date.period]);
	const periodDateToHyphen = useMemo(() => {
		return date.period != null ? format(date.period.to, 'yyyy-MM-dd') : null;
	}, [date.period]);
	const periodDateToDot = useMemo(() => {
		return date.period != null ?
				format(date.period.to, date.period.from.getFullYear() === date.period.to.getFullYear() ? 'MM.dd' : 'yyyy.MM.dd')
			:	null;
	}, [date.period]);

	return (
		<article className={root}>
			<a href={`/works/${id}`} className={grid}>
				<div className={visualImageContainer}>
					{/* TODO: alt 確認する */}
					<img className={visualImage} {...visualImageAttrs} alt="" />
					<img className={visualImageBackground} {...visualImageAttrs} alt="" />
				</div>

				{logoPosition === 'left' && <img className={logoLeft} {...logoImageAttrs} alt={logoAlt} />}

				<div className={smLogoSection}>
					<img className={smLogo} {...logoImageAttrs} alt={logoAlt} />
				</div>

				<div className={titleSection}>
					<h2 className={descriptionText}>{description}</h2>
					{logoPosition === 'inline' && <img className={logoInline} {...logoImageAttrs} alt={logoAlt} />}
				</div>

				<div className={metaSection}>
					<span className={dateText}>
						{instantDateHyphen != null && instantDateDot != null && (
							<time dateTime={instantDateHyphen}>{instantDateDot}</time>
						)}

						{periodDateFromHyphen != null &&
							periodDateFromDot != null &&
							periodDateToHyphen != null &&
							periodDateToDot != null && (
								<>
									<time dateTime={periodDateFromHyphen}>{periodDateFromDot}</time>
									{' - '}
									<time dateTime={periodDateToHyphen}>{periodDateToDot}</time>
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
						href={`/works?types=${encodeURIComponent(tag)}`}
						style={assignInlineVars({
							[tagsLinkColor]: workTypeColorMap[tag],
						})}>
						#{tag}
					</a>
				))}
			</nav>
		</article>
	);
};

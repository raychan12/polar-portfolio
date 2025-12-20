import type { UnresolvedImageTransform } from 'astro';
import { getImage } from 'astro:assets';
import { format } from 'date-fns';
import type { FunctionComponent } from 'preact';

import { workTypeColorsCSS } from '../../../context/work/styles';
import type { Work } from '../../../context/work/types';
import { getImageToImgAttrs } from '../../../lib/image';
import type { ImgTagAttributes } from '../../../lib/image';

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

export type WorkCardProps = {
	work: Work;
	visualImageAttrs: ImgTagAttributes;
	logoImageAttrs: ImgTagAttributes;
};

export const WorkCard: FunctionComponent<WorkCardProps> = ({ work, visualImageAttrs, logoImageAttrs }) => {
	const { id, description, logoAlt, date, context, types: type, assigning, logoPosition } = work;

	return (
		<article className={root}>
			<a href={`/works/${id}`} className={grid}>
				<div className={visualImageContainer}>
					{/* TODO: alt 確認する */}
					<img className={visualImage} {...visualImageAttrs} alt="" />
					<img className={visualImageBackground} {...visualImageAttrs} alt="" />
				</div>

				{logoPosition === 'left' && <img className={logoLeft} {...logoImageAttrs} alt={logoAlt} />}

				<div className={titleSection}>
					<h2 className={descriptionText}>{description}</h2>
					{logoPosition === 'inline' && <img className={logoInline} {...logoImageAttrs} alt={logoAlt} />}
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
						href={`/works?types=${encodeURIComponent(tag)}`}
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

export const processImageForWorkCard = async (work: Work): Promise<WorkCardProps> => {
	const [visualImage, logoImage] = await Promise.all([
		getImage({ src: work.visualImageUrl[0], width: 227, height: 320, densities: [1, 2] }),
		getImage({
			src: work.logoUrl,
			...inferLogoRenderDimension(work),
		}),
	]);

	return {
		work,
		visualImageAttrs: getImageToImgAttrs(visualImage),
		logoImageAttrs: getImageToImgAttrs(logoImage),
	};
};

const inferLogoRenderDimension = (work: Work): Partial<UnresolvedImageTransform> => {
	if (work.logoPosition === 'left') {
		return {
			width: 160,
			densities: [1, 2],
			inferSize: true,
		};
	}

	// inline の場合は、どういうサイズで表示されるのかがよくわからないので、
	// ある程度の横幅の画像を準備する。960px (WorkCard の幅の) は絶対に超えない
	return {
		widths: [160, 320, 480, 640, 960],
		inferSize: true,
	};
};

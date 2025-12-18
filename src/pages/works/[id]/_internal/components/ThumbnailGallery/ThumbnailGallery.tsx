import type { FunctionComponent, MouseEventHandler } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import type { Work } from '../../../../../../context/work/types';
import type { ImgTagAttributes } from '../../../../../../lib/image';

import {
	currentImage,
	mainImage,
	root,
	selectorListElement,
	selectorImage,
	selectorList,
} from './ThumbnailGallery.css';

export type ThumbnailGalleryProps = {
	work: Work;
	visualImageAttrs: VisualImageAttrs[];
};

export type VisualImageAttrs = {
	mainImage: ImgTagAttributes;
	selectorImage: ImgTagAttributes;
};

export const ThumbnailGallery: FunctionComponent<ThumbnailGalleryProps> = ({ work, visualImageAttrs }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
		const maybeIndex = e.currentTarget.dataset.index;
		if (maybeIndex == null) {
			return;
		}

		const index = parseInt(maybeIndex, 10);
		if (isNaN(index)) {
			return;
		}

		setCurrentIndex(index);

		e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
	}, []);

	return (
		<div className={root}>
			<img
				className={mainImage}
				{...visualImageAttrs[currentIndex].mainImage}
				alt={`「${work.logoAlt}」の${currentIndex + 1}枚目の画像`}
			/>
			<ul className={selectorList}>
				{visualImageAttrs.map((image, i) => {
					const current = i === currentIndex;

					return (
						<li className={selectorListElement} key={image.selectorImage.src}>
							<button onClick={handleClick} data-index={i} aria-selected={current}>
								<img
									className={`${selectorImage} ${current ? currentImage : ''}`}
									{...image.selectorImage}
									alt={`${i + 1}枚目`}
								/>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

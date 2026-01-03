import { clsx } from 'clsx';
import type { FunctionComponent, MouseEventHandler } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import type { ThumbnailGallery as ThumbnailGalleryType } from '../definitions';

import { currentImage, mainImage, root, selectorListElement, selectorImage, selectorList } from './styles.css';

type Props = ThumbnailGalleryType;

export const ThumbnailGallery: FunctionComponent<Props> = ({ work, visualImageAttrs }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentImageAttr = visualImageAttrs.at(currentIndex);
	if (currentImageAttr == null) {
		throw new Error(
			`ThumbnailGallery for work '${work.id}' has ${visualImageAttrs.length} images provided but its index is ${currentIndex}`,
		);
	}

	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
		const maybeIndex = e.currentTarget.dataset.index;
		if (maybeIndex == null) {
			return;
		}

		const index = parseInt(maybeIndex, 10);
		if (Number.isNaN(index)) {
			return;
		}

		setCurrentIndex(index);

		e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
	}, []);

	return (
		<div className={root}>
			<img
				{...currentImageAttr.mainImage}
				className={mainImage}
				alt={`「${work.logoAlt}」の${currentIndex + 1}枚目の画像`}
			/>
			<ul className={selectorList}>
				{visualImageAttrs.map((image, i) => {
					const current = i === currentIndex;

					return (
						<li className={selectorListElement} key={image.selectorImage.src}>
							<button onClick={handleClick} data-index={i} aria-selected={current}>
								<img
									{...image.selectorImage}
									className={clsx([selectorImage, current && currentImage])}
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

import type { FunctionComponent, MouseEventHandler } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import type { Work } from '../../../../../context/work/types';

import {
	currentImage,
	mainImage,
	root,
	selectorListElement,
	selectorImage,
	selectorList,
} from './ThumbnailGallery.css';

type Props = {
	work: Work;
};

export const ThumbnailGallery: FunctionComponent<Props> = ({ work }) => {
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
				{...work.visualImage[currentIndex]}
				alt={`「${work.logoAlt}」の${currentIndex + 1}枚目の画像`}
				width={320}
				height={320}
				sizes="320px, 640px, 960px"
			/>
			<ul className={selectorList}>
				{work.visualImage.map((img, i) => {
					const current = i === currentIndex;

					return (
						<li className={selectorListElement} key={img.src}>
							<button onClick={handleClick} data-index={i} aria-selected={current}>
								<img
									className={`${selectorImage} ${current ? currentImage : ''}`}
									{...img}
									alt={`${i + 1}枚目`}
									width={80}
									height={80}
									sizes="80px, 160px, 240px"
								/>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

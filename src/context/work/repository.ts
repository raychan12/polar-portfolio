import { fileToUrl } from '@chlorinec-pkgs/notion-astro-loader';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import type { Work } from './definitions';
import { sortWorksInDisplayOrder } from './services';

const convertCollectionToWork = ({
	propsWithoutImages,
	logoUrl,
	visualImageUrl,
}: {
	propsWithoutImages: Omit<CollectionEntry<'works'>['data']['properties'], 'ロゴ画像' | 'サムネイル画像'>;
	logoUrl: string;
	visualImageUrl: string[];
}): Work => {
	const id = propsWithoutImages['Slug'];

	return {
		id,
		displayOrder: propsWithoutImages['掲載順'],
		visualImageUrl,
		logoUrl,
		description: propsWithoutImages['概要'],
		logoAlt: propsWithoutImages['ロゴタイトル'],
		date:
			propsWithoutImages['日付'].end != null ?
				{ period: { from: propsWithoutImages['日付'].start, to: propsWithoutImages['日付'].end } }
			:	{ instant: propsWithoutImages['日付'].start },
		types: propsWithoutImages['作品タイプ'],
		context: propsWithoutImages['制作形態'],
		assigning: propsWithoutImages['担当部分'],
		logoPosition: propsWithoutImages['ロゴ配置'],
		links: propsWithoutImages['リンク'],
		pickUp: propsWithoutImages['トップページで表示'],
	};
};

export const getManyWork = async () => {
	const worksCollectionEntries = await getCollection('works');
	const works = sortWorksInDisplayOrder(
		worksCollectionEntries.map((work) => {
			const {
				['ロゴ画像']: logoImages,
				['サムネイル画像']: thumbnailImages,
				...propsWithoutImages
			} = work.data.properties;
			const logoImageFile = logoImages.files.at(0);
			if (logoImageFile == null) {
				throw new Error(`Expected to have at least one logo image for work '${propsWithoutImages.Slug}'`);
			}
			const logoUrl = fileToUrl(logoImageFile);
			const visualImageUrl = thumbnailImages.files.map((file) => fileToUrl(file));

			return convertCollectionToWork({ propsWithoutImages, logoUrl, visualImageUrl });
		}),
	);

	return works;
};

import { fileToUrl } from '@chlorinec-pkgs/notion-astro-loader';
import type { CollectionEntry } from 'astro:content';

import type { Work } from './types';

export const collectionToWork = (entry: CollectionEntry<'works'>): Work => {
	const props = entry.data.properties;

	const id = props['Slug'];

	const logoImageFile = props['ロゴ画像'].files.at(0);
	if (logoImageFile == null) {
		throw new Error(`Expected to have at least one logo image for work '${id}'`);
	}

	return {
		id,
		visualImageUrl: props['サムネイル画像'].files.map((file) => fileToUrl(file)),
		logoUrl: fileToUrl(logoImageFile),
		description: props['概要'],
		logoAlt: props['ロゴタイトル'],
		date:
			props['日付'].end != null ?
				{ period: { from: props['日付'].start, to: props['日付'].end } }
			:	{ instant: props['日付'].start },
		types: props['作品タイプ'],
		context: props['制作形態'],
		assigning: props['担当部分'],
		logoPosition: props['ロゴ配置'],
		links: props['リンク'],
		pickUp: props['トップページで表示'],
	};
};

export const getTopThumbnailUrl = (work: Work): string => {
	const topThumbnail = work.visualImageUrl.at(0);
	if (topThumbnail == null) {
		throw new Error(`Expected to have at least one thumnbail for work '${work.id}'`);
	}

	return topThumbnail;
};

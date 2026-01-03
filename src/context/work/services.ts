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
		displayOrder: props['掲載順'],
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

// getCollection() の返り値の順番は非決定的なので、自前でソートを持つ必要がある
// TODO: @re-taro null の場合の扱いを確認後修正する
export const sortWorksInDisplayOrder = (works: Work[]): Work[] => {
	return works.toSorted((left, right) => {
		const leftOrder = left.displayOrder;
		const rightOrder = right.displayOrder;

		// 両方 null
		if (leftOrder == null && rightOrder == null) {
			// 揺れ防止のため id で決定的に
			return right.id.localeCompare(left.id);
		}

		// null は一番うしろ
		if (leftOrder == null) {
			return 1;
		}
		if (rightOrder == null) {
			return -1;
		}

		// 両方 number
		if (leftOrder === rightOrder) {
			return right.id.localeCompare(left.id);
		}

		return rightOrder - leftOrder;
	});
};

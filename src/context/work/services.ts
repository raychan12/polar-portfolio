import type { GetImageResult, UnresolvedImageTransform } from 'astro';
import type { CollectionEntry } from 'astro:content';

import { getImageToImgAttrs } from '../../foundation/utils/imageUtils';

import {
	WorkContext,
	WorkType,
	type Work,
	type WorkCard,
	type FilterQuery,
	type ThumbnailGallery,
	type VisualImageAttrs,
} from './definitions';

export const filterQueryToSearchParam = (query: FilterQuery): URLSearchParams => {
	return new URLSearchParams({
		context: query.context ?? '',
		types: query.types.length > 0 ? query.types.join(' ') : '',
	});
};

export const parseFilterQuery = (params: URLSearchParams): FilterQuery => {
	return {
		context: parseContext(params.get('context')),
		types: parseTypes(params.get('types')),
	};
};

export const checkWorkMatch = (work: Work, query: FilterQuery) => {
	return (
		(query.context == null || query.context === work.context) &&
		(query.types.length === 0 || query.types.some((type) => work.types.includes(type)))
	);
};

const parseContext = (contextQuery: string | null): WorkContext | null => {
	if (contextQuery == null) {
		return null;
	}

	switch (contextQuery) {
		case WorkContext.COLLABORATION:
		case WorkContext.COMMISSION:
		case WorkContext.CORPORATE:
		case WorkContext.PERSONAL:
			return contextQuery as WorkContext;
		default:
			return null;
	}
};

const parseTypes = (typesQuery: string | null): WorkType[] => {
	if (typesQuery == null) {
		return [];
	}

	const typesList = typesQuery
		.split(' ')
		.map((type) => type.trim())
		.filter((type) => {
			switch (type) {
				case WorkType.UIUX:
				case WorkType.GRAPHIC:
				case WorkType.SOSAKU:
					return true;
				default:
					return false;
			}
		}) as WorkType[];

	return typesList;
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

export const processImageForWorkCard = async ({
	work,
	processor,
}: {
	work: Work;
	processor: (opts: UnresolvedImageTransform) => Promise<GetImageResult>;
}): Promise<WorkCard> => {
	const [visualImage, logoImage] = await Promise.all([
		processor({ src: getTopThumbnailUrl(work), width: 227, height: 320, densities: [1, 2] }),
		processor({
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

// TODO: @re-taro repository 層を作成し、そこでこの DTO 変換は吸収する
export const convertCollectionToWork = ({
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

export const processImageForThumbnailGallery = async ({
	work,
	processor,
}: {
	work: Work;
	processor: (opts: UnresolvedImageTransform) => Promise<GetImageResult>;
}): Promise<ThumbnailGallery> => {
	const visualImageAttrs = await Promise.all(
		work.visualImageUrl.map(
			async (img) =>
				({
					mainImage: getImageToImgAttrs(
						await processor({
							src: img,
							width: 320,
							height: 320,
							densities: [1, 2],
						}),
					),
					selectorImage: getImageToImgAttrs(
						await processor({
							src: img,
							width: 80,
							height: 80,
							densities: [1, 2],
						}),
					),
				}) satisfies VisualImageAttrs,
		),
	);

	return { work, visualImageAttrs };
};

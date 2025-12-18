import type { CollectionEntry } from 'astro:content';

import { processNotionImage } from '../../infra/notion';

import type { Work } from './types';

export const collectionToWork = async (entry: CollectionEntry<'works'>): Promise<Work> => {
	const { slug, date, thumbnail, logo, logoAlt, description, type, engagement, assigning, logoPosition, links } =
		entry.data.properties;

	const visualImage = await Promise.all(
		thumbnail.files.map((file) => processNotionImage(file, { widths: [32, 160, 320, 480, 640, 1280] })),
	);

	return {
		id: slug,
		visualImage,
		logoImage: await processNotionImage(logo.files[0], { widths: [32, 160, 320, 640] }),
		description,
		logoAlt,
		date: date.end != null ? { period: { from: date.start, to: date.end } } : { instant: date.start },
		types: type,
		context: engagement,
		assigning,
		logoPosition,
		links,
	};
};

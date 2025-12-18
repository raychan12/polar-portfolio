import { fileToUrl } from '@chlorinec-pkgs/notion-astro-loader';
import type { CollectionEntry } from 'astro:content';

import type { Work } from './types';

export const collectionToWork = (entry: CollectionEntry<'works'>): Work => {
	const {
		slug,
		date,
		thumbnail,
		logo,
		logoAlt,
		description,
		type,
		engagement,
		assigning,
		logoPosition,
		links,
		pickUp,
	} = entry.data.properties;

	return {
		id: slug,
		visualImageUrl: thumbnail.files.map((file) => fileToUrl(file)),
		logoUrl: fileToUrl(logo.files[0]),
		description,
		logoAlt,
		date: date.end != null ? { period: { from: date.start, to: date.end } } : { instant: date.start },
		types: type,
		context: engagement,
		assigning,
		logoPosition,
		links,
		pickUp,
	};
};

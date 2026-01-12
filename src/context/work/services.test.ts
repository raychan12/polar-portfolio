import type { UnresolvedImageTransform } from 'astro';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../foundation/utils/imageUtils', () => {
	return {
		getImageToImgAttrs: vi.fn((img: unknown) => ({ __mocked: 'imgAttrs', img })),
	};
});

import { createWork } from './factories';
import {
	filterQueryToSearchParam,
	parseFilterQuery,
	checkWorkMatch,
	processImageForWorkCard,
	convertCollectionToWork,
	getTopThumbnailUrl,
	sortWorksInDisplayOrder,
	processImageForThumbnailGallery,
} from './services';

describe('work services', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('filterQueryToSearchParam', () => {
		it('filterQueryToSearchParam: context が null/undefined のときは空文字、types が空のときも空文字', () => {
			const params = filterQueryToSearchParam({ context: null, types: [] });
			expect(params.get('context')).toBe('');
			expect(params.get('types')).toBe('');
		});

		it('filterQueryToSearchParam: types は半角スペースで join される', () => {
			const params = filterQueryToSearchParam({
				context: 'commission',
				types: ['graphic', 'sosaku'],
			});
			expect(params.get('context')).toBe('commission');
			expect(params.get('types')).toBe('graphic sosaku');
		});
	});

	describe('parseFilterQuery', () => {
		it('parseFilterQuery: context が不正値なら null', () => {
			const params = new URLSearchParams({ context: 'invalid', types: '' });
			const q = parseFilterQuery(params);
			expect(q.context).toBeNull();
			expect(q.types).toEqual([]);
		});

		it('parseFilterQuery: context が正規値ならそのまま採用される', () => {
			const params = new URLSearchParams({ context: 'personal', types: '' });
			const q = parseFilterQuery(params);
			expect(q.context).toBe('personal');
		});

		it('parseFilterQuery: types は split→trim され、不正 type は捨てられる', () => {
			const params = new URLSearchParams({
				context: '',
				types: '  graphic   invalid  sosaku  uiux   ',
			});
			const q = parseFilterQuery(params);
			expect(q.context).toBeNull(); // "" は parseContext の default → null
			expect(q.types).toEqual(['graphic', 'sosaku', 'uiux']);
		});

		it('parseFilterQuery: types が null のときは []', () => {
			const params = new URLSearchParams();
			// types/context 共に null 扱い
			const q = parseFilterQuery(params);
			expect(q.context).toBeNull();
			expect(q.types).toEqual([]);
		});
	});

	describe('checkWorkMatch', () => {
		it('query.context が null なら context は無条件にマッチ扱い', () => {
			const work = createWork({ context: 'commission' });
			const ok = checkWorkMatch(work, { context: null, types: [] });
			expect(ok).toBe(true);
		});

		it('query.context が一致しないなら false', () => {
			const work = createWork({ context: 'commission' });
			const ok = checkWorkMatch(work, { context: 'personal', types: [] });
			expect(ok).toBe(false);
		});

		it('query.types が空なら type は無条件にマッチ扱い', () => {
			const work = createWork({ types: ['graphic'] });
			const ok = checkWorkMatch(work, { context: 'commission', types: [] });
			expect(ok).toBe(true);
		});

		it('query.types があり、work.types と 1つしか重なりがなければ false', () => {
			const work = createWork({ types: ['graphic', 'sosaku'] });
			const ok = checkWorkMatch(work, { context: 'commission', types: ['uiux', 'graphic'] });
			expect(ok).toBe(false);
		});

		it('query.types があり、work.types と 全て重なれば true', () => {
			const work = createWork({ types: ['graphic', 'sosaku'] });
			const ok = checkWorkMatch(work, { context: 'commission', types: ['graphic', 'sosaku'] });
			expect(ok).toBe(true);
		});

		it('query.types があり、work.types と重なりがなければ false', () => {
			const work = createWork({ types: ['graphic'] });
			const ok = checkWorkMatch(work, { context: 'commission', types: ['uiux'] });
			expect(ok).toBe(false);
		});
	});

	describe('getTopThumbnailUrl', () => {
		it('先頭のサムネイル URL を返す', () => {
			const work = createWork({
				visualImageUrl: ['a', 'b', 'c'],
			});
			expect(getTopThumbnailUrl(work)).toBe('a');
		});

		it('visualImageUrl が空なら例外', () => {
			const work = createWork({ id: 'x', visualImageUrl: [] });
			expect(() => getTopThumbnailUrl(work)).toThrowError("Expected to have at least one thumnbail for work 'x'");
		});
	});

	describe('sortWorksInDisplayOrder', () => {
		it('displayOrder は降順（大きいほど前）', () => {
			const w1 = createWork({ id: 'a', displayOrder: 1 });
			const w2 = createWork({ id: 'b', displayOrder: 10 });
			const w3 = createWork({ id: 'c', displayOrder: 3 });

			const sorted = sortWorksInDisplayOrder([w1, w2, w3]);
			expect(sorted.map((w) => w.id)).toEqual(['b', 'c', 'a']);
		});

		it('displayOrder が null は最後', () => {
			const w1 = createWork({ id: 'a', displayOrder: null });
			const w2 = createWork({ id: 'b', displayOrder: 1 });
			const w3 = createWork({ id: 'c', displayOrder: null });

			const sorted = sortWorksInDisplayOrder([w1, w2, w3]);
			expect(sorted.map((w) => w.id)).toEqual(['b', 'c', 'a']); // null 同士は id の降順
		});

		it('displayOrder が同値なら id の降順で決定的に', () => {
			const w1 = createWork({ id: 'aaa', displayOrder: 5 });
			const w2 = createWork({ id: 'zzz', displayOrder: 5 });
			const w3 = createWork({ id: 'mmm', displayOrder: 5 });

			const sorted = sortWorksInDisplayOrder([w1, w2, w3]);
			expect(sorted.map((w) => w.id)).toEqual(['zzz', 'mmm', 'aaa']);
		});
	});

	describe('convertCollectionToWork', () => {
		it('end が無い場合は instant になる', () => {
			const propsWithoutImages = {
				Slug: 'slug-1',
				掲載順: 7,
				概要: 'desc',
				ロゴタイトル: 'alt',
				日付: { start: new Date('2025-01-01'), end: null },
				作品タイプ: ['graphic'],
				制作形態: 'commission',
				担当部分: 'assign',
				ロゴ配置: 'left',
				リンク: ['https://example.com'],
				トップページで表示: true,
			};

			const w = convertCollectionToWork({
				propsWithoutImages: propsWithoutImages as never,
				logoUrl: 'logo.png',
				visualImageUrl: ['v1.png', 'v2.png'],
			});

			expect(w).toMatchObject({
				id: 'slug-1',
				displayOrder: 7,
				visualImageUrl: ['v1.png', 'v2.png'],
				logoUrl: 'logo.png',
				description: 'desc',
				logoAlt: 'alt',
				types: ['graphic'],
				context: 'commission',
				assigning: 'assign',
				logoPosition: 'left',
				links: ['https://example.com'],
				pickUp: true,
			});
			expect(w.date).toEqual({ instant: new Date('2025-01-01') });
		});

		it('end がある場合は period になる', () => {
			const propsWithoutImages = {
				Slug: 'slug-2',
				掲載順: null,
				概要: 'desc2',
				ロゴタイトル: 'alt2',
				日付: { start: new Date('2025-01-01'), end: new Date('2025-02-01') },
				作品タイプ: ['uiux'],
				制作形態: 'personal',
				担当部分: 'assign2',
				ロゴ配置: 'inline',
				リンク: [],
				トップページで表示: false,
			};

			const w = convertCollectionToWork({
				propsWithoutImages: propsWithoutImages as never,
				logoUrl: 'logo2.png',
				visualImageUrl: ['v.png'],
			});

			expect(w.date).toEqual({
				period: { from: new Date('2025-01-01'), to: new Date('2025-02-01') },
			});
		});
	});

	describe('processImageForWorkCard', () => {
		it("logoPosition='left' の場合、processor が visual と logo で正しいオプションで呼ばれる", async () => {
			const work = createWork({
				id: 'w',
				logoPosition: 'left',
				logoUrl: 'logo.png',
				visualImageUrl: ['thumb.png'],
			});

			const processor = vi.fn(async (opts: UnresolvedImageTransform) => ({ __img: opts.src, opts }));

			const result = await processImageForWorkCard({ work, processor: processor as never });

			expect(processor).toHaveBeenCalledTimes(2);

			const calls = processor.mock.calls.map((c) => c[0]);
			expect(calls).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						src: 'thumb.png',
						width: 227,
						height: 320,
						densities: [1, 2],
					}),
					expect.objectContaining({
						src: 'logo.png',
						width: 160,
						densities: [1, 2],
						inferSize: true,
					}),
				]),
			);

			expect(result.work).toBe(work);
			expect(result.visualImageAttrs).toMatchObject({ __mocked: 'imgAttrs' });
			expect(result.logoImageAttrs).toMatchObject({ __mocked: 'imgAttrs' });
		});

		it("logoPosition='inline' の場合、logo は widths 指定になる", async () => {
			const work = createWork({
				id: 'w-inline',
				logoPosition: 'inline',
				logoUrl: 'logo-inline.png',
				visualImageUrl: ['thumb-inline.png'],
			});

			const processor = vi.fn(async (opts: UnresolvedImageTransform) => ({ __img: opts.src, opts }));

			await processImageForWorkCard({ work, processor: processor as never });

			const calls = processor.mock.calls.map((c) => c[0]);
			expect(calls).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						src: 'thumb-inline.png',
						width: 227,
						height: 320,
						densities: [1, 2],
					}),
					expect.objectContaining({
						src: 'logo-inline.png',
						widths: [160, 320, 480, 640, 960],
						inferSize: true,
					}),
				]),
			);
		});
	});

	describe('processImageForThumbnailGallery', () => {
		it('各 visualImageUrl につき main(320) と selector(80) を生成して返す', async () => {
			const work = createWork({
				visualImageUrl: ['a.png', 'b.png', 'c.png'],
			});

			const processor = vi.fn(async (opts: UnresolvedImageTransform) => ({ __img: opts.src, opts }));

			const result = await processImageForThumbnailGallery({ work, processor: processor as never });

			expect(result.work).toBe(work);
			expect(result.visualImageAttrs).toHaveLength(3);

			expect(processor).toHaveBeenCalledTimes(6);

			const calls = processor.mock.calls.map((c) => c[0]);
			for (const src of ['a.png', 'b.png', 'c.png']) {
				expect(calls).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							src,
							width: 320,
							height: 320,
							densities: [1, 2],
						}),
						expect.objectContaining({
							src,
							width: 80,
							height: 80,
							densities: [1, 2],
						}),
					]),
				);
			}

			for (const item of result.visualImageAttrs) {
				expect(item.mainImage).toMatchObject({ __mocked: 'imgAttrs' });
				expect(item.selectorImage).toMatchObject({ __mocked: 'imgAttrs' });
			}
		});
	});
});

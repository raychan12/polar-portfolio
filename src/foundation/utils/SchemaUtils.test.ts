import { describe, it, expect } from 'vitest';
import { z } from 'zod';

import { valuesOf } from './SchemaUtils';

const WorkType = {
	UIUX: 'uiux',
	GRAPHIC: 'graphic',
	SOSAKU: 'sosaku',
} as const;

describe('SchemaUtils', () => {
	describe('valuesOf', () => {
		it('EnumLike の値を返す', () => {
			const actual = valuesOf(WorkType);

			expect([...actual].sort()).toEqual(['graphic', 'sosaku', 'uiux'].sort());
		});

		it('z.enum と連携できる', () => {
			const WorkTypeSchema = z.enum(valuesOf(WorkType));

			expect(WorkTypeSchema.parse('uiux')).toBe('uiux');
			expect(() => WorkTypeSchema.parse('unknown')).toThrow();
		});
	});
});

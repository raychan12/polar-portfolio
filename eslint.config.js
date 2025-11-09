// @ts-check

import * as astroParser from 'astro-eslint-parser';
import gitignore from 'eslint-config-flat-gitignore';
import prettier from 'eslint-config-prettier/flat';
import * as astro from 'eslint-plugin-astro';
import { importX } from 'eslint-plugin-import-x';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

export default [
	gitignore(),
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.astro'],
			},
			globals: {
				Astro: 'readonly',
				Fragment: 'readonly',
			},
		},
		processor: astro.processors['client-side-ts'],
	},
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	...astro.configs.recommended,
	...astro.configs['jsx-a11y-strict'],
	{
		files: ['**/*.{js,ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'import-x/order': [
				'error',
				{
					'alphabetize': {
						order: 'asc',
						orderImportKind: 'desc',
						caseInsensitive: true,
					},
					'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
				},
			],
		},
	},
	{
		files: ['**/*.{js,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			'array-callback-return': 'error',
			'no-constant-binary-expression': 'error',
			'no-constructor-return': 'error',
			'no-new-native-nonconstructor': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-constant-condition': ['error', { checkLoops: false }],
			'no-unreachable-loop': 'error',
			'no-unused-private-class-members': 'error',
			'require-atomic-updates': 'error',
			'complexity': ['error', 15],
			'default-case-last': 'error',
			'default-param-last': 'error',
			'eqeqeq': ['error', 'always', { null: 'never' }],
			'grouped-accessor-pairs': ['error', 'setBeforeGet'],
			'no-alert': 'error',
			'no-console': ['error', { allow: ['error', 'warn'] }],
			'no-else-return': 'error',
			'no-implicit-coercion': 'error',
			'no-lonely-if': 'error',
			'no-multi-assign': 'error',
			'no-multi-str': 'error',
			'no-new-func': 'error',
			'no-new-wrappers': 'error',
			'no-param-reassign': 'error',
			'no-plusplus': 'error',
			'no-throw-literal': 'error',
			'no-unneeded-ternary': 'error',
			'no-unused-expressions': 'error',
			'no-useless-constructor': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'operator-assignment': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-named-capture-group': 'error',
			'prefer-numeric-literals': 'error',
			'prefer-object-has-own': 'error',
			'prefer-object-spread': 'error',
			'prefer-promise-reject-errors': 'error',
			'prefer-regex-literals': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'radix': 'error',
			'require-unicode-regexp': 'error',
			'symbol-description': 'error',
		},
	},
	{
		files: ['**/*.{ts,tsx}', '**/*.astro/*.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: {
					allowDefaultProject: ['./*.js'],
				},
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			...tseslint.configs.strictTypeChecked.at(-1)?.rules,
			...tseslint.configs.stylisticTypeChecked.at(-1)?.rules,
			...tseslint.configs.eslintRecommended.rules,
			'@typescript-eslint/consistent-type-exports': [
				'error',
				{
					fixMixedExportsWithInlineTypeSpecifier: true,
				},
			],
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',
			'@typescript-eslint/return-await': ['error', 'always'],
			'@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				projectService: false,
			},
		},
		rules: {
			...tseslint.configs.disableTypeChecked.rules,
			'import-x/no-unresolved': [
				'error',
				// import-x が astro:assets 等を解決できなくてエラーを吐くのでこうしています
				{ ignore: ['^astro:'] },
			],
		},
	},
	prettier,
];

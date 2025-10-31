// @ts-check

/**
 * @type {import("prettier").Config}
 */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-pkg', '@prettier/plugin-oxc'],
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'consistent',
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	experimentalTernaries: true,
	overrides: [
		{
			files: ['*.astro'],
			options: {
				parser: 'astro',
			},
		},
		{
			files: ['pnpm-lock.yaml'],
			options: {
				requirePragma: true,
			},
		},
		{
			files: ['tsconfig.json'],
			options: {
				parser: 'jsonc',
			},
		},
	],
};

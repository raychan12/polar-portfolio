import { globalStyle } from '@vanilla-extract/css';

/**
 * Preflight styles - Modern CSS reset based on Tailwind CSS
 * https://github.com/tailwindlabs/tailwindcss/blob/88b9f15b65588a87c5b6b13316530b4aecbc1b0b/packages/tailwindcss/preflight.css
 */

/*
	1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
	2. Remove default margins and padding
	3. Reset all borders.
*/
globalStyle('*, ::after, ::before, ::backdrop, ::file-selector-button', {
	boxSizing: 'border-box', // 1
	margin: 0, // 2
	padding: 0, // 2
	border: '0 solid', // 3
});

/*
	1. Use a consistent sensible line-height in all browsers.
	2. Prevent adjustments of font size after orientation changes in iOS.
	3. Use a more readable tab size.
	4. Use the user's configured `sans` font-family by default.
	5. Use the user's configured `sans` font-feature-settings by default.
	6. Use the user's configured `sans` font-variation-settings by default.
	7. Disable tap highlights on iOS.
*/
globalStyle('html, :host', {
	lineHeight: 1.5, // 1
	WebkitTextSizeAdjust: '100%', // 2
	tabSize: 4, // 3
	fontFamily:
		"ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'", // 4
	fontFeatureSettings: 'normal', // 5
	fontVariationSettings: 'normal', // 6
	WebkitTapHighlightColor: 'transparent', // 7
});

/*
	1. Add the correct height in Firefox.
	2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
	3. Reset the default border style to a 1px solid border.
*/
globalStyle('hr', {
	height: 0, // 1
	color: 'inherit', // 2
	borderTopWidth: '1px', // 3
});

/*
	Add the correct text decoration in Chrome, Edge, and Safari.
*/
globalStyle('abbr:where([title])', {
	// @ts-expect-error Object literal may only specify known properties, but 'WebkitTextDecoration' does not exist in type 'GlobalStyleRule'. Did you mean to write 'WebkitTextDecorationLine'?
	WebkitTextDecoration: 'underline dotted',
	textDecoration: 'underline dotted',
});

/*
	Remove the default font size and weight for headings.
*/
globalStyle(':where(h1, h2, h3, h4, h5, h6)', {
	fontSize: 'inherit',
	fontWeight: 'inherit',
});

/*
	Reset links to optimize for opt-in styling instead of opt-out.
*/
globalStyle(':where(a)', {
	color: 'inherit',
	// @ts-expect-error Object literal may only specify known properties, but 'WebkitTextDecoration' does not exist in type 'GlobalStyleRule'. Did you mean to write 'WebkitTextDecorationLine'?
	WebkitTextDecoration: 'inherit',
	textDecoration: 'inherit',
});

/*
	Add the correct font weight in Edge and Safari.
*/
globalStyle(':where(b, strong)', {
	fontWeight: 'bolder',
});

/*
	1. Use the user's configured `mono` font-family by default.
	2. Use the user's configured `mono` font-feature-settings by default.
	3. Use the user's configured `mono` font-variation-settings by default.
	4. Correct the odd `em` font sizing in all browsers.
*/
globalStyle(':where(code, kbd, samp, pre)', {
	fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", // 1
	fontFeatureSettings: 'normal', // 2
	fontVariationSettings: 'normal', // 3
	fontSize: '1em', // 4
});

/*
	Add the correct font size in all browsers.
*/
globalStyle(':where(small)', {
	fontSize: '80%',
});

/*
	Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/
globalStyle(':where(sub, sup)', {
	fontSize: '75%',
	lineHeight: 0,
	position: 'relative',
	verticalAlign: 'baseline',
});

globalStyle(':where(sub)', {
	bottom: '-0.25em',
});

globalStyle(':where(sup)', {
	top: '-0.5em',
});

/*
	1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
	2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
	3. Remove gaps between table borders by default.
*/
globalStyle(':where(table)', {
	textIndent: 0, // 1
	borderColor: 'inherit', // 2
	borderCollapse: 'collapse', // 3
});

/*
	Use the modern Firefox focus style for all focusable elements.
*/
globalStyle(':-moz-focusring', {
	outline: 'auto',
});

/*
	Add the correct vertical alignment in Chrome and Firefox.
*/
globalStyle(':where(progress)', {
	verticalAlign: 'baseline',
});

/*
	Add the correct display in Chrome and Safari.
*/
globalStyle(':where(summary)', {
	display: 'list-item',
});

/*
	Make lists unstyled by default.
*/
globalStyle(':where(ol, ul, menu)', {
	listStyle: 'none',
});

/*
	1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
	2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
			This can trigger a poorly considered lint error in some tools but is included by design.
*/
globalStyle(':where(img, svg, video, canvas, audio, iframe, embed, object)', {
	display: 'block', // 1
	verticalAlign: 'middle', // 2
});

/*
	Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
globalStyle(':where(img, video)', {
	maxWidth: '100%',
	height: 'auto',
});

/*
	1. Inherit font styles in all browsers.
	2. Remove border radius in all browsers.
	3. Remove background color in all browsers.
	4. Ensure consistent opacity for disabled states in all browsers.
*/
globalStyle(':where(button, input, select, optgroup, textarea, ::file-selector-button)', {
	font: 'inherit', // 1
	fontFeatureSettings: 'inherit', // 1
	fontVariationSettings: 'inherit', // 1
	letterSpacing: 'inherit', // 1
	color: 'inherit', // 1
	borderRadius: 0, // 2
	backgroundColor: 'transparent', // 3
	opacity: 1, // 4
});

/*
	Restore default font weight.
*/
globalStyle(':where(select:is([multiple], [size])) optgroup', {
	fontWeight: 'bolder',
});

/*
	Restore indentation.
*/
globalStyle(':where(select:is([multiple], [size])) optgroup option', {
	paddingInlineStart: '20px',
});

/*
	Restore space after button.
*/
globalStyle(':where(::file-selector-button)', {
	marginInlineEnd: '4px',
});

/*
	Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/
globalStyle('::placeholder', {
	opacity: 1,
});

/*
	Prevent resizing textareas horizontally by default.
*/
globalStyle(':where(textarea)', {
	resize: 'vertical',
});

/*
	Remove the inner padding in Chrome and Safari on macOS.
*/
globalStyle('::-webkit-search-decoration', {
	WebkitAppearance: 'none',
});

/*
	1. Ensure date/time inputs have the same height when empty in iOS Safari.
	2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/
globalStyle('::-webkit-date-and-time-value', {
	minHeight: '1lh', // 1
	textAlign: 'inherit', // 2
});

/*
	Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.
*/
globalStyle('::-webkit-datetime-edit', {
	display: 'inline-flex',
});

/*
	Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/
globalStyle('::-webkit-datetime-edit-fields-wrapper', {
	padding: 0,
});

globalStyle(
	'::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field',
	{
		paddingBlock: 0,
	},
);

/*
	Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/
globalStyle('::-webkit-calendar-picker-indicator', {
	lineHeight: 1,
});

/*
	Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
globalStyle(':-moz-ui-invalid', {
	boxShadow: 'none',
});

/*
	Correct the inability to style the border radius in iOS Safari.
*/
globalStyle("button, input:where([type='button'], [type='reset'], [type='submit']), ::file-selector-button", {
	appearance: 'button',
});

/*
	Correct the cursor style of increment and decrement buttons in Safari.
*/
globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
	height: 'auto',
});

/*
	Make elements with the HTML hidden attribute stay hidden by default.
*/
globalStyle("[hidden]:where(:not([hidden='until-found']))", {
	display: 'none',
});

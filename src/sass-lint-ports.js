/**
 * Ports for past sass-lint configs.
 *
 * @since 9/30/20
 * @since 2.0.0
 *
 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml Where these rules originally came from.
 */

const hyphenatedLowercasePrefixedUnderscorePattern = /^_?[a-z-?0-9]+$/gm;

const hyphenatedLowercasePrefixedUnderscoreMessage = 'Please use hyphenated lowercase for %s1 names. Also, you may use a leading underscore if you prefer.';

/**
 * Rules with no portability to sasslint:
 *
 * If you find any of these and port them over, please check them off.
 *
 * - [ ] https://github.com/sasstools/sass-lint/blob/develop/docs/rules/placeholder-in-extend.md
 * - [ ] https://github.com/sasstools/sass-lint/blob/develop/docs/rules/mixins-before-declarations.md
 * - [ ]
 */

module.exports = {

	/**
	 * Require named colors.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L42 (Source)
	 *
	 * @sasslint no-color-literals https://github.com/sasstools/sass-lint/blob/develop/docs/rules/no-color-literals.md
	 *
	 * @stylelint color-named                       https://stylelint.io/user-guide/rules/color-named
	 * @stylelint color-no-hex                      https://stylelint.io/user-guide/rules/color-no-hex
	 * @stylelint sh-waqar/declaration-use-variable https://github.com/sh-waqar/stylelint-declaration-use-variable
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 *
	 * @see  https://github.com/kristerkari/stylelint-scss/issues/4#issuecomment-306485371  This suggested using color-named and color-no-hex, but we can't use color-no-hex because then it applies to variable assignments too.
	 * @see  https://github.com/sh-waqar/stylelint-declaration-use-variable                 We had to use this so that we could allow variable assignments to use HEX.
	 */
	'sh-waqar/declaration-use-variable': [
		[

			/**
			 * Regex to match anything color, e.g. color: and background-color:, etc.
			 *
			 * @see  https://github.com/sh-waqar/stylelint-declaration-use-variable#regex-support
			 */
			'/color/', {
				ignoreValues: [
					'/rgb/', // Allow rgb( values, see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L45
				],
			},
		],
		{
			severity: 'warning',
		},
	],
	'color-named': [
		'never', {
			severity: 'warning',
		},
	],

	/**
	 * Require an empty line before the opening brace of blocks.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L37 (Source)
	 *
	 * @sasslint  empty-line-between-blocks             https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
	 *
	 * @stylelint block-closing-brace-empty-line-before https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L37
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 *
	 * @since 9/30/20
	 * @since 2.0.0
	 */
	'block-closing-brace-empty-line-before': [
		'never', {
			except: [
				'after-closing-brace',
			],
		},
	],

	/**
	 * Warn on @debug.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L46 (Source)
	 *
	 * @sasslint  no-debug                                   https://github.com/sasstools/sass-lint/blob/develop/docs/rules/no-debug.md
	 * @stylelint @webdevstudios/stylelint-no-debug/no-debug https://github.com/WebDevStudios/stylelint-no-debug
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since 10/7/20
	 */
	'@webdevstudios/stylelint-no-debug/no-debug': [
		true, {
			severity: 'warning',
		},
	],

	/**
	 * Warn on @debug.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L47 (Source)
	 *
	 * @sasslint  no-ids          https://github.com/sasstools/sass-lint/blob/v1.13.1/docs/rules/no-ids.md
	 * @stylelint selector-max-id https://stylelint.io/user-guide/rules/selector-max-id
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since  Wednesday, 11/4/2020
	 */
	'selector-max-id': [
		0, // No id's allowed in SCSS.
		{
			message: 'ID selectors are not allowed to be used or styled. You never want to style an ID. You can’t override styles on an ID by styling a class because classes have lower specificity.',
		},
	],

	/**
	 * No duplicate (mergable) selectors.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L48 (Source)
	 *
	 * @sasslint  https://github.com/sasstools/sass-lint/blob/v1.13.1/docs/rules/no-mergeable-selectors.md
	 * @stylelint https://stylelint.io/user-guide/rules/no-duplicate-selectors
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since  11/5/20
	 */
	'no-duplicate-selectors': true,

	/**
	 * No qualifying selectors.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L49 (Source)
	 *
	 * Options (sasslint), (stylelint:ignore):
	 *
	 * - allow-element-with-attribute: true
	 * - allow-element-with-class: false
	 * - allow-element-with-id: false
	 *
	 * @sasslint  https://github.com/sasstools/sass-lint/blob/v1.13.1/docs/rules/no-qualifying-elements.md
	 * @stylelint https://stylelint.io/user-guide/rules/selector-no-qualifying-type
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since  11/5/20
	 */
	'selector-no-qualifying-type': [
		true,
		{
			ignore: [

				// `class` and `id` omitted to adhere to options above.
				'attribute',
			],
		},
	],

	/**
	 * Disallow Vendor Prefixes
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L55 (Source)
	 *
	 * @sasslint no-vendor-prefixes
	 * @stylelint *-no-vendor-prefix
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since  11/5/20
	 *
	 * @see Disallow Vendor Prefix Values (Related)
	 */
	'at-rule-no-vendor-prefix': true,
	'media-feature-name-no-vendor-prefix': true,
	'selector-no-vendor-prefix': true,
	'property-no-vendor-prefix': true,
	'value-no-vendor-prefix': true,

	/**
	 * Disallow property-value pairs.
	 *
	 * @since 2.0.0
	 * @since 11/5/20
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 */
	'declaration-property-value-blacklist': {
		'/.*/': [

			/**
			 * Disallow Vendor Prefix Values
			 *
			 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L55 (Source)
			 *
			 * @sasslint no-vendor-prefixes
			 * @stylelint declaration-property-value-blacklist
			 *
			 * @author Aubrey Portwood <aubrey@webdevstudios.com>
			 * @since  2.0.0
			 * @since  11/5/20
			 *
			 * @see Disallow Vendor Prefixes (Related)
			 */
			'/^-moz-(.*)/',
			'/^-ms-(.*)/',
			'/^-webkit-(.*)/',

			/**
			 * Do not allow function (calls) that are invalid.
			 *
			 * Only allow hyphenated lowercase function names that start with a underscore, if they
			 * wish.
			 *
			 * @sasslint function-name-format
			 * @styleint sdeclaration-property-value-blacklist
			 *
			 * @see  https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L65 Source.
			 * @see  https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L68 Specifically for functions.
			 *
			 * @since  2.0.0
			 * @author Aubrey Portwood <aubrey@webdevstudios.com>
			 */
			'/^([^_]?).+[A-Z]+.*\\(/',
			'/[^_?]_.*\\(/',
		],
	},

	/**
	 * Do not allow empty blocks.
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L58 (Source)
	 *
	 * @sasslint  no-empty-rulesets
	 * @stylelint block-no-empty
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since  Friday, 11/6/2020
	 */
	'block-no-empty': true,

	/**
	 * When you use functions, follow correct case.
	 *
	 * @sasslint function-name-format
	 * @stylelint function-name-case
	 *
	 * @since  2.0.0
	 * @since 11/9/20
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 *
	 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L65
	 */
	'function-name-case': 'lower',

	/**
	 * Allow valid function names.
	 *
	 * @sasslint function-name-format
	 * @styleint scss/at-function-pattern https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
	 *
	 * @see  https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L65 Source.
	 * @see  https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L68 Specifically for functions.
	 *
	 * @since  2.0.0
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 *
	 * @see https://regexr.com/5fsg1 The REGEX we used below.
	 */
	'scss/at-function-pattern': [
		hyphenatedLowercasePrefixedUnderscorePattern,
		{
			message: hyphenatedLowercasePrefixedUnderscoreMessage.replace( '%s1', 'function' ),
		},
	],

	/**
	 * Allow valid function names.
	 *
	 * @sasslint mixin-name-format
	 * @styleint scss/at-function-pattern https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
	 *
	 * @see  https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L69 Source.
	 *
	 * @since  2.0.0
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 *
	 * @see scss/at-function-pattern Uses same naming scheme.
	 */
	'scss/at-mixin-pattern': [
		hyphenatedLowercasePrefixedUnderscorePattern,
		{
			message: hyphenatedLowercasePrefixedUnderscoreMessage.replace( '%s1', 'mixin' ),
		},
	],
};

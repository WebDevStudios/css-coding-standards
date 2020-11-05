/**
 * Ports for past sass-lint configs.
 *
 * @since 9/30/20
 * @since 2.0.0
 *
 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml Where these rules originally came from.
 */

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
	 * @source https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L42
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
	 * @source https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L37
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
	 * @source https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L46
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
	 * @source https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L47
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
	 * @source https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L48
	 *
	 * @sasslint  https://github.com/sasstools/sass-lint/blob/v1.13.1/docs/rules/no-mergeable-selectors.md
	 * @stylelint https://stylelint.io/user-guide/rules/no-duplicate-selectors
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  2.0.0
	 * @since  11/5/20
	 */
	'no-duplicate-selectors': true,
};

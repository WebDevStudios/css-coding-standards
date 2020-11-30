/**
 * General Rules
 *
 * @since 9/30/20
 * @since 2.0.0
 *
 * @see https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml Where these rules originally came from.
 */

module.exports = {

	/**
	 * Require an empty line before rules.
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since 9/30/20
	 * @since  2.0.0
	 *
	 * @see https://stylelint.io/user-guide/rules/rule-empty-line-before
	 */
	'rule-empty-line-before': [
		'always-multi-line',
		{
			except: [
				'after-single-line-comment',
			],
			ignore: [
				'after-comment',
			],
		},
	],

	/**
	 * No 1px or 0em, etc unit-less values.
	 *
	 * Generally we don't want to use 0px, but 0 and none are allowed.
	 *
	 * @since 11/30/20
	 * @since 2.0.0
	 *
	 * @see https://stylelint.io/user-guide/rules/length-zero-no-unit
	 */
	'length-zero-no-unit': [
		true,
		{
			message: 'Just use 0 or none.',
		},
	],

	/**
	 * Brace Spacing
	 *
	 * Requires a space before and after, e.g. `a{` is not good, `a { ` is better.
	 *
	 * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-before
	 * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-after
	 */
	'block-opening-brace-space-before': 'always',
};

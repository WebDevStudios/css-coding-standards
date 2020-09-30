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
};

/**
 * CSS Coding Standards from wd_s
 *
 * These rules came directly from wd_s authored by Corey Williams and
 * ported to this configuration by Aubrey Portwood.
 *
 * Note, anything set to `null` below does NOT set it to false, and does not affect
 * the configuration since all configurations below are opt-out by default. But,
 * is is there, visually, to explain that we do not want to enable the rule.
 *
 * @since 9/30/20
 * @since 2.0.0
 */

module.exports = {

	/**
	 * Allow unknown @ rules because of tailwind.
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com> It is my opinion that this should NOT be true since it will bark about tailwind commands.
	 * @author Corey Collins <corey@webdevstudios.com>    Who also shared Aubrey's opinion.
	 *
	 * @since  2.0.0
	 * @since  9/30/20
	 *
	 * @see https://stylelint.io/user-guide/rules/at-rule-no-unknown
	 */
	'at-rule-no-unknown': null,
	'scss/at-rule-no-unknown': null,

	/**
	 * No Empty Blocks
	 *
	 * E.g.:
	 *
	 *     .thing {}
	 *
	 * @since 9/30/20
	 * @since 2.0.0
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @author Corey Collins <corey@webdevstudios.com> Original author from wd_s.
	 *
	 * @see  https://stylelint.io/user-guide/rules/block-no-empty
	 */
	'block-no-empty': true,

	/**
	 * No duplicate font names.
	 *
	 * E.g.
	 *
	 *     a { font-family: 'Times', Times, serif; }
	 *
	 * @since 9/30/20
	 * @since  2.0.0
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @author Corey Collins <corey@webdevstudios.com> Original author from wd_s.
	 *
	 * @see    https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
	 */
	'font-family-no-duplicate-names': true,

	/**
	 * Disallow missing generic families in lists of font family names.
	 *
	 * @since 9/30/20
	 * @since 2.0.0
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @author Corey Collins <corey@webdevstudios.com> Original author from wd_s.
	 *
	 * @see https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
	 */
	'font-family-no-missing-generic-family-keyword': true,

	/**
	 * No max-line length.
	 *
	 * @see  https://stylelint.io/user-guide/rules/max-line-length
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @author Corey Collins <corey@webdevstudios.com> Original author from wd_s.
	 *
	 * @since  2.0.0
	 * @since 9/30/20
	 */
	'max-line-length': null,

	/**
	 * Allow Descending Specificity
	 *
	 * @since 9/30/20
	 * @since 2.0.0
	 *
	 * @see  https://stylelint.io/user-guide/rules/no-descending-specificity
	 */
	'no-descending-specificity': null,

	/**
	 * Allow duplicate selectors.
	 *
	 * @since  2.0.0
	 * @since 9/30/20
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @author Corey Collins <corey@webdevstudios.com> Original author from wd_s.
	 *
	 * @see https://stylelint.io/user-guide/rules/no-duplicate-selectors
	 */
	'no-duplicate-selectors': null,
};

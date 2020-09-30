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
	 * Require an empty line before the opening brace of blocks.
	 *
	 * E.g.
	 *
	 *    .thing {
	 *
	 *    	i {
	 *    		display: none;
	 *    	}
	 *
	 *    	em {
	 *    		display: block;
	 *    	}
	 *    }
	 *
	 * @sasslint  empty-line-between-blocks             https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
	 * @stylelint block-closing-brace-empty-line-before https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml#L37
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 *
	 * @since 9/30/20
	 * @since 2.0.0
	 */
	'block-closing-brace-empty-line-before': [
		'never',
		{
			except: [
				'after-closing-brace',
			],
		},
	],
};

/**
 * Stylelint Configuration
 *
 * To use add:
 *
 *    stylelint": {
 *      "extends": "@webdevstudios/css-coding-standards"
 *    }
 *
 * ...to the `package.json` of your project.
 *
 * @since 2.0.0
 */

module.exports = {
	extends: [
		'stylelint-config-wordpress/scss' // This extends stylelint-config-wordpress as well.
	],
	rules: {
		'at-rule-no-unknown': null,
		'block-no-empty': null,
		'font-family-no-duplicate-names': null,
		'font-family-no-missing-generic-family-keyword': null,
		'max-line-length': null,
		'no-descending-specificity': null,
		'no-duplicate-selectors': null,
		'scss/at-rule-no-unknown': true
	},
	"ignoreFiles": [
		'!*.scss',
		'!*.css',
		'/node_modules/',
		'/vendor/',
	],
};

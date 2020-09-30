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
		...require( './src/wd_s.js' ),
	},
	"ignoreFiles": [
		'!*.scss', // Anything but .scss files.
		'!*.css', // Anything bug .css files.
		'/node_modules/',
		'/vendor/',
	],
};

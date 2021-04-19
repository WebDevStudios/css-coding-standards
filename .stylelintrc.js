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
	plugins: [
		'stylelint-declaration-use-variable',
		'@webdevstudios/stylelint-no-debug',
		'stylelint-scss',
		'stylelint-order',
	],
	extends: [
		'stylelint-config-wordpress/scss', // This extends stylelint-config-wordpress as well.
	],
	rules: {
		...require( './src/wd_s.js' ), // Rules that came from wd_s at 2.0.0.
		...require( './src/sass-lint-ports.js' ), // Rules ported from old sasslint style ruleset.
		...require( './src/rules.js' ), // General and new rules.
	},
	ignoreFiles: [

		// Anything but SCSS and CSS files.
		'!*.scss',
		'!*.css',

		// Node and Composer.
		'/node_modules/',
		'/vendor/',

		// wd_s ignore list.
		'assets/**/_colors.scss',
		'assets/**/_gravity-forms.scss',
		'assets/**/_scaffolding.scss',
		'assets/**/style.scss',
		'assets/bower_components/**/*.scss',
		'assets/sass/vendor/**/*.scss',
		'bourbon-neat/app/**/*.scss',
		'bourbon/app/**/*.scss',
		'node_modules/**/*.scss',
		'sass/tests/**/*.scss',
		'sass/vendor/**/*.scss',
	],
};

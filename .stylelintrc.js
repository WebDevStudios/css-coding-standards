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
	],
	extends: [
		'stylelint-config-wordpress/scss', // This extends stylelint-config-wordpress as well.
	],
	rules: {
		...require( './src/wd_s.js' ),
		...require( './src/sass-lint-ports.js' ),
		...require( './src/rules.js' ),
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

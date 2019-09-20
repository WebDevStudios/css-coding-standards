# WebDevStudios CSS & SASS Coding Standards

WebDevStudios in-house CSS & SASS linting and coding standards for your favorite editor.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

- Lints CSS and SASS via [`stylelint-config-wordpress`](https://www.npmjs.com/package/stylelint-config-wordpress)
- Lints SASS via our own custom linting configurations

## Leadership

- __Aubrey Portwood (Senior BED Developer)__
+ Writes & Integrates Coding Standards/Maintains Standards
- __Greg Rickaby (Director of Engineering)__
+ High level Approval / Leadership

## Installation

`npm install git://git@github.com:WebDevStudios/css-coding-standards.git --save-dev`

In your `package.json` use:

```js
{
  "sasslintConfig": "node_modules/@webdevstudios/css-coding-standards/.sass-lint.yml",
  "stylelint": {
    "extends": "stylelint-config-wordpress/scss"
  }
}
```
____________

# Changelog 

## NEXT

- Installed `stylelint-config-wordpress` as that config will lint CSS (and only CSS, not SASS) per WordPress' CSS coding standards (note SASS is still linted via sass-lint) since we have a proper config for it

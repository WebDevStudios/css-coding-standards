# WebDevStudios CSS & SASS Coding Standards

WebDevStudios in-house CSS & SASS linting and coding standards for your favorite editor.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

- Lints CSS (not SASS) via [`stylelint-config-wordpress`](https://www.npmjs.com/package/stylelint-config-wordpress)
- Lints SASS via our own custom linting configurations with `sass-lint`.

## Leadership

- [Aubrey Portwood](https://github.com/aubreypwd) - Project Lead
- [Greg Rickaby](https://github.com/gregrickaby) - Director of Engineering

## Installation

`npm install git://git@github.com:WebDevStudios/css-coding-standards.git --save-dev`

In your `package.json` use:

```js
{
  "sasslintConfig": "node_modules/@webdevstudios/css-coding-standards/.sass-lint.yml",
  "stylelint": {
    "extends": "stylelint-config-wordpress"
  }
}
```
____________

# Changelog 

## NEXT

- Installed `stylelint-config-wordpress` as that config will lint CSS (and only CSS, not SASS) per WordPress' CSS coding standards (note SASS is still linted via sass-lint) since we have a proper config for it

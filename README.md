# WebDevStudios CSS & SASS Coding Standards

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

- Lints CSS (not SASS) via [`stylelint-config-wordpress`](https://www.npmjs.com/package/stylelint-config-wordpress)
- Lints SASS via our own custom linting configurations with `sass-lint`.

## How to Install

```bash
npm install @webdevstudios/css-coding-standards@1.0.0-beta2 --save-dev
```

In your `package.json` use:

```js
{
  "sasslintConfig": "node_modules/@webdevstudios/css-coding-standards/.sass-lint.yml",
  "stylelint": {
    "extends": "stylelint-config-wordpress",
    "ignoreFiles":  "**/*.scss"
  }
}
```

Note, we do not currently extend `stylelint-config-wordpress/scss`for `stylelint` as it can cause conflicts with our custom `sass-lint` configurations.

____________

# Changelog 

## 1.0.0-beta2

- Ready for npmjs.org
- Require `~` version for only minor updates
- Added contributors

## 1.0.0-beta1

- Installed `stylelint-config-wordpress` as that config will lint CSS (and only CSS, not SASS) per WordPress' CSS coding standards (note SASS is still linted via sass-lint) since we have a proper config for it

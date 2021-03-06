# WebDevStudios CSS & SASS Coding Standards

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

------

**This package is DEPRECATED and no longer in use at WebDevStudios and will no longer be maintained.**

------

- Lints CSS (not SASS) via [`stylelint-config-wordpress`](https://www.npmjs.com/package/stylelint-config-wordpress)
- Lints SASS via our own custom linting configurations with `sass-lint`.

## How to Install

```bash
npm install @webdevstudios/css-coding-standards --save-dev
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

To modify `package.json` quickly using [`jq`](https://stedolan.github.io/jq/) use:

```bash
echo $( jq '.sasslintConfig = "node_modules/@webdevstudios/css-coding-standards/.sass-lint.yml"' package.json ) | jq . > package-tmp.json && mv package-tmp.json package.json && echo $( jq '.stylelint = {"extends": "stylelint-config-wordpress","ignoreFiles": "**/*.scss"}' package.json ) | jq . > package-tmp.json && mv package-tmp.json package.json
```



Note, we do not currently extend `stylelint-config-wordpress/scss`for `stylelint` as it can cause conflicts with our custom `sass-lint` configurations.

____________

# Changelog 

## 1.0.1

- Update `eslint` (which a sub-dependacy requires) to `>6.8.0` so parent packages can flatten out `eslint` to greater versions

## 1.0.0

- Stable release

## 1.0.0-beta2

- Ready for npmjs.org
- Require `~` version for only minor updates
- Added contributors

## 1.0.0-beta1

- Installed `stylelint-config-wordpress` as that config will lint CSS (and only CSS, not SASS) per WordPress' CSS coding standards (note SASS is still linted via sass-lint) since we have a proper config for it

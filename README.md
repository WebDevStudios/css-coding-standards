# WebDevStudios CSS & SASS Coding Standards

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

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

---

# Development

_Note, `master` is alpha/beta code._

- Clone the repo
- `npm install`
- `npm run test`

## `examples/`

Example `.scss` and `.css` files exist here to test:

1. Editors
2. via CLI, `npm test`

### `npm test`

See `package.json::scripts.test` where we test each file in `examples/` for the desired output via `grep`.

____________

# Changelog 

- See [Releases](https://github.com/WebDevStudios/css-coding-standards/releases)

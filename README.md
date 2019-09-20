# WebDevStudios CSS & SASS Coding Standards

WebDevStudios in-house CSS & SASS linting and coding standards for your favorite editor.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

## Leadership

- __Aubrey Portwood (Senior BED Developer)__
+ Writes & Integrates Coding Standards/Maintains Standards
- __Greg Rickaby (Director of Engineering)__
+ High level Approval / Leadership

## Installation

`npm install git://git@github.com:WebDevStudios/css-coding-standards.git --save-dev`

### CSS

To install your CSS codding standards in your project, in your `.stylelintrc.js` file, use:

```js
{
    "extends": "stylelint-config-wordpress"
}
```

Or, in your `package.json` use:

```js
{
    "stylelint": {
        "extends": "stylelint-config-wordpress"
    }
}

```

_Note, we do not use `stylelint-config-wordpress/scss` preset, we have our own SASS linting standards, but may be extending it in the future._

### SASS

To use our SASS coding standards in your project, you must add a `.sass-lint.yml` file to your project that contains:

```yml
options:
  config-file: node_modules/css-coding-standards/.sass-lint.yml
```

Or, in your `package.json` use:

```js
{
    "sasslintConfig": "node_modules/css-coding-standards/.sass-lint.yml"
}
```

____________

# Changelog 

## NEXT

- Installed `stylelint-config-wordpress` as that config will lint CSS (and only CSS, not SASS) per WordPress' CSS coding standards (note SASS is still linted via sass-lint) since we have a proper config for it

# sass-lint Ports

The goal of this todo list is to port all of these to styleint.

Todo format of [blob/1.0.1/.sass-lint.yml](https://github.com/WebDevStudios/css-coding-standards/blob/1.0.1/.sass-lint.yml)

## Legend

|^|WIP                     |
|x|Done                    |
|X|Done differently        |
|-|Skipped                 |
|?|Unknown or no equivalant|
|~|Incomplete              |
|/|Best Guess              |
|-|------------------------|

## Todo

- [x] files:
  - [x]   ignore:
    + [x] - `assets/**/_colors.scss`
    + [x] - `assets/**/_gravity-forms.scss`
    + [x] - `assets/**/_scaffolding.scss`
    + [x] - `assets/**/style.scss`
    + [x] - `assets/bower_components/**/*.scss`
    + [x] - `assets/sass/vendor/**/*.scss`
    + [x] - `bourbon-neat/app/**/*.scss`
    + [x] - `bourbon/app/**/*.scss`
    + [x] - `node_modules/**/*.scss`
    + [x] - `sass/tests/**/*.scss`
    + [x] - `sass/vendor/**/*.scss`
- [~] rules:
  + [ ]   placeholder-in-extend: `false`
  + [x]   mixins-before-declarations: `true`
      * [ ] exclude: `['grid-media', 'media']` # allow `@include grid-media(), @include media();`
  + [x]   empty-line-between-blocks: `true`
      * [?] allow-single-line-rulesets: `false`
  + [x]   no-color-literals: `true`
  + [x]     allow-rgba: `true`
  + [x]   no-debug: `false`
  + [x]   no-ids: `false`
  + [x]   no-mergeable-selectors: `false`
  + [x]   no-qualifying-elements: `true`
      * [x] allow-element-with-attribute: `true`
      * [x] allow-element-with-class: `false`
      * [x] allow-element-with-id: `false`
  + [~]   no-vendor-prefixes: `false`
  + [x]   no-warn: `false`
  + [x]   no-empty-rulesets: `false`
  + [x]   force-attribute-nesting: `false`
  + [x]   force-element-nesting: `false`
  + [x]   force-pseudo-nesting: `false`
  + [~]   function-name-format: `true`
      * [x] convention-explanation: Please use hyphenated lowercase for function names. Also, you may use a leading underscore if you prefer.
  + [~]   mixin-name-format: `true`
      * [x] convention-explanation: Please use hyphenated lowercase for mixin names. Also, you may use a leading underscore if you prefer.
  + [~]   placeholder-name-format: `true`
      * [x] convention-explanation: Please use hyphenated lowercase for placeholder names. Also, you may use a leading underscore if you prefer.
  + [~]   variable-name-format: `true`
      * [~] allow-leading-underscore: `false`
      * [x] convention-explanation: Please use hyphenated lowercase for variable names. No leading underscore is allowed.
  + [x]   attribute-quotes: `true`
  + [/]   border-zero: `false`
  + [x]   brace-style: `true`
      * [x] style: 1tbs
      * [x] allow-single-line: `false`
  + [x]   class-name-format: `true`
      * [x] allow-leading-underscore: `false`
      * [x] convention-explanation: Please use hypenated lowercase for class names, and without a leading underscore. If you find a WordPress core condition that conflicts with this convention feel free to modify and extend the ignore option.
      * [x] ignore: ['current_page_item', 'widget_search'] # ignore selectors declared by WordPress
  + [~]   empty-args: `false`
  + [^]   hex-length: `true`
  + [x]   hex-notation: `true`
  + [x]   id-name-format: `true`
      * [x] convention-explanation: Please try to use hyphenated lowercase ID name format. If overriding a plugin that does not use this format then please ignore or extend the list of ignore option.
  + [x]   indentation: `true`
      * [x] size: tab
  + [x]   leading-zero: `true`
      * [x] include: `true`
  + [x]   nesting-depth: `true`
      * [x] max-depth: 4
  + [~]   property-units: `true`
      * [~] per-property: { border: ['px'], box-shadow: ['rem'], font-size: ['rem'], letter-spacing: ['em'], text-shadow: ['em'], width: ['rem', 'vw'], height: ['rem', 'vh'], margin: ['rem'], padding: ['rem'] }
  + [x]   quotes: `true`
      * [x]   style: single
  + [x]   shorthand-values: `true`
      * [x] allowed-shorthands:
      * [x] - 1
      * [x] - 2
  + [~]   space-between-parens: `false`
  + [X]   final-newline: `false`
  + [?]   no-misspelled-properties: `true`
      * [?] 'extra-properties':
      * [?] - '-webkit-overflow-scrolling'


---

## Extra TODO

- [ ] Fix requirement of line before code in `{}`
- [ ] Some parethesis are not working right, see `space-between-parens`, etc.
- [x] Alphabetical order
- [ ] `property-units` still don't work great
- [ ] Unit rule not working, see `examples/scss/sasslint-ports/mixins-before-declarations.scss`

- [ ] files:
- [ ]   ignore:
    + [ ] - `assets/**/_colors.scss`
    + [ ] - `assets/**/_gravity-forms.scss`
    + [ ] - `assets/**/_scaffolding.scss`
    + [ ] - `assets/**/style.scss`
    + [ ] - `assets/bower_components/**/*.scss`
    + [ ] - `assets/sass/vendor/**/*.scss`
    + [ ] - `bourbon-neat/app/**/*.scss`
    + [ ] - `bourbon/app/**/*.scss`
    + [ ] - `node_modules/**/*.scss`
    + [ ] - `sass/tests/**/*.scss`
    + [ ] - `sass/vendor/**/*.scss`
- [ ] rules:
- [ ]   placeholder-in-extend: `false`
- [ ]   mixins-before-declarations: `true`
    + [ ] exclude: `['grid-media', 'media']` # allow `@include grid-media(), @include media();`
- [x]   empty-line-between-blocks: `true`
    + [ ] allow-single-line-rulesets: `false`
- [x]   no-color-literals: `true`
- [x]     allow-rgba: `true`
- [ ]   no-debug: `false`
- [ ]   no-ids: `false`
- [ ]   no-mergeable-selectors: `false`
- [ ]   no-qualifying-elements: `true`
    + [ ] allow-element-with-attribute: `true`
    + [ ] allow-element-with-class: `false`
    + [ ] allow-element-with-id: `false`
- [ ]   no-vendor-prefixes: `false`
- [ ]   no-warn: `false`
- [ ]   no-empty-rulesets: `false`
- [ ]   force-attribute-nesting: `false`
- [ ]   force-element-nesting: `false`
- [ ]   force-pseudo-nesting: `false`
- [ ]   function-name-format: `true`
    + [ ] convention-explanation: Please use hyphenated lowercase for function names. Also, you may use a leading underscore if you prefer.
- [ ]   mixin-name-format: `true`
    + [ ] convention-explanation: Please use hyphenated lowercase for mixin names. Also, you may use a leading underscore if you prefer.
- [ ]   placeholder-name-format: `true`
    + [ ] convention-explanation: Please use hyphenated lowercase for placeholder names. Also, you may use a leading underscore if you prefer.
- [ ]   variable-name-format: `true`
    + [ ] allow-leading-underscore: `false`
    + [ ] convention-explanation: Please use hyphenated lowercase for variable names. No leading underscore is allowed.
- [ ]   attribute-quotes: `true`
- [ ]   border-zero: `false`
- [ ]   brace-style: `true`
    + [ ] style: 1tbs
    + [ ] allow-single-line: `false`
- [ ]   class-name-format: `true`
    + [ ] allow-leading-underscore: `false`
    + [ ] convention-explanation: Please use hypenated lowercase for class names, and without a leading underscore. If you find a WordPress core condition that conflicts with this convention feel free to modify and extend the ignore option.
    + [ ] ignore: ['current_page_item', 'widget_search'] # ignore selectors declared by WordPress
- [ ]   empty-args: `false`
- [ ]   hex-length: `true`
- [ ]   hex-notation: `true`
- [ ]   id-name-format: `true`
    + [ ] convention-explanation: Please try to use hyphenated lowercase ID name format. If overriding a plugin that does not use this format then please ignore or extend the list of ignore option.
- [ ]   indentation: `true`
    + [ ] size: tab
- [ ]   leading-zero: `true`
    + [ ] include: `true`
- [ ]   nesting-depth: `true`
    + [ ] max-depth: 4
- [ ]   property-units: `true`
    + [ ] per-property: { border: ['px'], box-shadow: ['rem'], font-size: ['rem'], letter-spacing: ['em'], text-shadow: ['em'], width: ['rem', 'vw'], height: ['rem', 'vh'], margin: ['rem'], padding: ['rem'] }
- [ ]   quotes: `true`
    + [ ]   style: single
- [ ]   shorthand-values: `true`
    + [ ] allowed-shorthands:
    + [ ] - 1
    + [ ] - 2
- [ ]   space-between-parens: `false`
- [ ]   final-newline: `false`
- [ ]   no-misspelled-properties: `true`
    + [ ] 'extra-properties':
    + [ ] - '-webkit-overflow-scrolling'

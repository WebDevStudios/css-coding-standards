# WebDevStudios CSS & SASS Coding Standards

WebDevStudios in-house CSS & SASS linting and coding standards for your favorite editor.

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. WordPress for big brands."></a>

## Leadership

- [Aubrey Portwood](https://github.com/aubreypwd) - Project Lead
- [Greg Rickaby](https://github.com/gregrickaby) - Director of Engineering

## Installation

`npm install git://git@github.com:WebDevStudios/css-coding-standards.git --save-dev`

To use our coding standards in your project, you must add a `.stylelintrc.js` file to your project that contains:

```js
'use strict';

module.exports = {
    extends: '@webdevstudios/css-coding-standards',
};
```

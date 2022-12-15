# Craco sass-resources-loader

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a [craco](https://github.com/sharegate/craco) plugin to add [sass-resources-loader](https://www.npmjs.com/package/sass-resources-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

Originally authored by [tilap](https://github.com/tilap). This version was forked and is now actively maintained and monitored for security vulnerabilities.

## Installation

```bash
$ yarn add -D craco-sass-resources-loader

# OR

$ npm install craco-sass-resources-loader --save-dev
```

## Usage

`craco-sass-resources-loader` expects a `resources` option containing a string or an array of
strings pointing to the scss files your want to load across all you compiled scss/sass files.

```js
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/my-config-theme.scss',
      },
    },
  ],
}
```

You can load multiple scss resource files too:

```js
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/my-config-theme.scss',
          './src/my-other-config-theme.scss'
        ],
      },
    },
  ],
}
```
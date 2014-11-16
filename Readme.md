# jsx-virtual-hyperscript-loader

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

Webpack loader transpiling jsx into virtual-hyperscript javascript, using jsx-transform

## Installation

```sh
$ npm install jsx-virtual-hyperscript-loader
```

## Use

```js
{
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-virtual-hyperscript-loader" }
        ],
    }
};

```

## Options

Passed to the loader as query strings

Example :

```js
loader: "jsx-virtual-hyperscript-loader?ignoreDocblock=true"

```

ignoreDocblock : Parse files without docblock (default: false). If true, options.jsx must also be set.

tagMethods : Use tag as method instead of argument (default: false).

jsx : name of virtual DOM node constructor.

tags : array of known tags.

## License

MIT License (MIT)

Copyright (c) 2014 Etienne Molto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[npm-image]: https://img.shields.io/npm/v/jsx-virtual-hyperscript-loader.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jsx-virtual-hyperscript-loader
[license-image]: http://img.shields.io/npm/l/jsx-virtual-hyperscript-loader.svg?style=flat-square
[license-url]: LICENSE
# Bloomer
==================================

[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/AlgusDark/bloomer/blob/master/LICENSE.md)
[![NPM Downloads](https://img.shields.io/npm/dm/bloomer.svg?style=flat-square)](http://npmjs.com/package/bloomer)
[![NPM Version](https://img.shields.io/npm/v/bloomer.svg?style=flat-square)](http://npmjs.com/package/bloomer)
[![Build Status](https://travis-ci.org/AlgusDark/bloomer.svg?branch=master)](https://travis-ci.org/AlgusDark/bloomer)
[![Coverage Status](https://coveralls.io/repos/github/AlgusDark/bloomer/badge.svg?branch=master)](https://coveralls.io/github/AlgusDark/bloomer?branch=master)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)

A cool set of React Stateless components for Bulma v0.4.3

<p align="center">
    <a href='http://bloomer.js.org' title='Check Bloomer page'>
        <img src='https://github.com/AlgusDark/bloomer/blob/master/docs/07990594.png' width=400 role="presentation">
    </a>
</p>

## Install

[Bulma](https://www.npmjs.com/package/bulma) should be included in your project.

## Using NPM
```sh
$ npm install bloomer --save

```

## Using Yarn
```sh
$ yarn add bloomer
```

## Using CDN
```
<html>
  <head>
    ...
  </head>
  <body>
    Other libraries
    <script type="text/javascript" src="https://unpkg.com/bloomer/bundles/bloomer.min.js">
    Cutom code
  </body>
</html>
```

## Usage
```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Box  } from 'bloomer';

ReactDOM.render(
  <Container>
    <Box>Hello World!</Box>
  </Container>,
  document.getElementById('root')
);
```
## Documentation
The online documentation resides in [bloomer page](https://bloomer.js.org/#/documentation/overview/start), you can find all the different topics related to this library.
### Sections
- [Overview](https://bloomer.js.org/#/documentation/overview/start)
- [Grid](https://bloomer.js.org/#/documentation/grid/)
- [Elements](https://bloomer.js.org/#/documentation/elements/)
- [Components](https://bloomer.js.org/#/documentation/components)
- [Layout](https://bloomer.js.org/#/documentation/layout)

## Buy me a beer
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/algusdark)

### Contributions
All contributions are welcome send your PR and Issues.

### License
This is a open-source software licensed under the [MIT license](https://github.com/AlgusDark/bloomer/blob/master/LICENSE.md)

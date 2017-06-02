Bloomer
==================================

[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/AlgusDark/bloomer/blob/master/LICENSE.md)
[![NPM Downloads](https://img.shields.io/npm/dm/bloomer.svg?style=flat-square)](http://npmjs.com/package/bloomer)
[![NPM Version](https://img.shields.io/npm/v/bloomer.svg?style=flat-square)](http://npmjs.com/package/bloomer)
[![Build Status](https://travis-ci.org/AlgusDark/bloomer.svg?branch=master)](https://travis-ci.org/AlgusDark/bloomer)
[![Coverage Status](https://coveralls.io/repos/github/AlgusDark/bloomer/badge.svg?branch=master)](https://coveralls.io/github/AlgusDark/bloomer?branch=master)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)

A set of React Stateless components for Bulma v0.4.2

## NPM
```sh
$ npm install bloomer --save
```

## Yarn
```sh
$ yarn add bloomer-jsx
```

## Usage
```javascript
// you should have bulma in your project
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Box  } from 'bloomer';

ReactDOM.render(
    <Container>
        <Box>Hello World!</Box>
    </Container>,
    document.getElementById('root')
)
```

## Set ofComponents

#### Grid

- [x] Columns
- [x] Tile

#### Elements

- [x] Box
- [x] Button
- [x] Content
- [x] Delete
- [x] Form
- [x] Icon
- [x] Image
- [x] Notification
- [x] Progress 
- [x] Table
    - `<tr>` has a `.is-selected` modifier, since **bloomer** doesn't provide table rows, you should use this modifier manually.
- [x] Tag
- [x] Title / SubTitle

#### Components

- [x] Card
- [x] Level
- [x] Media object
- [x] Menu
- [x] Message
- [x] Modal
- [x] Nav
- [x] Pagination
- [x] Panel
- [x] Tabs

#### Layout

- [x] Container
- [x] Hero
- [x] Section
- [x] Footer

## Buy me a beer
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/algusdark)

### Contributions
All contributions are welcome send your PR and Issues.

### License
This is a open-source software licensed under the [MIT license](https://github.com/AlgusDark/bloomer/blob/master/LICENSE.md)

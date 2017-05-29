Bulma-JSX
==================================

[![Build Status](https://travis-ci.org/AlgusDark/bulma-jsx.svg?branch=master)](https://travis-ci.org/AlgusDark/bulma-jsx)
[![Coverage Status](https://coveralls.io/repos/github/AlgusDark/bulma-jsx/badge.svg?branch=master)](https://coveralls.io/github/AlgusDark/bulma-jsx?branch=master)

A set of React components for Bulma v0.4.1
This repository is heavily under development and unstable.

## NPM

```sh
npm install bulma-jsx
```

## Usage
```javascript
// you should have bulma.css in your project
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Box  } from 'bulma-jsx';

ReactDOM.render(
    <Container>
        <Box>Hello World!</Box>
    </Container>
)
```
## Documentation
TODO

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
    - `<tr>` has a `.is-selected` modifier, since **bulma-jsx** doesn't provide table rows, you should use this modifier manually.
- [x] Tag
- [x] Title / SubTitle

#### Components

- [x] Card
- [x] Level
- [ ] Media object
- [x] Menu
- [x] Message
- [ ] Modal
- [ ] Nav
- [x] Pagination
- [ ] Panel
- [x] Tabs

#### Layout

- [x] Container
- [x] Hero
- [x] Section
- [x] Footer

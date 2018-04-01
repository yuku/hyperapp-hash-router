# hyperapp-hash-router

[![NPM version](http://img.shields.io/npm/v/hyperapp-hash-router.svg)](https://www.npmjs.com/package/hyperapp-hash-router)
[![Maintainability](https://api.codeclimate.com/v1/badges/1f1a1bba3e76976e7b6e/maintainability)](https://codeclimate.com/github/yuku-t/hyperapp-hash-router/maintainability)

[@hyperapp/router] compatible router library based on `location.hash`.

[Demo](https://yuku-t.com/hyperapp-hash-router/#/demo)

## Installation

If your project is using npm, you can install [hyperapp-hash-router] package by npm command:

```bash
npm install --save hyperapp-hash-router
```

### Distribution files
- **dist/index.js** - The CommonJS version of this package. (default)
- **src/index.js** - The ES Modules version of this package.
- **dist/hyperapp-hash-router.js**, **dist/hyperapp-hash-router.min.js** - The UMD version of this package. This version exports itself to `window.hyperappHashRouter`.

### Usage
```js
import { Link, Route, Switch, Redirect, location } from "hyperapp-hash-router"
```

[hyperapp-hash-router] is compatible with [@hyperapp/router] so you can use these objects as described in [@hyperapp/router's README document](https://github.com/hyperapp/router#usage).

[hyperapp-hash-router]: https://www.npmjs.com/package/hyperapp-hash-router
[@hyperapp/router]: https://www.npmjs.com/package/@hyperapp/router

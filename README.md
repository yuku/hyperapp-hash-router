# hyperapp-hash-router

[@hyperapp/router] compatible router library based on `location.hash`.

[Demo](https://yuku-t.com/hyperapp-hash-router/#/demo)

## Installation

If your project is using npm, you can install [hyperapp-hash-router] package by npm command:

```bash
npm install --save hyperapp-hash-router
```

### Distribution files
- **dist/index.js** - The CommonJS version of this package. (default)
- **dist/index.mjs** - The ES Modules version of this package.
- **dist/hyperapp-hash-router.js**, **dist/hyperapp-hash-router.min.js** - The UMD version of this package. This version exports itself to `window.hyperappHashRouter`.

### Usage
```js
import { Link, Route, Switch, Redirect, location } from "hyperapp-hash-router"
```

[hyperapp-hash-router] is compatible with [@hyperapp/router] so you can use these objects as described in [@hyperapp/router's README document](https://github.com/hyperapp/router#usage).

[hyperapp-hash-router]: https://www.npmjs.com/package/hyperapp-hash-router
[@hyperapp/router]: https://www.npmjs.com/package/@hyperapp/router

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dopplerhq/universal-import-core)

# @dopplerhq/universal-import-core

This package holds the core logic used to trigger the import flow.

### Installation

`npm install @dopplerhq/universal-import-core`

### Usage

First, import the `DopplerImport` into your project:

```js
import { trigger } from "@dopplerhq/universal-import-core";
```

Then call the `trigger()` function while providing an object with the `secretName` and `secretValue` properties:

import { trigger } from "@dopplerhq/universal-import-core";

```js
await trigger({ secretName: "STRIPE_KEY", secretValue: "sk_test_12345" });
```

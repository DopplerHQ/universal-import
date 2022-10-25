# @dopplerhq/universal-import-core

This package holds the core logic used to trigger the import flow.

### Installation

`npm install @dopplerhq/universal-import-core`

### Usage

First, import the `DopplerImport` into your project:

```js
import { DopplerImport } from "@dopplerhq/universal-import-core";
```

Then call the `trigger()` method while providing the `secretName` and `secretValue` properties:

```js
await DopplerImport.trigger({ secretName: "STRIPE_KEY", secretValue: "sk_test_12345" });
```

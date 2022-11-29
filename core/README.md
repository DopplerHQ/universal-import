![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dopplerhq/universal-import-core)

# @dopplerhq/universal-import-core

This package contains the core logic that is leveraged by the `@dopplerhq/universal-import-react` package. It is responsible for:

- Fetching the latest public encryption key
- Encrypting the payload with the public key via [sealed boxes](https://doc.libsodium.org/public-key_cryptography/sealed_boxes)
- Triggering the Universal Import flow so that the user can import the secret
- Exposing the `trigger` function to trigger the Universal Import flow without leveraging one of our frontend packages

### Installation

`npm install @dopplerhq/universal-import-core`

### Usage

Add the following to your code to leverage this package via the `trigger(...)` function:

```js
import { trigger } from "@dopplerhq/universal-import-core";
//...
await trigger({ secretName: "STRIPE_KEY", secretValue: "sk_test_12345" });
```

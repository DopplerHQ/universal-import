![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dopplerhq/universal-import-react)

# @dopplerhq/universal-import-react

This package exposes a React component that you can use to easily and securely import secrets into Doppler.

### Installation

`npm install @dopplerhq/universal-import-react`

### Usage

First, import the `DopplerImportButton` component into your project:

```jsx
import DopplerImportButton from "@dopplerhq/universal-import-react";
```

Then, render the button, providing the `secretName` and `secretValue` properties:

```jsx
<DopplerImportButton secretName="secret_name" secretValue="secret_value" />
```

# @doppler/import-button

## NPM scripts from the root of this repository

| NPM Script                    | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                 | Runs all builds in watch mode for interactive development                |
| `npm run clean`               | Removes all build artifacts                                              |
| `npm run build`               | Generates production builds for all workspaces                           |
| `npm run build:github-action` | Generates production builds for all workspaces (only for github actions) |

## Doppler CLI and ENV/Secret Injection

`VITE_DOPPLER_DASHBOARD_URL` must be set as an environment variable for the `react` package
`UNIVERSAL_IMPORT_KEYS_URL` must be set for post compilation replacement of static values in the `core` package.

This project leverages the doppler cli to retrieve those values from our `universal-import-button-build` project for the given environment

## How to use the universal import button (react)

In your react project run:
`npm install @dopplerhq/universal-import-react`

In your `.tsx` file where you want the import button:

```jsx
import DopplerImportButton from "@dopplerhq/universal-import-react";

...

return (
    <>
        <DopplerImportButton secretName={"secret_name"} secretValue={"secret_value"} />
    </>
)
```

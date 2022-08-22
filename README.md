# @dopplerhq/universal-import

This monorepo holds all Doppler Universal Import packages. Users will generally not want to consume this
directly - instead, you should install one of the following child packages:

- [@dopplerhq/universal-import-react](./react)

### Development scripts

These scripts are used for development of the Doppler Universal Import button components.

| NPM Script                    | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                 | Runs all builds in watch mode for interactive development                |
| `npm run clean`               | Removes all build artifacts                                              |
| `npm run build`               | Generates production builds for all workspaces                           |
| `npm run build:github-action` | Generates production builds for all workspaces (only for github actions) |

### Required environment variables

This project leverages the Doppler CLI to inject the following environment variables:

- `VITE_DOPPLER_DASHBOARD_URL` must be set as an environment variable for the `react` package.
- `UNIVERSAL_IMPORT_KEYS_URL` must be set for post compilation replacement of static values in the `core` package.

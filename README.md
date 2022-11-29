![Built & Published](https://github.com/DopplerHQ/universal-import/actions/workflows/build-and-publish.yaml/badge.svg)
![npm version](https://badgen.net/npm/v/@dopplerhq/universal-import-react)
![npm downloads](https://badgen.net/npm/dm/@dopplerhq/universal-import-react?icon=npm)

<div align="center">
    <a href="https://doppler.com?utm_campaign=github_repo&utm_medium=referral&utm_content=universal-import&utm_source=github">
        <img src="https://user-images.githubusercontent.com/2602652/202788801-0ed64dce-b645-4877-b748-6189186062cd.png" width="260" alt="Doppler">
    </a>
</div>

# Universal Import

Use Universal Import to push secrets directly to engineering services and production infrastructure with the click of a button.

Interested in becoming a Universal Import partner? Visit the [Universal Import Hub](https://www.doppler.com/import) for more information and to follow the download and installation steps. There you will also find additional information on how it works for the end user alongside FAQs.

# @dopplerhq/universal-import

This monorepo holds all Doppler Universal Import packages. Users will generally not want to consume this
directly - instead, you should install one of the following child packages:

### Core

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dopplerhq/universal-import-core)

- [@dopplerhq/universal-import-core](./core)

### React

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dopplerhq/universal-import-react)

- [@dopplerhq/universal-import-react](./react)

### Development scripts

These scripts are used for the development of the Doppler Universal Import button components.

| NPM Script                    | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                 | Runs all builds in watch mode for interactive development                |
| `npm run clean`               | Removes all build artifacts                                              |
| `npm run build`               | Generates production builds for all workspaces                           |
| `npm run build:github-action` | Generates production builds for all workspaces (only for github actions) |

### Required environment variables

This project leverages the Doppler CLI to inject the following environment variables:

- `DOPPLER_DASHBOARD_URL` must be set as an environment variable for the `core` package.
- `UNIVERSAL_IMPORT_KEYS_URL` must be set for post compilation replacement of static values in the `core` package.

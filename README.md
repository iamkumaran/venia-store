# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--{repo}--{owner}.hlx.page/
- Live: https://main--{repo}--{owner}.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `eds-react-starter-kit` directory in your favorite IDE and start coding :)

## Local development - React

For development mode, run the following command,
```sh
npm run start
```

Before committing files, run the following command to generate minified files,

```sh
npm run build
```

Note: Commit the minified files from the `/blocks/` folder.

## Creating Create Components:

To create components,

```sh
npm run add
```

or

```sh
npm run add <component-name>
```

eg, `npm run add address-form`


 - `component-name` - should be same as `block` name.


## Feature & Supports
1. pub/sub support to pass data between react app.
1. i18n support. (refer the sample docs and sheets for reference)
1. TypeScript to write React components.
1. Plop is used to generate React base component. Supports TypeScript or JavaScript.
1. Chunk option are enabled, so that `dynamic import` or `React.Lazy` works out of the box.
1. 

## Upcoming enhancements
1. Add Cypress
1. use Portal options

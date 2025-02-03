# patient-revue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

- Clone [svue-module Node project](https://github.com/tombattista/svue-module) to your local repos directory
- Clone [patient-revue Vue project](https://github.com/tombattista/patient-revue) to your local repos directory

```sh
npm install
```

## Running the application
- Make sure the [PatientReportAPI](https://github.com/tombattista/PatientReportApi.git) project is running.
- Follow the [README instructions](https://github.com/tombattista/svue-module/blob/main/README.md) for installing the svue-module project.
- Build the solution
  - Open Visual Studio developer terminal
  - Navigate into project directory: .../repos/patient-revue
  - Build and run the api in developer mode
  ```
  cd patient-revue
  npm run dev
  ```
- It should be running on port 3000

### Using svue

```sh
cd src/components
svue generate component NewComponentName
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---
permalink: /index.html
---
# Celula

## Development
To aid in the development of Celula, there are several tasks/scripts available to you via the command line; `yarn run [task]`

### build
The `build` task is a compound task. It runs the `prebuild`, `build:components`, and `build:styleguide` tasks, in that order. Ultimately this task runs the [prettier](https://prettier.io/), and [eslint](https://eslint.org/) fixes, then builds the component library and the documentation site ([Storybook](https://storybook.js.org/)).

TODO: Add `build:icons` to this task.

### build:components
The `build:components` task builds the component library.

### build:icons
The `build:icons` task uses [svg-sprite-generate](https://www.npmjs.com/package/svg-sprite-generator) to build the icon sprite used by the various icon components.

### build:styleguide
The `build:styleguide` task builds the styleguide documentation site ([Storybook](https://storybook.js.org/)).

### check
The `check` task runs the [eslint](https://eslint.org/) and [prettier](https://prettier.io/) checks. It does not fix any of the errors/warnings.

### lint:check
The `lint:check` task runs the [eslint](https://eslint.org/) checks. It does not fix any of the errors/warnings.

### lint:fix
The `lint:fix` task fixes any [eslint](https://eslint.org/) errors/warnings possible.

### optimize:icons
The `optimize:icons` task runs the [svgOptimize](https://github.com/STEMPremier/celula/blob/master/src/utils/svgOptimize.js) script. That script optimizes and normalizes all the [icons](https://github.com/STEMPremier/celula/tree/master/src/components/icon/icons), using [svgo](https://github.com/svg/svgo). This task should always be run before the `build:icons` task.

### prebuild
The `prebuild` task runs the [prettier](https://prettier.io/) and [eslint](https://eslint.org/) fix tasks.

### pretty:check
The `pretty:check` task runs the [prettier](https://prettier.io/) checks.  It does not fix any of the errors/warnings.

### pretty:fix
The `pretty:fix` task fixes any [prettier](https://prettier.io/) erros/warnings possible.

### start
The `start` task runs the documentation site ([Storybook](https://storybook.js.org/)) for devlopment.

### test
The `test` task runs the [jest](https://jestjs.io/docs/en/getting-started) tests, and generates a code coverage report.

### test:watch
The `test:watch` task runs the [jest](https://jestjs.io/docs/en/getting-started) tests, in [watch](https://jestjs.io/docs/en/cli#--watch) mode. Once running, you have several options:

- Press a to run all tests.
- Press f to run only failed tests.
- Press p to filter by a filename regex pattern.
- Press t to filter by a test name regex pattern.
- Press q to quit watch mode.
- Press Enter to trigger a test run.

And if the [snapshots](https://jestjs.io/docs/en/snapshot-testing) are out of date:

- Press u to update the snapshots.

### test:debug
The `test:debug` task runs the [jest](https://jestjs.io/docs/en/getting-started)  tests in debug mode. This is helpful if you need to see into other libs your tests might be 'using', such as a component from Semantic UI your component composes.

Once the test is complete, you will need to vist [chrome://inspect](chrome://inspect) in Google Chrome. You should see something that looks like this:

TODO: Add screenshot

Under 'Remote Target' click the `inspect` link to be taken to the debugger.

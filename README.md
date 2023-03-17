<div align="center">
  <h2>vue3-embedded-library-template</h2>
  <br /><br />
</div>

This template allows for writing projects that wants to embed a Vue app (hence packaging Vue with the library and not as a dependency) in their web projects.

<br />

## Project Setup
1. Clone this repo (ideally with [degit](https://npmjs.org/package/degit))
```bash
npx degit AndrewBastin/vue3-embedded-library-template <name_for_your_project>
```
2. Update the `package.json` entries (like `name`, `version`) to the values you want.
3. Search for `// TODO:` and make the changes that maybe required there.

<br />
<br />

## Things provided by this template
1. This templates provides 3 scripts: `build`, `lint` and `lintfix`.
    - `build` can build the library and emit the final output into the `dist` folder.
    - `lint` uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to verify formatting and simple code related mistakes (look into `.prettierrc.cjs` and `.eslintrc.cjs`)
    - `lintfix` also runs `lint` but, when it encounters auto-fixable issues, it will update the files and update it.
2. You can create a `public` folder on the root of the repo to store assets that should be directly copied to `dist`.
3. TypeScript support is present and can be configured in `tsconfig.json`)

<br />
<br />

## Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [VS Code ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

NOTE: These extensions are already included in the `.vscode` folder as Workspace Extension Recommendations.

<div align="center">
  <br /><br /><br />
  <b>happy hacking! ❤️</b>
</div>
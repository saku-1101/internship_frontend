# 🚀 Deploy @
https://master--population-frontend.netlify.app/

## 使用技術
 ⚡️ Vue 3, Vite 3, and yarn

 🎨 TailwindCSS and Sass

 ❤️ Use the new <script setup> syntax

 📈 Highchart

 🗾 RESAS(地域経済分析システム) API

 ⌨️ TypeScript

 👗 Code Styling with Eslint and Prettier

 ⚙️ Unit Testing with Vitest

 🚴🏻♀️ CI/CD with GitHub Actions

 🚀 Deploy on Netlify

 📡 Http request with axios

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Build Steps

1. create node_modules

```
npm i
```

2. Build and create the server

```
npm run dev
```

3. Execute Unit Test

```
npm run test
```

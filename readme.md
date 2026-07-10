# Electron boilerplate

> Electron + React + Vite + Mantine

---

<div align="center">
  <img alt="Stars" src="https://img.shields.io/github/stars/saulotarsobc/sc-electron-boilerplate.svg">
  <img alt="Forks" src="https://img.shields.io/github/forks/saulotarsobc/sc-electron-boilerplate.svg">
</div>

<div align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  <img alt="Version" src="https://img.shields.io/github/v/release/saulotarsobc/sc-electron-boilerplate.svg">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/saulotarsobc/sc-electron-boilerplate.svg">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/saulotarsobc/sc-electron-boilerplate.svg">
</div>

---

<!-- Badge Start -->
<div align="center">
 <img alt="static badge from mantine" src="https://img.shields.io/badge/Mantine-v9.4.1-339AF0?logo=mantine&logoColor=339AF0">
 <img alt="static badge from nodejs" src="https://img.shields.io/badge/NodeJS-v24.18.0-44883e?logo=nodedotjs&logoColor=44883e">
 <img alt="static badge from electronjs" src="https://img.shields.io/badge/ElectronJS-v42.5.1-E73D2F?logo=electron&logoColor=E73D2F">
 <img alt="static badge from electron builder" src="https://img.shields.io/badge/Electron%20Builder-v26.15.3-undefined?logo=electronbuilder&logoColor=undefined">
 <img alt="static badge from typescript" src="https://img.shields.io/badge/TypeScript-v5.9.3-blue?logo=typescript&logoColor=blue">
 <img alt="static badge from reactjs" src="https://img.shields.io/badge/ReactJS-v19.2.7-61DAFB?logo=react&logoColor=61DAFB">
 <img alt="static badge from vite" src="https://img.shields.io/badge/Vite-v7.3.6-9135FF?logo=vite&logoColor=9135FF">
</div>
<!-- Badge End -->

---

![banner](./demo/banner.png)

---

## What's inside

Demo pages that show what the stack can do out of the box:

- **Home** — animated hero with gradient headline, floating tech icons and stack cards (versions pulled from `package.json`);
- **Dashboard** — count-up stats, animated `RingProgress`, pure-CSS bar chart and activity timeline. Hit "Randomize data" and watch everything glide;
- **Showcase** — interactive playground for Mantine transitions, skeleton loading, loaders, hover effects and an animated modal;
- **System** — real Electron IPC: runtime versions, live memory/CPU polling every second and an IPC round-trip latency meter;
- **Gallery / Messages / Search / Profile / Settings** — everyday UI patterns with staggered entrance animations.

Under the hood: typed IPC bridge (`contextBridge` + shared types between main and renderer), shared CSS animation utilities (`src/styles/animations.css`), a `useCountUp` hook, and `prefers-reduced-motion` support everywhere.

---

## Help

- [Mantine](https://mantine.dev/)
- [Mantine Theme Editor - remoraid](https://remoraid.dev/)

## Getting Started

```bash
# Clone this repository
$ git clone https://github.com/saulotarsobc/sc-electron-boilerplate
# Go into the repository
$ cd sc-electron-boilerplate
# Install dependencies
$ npm install
# Run the app
$ npm run dev
```

---

## Available Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "preview": "vite preview",
    "build": "tsc && vite build",
    "lint": "eslint . --ext .ts,.tsx",
    "postinstall": "electron-builder install-app-deps",
    "update-readme": "tsx scripts/update-readme.js",
    "generate-electron-builder": "tsx scripts/generate-electron-builder.ts",
    "dist": "npm run generate-electron-builder && npm run build && electron-builder"
  }
}
```

## References

- [Electron Builder](https://www.electron.build/)
- [ElectronJS with NextJS](https://github.com/saulotarsobc/electronjs-with-nextjs)
- [Electron](https://www.electronjs.org/)
- [Vite](https://vite.dev/)
- [Como criar um app Electron usando Vite](https://dev.to/rafaelberaldo/como-criar-um-app-electron-usando-vite-52d6) - [@rfberaldo](https://github.com/rfberaldo)

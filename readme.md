# Electron boilerplate

> Electron + Vite + React

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
  <img alt="Issues" src="https://img.shields.io/github/issues/saulotarsobc/sc-electron-boilerplate.svg">
  <img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/saulotarsobc/sc-electron-boilerplate.svg">
  <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/saulotarsobc/sc-electron-boilerplate/.github/workflows/launch-app.yaml">
</div>

---

<!-- Badge Start -->
<div align="center">
 <img alt="static badge from nodejs" src="https://img.shields.io/badge/NodeJS-v24.13.0-44883e">
 <img alt="static badge from electronjs" src="https://img.shields.io/badge/ElectronJS-v41.0.2-46816e">
 <img alt="static badge from electron builder" src="https://img.shields.io/badge/Electron%20Builder-v26.8.1-blue">
 <img alt="static badge from typescript" src="https://img.shields.io/badge/TypeScript-v5.9.3-blue">
 <img alt="static badge from reactjs" src="https://img.shields.io/badge/ReactJS-v19.2.4-61DAFB">
</div>
<!-- Badge End -->

---

![banner](./demo/banner.png)

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
$ bun install
# Run the app
$ bun run dev
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
    "dist": "bun run generate-electron-builder && bun run build && electron-builder"
  }
}
```

---

## References

- [Electron Builder](https://www.electron.build/)
- [ElectronJS with NextJS](https://github.com/saulotarsobc/electronjs-with-nextjs)
- [Electron](https://www.electronjs.org/)
- [Vite](https://vite.dev/)
- [Como criar um app Electron usando Vite](https://dev.to/rafaelberaldo/como-criar-um-app-electron-usando-vite-52d6) - [@rfberaldo](https://github.com/rfberaldo)

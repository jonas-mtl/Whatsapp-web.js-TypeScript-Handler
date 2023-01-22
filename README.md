<h1 align="center">
  <img alt="logo" src="https://user-images.githubusercontent.com/98329976/213940009-0fee9ef6-2ea6-4b4c-93ac-2d6b5cb7ea7b.png" width="224px"/><br/>
  Minimalistic Whatsapp-web.js TypeScript Handler 
</h1>
<p align="center">Simple system for <b>Whatsapp-web.js</b> completely wtitten in <b>TypeScript</b> ~ Made by Jonas</p>

<p align="center">
<a href="https://github.com/JonasThierbach/Whatsapp-web.js-TypeScript-Handler/fork"><img src="https://img.shields.io/github/forks/jonas-mtl/Whatsapp-web.js-TypeScript-Handler?style=for-the-badge" alt="Fork Repo" /></a>
<a href="https://nodejs.org/en/download/">
   <img src="https://img.shields.io/badge/node-16.16.x-brightgreen?style=for-the-badge" alt="node.js">
</a>
</p>

<p align="center">
<img src="https://img.shields.io/github/stars/jonas-mtl?style=for-the-badge" alt="Github Stars" />
<a href="https://discord.gg/uTCqcvC5Xf"><img src="https://img.shields.io/discord/989513288243097650?label=Personal%20Discord&style=for-the-badge" alt="Personal Discord" /></a>
</p>

## ⚡️ Features

- [x] Functions Handler
- [x] File System

## 📝 Installation Guide

- You will need to install the TypeScript compiler either globally or in your workspace to transpile TypeScript source code to JavaScript:
  - [`download Guide`](https://www.typescriptlang.org/download) — `npm install -g typescript@lastest` **Version 4.7.x +**.
- Adjust the settings in `./src/config.ts` so everything suits you:
- Install all dependencies by using `npm install`
- To run the bot:
  - build first with `npm run build` / `tsc` >> start the bot with `npm run start` (to start once) / `npm run nodemon` (to restart automatically on build) - you will need to `npm install -g nodemon`

## ⚙️ Commands & Event Options

## Functions:

### `Structure`

```ts
name: string;
execute: (...args: any[], client) => any;
```

| Option | Description                                                               | Type   | Default | Required? |
| ------ | ------------------------------------------------------------------------- | ------ | ------- | --------- |
| `name` | Event name, for example: .on('<b>ready</b>')                            | `string` | | Yes        |
| `execute` | Code being executed on Event |  |  | Yes        |

---

## ⭐️ Made by Jonas#1713

### If you want to say **thank you** or/and support active development of the Handler:

- Add a **[GitHub Star](https://github.com/jonas-mtl/Whatsapp-web.js-TypeScript-Handler)** to the project.
- Please give proper credits when you use the Handler, especially if you want to edit and post to public.

<a href="https://www.producthunt.com/posts/create-go-app?utm_source=badge-review&utm_medium=badge&utm_souce=badge-create-go-app#discussion-body" target="_blank"><img src="https://discord.c99.nl/widget/theme-3/783252406753689601.png" alt="Discord Profile"  /></a>

## ⚠️ License

The Minimalistic Discord.js v14 TypeScript Handler is available under the **MIT License**

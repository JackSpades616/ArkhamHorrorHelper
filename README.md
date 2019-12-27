## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/JackSpades616/ArkhamHorrorHelper/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/JackSpades616/ArkhamHorrorHelper/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
# ArkhamHorrorHelper


## Spielkomponenten
- ### Spielablauf
    - Aktionsphase
    - Monsterphase
    - Begegnungsphase
    - Mythosphase
- ### Szenario
    - Anzahl Ermittler
    - Szenarioname
    - Startfeld
    - Racheeffekt
    - Stadtviertel
    - Stadtfeld
    - Monsterstapel
    - Mythosquelle
    - Startmonster
    - Startverderben
    - Starthinweise
    - Archiv
    - Kodex
    - Letzte Aufbauschritte
    - Anomaliestapel
    - Auslage
- ### Spieler
  - Name
  - Beruf
  - Primärrolle
  - Sekundärrolle
  - Spezialfähigkeit
  - Fokuslimit
  - Startausrüstung
  - Leben
  - Verstand
  - Geld
  - Fragmente
  - Fokus
  - Hinweise
  - Schaden
  - Horror
  - Skills (Wissen, Einfluss, Wahrnehmung, Stärke, Willenskraft)
- ### Monster
    - Name
    - Typ und Subtyp
    - Erscheinungstext
    - Aktivierungstext
    - Geschwindigkeit
    - Schaden und Horror
    - Leben
    - Stärkemodifikator
    - Wahrnehmungsmodifikator
    - Fragment
    - Status (Kampfbereit, Erschöpft, Im Kampf)
    - Jäger und Patrouille --> Zielfeld od. Beute (Zielermittler)
- ### Gegenstände
    - Name
    - 
- ### Verbündete

- ### Zauber

- ### Zustände
---
- ## Grundlagen
- ### Proben
    - Anzahl Fertigkeit
    - Modifikation durch Gegenstände, Verbündete, Zauber, Zustände usw.
    - Modifikation durch Monster
    - Proben modifizieren (Hinweis-und/oder Fokusmarker)
- ### Schaden und Horror


# Vue
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Electron-Vue
<div align="center">
<br>
<img width="500" src="/docs/images/logo.png" alt="electron-vue">
<br>
<br>
</div>

<p align="center" color="#6a737d">
The boilerplate for making electron applications built with vue (pretty much what it sounds like).
</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)
</div>

## Overview

The aim of this project is to remove the need of manually setting up electron apps using vue. electron-vue takes advantage of `vue-cli` for scaffolding, `webpack` with `vue-loader`, `electron-packager` or `electron-builder`, and some of the most used plugins like `vue-router`, `vuex`, and so much more.

#### Check out the detailed documentation [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

Things you'll find in this boilerplate...

* Basic project structure with a **single** `package.json` setup
* Detailed [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/)
* Project scaffolding using [vue-cli](https://github.com/vuejs/vue-cli)
* Ready to use Vue plugins \([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex)\)\*
* Installed [vue-devtools](https://github.com/vuejs/vue-devtools) and [devtron](https://github.com/electron/devtron) tools for development
* Ability to easily package your electron app using [electron-packager](https://github.com/electron-userland/electron-packager) or [electron-builder](https://github.com/electron-userland/electron-builder)\*
* `appveyor.yml` and `.travis.yml` configurations for automated deployments with [electron-builder](https://github.com/electron-userland/electron-builder)\*
* Ability to produce web output for browsers
* Handy [NPM scripts](https://simulatedgreg.gitbooks.io/electron-vue/content/en/npm_scripts.html)
* Use of [webpack](https://github.com/webpack/webpack) and [vue-loader](https://github.com/vuejs/vue-loader) with Hot Module Replacement
* Process restarting when working in main process
* HTML/CSS/JS pre-processor support with [vue-loader](https://github.com/vuejs/vue-loader/)
* ES6 with [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) by default
* Use of [`babili`](https://github.com/babel/babili) to remove the need of transpiling completely down to ES5
* ESLint \(with support for [`standard`](https://github.com/feross/standard) and [`airbnb-base`](https://github.com/airbnb/javascript)\)\*
* Unit Testing \(with Karma + Mocha\)\*
* End-to-end Testing \(with Spectron + Mocha\)\*

\*Customizable during vue-cli scaffolding

### Getting Started

This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app. The use of `node@^7` or higher required. electron-vue also officially recommends the [`yarn`](https://yarnpkg.org) package manager as it handles dependencies much better and can help reduce final build size with `yarn clean`.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```

##### Are you a Windows User?

Make sure to check out [**A Note for Windows Users**](https://simulatedgreg.gitbooks.io/electron-vue/content/en/getting_started.html#a-note-for-windows-users) to make sure you have all the necessary build tools needed for electron and other dependencies.

##### Wanting to use Vue 1?

Just point to the `1.0` branch. Please note that electron-vue has officially deprecated the usage of `vue@^1`, so project structure, features, and documentation will reflect those changes ([**legacy documentation**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs)).

```bash
vue init simulatedgreg/electron-vue#1.0 my-project
```

### Next Steps

Make sure to take a look at the [documentation](https://simulatedgreg.gitbooks.io/electron-vue/content/). Here you will find useful information about configuration, project structure, and building your app. There's also a handy [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/en/faqs.html) section.


## Made with electron-vue
Take a look at some of the amazing projects built with electron-vue. Want to have your own project listed? Feel free add your project to the bottom of the list below then submit a pull request.

* [**Surfbird**](https://github.com/surfbirdapp/surfbird): A Twitter client built on Electron and Vue
* [**Lulumi-browser**](https://github.com/qazbnm456/lulumi-browser): Lulumi-browser is a light weight browser coded with Vue.js 2 and Electron
* [**Space-Snake**](https://github.com/ilyagru/Space-Snake): A Desktop game built with Electron and Vue.js.
* [**Forrest**](https://github.com/stefanjudis/forrest): An npm scripts desktop client
* [**miikun**](https://github.com/hiro0218/miikun): A Simple Markdown Editor
* [**Dakika**](https://github.com/raj347/Dakika): A minute taking application that makes writing minutes a breeze
* [**Dynamoc**](https://github.com/ieiayaobb/dynamoc): Dynamoc is a GUI client for dynamodb-local, dynalite and AWS dynamodb
* [**Dockeron**](https://github.com/dockeron/dockeron): A dockeron project, built on Electron + Vue.js for Docker
* [**Easysubs**](https://github.com/matiastucci/easysubs): Download subtitles in a very fast and simple way
* [**adminScheduler**](https://github.com/danieltoorani/adminScheduler): An application leveraging electron for cross platform compatibility, Vue.js for lightning fast UI and full-calendar.io to deliver a premium calendar interface.
* [**Backlog**](https://github.com/czytelny/backlog): Simple app for storing TODOs, ideas or backlog items. You can organize them with boards. Sleek flow. Built with Electron + Vue.js + iView
* [**Opshell**](https://github.com/ricktbaker/opshell): Ops tool to make life easier working with AWS instances.
* [**GitHoard**](https://github.com/jojobyte/githoard): Hoard git repositories with ease.
* [**Data-curator**](https://github.com/ODIQueensland/data-curator): Share usable open data.
* [**Bookmark**](https://github.com/mrgodhani/bookmark): Desktop app to manage bookmarked links using Atom Electron and Vue.js
* [**Uber Run**](https://github.com/break-enter/uberrun): Simple automation desktop app to download and organize your tax invoices from Uber.
* [**Netsix**](https://github.com/pulsardev/netsix): Share videos with your friends in a real peer-to-peer manner using WebRTC.
* [**code-notes**](https://github.com/lauthieb/code-notes): A simple code snippet manager for developers built with Electron & Vue.js.
* [**Pomotroid**](https://github.com/Splode/pomotroid): A simple and visually-pleasing Pomodoro timer
* [**MarkText**](https://github.com/marktext/marktext): Mark Text is a realtime Markdown Editor.
* [**vue-design**](https://github.com/L-Chris/vue-design): the best website visualization builder with Vue and Electron
* [**ImapSync Client**](https://github.com/ridaamirini/ImapSyncClient): It's only an Internet Message Access Protocol Synchronization Client
* [**Hve**](https://github.com/hellohve/hve): A static blog client tool you may like.
* [**MarkdownFox**](https://github.com/lx4r/markdownfox): A simple Markdown viewer with auto update and PDF export.
* [**Smart DOCSE**](https://github.com/shirshak55/smart-docse): A generic app which ability to display news, contact etc.
* [**Cleaver**](https://getcleaver.com/): Cleaver helps you provision servers ready for deploying your web apps with zero downtime - for free!
* [**XPanel**](https://github.com/krustnic/xpanel): XAMPP control panel alternative built with Electron & Vue.js
* [**Hexo-Client**](https://github.com/gaoyoubo/hexo-client): A hexo client powered by electron-vue.
* [**YT.Downloader**](https://github.com/myazarc/ytdownloader): Youtube Video Downloader&Converter and Play Music, built with Electron & Vue.js.
* [**BMFont-JS**](https://github.com/elisaday/bmfont-js): BMFont-js is a bitmap font generator, built with Electron & Vue.js.
* [**YouGet**](https://github.com/ahmetzeybek/YouGet): YouGet - YouTube Video/Playlist Downloader/Cutter - MP3 Converter
* [**Asar UI**](https://github.com/myazarc/AsarUI): UI for Asar Pack, built with Electron & Vue.js.
* [**Leeze**](https://github.com/dayinji/Leeze): A Receipt Record App, built with Electron & Vue.js.

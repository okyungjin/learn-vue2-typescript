# Table of Contents
- [Table of Contents](#table-of-contents)
- [About Project](#about-project)
  - [소개](#소개)
  - [Presets](#presets)
- [Build Setup](#build-setup)
- [Dev Notes](#dev-notes)
  - [클래스 문법을 권장하지 않는 이유](#클래스-문법을-권장하지-않는-이유)
# About Project
## 소개
Learn Vue.js + TypeScript

## Presets
<img width="737" alt="스크린샷 2022-04-21 오후 4 10 34" src="https://user-images.githubusercontent.com/31913666/164401228-a38f2e48-385d-4671-b2c5-bff7c1f56946.png">


# Build Setup
```bash
# Project setup
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```
# Dev Notes
## 클래스 문법을 권장하지 않는 이유
다음 자료들에 따르면 Class API 보다 Function-base Component 사용을 권장하고 있다.

- https://github.com/vuejs/rfcs/pull/17
- https://github.com/vuejs/rfcs/pull/42
- https://github.com/vuejs/rfcs/issues/63

`vue-property-decorator` 를 사용하는 것보다 extends 문법을 사용하는 방향으로 프로젝트를 진행할 예정이다.



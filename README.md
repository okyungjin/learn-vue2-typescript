# Table of Contents
- [Table of Contents](#table-of-contents)
- [About Project](#about-project)
  - [소개](#소개)
  - [Presets](#presets)
- [Build Setup](#build-setup)
- [Dev Notes](#dev-notes)
  - [클래스 문법을 권장하지 않는 이유](#클래스-문법을-권장하지-않는-이유)
  - [Input Event 처리하는 방법](#input-event-처리하는-방법)
    - [1) if로 check](#1-if로-check)
    - [2) Type Assertion 사용](#2-type-assertion-사용)
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

## Input Event 처리하는 방법
`evt.target` 값이 null이 아닌지 보장하려면 다음 두 방법을 사용할 수 있다.
**가급적 1번 방법을 사용하는 것이 좋다.**
### 1) if로 check
```ts
onInputChanged(evt: InputEvent): void {
  if (!evt.target.value)
    return
  this.$emit('input', evtTarget.value);
},
```
### 2) Type Assertion 사용
```ts
onInputChanged(evt: InputEvent): void {
  const evtTarget = evt.target as HTMLInputElement; // type assertion
  this.$emit('input', evtTarget.value);
},
```

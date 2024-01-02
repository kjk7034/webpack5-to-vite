# Webpack5 를 vite로 변경하기

[udemy-webpack-5-ninja](https://github.com/kjk7034/udemy-webpack-5-ninja)에서 수강한 코드를 그대로 vite로 변경해 보는 작업을 진행하려고 함.

## 계획 및 진행과정

- [O] webpack 프로젝트 vite로 변경하기 1 (React 플러그인 사용 - ViteWithReactBasicSetup)
- [O] webpack 프로젝트 vite로 변경하기 2 (React 플러그인 제거)
- [ ] webpack to vite Migration
- [ ] ModuleFederationPlugin 관련 프로젝트 vite로 변경하기

## webpack 프로젝트 vite로 변경하기 1

webpack config에 있는 내용만 옮기려 했으나, react 플러그인 적용 유무의 차이도 같이 보려고 나눠서 진행하기로 함.

- 변경 전 소스 : https://github.com/kjk7034/udemy-webpack-5-ninja/tree/main/10.1%20React_project_BasicSetup
- 작업한 소스 : ViteWithReactBasicSetup

### 작업 과정

1. `yarn create vite`을 통해서 프로젝트 생성 후 작업 파일들 이동 (샘플 파일의 코드로 react/javascript로 설치)
2. 필요한 패키지들 설치 및 동작 확인
3. asset 관련 경로 수정

### 작업 후기

- `@vitejs/plugin-react`을 이용하니 편하게 사용하게 됨.

## webpack 프로젝트 vite로 변경하기 2

### 작업 과정

1. `yarn create vite`을 통해서 프로젝트 생성 (Vanilla/javascript로 설치)
2. `fortawesome, react, react-dom, react-router-dom, eslint, sass`등을 설치
3. ViteWithReactBasicSetup에서 작업한 파일을 이동
4. index.html에서 src 경로 수정

### 작업 후기

- `@vitejs/plugin-react`이 없어도 잘 동작함.
- create vite를 이용하면 기존 결과물보다 쉽게 프로젝트 설정이 가능하지만, 내가 얻고 싶은 경험은 아니어서 webpack 프로젝트를 그대로 가져와서 vite로 migration 해보기로 ...

## bookmark 링크

진행하면서 검색한 내용 중 추후 참고할 만한 링크들

- [webpack-vite-migration](https://www.sitepoint.com/webpack-vite-migration/)

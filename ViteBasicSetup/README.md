## webpack 프로젝트 vite로 변경하기 2

### 작업 과정

1. `yarn create vite`을 통해서 프로젝트 생성 (Vanilla/javascript로 설치)
2. `fortawesome, react, react-dom, react-router-dom, eslint, sass`등을 설치
3. ViteWithReactBasicSetup에서 작업한 파일을 이동
4. index.html에서 src 경로 수정

### 느낀점

create vite를 이용하면 기존 결과물보다 쉽게 프로젝트 설정이 가능했지만, 
얻고 싶은 경험은 아니어서 webpack 프로젝트를 그대로 가져와서 vite로 migration 해보기로 ... (WebpackToViteMigration에서 진행)
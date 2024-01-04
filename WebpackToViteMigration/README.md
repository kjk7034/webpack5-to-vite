## webpack to vite Migration

## 작업 과정

1. `yarn add vite -D` 추가
2. 기존 webpack 패키지들 삭제
3. package.json scripts 관련 vite로 변경
4. 기존 작업과 큰 차이점은 없었음. (js->jsx, require 제거 등...)
5. assets 복사를 위해서 viteStaticCopy 적용

### 느낀점

assets 복사를 위해서 viteStaticCopy을 적용한 내용 이외, 기존 작업과 큰 차이점을 느끼지는 못함. 

### 참고자료

- [webpack-vite-migration](https://www.sitepoint.com/webpack-vite-migration/)
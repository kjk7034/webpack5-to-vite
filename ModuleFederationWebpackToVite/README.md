## ModuleFederationPlugin 관련 프로젝트 vite로 변경하기

### 작업 과정

[11.3 MF_Project_State_Management](https://github.com/kjk7034/udemy-webpack-5-ninja/tree/main/11.3%20MF_Project_State_Management) 코드 사용

1. `yarn create vite`으로 react/javascript로 프로젝트 생성
2. 각 프로젝트 별 11.3 MF_Project_State_Management 코드 이동
3. 각 프로젝트 별 환경에 맞게 코드 수정
4. `@originjs/vite-plugin-federation` 적용하기.
5. 각 프로젝트 yarn으로 된 내용이 불편해서 pnpm으로 변경함.

### Running

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install`, then `pnpm run build` and `pnpm run serve`. 

- MovieApp(HOST): [localhost:9000](http://localhost:9000/)
- HomePageApp: [localhost:3000](http://localhost:3000/)
- DetailsPageApp: [localhost:3001](http://localhost:3001/)
- ReactComponents: [localhost:3002](http://localhost:3002/)
- SeatSelectionApp: [localhost:3003](http://localhost:3003/)
- MF_Server: [localhost:5555](http://localhost:5555/)

### 작업 후기

- 빌드 시 target 추가가 필요함. (`build target: 'esnext'`)
- 신규 설치한 lint 환경이 가져온 프로젝트와 달라서 추가 작업이 필요헀음.
- nextjs 환경으로도 구성하려고 했으나 다른 샘플로 추후 진행하기로 함.

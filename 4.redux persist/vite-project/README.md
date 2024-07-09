<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

[1.프로젝트생성]
1. Node.js 설치 되어 있어야 함.
2. 터미널 입력
   1) npm create vite@latest 
      (또는 npm create vite@버전번호)
* vite 사용이유 : 빠른 빌드툴
3. 터미널 입력
   cd vite-project(프로젝트명)
   npm install
   npm run dev
4. 경로 alias 설정
   "!@#":path.resolve(__dirname,"./src")

[3.redux]
1. 라이브러리 설치
   1) npm install redux
   2) npm install react-redux
2. AuthReducer.jsx / AuthAction.jsx 생성
3. RootReducer.jsx 생성
4. Store.jsx 생성
   1) legacy_createStore
5. main.jsx
   1) Provider 추가
6. 조회 시 useSelector
7. 수정 시 dispatch

[4. redux-persist]
1. 라이브러리 설치
   1) npm install redux-persist
2. RootReducer.jsx 수정
   1) persistConfig
   2) cookies :: 더 작고 모든 HTTP 요청과함께 서버 정보를 다시 전달해주지만 
      LocalStorage :: 더 크고 클라이언트 측에 정보를 보유할 수 있습니다.
3. StorePersist.jsx 생성
4. main.jsx 아래 추가
   <PersistGate persistor={persistor}>
5. 크롬 F12(개발자도구) > 어플리케이션 > 로컬스토리지(좌측) 토글 열고 > localhost:3000 확인 시 저장되어 있음.
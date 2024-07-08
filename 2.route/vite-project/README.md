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

[2. route]
1. react-router-dom 설치
   1) npm install react-router-dom --save 
   2) '--save'옵션을 통해 'package.json'에 설치된 패키지의 이름과 버전 정보를 업데이트 할 수 있도록 한다.
2. main.jsx
   1) import { BrowserRouter } from "react-router-dom";
   2) <BrowserRouter>
3. App.jsx
   1) Routes :: 6.0버전(신버전)<Routes><Route/><Route/></Routes>
   2) Router :: 5.x버전(구버전)<Router><Route/><Route/></Router>
4. redirect 컴포넌트 (NavLink, Navigate, useNavigate)
   1) NavLink vs Navigate
      (1) NavLink: 내비게이션 링크를 생성하며, 현재 경로와 일치할 때 활성화 상태로 스타일링할 수 있다.
      (2) Navigate: 특정 경로로 리디렉션할 때 사용되며, 리디렉션 시 추가적인 상태를 전달할 수 있다.(state 전달 가능)
   2) Navigate vs useNavigate
      (1) Navigate :: 컴포넌트 형식으로 redirect 할 때
          <Navigate to={"/login"} replace></Navigate>
         * replace 쓸 경우! 이전 페이지로 돌아갈 때 리다이렉트된 페이지를 건너뛰도록 하기 위함.
      (2) useNavigate :: 함수형식으로 redirect 할때
         const handleSignup = () => {navigate('/');}
         
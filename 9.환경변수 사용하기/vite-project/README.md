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

[9.환경변수사용하기]
1. .env.development와 .env.production 작성
2. package.json 작성
   1) "dev": "vite --port 3001 --mode development",
   2) "prod": "vite --port 4001 --mode production",
   3) "build": "vite build --mode production",
3. 실행하기
   1) npm run dev 실행 시 >> 3001포트의 개발모드
   2) npm run prod 실행 시 >> 4001포트의 운영모드
   3) npm run build 실행 시 >> 운영모드로 빌드
3. package.json 에서 사용하기
   1) env.VITE_PROXY_URL
4. js 파일에서 사용하기(App.jsx)
   1) const envName = import.meta.env.VITE_ENV_NANE;

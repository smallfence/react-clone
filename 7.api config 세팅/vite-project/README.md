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

[7.axios config 설정]
1. 참고 사이트
https://yamoo9.github.io/axios/guide/config-defaults.html#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EC%9D%98-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95
2. Axios.jsx 
   1) axios 글로벌 설정.
      (1) axios.defaults.withCredentials = true;
         요청 시 클라이언트에 저장된 쿠키나 자격 증명이 포함
      (2) axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
         요청 본문을 JSON 형식으로 보내겠다는 의미
      (3) axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
         이 설정은 CORS(Cross-Origin Resource Sharing) 정책과 관련된 헤더로, 모든 도메인에서의 접근을 허용하도록 합니다.
         일반적으로 클라이언트 측에서 설정할 필요는 없으며, 서버 측에서 설정됩니다.
         클라이언트 측에서 설정해도 실제로는 브라우저가 이를 무시하므로, 이 설정은 의미가 없습니다. 서버 측에서 설정해야 효과가 있습니다.
      (4) axios.defaults.timeout = 20000;
         요청이 20초 안에 완료되지 않으면 요청이 자동으로 취소됩니다.
   2) axios의 Instance 생성
   3) 요청 interceptor
   4) 응답 interceptor
   
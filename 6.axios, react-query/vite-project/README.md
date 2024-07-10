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

[6-1. mock 서버 생성]
1. postman 어플 -> mock 서버 생성(나는 https://525a1922-2574-42f5-9692-3b0eaa739531.mock.pstmn.io 라는 서버 생성됨)

[6-2. axios 사용]
1. npm install axios
2. vite.config.js 프록시 설정
   1) /wowow 로 맵핑
3. TestApi.jsx 작성
4. App.jsx 작성

[6-2. react-query]
1. 🙌 「if(kakao)2021 - 카카오페이 프론트엔드 개발자들이 React Query를 선택한 이유」 세줄요약 🤟
   1) React Query는 React Application에서 서버 상태를 불러오고, 캐싱하며, 지속적으로 동기화하고 업데이트하는 작업을 도와주는 라이브러리입니다.
   2) 복잡하고 장황한 코드가 필요한 다른 데이터 불러오기 방식과 달리 React Component 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.
   3) 더 나아가 React Query에서 제공하는 캐싱, Window Focus Refetching 등 다양한 기능을 활용하여 API 요청과 관련된 번잡한 작업 없이 “핵심 로직”에 집중할 수 있습니다.
2.  GET 에는 useQuery가, PUT, UPDATE, DELETE에는 useMutation이 사용된다.
3. 사용법
   1) npm install react-query
   2) 초기세팅 : main.jsx <QueryClientProvider client={queryClient}>
   3) TestApi.jsx 작성
   4) App.jsx 작성

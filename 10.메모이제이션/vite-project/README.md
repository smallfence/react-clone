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

[10.메모이제이션]
1. 간단 정의
   메모리에 저장해두고 값 변화 등에 따라 리랜더링 최소화
2. 함수
   memo : props 체크 필요 시
   useMemo : 객체변수에게 감싸기
   useCallBack : 함수에게 감싸기
3. 메모이제이션 적용할 곳 찾는 순서
   1) 부모 랜더링 시 -> 자식도 랜더링됨.
      부모컴포넌트 랜더링 시, 굳이 자식컴포넌트 랜더링 안되도 되는 것들 찾음.
   2) 자식에게 memo 걸고 
   3) 부모쪽 props에게 함수면 useCallBack / 객체변수면 useMemo 걸기

4. 프로파일러
   1) 크롬 확장자 - react dev tools 설치
   2) 녹화 / 종료 버튼으로 컴포넌트의 실행시간 체크


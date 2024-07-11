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

[8.kendo]
1. 설명
   1) telerik 에서 만든 ui 라이브러리입니다.
2. 사용법
   1) kendo-ui-license.txt 프로젝트 바로 밑에 생성
      * 유료 or 30일무료 이기 때문에... 일단 회사 거 복붙해옴
   2) 라이센스 초기화를 위한 패키지 설치
      npm install --save @progress/kendo-licensing
   3) 라이센스 활성화
      npx kendo-ui-license activate
   4) 라이브러리 다운
      npm install --save @progress/kendo-react-grid @progress/kendo-react-buttons
   5) App.jsx에 마음껏 사용
3. kendo 국제화 사용방법
   1) npm install --save @progress/kendo-react-intl
      KendoReact 라이브러리에서 국제화 기능을 사용하기 위해 필요한 모듈을 임포트하는 구문입니다. @progress/kendo-react-intl 패키지는 KendoReact 컴포넌트의 날짜와 숫자 형식 지정 및    로컬라이제이션을 지원합니다.
   2) npm install --save cldr-core cldr-dates-full cldr-numbers-full
      다양한 언어와 문화권에 대한 로케일 데이터를 제공합니다. 이러한 데이터는 날짜, 숫자, 통화, 시간대 등의 형식을 처리할 때 유용합니다.
   3) config/kendo/lanuage.json 생성
   4) main.jsx 수정
      (1) load
      (2) loadMessages
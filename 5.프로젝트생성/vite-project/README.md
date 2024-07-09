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

[5. context]
1. 사용이유. props 지옥 벗어남.
2. redux vs context
   규모와 복잡도: 애플리케이션의 규모와 복잡도가 클수록 Redux를 고려하는 것이 좋습니다. Redux는 복잡한 데이터 흐름과 상태 관리를 효과적으로 다룹니다.
   간단한 상태 관리: 단순한 상태 전달이나 로컬 상태 관리가 필요한 경우에는 Context API가 더 간단하고 적합할 수 있습니다.
   개발자 경험: Redux는 초기 설정과 사용법이 더 복잡할 수 있지만, 강력한 도구와 예측 가능한 상태 관리를 제공하여 큰 규모의 애플리케이션에서 유리합니다. Context API는 React에 기본 내장된 기능이므로 초기 설정과 학습 곡선이 낮고 간단한 상황에서 더 적합할 수 있습니다.
3. 사용 패턴1
   1) parent컴포넌트 측(App.jsx)
      (1) const ClickContext = createContext();
      (2) <ClickContext.Provider value={{count,setCount}}>
   2) grandChild 컴포넌트 측(App.jsx)
      (1) const { count, setCount } = useContext(ClickContext);

4. 사용 패턴2
   1) parent 컴포넌트 측(ModalContext.jsx 생성)
      (1) export const modalContext = createContext(null);
      (2) return <modalContext.Provider>
   2) grandChild 컴포넌트 측
      (1) main.jsx 에 감쌈 (main.jsx)
      (2) useContext 사용 (App2.jsx)

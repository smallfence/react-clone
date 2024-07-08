import { Fragment, useState } from 'react'
// import '!@#/App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import PageNotFound from "!@#/component/pageNotFound/PageNotFound.jsx";
import Login from "!@#/component/login/Login.jsx";
import MainWrapperView from "!@#/view/MainWrapperView.jsx";
function App() {
  // 추후에 redux로 수정
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Fragment>
      {isLogin 
      ? null
      : <Navigate replace to={"/login"}></Navigate>}

      {isLogin ? 
      <Routes>
        <Route path={"/login"} element={<Navigate replace to={"/"} />} />
        <Route path={"/*"} element={<MainWrapperView isLogin={isLogin} setIsLogin={setIsLogin} />}/>
      </Routes> 
      : <Routes>
        <Route path={"/login"} element={<Login setIsLogin={setIsLogin}/>}/>
        <Route path={"/*"} element={<Navigate replace to={"/login"} />} />
        {/* <Route path={"/*"} element={<PageNotFound />}/>  */}
      </Routes>}
    </Fragment>
  )
}



export default App

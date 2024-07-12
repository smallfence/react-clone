import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {login, logout} from "!@#/redux/action/AuthAction.jsx";

function App() {
  // 조회 시 useSelector
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  // 수정 시 dispatch
  const dispatch = useDispatch();

  const LoginOnClick = () => {
    //api 조회 했다 치고...
    const apiResult = {name:"홍길동", age:88};
    const 액션 = login(apiResult);
    dispatch(액션);
  }
  const LogoutOnClick = () => {
    const 액션 = logout();
    dispatch(액션);
  }

  return (
    <div>
      안녕하세요 {auth?.user?.name}님.
      <button onClick={LoginOnClick}>로그인ㄱㄱ</button>
      <button onClick={LogoutOnClick}>로그아웃ㄱㄱ</button>
      <p>영구저장 잘되나요?</p>
    </div>
  )
}

export default App

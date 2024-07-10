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
      <p>만약 새로고침 한다면, 정보가 날아갑니다. 이를 persist하게 저장하는 방법은 다음에</p>
    </div>
  )
}

export default App

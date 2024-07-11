import { useState } from 'react';
import {postTestAxios, TestApi} from "!@#/TestApi.jsx";

function App() {
  //방법1
  const [apiResult, setApiResult] = useState("");
  const searchHandle = async (event) => {
    const payload = {};
    const apiRes = await postTestAxios(payload);
    setApiResult(JSON.stringify(apiRes?.data));
  };

  //방법2
  const [apiResult2, setApiResult2] = useState("");
  const { postTestMutation } = TestApi();
  const searchHandle2 = async (event) => {
    const payload = {};
    const apiRes = await postTestMutation.mutateAsync(payload);
    setApiResult2(JSON.stringify(apiRes?.data));
  };
  
  return (
    <div>
      <button onClick={searchHandle}>api 조회(axios)</button>
      <p>axios 결과 : {apiResult}</p>
      <button onClick={searchHandle2}>api 조회(mutation + axios)</button>
      <p>mutation + axios 결과 : {apiResult2}</p>
    </div>
  )
}

export default App;
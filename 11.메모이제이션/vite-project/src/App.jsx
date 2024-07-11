import { useState, memo, useMemo, useCallback } from 'react';
import Child from '!@#/Child';
function App() {
  console.log("부모 실행");

  const [parentAge, setParentAge] = useState(30);
  // useState는 마운트 시점 1회만 랜더링 되므로 상관없음.
  const [childAge, setChildAge] = useState({age:10});
  // 변수의 재랜더링을 컨트롤하는 useMemo
  const childName = useMemo(()=>{
    return {name:"홍길동"}
  }, []);
  // 함수의 재랜더링을 컨트롤하는 useCallBack
  const sayAny= useCallback( () => {
    console.log("hahaha");
  }, []);

  return (
    <div>
      <button onClick={()=>{setParentAge(parentAge+1)}}>부모나이 늘리기</button>
      부모나이 : {parentAge}
      <Child childAge={childAge} childName={childName} sayAny={sayAny}></Child>
      <MemoizedChild2 childAge={childAge} childName={childName} sayAny={sayAny}/>
    </div>
  )
}


const Child2 = ({childAge, childName, ...props}) => {
  console.log("자식2 실행");
  return (<div>
      <p>자식나이 : {childAge.age}</p>
      <p>자식이름 : {childName.name}</p>
  </div>)
}
const MemoizedChild2 = memo(Child2);

export default App

import { createContext, useContext, useState } from 'react'

const ClickContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <ClickContext.Provider value={{count,setCount}}>
      <div>
        <Child />
      </div>
    </ClickContext.Provider>
  )
}

const Child = () => {
  return <GrandChild />
}

const GrandChild = () => {
  const { count, setCount } = useContext(ClickContext);
  return (
  <div>
    클릭 횟수는 {count}입니다.
    <button onClick={()=>{setCount(count+1)}}>더하기 버튼</button>
  </div>)
}
export default App

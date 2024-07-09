import { useContext, useState } from 'react'
import { modalContext } from '!@#/component/common/Modal.jsx';

function App() {
  const modal = useContext(modalContext);
  return (
      <div>
        ㅎㅇ
        <button onClick={()=>{
          modal.showAlert("모달창입니다.")
        }}>모달창 보여주기</button>
      </div>
  )
}
export default App

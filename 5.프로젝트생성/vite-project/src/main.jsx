import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
// import App from '!@#/App.jsx'
import App2 from '!@#/App2.jsx'
import ModalProvider from '!@#/component/common/Modal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <ModalProvider>
      {/* <App /> */}
      <App2 />
    </ModalProvider>
  </Fragment>
)

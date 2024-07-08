import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from '!@#/App.jsx'

/* redux */
import { Provider } from "react-redux";
import store from "!@#/common/redux/store/Store.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
)

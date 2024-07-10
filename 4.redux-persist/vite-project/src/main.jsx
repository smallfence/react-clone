import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from '!@#/App.jsx'

// redux
import { Provider } from "react-redux";
import store from "!@#/redux/store/Store.jsx";
// redux-persist
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "!@#/redux/store/StorePersist";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
  </Fragment>
)

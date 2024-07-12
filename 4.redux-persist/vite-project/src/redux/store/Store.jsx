import { legacy_createStore as createStore} from "redux";
import {persistRootReducer} from "!@#/redux/reducer/RootReducer.jsx";

const store = createStore(persistRootReducer);

export default store;
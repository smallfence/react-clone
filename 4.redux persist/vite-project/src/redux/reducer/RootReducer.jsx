import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
// import { CookieStorage } from "redux-persist-cookie-storage";
// import Cookies from 'cookies-js';
import {auth} from "!@#/redux/reducer/AuthReducer.jsx";

const persistConfig = {
    key: 'root@prjname',
    storage, //로컬스토리지 저장 시 사용
    // storage: new CookieStorage(Cookies/*, options */) , //쿠키 저장 시 사용
    whiteList : [] //persist 사용 안할 reducer를 넣음.
};

const rootReducer = combineReducers({
    auth
});

export default persistReducer(persistConfig, rootReducer);
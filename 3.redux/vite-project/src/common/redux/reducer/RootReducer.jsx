import {authReducer} from "!@#/common/redux/reducer/AuthReducer.jsx";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth : authReducer
});

export default rootReducer;
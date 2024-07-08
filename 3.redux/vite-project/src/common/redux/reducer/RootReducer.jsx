import {auth} from "!@#/common/redux/reducer/AuthReducer.jsx";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth
});

export default rootReducer;
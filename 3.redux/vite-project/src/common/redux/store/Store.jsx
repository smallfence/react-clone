import { legacy_createStore as createStore} from "redux";
import rootReducers from "!@#/common/redux/reducer/RootReducer.jsx";

const store = createStore(rootReducers);

export default store;
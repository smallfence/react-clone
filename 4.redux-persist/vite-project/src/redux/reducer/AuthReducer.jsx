import {LOGIN, LOGOUT} from "!@#/redux/action/AuthAction.jsx";

const initialize = {
    isLogin : false,
    user : null
};

export const authReducer = (state = initialize, action) => {
    switch(action.type){
        case LOGIN:
            return {
                isLogin : true,
                user : {...action.payload}
            };
        case LOGOUT:
            return {
                isLogin : false,
                user : null
            };
        // redux-persist 때 사용.
        // case PURGE:
        //     return initialize;
        default:
            return state;
    }
}
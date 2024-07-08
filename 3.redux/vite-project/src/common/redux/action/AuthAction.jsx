export const LOGIN = "REDUX_TEST_LOGIN";
export const LOGOUT = "REDUX_TEST_LOGOUT";

export const login = (user) => ({
    type:LOGIN,
    payload:user
});
export const logout = (user) => ({
    type:LOGOUT
});
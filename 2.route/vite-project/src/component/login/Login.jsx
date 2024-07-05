import PropTypes from "prop-types";

const Login = (props) =>{
    const setIsLogin = props?.setIsLogin??null;
    return (<div>Login 컴포넌트입니다.
      <button onClick={()=>{setIsLogin(true)}}>로그인ㄱㄱ</button>
    </div>);
}
export default Login;

Login.propTypes = {
    setIsLogin : PropTypes.func.isRequired
}
import { Fragment } from "react";
import "!@#/view/main.css";
import {NavLink, useNavigate, Routes, Route} from "react-router-dom";
import Dash from "!@#/component/dash/Dash.jsx";
import Menu1 from "!@#/component/menu1/Menu1.jsx";
import Menu2 from "!@#/component/menu2/Menu2.jsx";
import Menu3 from "!@#/component/menu3/Menu3.jsx";
import User from "!@#/component/user/User.jsx";
import PageNotFound from "!@#/component/pageNotFound/PageNotFound.jsx";
import PropTypes from "prop-types";

const MainWrapperView = (props) =>{
    const {isLogin, setIsLogin} = props;
    const navigate = useNavigate();

    return (
    <Fragment>
        <header>
            <div className="logo">
                <a onClick={()=>{navigate("/")}}>회사 로고</a>
            </div>
            <div className="nav">
                <ul>
                    <li><NavLink to={"/menu1"}>대메뉴1</NavLink></li>
                    <li><NavLink to={"/menu2"}>대메뉴2</NavLink></li>
                    <li><NavLink to={"/menu3"}>대메뉴3</NavLink></li>
                </ul>
            </div>
            <div className="user">
                <ul>
                    <li><a onClick={()=>{navigate("/user")}}>홍길동</a></li>
                    <li><a onClick={()=>{setIsLogin(false)}}>로그아웃ㄱㄱ</a></li>
                </ul>
            </div>
        </header>
        <section>
            <Routes>
                <Route path={"/"} element={<Dash />}></Route>
                <Route path={"/menu1"} element={<Menu1 />}></Route>
                <Route path={"/menu2"} element={<Menu2 />}></Route>
                <Route path={"/menu3"} element={<Menu3 />}></Route>
                <Route path={"/user"} element={<User />}></Route>
                <Route path={"/*"} element={<PageNotFound />}></Route>
            </Routes>
        </section>
        <footer>
            <h3>foot</h3>
        </footer>
    </Fragment>);
}
export default MainWrapperView;

MainWrapperView.propTypes = {
    setIsLogin : PropTypes.func.isRequired,
    isLogin : PropTypes.bool.isRequired
}
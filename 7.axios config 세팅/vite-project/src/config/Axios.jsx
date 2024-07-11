import axios from "axios";

//axios 글로벌 설정.
axios.defaults.withCredentials = true;//request 시 쿠키/자격증명을 포함함.
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';//요청본문을 JSON 형식으로 보내겠다는 의미
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';//CORS 정책 모든 도메인 허용
axios.defaults.timeout = 20000;//20초

//axios 인스턴스 생성/설정
export const axiosInstance = axios.create();

//requst 전 가로챔.
//아래 코드는 아무런 추가 작업이 없음. 추후에 추가 작업이 생길 것을 고려해서 뼈대만 만들어 둔것임.
axiosInstance.interceptors.request.use(function (config) {
    // console.log(config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

//response 후 가로챔.
axiosInstance.interceptors.response.use(function (response) {
    // console.log(response);
    // const {status, data, headers, config} = response;
    // 인증 관련 예외처리
    // if (data.status === "NS_ER_AT_03") {
    //     if (!config.headers.get('Authorization')) { /* refreshToken 없으면 request header에 refreshToken 셋팅 후 api 재요청*/
    //         config.headers.set('Authorization', "Bearer " + atob(getCookie("GS_RFT")))//refreshToken 셋팅
    //         return apiAxios.request(config);   // api 재조회
    //     } else {        /* refreshToken 있으면 로그인화면으로 이동 */
    //         persistor.purge();
    //         deleteCookie("GS_RFT")
    //     }
    // }
    // if (data.status === "NS_ER_AT_01") {
    //     // 권한 없을 시 로그아웃(NS_ER_AT_01: token없음, NS_ER_AT_02: 중복 로그인)
    //     deleteCookie("GS_RFT")
    //     persistor.purge();
    // }else if(data.status === "NS_ER_AT_02"){
    //     persistor.purge();
    //     deleteCookie("GS_RFT")
    //     return {data: {status: "NS_ER_AT_02", message: "중복 로그인이 감지되었습니다."}};
    // }
    // if (data.status === "NS_ER_CT_01") {
    //     // url Not Found 화면 이동(NS_ER_CT_01: url 찾을 수 없음)
    //     window.location.href = '/pageNotFound/PageNotFound'
    // }

    return response;
});


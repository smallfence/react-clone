import axios from "axios";
import { axiosInstance } from "!@#/config/Axios.jsx";

export default {
    post(url, data) {
        const response = axiosInstance.post(url, data);
        return response;
    },

    //요청시 직접쓰이는 header는 global보다 우선순위에 있다.
    form(url, data) {
        const response = axiosInstance.post(url, data, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "multipart/form-data"
            }
        });

        return response;
    },
};
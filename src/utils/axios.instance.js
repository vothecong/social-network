import axios from "axios";
import Cookies from 'js-cookie';
const PROXY = "http://localhost:4000";

const InstanceAxios = axios.create({
    baseURL: `${PROXY}/api`,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

InstanceAxios.defaults.withCredentials = true;

InstanceAxios.interceptors.request.use(
    async (config) => {
        if (
            config.url.indexOf("/login") >= 0 ||
            config.url.indexOf("/refreshToken") >= 0
        ) {
            return config;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

InstanceAxios.interceptors.response.use(
    async (response) => {
        const config = response.config;
        if (
            config.url.indexOf("/login") >= 0 ||
            config.url.indexOf("/refreshToken") >= 0
        ) {
            return response;
        }

        // console.log({ response });
        // const { code, message } = response.data;
        // if (code && code === 401) {
        //     if (message && message === 'jwt expired') {
        //         console.log("Trường hợp token hết hạn", message);

        //         // step 1: get token from refreshToken
        //         const { elements: { accessToken } } = await refreshToken();
        //         if (accessToken) {
        //             // step 2:
        //             config.headers['X-Token'] = accessToken;
        //             // step 3: save browser
        //             InstanceAxios.setLocalAccessToken(accessToken);
        //             return InstanceAxios(config);
        //         }
        //     }
        // }
        return response;
    },
    async (err) => {
        // console.log("err by response InstanceAxios", err);
        // console.log('get cookie', document.cookie, Cookies.get('refresh'))
        // console.log("code", err.response);
        // console.log("code", err.response.status);
        const cookie = Cookies.get('refresh');
        // const config = err.config;
        //  console.log('config', err.config)
        if (err.response.status === 401) {
            console.log("CO CHAY VO KO ");
            const data = await refreshToken(cookie);
            console.log("data by refresh token", data);
        }
        return Promise.reject(err);
    }
);

async function refreshToken(token) {
    return (await InstanceAxios({
        method: "GET",
        url: '/auth/refresh_token',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).data;
}

export default InstanceAxios;

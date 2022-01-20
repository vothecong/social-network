import axios from "axios";
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

        console.log({ response });
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
    (err) => {
        return Promise.reject(err);
    }
);

async function refreshToken() {
    return (await InstanceAxios.get('/auth/refresh_token')).data;
}

export default InstanceAxios;

import InstanceAxios from "../../utils/axios.instance";
import { GLOBALTYPES } from "./global.types";

export const LoginAction = (email, password) => {
    return async (dispatch) => {
        try {
            const { data } = await InstanceAxios({
                method: "POST",
                url: '/auth/login',
                data: JSON.stringify({ email, password })
            });
            localStorage.setItem('firstLogin', true);
            dispatch({ type: GLOBALTYPES.AUTH, payload: { user: data.user } })
        } catch (error) {
            console.error(error);
        }
    }
}

export const VerifyAction = () => {
    return async (dispatch) => {
        const firstLogin = localStorage.getItem('firstLogin');
        if (firstLogin) {
            try {
                const { data } = await InstanceAxios({
                    method: "GET",
                    url: '/auth/verify'
                });
                dispatch({ type: GLOBALTYPES.AUTH, payload: { user: data.user } })
            } catch (error) {
                console.error(error);
            }
        }
    }
}
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

            dispatch({ type: GLOBALTYPES.AUTH, payload: { user: data.user } })
        } catch (error) {
            console.error(error);
        }
    }
}

export const VerifyAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await InstanceAxios({
                method: "GET",
                url: '/auth/verify'
            });
            // console.log("response VerifyAction", data.user);
            dispatch({ type: GLOBALTYPES.AUTH, payload: { user: data.user } })
        } catch (error) {
            console.error(error);
        }
    }
}
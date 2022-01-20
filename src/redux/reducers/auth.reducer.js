import { GLOBALTYPES } from "../actions/global.types";

const initialState = {};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.AUTH:
            return action.payload;

        default:
            return state;
    }
}

export default AuthReducer;

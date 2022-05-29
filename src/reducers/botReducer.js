import { types } from "../types/types";

export const botReducer = (state = {}, action) => {
    switch (action.type) {
        case types.botIn:
            return {
                msg: action.payload.msg
            };
        case types.getBot:
            return {
                msg: action.payload.msg
            };
        default:
            return state;
    }
}

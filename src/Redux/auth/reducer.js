import Cookies from 'js-cookie';
import { auth } from './type';
const initialstate = {
    auth: !!Cookies.get("token"),
}
export const authreducer = (state = initialstate, action) => {
    switch (action.type) {
        case auth:
            return {
                ...state, auth: action.payload
            }
        default:
            return state
    }
}
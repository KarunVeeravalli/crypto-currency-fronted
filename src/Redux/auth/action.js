import { auth } from "./type";

export const authaction = (payload) => {
    return {
        type: auth, payload: payload
    }
}

import { GET_USER,GET_ALL_USERS,GET_ONLY_USER,UPDATE_USER,ADD_USER,DELETE_USER } from "./actionType";
const userInitial ={
    user : {},
    userInfo:{},
    users : []
} 


export const userReducer = (state=userInitial,action)=>{

    const {type, payload} = action;

    switch(type){
        case GET_USER:
            return{...state, userInfo : payload}
        case GET_ALL_USERS:
            return{...state, users : payload}
        case GET_ONLY_USER:
            return{...state, user : payload}
        case UPDATE_USER:
            return{...state, user : payload}
        case ADD_USER:
            return{...state, user : payload}
        case DELETE_USER:
            return{...state, user : payload}
        default:
            return state;
    }

}
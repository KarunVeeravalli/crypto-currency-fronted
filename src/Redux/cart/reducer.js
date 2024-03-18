import { GET_CART,GET_CART_BY_ID,ADD_COINS_TO_CART,REMOVE_ITEMS_FROM_CART } from "./actionType";

const cartInitial ={
    cart : {},
    cartItems : []
} 


export const cartReducer = (state=cartInitial,action)=>{

    const {type, payload} = action;

    switch(type){
        case GET_CART:
            return{...state, cart : payload}
        case GET_CART_BY_ID:
            return{...state, cart : payload}
        case ADD_COINS_TO_CART:
            return{...state, cart : payload}
        case REMOVE_ITEMS_FROM_CART:
            return{...state, cart: payload}
        default:
            return state;
    }

}
import {ADD_COIN,GET_ALL_COINS,ADD_COINS,GET_COIN, GET_TOP_TEN,} from './actionType';


const coinInitial = {
    coin : {},
    coins : [],
    topCoins : [],
} 


export const coinReducer = (state=coinInitial,action)=>{

    const {type, payload} = action;

    switch(type){
        case ADD_COIN:
            return{...state, coin : payload}
        case ADD_COINS:
            return{...state, coins : payload}
        case GET_COIN:
            return{...state, coin : payload}
        case GET_ALL_COINS:
            return{...state, coins : payload}
        case GET_TOP_TEN:
            return{...state, topCoins : payload}
        default:
            return state;
    }

}
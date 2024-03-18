import { GET_ALL_COINS_FROM_WALLET, GET_COIN_WALLET, GET_COIN_WALLET_BY_QUANTITY } from "./actionType";

const coinWalletInitial ={
    coinsFromWallet : [],
    coinWallet : [],
    coinWalletByQuantity : []
} 


export const coinWalletReducer = (state=coinWalletInitial,action)=>{

    const {type, payload} = action;

    switch(type){
        case GET_ALL_COINS_FROM_WALLET:
            return{...state, coinsFromWallet : payload}
        case GET_COIN_WALLET:
            return{...state, coinWallet : payload}
        case GET_COIN_WALLET_BY_QUANTITY:
            return{...state, coinWalletByQuantity : payload}
        default:
            return state;
    }

}
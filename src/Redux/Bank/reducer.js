import {GET_BANK,ADD_BANK,UPDATE_BANK,DELETE_BANK,GET_ALL_BANKS,ADD_MONEY_TO_BANK_FROM_WALLET,SEND_MONEY_FROM_BANK_TO_WALLET} from './actionType'
const bankInitial ={
    bank : {},
    banks : []
} 


export const bankReducer = (state=bankInitial,action)=>{

    const {type, payload} = action;

    switch(type){
        case GET_BANK:
            return{...state, bank : payload}
        case GET_ALL_BANKS:
            return{...state, banks : payload}
        case ADD_BANK:
            return{...state, bank : payload}
        case UPDATE_BANK:
            return{...state, bank : payload}
        case DELETE_BANK:
            return{...state, bank : payload}
        default:
            return state;
    }

}
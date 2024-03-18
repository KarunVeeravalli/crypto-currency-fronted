import axios from "axios";
import { API } from "../../Api";
import Cookies from "js-cookie";
import { authaction } from "../auth/action";
import { GET_ALL_COINS_FROM_WALLET, GET_COIN_WALLET, GET_COIN_WALLET_BY_QUANTITY } from "./actionType";


export const getCoinsFromWallet = (userId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coinWallet/getAllCoinsByUserId/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_ALL_COINS_FROM_WALLET, payload: res?.data })
                    console.log(res.data, "getCoinsFromWallet actions")
                })
        } catch (e) {
            console.log(e.response.data);
            if (e.res.status === 401) {
                console.log("inside errorr", e.res.status)
                Cookies.remove('token');
                dispatch(authaction(false));
            }
        }
    }
}


export const getCoinWallet = (coinWalletId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coinWallet/getCoinWallet/${coinWalletId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_COIN_WALLET, payload: res?.data })
                    console.log(res.data, "getCoinsWallet actions")
                })
        } catch (e) {
            console.log(e.response.data);
            if (e.res.status === 401) {
                console.log("inside errorr", e.res.status)
                Cookies.remove('token');
                dispatch(authaction(false));
            }
        }
    }
}

export const getCoinWalletByQuantity = (userId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coinWallet/getAllCoinsFromWalletByUserId/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_COIN_WALLET_BY_QUANTITY, payload: res?.data })
                    console.log(res.data, "getCoinsWallet actions")
                })
        } catch (e) {
            console.log(e.response.data);
            if (e.res.status === 401) {
                console.log("inside errorr", e.res.status)
                Cookies.remove('token');
                dispatch(authaction(false));
            }
        }
    }
}
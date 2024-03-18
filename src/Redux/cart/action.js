import axios from "axios";
import { API } from "../../Api";
import Cookies from "js-cookie";
import { authaction } from "../auth/action";
import { GET_CART,GET_CART_BY_ID,ADD_COINS_TO_CART,REMOVE_ITEMS_FROM_CART } from "./actionType";


export const getCart = (cartId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coinWallet/getCart/${cartId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_CART, payload: res?.data })
                    console.log(res.data, "getCart actions")
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

export const getCartById = (userId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coinWallet/getCartByUserId/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_CART_BY_ID, payload: res?.data })
                    console.log(res.data, "getCartById actions")
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

export const addCoinsToCart = (userId,body)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.post(`${API}/coinWallet/addCoinsToCart/${userId}`, { headers: { Authorization: `Bearer ${token}`,body } })
                .then((res) => {
                    dispatch({ type: ADD_COINS_TO_CART, payload: res?.data })
                    console.log(res.data, "addCoinsToCart actions")
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

export const removeElementsFromCart = (userId,body)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.put(`${API}/coinWallet/removeElementsFromCart`, { headers: { Authorization: `Bearer ${token}`,body } })
                .then((res) => {
                    dispatch({ type: REMOVE_ITEMS_FROM_CART, payload: res?.data })
                    console.log(res.data, "removeElementsFromCart actions")
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
import axios from "axios";
import {ADD_COIN,GET_ALL_COINS,ADD_COINS,GET_COIN, GET_TOP_TEN,} from './actionType'
import { API } from "../../Api";
import Cookies from "js-cookie";
import { authaction } from "../auth/action";


export const getCoin = (coinId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coin/getCoinById/${coinId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_COIN, payload: res?.data })
                    console.log(res.data, "getCoin actions")
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


export const getAllCoins = ()=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coin/getAllCoins`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_ALL_COINS, payload: res?.data.data })
                    console.log(res.data.data, "getAllCoins actions")
                })
        } catch (e) {
            console.log(e.response.data);
            console.log("hiii")
            if (e.res.status === 401) {
                console.log("inside errorr", e.res.status)
                Cookies.remove('token');
                dispatch(authaction(false));
            }
        }
    }
}




export const getTopTenCoins = ()=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coin/getTopTen`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_TOP_TEN, payload: res?.data.data })
                    console.log(res.data.data, "getTopTenCoins actions")
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


export const addCoin = (coin)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coin/addCoin`,coin, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: ADD_COIN, payload: res?.data?.data })
                    console.log(res.data.data, "addCoin actions")
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


export const addCoins = (coins)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/coin/addCoins`,coins, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: ADD_COINS, payload: res?.data?.data })
                    console.log(res.data.data, "addCoins actions")
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
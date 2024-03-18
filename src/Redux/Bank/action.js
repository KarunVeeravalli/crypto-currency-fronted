import {GET_BANK,ADD_BANK,UPDATE_BANK,DELETE_BANK,GET_ALL_BANKS,ADD_MONEY_TO_BANK_FROM_WALLET,SEND_MONEY_FROM_BANK_TO_WALLET} from './actionType'

import axios from "axios";
import { API } from "../../Api";
import Cookies from "js-cookie";
import { authaction } from "../auth/action";

export const getBank = (bankId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/bank/getBankById/${bankId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_BANK, payload: res?.data })
                    console.log(res.data, "getBank actions")
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

export const addBank = (bank)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/bank/addBank`,bank, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: ADD_BANK, payload: res?.data })
                    console.log(res.data, "addBank actions")
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

export const updateBank = (bankId,bank)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/bank/updateBank/${bankId}`, bank,{ headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: UPDATE_BANK, payload: res?.data })
                    console.log(res.data, "updateBank actions")
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

export const deleteBank = (bankId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/bank/deleteBank/${bankId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: DELETE_BANK, payload: res?.data })
                    console.log(res.data, "deleteBank actions")
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


export const getAllBanks = (userId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/bank/getAllBanksByUserId/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_ALL_BANKS, payload: res?.data })
                    console.log(res.data, "getAllBanks actions")
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


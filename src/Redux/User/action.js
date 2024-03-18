import axios from "axios";
import { GET_USER,GET_ALL_USERS,GET_ONLY_USER,UPDATE_USER,ADD_USER,DELETE_USER } from "./actionType";
import { API } from "../../Api";
import Cookies from "js-cookie";
import { authaction } from "../auth/action";
import { Navigate } from "react-router";

export const getUser = (userId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/user/getUser/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_USER, payload: res?.data })
                    console.log(res.data, "getUser actions")
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


export const getAllUsers = ()=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/user/getAllUsers`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_ALL_USERS, payload: res?.data })
                    console.log(res.data, "getAllUsers actions")
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

export const getOnlyUser = ()=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/user/getOnlyUser`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: GET_ONLY_USER, payload: res?.data })
                    console.log(res.data, "getOnlyUser actions")
                })
        } catch (e) {
            console.log(e.response.data);
            window.location = '/login'
            if (e.res.status === 401) {
                console.log("inside errorr", e.res.status)
                Cookies.remove('token');
                dispatch(authaction(false));
            }

            if (e.response) {
                console.error('Server Error:', e.response.status);
            } else if (e.request) {
              console.error('Network Error:', e.request);
            } else {
              console.error('Error:', e.message);
            }
        }
    }
}




export const addUser = (user)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/user/addUser`,user, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: ADD_USER, payload: res?.data })
                    console.log(res.data, "addUser actions")
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


export const updateUser = (userId,user)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/user/updateUser/${userId}`,user, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: UPDATE_USER, payload: res?.data })
                    console.log(res.data, "UpdateUser actions")
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


export const deleteUser = (userId)=>{
    return (dispatch) =>{
        const token = Cookies.get("token");
        try {
            axios.get(`${API}/user/deleteUser/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    dispatch({ type: DELETE_USER, payload: res?.data })
                    console.log(res.data, "deleteUser actions")
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




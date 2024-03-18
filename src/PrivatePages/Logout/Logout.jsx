import React from 'react'
import { useDispatch } from 'react-redux';
import { authaction } from '../../Redux/auth/action';
import { auth } from '../../Redux/auth/type';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router';

const Logout = () => {
    const dispatch = useDispatch();

    const handleBtn = (event)=>{
        console.log("logout clicked")
          event.preventDefault();
          dispatch(authaction(false));
          Cookies.remove("token", {path:'/'})
      }

      if(!auth){
        return <Navigate to="/logout"/>
      }
  return (
    <div>
        <button onClick={handleBtn}>logout</button>
    </div>
  )
}

export default Logout
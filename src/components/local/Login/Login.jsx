import React, { useState } from 'react'
import './Login.css'
import { Button, Input } from 'antd'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Cookies from 'js-cookie'
import { authaction } from '../../../Redux/auth/action'


const initialstate = {
  username: "",
  password: "",
};

const Login = () => {
      const { auth } = useSelector((state) => state.authreducer);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [formdata, setformdata] = useState(initialstate)
      const change = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value })
      }

      const submitHandler = async (event)=>{
        event.preventDefault();
        const Body = {  username:"kkarun701@gmail.com",password:"password"}
        try {
          const res = await axios.post("http://localhost:8765/auth/token",Body);
          //  console.log(res.data)
          
            if (res?.data) {
                console.log(res.data)
                Cookies.set("token", res?.data, {path:'/'});
                dispatch(authaction(true));
                navigate("/")
            } 
            else {
                alert("something went wrong");

            }
        } catch (e) {
            console.log(e)
            alert(`Invalid Email or Password`)
        }
      };
    if(auth){
      return redirect("/");
    }
  

  return (
    <div className='f'>
      <div className='m'>
        <div className='l-main'>
            <div className="left" style={{background:'white'}}>
              <h1>Login</h1>
              <Input placeholder='Email' onChange={change}  type='email'/>
              <Input placeholder='Password' onChange={change} type='password'/>
              <p>Forgot your password?</p>
              <Button onClick={submitHandler}>LOGIN</Button>
            </div>
            <div className="right" style={{color:'white'}}>
                <h1>Hello, Friend!</h1>
                <h4>Enter your personal details and start <br/> journey with us</h4>
                <Link  to="/signup"><Button>SIGN UP</Button></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import './Signup.css'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='f'>
      <div className='m'>
        <div className='s-main'>
            <div className="s-left">
              <h1>Welcome Back!</h1>
                <h4>To keep connected with us please login <br/> with your personal info</h4>
                <Link to="/login"><Button>Login</Button></Link>
            </div>
            <div className="s-right">
                
              <h1>Create Account</h1>
              <Input placeholder='Name' type='text'/>
              <Input placeholder='Email'  type='email'/>
              <Input placeholder='Password'  type='password'/>
              <Button>Sign Up</Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup

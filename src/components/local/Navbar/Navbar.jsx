import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../../Assets/hero.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState()
  return (
    <div className='Navbar-main-container'>
        <div className="navbar-logo" style={{paddingLeft:'50px'}}>
            <img src={logo} alt='logo'/>
            <h3><Link style={{textDecoration:'none',color:'rgb(127, 127, 252)' }} to='/' >Coin Currency</Link></h3>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/' >Home</Link> {menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("markets")}}><Link style={{textDecoration:'none'}} to='/markets' >Markets</Link> {menu==="markets"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("trade")}}><Link style={{textDecoration:'none'}} to='/trade' >Trade</Link> {menu==="trade"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none'}} to='/about' >About</Link> {menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}} to='/contact' >Contact</Link> {menu==="contact"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link onClick={()=>{setMenu("login")}}  to="/login"><button style={{color:'rgb(127, 127, 252)'}} >Login</button></Link>
        <Link onClick={()=>{setMenu("signup")}} to="/signup"><button style={{background:'rgb(127, 127, 252)', color:'white'}}>SignUp</button></Link>
        
      </div>
    </div>
  )
}

export default Navbar

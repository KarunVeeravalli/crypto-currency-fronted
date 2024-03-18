import React from 'react'
import Home from '../LocalPages/Home/Home'
import { Route, Routes } from 'react-router'
import Navbar from '../components/local/Navbar/Navbar'
import Login from '../components/local/Login/Login'
import Signup from '../components/local/Signup/Signup'
import Footer from '../components/local/Footer/Footer'
import Contact from '../components/local/Contact/Contact'
import Markets from '../components/local/Markets'
import Trade from '../components/local/Trade'
import About from '../components/local/About/About'

const LocalRoutes = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/markets' element={<Markets/>}/>
        <Route path='/trade' element={<Trade/>}/>
        <Route path='/about' element={<About/>}/>   
             
    </Routes>
    </div>
  )
}

export default LocalRoutes
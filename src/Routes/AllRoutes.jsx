import React from 'react'
import Dashboard from '../PrivatePages/Dashboard/Dashboard'
import { Outlet, Routes } from 'react-router'
import PrivateRoute from './PrivateRoute'
import Navbar from '../components/PrivateComponents/Navbar/Navbar'
import Menu from '../components/PrivateComponents/Menu/Menu'
import Footer from '../components/PrivateComponents/Footer/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../Styles/Global.scss'
import Login from '../components/local/Login/Login'
import Logout from '../PrivatePages/Logout/Logout'
import AllCoins from '../components/PrivateComponents/AllCoins/AllCoins'
import Wallet from '../PrivatePages/Wallet/Wallet'
import Coin from '../components/PrivateComponents/Coin/Coin'
import Transaction from '../components/PrivateComponents/Transaction/Transaction'
import Cart from '../components/PrivateComponents/Cart/Cart'
import MyCalendar from '../components/PrivateComponents/Calendar/MyCalendar'


// const Layout = ({children})=>{
//   return (
//     <div className='mainRoute' style={{display:'flex', flexDirection:'row'}}>
//         <Navbar/>
//           <div className='container'>
//             <div className="menuContainer" >
//               <Menu/>
//             </div>
//             <div className="contentContainer" >
//               {/* <Outlet/> */}
//               {children}
//             </div>
//           </div>
          
//       <Footer/>
//     </div>
//   )
// }

const AllRoutes = () => {
  
  return (
    <>
    <div className='routeMain'>
      <Navbar/>
        <div className='container'>
          <div className="menuContainer" >
            <Menu/>
          </div>
          <div className="contentContainer" >
            <Outlet/>
            <Routes>
              <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
              <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
              <Route path='/logout' element={<Logout/>}/>
              <Route path='/coins' element={<PrivateRoute><AllCoins/></PrivateRoute>  }/>
              <Route path='/wallet' element={<PrivateRoute><Wallet/></PrivateRoute>  }/>
              <Route path='/crypto/:id' element={<PrivateRoute><Coin/></PrivateRoute>  }/>
              <Route path='/transactions' element={<PrivateRoute><Transaction /></PrivateRoute>  }/>
              <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
              {/* <Route path='/calendar' element={<PrivateRoute><MyCalendar/></PrivateRoute>} /> */}
            </Routes>
          </div>
        </div>
      <Footer/>
    </div>
    
    </>
  )
  

}

export default AllRoutes

import './App.css';
import {  Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';

import './Styles/Global.scss'
import User from './pages/User/User';
import Product from './pages/Product/Product';

function App() {
  const Layout = ()=>{
    return (
      <div className='main'>
          <Navbar/>
            <div className='container'>
              <div className="menuContainer" >
                <Menu/>
              </div>
              <div className="contentContainer" >
                <Outlet/>
              </div>
            </div>
          <Footer/>
      </div>
    )
  }


  const router = createBrowserRouter([

    {
      path:'/',element:<Layout/>,children:[
        {path:"/", element:<Home/>},
        {path:"/home", element:<Home/>},
        {path:"/users", element:<Users/>},
        {path:"/products", element:<Products/>},
        {path:"/user/:id", element:<User/>},
        {path:"/product/:id", element:<Product/>},
        
      ]
    },
    {
      path:"/login", element:<Login/>
    },
  ])


  return <RouterProvider router={router}/>;
}

export default App;

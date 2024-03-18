import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../../Assets/hero2.png'
import { alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { redirect, useNavigate } from 'react-router';
import { authaction } from '../../../Redux/auth/action';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { auth } from '../../../Redux/auth/type';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleMouseEnter = () => {
    setShowNotification(true);
  };

  const handleMouseLeave = () => {
    setShowNotification(false);
  };

  const handleBtn = (event)=>{
    console.log("logout clicked")
      event.preventDefault();
      dispatch(authaction(false));
      Cookies.remove("token", {path:'/'})
      navigate("/")
  }

  if(!auth){
    return navigate("/login");
  }
  
  return (
    <div className='navbar'>
      <div className="logo">
        <img style={{height:'60px',width:'60px'}} src={logo} alt=''/>
        <span style={{fontSize:"22px"}}>Coin Currency</span>
      </div>
      <div className="icons">
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className="notification" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src="notifications.svg" alt="" />
            <span>1</span>
            {showNotification && (
              <p className="notification-text">notification!</p>
            )}
          </div>
          <div className="user">
            <img style={{height:'35px',width:'35px'}} src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""/>
          </div>
          <div className='logoutNav' onClick={handleBtn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          
          <img src="logout.svg" alt='logout'/> 
              {showNotification && (
                <p className="notification-text">logout!</p>
              )}
         
          </div>
          {/* <img src="settings.svg" alt="" className="icon" /> */}
      </div>
    </div>
  )
}

export default Navbar
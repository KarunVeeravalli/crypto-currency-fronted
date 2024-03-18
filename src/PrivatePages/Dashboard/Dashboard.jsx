import React, { useEffect, useState } from 'react'
import { authaction } from '../../Redux/auth/action';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../Redux/auth/type';
import {  redirect } from 'react-router';
import './Dashboard.css'
import LongBox from '../../components/PrivateComponents/LongBox/LongBox';
import { getOnlyUser, getUser } from '../../Redux/User/action';
import { getCoinsFromWallet } from '../../Redux/coinWallet/action';
import { getAllCoins, getTopTenCoins } from '../../Redux/Coins/action';
import WalletBox from '../../components/PrivateComponents/WalletBox/WalletBox';
import HolidayBox from '../../components/PrivateComponents/HolidayBox/HolidayBox';
import HistoricalCharts from '../../components/PrivateComponents/HistoricalCharts/HistoricalCharts';
import BigChartBox from '../../components/PrivateComponents/BigChartBox/BigChartBox';


const Dashboard = () => {
    const dispatch = useDispatch();
    //to get user data
    const { user ,userInfo} = useSelector((store) => store.userReducer);
    // to get all coins
    const {coinsFromWallet, coinWallet,coinWalletByQuantity} = useSelector((store)=> store.coinWalletReducer);
    // top 10 coins
    const { coins } = useSelector((store) => store.coinReducer);
    const [coinData,setCoinData] = useState([]);

    useEffect(()=>{
      if(user?.id) {
        dispatch(getUser(user?.id));
     }
    },[dispatch,user]);

    useEffect(() => {
      dispatch(getOnlyUser());
      console.log(user)
    }, [dispatch]);

    useEffect(()=>{
      dispatch(getAllCoins());
    },[dispatch])


    useEffect(()=>{
      if (userInfo?.data?.coinWallet?.coins) {
        dispatch(getCoinsFromWallet(userInfo?.data?.id))
        console.log(coinWalletByQuantity)
      }
    },[dispatch,userInfo?.data?.id])


    const handleBtn = (event)=>{
        console.log("logout clicked")
          event.preventDefault();
          dispatch(authaction(false));
          Cookies.remove("token", {path:'/'})
      }
    
      if(!auth){
        return redirect("/login");
      }

      const first10Coins = coins.slice(0, 10);

      const col = userInfo?.data?.coinWallet?.totalCryptoValue;
      const wal = userInfo?.data?.wallet?.availableAmount;

  return (
    <div>
        <div className='nav'>
        {/* <h1>Dashboard Page</h1>
        <button onClick={handleBtn}>Logout</button> */}
        <div className='boxes'>       
            <div className="box  box1"><LongBox coins={first10Coins}/></div> 
            <div className="box  box2"><WalletBox col={col} wal={wal}/> </div>
            <div className="box  box3"><HolidayBox /></div>
            {/* <div className="box  box4"><HistoricalCharts/>  </div> */}
            <div className="box  box4"><BigChartBox/>  </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
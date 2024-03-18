import React, { useEffect } from 'react'
import './Wallet.css'
import WalletBox1 from './SubFiles/WalletBox1/WalletBox1'
import CryptoWallet from './SubFiles/CryptoWallet/CryptoWallet'
import WalletCoins from './SubFiles/WalletCoins/WalletCoins'
import Banks from './SubFiles/BanksBox2/Banks'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../Redux/auth/type'
import { GET_USER } from '../../Redux/User/actionType'
import { redirect } from 'react-router'
import { getOnlyUser, getUser } from '../../Redux/User/action'
import { getCoinWalletByQuantity, getCoinsFromWallet } from '../../Redux/coinWallet/action'

const Wallet = () => {
     const dispatch = useDispatch();
    const { user ,userInfo} = useSelector((store) => store.userReducer);
     const {coinsFromWallet, coinWallet,coinWalletByQuantity} = useSelector((store)=> store.coinWalletReducer);
     const { coins } = useSelector((store) => store.coinReducer);

       useEffect(()=>{
         if(user?.id) {
           dispatch(getUser(user?.id));
        }
       },[dispatch,user]);
  
       useEffect(() => {
         dispatch(getOnlyUser());
       }, [dispatch]);

       useEffect(()=>{
        if (userInfo?.data?.coinWallet?.coins) {
          dispatch(getCoinWalletByQuantity(userInfo?.data?.id))
          console.log(coinWalletByQuantity)
        }
      },[dispatch,userInfo?.data?.id])

      if(!auth){
        return redirect("/login");
      }
    const banks = userInfo?.data?.bank
    console.log(banks)

    const col = userInfo?.data?.coinWallet?.totalCryptoValue;
    const wal = userInfo?.data?.wallet?.availableAmount;

  return (
    <div className="walletMain">

        <div className="walletBoxMain walletBox1">
            <div className="walletBoxMain  insideWalletBox1"><WalletBox1 wal={wal}/></div>
            <div className="walletBoxMain  insideWalletBox2"><CryptoWallet col={col}/></div>
        </div>
        <div className="walletBoxMain walletBox2"><WalletCoins coinWalletByQuantity={coinWalletByQuantity}/></div>
        <div className="walletBoxMain walletBox3"><Banks banks={banks}/></div>
    </div>
  )
}

export default Wallet
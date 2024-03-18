import React from 'react'
import './WalletBox.css'
import Lottie from 'react-lottie';
import animationData from '../../../Assets/wallet.json';
import balanceData from '../../../Assets/balance.json';
import { Link } from 'react-router-dom';

const WalletBox = ({wal,col}) => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    const balanceOptions = {
        loop: true,
        autoplay: true,
        animationData: balanceData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };


  return (
    <div className='walletBox'>
        <div style={{display:'flex', alignItems:"center"}}>
            <h2>Balance</h2>
            <Lottie options={balanceOptions} height={90} width={90}/>
        </div>
        <div className="mainWalletBox">
            <Lottie 
                options={defaultOptions}
                height={80}
                width={80}
            />
            <div className="insideMainWalletBox">
                <h5>Wallet: <span>{parseInt(wal, 10)} ₹</span></h5>
                <h5>Crypto Val:<span> {parseInt(col,10)} ₹</span></h5>
            </div>
        </div>
        <div className="showMoreWalletBox">
            <Link to='/wallet'>
                <h3>Show More...</h3>
            </Link>
        </div>


    </div>
  )
}

export default WalletBox
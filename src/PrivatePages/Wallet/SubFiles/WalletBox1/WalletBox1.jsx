import React from 'react'
import animationData from '../../../../Assets/wallet.json';
import Lottie from 'react-lottie';
import './WalletBox1.css'
import { Button } from 'antd';

const WalletBox1 = ({wal}) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


  return (
    <div className="mainWalletContainer">
        <div style={{display:'flex', alignItems:"center"}}>
            <h3>Wallet </h3>
            <Lottie 
                    options={defaultOptions}
                    height={80}
                    width={80}
                />
        </div>
        <div className="walletSubContainer">
            <h5>Wallet Balance Amount : <span>{wal?parseInt(wal,10):0} ₹</span></h5>
            
        </div>
        <Button color='transaparent'  >Add Money</Button>
    </div>
  )
}

export default WalletBox1
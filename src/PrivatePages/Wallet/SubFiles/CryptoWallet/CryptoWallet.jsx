import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../../../Assets/wallet1.json'
const CryptoWallet = ({col}) => {
  

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
            <h3>Crypto Wallet </h3>
            <Lottie 
                    options={defaultOptions}
                    height={80}
                    width={80}
                />
        </div> 
        <div className="walletSubContainer">
            <h5>Crypto Wallet Amount : <span>{col?parseInt(col,10):0} ₹</span></h5>
        </div>
    </div>
  
  )
}

export default CryptoWallet
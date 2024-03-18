
import millify from 'millify'
import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import coinLottie from '../../../../Assets/coinData.json'

const WalletCoins = ({coinWalletByQuantity}) => {
    // const coins = coinWalletByQuantity?.coinsFromWallet


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coinLottie,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }
      };

      console.log(coinWalletByQuantity)

  return (
    <div className="mainLongBox">
      <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
            <h2>Wallet Coins</h2>  
            <div>
            <Lottie options={defaultOptions} height={90} width={90}/>
            </div>
      </div>
      <div className="headings">
              <div className="iconLongBox"><h5>Icon</h5></div><div class="vlLongBox"></div>
              <div className="nameLongBox"><h5>Name</h5></div><div class="vlLongBox"></div>
              <div className="lastPriceLongBox"  style={{width:'60px'}}><h5>Buy at</h5></div><div class="vlLongBox"></div>
              <div className="marketCapLongBox"><h5>Market Cap</h5></div><div class="vlLongBox"></div>
              <div className="quantity"><h5>Quantity</h5></div>
              
              
      </div>
      <hr/>
        <div>
            {coinWalletByQuantity?.map((item)=>(
            <Link to={`/crypto/${item.id}`}>
                <div className="coinLongBox" key={item.id}>
                    <div className="iconLongBox"><img src={item.iconUrl} alt='icon' /></div><div class="vlLongBox"></div>
                    <div className="nameLongBox"><h5>{item.cryptoName}</h5></div><div class="vlLongBox"></div>
                    <div className="lastPriceLongBox" style={{width:'60px'}}><h5>{millify(item.purchasedPrice)}</h5></div><div class="vlLongBox"></div>
                    <div className="marketCapLongBox"><h5>{item.marketCap}</h5></div><div class="vlLongBox"></div>
                    <div className="quantity"><h5>{item.loot}</h5></div>
                </div>
            </Link>
            ))}
        </div>
    </div>
    // <div>hi</div>
  )
}

export default WalletCoins
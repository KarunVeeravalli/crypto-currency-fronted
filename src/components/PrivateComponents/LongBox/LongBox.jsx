import React from 'react'
import './LongBox.css'
import millify from 'millify'
import { Link } from 'react-router-dom'
import coinLottie from '../../../Assets/coinData.json'
import Lottie from 'react-lottie'
import { useNavigate } from "react-router-dom";

const LongBox = ({coins}) => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coinLottie,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    }
  };

  console.log(coins)
  return (

    <div className="mainLongBox">
      <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
            <h2>Top Coins</h2>  
            <div>
            <Lottie options={defaultOptions} height={90} width={90}/>
            </div>
      </div>
      <div className="headings">
              <div className="iconLongBox"><h5>Icon</h5></div><div class="vlLongBox"></div>
              <div className="nameLongBox"><h5>Name</h5></div><div class="vlLongBox"></div>
              <div className="lastPriceLongBox" ><h5>Last price</h5></div><div class="vlLongBox"></div>
              <div className="marketCapLongBox"><h5>Market Cap</h5></div>
              
      </div>
      <hr/>
    <div>
        {coins.map((item)=>(
          // <Link to={`/crypto`} params={{ id: "1"}}>
            <div className="coinLongBox" key={item.id} onClick={() => navigate(`/crypto/${item.id}`)}>
                  <div className="iconLongBox"><img src={item.iconUrl} alt='icon' /></div><div class="vlLongBox"></div>
                  <div className="nameLongBox"><h5>{item.cryptoName}</h5></div><div class="vlLongBox"></div>
                  <div className="lastPriceLongBox"><h5>{millify(item.price)}</h5></div><div class="vlLongBox"></div>
                  <div className="marketCapLongBox"><h5>{item.marketCap}</h5></div>
            </div>
          // </Link>
        ))}
    </div>
    </div>

  )
}

export default LongBox
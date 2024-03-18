import React, { useEffect } from 'react'
import './Coin.css'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCoin } from '../../../Redux/Coins/action';
import { Card } from 'antd';
import millify from 'millify';
import HistoricalCharts from '../HistoricalCharts/HistoricalCharts';

const Coin = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const {coin} = useSelector((store)=>store.coinReducer)

    useEffect(()=>{
        dispatch(getCoin(id))
    },[id,dispatch])

    console.log(id)
    console.log(coin)
  return (
    
    <div className="coinMainContainer">
        <div className="coinLeftContainer">
            <h1 style={{textAlign:'center'}}>{coin.cryptoName}</h1>
            <div className="imgCenter">
                <img src={coin.iconUrl} alt="icon"  />
            </div>
            <div className="leftBottomCoin">
                <h4>Price: {millify(coin.price)}</h4>
                <h4>Market Cap: {millify(coin.marketCap)}</h4>
                <h4>Daily Change: {millify(coin.change)}</h4>
                <h4>Price: {millify(coin.price)}</h4>
                <a style={{color:'yellow'}} href={coin.coinRankingUrl}>click to check</a>
            </div>
        </div>
        <hr/>
        <div className="coinRightContainer" >
           <HistoricalCharts coin = {coin}/>
        </div>
    </div>
  )
}

export default Coin
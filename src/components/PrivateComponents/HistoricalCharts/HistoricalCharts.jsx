import React, { useEffect, useState } from 'react'
import LineChart from '../LineChart/LineChart';
import axios from 'axios';
import { HistoricalChart } from '../../../Api';
import "chart.js/auto";
import './HistoricalCharts.css'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HistoricalCharts = ({coin}) => {


    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const { currency } = "INR";
    const [quantity, setQuantity] = useState(0);

    let cryptoName = "bitcoin";
    if(coin.cryptoName!==undefined){
      cryptoName = (coin.cryptoName).toLowerCase();
    }

   
    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(cryptoName, days, "INR"));
        console.log(data)
        setHistoricData(data.prices);
      };
    
      useEffect(() => {
        fetchHistoricData();
      }, [days]);
    
      
      
  
  return (
    <div className="hiscontainer">       
        <div className="chart" style={{height:'400px'}} >
           {historicData?<LineChart historicData = {historicData} />:<>null</>}
        </div>
        
        <div className="lowerBody" style={{ gap: "30px",padding: "10px",display: "flex",justifyContentontent: "center"}}>
          {/* <Button style={{backgroundColor: 'rgb(199, 199, 31)'}}>BUY</Button>
          <Button style={{backgroundColor: 'rgb(199, 199, 31)'}}>SELL</Button> */}
          
          <Button style={{backgroundColor: 'rgb(199, 199, 31)'}}>ADD TO CART</Button>
        </div>
    </div>
  )
}

export default HistoricalCharts
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import './AllCoins.css'
import { useDispatch, useSelector } from 'react-redux'
import millify from 'millify'
import { getAllCoins } from '../../../Redux/Coins/action'

const AllCoins = ({simplified}) => {
    
    const { coins } = useSelector((store) => store.coinReducer);
    const [search,setSearch] = useState('');
    const { auth } = useSelector((state) => state.authreducer);
    const dispatch = useDispatch();
    const [coinData,setCoinData] = useState(coins);
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getAllCoins());
    },[dispatch])


    useEffect(()=>{
        const filteredData = coins.filter((coin) => coin.cryptoName !== null && coin.cryptoName.toLowerCase().includes(search.toLowerCase()));
        setCoinData(filteredData);
    },[coins,search])

    if(!auth){
        return <Navigate to="/login" />;
      }

    // if(isFetching) return 'Loading....';
    console.log(coinData)
  return (
    
    <div style={{margin:'40px'}} className='mainAllCoins'>

        {!simplified && (
                 <div className='search-crypto'>
                 <Input placeholder='Search Crypto coin' onChange={(e)=>setSearch(e.target.value)} />
     
             </div>
        )}
           
        
        
        <Row gutter={[32,32]} className='crypto-card-container'>
            
            {coinData?.map((currency)=>(
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                    <div ></div>
                    {/* <Link to={`/coin/${currency.id}`}> */}
                        <Card className='allCoinCard' title={`${currency.rank}. ${currency.cryptoName} ` }  
                        onClick={() => navigate(`/crypto/${currency.id}`)} 
                        extra={<img className='crypto-image' src={currency.iconUrl} alt='' />} hoverable>
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}</p>
                            <p>Price: {millify(currency.price)}</p>
                        </Card>
                    {/* </Link> */}
                </Col>
            ))}
        </Row>
    
    </div>
  )
}

export default AllCoins
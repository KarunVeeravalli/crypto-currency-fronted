import React, { useEffect, useState } from 'react'
import hero1 from '../../Assets/hero_4.avif'
import logo from '../../Assets/download.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import quickStart from '../../Assets/quickStart.png'
import bank from '../../Assets/bank.png'
import trade from '../../Assets/trading.png'
import portfolio from '../../Assets/portfolio.png'
import vault from '../../Assets/vault.png'
import mobile from '../../Assets/mobile.png'
import security from '../../Assets/secureStorage.png'
import practices from '../../Assets/bestpractise.png'

//import hero2 from '../../Assets/hero_2.jpg'

// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import {  Input } from 'antd';

import './Home.css'
import { Link } from 'react-router-dom';
import { MobileFriendly, WhatsApp } from '@mui/icons-material';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/local/Footer/Footer';

const Home = () => {
// const[search,setSearch] =useState();
  const [imageIndex, setImageIndex] = useState(0);
  const imageSources = [hero1]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [imageSources.length]);

  return (
    <div>
      <Container className='main'>


        <Col className="left-top-mains col-sm-6">
          
          <div className="left-top">

            <h1>One Broker,<br/>
            countless trading<br/>
            opportunities</h1>
            <h4>Get the widest range of markets, trades and platforms</h4>

            <button>Create free demo Account</button>

          </div>
        </Col>

        <Col className="right-top col-sm-6">
          <img src={imageSources[imageIndex]} alt={`Image ${imageIndex + 1}`}/>
        </Col>
      
      </Container>
      <div className="portfolio">
        <div>
          <h1>Create your cryptocurrency portfolio today</h1>
          <p>Coinbase has a variety of features that make it the best place to start trading</p>
        </div>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{display:'flex', alignItems:'center', gap:'50px'}}>
              <img src={portfolio}/>
              <div >
                <h3>Manage Your Portfolio</h3>
                <p>Buy and sell popular digital currencies, keep</p>
                <p>track of them in the one place.</p>
              </div>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'50px'}}>
              <img src={vault}/>
              <div >
                <h3>Vault protection</h3>
                <p>For added security, store your funds in a</p>
                <p>vault with time delayed withdrawals.</p>
              </div>
            </div><div style={{display:'flex', alignItems:'center', gap:'50px'}}>
              <img src={mobile}/>
              <div >
                <h3>Mobile app(*feature)</h3>
                <p>Stay on top of the markets with the</p>
                <p>Coinbase app for Android or iOS.</p>
              </div>
            </div>

        </div>
      </div>
      
      <div>
      <div className='box-15'>
        
      <hr style={{width:'50%', alignContent:"center"}}/>
        <div >
          <h1>The most trusted cryptocurrency platform</h1>
          <h5>Here are a few reasons why you should choose Coinbase</h5>
        </div>
        </div>
        <div className='security-practice'>
          <div>
              <img src={security}/>
              <h4>Secure storage</h4>
              <p>We store the vast majority of the digital</p>
              <p> assets in secure offline storage.</p>
              <h5 style={{color:'blue'}}>Learn more ..</h5>
          </div>
          <div>
              <img src={practices}/>
              <h4>Industry best practices</h4>
              <p>Coinbase supports a variety of the most</p>
              <p> popular digital currencies.</p>
              <h5 style={{color:'blue'}}>Learn more ..</h5>
          </div>
        </div>
      </div>
      <div className="redbar">
        <div>
          <h3>$44,00 Cr</h3>
          <p>Quarterly volume traded</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Countries supported</p>
        </div>
        <div>
          <h3>$130B</h3>
          <p>Assets on platform</p>
        </div>
        
      </div>

      <div className="QuickStart">
        <div>
          <h1>Get Started in a few minutes</h1>
          <p>Coinbase supports a variety of the most popular digital currencies</p>
        </div>
        <div className='QuickStart-icons'>
              <div>
                <img src={quickStart}/>
                <h4>Create an Account</h4>
              </div>

              <div>
                <img src={bank}/>
                <h4>Link Your Bank Account</h4>
              </div>

              <div>
                <img src={trade}/>
                <h4>Start buying & selling</h4>
              </div>
        </div>
        <p style={{paddingTop:'10px'}}>*Upon purchase of USDC, you will be automatically opted in to rewards. If you’d like to opt out or learn more about rewards, you can <a href=''>click here.</a> The rewards rate is subject to change and can vary by region. Customers will be able to see the latest applicable rates directly within their accounts.</p>

      </div>
      <Footer/>
      

    </div>
  )
}

export default Home

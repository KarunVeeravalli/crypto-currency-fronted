import React from 'react'
import crypto from '../../../Assets/crypto.jpg'
import './About.css'
import coin from '../../../Assets/coinForAbout.png'
import crossCoin from '../../../Assets/crosscoinAbout.png'
import support from '../../../Assets/supportAbout.png'
import { Button } from 'antd'
import aboutcoin1 from '../../../Assets/aboutcoin1.png'
import aboutcoin2 from '../../../Assets/aboutcoin2.png'
import aboutcoin3 from '../../../Assets/aboutcoin3.png'
import aboutcoin4 from '../../../Assets/aboutcoin4.png'
import aboutcoin5 from '../../../Assets/aboutcoin5.png'
import aboutcoin6 from '../../../Assets/aboutcoin6.png'
import aboutcoin7 from '../../../Assets/aboutcoin9.png'
import aboutcoin8 from '../../../Assets/aboutcoin8.png'
import profile from '../../../Assets/profile.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../../../Assets/download.png'

import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom'
import { WhatsApp } from '@mui/icons-material'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'


const About = () => {
  return (
    <div>
    <div className='about-main'  >
      <div className='about-first'>
          <div>
            <h1>Welcome to Crypto Currency</h1>
            <p>At Coin Currency, we believe that everyone should have the freedom <br/>
            to earn, hold, spend, share and give their money - no matter
            <br/> who you are or where you come from.</p>
          </div>
          <div>
            <img src={crypto} alt='pic'/>
          </div>
      </div>
      <div className="about-second">
          <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
            <div>
              <img src={coin} alt='pic'/>
            </div> 
            <div>
              <h1>$65 bn</h1>
              <p>Average daily volume </p>
            </div>
          </div>
          <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
            <div>
              <img src={crossCoin} alt='pic'/>
            </div> 
            <div>
              <h1>300 bn</h1>
              <p>Spot transactions in 2022 </p>
            </div>
          </div>
          <div style={{display:'flex', gap:'10px',alignItems:'center'}}>
            <div>
              <img src={support} alt='pic'/>
            </div> 
            <div>
              <h1>24/7</h1>
              <p>Customer Support in 5 languages </p>
            </div>
          </div>

      </div>    
    </div>
     <div className="about-third">
     <h1>Our Mission</h1>
     <p>Today, Binance is the world’s leading blockchain ecosystem, with a product suite that includes the largest digital asset exchange. <br/>Our mission is to be the infrastructure provider for crypto in tomorrow’s world.</p>
     <Button>Learn More</Button>
     </div>
     <div className="about-fourth">
      <h1>Our Ecosystem</h1>
      <p>Our platform is trusted by millions worldwide, and features an unmatched portfolio of financial product offerings.</p>
     </div>
     <div className="about-fifth">
          <div className='about-fifth-main-box'>
            <div className="about-fifth-box">
              <img src={aboutcoin1} style={{height:'70px', width:'70px'}} alt='pic'/>
              <h3>Coin Currency Exchange</h3>
              <p>Coin Currency Exchange is the largest crypto <br/> exchange by trade volume.</p>
            </div>
            <div className="about-fifth-box">
              <img src={aboutcoin2} style={{height:'70px', width:'70px'}} alt='pic'/>
              <h3>Coin Currency Labs</h3>
              <p>Coin Currency Labs is a venture capital and<br/> accelerator whose goal is to identify and<br/>support the most promising Web3 projects.</p>
            </div>
            <div className="about-fifth-box">
              <img src={aboutcoin3} style={{height:'70px', width:'70px'}} alt='pic'/>
              <h3>Coin Currency Research</h3>
              <p>Coin Currency Research provides institutional- <br/> grade analysis, in-depth insights, and <br/>
              unbiased information to all participants in the <br/>digital asset industry.</p>
            </div>
          </div>
          <div className='about-fifth-main-box'> 
            <div className="about-fifth-box">
            <img src={aboutcoin4} style={{height:'70px', width:'70px'}} alt='pic'/>
            <h3>Coin Currency Academy</h3>
            <p>Coin Currency Academy is an open-access <br/>learning hub, providing free blockchain and <br/>crypto education in over 10 languages.</p>
          </div>
          <div className="about-fifth-box">
            <img src={aboutcoin5} style={{height:'70px', width:'70px'}} alt='pic'/>
            <h3>Coin Currency Charity</h3>
            <p>Coin Currency Charity is a non-profit organization<br/> dedicated to building a future where Web3<br/>technology is used as a force of good.</p>
          </div>
          <div className="about-fifth-box">
            <img src={aboutcoin6} style={{height:'70px', width:'70px'}} alt='pic'/>
            <h3>Coin Currency NFT</h3>
            <p>Coin Currency NFT is the official NFT marketplace <br/>of Binance, dedicated to building a <br/>community-focused platform that enhances<br/> user experience.</p>
          </div>
        </div>
     </div>
     <div className="about-sixth">
      <img src={aboutcoin8} alt='pic'/>
      <div className="about-sixth-part1">
        <h1>Putting Our Users First</h1>
        <p>Users are at the heart of everything we do. From the beginning,<br/>
         we’ve made user protection our top priority. That is why we’ve <br/>
          embedded state-of-the-art security measures and strict data <br/>
          privacy controls across the entire Binance ecosystem.</p>
          <Button>Use Protection</Button>
      </div>
      
     </div>
     <Row className="about-seventh">
      <Col className="about-seventh-part1">
        <h1>Working with Regulators</h1>
        <p>We’re also committed to meeting the highest standards for <br/>
         regulatory compliance to maintain our responsibility <br/>to our users
         and further build a sustainable path forward for the <br/>
          blockchain industry.</p>
      </Col>
      <Col>
      <img src={aboutcoin7} alt='pic'/>
      </Col>
     </Row>
     <Row className="about-eight">
      <h1>Our Founders</h1>
      <Col className="about-eight-part1">
      
        <div style={{alignItems:"start"}}>
          <img src={profile} alt='pic'/>
          <h3>KARUN KUMAR V</h3>
          <p style={{fontSize:'14px'}}>Co-Founder & CEO</p>
        </div>
        <div>
          <p> Karun Kumar,known as KK, a passionate Java Full Stack Developer dedicated to crafting robust<br/>
           and scalable software solutions. With a firm foundation in both front-end and back-end development,<br/>
            I thrive on bringing ideas to life through elegant code and innovative design.</p>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/karun-kumar-veeravalli'><LinkedInIcon /></a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/__karun__kumar__/'><InstagramIcon /></a>
            <a target='_blank' rel="noreferrer" href='https://x.com/Karun9949'><TwitterIcon /></a>
            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/karun.veeravali'><FacebookIcon /></a>
            
        </div>
      
      </Col>
     </Row>


    <Footer/>
      

   </div>
  )
}

export default About

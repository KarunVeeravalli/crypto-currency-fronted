import React from 'react'

import logo from '../../../Assets/heroblack.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import {  WhatsApp } from '@mui/icons-material';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      
      <div className='footer'>
            <hr style={{width:'90%', marginTop:'100px'}}/>
            <div className='footer-social'>
                <div className="navbar-logo">
                  <img src={logo} alt='logo'/>
                  <h3><Link style={{textDecoration:'none',color:'#171717' }} to='/' >Coin Currency</Link></h3>
                </div>
                <div className="social-icons">
                  <a target='_blank' rel="noreferrer" href='https://www.instagram.com/__karun__kumar__/' ><InstagramIcon/></a>
                  <a target='_blank' rel="noreferrer" href='https://www.facebook.com/karun.veeravali'><FacebookIcon/></a>
                  <a><WhatsApp/></a>
                  <a target='_blank' rel="noreferrer" href='https://x.com/Karun9949'><TwitterIcon/></a>
                  <a><YouTubeIcon/></a>
                  <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/karun-kumar-veeravalli'><LinkedInIcon/></a>
                </div>
            </div>
            <div className="footer-Items">
                    <div className="aboutUs">
                      <h3>About Us</h3>
                      <a  href='/'>Who are you</a>
                      <a  href='/'>Why Choose us</a>
                      <a  href='/'>Principles</a>
                      <a  href='/'>Partnership programmes</a>
                      <a  href='/'>Contact us</a>
                      <a  href='/'>Carreers</a>
                      <a  href='/'>Coin Currency</a>
                    </div>

                    
                    <div className="aboutUs">
                      <h3>Developers</h3>
                      <a  href='/'>Karun Kumar V</a>
                      <a  href='/'>Ganesh </a>
                      <a  href='/'>Nithin</a>
                      <a  href='/'>Madhu</a>
                      <a  href='/'>Tharun</a>
                    </div>

                    
                    <div className="aboutUs">
                      <h3>Technolgies Used</h3>
                      <a  href='/'>Spring Boot</a>
                      <a  href='/'>React</a>
                      <a  href='/'>Jpa</a>
                      <a  href='/'>My Sql</a>
                      <a  href='/'>Material ui</a>
                      <a  href='/'>Docker</a>
                    </div>

                  
            </div>
      </div>
      <div className="copyrights">
          <hr style={{width:'70%', marginTop:'60px', borderWidth:'3px'}}/>
          <h3>Copyright @ 2023 - All Rights Reserve</h3>
      </div>
      

    </div>
  )
}

export default Footer

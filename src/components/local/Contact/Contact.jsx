
import { Button, Input } from 'antd'
import React from 'react'
import './Contact.css'
import community from '../../../Assets/community.webp'
import ForumIcon from '@mui/icons-material/ForumOutlined';
import WhatsAppOutlined from '@mui/icons-material/WhatsApp';
import Footer from '../Footer/Footer';



const Contact = () => {
  return (
    <div>
      <div className="contact-first">
        <h1>How can we help? </h1>
        <div className='contact-first-searchbar'> 
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20">
            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            </path>
            </svg>
          </div>
            <Input style={{borderStyle:'none'}} placeholder=' search'/>
        </div>
      </div>
      <div className="contact-third">
        <h1>General  </h1>
        <hr style={{color:"lightgray"}}/>
        <div className="contact-third-part1">
          <div className="contact-third-box">
            <h1>Account</h1>
            <a href='/'><p>How can I change my personal details?</p></a>
            <a href='/'><p>How can I change the currency of my account?</p></a>
            <a href='/'><p>Can I change my email address?</p></a>
            <a href='/'><p>Why can't I create an account?</p></a>
            <a href='/'><p>I forgot my Google/Facebook/Apple account password.<br/>
             How can I log in to my Deriv account?</p></a>
          </div>
          <div className="contact-third-box">
            <h1>Trading</h1>
            <a href='/'><p>What is forex?</p></a>
            <a href='/'><p>What are commodities?</p></a>
            <a href='/'><p>What are stock indices?</p></a>
            <a href='/'><p>What is derived?</p></a>
            <a href='/'><p>What are contracts for difference (CFDs)?</p></a>
          </div>
          <div className="contact-third-box">
            <h1>Deposits and withdrawals</h1>
            <a href='/'><p>What payment methods can <br/>
             I use for deposits and withdrawals?</p></a>
            <a href='/'><p>How long does it take for my<br/> deposits and withdrawals to be processed?</p></a>
            <a href='/'><p>What is the minimum deposit or <br/>withdrawal amount?</p></a>
            
          </div>
        </div>
      </div>
      <div className="contact-second">
          <img src={community} style={{height:"250px",width:'400px'}} alt='pic'/>
          <div className="contact-second-part1">
            <h1>Have a Question?</h1>
            <p>Our Coin Currency support community can help<br/> you find answers.</p>
            <Button>Ask the community</Button>
          </div>
      </div>
      
      <div className="contact-fifth">
        <div style={{display:'flex',flexDirection:"column",justifyContent:"center"}}>
        <ForumIcon style={{color:"red", height:'50px',width:'50px'}}/>
        </div>
        <div style={{display:'flex',flexDirection:"column",justifyContent:"center"}}>
        <h1>Didn’t find your answer? We can help.</h1>
        </div>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/karun-kumar-veeravalli'>
        <div className='contact-fifth-whatsapp'  style={{ color:'white',background:"green",display:"flex",alignItems:"center",height:"50px",padding:"7px",borderRadius:"8px",gap:"6px"}}>
          <WhatsAppOutlined />
           <h5> Whatsapp</h5>
        </div>
        </a>
      </div>
      <Footer/>

    </div>
  )
}

export default Contact




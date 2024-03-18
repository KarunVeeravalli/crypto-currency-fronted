import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'
// import {menu} from '../src/data'


const listItemss = [
  {
    id:1,
    title:"Dashboard",
    to: '/dashboard',
    icon:"home.svg",
  },
  {
    id:2,
    title:"Profile",
    to:'/profiles',
    icon:"profile.svg"
  },
  {
    id:3,
    title:"All Coins",
    icon:"coin.svg",
    to:'/coins'
  },
  {
    id:4,
    title:"Wallet",
    icon:"wallet.svg",
    to:'/wallet'
  },
  {
    id:5,
    title:"Cart",
    icon:"cart.svg",
    to:'/cart'
  },
  {
    id:6,
    title:"Calendar",
    icon:"calender.svg",
    to:'/calendar'
  },
  {
    id:7,
    title:'Transactions',
    icon:'transactions.svg',
    to:'/transactions'
  }
]

const Menu = () => {
  return (
    <div className='menu'>
      {listItemss.map((item)=>(
      <div className="item" key={item.id}>
     
            <div className='listItem'>
              <Link to={item.to} className='l1' key={item.id}>
                <img src={item.icon} alt="" />
                <span className='listItemTitle'>{item.title}</span>
              </Link>
            </div>
        
      </div> 
      )
      )}
    </div>
  )
}

export default Menu
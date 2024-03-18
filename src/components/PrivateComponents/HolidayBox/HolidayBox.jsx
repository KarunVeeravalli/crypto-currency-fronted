import React from 'react'
import './HolidayBox.css'
import { Holidays } from '../../../data'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import holidayData from '../../../Assets/holiday.json'
import Lottie from 'react-lottie'

const HolidayBox = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: holidayData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    

  return (
    <div className="mainHolidayBox">
        <div style={{display:'flex', alignItems:"center"}}>
            <h2>Holidays</h2>
            
            <Lottie options={defaultOptions} height={90} width={90}/>
        </div>
        <div className="listHolidays">
            {Holidays.map((holiday)=>(
                <div>
                <Box className="holiday" key={holiday.id}>
                    <p>{holiday.dis}</p>
                    <div className="date">
                        <p>{holiday.date}</p>
                        <p style={{color:'lightgray', fontSize:'10px'}}>{holiday.day}</p>    
                    </div>
                </Box>
                 <hr/>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default HolidayBox
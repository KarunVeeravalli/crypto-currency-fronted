import { Card, Col, Row } from 'antd'
import React from 'react'
import './Banks.css'
const Banks = ({banks}) => {


  return (
    <div className="bankInfo">
          <h3>Banks</h3>

          {/* <Row gutter={[32,32]} align={'middle'}> */}
          <div className="bankMainContainer">
            {banks?.map((bank)=>(
              <div className="bankContainer" key={bank.id} >
                 <p>Bank Name : {bank.bankName}</p>
                    <p>Bank Account Number : {bank.bankAccountNumber}</p>
                    <p>Bank Holder :{bank.bankHolderName}</p>
                    <p>Branch :{bank.branch}</p>
                    <p>IFSC :{bank.ifsc}</p>
                    <p>Balance :{bank.amount} $</p>
              </div>
            ))}
          {/* </Row> */}
          </div>
        </div>
  )
}

export default Banks
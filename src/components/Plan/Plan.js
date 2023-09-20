import React from 'react';
import "./Plan.css";


const Plan = ({title,plan,callback,date}) => {
    
  return (
    <div className='plan-container-card'>
        <h6 className='paln-date'>Date: {date}</h6>
        <h4 className='plan-title'>{title}</h4>
        <h5 className='plan-plan'>➡️ {plan}</h5>
        <h6 className='plan-plan'>📩 {callback}</h6>
        </div>
  )
}

export default Plan

import React from 'react'
import './buttoncomponent.css'
const ButtonComponent = ({getAPI}) => {
  return (
    <div className="button-container">
        <button type='button' className='get-quote-btn' onClick={getAPI}>Get Quotes</button>
    </div>
  )
}

export default ButtonComponent
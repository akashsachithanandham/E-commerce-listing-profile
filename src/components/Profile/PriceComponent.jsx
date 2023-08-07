import React from 'react'
import './PriceComponent.css'

function PriceComponent({price}) {
  return (
    <div className='price'>₹ {price}</div>
  )
}

export default PriceComponent
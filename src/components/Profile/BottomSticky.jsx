import React from 'react'
import '../../styles/ProfilePage.css'

function BottomSticky({price}) {
  return (
    <div className='bottom-sticky'>₹ {price}<span className='sub-text'> /night (all inclusive)</span></div>
  )
}

export default BottomSticky
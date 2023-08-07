import React from 'react'
import './Description.css'
import Info from './Info'

function Description({name, location, description}) {
  return (
    <div >
      <div className='hotel-location'> hotel in {location}</div>
      <div className='hotel-title'> {name}</div>
      <Info description={description}/>
      
    </div>
  )
}

export default Description
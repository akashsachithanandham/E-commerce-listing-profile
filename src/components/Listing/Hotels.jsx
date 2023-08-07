import React from 'react'
import HotelComponent from './HotelComponent'

function Hotel({results}) {
  
  return(
    results.map( result =>{
      return(<HotelComponent sectionInfo = { result}/>)
    })
  )
  
}

export default Hotel
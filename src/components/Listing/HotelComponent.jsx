import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HotelComponent.css'

const freeBreakfastText = 'Free Breakfast'

function HotelComponent({sectionInfo}) {

  const navigate = useNavigate()

  let {
    id,
    name,
    freeBreakfast,
    image,
    price,
  } = sectionInfo;


  const onHotelCardClick = () =>{
    navigate(`./profile/${id}`)
  }


  return (
    <div onClick={onHotelCardClick} className='hotel-wrapper'>
      {image? <img className='hotel-image' src={image}></img> : null}
      {name ? <div className='hotel-name'>{name}</div> : null}
      {price ? <div className='hotel-price'>₹ {price}</div> : null}
      {freeBreakfast ? <div className='hotel-food'>{freeBreakfastText}</div>: null}
    </div>
  )
}

export default HotelComponent
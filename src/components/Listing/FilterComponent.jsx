import React from 'react'
import './FilterComponent.css'

function FilterComponent({title, onClickHandler}) {
  
  return (
    <div className='filter' onClick={onClickHandler}>{title}</div>
  )
}

export default FilterComponent
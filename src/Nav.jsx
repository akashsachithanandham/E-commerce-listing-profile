import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function a(){
    setOpen(!open)
  }

  const onNavigation =() => {
    
    if(open){
      navigate('/akash')
    }
  }
  
  return (
    <>
    <div onClick={a}>
      Allow Change 
    </div>
    <div onClick={onNavigation}>
      Click Me
    </div>
    </>
  )
}

export default Nav
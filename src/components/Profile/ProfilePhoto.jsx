import React from 'react'
import FavoriteIcon from '../../images/ic_favourite.svg';
import BackIcon from '../../images/ic_back.svg';
import './ProfilePhoto.css'
import { useNavigate } from 'react-router-dom';

function ProfilePhoto({image, results, id, setResults}) {

  const navigate = useNavigate()

  const onBackClick = () =>{
    navigate('/')
  }

  const onFavClick = () => {
    let modified_results = results.map(result =>{
      if(
        result.id === id
      ){
        result.favorite = true;
      }
      return result;
    })
    setResults(modified_results)
  }
  return (
    <div>
      <div className='nav-section'>
        <img onClick={onBackClick} className='back overlay' src= {BackIcon} />
        <img onClick={onFavClick} className='favourite overlay-back'src= {FavoriteIcon}/>
     
        <img className='images' src={image} />
      </div>
     
    </div>
  )
}

export default ProfilePhoto
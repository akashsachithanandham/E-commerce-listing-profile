import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProfilePhoto from '../components/Profile/ProfilePhoto';
import PriceComponent from '../components/Profile/PriceComponent';
import Description from '../components/Profile/Description';
import '../styles/ProfilePage.css'
import BottomSticky from '../components/Profile/BottomSticky';

function Profile({results, setResults}) {
  let params = useParams();
  
  let {profile_id } = params;

  const [profile, setProfile] = useState({});

  //New API call is made so that we can use the profile page independently (no need for the user to come from listing always)
  useEffect(() =>{

    let filtered_results = [];
     
    fetch('https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c')
    .then(response => response.json())
    .then((results) =>{
      
      if(results.length){
        filtered_results = results.filter(result => result.id == profile_id );
      } 

      setProfile(filtered_results[0])
    })
  })

  let {
    name,
    image,
    price,
    description,
    location,
    id
  } = profile;

  
  return (
    <div className='profile-page'>
      <div className='content'>
      <ProfilePhoto image={image} id={id} results={results} setResults={setResults}/>
      <PriceComponent price={price} />
      <Description name={name} location={location} description={description} /> 
      <BottomSticky price={price}/>
      </div>
    </div>
  )
}

export default Profile
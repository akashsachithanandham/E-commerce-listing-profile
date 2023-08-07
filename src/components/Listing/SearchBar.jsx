import {React, useState} from 'react'
import './SearchBar.css'


function SearchBar({results, setResults, inputValue, setInputValue}) {

  const onSearchBarClick = (searchedValue) =>{
    setInputValue(searchedValue)
   
    fetch('https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c')
    .then(response => response.json())
    .then((results) =>{
      let filtered_results = []

      if(Number(searchedValue)){
        filtered_results = results.filter(result => result.id.includes(searchedValue));
      } else {
        filtered_results = results.filter(result => result.location.includes(searchedValue))
      }

      setResults(filtered_results)
      
    })
    

    
  }

  return (
    <div className='input-wrapper'>
       <input onChange={(e) => onSearchBarClick(e.target.value) } value={inputValue} ></input>
    </div>
   
  )
}

export default SearchBar
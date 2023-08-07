import {React, useState} from 'react'
import SearchBar from '../components/Listing/SearchBar'
import Filters from '../components/Listing/Filters';
import Hotels from '../components/Listing/Hotels';
import '../styles/ListingPage.css'

function Listing({results, setResults, inputValue, setInputValue}) {

  // const [results, setResults] = useState([]);

  return (
    <div className='listing-page'>
      <SearchBar results={results} setResults={setResults} inputValue={inputValue} setInputValue={setInputValue}/>
      <Filters results={results} setResults={setResults}/>
      <div className='hotels'>
        <Hotels results={results}/>
      </div>
    </div>
  )
}

export default Listing
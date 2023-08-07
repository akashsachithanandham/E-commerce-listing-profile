import React from 'react'
import FilterComponent from './FilterComponent'
import '../../styles/ListingPage.css'

function Filters({results, setResults}) {
  const onFavClick =() =>{
    let modified_results = results.filter(result =>result.favorite);
    setResults(modified_results)
  }
  const onSortClick =() =>{
    let prices = results.map(result => result.price).sort()

    let modified_results = [];

    prices.forEach(price =>{
      results.forEach(result =>{
        if(result.price === price){
          modified_results.push(result)
        }
      })
    })

    setResults(modified_results)
  }
  return (
    <div className='filters-section'>
     <FilterComponent title={"Favourites"} onClickHandler={onFavClick} />
     <FilterComponent title={"Sort"}  onClickHandler={onSortClick} />
     </div>
  )
}

export default Filters
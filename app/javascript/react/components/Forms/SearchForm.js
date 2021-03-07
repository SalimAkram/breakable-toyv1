import React, { useState, Fragment } from 'react'

import ShopTile from '../Tiles/ShopTile'

import cupOfJoeApi from '../../requests/CupOfJoeApi'

const SearchForm = props => {
  console.log('search form');
  const [errors, setErrors] = useState("");
  const [searchBarQuery, setSearchBarQuery] = useState("");
  const [searchList, setSearchList] = useState([])

  const handleInputChange = event => {
    event.preventDefault();
    const value = event.currentTarget.value;
    setSearchBarQuery(value);
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (searchBarQuery === "") {
      setErrors("search can't be blank")
    } else {
      cupOfJoeApi.cafeSearch(searchBarQuery)
        .then(body => {
          if (body.error === "hmm....that search was weird try it one more time") {
            setErrors(body.error)
            setSearchList([])
          } else {
            setSearchList(body.shops)
          }
        })
        setSearchBarQuery("")
        setErrors("")
    }
  }
 
  const searchListArray = searchList.map((shop) => {
    return (
      <ShopTile
        key={shop.result.place_id}
        id={shop.result.place_id}
        name={shop.result.name}
        url={shop.result.url}
      />
    )
  })

  let error;
  if (errors === "search can't be blank" || errors === "hmm....that search was weird try it one more time") {
    error = <div className="alert">{errors}</div>
  }

  return(
    <div className="square-box grid-y medium-grid-frame grid-padding-y .grid-margin-y">
      <div>
        {error}
      </div>  
      <form onSubmit={handleSubmit}>
        <div className="grid-x grid-padding-x align-center">
          <div className="medium-5 cell">
            <label>CITY, ZIP, STREET ADDRESS
                <input
                  name="search"
                  id="search"
                  type="text"
                  placeholder="BOSTON, MA, ZIP, ADDRESS"
                  onChange={handleInputChange} 
                  value = {searchBarQuery}
              />
            </label>
          </div>
        </div>
        <div className="medium-3 cell">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x grid-padding-x align-center" >
          <div className="cell small-12 medium-5 medium-cell-block-y">
            {searchListArray}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm



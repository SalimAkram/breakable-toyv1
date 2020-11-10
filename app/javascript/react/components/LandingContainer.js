import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

// import SearchForm from './SearchForm'
import CafeTile from './CafeTile'
import SearchForm from './SearchForm'

const LandingContainer = (props) => {
  const [landingDataFromDataBase, setLandingDataFromDataBase] = useState([])
  const [cafeList, setcafeList] = useState([])

  let lat;
  let long;

  const successCallback = (position) => {
    lat = position.coords.latitude 
    long = position.coords.longitude
    console.log(position)
  }
navigator.geolocation.getCurrentPosition(successCallback);

  useEffect(() => {

    fetch(`/api/v1/landings?lat=${lat}&long=${long}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        
        setcafeList(responseBody.cafes.results)
        setLandingDataFromDataBase(responseBody.landing)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const cafeListArray = cafeList.map((cafe) =>{
    // debugger
    return(
      
     <CafeTile 
        key={cafe.place_id}
        id={cafe.place_id}
        name={cafe.name}
        rating={cafe.rating}
        userRatings={cafe.user_ratings_total}
     />
    )
  })
  
  return (
    <Fragment>
      <div className="grid-x text-center">
      </div>
      <div className="/*square-box grid-y medium-grid-fame grid-padding-y .grid-margin-y*/">
        {/* <SearchForm /> */}
        <div className="grid-x">
          <div className="cell medium-auto medium-cell-block-container">
            <div className="grid-x grid-padding-x">
              <div className="cell box medium-6 medium-cell-block-y">
                {cafeListArray}
              </div>
              <div className="cell box medium-6 medium-cell-block-y">
                LIST AND SEARCH BAR HERE
              </div>
            </div>
          </div>
        </div>

      </div>
    {/* <div className="grid-x grid-margin-x">
      <div className="box cell  grid-margin-x small-12 medium-6">
        {cafeListArray}
      </div>
      <div className="box cell grid-margin-x small-12 medium-6">
        <h1>LIST AND SEARCH BAR HERE</h1>
      </div>
    </div> */}
    </Fragment>
  )
}

export default LandingContainer
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
        // debugger
        setcafeList(responseBody.cafes)
        setLandingDataFromDataBase(responseBody.landing)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])
// debugger
  const cafeListArray = cafeList.map((cafe) => {
    // debugger
    return(
     <CafeTile 
        key={cafe.result.place_id}
        id={cafe.result.place_id}
        name={cafe.result.name}
        rating={cafe.result.rating}
        url={cafe.result.url}
     />
    )
  })
  
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x" >
        <div className="cell box medium-6" style={{ height: "100%" }}>
            {cafeListArray}
        </div>
        <div className="cell box grid-y medium-2">
          <div className="card-user-container" >
            <div class="card-user-avatar">
              <img src="https://placehold.it/350x350" alt="" class="user-image"></img>
            </div>
            <div class="card-user-social">
              <ul class="menu">
                <li class="fa fa-twitter"></li>
                <li class="fa fa-dribbble"></li>
                <li class="fa fa-instagram"></li>
                <li class="fa fa-github"></li>
              </ul>
            </div>
            <div class="card-user-bio">
              <h4>User Name</h4>
              <p>UX/UI ,Front-end developer, Foundation interested. </p>
              <span class="location"><span class="location-icon fa fa-map-marker"></span><span class="location-text">Makkah Al-Mukaramah</span></span>
            </div>
            <div class="card-user-button">
            <a href="#" class="button">FOLLOW</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContainer

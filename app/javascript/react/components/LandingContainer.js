import React, { useEffect, useState, Fragment } from 'react'

import bo1 from '../../../assets/images/guji.jpg'
import bo2 from '../../../assets/images/IMG_2861.jpg'
import bo3 from '../../../assets/images/IMG_2862.jpg'
// import bo4 from '../../../assets/images/IMG_2863.jpg'


import CafeTile from './CafeTile'

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
      <div className="grid-x grid-margin-x">
        <div className="page-columns cell medium-6 test" style={{ height: "100%" }}>
            {cafeListArray}
        </div>
        <div className="page-columns cell test medium-6 grid-x" style={{ height: "100%" }}>
          <div className="cell small-6 medium-6">
            <div className="product-image-gallery">
              <a href="https://cxffeeblack.com/" target="blank">
                <img className="pdp-product-image" id="main-product-image" src={bo1} alt=""/>
              </a>
              <ul className="menu product-thumbs align-center">
                <a href="https://twitter.com/cxffeeblack?lang=en" target="blank"><li className="fa fa-twitter"></li></a>
                <a href="https://www.instagram.com/cxffeeblack/?hl=en" target="blank"><li className="fa fa-instagram"></li></a>
              </ul>
            </div>
          </div>
          <div className="cell small-6 medium-6">
            <div className="product-image-gallery">
              <a href="https://portrait.coffee/" target="blank">
                <img className="pdp-product-image" id="main-product-image" src={bo2} alt=""/>
              </a>
              <ul className="menu product-thumbs align-center">
                <a href="https://www.facebook.com/portraitcoffeeatl" target="blank"><li className="fa fa-facebook"></li></a>
                <a href="https://www.instagram.com/portraitcoffee/" target="blank"><li className="fa fa-instagram"></li></a>
              </ul>
            </div>
          </div>
          <div className="cell small-6 medium-6">
            <div className="product-image-gallery">
              <a href="https://www.blackacrescoffee.com/" target="blank">
                <img className="pdp-product-image" id="main-product-image" src={bo3} alt=""/>
              </a>
              <ul className="menu product-thumbs align-center">
                <a href="https://www.facebook.com/BlackAcresRoastery/" target="blank"><li className="fa fa-facebook"></li></a>
                <a href="https://www.instagram.com/blackacresroastery/" target="blank"><li className="fa fa-instagram"></li></a>
              </ul>
            </div>
          </div>
          <div className="cell small-6 medium-6">
            <div className="product-image-gallery">
              <img className="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt=""/>
              <ul className="menu product-thumbs align-center">
                <li className="fa fa-twitter"></li>
                <li className="fa fa-instagram"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingContainer

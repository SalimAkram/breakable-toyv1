import React, { useEffect, useState } from 'react'

import chemex from '../../../assets/images/depositphotos_190894814-stock-photo-front-view-chemex-alternative-coffee.jpg'
// import 
const BrewShow = (props) => {
const [brewShow, setBrewShow] = useState({});
const [user, setUser] = useState({});

const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/brews/${id}`)
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
        setUser(responseBody.user)
        setBrewShow(responseBody.brew)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

  let brewPhoto;
  if (brewShow.maker == "chemex") {
    brewPhoto = chemex
  } else if (brewShow.maker == "travel") {
    brewPhoto = travel
  } else if (brewShow.maker == "v60") {
    brewPhoto = v60
  } else if (brewShow.maker == "aeropress") {
    brewPhoto = aeropress
  }

  return(
    <div className="grid-container test-two">
      <div className="grid-x align-center">
        <div className="cell medium-6">
          <img className="image" src={brewPhoto} />
        </div>
      </div>
      <div className="grid-x grid-margin-y align-center">
        <div className="cell small-12 medium-6">
          <h2>{user.username}</h2>
        </div>
      </div>
      <div className="cell grid-x align-center">
        <div className="small-6 medium-6">
          <ul>
            <li>KETTLE TYPE - {brewShow.kettle}</li>
            <li>FILTER TYPER - {brewShow.filter}</li>
            <li>BEAN GRIND - {brewShow.grind}</li>
            <li>BEAN WEIGHT - {brewShow.grams}</li>
            <li>RATIO - {brewShow.ratio}</li>
          </ul>
        </div>
        <div className="small-6 medium-6">
          <ul>
            <li>TEMPERATURE - {brewShow.temperature}</li>
            <li>BREW TIME -  {brewShow.time}</li>
            <li>ROAST - {brewShow.roast}</li>
            <li>REGION - {brewShow.region}</li>
            <li>RATING:{brewShow.yield}</li> {/* change this to rating*/}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BrewShow
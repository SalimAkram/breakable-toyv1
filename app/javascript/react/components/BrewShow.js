import React, { useEffect, useState } from 'react'

import chemex from '../../../assets/images/depositphotos_190894814-stock-photo-front-view-chemex-alternative-coffee.jpg'
// import aeropress from '../../../assets/images/'
// import v60 from '../../../assets/images/'
// import travel from '../../../assets/images/'

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
    brewPhoto = chemex //photo for travel
  } else if (brewShow.maker == "v60") {
    brewPhoto = chemex //photo for v60
  } else if (brewShow.maker == "aeropress") {
    brewPhoto = chemex // photo for aeropress
  }

  return(
    <div className="grid-container">
      <div>
        <h3 className="title">{user.username}</h3>
        <h4 className>rating {brewShow.rating}/10</h4>
      </div>
      <div className="scrolling-container grid-x">
        <div className="cell small-12 medium-6 overview">
          <img className="brew-image" src={brewPhoto} />
        </div>
        <div className="cell small-12 medium-6 portfolio-resume-scrolling">
        <ul className="portfolio-resume-side-list">
          <h3>{brewShow.maker}</h3>
          <li>{brewShow.kettle} kettle</li>
          <li>{brewShow.filter} filter</li>
        </ul>
        <h3>beans</h3>
        <ul>
          <li>{brewShow.roast} roast</li>
          <li>{brewShow.region}</li>
          <li>{brewShow.grind} grind</li>
        </ul>
        <h3>math</h3>
        <ul>
          <li>{brewShow.grams} grams</li>
          <li>{brewShow.temperature} degrees</li>
          <li>{brewShow.time} minutes</li>
          <li>{brewShow.ratio} water ratio (optional)</li>
        </ul>
        <h3>instructions</h3>
        <ul>
          <p>{brewShow.instructions}</p>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default BrewShow
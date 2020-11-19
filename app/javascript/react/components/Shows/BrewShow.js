import React, { useEffect, useState } from 'react'

import chemex from '../../../../assets/images/depositphotos_190894814-stock-photo-front-view-chemex-alternative-coffee.jpg'
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
    <div className="grid-x grid-container align-center">
      <div className="cell small-12 medium-12">
        <div>
          <h3 className="title">{user.username}</h3>
        </div>
      <div className="article-row-section">
        <div className="article-row-section-inner">
          <h4 className="article-row-section-header">rating {brewShow.rating}/10</h4>
          <article className="article-row">
            <div className="left">
              <ul>
                <li>{brewShow.maker}</li>
                <li>{brewShow.filter} filter</li>
                <li>{brewShow.kettle} kettle</li>
              </ul>
            </div>
            <div className="center">
              <ul>
                <li>{brewShow.roast}</li>
                <li>{brewShow.region}</li>
                <li>{brewShow.grind} grind</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>{brewShow.grams} grams</li>
                <li>{brewShow.temperature} degrees</li>
                <li>{brewShow.time} minutes</li>
              </ul>
            </div>
          </article>
        <div>
          <li>{brewShow.ratio} water ratio (optional)</li>
          <p>{brewShow.instructions}</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BrewShow
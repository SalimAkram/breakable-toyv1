import React, { useEffect, useState } from 'react'

import cupOfJoeApi from '../../requests/CupOfJoeApi';

const BrewShow = (props) => {
  console.log('brew show');
  const [brewShow, setBrewShow] = useState({});
  const [user, setUser] = useState({});

  const url = props.match.url

  useEffect(() => {
  cupOfJoeApi.getBrew(url)
    .then(response => {
      setBrewShow(response.brew)
      setUser(response.user)
    })
  }, [])  

  return(
    <div className="article-row-section">
      <div className="article-row-section-inner">
        <h3>{user.username}</h3>
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
  )
}

export default BrewShow
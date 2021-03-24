import React, { useEffect, useState } from 'react'

import cupOfJoeApi from '../../requests/CupOfJoeApi';

const BrewShow = (props) => {
  console.log('brew show');
  const [brewShow, setBrewShow] = useState({ brew: {}, user: {} });

  const url = props.match.url

  useEffect(() => {
  cupOfJoeApi.getBrew(url)
    .then(response => {
      setBrewShow(response)
    })
  }, [])  

  return(
    <div className="article-row-section">
      <div className="article-row-section-inner">
        <h3>{brewShow.user.username}</h3>
        <h4 className="article-row-section-header">rating {brewShow.brew.rating}/10</h4>
        <article className="article-row">
          <div className="left">
            <ul>
              <li>{brewShow.brew.maker}</li>
              <li>{brewShow.brew.filter} filter</li>
              <li>{brewShow.brew.kettle} kettle</li>
            </ul>
          </div>
          <div className="center">
            <ul>
              <li>{brewShow.brew.roast}</li>
              <li>{brewShow.brew.region}</li>
              <li>{brewShow.brew.grind} grind</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>{brewShow.brew.grams} grams</li>
              <li>{brewShow.brew.temperature} degrees</li>
              <li>{brewShow.brew.time} minutes</li>
            </ul>
          </div>
        </article>
        <div>
          <li>{brewShow.brew.ratio} water ratio (optional)</li>
          <p>{brewShow.brew.instructions}</p>
        </div>
      </div>
    </div>
  )
}

export default BrewShow
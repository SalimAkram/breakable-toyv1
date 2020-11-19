import React from 'react'

const FavoriteTile = (props) => {
  
  return (
    <div className="article-row-section">
      <div className="article-row-section-inner">
       <h4 className="article-row-section-header">{props.name} - {props.brand}</h4>
       <h6>{props.notes}</h6>
        <article className="article-row">
          <div className="left">
            <ul>
              <li>{props.region}</li>
              <li>{props.process}</li>
              <li>{props.producer}</li>
            </ul>
          </div>
          <div className="center">
            <ul>
              <li>{}</li>
              <li>{}</li>
              <li>{}</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>{props.altitude}m</li>
              <li>${props.price}</li>
              <li>rating: {props.rating}/10</li>
            </ul>
          </div>
        </article>
      </div>
      <div>
        <li>fair trade: {props.fair_trade}</li>
        <li>ethical business practices:{props.ethical_business_practices}</li>
      </div>
    </div>
  )
}

export default FavoriteTile
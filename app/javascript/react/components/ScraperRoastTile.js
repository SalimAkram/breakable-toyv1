import React from 'react'

import image1 from '../../../assets/images/DSCF0745.JPG'

const ScraperRoastTile = (props) => {

  return (
    <div className="cell grid-margin-x small-6 medium-3">
      <div>
      <h5 className="roast-tile-title">{props.name}</h5>
      </div>
        <div className="roast-thumbnail">
        <img className="card-img" src={image1} alt="header" />
      </div>
        <p className="card-author"><a href={props.url} target="blank">view this roast</a></p>
    </div>
  )
}

export default ScraperRoastTile
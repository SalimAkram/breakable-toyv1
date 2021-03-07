import React from 'react'

import image1 from '../../../../assets/images/DSCF0745.JPG'

const ScraperRoastTile = (props) => {
console.log('scraper tile');
  return (
    <div className="cell grid-margin-x small-6 medium-3">
      <div>
        <h5 className="roast-tile-title">{props.name}</h5>
      </div>
      <div className="roast-thumbnail">
        <a href={props.url} target="blank"><img className="card-img" src={image1} /></a>
      </div>
        <p><a className="roast-a"href={props.url} target="blank">view this roast</a></p>
    </div>
  )
}

export default ScraperRoastTile
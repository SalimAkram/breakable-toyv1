import React from 'react'

import image1 from '../../../../assets/images/DSCF0745.JPG'

const ScraperRoastTile = (props) => {
console.log('scraper tile');
  return (
    <div className="cell small-6 medium-4 large-4">
      <div className="roast-title">
        {props.name}
      </div>
      <div>
        <a href={props.url} target="blank"><img className="card-img" src={image1} /></a>
      </div>
        <p><a className="roast-a"href={props.url} target="blank">view this roast</a></p>
    </div>
  )
}

export default ScraperRoastTile
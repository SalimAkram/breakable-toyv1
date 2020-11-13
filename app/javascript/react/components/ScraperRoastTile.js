import React from 'react'

import image1 from '../../../assets/images/DSCF0745.JPG'


const ScraperRoastTile = (props) => {
  return (
    <div className="cell small-6 medium-2">
      <img className="card-img" src={image1} alt="header" />
      <div className="card-info">
        <p className="card-title">{props.name}</p>
        <div className=""></div>
        <p className="card-author"> <a href={props.url} target="blank">view this roast</a></p>
      </div>
      <p onClick={props.handleClick}>add to favorites</p>
    </div>
  )
}

export default ScraperRoastTile
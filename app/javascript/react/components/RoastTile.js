import React from 'react'

import image1 from '../../../assets/images/DSCF0745.JPG'

const RoastTile = (props) =>{
  return (
    <div className="cell small-6 medium-2">
      <img className="card-img" src={image1} alt="header" />
      <div className="card-info">
        <p className="card-title">{props.name}</p>
        <div className=""></div>
        <p className="card-author"> <a href={props.url} target="blank">view this roast</a></p>
      </div>
    </div>
  )
}

export default RoastTile
{/* <p className="card-author"> <Link to={`roasts/${props.url}`}>view this roast
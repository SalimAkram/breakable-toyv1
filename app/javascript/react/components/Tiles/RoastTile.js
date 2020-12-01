import React from 'react'

import getPhoto from '../../requests/functions/GetPhoto'

const RoastTile = (props) =>{
  return (
    <div className="cell small-6 medium-2">
      <div>
        <h5 className="roast-tile-title">{props.name}</h5>
      </div>
      <div className="roast-thumbnail">
        <a href={props.url} target="blank"><img className="card-img" src={getPhoto()} /></a>
      </div>
      <div className="product-card-colors">
        <button onClick={props.handleClick} className="button-like">
         <i className="fa fa-heart"></i>
         <span>add to favorites</span>
       </button>
      </div>
    </div>
  )
}

export default RoastTile

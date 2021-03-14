import React from 'react'

import getPhoto from '../../requests/Functions/GetPhoto'

const RoastTile = (props) =>{
  console.log('roast tile');
  return (
    <div className="cell small-4 medium-4 large-4">
      <div className="roast-title">
        {props.name}
      </div>
      <div>
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

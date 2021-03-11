import React from 'react'
import { Link } from 'react-router-dom'

import ph from "../../../../assets/images/IMG_2428.jpg"

const BrewTile = (props) => {
  console.log('brew tile');
  return(
    <div className="cell small-12 medium-6">
      <div>
        <Link to={`brews/${props.id}`}> 
          <img className="pdp-product-image" id="main-product-image" src={ph} alt=""/>
        </Link>  
      </div>
        {props.user}
    </div>
  )
}

export default BrewTile

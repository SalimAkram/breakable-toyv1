import React from 'react'
import { Link } from 'react-router-dom'

import ph from "../../../assets/images/IMG_2428.jpg"

const BrewTile = (props) => {
  return(
    <div className="cell small-12 medium-6">
      <div className="product-image-gallery">
        <Link to={`brews/${props.id}`}> 
          <img className="pdp-product-image" id="main-product-image" src={ph} alt=""/>
          <div className="user">
            {props.user}
          </div> 
        </Link>  
      </div> 
    </div>
  )
}

export default BrewTile

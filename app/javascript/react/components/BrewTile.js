import React from 'react'
import { Link } from 'react-router-dom'
import ph from "../../../assets/images/IMG_2428.jpg"

const BrewTile = (props) => {
  return(
    <div className=" brew-tile cell small-12 medium-4">
      <div className="cell">
        <div className="product-image-gallery">
          <Link to={`brews/${props.id}`}> 
          <img className="pdp-product-image" id="main-product-image" src={ph} alt=""/>
            <div className="user">
              @{props.user}
            </div> 
          </Link>  
          <br/>
          <div className="user">
          </div>
        </div>
      </div>        
    </div>
  )
}

export default BrewTile

  
            {/* <div>
        {props.user}
      </div>
      <div>
        <img src={props.photo} alt=""/>
      </div
        <Link to={`brews/${props.id}`}>view </Link>  */}
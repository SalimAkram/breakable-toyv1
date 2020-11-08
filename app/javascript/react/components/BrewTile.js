import React from 'react'
import { Link } from 'react-router-dom'

const BrewTile = (props) => {
  return(
    <div className="brew-tile small-12 medium-6">
      <div>
        {props.user}
      </div>
      <div>
        <img src={props.photo} alt=""/>
      </div>
        <Link to={`brews/${props.id}`}>view this brew method</Link> 
    </div>
  )
}

export default BrewTile
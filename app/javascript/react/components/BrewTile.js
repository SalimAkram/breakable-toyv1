import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BrewTile = (props) => {
  return(
      <div className="brew-tile">
        <ul>Brew Method
          <li>
            Method: {props.method} || Filter: {props.filter_type} || Kettle: {props.kettle_type}
          </li>
          <li>
            Brew Time: {props.brew_time} minutes || Water Temperature: {props.water_temperature} degree
          </li>
          <li>
            Grams: {props.grams} || Ratio: {props.ratio} || Yield: {props.yield}
          </li>
          <li>
            Grind: {props.grind} || Roast: {props.roast} || Region: {props.roast_region}
          </li>
          <li>
            Instructions <br/>
            {props.instructions}
          </li>
            <Link to={`brews/${props.id}`}>view this brew method</Link> 
        </ul>
      </div>

  )
}

export default BrewTile
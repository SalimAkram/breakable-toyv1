import React from 'react'

const UserMethodTile = (props) =>{
  return(
    <div className="grid-x">
      <ul className="medium-12 cell test">Brew Method
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
          Instructions <br />
          {props.instructions}
        </li>
      </ul>
    </div>
  )
}

export default UserMethodTile
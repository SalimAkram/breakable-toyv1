import React from 'react'

const UserMethodTile = (props) =>{
  return(
    <div className="grid-x">
      <ul className="medium-12 cell test">Brew Method
        <li>
          Method: {props.maker} || Filter: {props.filter} || Kettle: {props.kettle}
        </li>
        <li>
          Brew Time: {props.time} minutes || Water Temperature: {props.temperature} degree
            </li>
        <li>
          Grams: {props.grams} || Ratio: {props.ratio} || Yield: {props.yield}
        </li>
        <li>
          Grind: {props.grind} || Roast: {props.roast} || Region: {props.region}
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
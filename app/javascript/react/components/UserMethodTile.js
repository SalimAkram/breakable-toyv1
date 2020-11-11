import React from 'react'

const UserMethodTile = (props) =>{
  return(
    <div className="cell small-6 medium-6">
      <div className="user-brew-tile">
        <ul>Brew Method
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
    </div>
  )
}

export default UserMethodTile
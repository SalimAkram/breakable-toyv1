import React from 'react'

const RoastTile = (props) =>{
  return (
    <ul>{props.name}
      <li>
        Brand: {props.brand}
      </li>
      <li>
        Region: {props.region}
      </li>
      <li>
        Notes: {props.notes}
      </li>
      <li>
        Price: ${props.price}
      </li>
    </ul>
  )
}



export default RoastTile
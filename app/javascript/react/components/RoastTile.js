import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to={`roasts/${props.id}`}>view this roast</Link>
    </ul>
  )
}



export default RoastTile
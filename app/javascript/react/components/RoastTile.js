import React from 'react'
import { Link } from 'react-router-dom'

const RoastTile = (props) =>{
  return (
    <div className="roast-tile">
      <div>
        {props.name}
      </div>
        <Link to={`roasts/${props.id}`}>view this roast</Link>
    </div>
  )
}



export default RoastTile
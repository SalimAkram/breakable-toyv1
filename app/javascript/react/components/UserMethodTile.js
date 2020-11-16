import React from 'react'

const UserMethodTile = (props) =>{
  return(
    <div className="">
        <ul className="">
          <h3>{props.maker}</h3>
          <li>{props.kettle} kettle</li>
          <li>{props.filter} filter</li>
        </ul>
        <h3>beans</h3>
        <ul>
          <li>{props.roast} roast</li>
          <li>{props.region}</li>
          <li>{props.grind} grind</li>
        </ul>
        <h3>math</h3>
        <ul>
          <li>{props.grams} grams</li>
          <li>{props.temperature} degrees</li>
          <li>{props.time} minutes</li>
          <li>{props.ratio} water ratio (optional)</li>
        </ul>
        <h3>instructions</h3>
        <ul>
          <p>{props.instructions}</p>
        </ul>
    </div>
    
  )
}

export default UserMethodTile
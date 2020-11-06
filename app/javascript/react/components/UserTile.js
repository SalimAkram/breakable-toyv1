import React from 'react'
import { Link, link } from 'react-router-dom'

const UserTile = (props) => {
  return (
    <div className="user">
      <div>
        username: {props.username} <br/> 
        email: {props.email}
      </div>
      <div>
        <Link to="/brews">Brews Page</Link>
      </div>
        <Link to="/roasts">Roasts Page</Link>
      <div>
        <Link to="/roasts/new">Add a New Roast</Link>
      </div>
    </div>  
  )
}

export default UserTile
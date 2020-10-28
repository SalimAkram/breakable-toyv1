import React from 'react'

const UserTile = (props) => {
  return (
    <div>
      <h1>
        {props.first_name} {props.last_name}
      </h1>  
      <h4>
        {props.username} || {props.email}
      </h4>
    </div>  
  )
}

export default UserTile
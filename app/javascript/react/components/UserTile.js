import React from 'react'

const UserTile = (props) => {
  return (
    <div className="user-tile">
      username: {props.username} <br/> 
      email: {props.email}
    </div>
)
}

export default UserTile
import React from 'react'

const UserTile = (props) => {
  return (
    <div>
      <h4>
        {props.username} || {props.email}
      </h4>
    </div>  
  )
}

export default UserTile
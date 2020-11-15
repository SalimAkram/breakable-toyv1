import React from 'react'

const UserTile = (props) => {
  return (
    <div className="callout user-tile">
      <h3> 
        {props.username}
      </h3> 
    </div>
  )
}

export default UserTile
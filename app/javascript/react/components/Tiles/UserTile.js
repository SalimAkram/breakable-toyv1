import React from 'react'

const UserTile = (props) => {
  return (
    <div className="cell user-top-bar">
      <h4 className="user-top-bar-text"> 
        {props.username}
      </h4> 
    </div>
  )
}

export default UserTile
import React from 'react'
import Button from '../../components/UI/button/Button'

const UserTile = (props) => {

  const addMethodHandler = () => {
    
  };
  console.log('user tile');
  return (
    <div className="user-top-bar">
      <h4>{props.username}</h4>
    </div>
  )
}

export default UserTile
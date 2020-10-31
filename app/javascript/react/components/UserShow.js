import React from 'react'
import UserTile from './UserTile'
import BrewMethodForm from './BrewMethodForm'

const UserShow = (props) => {
  return (
    <div>
      <UserTile
        key={props.user.id}
        id={props.user.id}
        first_name={props.user.first_name}
        last_name={props.user.last_name}
        username={props.user.username}
        email={props.user.email}
      />
    </div>
  )
}

export default UserShow
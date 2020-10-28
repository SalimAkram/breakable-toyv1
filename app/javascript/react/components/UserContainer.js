import React, { useState, useEffect } from 'react'
import UserShow from './UserShow'

const UserContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [errorList, setErrorList] = useState([])

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/users/${id}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        if(responseBody.error == null) {
          setUsersData(responseBody)
        } else if (responseBody.error[0] === "You need to be signed in first") {
          props.history.go("users/sign_in")
        } else if (responseBody.error) {
          setErrorList(responseBody.error)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div>
      <UserShow
        user={usersData}
      />
    </div>
  )
}

export default UserContainer
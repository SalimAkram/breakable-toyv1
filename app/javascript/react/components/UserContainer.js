import React, { useState, useEffect } from 'react'

import UserTile from './UserTile'
import BrewMethodForm from './BrewMethodForm'

const UserContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
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
          setBrewMethodsFromDataBase(responseBody.brews)
        } else if (responseBody.error[0] === "You need to be signed in first") {
          props.history.go("users/sign_in")
        } else if (responseBody.error) {
          setErrorList(responseBody.error)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const addBrewMethodFromForm = (brewMethodFromForm) => {
    fetch('/api/v1/brews', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(brewMethodFromForm),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  
  // write the map function to display their brew methods from the database

  return (
    <div className="grid-x grid-padding-y grid-margin-x">
      <h1>{errorList}</h1>
      <div className="cell small-12 text-center">
        <UserTile
          key={usersData.id}
          id={usersData.id}
          first_name={usersData.first_name}
          last_name={usersData.last_name}
          username={usersData.username}
          email={usersData.email}
        />
        <div className="cell small-12">
          <BrewMethodForm
            addBrewMethodFromForm={addBrewMethodFromForm}
          />
        </div>
        <div className="cell small-12">
          brew methods here 
          {/* <BrewMethodTile 
            from mapping function above
          /> */}
        </div>
      </div>
    </div>
  );

}

export default UserContainer
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import UserTile from './UserTile'
import UserMethodTile from './UserMethodTile'
import BrewMethodForm from './BrewMethodForm'

const UserShowContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
  const [shouldRedirect, setshouldRedirect] = useState(false)
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
        } else if (responseBody.error[0] === "You can only view your profile") {
          setshouldRedirect(true)
        } else if (responseBody.error) {
          setErrorList(responseBody.error)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  if (shouldRedirect) {
    <Redirect to='/'/>
  }
  
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

  const  userBrewMethodArray = brewMethodsFromDataBase.map((userBrewMethod)=>{
    return(
      <UserMethodTile 
        key={userBrewMethod.id}
        id={userBrewMethod.id}
        maker={userBrewMethod.maker}
        filter={userBrewMethod.filter}
        time={userBrewMethod.time}
        kettle={userBrewMethod.kettle}
        temperature={userBrewMethod.temperature}
        grams={userBrewMethod.grams}
        ratio={userBrewMethod.ratio}
        yield={userBrewMethod.yield}
        grind={userBrewMethod.grind}
        roast={userBrewMethod.roast}
        region={userBrewMethod.region}
        instructions={userBrewMethod.instructions}
      />
    )
  })

  return (
    <div className="grid-x grid-containter align-center user-grid ">
      <div className="errors">
        <h1>{errorList}</h1>
      </div>
      <div className="cell small-12 medium-8">
        <UserTile
          key={usersData.id}
          id={usersData.id}
          username={usersData.username}
          email={usersData.email}
        />
      </div>
      <div className="cell small-12 medium-8">
        <BrewMethodForm
          addBrewMethodFromForm={addBrewMethodFromForm}
        />
      </div>
      <div className="grid-x grid-containter">
        <div className="cell small-12 medium-6">
          this should be favorites
        </div>
        <div className="cell small-12 medium-6">
         {userBrewMethodArray}
        </div>
      </div>
    </div>
  );
}

export default UserShowContainer
import React, { useState, useEffect } from 'react'

import UserTile from './UserTile'
import UserMethodTile from './UserMethodTile'
import BrewMethodForm from './BrewMethodForm'
import { Redirect } from 'react-router-dom'

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
        } else if (responseBody.error[0] === "Only admins have access to this feature") {
          setshouldRedirect(true)
        } else if (responseBody.error) {
          setErrorList(responseBody.error)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

    if (shouldRedirect) {
      <Redirect to='/'/>
    }
  // const errorDisplayArray = errorList.map((error) => {
  // })

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
        method={userBrewMethod.method}
        filter_type={userBrewMethod.filter_type}
        brew_time={userBrewMethod.brew_time}
        kettle_type={userBrewMethod.kettle_type}
        water_temperature={userBrewMethod.water_temperature}
        grams={userBrewMethod.grams}
        ratio={userBrewMethod.ratio}
        yield={userBrewMethod.yield}
        grind={userBrewMethod.grind}
        roast={userBrewMethod.roast}
        roast_region={userBrewMethod.roast_region}
        instructions={userBrewMethod.instructions}
      />
    )
  })
  
    return (
    <div className="">
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
        <div className="">
          <BrewMethodForm
            addBrewMethodFromForm={addBrewMethodFromForm}
          />
        </div>
        <div>
          brew methods here 
         {userBrewMethodArray}
        </div>
      </div>
    </div>
  );

}

export default UserShowContainer
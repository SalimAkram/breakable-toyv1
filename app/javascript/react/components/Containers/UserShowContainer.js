import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import UserTile from '../Tiles/UserTile'
import FavoriteTile from '../Tiles/FavoriteTile'
import UserMethodTile from '../Tiles/UserMethodTile'
import BrewMethodForm from '../Forms/BrewMethodForm'

const UserShowContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [favorites, setFavorites] = useState([])
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
  const [shouldRedirect, setshouldRedirect] = useState(false)

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
          setUsersData(responseBody.user)
          setFavorites(responseBody.favorites)
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

  const userBrewMethodArray = brewMethodsFromDataBase.map((userBrewMethod)=>{
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

  const favoritesTileArray = favorites.map((favorite) => {
    return (
      <FavoriteTile
        key={favorite.id}
        id={favorite.id} 
        name={favorite.name}
        brand={favorite.brand}
        region={favorite.region}
        notes={favorite.notes}
        process={favorite.process}
        price={favorite.price}
        rating={favorite.rating}
        producer={favorite.producer}
        altitude={favorite.altitude}
        url={favorite.url}
      />
    )
  })

  return (
    <div className="grid-x grid-containter align-center user-grid">
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
      <div className="cell small-12 medium-8">
        <div>
          {userBrewMethodArray}    
        </div>
      </div>
      <div className="cell small-12 medium-8">
        <div>
          {favoritesTileArray}    
        </div>
      </div>
    </div>
  )
}

export default UserShowContainer
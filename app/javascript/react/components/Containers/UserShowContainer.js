import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import UserTile from '../Tiles/UserTile'
import FavoriteTile from '../Tiles/FavoriteTile'
import UserMethodTile from '../Tiles/UserMethodTile'
import BrewMethodForm from '../Forms/BrewMethodForm'

import cupOfJoeApi from '../../requests/CupOfJoeApi'

const UserShowContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [favorites, setFavorites] = useState([])
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
  const [shouldRedirect, setshouldRedirect] = useState(false)

  const id = props.match.params.id

  useEffect(() => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body.user)
        setFavorites(body.favorites)
        setBrewMethodsFromDataBase(body.brews)
      })
  },[])

  if (shouldRedirect) {
    <Redirect to='/'/>
  }
  
  const addBrewMethodFromForm = (brewMethodFromForm) => {
    cupOfJoeApi.addBrewMethod(brewMethodFromForm)
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
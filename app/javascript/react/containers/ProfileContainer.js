import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

import Aux from '../hoc/Aux/Aux'
import UserTile from '../components/Tiles/UserTile';
import FavoriteTile from '../components/Tiles/FavoriteTile';
import UserMethodTile from '../components/Tiles/UserMethodTile';
import BrewMethodForm from '../components/Forms/BrewMethodForm';
import EditBrewMethod from '../containers/EditBrewMethod'

import cupOfJoeApi from '../requests/CupOfJoeApi';

const ProfileContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [favorites, setFavorites] = useState([])
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
  const [brewId, setBrewId] = useState([])
  const [brewUpdate, setBrewUpate] = useState({})
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const [error, setError] = useState({})

  const id = props.match.params.id

  useEffect(() => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body.user)
        setFavorites(body.favorites)
        setBrewMethodsFromDataBase(body.brews)
      })
  },[]);
  
  const addBrewMethodFromForm = (brewMethodFromForm) => {
    cupOfJoeApi.addBrewMethod(brewMethodFromForm)
  }
  
  const editHandleClick = (event, id) => { 
    event.preventDefault()
    cupOfJoeApi.editBrew(id)
    .then(body => {
      setBrewUpate(body.brew)
      setShouldUpdate(true)
    })
    .catch(error => {

    });
  }

  const deleteHandleClick = (id) => { 
    const deleteBrew = (id) => {
      cupOfJoeApi.deleteBrew(id)
    }
  }

  const success = (id) => {
    let brew = `brews/${id}`
    return <Redirect to={brew} />
  }

  const cancel = (event) => {
    event.preventDefault();
    setShouldUpdate(false);
    setUpdateSucess(false);
  }
  
  const userBrewMethodArray = brewMethodsFromDataBase.map((userBrewMethod)=> {
    let selected;
    if (brewId === userBrewMethod.id) {
      selected = true
      setBrewId(userBrewMethod.id)
    }
 
    return(
      <Aux key={userBrewMethod.id}>
        <UserMethodTile 
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
          selected={selected}
          edit={(event) => editHandleClick(event, userBrewMethod.id)}
          delete={(event) => deleteHandleClick(event, userBrewMethod.id)}
        />
      </Aux>
    )
  });

  const favoritesTileArray = favorites.map((favorite) => {
    return (
      <Aux key={favorite.id}>
        <FavoriteTile
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
      </Aux>
    )
  });

  let form;
  if (shouldUpdate) {
    form = <EditBrewMethod brew={brewUpdate} success={success} cancel={cancel} />
  } else {
    form =  <BrewMethodForm addBrewMethodFromForm={addBrewMethodFromForm} />
  }

  if (updateSuccess) {
    form =  <BrewMethodForm addBrewMethodFromForm={addBrewMethodFromForm} /> 
  } 

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
       {form}
      </div>
      <div className="cell small-12 medium-8">
          {userBrewMethodArray}    
      </div>
      <div className="cell small-12 medium-8">  
        {favoritesTileArray}    
      </div>
    </div>
  );
};

export default ProfileContainer;

//want to render a modal eventually with the form the edit a brew method
import React, { useState, useEffect, Fragment } from 'react';

import Aux from '../hoc/Aux/Aux'
import UserTile from '../components/Tiles/UserTile';
import FavoriteTile from '../components/Tiles/FavoriteTile';
import UserMethodTile from '../components/Tiles/UserMethodTile';
import BrewMethodForm from '../components/Forms/BrewMethodForm';
import EditBrewMethod from '../containers/EditBrewMethod'
import Button from '../components/UI/button/Button'
import Modal from '../components/UI/modal/Modal'
import cupOfJoeApi from '../requests/CupOfJoeApi';

const ProfileContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [favorites, setFavorites] = useState([])
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
  const [brewUpdate, setBrewUpate] = useState({})
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const [error, setError] = useState({})
  const [display, setDisplay] = useState(false)

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
  
  const addMethodHandler = () => {
    setDisplay(true)
  }

  const editHandleClick = (event, id) => { 
    event.preventDefault()
    cupOfJoeApi.editBrew(id)
    .then(body => {
      setBrewUpate(body.brew)
      setShouldUpdate(true)
      setDisplay(true)
    })
    .catch(error => {
      setError(error)
    });
  }

  const deleteHandleClick = (event, id) => { 
    event.preventDefault();
    cupOfJoeApi.deleteBrew(id)
    .then(body => {
      console.log(body);
    })
  }

  const success = () => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body.user)
        setFavorites(body.favorites)
        setBrewMethodsFromDataBase(body.brews)
      })
    setShouldUpdate(false);
    setDisplay(false);
  }

  const cancel = (event) => {
    event.preventDefault();
    setShouldUpdate(false);
    setDisplay(false);
  }

  const modalClosed = (event) => {
    event.preventDefault()
    setDisplay(false)
    setShouldUpdate(false)
  }
  
  const userBrewMethodArray = brewMethodsFromDataBase.map((userBrewMethod)=> {
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
  if (display && shouldUpdate) {
    form = <EditBrewMethod brew={brewUpdate} success={success} cancel={cancel} />
  } else {
    form =  <BrewMethodForm cancel={cancel} addBrewMethodFromForm={addBrewMethodFromForm} /> 
  }
  
  return (
  <Aux>
    <UserTile key={usersData.id} username={usersData.username} />
    <Button clicked={addMethodHandler}>ADD A METHOD</Button>
    <div className="grid-x grid-containter align-center user-grid">
      <Modal show={display} modalClosed={modalClosed} >
        {display ? form : null}
      </Modal>
      <div className="cell small-12 medium-8">
        {userBrewMethodArray}    
      </div>
      <div className="cell small-12 medium-8">  
        {favoritesTileArray}    
      </div>
    </div>
  </Aux>
  );
};

export default ProfileContainer;
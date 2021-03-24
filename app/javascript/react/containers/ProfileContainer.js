import React, { useState, useEffect, Fragment, useCallback } from 'react';

import UserMethodTile from '../components/Tiles/UserMethodTile';
import BrewMethodForm from '../components/Forms/BrewMethodForm';
import EditBrewContainer from './EditBrewContainer';
import Button from '../components/UI/button/Button';
import Modal from '../components/UI/modals/Modal';
import FavoriteTile from '../components/Tiles/FavoriteTile';

import cupOfJoeApi from '../requests/CupOfJoeApi';

const ProfileContainer = (props) => {
  console.log('profile container');
  const [usersData, setUsersData] =  useState({ user: {}, brews: [], favorites: [] })
  const [brewUpdate, setBrewUpate] = useState({})
  const [shouldUpdate, setShouldUpdate] = useState(false)
  const [display, setDisplay] = useState(false)
  const [error, setError] = useState({})

  const id = props.match.params.id

  useEffect(() => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body)
      })
      .catch(error => {
        setError(error)
    });
  },[]);
  
  const addBrewMethodFromForm = (brewMethodFromForm) => {
    cupOfJoeApi.addBrewMethod(brewMethodFromForm)
  }

  const editHandleClick = (id) => { 
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

  const deleteHandleClick = (id) => { 
    cupOfJoeApi.deleteBrew(id)
    .then(body => {
      console.log(body);
    })
  }

  const success = () => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body)
      })
    setShouldUpdate(false);
    setDisplay(false);
  }

  const addMethodHandler = () => {
    setDisplay(true);
  }

  const cancel = () => {
    setShouldUpdate(false);
    setDisplay(false);
  }

  const modalClosed = () => {
    setDisplay(false);
    setShouldUpdate(false);
  }
  
  const userBrewMethodArray = usersData.brews.map(userBrewMethod => {
    return (
      <Fragment key={userBrewMethod.id}>
        <UserMethodTile 
          brewId={userBrewMethod.id}
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
          edit={() => editHandleClick(userBrewMethod.id)}
          delete={() => deleteHandleClick(userBrewMethod.id)}
        />
      </Fragment>
    )
  });

  const favoritesTileArray = usersData.favorites.map(favorite => {
    return (
      <Fragment key={favorite.id}>
        <FavoriteTile
          favoriteId={favorite.id} 
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
      </Fragment>
    )
  });

  let form;
  if (display && shouldUpdate) {
    form = (
      <div className="cell small-12 medium-8">
        <Modal show={display} modalClosed={modalClosed} >
          <EditBrewContainer brew={brewUpdate} success={success} cancel={cancel} />
        </Modal>
      </div>
    )
  } else {
    form = (
      <div className="cell small-12 medium-8">     
        <Modal show={display} modalClosed={modalClosed} >
          <BrewMethodForm cancel={cancel} addBrewMethodFromForm={addBrewMethodFromForm} /> 
        </Modal>
      </div>
    ) 
  }

  return (
    <Fragment>      
      {display ? form : null}
      <div className="user-top-bar">
        <h4>{usersData.username}</h4>
        <Button btnType="button profile" clicked={addMethodHandler}>ADD A METHOD</Button>
      </div>
      <div className="cell small-12 medium-8">
        {userBrewMethodArray}    
        {favoritesTileArray} 
      </div>
    </Fragment>
  );
};

export default ProfileContainer;
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

import Aux from '../hoc/Aux/Aux'
import UserTile from '../components/Tiles/UserTile';
import FavoriteTile from '../components/Tiles/FavoriteTile';
import UserMethodTile from '../components/Tiles/UserMethodTile';
import BrewMethodForm from '../components/Forms/BrewMethodForm';
import EditBrewMethodForm from '../components/Forms/EditBrewMethodForm';
import Modal from '../components/UI/modal/Modal'

import cupOfJoeApi from '../requests/CupOfJoeApi';

const UserShowContainer = (props) => {
  const [usersData, setUsersData] = useState({})
  const [favorites, setFavorites] = useState([])
  const [brewMethodsFromDataBase, setBrewMethodsFromDataBase] = useState([])
  const [brewId, setBrewId] = useState([])
  const [brewUpdate, setBrewUpate] = useState({})
  const [error, setError] = useState({})
  const [showModal, setShowModal] = useState(false)

  const id = props.match.params.id

  useEffect(() => {
    cupOfJoeApi.getUsers(id)
      .then(body => {
        setUsersData(body.user)
        setFavorites(body.favorites)
        setBrewMethodsFromDataBase(body.brews)
      })
  },[]);
  
  const closeEditForm = () => {
    setShowModal(false)
  }
  const showEditForm = () => {
    setShowModal(true)
  }

  const addBrewMethodFromForm = (brewMethodFromForm) => {
    cupOfJoeApi.addBrewMethod(brewMethodFromForm)
  }
  
   const editBrew = (id) => {
    cupOfJoeApi.editBrew(id)
    .then(body => {
      setBrewUpate(body)
    });
  }

  const deleteBrew = (id) => {
    cupOfJoeApi.deleteBrew(id)
  }

  const userBrewMethodArray = brewMethodsFromDataBase.map((userBrewMethod)=> {
    let selected;
    if (brewId === userBrewMethod.id) {
      selected = true
      setBrewId(userBrewMethod.id)
    }
 
    const editHandleClick = () => { editBrew(userBrewMethod.id) }
    const deleteHandleClick = () => { deleteBrew(userBrewMethod.id) }

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
          edit={editHandleClick}
          delete={deleteHandleClick}
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
      <div>
        <Modal show={showEditForm} modalClosed={closeEditForm}>
          {/* <EditBrewMethodForm/> */}
        </Modal>

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

export default UserShowContainer;

//want to render a modal with the form the edit a brew method
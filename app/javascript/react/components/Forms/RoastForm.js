import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

import ErrorList from "../ErrorList"
import cupOfJoeApi from '../../requests/CupOfJoeApi'
import ErrorModal from '../UI/modals/ErrorModal/ErrorModal'

const RoastForm = () =>{
  console.log('roast form');
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})
  const [show, setShow] = useState(false)
  const [userRoastData, setUserRoastData] = useState({
    name: "", 
    brand: "", 
    region: "", 
    notes: "", 
    process: "", 
    producer: "",
    altitude: "",
    url: "",
    price: "", 
    rating: "", 
    fair_trade: "",
    ethical_business_practices: "",
    harvest_date: ""
  });

  const handleInputChange = event => {
    event.preventDefault()
    setUserRoastData({
      ...userRoastData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    if (validRoastForSubmission()) {
      cupOfJoeApi.addRoast(userRoastData)
      setShouldRedirect(true)
      clearForm()
    }
  }

  if (shouldRedirect) {
    return <Redirect to='/roasts' />
  }

  const validRoastForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "brand", "url", "price", "rating"]
    requiredFields.forEach(field => {
      if (userRoastData[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    setShow(true)
    return _.isEmpty(submitErrors)
  }

  const clear = (event) =>{
    event.preventDefault()
    setUserRoastData({
      name: "",
      brand: "",
      region: "",
      notes: "",
      process: " ",
      producer: "",
      altitude: "",
      url: "",
      price: "",
      rating: "",
      fair_trade: "",
      ethical_business_practices: "",
      harvest_date: ""
    });
    setErrors({});
    setShow(false);
  }

  const clearForm = () =>{
    setUserRoastData({
      name: "",
      brand: "",
      region: "",
      notes: "",
      process: "",
      producer: "",
      altitude: "",
      url: "",
      price: "",
      rating: "",
      fair_trade: "default",
      ethical_business_practices: "",
      harvest_date: ""
    });
    setErrors({});
    setShow(false);
  }

  const closeModal = () => {
    setShow(false);
  }
  
  let errorMessage = 
    <ErrorModal closeModal={closeModal}>
      <ErrorList errors={errors} />  
    </ErrorModal>
  
  return(
    <div className="align-center">
      <h2>Add Roast</h2>
      {show ? errorMessage : null}
      <form className="translucent-form-overlay" onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell small-6 medium-6">
              <label>NAME
                <input
                  placeholder="Name"
                  name="name"
                  id="name"
                  type="text" 
                  onChange={handleInputChange}
                  value={userRoastData.name}
                />
              </label> 
            </div>
            <div className="cell small-6 medium-6" >
              <label>BRAND
                <input
                  placeholder="Brand"
                  name="brand"
                  id="brand"
                  type="text" 
                  onChange={handleInputChange}
                  value={userRoastData.brand}
                />
              </label> 
            </div>
            <div className="cell small-6 medium-9">
              <label>NOTES
                  <input
                    placeholder="Blueberry , fruity, sweet, Milk chocolate, citrus"
                    name="notes"
                    id="notes"
                    type="text"
                    onChange={handleInputChange}
                    value={userRoastData.notes}
                />
              </label>
            </div>
            <div className="cell small-6 medium-3">
              <label>PRICE
                <input
                  placeholder="$"
                  name="price"
                  id="price"
                  type="number"
                  min="1"
                  onChange={handleInputChange}
                  value={userRoastData.price}
                />
              </label>
            </div>
            <div className="cell small-12 medium-12">
              <label>URL
                <input
                  placeholder="https://www.vandykecoffeeroasters.com/Ethiopia_Ardi.html"
                  name="url"
                  id="url"
                  type="text"
                  onChange={handleInputChange}
                  value={userRoastData.url}
                />
              </label>
            </div>    
            <div className="cell small-6 medium-3">
              <label>REGION 
                <input
                  placeholder="Sidama"
                  name="region"
                  id="region"
                  type="text" 
                  onChange={handleInputChange}
                  value={userRoastData.region}
                />
              </label> 
            </div>
            <div className="cell small-6 medium-3">
              <label>PRODUCER 
                <input
                  placeholder="Alberto and Diego Guardia"
                  name="producer"
                  id="producer"
                  type="text" 
                  onChange={handleInputChange}
                  value={userRoastData.producer}
                />
              </label> 
            </div>  
            <div className="cell small-6 medium-3">
              <label>ALTITUDE (m)
                  <input
                    placeholder="1300"
                    name="altitude"
                    id="altitude"
                    type="number"
                    min="1"
                    onChange={handleInputChange}
                    value={userRoastData.altitude}
                />
              </label>
            </div>   
            <div className="cell small-6 medium-3">
              <label>HARVEST DATE
                <input
                  placeholder="April 26, 2020"
                  name="harvest_date"
                  id="harvest_date"
                  type="text"
                  onChange={handleInputChange}
                  value={userRoastData.harvest_date}
                />
              </label>
            </div>    
            <div className="cell small-6 medium-3">
              <label>PROCESS
                <select value={userRoastData.process} onChange={handleInputChange} name="process" id="process">
                  <option value=""></option>
                  <option value="washed">WASHED</option>
                  <option value="natural">NATURAL</option>
                  <option value="honey">HONEY</option>
                  <option value="other">OTHER</option>
                </select>
              </label> 
            </div>
            <div className="cell small-6 medium-3">
              <label>RATING
                  <select value={userRoastData.rating} onChange={handleInputChange} name="rating" id="rating">
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
            <div className="cell small-6 medium-3">
              <label>FAIR TRADE 
                <select value={userRoastData.fair_trade} onChange={handleInputChange} name="fair_trade" id="fair_trade">
                  <option value=""></option>
                  <option value="true">YES</option>
                  <option value="false">NO</option>
                </select>
              </label> 
            </div>
            <div className="cell small-6 medium-3">
              <label>ETHICAL
                <select value={userRoastData.ethical_business_practices} onChange={handleInputChange} name="ethnical_business_practices" id="ethnical_business_practices">
                  <option value=""></option>
                  <option value="true">YES</option>
                  <option value="false">NO</option>
                </select>
              </label> 
            </div>
          </div>
        </div>   
        <button className="button" onClick={clear}>Clear</button>
        <input  className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default RoastForm
import { set } from 'lodash'
import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"

import ErrorList from "./ErrorList"

const RoastForm = (props) =>{

  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})
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
    ethical_business_practices: ""
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
      addRoastFromForm(userRoastData)
      setShouldRedirect(true)
    }
    clearForm()
  }

  if (shouldRedirect) {
    alert("roast added successfully!")
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
      ethical_business_practices: ""
    })
    setErrors({})
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
      ethical_business_practices: ""
    })
  }

  const addRoastFromForm = (userRoastData) => {
    fetch('/api/v1/roasts', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(userRoastData),
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
      .then(response => response.json())
      .then(responseBody => {
        setRoastData([...roastData, responseBody])
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }
  
  return(
    <div className="translucent-form-overlay">
      <form className="" onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <h4>Add Roast</h4>
          <fieldset className="">
            <div className="left">
              <div className="row columns">
                <label>Name: 
                  <input
                    name="name"
                    id="name"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.name}
                  />
                </label> 
              </div>
              <div className="row columns" >
                <label>Brand: 
                  <input
                    name="brand"
                    id="brand"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.brand}
                  />
                </label> 
              </div>
              <div className="row columns">
                <label>Price:
                    <input
                    name="price"
                    id="price"
                    type="number"
                    onChange={handleInputChange}
                    value={userRoastData.price}
                  />
                </label>
              </div>
              <div className="row columns">
                <label>URL:
                  <input
                    name="url"
                    id="url"
                    type="text"
                    onChange={handleInputChange}
                    value={userRoastData.url}
                  />
                </label>
              </div>
              <div className="row columns">
                <label>Rating:
                  <select onChange={handleInputChange} name="rating" id="rating">
                    <option value="default">Select From The Following:</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="right">
              <div className="row columns">
                <label>Region: 
                  <input
                    name="region"
                    id="region"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.region}
                  />
                </label> 
              </div>
              <div className="row columns">
                <label>Notes: 
                  <input
                    name="notes"
                    id="notes"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.notes}
                  />
                </label> 
              </div>
              <div className="row columns">
                <label>Process: 
                  <select onChange={handleInputChange} name="process" id="process" type="text">
                    <option value=""> </option>
                    <option value="washed">WASHED</option>
                    <option value="tbd1">TBD1</option>
                    <option value="tbd2">TBD2</option>
                    <option value="tbd3">TBD3</option>
                    <option value="tbd4">TBD4</option>
                    <option value="tbd5">TBD5</option>
                  </select>
                </label> 
              </div>
              <div className="row columns">
                <label>Producer: 
                  <input
                    name="producer"
                    id="producer"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.producer}
                  />
                </label> 
              </div>
              <div className="row columns">
                <label>Altitude:
                  <input
                    name="altitude"
                    id="altitude"
                    type="number"
                    onChange={handleInputChange}
                    value={userRoastData.altitude}
                  />
                </label>
              </div>
              <div className="row columns">
                <label>Harvest Date:
                  <input
                    name="harvest_date"
                    id="harvest_date"
                    type="text"
                    onChange={handleInputChange}
                    value={userRoastData.harvest_date}
                  />
                </label>
              </div>
              <div className="row columns">
                <label>Fair Trade: 
                  <select onChange={handleInputChange} name="fair_trade" id="fair_trade">
                    <option value="default">Select From The Following:</option>
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                  </select>
                </label> 
              </div>
              <div className="row columns">
                <label>Ethnical Business Practices: 
                  <select onChange={handleInputChange} name="ethnical_business_practices" id="ethnical_business_practices">
                    <option value="default">Select From The Following:</option>
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                  </select>
                </label> 
              </div>
            </div>
          </fieldset>
        <button className="button" onClick={clear}>
          Clear
        </button>
        <input type="submit" value="Submit" className="primary button expanded search-button"/>
      </form>
    </div>
  )
}

export default RoastForm
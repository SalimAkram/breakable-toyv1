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
      ethical_business_practices: "",
      harvest_date: ""
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
      ethical_business_practices: "",
      harvest_date: ""
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
    <div className="grid-x grid-containter align-center user-grid">
      <div className="small-12 medium-6">
        <div className="grid-x translucent-form-overlay">
          <form className="roast-form"onSubmit={handleSubmit}>
            <ErrorList errors={errors} />
            <div className="roast-title field"> <h5>Add Roast</h5></div>
              <fieldset>
                <div className="grid-x grid-padding-x align-center">
                  <div className="cell small-6 medium-6">
                    <label>Name 
                      <input
                        name="name"
                        id="name"
                        type="text" 
                        onChange={handleInputChange}
                        value={userRoastData.name}
                      />
                    </label> 
                  </div>
                  <div className="cell small-6 medium-6" >
                    <label>Brand 
                      <input
                        name="brand"
                        id="brand"
                        type="text" 
                        onChange={handleInputChange}
                        value={userRoastData.brand}
                      />
                    </label> 
                  </div>
                  <div className="cell small-6 medium-9">
                    <label>Notes
                        <input
                        name="notes"
                        id="notes"
                        type="text"
                        onChange={handleInputChange}
                        value={userRoastData.notes}
                      />
                    </label>
                  </div>
                  <div className="cell small-6 medium-3">
                    <label>Price
                        <input
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
                        name="url"
                        id="url"
                        type="text"
                        onChange={handleInputChange}
                        value={userRoastData.url}
                      />
                    </label>
                  </div>    
                </div>   
                <div className="grid-x grid-padding-x"> 
                  <div className="cell small-6 medium-3">
                    <label>Region 
                      <input
                        name="region"
                        id="region"
                        type="text" 
                        onChange={handleInputChange}
                        value={userRoastData.region}
                      />
                    </label> 
                  </div>
                  <div className="cell small-6 medium-3">
                    <label>Producer 
                      <input
                        name="producer"
                        id="producer"
                        type="text" 
                        onChange={handleInputChange}
                        value={userRoastData.producer}
                      />
                    </label> 
                  </div>          
                  <div className="cell small-6 medium-3">
                    <label>Process 
                      <select value={userRoastData.process} onChange={handleInputChange} name="process" id="process" type="text">
                        <option value=""> </option>
                        <option value="washed">WASHED</option>
                        <option value="natural">NATURAL</option>
                        <option value="honey">HONEY</option>
                        <option value="other">OTHER</option>
                      </select>
                    </label> 
                  </div>
                  <div className="cell small-6 medium-3">
                    <label>Altitude
                          <input
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
                    <label>Rating
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
                    <label>Harvest Date
                      <input
                        name="harvest_date"
                        id="harvest_date"
                        type="text"
                        onChange={handleInputChange}
                        value={userRoastData.harvest_date}
                      />
                    </label>
                  </div>
                  <div className="cell small-6 medium-3">
                    <label>Fair Trade 
                      <select value={userRoastData.fair_trade} onChange={handleInputChange} name="fair_trade" id="fair_trade">
                        <option value=""></option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                      </select>
                    </label> 
                  </div>
                  <div className="cell small-6 medium-3">
                    <label>Ethical
                      <select value={userRoastData.ethical_business_practices} onChange={handleInputChange} name="ethnical_business_practices" id="ethnical_business_practices">
                        <option value=""></option>
                        <option value="true">YES</option>
                        <option value="false">NO</option>
                      </select>
                    </label> 
                  </div>
                </div>
              </fieldset>   
              <button className="button" onClick={clear}>Clear</button>
              <input type="submit" value="Submit" className="button" />
          </form>
      </div>
      </div>
    </div>
  )
}

export default RoastForm
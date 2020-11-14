import React, { useState } from 'react'
import { Redirect } from "react-router-dom"

import ErrorList from './ErrorList'

const BrewMethodForm = (props) => {

  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [errors, setErrors] = useState({})
  const [userBrewMethodData, setUserBrewMethodData] = useState({
    maker: "",
    filter: "",
    time: "",
    kettle: "",
    temperature: "",
    grams: "",
    ratio: "",
    rating: "",
    grind: "",
    instructions: "",
    roast: "",
    region: ""
  });

  const handleInputChange = event => {
    event.preventDefault()
    setUserBrewMethodData({
      ...userBrewMethodData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validBrewForSubmission()) {
      props.addBrewMethodFromForm(userBrewMethodData)
      setShouldRedirect(true)
    }
    clearForm()
  }

  if (shouldRedirect) {
    alert("brew added successfully!")
    return <Redirect to='/brews' />
  }

  const validBrewForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["maker", "filter", "time", "kettle", "temperature", "grams", "grind", "instructions"]
    requiredFields.forEach(field => {
      if (userBrewMethodData[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const clear = (event) => {
    event.preventDefault()
    setUserBrewMethodData ({
      maker: "",
      filter: "",
      time: "",
      kettle: "",
      temperature: "",
      grams: "",
      ratio: "",
      rating: "",
      grind: "",
      instructions: "",
      roast: "",
      region: ""
    })
  setErrors({})
}

  const clearForm = () => {
    setUserBrewMethodData ({
      maker: "",
      filter: "",
      time: "",
      kettle: "",
      temperature: "",
      grams: "",
      ratio: "",
      rating: "",
      grind: "",
      instructions: "",
      roast: "",
      region: ""
    })
}
 
return(
    <div className="grid-x translucent-form-overlay">
      <form className="brew-form " onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <div className="method-title field"> <h4>Add a Brew Method </h4></div> 
          <fieldset>
            <div className="grid-x grid-padding-x brew-fields">
              <div className="small-6 cell">
                <label className="field">Maker 
                  <select value={userBrewMethodData.maker} onChange={handleInputChange} name="maker" id="maker">
                    <option value=""></option>
                    <option value="chemex">CHEMEX</option>
                    <option value="travel">TRAVEL</option>
                    <option value="V60">V60</option>
                    <option value="aeropress">AEROPRESS</option>
                    <option value="tbd1">TBB1</option>
                    <option value="tbd2">TBD2</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">
                <label className="field">Filter Type 
                  <select value={userBrewMethodData.filter} onChange={handleInputChange} name="filter" id="filter">
                    <option value=""></option>
                    <option value="natural paper">NATURAL PAPER</option>
                    <option value="white paper">WHITE PAPER</option>
                    <option value="metal">METAL</option>
                    <option value="natural half moon">NATURAL HALF MOON</option>
                    <option value="white half moon">WHITE HALF MOON</option>
                    <option value="other">OTHER</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">
                <label className="field">Kettle Type 
                  <select value={userBrewMethodData.kettle} onChange={handleInputChange} name="kettle" id="kettle">
                    <option value=""></option>
                    <option value="electric">ELECTRIC</option>
                    <option value="stovetop">STOVETOP</option>
                    <option value="tbd1">OTHER</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">  
                <label className="field">Grind
                  <select value={userBrewMethodData.grind} onChange={handleInputChange} name="grind" id="grind">
                    <option value=""></option>
                    <option value="medium fine">MEDIUM FINE</option>
                    <option value="medium">MEDIUM</option>
                    <option value="medium-coarse">MEDIUM-COARSE</option>
                    <option value="coarse">COARSE</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">  
                <label className="field">Roast
                  <select value={userBrewMethodData.roast} onChange={handleInputChange} name="roast" id="roast">
                    <option value=""></option>
                    <option value="light roast">LIGHT ROAST</option>
                    <option value="medium roast">MEDIUM ROAST</option>
                    <option value="dark roast">DARK ROAST</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">
                <label className="field">Roast Region
                  <select value={userBrewMethodData.region} onChange={handleInputChange} name="region" id="region">
                    <option value=""></option>
                    <option value="ethiopian">ETHIOPIA</option>
                    <option value="costa rican">COSTA RICA</option>
                    <option value="kenyan">KENYA</option>
                    <option value="rwanda">RWANDA</option>
                    <option value="hawaiian">HAWAIIAN</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="grid-x grid-padding-x align-center brew-fields">
              <div className="small-4 medium-3 cell text-center">
                  <label className="field">Time
                    <input 
                      name="time"
                      id="time"
                      type="number" 
                      min="1"
                      max="5"
                      onChange={handleInputChange} 
                      value={userBrewMethodData.time}
                      />
                  </label>
              </div>
              <div className="small-4 medium-3 cell">
                <label className="field">Temp
                    <input
                      name="temperature"
                      id="temperature"
                      type="number"
                      min="170"
                      max="212"
                      onChange={handleInputChange}
                      value={userBrewMethodData.temperature}
                  />
                </label>
              </div>
              <div className="small-4 medium-3 cell">
                <label className="field">Grams
                    <input
                      name="grams"
                      id="grams"
                      type="number"
                      min="16"
                      max="40"
                      step="4"
                      onChange={handleInputChange}
                      value={userBrewMethodData.grams}
                  />
                </label>
              </div>
              <div className="small-2 medium-2 cell">
                <label className="field">Ratio
                    <input
                      name="ratio"
                      id="ratio"
                      type="text"
                      onChange={handleInputChange}
                      value={userBrewMethodData.ratio}
                  />
                </label>
              </div>
              <div className="small-2 medium-1 cell">
                <label className="field">Rating
                    <input
                      name="rating"
                      id="rating"
                      type="number"
                      min="1"
                      max="10"
                      onChange={handleInputChange}
                      value={userBrewMethodData.rating}
                  />
                </label>
              </div>
              <div className="cell">
                <label className="field">Instructions
                    <textarea
                      name="instructions"
                      id="instructions"
                      rows="10"
                      onChange={handleInputChange}
                      value={userBrewMethodData.instructions}
                  />
                </label>
              </div>
            </div> 
          </fieldset>
          <button className="button" onClick={clear}>Clear</button>
          <input  type="submit" value="Submit" className="button" />
      </form>
    </div>
  )
}

export default BrewMethodForm

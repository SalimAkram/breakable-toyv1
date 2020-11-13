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
    yield: "",
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
      yield: "",
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
      yield: "",
      grind: "",
      instructions: "",
      roast: "",
      region: ""
    })
}
 
return(
    <div className="grid-x">
      <form className="brew-form" onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
        <h5>Add a Brew Method</h5>
          <fieldset>
            <div className="grid-x grid-padding-x">
              <div className="small-6 cell">
                <label>Maker 
                  <select value={userBrewMethodData.maker} onChange={handleInputChange} name="maker" id="maker">
                    <option value="default">Select your brew method</option>
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
                <label>Filter Type 
                  <select value={userBrewMethodData.filter} onChange={handleInputChange} name="filter" id="filter">
                    <option value="default">Select filter type</option>
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
                <label>Kettle Type 
                  <select value={userBrewMethodData.kettle} onChange={handleInputChange} name="kettle" id="kettle">
                    <option value="default">Select From The Following</option>
                    <option value="electric">ELECTRIC</option>
                    <option value="stovetop">STOVETOP</option>
                    <option value="tbd1">OTHER</option>
                    <option value="tbd1">TBD1</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">  
                <label>Grind
                  <select value={userBrewMethodData.grind} onChange={handleInputChange} name="grind" id="grind">
                    <option value="default">Select From The Following</option>
                    <option value="medium fine">MEDIUM FINE</option>
                    <option value="medium">MEDIUM</option>
                    <option value="medium-coarse">MEDIUM-COARSE</option>
                    <option value="coarse">COARSE</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">  
                <label>Roast
                  <select value={userBrewMethodData.roast} onChange={handleInputChange} name="roast" id="roast">
                    <option value="default">Select From The Following</option>
                    <option value="light roast">LIGHT ROAST</option>
                    <option value="medium roast">MEDIUM ROAST</option>
                    <option value="dark roast">DARK ROAST</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">
                <label>Roast Region
                  <select value={userBrewMethodData.region} onChange={handleInputChange} name="region" id="region">
                    <option value="default">Select From The Following</option>
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
            <div className="grid-x grid-padding-x align-center">
              <div className="small-2 cell text-center">
                  <label>Brew Time
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
              <div className="small-2 medium-2 cell">
                <label>Water Temperature
                    <input
                      name="temperature"
                      id="temperature"
                      type="number"
                      min="185"
                      max="212"
                      onChange={handleInputChange}
                      value={userBrewMethodData.temperature}
                  />
                </label>
              </div>
              <div className="small-2 medium-2 cell">
                <label>Grams
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
                <label>Grams/Water Ratio
                    <input
                      name="ratio"
                      id="ratio"
                      type="text"
                      onChange={handleInputChange}
                      value={userBrewMethodData.ratio}
                  />
                </label>
              </div>
              <div className="small-2 medium-2 cell">
                <label>Coffee Yield
                    <input
                      name="yield"
                      id="yield"
                      type="number"
                      min="8"
                      max="20"
                      step="2"
                      onChange={handleInputChange}
                      value={userBrewMethodData.yield}
                  />
                </label>
              </div>
              <div className="cell">
                <label>Instructions
                    <textarea
                      name="instructions"
                      id="instructions"
                      rows="10"
                      cols="30"
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

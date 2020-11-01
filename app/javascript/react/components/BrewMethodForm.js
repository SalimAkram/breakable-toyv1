import React, { useState } from 'react'

const BrewMethodForm = (props) => {

  const [userBrewMethodData, setUserBrewMethodData] = useState({
    type: "",
    filter_type:"", 
    brew_time: "", 
    kettle_type: "", 
    water_temperature: "", 
    grams: "", 
    ratio: "", 
    yield: "",
    grind: "", 
    instructions: "", 
    result_description: ""
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
    props.addBrewMethodFromForm(userBrewMethodData)
    clearForm()
  }

  const clearForm = () => {
    setUserBrewMethodData ({
      type: "",
      filter_type: "",
      brew_time: "",
      kettle_type: "",
      water_temperature: "",
      grams: "",
      ratio: "",
      yield: "",
      grind: "",
      instructions: "",
      result_description: ""
    })
}
  return(
    <form onSubmit={handleSubmit}>
      <h4>Add a Brew Method</h4>
        <fieldset className="small-12 columns">
          <ul className="menu vertical">
            <li>
              <label>Brew Method: 
                <select onChange={handleInputChange} name="method" id="method">
                  <option value="default">Select your brew method</option>
                  <option value="chemex">CHEMEX</option>
                  <option value="travel">TRAVEL</option>
                  <option value="plastic">PLASTIC</option>
                  <option value="plastic">OTHER</option>
                  <option value="tbd1">TBB1</option>
                  <option value="tbd2">TBD2</option>
                </select>
              </label> 
            </li>
            <li>
              <label>Filter Type: 
                <select onChange={handleInputChange} name="filter_type" id="filter_type">
                  <option value="default">Select filter type:</option>
                  <option value="metal">METAL</option>
                  <option value="natural paper">NATURAL PAPER</option>
                  <option value="white paper">WHITE PAPER</option>
                  <option value="tbd1">OTHER</option>
                  <option value="tbd2">TBD1</option>
                  <option value="tbd2">TBD2</option>
                </select>
              </label> 
            </li>
            <li>
              <label>Kettle Type: 
                <select onChange={handleInputChange} name="kettle_type" id="kettle_type">
                  <option value="default">Select From The Following:</option>
                  <option value="electric">ELECTRIC</option>
                  <option value="stovetop">STOVETOP</option>
                  <option value="tbd1">OTHER</option>
                  <option value="tbd1">TBD1</option>
                </select>
              </label> 
            </li>
            <li>
              <label>Grind:
                    <select onChange={handleInputChange} name="grind" id="grind">
                  <option value="default">Select From The Following:</option>
                  <option value="medium fine">MEDIUM FINE</option>
                  <option value="medium">MEDIUM</option>
                  <option value="medium-coarse">MEDIUM-COARSE</option>
                  <option value="coarse">COARSE</option>
                </select>
              </label>
            </li>
            <li>
              <label>Brew Time:
                <input 
                  name="brew_time"
                  id="brew_time"
                  type="number" 
                  min="1"
                  max="5"
                  onChange={handleInputChange} 
                  value={userBrewMethodData.brew_time}
                  />
              </label>
            </li>
            <li>
              <label>Water Temperature:
                  <input
                    name="water_temperature"
                    id="water_temperature"
                    type="number"
                    min="185"
                    max="212"
                    onChange={handleInputChange}
                    value={userBrewMethodData.water_temperature}
                />
              </label>
            </li>
            <li>
              <label>Grams:
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
            </li>
            <li>
              <label>Grams/Water Ratio:
                  <input
                    name="ratio"
                    id="ratio"
                    type="text"
                    onChange={handleInputChange}
                    value={userBrewMethodData.ratio}
                />
              </label>
            </li>
            <li>
              <label>Coffee Yield:
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
            </li>
            <li>
              <label>Instructions:
                  <input
                    name="instructions"
                    id="instructions"
                    type="text"
                    onChange={handleInputChange}
                    value={userBrewMethodData.instructions}
                />
              </label>
            </li>
            <li>
              <label>Describe Your Result:
                  <input
                    name="result_description"
                    id="result_description"
                    type="text"
                    onChange={handleInputChange}
                    value={userBrewMethodData.result_description}
                />
              </label>
            </li>
          </ul>
        </fieldset>
      <input  type="submit" value="Submit" className="button" />
    </form>
  )
}

export default BrewMethodForm
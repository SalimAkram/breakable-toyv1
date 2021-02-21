import React from 'react'

import Aux from '../../hoc/Aux/Aux'

const EditBrewMethodForm = (props) => {

  const handleSubmit = () => {

  }

  const handleInputChange = () => {

  }

  const clear = () => {

  }

  return (
    <Aux>
      <div className="grid-x translucent-form-overlay">
      <form className="brew-form " onSubmit={handleSubmit}>
        <div className="method-title field"> <h5>Edit</h5></div> 
          <fieldset>
            <div className="grid-x grid-padding-x">
              <div className="small-6 cell">
                <label className="field">Maker 
                  <select value={props.maker} onChange={handleInputChange} name="maker" id="maker">
                    <option value={props.maker}>{props.maker}</option>
                    <option value="chemex">CHEMEX</option>
                    <option value="travel">TRAVEL</option>
                    <option value="V60">V60</option>
                    <option value="aeropress">AEROPRESS</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">
                <label className="field">Filter Type 
                  <select value={props.filter} onChange={handleInputChange} name="filter" id="filter">
                    <option value=""></option>
                    <option value="natural half moon">NATURAL HALF MOON</option>
                    <option value="natural paper">NATURAL PAPER</option>
                    <option value="white half moon">WHITE HALF MOON</option>
                    <option value="white paper">WHITE PAPER</option>
                    <option value="metal">METAL</option>
                    <option value="other">OTHER</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">
                <label className="field">Kettle Type 
                  <select value={props.kettle} onChange={handleInputChange} name="kettle" id="kettle">
                    <option value=""></option>
                    <option value="electric">ELECTRIC</option>
                    <option value="stovetop">STOVETOP</option>
                    <option value="tbd1">OTHER</option>
                  </select>
                </label> 
              </div>
              <div className="small-6 cell">  
                <label className="field">Grind
                  <select value={props.grind} onChange={handleInputChange} name="grind" id="grind">
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
                  <select value={props.roast} onChange={handleInputChange} name="roast" id="roast">
                    <option value=""></option>
                    <option value="light roast">LIGHT ROAST</option>
                    <option value="medium roast">MEDIUM ROAST</option>
                    <option value="dark roast">DARK ROAST</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
              <div className="small-6 cell">
                <label className="field">Region
                  <select value={props.region} onChange={handleInputChange} name="region" id="region">
                    <option value=""></option>
                    <option value="Ethiopian">ETHIOPIA</option>
                    <option value="Costa Rican">COSTA RICA</option>
                    <option value="Kenyan">KENYA</option>
                    <option value="Rwanda">RWANDA</option>
                    <option value="Guatemala">GUATEMALA</option>
                    <option value="Columbia">COLUMBIA</option>
                    <option value="Hawaiian">HAWAIIAN</option>
                    <option value="other">OTHER</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="grid-x grid-padding-x align-center">
              <div className="small-4 medium-2 cell text-center">
                  <label className="field">Time
                    <input 
                      value="test"
                      name="time"
                      id="time"
                      type="number" 
                      min="1"
                      max="10"
                      onChange={handleInputChange} 
                      value={props.time}
                      />
                  </label>
              </div>
              <div className="small-4 medium-2 cell">
                <label className="field">Temp
                    <input
                      name="temperature"
                      id="temperature"
                      type="number"
                      min="170"
                      max="212"
                      onChange={handleInputChange}
                      value={props.temperature}
                  />
                </label>
              </div>
              <div className="small-4 medium-2 cell">
                <label className="field">Grams
                    <input
                      name="grams"
                      id="grams"
                      type="number"
                      min="16"
                      max="40"
                      step="4"
                      onChange={handleInputChange}
                      value={props.grams}
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
                      value={props.ratio}
                  />
                </label>
              </div>
              <div className="small-2 medium-2 cell">
                <label className="field">Rating
                    <input
                      name="rating"
                      id="rating"
                      type="number"
                      min="1"
                      max="10"
                      onChange={handleInputChange}
                      value={props.rating}
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
                      value={props.instructions}
                  />
                </label>
              </div>
            </div> 
          </fieldset>
          <button className="button" onClick={clear}>Clear</button>
          <input  type="submit" value="Submit" className="button" />
      </form>
    </div>
    </Aux>
  );
};

export default EditBrewMethodForm;
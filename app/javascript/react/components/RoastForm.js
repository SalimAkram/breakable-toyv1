import React, { useState, useEffect } from 'react'

const RoastForm = (props) =>{

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

  const handleSubmit = event =>{
    event.preventDefault()
    // props.addRoastFromForm(userRoastData)
    addRoastFromForm(userRoastData)
    clearForm()
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
      fair_trade: "",
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
    <div className="flex-container align-center ">
      <form onSubmit={handleSubmit}>
        <h4>Add Roast</h4>
          <fieldset className="small-12 columns">
            <ul className="menu vertical">
              <li>
                <label>Name: 
                  <input
                    name="name"
                    id="name"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.name}
                  />
                </label> 
              </li>
              <li>
                <label>Brand: 
                  <input
                    name="brand"
                    id="brand"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.brand}
                  />
                </label> 
              </li>
              <li>
                <label>Region: 
                  <input
                    name="region"
                    id="region"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.region}
                  />
                </label> 
              </li>
              <li>
                <label>Notes: 
                  <input
                    name="notes"
                    id="notes"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.notes}
                  />
                </label> 
              </li>
              <li>
                <label>Process: 
                  <select onChange={handleInputChange} name="process" id="process">
                    <option value="default">Select Process type:</option>
                    <option value="washed">WASHED</option>
                    <option value="tbd1">TBD1</option>
                    <option value="tbd2">TBD2</option>
                    <option value="tbd3">TBD3</option>
                    <option value="tbd4">TBD4</option>
                    <option value="tbd5">TBD5</option>
                  </select>
                </label> 
              </li>
              <li>
                <label>Producer: 
                  <input
                    name="producer"
                    id="producer"
                    type="text" 
                    onChange={handleInputChange}
                    value={userRoastData.producer}
                  />
                </label> 
              </li>
              <li>
                <label>Altitude:
                  <input
                    name="altitude"
                    id="altitude"
                    type="number"
                    onChange={handleInputChange}
                    value={userRoastData.altitude}
                  />
                </label>
              </li>
              <li>
                <label>URL:
                  <input
                    name="url"
                    id="url"
                    type="text"
                    onChange={handleInputChange}
                    value={userRoastData.url}
                  />
                </label>
              </li>
              <li>
                <label>Harvest Date:
                  <input
                    name="harvest_date"
                    id="harvest_date"
                    type="text"
                    onChange={handleInputChange}
                    value={userRoastData.harvest_date}
                  />
                </label>
              </li>
              <li>
                <label>Price:
                   <input
                      name="price"
                      id="price"
                      type="number"
                      onChange={handleInputChange}
                      value={userRoastData.price}
                  />
                </label>
              </li>
              <li>
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
              </li>
              <li>
                <label>Fair Trade: 
                  <select onChange={handleInputChange} name="fair_trade" id="fair_trade">
                    <option value="default">Select From The Following:</option>
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                  </select>
                </label> 
              </li>
              <li>
                <label>Ethnical Business Practices: 
                  <select onChange={handleInputChange} name="ethnical_business_practices" id="ethnical_business_practices">
                    <option value="default">Select From The Following:</option>
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                  </select>
                </label> 
              </li>
            </ul>
          </fieldset>
          <input  type="submit" value="Submit" className="button" />
      </form>
    </div>
  )
}

export default RoastForm
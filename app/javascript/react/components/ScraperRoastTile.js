import React from 'react'

import image1 from '../../../assets/images/DSCF0745.JPG'

const handleSubmit = () => {
  fetch('/api/v1/favorites', {
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




const ScraperRoastTile = (props) => {
  return (
    <div className="cell small-6 medium-2">
      <img className="card-img" src={image1} alt="header" />
      <div className="card-info">
        <p className="card-title">{props.name}</p>
        <div className=""></div>
        <p className="card-author"> <a href={props.url} target="blank">view this roast</a></p>
      </div>
      <input onSubmit={handleSubmit} type="submit" value="Submit" className="button tiny" />
    </div>
    
  )
}

export default ScraperRoastTile
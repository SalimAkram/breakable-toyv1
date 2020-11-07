import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LandingContainer = (props) => {
  const [landingDataFromDataBase, setLandingDataFromDataBase] = useState([])

  useEffect(() => {
    fetch('/api/v1/landings')
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        setLandingDataFromDataBase(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])
  
  let path = `/users/${landingDataFromDataBase.id}`;
  let profile;
  if (landingDataFromDataBase.length !== 0) {
    profile = <Link to={path}> PROFILE </Link>
  }

  return (
    <div>
      <div className="cell test">
        <li>{profile}</li>
      </div>
    <div className="grid-x grid-margin-x">
      <div className="box cell test grid-margin-x small-12 medium-6">
        <h1> GOOGLE MAP HERE</h1>
      </div>
      <div className="box cell test grid-margin-x small-12 medium-6">
        <h1>BLACK OWN BOX</h1>
      </div>
    </div>
    </div>
  )
}

export default LandingContainer
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
    <div className="grid-x">
      <div className="box small-8 medium-4">
        <h1> GOOGLE MAP HERE</h1>
      </div>
      <div className="cell small-12 text-center">
        <li>{profile}</li>
      </div>
    </div>
  )
}

export default LandingContainer
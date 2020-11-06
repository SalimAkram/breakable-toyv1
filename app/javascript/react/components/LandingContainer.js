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
    <div className="cell small-12 text-center">
      <li><Link to="/"> HOME </Link></li>
      <li>{profile}</li>
      <li><Link to="/brews">BREW METHODS HOME PAGE</Link></li>
      <li><Link to="/roasts">ROASTS HOME PAGE</Link></li>
    </div>
  )
}

export default LandingContainer
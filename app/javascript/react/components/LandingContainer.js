import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LandingContainer = (props) => {
  const [landingDataFromDataBase, setLandingDataFromDataBase] = useState([])

  useEffect(() => {
    fetch('/api/v1/landing')
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
  }, [])
  
  let path;
  let id;

  if (landingDataFromDataBase === null) {
    path = 'users/sign_up' // work on redirecting to the sign up and login page or maybe some other error page
  } else {
    id = landingDataFromDataBase.id
    path = `users/${id}`
  }

  return (
    <div>
      <li><Link to={path}> profile </Link></li>
      <li><Link to="/">this should be a link to all brew methods</Link></li>
      <li><Link to="/roasts">roast index page</Link></li>
    </div>
  )
}

export default LandingContainer
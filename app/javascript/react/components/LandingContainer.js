import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LandingContainer = (props) => {
  const [landingData, setLandingData] = useState([])

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
        setLandingData(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  return (
    <div>
      <li><Link to="/users/1">This Should be a link that takes you to the current_users profile</Link></li>
      <li><Link to="/">this should be a link to all brew methods</Link></li>
      <li><Link to="/roasts">roast index page</Link></li>
    </div>
  )
}

export default LandingContainer
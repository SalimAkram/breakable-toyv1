import React, { useEffect, useState } from 'react'

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
      hello from the landing page
    </div>
  )
}

export default LandingContainer
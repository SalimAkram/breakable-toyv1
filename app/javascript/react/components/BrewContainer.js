import React, { useEffect, useState } from 'react'

import BrewTile from './BrewTile'

const BrewContainer = (props) => {
  const [brewData, setBrewData] = useState([])

  useEffect(() => {
    fetch('/api/v1/brews')
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
        setBrewData(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const brewTileArray = brewData.map((brew) => {
    return(
      <div className="cell small-12 medium-4 test">
      <BrewTile
        key={brew.id}
        id={brew.id}
        maker={brew.maker}
        filter_type={brew.filter_type}
        brew_time={brew.brew_time}
        kettle_type={brew.kettle_type}
        water_temperature={brew.water_temperature}
        grams={brew.grams}
        ratio={brew.ratio}
        yield={brew.yield}
        grind={brew.grind}
        roast={brew.roast}
        roast_region={brew.roast_region}
        instructions={brew.instructions}
        user_id={brew.user_id}
        user={brew.user["username"]}
        photo={brew.user["profile_photo"]["thumb"].url}
      />
      </div>
    )
  })
 
  return(
    <div className="grid-container test-two">
      <div className="grid-x  grid-margin-x align-center">
          {brewTileArray}
      </div>
    </div>
  )
}

export default BrewContainer
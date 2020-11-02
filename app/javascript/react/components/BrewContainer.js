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
      .then(responseBody => { //send up users name with this info eventually
        setBrewData(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const brewTileArray = brewData.map((brew) => {
    return(
      <BrewTile
        key={brew.id}
        id={brew.id}
        method={brew.method}
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
        user={brew.user_id}
      />
    )
  })

  return(
    <div className="cell small-12 text-center">
      {brewTileArray}
    </div>
  )
}

export default BrewContainer
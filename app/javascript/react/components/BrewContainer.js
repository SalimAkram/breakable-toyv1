import React, { useEffect, useState, Fragment } from 'react'

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
    )
  })
 
  return(
    <Fragment>
      <div className="square-box grid-y medium-grid-frame grid-padding-y .grid-margin-y">
        <h1 className="title">BREWS</h1>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x align-center" >
            <div className="small-8 medium-4 medium-cell-block-y">
              {brewTileArray}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BrewContainer
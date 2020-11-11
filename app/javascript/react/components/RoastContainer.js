import  React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import RoastTile from './RoastTile'
import ScraperRoastTile from './ScraperRoastTile'

const RoastContainer = (props) => {
  const [roastData, setRoastData] = useState ([])
  const [scraperData, setScraperData] = useState([])

  useEffect(() => {
    fetch('/api/v1/roasts')
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
        setRoastData(responseBody.roast)
        setScraperData(responseBody.roasts_scraper)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const scraperTileArray = scraperData.map((scraper) => {
    return (
      <ScraperRoastTile
      key={scraper.name}
      name={scraper.name}
      url={scraper.url}
    />
    )
  })

  const roastTileArray = roastData.map((roast) =>{
    return (
      <RoastTile
        key={roast.id}
        id={roast.id}
        name={roast.name}
        brand={roast.brand}
        region={roast.region}
        notes={roast.notes}
        process={roast.process}
        price={roast.price}
        rating={roast.rating}
        producer={roast.producer}
        altitude={roast.altitude}
        url={roast.url}
        fair_trade={roast.fair_trade}
        ethical_business_practices={roast.ethical_business_practices}
        harvest_date={roast.harvest_date}
      />
    )
  })

  return(
    <div className="grid-container">
      <div className="grid-x grid-margin-x grid-margin-y grid-padding-y grid-padding-x">
        {roastTileArray}
        {scraperTileArray}
      </div>
    </div>
  )
}

export default RoastContainer
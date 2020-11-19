import  React, { useEffect, useState, Fragment } from 'react'

import RoastTile from '../Tiles/RoastTile'
import ScraperRoastTile from '../Tiles/ScraperRoastTile'

const RoastContainer = (props) => {
  const [roastData, setRoastData] = useState ([])
  const [scraperData, setScraperData] = useState([])

  const id = props.match.params.id
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

  const addToFavorites = (favoriteRoast) => {
    fetch(`/api/v1/favorites`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(favoriteRoast),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        alert("added to favorites!")
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))

  }

  const scraperTileArray = scraperData.map((scraper) => {
    return (
      <ScraperRoastTile
        key={scraper.id}
        id={scraper.id}
        name={scraper.name}
        url={scraper.url}
      />
    )
  })

  const roastTileArray = roastData.map((roast) =>{

    const handleClick = () => {
      addToFavorites(roast.id)
    }

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
        handleClick={handleClick}
      />
    )
  })

  return(
    <Fragment>
      <div className="grid-container">
        <div>
          <h3 className="roast-title">User Favorites</h3>
        </div>
        <div className="grid-x grid-margin-x">
          {roastTileArray}
        </div>
        <div>
          <h3 className="roast-title">Creator Suggestions</h3>
        </div>
        <div className="grid-x grid-margin-x">
          {scraperTileArray}
        </div>
      </div>
    </Fragment>
  )
}

export default RoastContainer
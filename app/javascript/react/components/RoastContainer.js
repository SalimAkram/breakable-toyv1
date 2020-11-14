import  React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import RoastTile from './RoastTile'
import ScraperRoastTile from './ScraperRoastTile'

const RoastContainer = (props) => {
  const [roastData, setRoastData] = useState ([])
  const [scraperData, setScraperData] = useState([])
  const [selectedAnswerId, setSelectedAnswerId] = useState(null)

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

    const handleClick = () => {
      addToFavorites(scraper.id)
    }

    let selectedStatus = false
    if (scraper.id === selectedAnswerId) {
      selectedStatus = true
    } else {
      selectedStatus = false
    }

    return (
      <ScraperRoastTile
      key={scraper.id}
      id={scraper.id}
      name={scraper.name}
      url={scraper.url}
      handleClick={handleClick}
      selectedStatus={selectedStatus}
    />
    )
  })

  const roastTileArray = roastData.map((roast) =>{

    const handleClick = () => {

      addToFavorites(roast.id)
    }

    let selectedStatus = false
    if (roast.id === selectedAnswerId) {
      selectedStatus = true
    } else {
      selectedStatus = false
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
        selectedStatus={selectedStatus}
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
          <h3 className="roast-title">suggestions</h3>
        </div>
        <div className="grid-x grid-margin-x">
          {scraperTileArray}
        </div>
      </div>
    </Fragment>
  )
}

export default RoastContainer
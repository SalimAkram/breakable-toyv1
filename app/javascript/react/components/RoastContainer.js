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
      <div className="square-box grid-y medium-grid-frame grid-padding-y .grid-margin-y">
        <h1 className="title"> Cup Of Joe Pro</h1>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x align-center" >
          
            <div className="cell page-columns small-12 medium-5 medium-cell-block-y">
              <h2 className="title"> user favorites</h2>
              {roastTileArray}
            </div>
            <div className="cell page-columns small-12 medium-5 medium-cell-block-y">
              <h2 className="title">creator suggestions</h2>
              {scraperTileArray}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    // <div className="grid-container">
    //   <div className="cell">
    //     <h5>User Favorites</h5>
    //   </div>
    //   <div className="grid-x grid-margin-x grid-margin-y grid-padding-y grid-padding-x">
    //     {roastTileArray}
    //   </div>
    //     <div className="cell">
    //       <h5>suggestions</h5>
    //     </div>
    //   <div className="grid-x grid-margin-x grid-margin-y grid-padding-y grid-padding-x">
    //     {scraperTileArray}
    //   </div>
    // </div>
  )
}

export default RoastContainer
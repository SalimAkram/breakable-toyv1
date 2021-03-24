import  React, { useEffect, useState, Fragment } from 'react'

import RoastTile from '../components/Tiles/RoastTile'
import ScraperRoastTile from '../components/Tiles/ScraperRoastTile'

import cupOfJoeApi from '../requests/CupOfJoeApi'

const RoastContainer = (props) => {
  console.log('roast container');
  const [roasts, setRoasts] = useState ({ roast: [], scraper: [] })

  const id = props.match.params.id
    useEffect(() => {
      cupOfJoeApi.getRoasts()
        .then(body => {
          setRoasts(body)
        })
    },[])

  const scraperTileArray = roasts.scraper.map((scraper) => {
    return (
      <ScraperRoastTile
        key={scraper.id}
        id={scraper.id}
        name={scraper.name}
        url={scraper.url}
      />
    )
  })

  const roastTileArray = roasts.roast.map((roast) =>{
    const handleClick = () => {
      cupOfJoeApi.addToFavorites(roast.id)
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
      <div className="roast-header">
        <h3>User Favorites</h3>
      </div>
      <div className="grid-x grid-margin-x">
        {roastTileArray}
      </div>
      <div className="roast-header"> 
        <h3>Creator Suggestions</h3>
      </div>
      <div className="grid-x grid-margin-x">
        {scraperTileArray}
      </div>
    </Fragment>
  )
}

export default RoastContainer
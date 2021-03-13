import React, { useEffect, useState, Fragment } from 'react';

import BrewTile from '../components/Tiles/BrewTile';
import cupOfJoeApi from '../requests/CupOfJoeApi';

const BrewContainer = (props) => {
  console.log('brew container');
  const [brewData, setBrewData] = useState([])

  useEffect(() => {
    cupOfJoeApi.getBrews()
      .then(body => {
        setBrewData(body)
      })
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
    <div>
      <h3>User Brews</h3>
        <div>
          {brewTileArray}
        </div>
    </div>
  )
}

export default BrewContainer;
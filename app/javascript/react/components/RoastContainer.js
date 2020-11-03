import  React, { useEffect, useState } from 'react'

import RoastTile from './RoastTile'
import RoastForm from './RoastForm'

const RoastContainer = (props) => {
  const [roastData, setRoastData] = useState ([])

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
        setRoastData(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const addRoastFromForm = (userRoastData) => {
    fetch('/api/v1/roasts', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(userRoastData),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        setRoastData([...roastData, responseBody])
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


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
    <div className="cell small-12 text-center">
      {roastTileArray}
      <RoastForm 
        addRoastFromForm={addRoastFromForm}
      />
    </div>
  )
}

export default RoastContainer
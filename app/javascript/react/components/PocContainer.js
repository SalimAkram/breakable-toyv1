import React, { useEffect, useState } from 'react'

const PocContainer = (props) => {
  const [brewData, setBrewData] = useState([])

  // useEffect(() => {
  //   fetch('/api/v1/blackowners')
  //     .then(response => {
  //       if (response.ok) {
  //         return response
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw (error);
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(responseBody => {
  //       setBrewData(responseBody)
  //     })
  //     .catch(error => console.error(`Error in fetch: ${error.message}`))
  // }, [])


  return (
    <div className="">
      <h1>hello from black owned</h1>
    </div>
  )
}

export default PocContainer
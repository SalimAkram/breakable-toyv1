import React, { useEffect, useState } from 'react'

const RoastShow = (props) => {

  const [roastShow, setRoastShow] = useState({})

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/roasts/${id}`)
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
        setRoastShow(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  
  return(
    <div>
      hi from the {roastShow.name} show page
    </div>
  )
}

export default RoastShow



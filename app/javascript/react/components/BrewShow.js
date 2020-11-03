import React, { useEffect, useState } from 'react'

const BrewShow = (props) =>{

const [brewShow, setBrewShow] = useState({});
const [user, setUser] = useState({});

const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/brews/${id}`)
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
        setUser(responseBody.user)
        setBrewShow(responseBody.brew)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])


  return(
    <div>
      hello from brews/{brewShow.id} show with user {user.username}
    </div>
  )
}

export default BrewShow
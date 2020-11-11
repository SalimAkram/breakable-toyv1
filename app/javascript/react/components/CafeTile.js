import React from 'react'


const CafeTile = (props) => {
  return(
    
    <div>
      {props.name} ||
      {props.rating} ||
      {props.userRatings}
    </div>
  )
}

export default CafeTile
import React from 'react'


const CafeTile = (props) => {
  // debugger
  return(
    <div className="tile">
      <div>
        <a href={props.url} target="blank">{props.name}</a>
      </div>
      <div>
        rating: {props.rating} 
      </div>
    </div>
  )
}

export default CafeTile
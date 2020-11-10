import React from 'react'


const CafeTile = (props) => {
  return(
    
    <div className="grid-x grid-margin-y">
      <div className="cafe test cell medium-12">
        <div>
          {props.name}
        </div>
        <div>
          rating: {props.rating}
        </div>
      </div>
    </div>
  )
}

export default CafeTile
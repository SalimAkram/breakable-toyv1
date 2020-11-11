import React from 'react'


const CafeTile = (props) => {
  // debugger
  return(
    
    <div className="grid-x grid-margin-y">
      <div className=" callout cafe cell medium-12">
        <div>
          <a href={props.url} target="blank">{props.name}</a>
        </div>
        <div>
          rating: {props.rating} 
        </div>
      </div>
    </div>
  )
}

export default CafeTile
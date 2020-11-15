import React from 'react'

const CafeTile = (props) => {
  return(
  
    <div>
     <h5>{props.name}</h5> 
     <a className="button  expanded" href={props.url} target="blank"> GO </a>
    </div>
  )
}

export default CafeTile
import React from 'react'

const ShopTile = (props) => {
  return(
    <div className="cafe-tile">
     <h5 className="cafe-tile">{props.name}</h5> 
     <a className="cafe-button button  expanded" href={props.url} target="blank"> GO </a>
    </div>
  )
}

export default ShopTile
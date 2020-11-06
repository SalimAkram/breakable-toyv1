import React from 'react'

const ScraperRoastTile = (props) => {
  return (
    <div className="roast-tile">
      <div>
        {props.name}
      </div>
      <a href={props.url} target="blank">view this roast</a>
    </div>
  )
}

export default ScraperRoastTile
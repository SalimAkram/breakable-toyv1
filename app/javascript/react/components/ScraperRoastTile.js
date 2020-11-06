import React from 'react'
import { Link } from 'react-router-dom'

import image1 from '../../../assets/images/DSCF0745.JPG'

const ScraperRoastTile = (props) => {
  debugger
  return (
    // <div className="">
    //   <div>
    //     {props.name}
    //   </div>
    //   <a href={props.url} target="blank">view this roast</a>
    // </div>
    <div className="small-4 cell text-center">
    {/* <div class=""> */}
      <img className="card-img" src={image1} alt="header" />
      <div className="card-info">
        <h1 className="card-title">{props.name}</h1>
        <div className=""></div>

        <p className="card-author"> <a href={props.url} target="blank">view this roast</a></p>
        {/* <p className="card-stats"> <img src="https://placehold.it/20" alt="hi" />  <img src="https://placehold.it/20" alt="hi" /></p> */}
      </div>
    </div>
    
  )
}

export default ScraperRoastTile
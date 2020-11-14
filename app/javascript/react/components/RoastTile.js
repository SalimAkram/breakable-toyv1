import React from 'react'

import image1 from '../../../assets/images/DSCF0745.JPG'

const RoastTile = (props) =>{
  // debugger
  return (
    // <div className="cell small-6 medium-2">
    //   <div className="card-info">
    //   <img className="card-img" src={image1} alt="header" />
    //     <p className="card-title">{props.name}</p>
    //     <div className=""></div>
    //     <button onClick={props.handleClick} className="button-like">
    //     <p className="card-author"> <a href={props.url} target="blank">view this roast</a></p>
    //       <i className="fa fa-heart"></i>
    //       {/* <span>add to favorites</span> */}
    //     </button>
    //   </div>
    // </div>
    <div class="cell small-6 medium-2">
      <div>
        <h5 class="roast-tile-title">{props.name}</h5>
      </div>
      <div class="roast-thumbnail">
        <a href="#"><img src={image1} /></a>
      </div>
      <div class="product-card-colors">
        <button onClick={props.handleClick} className="button-like">
         <i className="fa fa-heart"></i>
         <span>add to favorites</span>
       </button>
      </div>
    </div>


  )
}

export default RoastTile

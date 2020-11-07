import React from 'react'

const LayoutTesting = (props) =>{

  const list = []
  for (let i = 1; i <= 20; i++) {
    list.push(<li key={i}> {i} </li>)
  }
  const listElement = (
    <ul>
      {list}
    </ul>
  )
  return(
    <div>
      <div className="grid-x grid-margin-x grid-margin-y" style={{ height: "100%" }}>
        <div className="cell test medium-auto box text-center" style={{ height: "100%" }}>
          <h2> left</h2>
          {listElement}
        </div>
        <div className="cell test medium-auto box text-center" style={{ height: "100%" }}>
          <h2> center </h2>
          {listElement}
        </div>
        <div className="cell test medium-auto box text-center" style={{ height: "100%" }}>
          <h2> right </h2>
          {listElement}
        </div>
      </div>
     <div className="grid-container">
       <div className="grid-x grid-margin-x grid-margin-y">
         <div className="cell test small-6 medium-offset-3 box text-center">
           <h2> left</h2>
         </div>
         <div className="cell test small-6 medium-offset-3 box text-center">
           <h2> right </h2>
         </div>
         <div className="cell test small-6 medium-offset-3 box text-center">
           <h2> left</h2>
         </div>
         <div className="cell test small-6 medium-offset-3 box text-center">
           <h2> right </h2>
         </div>
         <div className="cell test small-6 medium-offset-3 box text-center">
           <h2> left</h2>
         </div>
         <div className="cell test small-6 medium-offset-3 box text-center">
           <h2> right </h2>
         </div>
       </div>
     </div>
    </div>
  )
}

export default LayoutTesting
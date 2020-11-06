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
    <div className="grid-x grid-margin-x" style={{ height: "100%" }}>
      <div className="cell medium-auto box text-center" style={{ height: "50%" }}>
        <h2> left</h2>
        {listElement}
      </div>
      <div className="cell medium-auto box text-center">
        <h2> center </h2>
        {listElement}
      </div>
      <div className="cell medium-auto box text-center">
        <h2> right </h2>
        {listElement}
      </div>
    </div>
  )
}

export default LayoutTesting
import React from 'react'

const UserMethodTile = (props) =>{
  return(
    <div className="article-row-section">
      <div className="article-row-section-inner">
        <h4 className="article-row-section-header">method {props.id}</h4>
          <article className="article-row">
            <div className="left">
              <ul> 
                <li>{props.maker}</li>
                <li>{props.filter} filter</li>
                <li>{props.kettle} kettle</li>
              </ul>
            </div>
            <div className="center">
              <ul>
                <li>{props.roast}</li>
                <li>{props.region}</li>
                <li>{props.grind} grind</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>{props.grams} grams</li>
                <li>{props.temperature} degrees</li>
                <li>{props.time} minutes</li>
              </ul>
            </div>
          </article>
      </div>
      <div>
        <li>{props.ratio} water ratio (optional)</li>
        <p>{props.instructions}</p>
      </div>
    </div>
  )
}

export default UserMethodTile
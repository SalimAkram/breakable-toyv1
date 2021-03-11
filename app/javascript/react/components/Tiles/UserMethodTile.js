import React from 'react';

import Button from '../UI/button/Button';

const UserMethodTile = (props) => {
  console.log('user method tile');
  return(
    <div className="article-row-section">
      <div>
        <h4 className="article-row-section-header"></h4>
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
        <p>{props.ratio} water ratio (optional)</p>
        <p>{props.instructions}</p>
      </div>
      <Button btnType="button profile" clicked={props.edit}>EDIT</Button>
      <Button btnType="button profile" clicked={props.delete}>DELETE</Button>    
    </div>
  );
};

export default UserMethodTile;
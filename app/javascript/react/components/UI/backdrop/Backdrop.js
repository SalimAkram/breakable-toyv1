import React from 'react';

const Backdrop = (props) => {
  console.log('backdrop');
  return(
    props.show ? <div className="backdrop" onClick={props.backdropClicked}></div> : null
  );
};

export default Backdrop;
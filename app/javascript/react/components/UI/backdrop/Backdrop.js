import React from 'react';

const Backdrop = (props) => (
  props.show ? <div className="backdrop" onClick={props.backdropClicked}></div> : null
);

export default Backdrop;
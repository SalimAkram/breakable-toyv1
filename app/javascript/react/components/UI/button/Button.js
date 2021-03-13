import React from 'react';

const Button = (props) => {
  console.log('button')
  return (
    <button 
      className={["button", props.btnType].join(' ')} 
      onClick={props.clicked}
      disabled={props.disabled}
      >
      {props.children}
    </button>
  );
}

export default Button;
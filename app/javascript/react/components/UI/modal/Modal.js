import React from 'react';

import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../backdrop/Backdrop'

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop 
        show={props.show}
        backdropClicked={props.modalClosed}  
      />
      <div 
        className="modal"
        style={{
          transform: props.show ? 'translatey(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
        >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;

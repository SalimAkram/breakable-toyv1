import React from 'react';

import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../backdrop/Backdrop'

const Modal = (props) => {
  const cssClasses = ['modal', props.show ? 'modalOpen' : 'modalClosed']
  return (
    <Aux>
      <Backdrop 
        show={props.show}
        backdropClicked={props.modalClosed}  
      />
      <div className={cssClasses.join(' ')}>
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;

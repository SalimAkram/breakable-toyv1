import React, {Fragment} from 'react';

const ErrorModal = React.memo(props => {
  return (
    <Fragment>
      <div className="backdrop" onClick={props.closeModal} />
      <div className="error-modal">
        {props.children}
        <div className="error-modal__actions">
          <button className="button close-modal" type="button" onClick={props.closeModal}>
            x CLOSE
          </button>
        </div>
      </div>
    </Fragment>
  );
});

export default ErrorModal;
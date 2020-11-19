import React, { Fragment } from 'react'
import _ from "lodash"

const ErrorList = props => {

  var close = document.getElementsByClassName("closebtn");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function () { div.style.display = "none"; }, 600);
    }
  }

  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map(field => {
      index++
      return (
        <li key={index}>
          {_.capitalize(field)} {props.errors[field]}
        </li>
      )
    })
    return (
      <Fragment>
        <h4>oops! you missed some stuff!</h4>
        <div className="alert">
          <ul>
            {listItems}
          </ul>
        </div>
      </Fragment>
    )
  } else {
    return ""
  }
}

export default ErrorList
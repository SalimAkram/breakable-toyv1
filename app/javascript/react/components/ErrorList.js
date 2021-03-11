import React, { Fragment } from 'react'
import _ from "lodash"

const ErrorList = props => {
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
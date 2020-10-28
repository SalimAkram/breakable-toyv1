import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import RoastContainer from './RoastContainer.js'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/roasts" component={RoastContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

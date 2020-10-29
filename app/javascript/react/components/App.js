import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import RoastContainer from './RoastContainer'
import LandingContainer from './LandingContainer'
import UserContainer from './UserContainer'
import RoastShow from './RoastShow'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/roasts" component={RoastContainer} />
          <Route exact path="/roasts/:id" component={RoastShow} />
          <Route exact path="/users/:id" component={UserContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

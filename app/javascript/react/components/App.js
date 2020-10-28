import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import RoastContainer from './RoastContainer.js'
import LandingContainer from './LandingContainer.js'
import UserContainer from './UserContainer.js'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/roasts" component={RoastContainer} />
          <Route exact path="/users/:id" component={UserContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LandingContainer from './LandingContainer'
import UserShowContainer from './UserShowContainer'
import RoastContainer from './RoastContainer'
import RoastShow from './RoastShow'
import RoastForm from './RoastForm'
import BrewContainer from './BrewContainer'
import BrewShow from './BrewShow'
import PocContainer from './PocContainer'
import LayoutTesting from './LayoutTesting'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/roasts" component={RoastContainer} />
        <Route exact path="/roasts/new" component={RoastForm} />
        <Route exact path="/roasts/:id" component={RoastShow} />
        <Route exact path="/users/:id" component={UserShowContainer} />
        <Route exact path="/brews" component={BrewContainer} />
        <Route exact path="/brews/:id" component={BrewShow} />
        <Route exact path="/poc" component={PocContainer} />
        <Route exact path="/testing" component={LayoutTesting} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

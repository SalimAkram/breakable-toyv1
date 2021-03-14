import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LandingContainer from '../containers/LandingContainer'
import RoastContainer from '../containers/RoastContainer'
import RoastForm from './Forms/RoastForm'
import BrewContainer from '../containers/BrewContainer'
import BrewShow from '../containers/Shows/BrewShow'
import SearchForm from './Forms/SearchForm'
import ProfileContainer from '../containers/ProfileContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/roasts" component={RoastContainer} />
        <Route exact path="/roasts/new" component={RoastForm} />
        <Route exact path="/users/:id" component={ProfileContainer} />
        <Route exact path="/brews" component={BrewContainer} />
        <Route exact path="/brews/:id" component={BrewShow} />
        <Route exact path="/search" component={SearchForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

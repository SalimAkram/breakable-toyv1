import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LandingContainer from '../containers/LandingContainer'
import RoastContainer from '../containers/RoastContainer'
import RoastShow from './Shows/RoastShow'
import RoastForm from './Forms/RoastForm'
import BrewContainer from '../containers/BrewContainer'
import BrewShow from './Shows/BrewShow'
import SearchForm from './Forms/SearchForm'
import EditBrewMethodForm from '../containers/EditBrewMethod'
import ProfileContainer from '../containers/ProfileContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/roasts" component={RoastContainer} />
        <Route exact path="/roasts/new" component={RoastForm} />
        <Route exact path="/roasts/:id" component={RoastShow} />
        <Route exact path="/users/:id" component={ProfileContainer} />
        <Route exact path="/brews" component={BrewContainer} />
        <Route exact path="/brews/:id" component={BrewShow} />
        <Route exact path="/brews/:id/edit" component={EditBrewMethodForm} />
        <Route exact path="/search" component={SearchForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

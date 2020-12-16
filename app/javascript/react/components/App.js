import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LandingContainer from './Containers/LandingContainer'
import UserShowContainer from './Containers/UserShowContainer'
import UserMethodEditContainer from './Containers/UserMethodEditContainer'
import RoastContainer from './Containers/RoastContainer'
import RoastShow from './Shows/RoastShow'
import RoastForm from './Forms/RoastForm'
import BrewContainer from './Containers/BrewContainer'
import BrewShow from './Shows/BrewShow'
import SearchForm from './Forms/SearchForm'

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
        <Route exact path="/brews/:id/edit" component={UserMethodEditContainer} />
        <Route exact path="/search" component={SearchForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

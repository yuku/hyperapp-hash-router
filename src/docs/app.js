import { h } from "hyperapp"

import { Route, Link, Switch, location } from "../../src"

import Header from "./components/Header"
import Menu from "./components/Menu"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Demo from "./pages/Demo"
import License from "./pages/License"
import NotFound from "./pages/NotFound"

export const state = {
  location: location.state
}

export const actions = {
  location: location.actions,
  getState: () => state => state
}

export const view = () => (
  <div>
    <Header />
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <Route render={Menu} />
          </div>
          <div class="column">
            <Switch>
              <Route path="/license" render={License} />
              <Route parent path="/demo" render={Demo} />
              <Route path="/" render={Home} />
              <Route render={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

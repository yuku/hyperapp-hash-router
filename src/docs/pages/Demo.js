import { h } from "hyperapp"

import { Route, Link, Redirect } from "../../../src"

function Topic({ match }) {
  return (
    <div>
      <p>{match.params.topicId} is selected!</p>
    </div>
  )
}

export default function Home({ match }) {
  return (
    <div class="content">
      <section class="box">
        <h1>Child routes</h1>
        <p>Please select a topic.</p>
        <ul>
          <li>
            <Link to={`${match.url}/topics/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/topics/single-state-tree`}>
              Single State Tree
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/topics/routing`}>Routing</Link>
          </li>
        </ul>
        <Route parent path={`${match.path}/topics/:topicId`} render={Topic} />
      </section>
      <section class="box">
        <h1>NotFound</h1>
        <p>
          Don't hesitate to click a <Link to="/deadlink">dead link</Link>.
        </p>
      </section>
      <section class="box">
        <h1>Redirect</h1>
        <p>
          Redirect to <Link to={`${match.url}/redirect/home`}>Home</Link>
        </p>
        <Route
          path={`${match.path}/redirect/home`}
          render={() => <Redirect to="/" />}
        />
      </section>
    </div>
  )
}

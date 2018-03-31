import { h } from "hyperapp"
import classnames from "classnames"

import { Link } from "../../../src"

export default function Menu({ match }) {
  return (
    <aside class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <Link
            to="/"
            class={classnames({
              "is-active": match.url === "/"
            })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/license"
            class={classnames({
              "is-active": match.url === "/license"
            })}
          >
            License
          </Link>
        </li>
      </ul>
      <p class="menu-label">Demo</p>
      <ul class="menu-list">
        <li>
          <Link
            to="/demo"
            class={classnames({
              "is-active": match.url.substr(0, 5) === "/demo"
            })}
          >
            Demo
          </Link>
        </li>
      </ul>
    </aside>
  )
}

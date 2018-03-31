import { h } from "hyperapp"
import classnames from "classnames"

import { Link } from "../../../src"

export default function Header({ match }) {
  return (
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <Link to="/" class="navbar-item">
            hyperapp-hash-router
          </Link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a
              class="navbar-item is-hidden-desktop-only"
              href="https://github.com/yuku-t/hyperapp-hash-router"
              target="_blank"
            >
              <span class="icon">
                <i class="fab fa-github fa-lg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

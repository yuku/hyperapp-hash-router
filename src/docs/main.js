import { h, app } from "hyperapp"

import { location } from "../../src"
import { state, actions, view } from "./app"

window.appActions = app(state, actions, view, document.getElementById("app"))
location.subscribe(appActions.location)

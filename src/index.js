import { Route as OrigRoute } from "@hyperapp/router"

import { stripHash } from "./hoc"
import RedirectComponent from "./Redirect"

export const Route = stripHash(OrigRoute)
export const Redirect = stripHash(RedirectComponent)
export { default as location } from "./location"
export { default as Link } from "./Link"
export { Switch } from "@hyperapp/router"

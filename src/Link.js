import { h } from "hyperapp"

export default function Link(props, children) {
  return function(state, actions) {
    var to = `#${props.to}`
    var location = state.location || window.location
    var onclick = props.onclick
    delete props.to
    delete props.location

    props.href = to
    props.onclick = function(e) {
      if (onclick) {
        onclick(e)
      }
    }

    return h("a", props, children)
  }
}

export default function Redirect(props) {
  return function(state, actions) {
    var location = state.location || window.location
    const from = props.from || location.pathname
    history.replaceState(`#${from}`, "", `#${props.to}`)
    dispatchEvent(
      new HashChangeEvent("hashchange", {
        oldURL: from,
        newURL: props.to
      })
    )
  }
}

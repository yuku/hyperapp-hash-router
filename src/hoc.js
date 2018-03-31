export function stripHash(WrappedComponent) {
  return (props, children) => (state, actions) => {
    return WrappedComponent(props, children)(
      {
        location: {
          pathname: state.location.pathname.substr(1),
          previous: state.location.previous && state.location.previous.substr(1)
        }
      },
      actions
    )
  }
}

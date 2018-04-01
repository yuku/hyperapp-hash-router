import { View, VNode, Component, ActionsType } from "hyperapp"

export interface Match {
  url: string
  path: string
  isExact: boolean
  params: { [name: string]: string } | undefined
}

export type RouteComponent<State = any, Actions = any> = Component<
  { match: Match; location: Location },
  State,
  Actions
>

export const Link: Component<{ to: string; [prop: string]: any }>

export const Route: Component<{
  parent?: boolean
  path?: string
  render: RouteComponent
}>

export const Switch: Component

export const Redirect: Component<{ to: string }>

export const location: {
  state: {
    pathname: string | null | undefined
    previous: string | null | undefined
  }
  actions: {
    go(pathname: string): void
    set(data: Partial<(typeof location)["state"]>): void
  }
  subscribe: (actions: any) => Function
}

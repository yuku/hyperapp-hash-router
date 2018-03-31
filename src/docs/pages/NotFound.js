import { h } from "hyperapp"

export default function NotFound() {
  return (
    <div class="content">
      <p>Page not found.</p>
      <a href="javascript:history.back();">Back</a>
    </div>
  )
}

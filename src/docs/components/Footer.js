import { h } from "hyperapp"

export default function Footer({ match }) {
  return (
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>hyperapp-hash-router</strong> by{" "}
            <a href="https://github.com/yuku-t">Yuku Takahashi</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

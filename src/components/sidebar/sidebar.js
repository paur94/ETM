import React from "react"
import { slide as Menu } from "react-burger-menu"

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href="/templates">
        TEMPLATES
      </a>

      <a className="menu-item" href="/pricing">
        PRICING
      </a>

      <a className="menu-item" href="/login">
        LOGIN
      </a>
    </Menu>
  )
}

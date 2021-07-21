import * as React from "react"
import { Link } from "gatsby"
import "./Header.css"
import { Button } from "../buttons/Button"
import SideBar from "../sidebar/sidebar"
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <nav className="Nav">
      <a className="NavLink headerLogo" href="/" to="/">
        <img src={logo} alt="logo" /><span className="logo_text">Excise Tax Manager</span>
      </a>

      <SideBar right pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div className="FlexMenu">
        <ul className="NavMenu">
            <li className="NavLink"><a href="/">HOME</a></li>
            <li className="NavLink"><a href="/templates">TEMPLATES</a></li>
            <li className="NavLink"><a href="/pricing">PRICING</a></li>
            <li className="NavLink"><a href="/login">LOGIN</a></li>
        </ul>
        <div className="NavBtn">
          <Button primary="true" border="true" to="/">
            Show me a demo
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Header

import React from "react"
import logo from "../../images/logoWhite.png"
import { SocialIcon } from "react-social-icons"
import "./Footer.css"

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <section className="ft-main">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div className="ft-main-item">
            <h2 className="ft-title">PRODUCT</h2>
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">COMPANY</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>4330 Gaines Ranch Loop</li>
              <li>Suite 120</li>
              <li>Austin, TX 78735</li>
              <li>Call us: (512) 956-4306</li>
            </ul>
          </div>
        </section>

        <section className="ft-social">
          <ul className="ft-legal-list">
            <li>
              <a href="#">Legal & Privacy Policy</a>
            </li>
            <li>&copy; 2019 Copyright Nowrap Inc.</li>
            <div style={{display: 'flex'}}>
              <li>
                <SocialIcon
                  bgColor="transparent"
                  fgColor="#fff"
                  url="https://facebook.com/"
                />
              </li>
              <li>
                <SocialIcon
                  bgColor="transparent"
                  fgColor="#fff"
                  url="https://linkedin.com/"
                />
              </li>
              <li>
                <SocialIcon
                  bgColor="transparent"
                  fgColor="#fff"
                  url="https://twitter.com/"
                />
              </li>
            </div>
          </ul>
        </section>
      </footer>
    </React.Fragment>
  )
}

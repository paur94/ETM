import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import img1 from "../../images/teams-icon-150x150.png"
import img2 from "../../images/sales-icon-150x150.png"
import img3 from "../../images/hr-icon-150x150.png"
import img4 from "../../images/manager-icon-150x150.png"

const Hero5 = () => {
  return (
    <div className="Hero5">
      <h1>Who Uses Excise Tax Manager?</h1>
      <div className="teamCards">
        <div className="team">
          <img src={img1} alt="img1" />
          <h2 className="teamTitle">MANAGERS</h2>
          <p className="teamText">
            …love us because they get all info in one dashboard
          </p>
        </div>
        <div className="team">
          <img src={img2} alt="img2" />
          <h2 className="teamTitle">ACCOUNTANTS</h2>
          <p className="teamText">…love us because we do their job in a sec</p>
        </div>
        <div className="team">
          <img src={img3} alt="img3" />
          <h2 className="teamTitle">SALES LEADERS</h2>
          <p className="teamText">
            …love us because we help them with analytics
          </p>
        </div>
        <div className="team">
          <img src={img4} alt="img4" />
          <h2 className="teamTitle">DEVELOPERS</h2>
          <p className="teamText">
            …love us because they don’t have to make it on their own
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero5

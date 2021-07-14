import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import img1 from "../../images/teams-icon-150x150.png"
import img2 from "../../images/sales-icon-150x150.png"
import img3 from "../../images/hr-icon-150x150.png"
import img4 from "../../images/manager-icon-150x150.png"

const Hero5 = () => {
  return (
    <div className="Hero5">
      <h1>Who Uses Praxio?</h1>
      <div className="teamCards">
        <div className="team">
          <img src={img1} alt="img1" />
          <h2 className="teamTitle">MANAGERS</h2>
          <p className="teamText">
            ...love us because we speed team training and communication
          </p>
        </div>
        <div className="team">
          <img src={img2} alt="img2" />
          <h2 className="teamTitle">HR PROS</h2>
          <p className="teamText">
            ...love us because we automate new employee onboarding and
            development
          </p>
        </div>
        <div className="team">
          <img src={img3} alt="img3" />
          <h2 className="teamTitle">SALES LEADERS</h2>
          <p className="teamText">
            ...love us because we reduce Sales and Customer Success ramp times
          </p>
        </div>
        <div className="team">
          <img src={img4} alt="img4" />
          <h2 className="teamTitle">TEAMS</h2>
          <p className="teamText">
            ...love us because we aggregate all your trainings and checklists in
            one place
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero5

import React from "react"
import { Button } from "../buttons/Button"
import noteImg from "../../images/note.png"
import './Hero.css'

const Hero = () => {
  return (
    <div className="RowSection">
      <div className="firstCell">
        <h2 class="firstSectionTitle">
          Clone Your Best <br /> People
        </h2>
        <p className="firstSectionText">
          Praxio is Knowledge Management Software that trains your team,
          documents your processes, and makes cross-departmental communication a
          breeze…
        </p >
        <p className="firstSectionText">
          <strong>…so more work gets done FASTER!</strong>
        </p>
        <Button round="true">SCHEDULE A DEMO NOW</Button>
      </div>
      <div>
        <img className="notebook" src={noteImg} />
      </div>
    </div>
  )
}

export default Hero
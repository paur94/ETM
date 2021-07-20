import React from "react"
import { Button } from "../buttons/Button"
import noteImg from "../../images/note.jpg"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="RowSection">
      <div className="firstCell">
        <h2 class="firstSectionTitle">
          BEST TAX SYSTEM FOR <br /> VAPE STORES
        </h2>
        <p className="firstSectionText">
          This app is a simple solution that helps you find all the necessary
          Excise/Return tax forms, calculates tax due, and allows you quickly
          generate and send reports. It is updated every month with all the
          latest changes to State taxes. All you need to do is select a form,
          complete it, and then send the report.
        </p>
        <p className="firstSectionText">
          <strong>…Sufficient, Simple & Smart</strong><br />
          <strong>…Now, It's Your Turn to Report Your Taxes Like a Pro</strong><br />
          <strong>…No need for extra workers for tax filing</strong><br />
          <strong>…Carefully grab your taxes in just a few easy steps</strong>
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

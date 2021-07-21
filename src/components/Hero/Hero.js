import React from "react"
import { Button } from "../buttons/Button"
import noteImg from "../../images/note.jpg"
import "./Hero.css"

const Hero = () => {

  const toggleTitleMoreHandler = () => {
    let content = document.getElementById("extra_content");
    let btn = document.getElementById("read_more");
    content.classList.toggle('show');

    if (content.classList.contains("show")) {
      btn.innerHTML = "show less";
    } else {
      btn.innerHTML = "show more";
    }
  }

  const toggleSubTitleMoreHandler = () => {
    let content = document.getElementById("extra_subTitle");
    let btn = document.getElementById("read_more_subTitle");
    content.classList.toggle('show');

    if (content.classList.contains("show")) {
      btn.innerHTML = "show less";
    } else {
      btn.innerHTML = "show more";
    }
  }

  return (
    <div className="RowSection">
      <div className="firstCell">
        <h2 className="firstSectionTitle">
          BEST TAX SYSTEM FOR <br /> VAPE STORES
        </h2>
        <p className="firstSectionText">
          This app is a simple solution that helps you find all the necessary
          Excise/Return tax forms, calculates tax due, and allows you quickly
          generate and send reports. <span id="extra_title" className="extra_title">It is updated every month with all the
          latest changes to State taxes. All you need to do is select a form,
          complete it, and then send the report.</span><span><button onClick={toggleTitleMoreHandler} id="read_more_title" className="read_more_title">show more</button></span>
        </p>
        <p className="firstSectionText">
          <strong>…Sufficient, Simple & Smart</strong><br />
          <span id="extra_subTitle" className="extra_subTitle"><strong>…Now, It's Your Turn to Report Your Taxes Like a Pro</strong><br />
          <strong>…No need for extra workers for tax filing</strong><br />
          <strong>…Carefully grab your taxes in just a few easy steps</strong></span><span><button onClick={toggleSubTitleMoreHandler} id="read_more_subTitle" className="read_more_subTitle">show more</button></span>
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

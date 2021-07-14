import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/3.png"
import img4 from "../../images/4.png"

const Hero3 = () => {
  return (
    <div>
      <h1 className="Hero2Title">How It Works.....</h1>
      <p className="Hero2Text">
        Because we believe teams are at their best when knowledge is shared,
        with Praxio you can…
      </p>
      <div className="card">
        <img className="cardImg imgLeft" src={img1} alt="img1" />
        <div className="cardTexts">
          <h2 className="cardTitle">Train your Team</h2>
          <p className="cardText">
            Praxio’s TRAINING tool allows managers and leaders to curate and
            compile best-in-class trainings. <br /><br />Select from our marketplace of
            pre-made trainings, upload your own, or pull from sources such as
            YouTube and Wistia.
          </p>
          <a className="cardLink">
            <strong>Start training and onboarding with Praxio, today!</strong>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="cardTexts">
          <h2 className="cardTitle">Train your Team</h2>
          <p className="cardText">
            Praxio’s TRAINING tool allows managers and leaders to curate and
            compile best-in-class trainings.<br /><br /> Select from our marketplace of
            pre-made trainings, upload your own, or pull from sources such as
            YouTube and Wistia.
          </p>
          <a className="cardLink">
            <strong>Start training and onboarding with Praxio, today!</strong>
          </a>
        </div>
        <img className="cardImg imgRight orderImg" src={img2} alt="img1" />
      </div>
      <div className="card">
        <img className="cardImg imgLeft" src={img3} alt="img1" />
        <div className="cardTexts">
          <h2 className="cardTitle">Train your Team</h2>
          <p className="cardText">
            Praxio’s TRAINING tool allows managers and leaders to curate and
            compile best-in-class trainings. <br /><br />Select from our marketplace of
            pre-made trainings, upload your own, or pull from sources such as
            YouTube and Wistia.
          </p>
          <a className="cardLink">
            <strong>Start training and onboarding with Praxio, today!</strong>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="cardTexts">
          <h2 className="cardTitle">Train your Team</h2>
          <p className="cardText">
            Praxio’s TRAINING tool allows managers and leaders to curate and
            compile best-in-class trainings. <br /><br />Select from our marketplace of
            pre-made trainings, upload your own, or pull from sources such as
            YouTube and Wistia.
          </p>
          <a className="cardLink">
            <strong>Start training and onboarding with Praxio, today!</strong>
          </a>
        </div>
        <img className="cardImg imgRight" src={img4} alt="img1" />
      </div>
    </div>
  )
}

export default Hero3

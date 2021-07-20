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
        We believe that every business must pay taxes, but we DON'T think that
        we need to waste our <br />
        precious time counting on that. Why to waste your time on counting taxes
        when you can spend it on earning money
      </p>
      <div className="card">
        <img className="cardImg imgLeft" src={img1} alt="img1" />
        <div className="cardTexts">
          <h2 className="cardTitle">Set your tags</h2>
          <p className="cardText">
            You just need to set tags for ENDS product types such as e-liquid,
            pre-filled/pod or accessories. Excise tax manager will collect data
            from your store and fill PACT act form.
          </p>
          <a className="cardLink">
            <strong>Start using and paying taxes with ETM</strong>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="cardTexts">
          <h2 className="cardTitle">Shop data synchronization</h2>
          <p className="cardText">
            Excise tax manager will synchronizes your shop data and and
            understand which items have taxes in states and how much. In
            addition you will easily find products with missing data and fix
            them like piece of a cake.
          </p>
          <a className="cardLink">
            <strong>Start using and paying taxes with ETM</strong>
          </a>
        </div>
        <img className="cardImg imgRight orderImg" src={img2} alt="img1" />
      </div>
      <div className="card">
        <img className="cardImg imgLeft" src={img3} alt="img1" />
        <div className="cardTexts">
          <h2 className="cardTitle">No need to train your team</h2>
          <p className="cardText">
            Our solution is based on an easy-to-use dashboard that your agents
            will refer to. It is so simple that it will take only a few minutes
            to get used to.
          </p>
          <a className="cardLink">
            <strong>Start using and paying taxes with ETM, today!</strong>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero3

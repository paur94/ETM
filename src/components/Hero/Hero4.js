import React from "react"
import { GlobalStyle } from "../styles/GlobalStyles"
import { ButtonSecondary } from "../buttons/ButtonSecondary"

const Hero4 = props => {
  return (
    <div className="Hero4" style={{marginBottom: props.margB, marginTop: props.margT}}>
      <h1 className="Hero4Title">
        {props.titleOne}
        <br />
        {props.titleTwo}
      </h1>
      <p style={{ textAlign: "center", color: "#fff", paddingBottom: "25px" }}>{props.par ? props.par : null}</p>
      <div style={{ textAlign: "center" }}>
        <ButtonSecondary border="true" secondary="true" round="true">
          {props.btnText}
        </ButtonSecondary>
      </div>
    </div>
  )
}

export default Hero4

import React from "react"

export default function Pricing(props) {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.src} alt={props.title} />
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>
            <strong>CATEGORY: MARKETING</strong>
          </div>
          <div className="flip-card-back">
            <h1 class="backTitle">{props.backTitle}</h1>
            <p>{props.backText}</p>
            <button>GET STARTED WITH ETM</button>
          </div>
        </div>
      </div>
    </>
  )
}

import React from "react"
import FlipCard from "./FlipCard"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import "./Features.css"
import img1 from "../../images/flip/1.png"
import img2 from "../../images/flip/2.png"
import img3 from "../../images/flip/3.png"
import img4 from "../../images/flip/4.png"
import img5 from "../../images/flip/5.png"
import img6 from "../../images/flip/6.png"

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}))

export default function Pricing() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        component="main"
        className={`${classes.heroContent}`}
      >
        <Typography
          className="title"
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Template Library
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="textSecondary"
          component="p"
        >
          <p>
            Get started in minutes with 30+ Checklist templates on topics such
            as…
          </p>
        </Typography>
      </Container>
      <div className="flip_container">
        <FlipCard
          src={img1}
          subtitle="Write an Email Newsletter"
          text="14 steps to crafting a newsletter that transforms subscribers into lifelong customers."
          backTitle="Want To Unlock This Checklist Template?"
          backText="Start your free, 14-day trial and get instant access to 30+ Checklist templates just like this one..."
        />
        <FlipCard
          src={img2}
          subtitle="Onboard a New Hire"
          text="14 steps to crafting a newsletter that transforms subscribers into lifelong customers."
          backTitle="Want To Unlock This Checklist Template?"
          backText="Start your free, 14-day trial and get instant access to 30+ Checklist templates just like this one..."
        />
        <FlipCard
          src={img3}
          subtitle="Create a Customer Avatar to Reach Your Ideal Customer"
          text="14 steps to crafting a newsletter that transforms subscribers into lifelong customers."
          backTitle="Want To Unlock This Checklist Template?"
          backText="Start your free, 14-day trial and get instant access to 30+ Checklist templates just like this one..."
        />
        <FlipCard
          src={img4}
          subtitle="Build a High-Converting Landing Page"
          text="14 steps to crafting a newsletter that transforms subscribers into lifelong customers."
          backTitle="Want To Unlock This Checklist Template?"
          backText="Start your free, 14-day trial and get instant access to 30+ Checklist templates just like this one..."
        />
        <FlipCard
          src={img5}
          subtitle="Lead an Effective Brainstorming Session"
          text="14 steps to crafting a newsletter that transforms subscribers into lifelong customers."
          backTitle="Want To Unlock This Checklist Template?"
          backText="Start your free, 14-day trial and get instant access to 30+ Checklist templates just like this one..."
        />
        <FlipCard
          src={img6}
          subtitle="Launch an NPS Survey"
          text="14 steps to crafting a newsletter that transforms subscribers into lifelong customers."
          backTitle="Want To Unlock This Checklist Template?"
          backText="Start your free, 14-day trial and get instant access to 30+ Checklist templates just like this one..."
        />
      </div>
    </React.Fragment>
  )
}

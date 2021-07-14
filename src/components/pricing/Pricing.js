import React from "react"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Grid from "@material-ui/core/Grid"
import StarIcon from "@material-ui/icons/StarBorder"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Hero4 from "../Hero/Hero4"
import FAQ from './FAQ/PricingFaq'
import "./Pricing.css"

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      fontWeight: "bold !important",
      color: "#54595f !important",
      fontSize: "12px !important",
      margin: "10px auto !important",
      textAlign: "left !important",
    },
    "li::before": {
      content: `""`,
      display: "block",
      borderTopStyle: "dotted",
      borderTopColor: "#ddd",
      borderTopWidth: "2px",
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}))

const tiers = [
  {
    title: "BUSINESS PLAN",
    subheader: "Perfect for organizations with multiple teams",
    price: "495",
    description: [
      "50 USERS (addt'l users: $9/mo)",
      "UNLIMITED Teams <-- WOW!",
      "UNLIMITED Trainings",
      "UNLIMITED Checklists",
      "UNLIMITED Announcements",
      "1 TB of Storage",
      "Custom branding",
      "Priority chat and email support",
      "Scheduled phone support",
    ],
    buttonText: "Schedule a demo",
    buttonVariant: "contained",
  },
  {
    title: "ENTERPRISE PLAN",
    subheader: "Perfect for large enterprises with 100+ users",
    price: "CALL US",
    description: [
      "Custom per user pricing",
      "Multi-Account Management",
      "Single Sign-On (SSO, SAML)",
      "Customizable Learning Paths",
      "Custom Whitelabels",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
    buttonText: "Schedule a demo",
    buttonVariant: "contained",
  },
]

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
          Excise Tax Help Plans and Pricing
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="textSecondary"
          component="p"
        >
          <p>
            <strong>Simple, flat rate pricing for growing team.</strong>
          </p>
          <p>
            No contracts. No shenanigans. Change plans or cancel at any time.
          </p>
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={5}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={`${classes.cardHeader} cardHeader`}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {isNaN(Number(tier.price)) ? 'CALL US' : `$${tier.price} ` }
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {isNaN(Number(tier.price)) ? null : '/mo' }
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions className="btnContainer">
                  <Button
                    className="btn"
                    variant={tier.buttonVariant}
                    color="#00D353"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <FAQ />
      <Hero4
        titleOne="Still Have Questions? Want a Custom Demo?"
        par="Click the button, below, to schedule a personal, no-obligation tour of Praxio…"
        btnText="REQUEST A DEMO"
        margB="0"
        margT="35px"
      />
    </React.Fragment>
  )
}

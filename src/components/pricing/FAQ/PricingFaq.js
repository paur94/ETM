import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import "./PricingFaq.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: "22%",
    margin: "50px auto",
    ["@media (max-width:768px)"]: {
      width: "95%",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
  },
  accordionSummary: {
    flexDirection: "row-reverse",
    padding: 0,
  },
  accordion: {
    boxShadow: "none",
  },
}))

export default function FAQ() {
  const classes = useStyles()

  return (
    <div className={`${classes.root} containerFaq`}>
      <h1 style={{ textAlign: "center", color: "#38586e" }}>Pricing FAQs</h1>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>
            What if I want to change or cancel my plan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Easy! You can downgrade or cancel your plan at any time from right
            inside the app. And if you decide to change your plan, charges from
            upgrading your plan to a higher pricing tier in the middle of your
            billing cycle will be pro-rated.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>
            How are additional, "overage" users billed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We make a charge to your credit card at the end of your pay period
            to cover any new users for the current billing period. For example,
            if you have our Business Plan and you add 51 users to your account
            in a given month, your card on file would be charged an additional
            $9 for the extra user at the end of your pay period. NOTE: The
            system will warn you prior to adding additional users over your
            current account limit, so you don’t have to worry about keeping
            track of this on your own.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>
            How are additional, "overage" users billed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We make a charge to your credit card at the end of your pay period
            to cover any new users for the current billing period. For example,
            if you have our Business Plan and you add 51 users to your account
            in a given month, your card on file would be charged an additional
            $9 for the extra user at the end of your pay period. NOTE: The
            system will warn you prior to adding additional users over your
            current account limit, so you don’t have to worry about keeping
            track of this on your own.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>
            How are additional, "overage" users billed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We make a charge to your credit card at the end of your pay period
            to cover any new users for the current billing period. For example,
            if you have our Business Plan and you add 51 users to your account
            in a given month, your card on file would be charged an additional
            $9 for the extra user at the end of your pay period. NOTE: The
            system will warn you prior to adding additional users over your
            current account limit, so you don’t have to worry about keeping
            track of this on your own.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>
            How are additional, "overage" users billed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We make a charge to your credit card at the end of your pay period
            to cover any new users for the current billing period. For example,
            if you have our Business Plan and you add 51 users to your account
            in a given month, your card on file would be charged an additional
            $9 for the extra user at the end of your pay period. NOTE: The
            system will warn you prior to adding additional users over your
            current account limit, so you don’t have to worry about keeping
            track of this on your own.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionSummary}
        >
          <Typography className={classes.heading}>
            How are additional, "overage" users billed?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We make a charge to your credit card at the end of your pay period
            to cover any new users for the current billing period. For example,
            if you have our Business Plan and you add 51 users to your account
            in a given month, your card on file would be charged an additional
            $9 for the extra user at the end of your pay period. NOTE: The
            system will warn you prior to adding additional users over your
            current account limit, so you don’t have to worry about keeping
            track of this on your own.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

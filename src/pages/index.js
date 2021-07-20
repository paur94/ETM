import * as React from "react"
import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero3 from "../components/Hero/Hero3"
import Hero4 from "../components/Hero/Hero4"
import Hero5 from "../components/Hero/Hero5"
import Footer from "../components/Footer/Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Hero4
      titleOne="Help all your managers get more work done faster."
      titleTwo="Make it happen with Excise Tax Manager."
      btnText="SCHEDULE YOUR DEMO NOW"
    />
    <Hero3 />
    <Hero5 />
    <Footer />
  </Layout>
)

export default IndexPage

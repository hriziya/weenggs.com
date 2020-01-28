import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The epicenter where latest technology meets creativity!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />

    <p>A team of professionals that help you nurture & grow your business!</p>
    <p>Design & Develop Stunning Websites</p>
    <p>Code some Kick-ass Mobile Applications</p>
    <p>Provide 24/7 Customer Service</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

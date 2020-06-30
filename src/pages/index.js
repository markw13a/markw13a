import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import { Button } from "../components/Button/Button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> Hi people </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Button text="Click here" />
    </div>
  </Layout>
)

export default IndexPage

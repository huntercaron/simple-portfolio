import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <p>
      Hello world! <Link to="/about">About Me</Link>
    </p>
  </Layout>
)

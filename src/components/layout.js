import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <p>{data.site.siteMetadata.title}</p>

        {children}
      </>
    )}
  />
)

export default Layout

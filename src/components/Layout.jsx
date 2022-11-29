/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"
import Header from "./Header"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import Link from "./Link"

// import Seo from "./Seo"

const FooterStyles = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 1rem;
  font-size: 14px;

`

const Layout = ({ children, pageData }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
  datoCmsPage {
    title
  }
}
  `)
const image = `src/images/SF-Copy-white.jpg`
  return (
    
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <Seo title={data.datoCmsPage.title}/> */}
     
        <main>{children}</main>
        <FooterStyles>
        <div>London-based DOP & Shooting Director</div>
        <Link to=""><StaticImage src="../images/SF-Copy-white.jpg" alt="sam finney logo" /></Link>
        </FooterStyles>
  
    </>
  )
}

export default Layout

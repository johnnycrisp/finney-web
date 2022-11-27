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
import Seo from "./Seo"

const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 1rem;
  font-size: 14px;

`

const Layout = ({ children }) => {
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
console.log('daatatata', data)
  return (
    
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Seo title={data.datoCmsPage.title}/>
     
        <main>{children}</main>
        <FooterStyles>
        <div>© {new Date().getFullYear()} &middot; Sam Finney</div>
          
        </FooterStyles>
  
    </>
  )
}

export default Layout

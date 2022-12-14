import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "./Link"
import styled from "styled-components"

const HeaderStyles = styled.div`
  {'' /* margin-bottom: 2rem; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  color: black;
  a {
    color: black;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
   a + a {
      margin-left: 1rem;
    }
    h1 {
      font-size: 12px;
      margin: 0;
      padding-left: 1px;

    }
`

const Header = ({ siteTitle }) => {

  const result = useStaticQuery(graphql`
    {
      menu: datoCmsMenu {
    menuItems {
      labelText
      originalId
      destination {
        slug
      }
    }
  }}
  `)
  return (
  <header>
  <HeaderStyles>
  <Link to=""><h1>sam finney</h1></Link> <div>{result.menu.menuItems.map(menuItem => (<Link key={menuItem.originalId}
      to={menuItem.destination.slug}
    >
      {menuItem.labelText.toUpperCase()}
    </Link>)
  )}</div></HeaderStyles>
  </header>)}

export default Header

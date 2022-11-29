import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import DropDown from "../components/DropDown"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Seo from "../components/Seo"

const IndexStyles = styled.div`
  padding: 1rem;
  a {
    
    &:hover {
        text-decoration: underline;
    }
  }


`

const Index = ({data}) => {
    const sections = data.datoCmsPage.sections
    return ( 
    <Layout>
  <Seo title="Home"/>
  
  <IndexStyles>
  <DropDown />
  {sections.map((section)=> {
    return (
        <Section key={section.originalId} gridColumns={section.gridColumns} />
    )
  })}
  </IndexStyles>
  </Layout>
  )
 
    }

export const query = graphql`
    query HomeQuery {
  datoCmsPage(slug: {eq: "index"}) {
    title
    text
    image {
      gatsbyImageData(placeholder: BLURRED)
    }
    slug
    sections {
      gridColumns {
        title
        videoSlug
        originalId
        columnImage {
          gatsbyImageData(placeholder: BLURRED)
        }
        externalVideo {
          title
        }
      }
    }
}
}`

export default Index

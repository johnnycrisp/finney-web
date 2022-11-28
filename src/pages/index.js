import { graphql } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Seo from "../components/Seo"

const IndexStyles = styled.div`
  padding: 1rem;

`

const Index = ({data}) => {
    const sections = data.datoCmsPage.sections
    return ( 
    <Layout>
  <Seo title="Home"/>
  <IndexStyles>
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
    slug
    sections {
      gridColumns {
        text
        originalId
        columnImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
}
}`

export default Index

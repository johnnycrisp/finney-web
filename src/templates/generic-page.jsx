import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import Section from '../components/Section';

const PageStyles = styled.div`
  padding: 1rem;
  .gatsby-image-wrapper {
    padding: 0;
  }
 
`

const GenericPage = ({data, pageContext}) => {
    const page = data.page
    console.log('data', page, pageContext)

  return (
    <Layout>
    <PageStyles>
    <h1>{page.title}</h1>
    {page.sections.map(section => (
        <Section key={section.originalId} gridColumns={section.gridColumns}/>
    ))}
    </PageStyles>
    </Layout>
  )
}

export const query = graphql`
    query PageQuery($pageId: String!) {
         page: datoCmsPage(originalId: {eq: $pageId}) {
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

export default GenericPage

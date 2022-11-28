import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import Section from '../components/Section';
import Seo from '../components/Seo';

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
    <>
    <Layout>
    <Seo title={page.title}/>
    <PageStyles>
    <h1>{page.title}</h1>
    {page.sections.map(section => (
        <Section key={section.originalId} gridColumns={section.gridColumns}/>
    ))}
    </PageStyles>
    </Layout>
    </>
  )
}

export const query = graphql`
    query PageQuery($slug: String!) {
         page: datoCmsPage(slug: {eq: $slug}) {
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

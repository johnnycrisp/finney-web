import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'
import Section from '../components/Section';
import Seo from '../components/Seo';

const PageStyles = styled.div`
  padding: 1rem;
  .image {
    margin-top: 2rem;
    height: 400px;
    width: 600px;
  }
  .about-text {
    margin-top: 2rem;
    width: 600px;

  }
 
`

const GenericPage = ({data, pageContext}) => {
    const page = data.page
    const image = page.image
    console.log('data', page, pageContext)

  return (
    <>
    <Layout>
    <Seo title={page.title}/>
    <PageStyles>
    <h1>{page.title}</h1>
    <GatsbyImage className="image" image={getImage(image)}/>
    <p className="about-text">{page.text}</p> 
    {page.sections.map(section => (
        <Section key={section.originalId} gridColumns={section.gridColumns}
        />
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
        externalVideo {
          title
        }
        columnImage {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
}
}`

export default GenericPage

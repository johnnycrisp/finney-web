import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Link from "./Link"

const VidStyles = styled.div`
  .gatsby-image-wrapper.col-image {
    height: 350px;
    width: 100%;
  }

  a {
  p {
    margin-bottom: 2rem;
    }
  &:hover {
    text-decoration: underline;
    color: black;
  }
}
  ` 

const GridColumn = ({slug, vidTitle, image}) => {
  console.log(vidTitle)
  return (
      <VidStyles>
      <GatsbyImage className="col-image" image={getImage(image)}/>
      <Link to={`${slug}`}><p>{vidTitle}</p></Link>
      </VidStyles>
  )
}

export default GridColumn
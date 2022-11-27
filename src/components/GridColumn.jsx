import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Link from "./Link"

const VidStyles = styled.div`
  .gatsby-image-wrapper.col-image {
    height: 300px;
    width: 100%;
  }
  ` 

const GridColumn = ({id, text, image}) => {
  return (
      <VidStyles>
      <GatsbyImage className="col-image" image={getImage(image)}/>
      <Link to={`${id}`}><div dangerouslySetInnerHTML={{__html: text}}>
      </div></Link>
      </VidStyles>
  )
}

export default GridColumn
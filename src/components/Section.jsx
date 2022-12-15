import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import GridColumn from './GridColumn'

const SectionStyles = styled.div`
  display: grid;
  padding: 0rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-content: center;
  gap: 1rem;
  p {
    font-size: 12px;
    padding-top: .5rem;
  }
`

const Section = ({gridColumns}) => {
console.log(gridColumns)
  return (
    <SectionStyles id="section" className="section">
      
            {gridColumns.map(gridCol => (
                <GridColumn
                slug={gridCol.videoSlug}
                id={gridCol.originalId}
                key={gridCol.originalId}
                vidTitle={gridCol.title}
                image={gridCol.columnImage}>
                </GridColumn>
            ))}
    </SectionStyles>
  )
}

export default Section
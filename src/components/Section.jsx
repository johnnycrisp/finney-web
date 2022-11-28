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

  return (
    <SectionStyles className="section">
      
            {gridColumns.map(gridCol => (
                <GridColumn
                id={gridCol.originalId}
                key={gridCol.originalId}
                text={gridCol.text}
                image={gridCol.columnImage}>
                </GridColumn>
            ))}
    </SectionStyles>
  )
}

export default Section
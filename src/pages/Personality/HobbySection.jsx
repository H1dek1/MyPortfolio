import React from 'react'
import { SectionWrapper } from './HobbySection.element'

function HobbySection(props) {
  return (
    <SectionWrapper isOdd={props.isOdd}>
      <h1>Hobby Section</h1>
    </SectionWrapper>
  )
}

export default HobbySection
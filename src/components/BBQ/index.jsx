import React from 'react'
import {
  SectionWrapper,
  HobbyContainer,
  MainImages,
  Campfire,
  Meat,
  TextArea,
  Title,
  Description,
} from './elements'

function BBQ(props) {
  return (
    <SectionWrapper isOdd={props.isOdd}>
      <HobbyContainer>
        <MainImages>
          <Meat />
          <Campfire />
        </MainImages>
        <TextArea>
          <Title>
            BBQ
          </Title>
          <Description>
            BBQ is all of my life. <br />
            No words can describe the happiness of biting into a thick piece of meat seared over high heat. <br />
            The great thing about BBQ is that preparation and cleanup are also fun.
          </Description>
        </TextArea>
      </HobbyContainer>
    </SectionWrapper>
  )
}

export default BBQ
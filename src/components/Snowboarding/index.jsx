import React from 'react'
import {
  SectionWrapper,
  HobbyContainer,
  MainImages,
  Image,
  TextArea,
  Title,
  Description,
} from './elements'

function Snowboarding(props) {
  return (
    <SectionWrapper isOdd={props.isOdd}>
      <HobbyContainer>
        <MainImages>
          <Image />
        </MainImages>
        <TextArea>
          <Title>
            Snowboarding
          </Title>
          <Description>
            I go snowboarding many times every season. <br />
            I recently started practicing grand trick.
          </Description>
        </TextArea>
      </HobbyContainer>
    </SectionWrapper>
  )
}

export default Snowboarding
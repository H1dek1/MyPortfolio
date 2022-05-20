import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  TextArea,
  MainMessage,
  SubMessage,
} from './elements'

function PersonalityTop() {
  return (
    <SectionWrapper>
      <TopContainer>
        <TextArea>
          <SubMessage>
            <p>
              After Earning a master's degree in engineering in Osaka University,<br />
              currently engaged in R&D at a mobility company. <br />
              I am studying web application development as moonlighting.
            </p>
          </SubMessage>
          <MainMessage>
            <p>
              It is my dream to create outstanding services <br />
              and found companies.
            </p>
          </MainMessage>
        </TextArea>
      </TopContainer>
    </SectionWrapper>
  )
}

export default PersonalityTop
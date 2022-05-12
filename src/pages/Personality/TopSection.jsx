import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  MainIcon,
  IconText,
  TextArea,
  MainMessage,
  SubMessage,
} from './TopSection.element'

function TopSectoion() {
  return (
    <SectionWrapper>
      <TopContainer>
        <MainIcon>
          <IconText />
        </MainIcon>
        <TextArea>
          <SubMessage>
            <p>
              After Earning a master's degree in engineering in Osaka University,<br />
              currently engaging R&D in a mobility company. <br />
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

export default TopSectoion
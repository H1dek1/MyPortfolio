import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  TopMessage,
  Methods,
  Implementation,
  Title,
  Content,
} from './elements'

function RLSkill() {
  return (
    <SectionWrapper>
      <TopContainer>
        <TopMessage>
          Reinforcement learning (RL) is an area of machine learning
          concerned with how intelligent agents ought to take actions in an environment
          in order to maximize the notion of cumulative reward.
        </TopMessage>
        <Methods>
          <Title>
            I have developed following methods.
          </Title>
          <Content>
            Content
          </Content>

        </Methods>
        <Implementation>
          <Title>
            Programming skills
          </Title>
          <Content>
            Content
          </Content>
        </Implementation>
      </TopContainer>
    </SectionWrapper>
  )
}

export default RLSkill
import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  TopMessage,
  SampleVideos,
  StyledVideo,
  VideoDescription,
  Arrow,
  Methods,
  MethodContent,
  Method,
  Implementation,
  Title,
  ImplementationContent,
  ImplementationItem,
  items,
} from './elements'
import InitialAgentVideo from '../../assets/videos/initial_agent.mp4'
import LearnedAgentVideo from '../../assets/videos/learned_agent.mp4'
import { rlMethods } from './data'


const RLSkill = React.forwardRef((props, ref) => {
  return (
    <SectionWrapper ref={ref}>
      <TopContainer>
        <TopMessage>
          <p>
            <span>Reinforcement learning</span> is an area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward.
          </p>
          <p>
            These movies represent a triangle swimmer learned how to swim toward right in fluid in my master's research by Reinforcement Learning.
          </p>
        </TopMessage>
        <SampleVideos>
          <StyledVideo
            muted
            autoPlay
            loop
            src={InitialAgentVideo}
          >
          </StyledVideo>
          <VideoDescription>
            <Arrow />
            <Arrow />
            <Arrow />
          </VideoDescription>
          <StyledVideo
            muted
            autoPlay
            loop
            src={LearnedAgentVideo}
          >
          </StyledVideo>
        </SampleVideos>
      </TopContainer>
      <Methods>
        <Title>
          I have used ...
        </Title>
        <MethodContent>
          {rlMethods.map((method, index) => {
            return (
              <Method key={index}>{method}</Method>
            )
          })}
        </MethodContent>
      </Methods>
      <Implementation>
        <Title>
          I have developed with ...
        </Title>
        <ImplementationContent>
          {items.map((item) => {
            return (
              <ImplementationItem key={item.name}>
                <item.icon />
                <div>{item.name}</div>
              </ImplementationItem>
            )
          })}
        </ImplementationContent>
      </Implementation>
    </SectionWrapper>
  )
})

export default RLSkill
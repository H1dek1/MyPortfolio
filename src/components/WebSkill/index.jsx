import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  SkillGrid,
  skills,
  Skill,
  Description,
  WorkList,
} from './elements'
import { works } from './work_data'
import Card from '../Card'

function WebSkill() {
  return (
    <SectionWrapper>
      <TopContainer>
        <SkillGrid>
          {
            skills.map((skill) => {
              return (
                <Skill key={skill.name}>
                  <skill.icon />
                  <Description>{skill.name}</Description>
                </Skill>
              )
            })
          }
        </SkillGrid>
      </TopContainer>
      <TopContainer>
        <WorkList>
          {
            works.map((work, index) => {
              return (
                <Card
                  key={index}
                  work={work}
                />
              )
            })
          }
        </WorkList>
      </TopContainer>
    </SectionWrapper>
  )
}

export default WebSkill
import React from 'react'
import {
  SectionWrapper,
  TopContainer,
  SkillGrid,
  skills,
  Skill,
  HtmlIcon,
  Description,
} from './WebSkillSection.elements'

function WebSkillSection() {
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
        works
      </TopContainer>
    </SectionWrapper>
  )
}

export default WebSkillSection
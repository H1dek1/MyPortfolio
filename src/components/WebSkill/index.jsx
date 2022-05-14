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
            // works.map((work) => {
            //   return (
            //     <Card
            //       key={work.name}
            //       img={work.img}
            //       title={work.title}
            //       link={work.link}
            //     />
            //   )
            // })
          }
        </WorkList>
      </TopContainer>
    </SectionWrapper>
  )
}

export default WebSkill
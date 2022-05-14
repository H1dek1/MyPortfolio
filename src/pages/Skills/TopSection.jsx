import React from 'react'
import { SectionWrapper, TopContainer } from './TopSection.elements'
import {
  SkillsList,
  SkillItem,
  SkillLink,
} from './TopSection.elements'

function TopSection() {
  return (
    <SectionWrapper>
      <TopContainer>
        <SkillsList>
          <SkillItem>
            <SkillLink>
              <p>Web</p>
              <p>Design</p>
            </SkillLink>
          </SkillItem>
          <SkillItem>
            <SkillLink>
              <p>Reinforcement</p>
              <p>Learning</p>
            </SkillLink>
          </SkillItem>
        </SkillsList>
      </TopContainer>
    </SectionWrapper>
  )
}

export default TopSection
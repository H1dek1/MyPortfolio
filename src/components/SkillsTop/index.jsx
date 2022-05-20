import React from 'react'
import { SectionWrapper, TopContainer } from './elements'
import {
  SkillsList,
  SkillItem,
  SkillLink,
} from './elements'

const SkillsTop = React.forwardRef((props, ref) => {
  const { webRef, rlRef } = ref.current
  const scrollToWeb = () => webRef.current.scrollIntoView({behavior: 'smooth'});
  const scrollToRl = () => rlRef.current.scrollIntoView({behavior: 'smooth'});
  return (
    <SectionWrapper>
      <TopContainer>
        <SkillsList>
          <SkillItem onClick={scrollToWeb}>
            <SkillLink>
              <p>Web</p>
              <p>Design</p>
            </SkillLink>
          </SkillItem>
          <SkillItem onClick={scrollToRl}>
            <SkillLink>
              <p>Reinforcement</p>
              <p>Learning</p>
            </SkillLink>
          </SkillItem>
        </SkillsList>
      </TopContainer>
    </SectionWrapper>
  )
})

export default SkillsTop
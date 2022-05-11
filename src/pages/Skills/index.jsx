import React from 'react'
import { Title, SkillsWrapper } from './element'
import bgImg from './statistics/image2.jpg'
import { Head } from '../../components'

function Skills() {
  return (
    <SkillsWrapper bgImg={bgImg}>
      <Head title='Skills' />
      <Title>
        Skills
      </Title>
    </SkillsWrapper>
  )
}

export default Skills
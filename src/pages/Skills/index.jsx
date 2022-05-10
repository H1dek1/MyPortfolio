import React from 'react'
import { Title, Wrapper } from './element'
import bgImg from './statistics/image2.jpg'
import { Head } from '../../components'

function Skills() {
  return (
    <Wrapper bgImg={bgImg}>
      <Head title='Skills' />
      <Title>
        Skills
      </Title>
    </Wrapper>
  )
}

export default Skills
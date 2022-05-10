import React from 'react'
import { Wrapper, Title } from './element'
import bgImg from './statistics/image1.jpg'
import { Head } from '../../components'

function About() {
  return (
    <Wrapper bgImg={bgImg}>
      <Head title="About" />
      <Title>
        About
      </Title>
    </Wrapper>
  )
}

export default About
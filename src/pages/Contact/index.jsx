import React from 'react'
import { Title, Wrapper } from './element'
import bgImg from './statistics/image3.jpg'
import { Head } from '../../components'

function Contact() {
  return (
    <Wrapper bgImg={bgImg}>
      <Head titl='Contact' />
      <Title>
        Contact
      </Title>
    </Wrapper>
  )
}

export default Contact
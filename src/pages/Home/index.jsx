import React from 'react'
import { Title, Wrapper } from './element'
import bgImg from './statistics/image0.jpg'
import { Head } from '../../components'

function Home() {
  return (
    <Wrapper bgImg={bgImg}>
      <Head title='Home' />
      <Title>
        Home
      </Title>
    </Wrapper>
  )
}

export default Home
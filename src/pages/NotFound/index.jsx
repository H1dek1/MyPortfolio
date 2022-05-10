import React from 'react'
import { Title, Wrapper } from './element'
import bgImg from './statistics/image4.jpg'
import { Head } from '../../components'

function NotFound() {
  return (
    <>
      <Wrapper bgImg={bgImg}>
        <Head title='Page not found.' />
        <Title>
          Page Not Found.
        </Title>
      </Wrapper>
    </>
  )
}

export default NotFound
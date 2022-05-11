import React from 'react'
import { Title, NotFoundWrapper } from './element'
import bgImg from './statistics/image4.jpg'
import { Head } from '../../components'

function NotFound() {
  return (
    <>
      <NotFoundWrapper bgImg={bgImg}>
        <Head title='Page not found.' />
        <Title>
          Page Not Found.
        </Title>
      </NotFoundWrapper>
    </>
  )
}

export default NotFound
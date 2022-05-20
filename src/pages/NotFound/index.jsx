import React from 'react'
import { Title, NotFoundWrapper } from './element'
import { Head } from '../../components'

function NotFound() {
  return (
    <>
      <NotFoundWrapper>
        <Head title='Page not found.' />
        <Title>
          Page Not Found.
        </Title>
      </NotFoundWrapper>
    </>
  )
}

export default NotFound
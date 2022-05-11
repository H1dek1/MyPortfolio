import React from 'react'
import { Title, ContactWrapper } from './element'
import bgImg from './statistics/image3.jpg'
import { Head } from '../../components'

function Contact() {
  return (
    <ContactWrapper bgImg={bgImg}>
      <Head title='Contact' />
      <Title>
        Contact
      </Title>
    </ContactWrapper>
  )
}

export default Contact
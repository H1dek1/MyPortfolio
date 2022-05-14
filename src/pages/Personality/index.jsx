import React from 'react'
import { Head } from '../../components'
import {
  PersonalityTop,
  BBQ,
  Snowboarding,
} from '../../components/'

function Personality() {
  return (
    <>
      <Head title="Personality" />
      <PersonalityTop />
      <Snowboarding isOdd={false} />
      <BBQ isOdd={true} />
    </>
  )
}

export default Personality
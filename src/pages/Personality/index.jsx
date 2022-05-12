import React from 'react'
import { Head } from '../../components'
import TopSection from './TopSection'
import SnowboardSection from './SnowboardSection'
import BBQSection from './BBQSection'

function Personality() {
  return (
    <>
      <Head title="Personality" />
      <TopSection />
      <SnowboardSection isOdd={false} />
      <BBQSection isOdd={true} />
    </>
  )
}

export default Personality
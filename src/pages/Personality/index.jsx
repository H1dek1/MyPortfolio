import React from 'react'
import { Head } from '../../components'
import TopSection from './TopSection'
import HobbySection from './HobbySection'

function Personality() {
  return (
    <>
      <Head title="Personality" />
      <TopSection />
      <HobbySection isOdd={true}/>
      <HobbySection isOdd={false}/>
    </>
  )
}

export default Personality
import React from 'react'
import { Head } from '../../components'
import TopSection from './TopSection'
import WebSkillSection from './WebSkillSection'
import RLSkillSection from './RLSkillSection'

function Skills() {
  return (
    <>
      <Head title="Skills"/>
      <TopSection />
      <WebSkillSection />
      <RLSkillSection />
    </>
  )
}

export default Skills
import React from 'react'
import { Head } from '../../components'
import { SkillsTop, RLSkill, WebSkill } from '../../components'

function Skills() {
  return (
    <>
      <Head title="Skills"/>
      <SkillsTop />
      <WebSkill />
      <RLSkill />
    </>
  )
}

export default Skills
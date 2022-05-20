import React, { useRef } from 'react'
import { Head } from '../../components'
import { SkillsTop, RLSkill, WebSkill } from '../../components'

function Skills() {
  const webRef = useRef(null)
  const rlRef = useRef(null)
  const bundledRef = useRef({webRef, rlRef})

  return (
    <>
      <Head title="Skills"/>
      <SkillsTop ref={bundledRef}/>
      <WebSkill ref={webRef}/>
      <RLSkill ref={rlRef}/>
    </>
  )
}

export default Skills
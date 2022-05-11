import React from 'react'
import { Helmet } from 'react-helmet-async'

function Head(props) {
  const { title } = props
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Libre+Bodoni&family=Nunito:wght@200&family=PT+Sans:wght@700&family=Zen+Maru+Gothic&display=swap" rel="stylesheet"></link>
    </Helmet>
  )
}

export default Head
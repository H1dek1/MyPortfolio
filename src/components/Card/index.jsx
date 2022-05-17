import React from 'react'
import {
  CardWrapper,
  TextArea,
  Title,
  LinkArea,
  ViewButton,
  LinkWrapper,
  GithubLink
} from './elements'

function Card({work: {title, pageLink, srcLink, img}}) {
  return (
    <CardWrapper>
      <img src={img} alt={title} />
      <TextArea>
        <Title>{title}</Title>
        <LinkArea>
          <ViewButton
            href={pageLink}
            target="_blank"
          >
            <p>VIEW</p>
          </ViewButton>
          <LinkWrapper
            href={srcLink}
            target="_blank"
          >
            <GithubLink />
          </LinkWrapper>
        </LinkArea>
      </TextArea>
    </CardWrapper>
  )
}

export default Card
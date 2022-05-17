import React from 'react'
import {
  HomeWrapper,
  HomeContainer,
  MainIcon,
  IconText,
  Profile,
  Title,
  NameArea,
  Picture,
  Img,
  Description,
  SNSLinks,
  SNSLinkWrapper,
  GithubLink,
  QiitaLink
} from './elements'
import { Head } from '../../components'

function Home() {
  return (
    <HomeWrapper>
      <Head title='Home' />
      <HomeContainer>
        <MainIcon whileHover={{ rotate: [0, 10, -10, 10, -10, 0] }} >
          <IconText />
        </MainIcon>
        <Profile>
          <Title>
            <NameArea>
              Hide
            </NameArea>
            <Picture>
              <Img src={`${process.env.PUBLIC_URL}/images/face.jpg`} />
            </Picture>
          </Title>
          <Description>
            I am a software engineer and an AI engineer. <br />
            This web site is my first portfolio developed with React.
          </Description>
          <SNSLinks>
            <SNSLinkWrapper href="https://github.com/H1dek1" target="_blank">
              <GithubLink />
            </SNSLinkWrapper>
            <SNSLinkWrapper href="https://qiita.com/H1dek1" target="_blank">
              <QiitaLink />
            </SNSLinkWrapper>
          </SNSLinks>
        </Profile>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
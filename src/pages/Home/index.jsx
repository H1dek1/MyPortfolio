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
} from './element'
import bgImg from './statistics/image0.jpg'
import { Head } from '../../components'
import FaceImg from './statistics/face.jpg'

function Home() {
  return (
    <HomeWrapper bgImg={bgImg}>
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
              <Img src={FaceImg} />
            </Picture>
          </Title>
          <Description>
            I am a software engineer and an AI engineer.
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
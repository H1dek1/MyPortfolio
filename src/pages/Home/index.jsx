import React from 'react'
import {
  Wrapper,
  MainIcon,
  IconText,
  Profile,
  Title,
  NameArea,
  Picture,
  Description,
} from './element'
import bgImg from './statistics/image0.jpg'
import { Head } from '../../components'
import { GiSloth } from 'react-icons/gi'
import { Container } from '../../GlobalStyles'

function Home() {
  return (
    <Wrapper bgImg={bgImg}>
      <Head title='Home' />
      <Container>
        <MainIcon>
          <IconText />
        </MainIcon>
        <Profile>
          <Title>
            <NameArea>
              Hideki Takayama
            </NameArea>
            <Picture>
              picture
            </Picture>
          </Title>
          <Description>
            I am software engineer.
          </Description>
        </Profile>
      </Container>
    </Wrapper>
  )
}

export default Home
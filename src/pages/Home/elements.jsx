import styled from "styled-components";
import { GiSloth } from 'react-icons/gi'
import { SiQiita } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Container, Wrapper } from "../../GlobalStyles";
import { customMedia } from "../../GlobalStyles";

export const HomeWrapper = styled(Wrapper)`
/* background-image: url(${props => props.bgImg}); */
/* background-repeat: no-repeat; */
/* background-size: cover; */
background-color: ${({theme}) => theme.colors.Background};
padding: 160px 0;
height: calc(100vh - 60px - ${({ theme }) => theme.heights.Footer});
`
export const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainIcon = styled(motion.div)`
  color: ${({ theme }) => theme.colors.Headline};
  /* border: solid black 2px; */
  margin-right: 20px;
  
  ${customMedia.lessThan('medium')`
    display: none;
  `}
`
export const IconText = styled(GiSloth)`
  color: ${({ theme }) => theme.colors.Paragraph};
  display: block;
  /* border: solid black 2px; */
  font-size: 20rem;
  
  ${customMedia.lessThan('large')`
    font-size: 10rem;
  `}
`
export const Profile = styled.div`
  /* border: solid black 2px; */
  width: 650px;
  
  ${customMedia.lessThan('medium')`
    width: 100%;
  `}
`
export const Title = styled.div`
  /* border: solid black 2px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  ${customMedia.lessThan('medium')`
    flex-direction: column-reverse;
    margin-bottom: 60px;
  `}
`
export const NameArea = styled.h1`
  color: ${({ theme }) => theme.colors.Headline};
  /* border: solid black 2px; */
  font-size: 4rem;
  display: block;
  position: relative;

  &:after {
    content: 'Hideki Takayama';
    color: ${({ theme }) => theme.colors.Paragraph};
    position: absolute;
    bottom: -25px;
    left: 30px;
    font-size: 1.5rem;
    width: 300px;
  }
  
  ${customMedia.between('small', 'medium')`
    margin-top: 30px;
    font-size: 3rem;
    &:after {
      font-size: 1.0rem;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      text-align: center;
    }
  `}
  
  ${customMedia.lessThan('small')`
    font-size: 2.5rem;
    `}
`
export const Picture = styled.div`
  /* border: solid black 2px; */
  line-height: 0;
`
export const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 30% 0 30% 0;
  filter: grayscale(100%);
  
  ${customMedia.lessThan('medium')`
    width: 100px;
    height: 100px;
  `}
`
export const Description = styled.div`
  color: ${({ theme }) => theme.colors.Paragraph};
  /* border: solid black 2px; */
  font-size: 1.5rem;
  margin-bottom: 30px;
  
  ${customMedia.lessThan('medium')`
      font-size: 1.0rem;
  `}
`
export const SNSLinks = styled.div`
  /* border: solid black 2px; */
  color: ${({ theme }) => theme.colors.Paragraph};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SNSLinkWrapper = styled.a`
  display: block;
  font-size: 2rem;
  margin: 0 30px;
  /* border: solid black 2px; */
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.Primary};
    transition: all 0.3s ease;
  }
`
export const GithubLink = styled(FaGithub)`
  display: block;
`
export const QiitaLink = styled(SiQiita)`
  display: block;
`
import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";
import { customMedia } from "../../GlobalStyles";
import { GiCampfire } from 'react-icons/gi'
import { GiMeat } from 'react-icons/gi'

export const SectionWrapper = styled(Wrapper)`
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - 60px);
  background-color: ${({ isOdd, theme }) => (isOdd ? theme.colors.SubBackground : theme.colors.Background)};

  ${customMedia.lessThan('large')`
    height: fit-content;
    min-height: calc(100vh - 60px);
    padding: 30px 0;
  `}
`
export const HobbyContainer = styled(Container)`
  /* border: solid yellow; */
  position: relative;
  height: 70vh;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 0;

  ${customMedia.lessThan('large')`
    flex-direction: column;
    align-items: center;
    height: fit-content;
    padding: 0 30px;
  `}
`
export const MainImages = styled.div`
  /* border: solid yellow; */
`
export const Campfire = styled(GiCampfire)`
  font-size: 16rem;
  color: ${({ theme }) => theme.colors.Paragraph};
  display: block;

  ${customMedia.lessThan('large')`
    font-size: 12rem;
  `}
  ${customMedia.lessThan('medium')`
    font-size: 8rem;
  `}
  ${customMedia.lessThan('small')`
    font-size: 4rem;
  `}
`
export const Meat = styled(GiMeat)`
  font-size: 16rem;
  color: ${({ theme }) => theme.colors.Paragraph};
  display: block;
  margin-bottom: -50px;

  ${customMedia.lessThan('large')`
    font-size: 12rem;
  `}
  ${customMedia.lessThan('medium')`
    font-size: 8rem;
  `}
  ${customMedia.lessThan('small')`
    font-size: 4rem;
  `}
`
export const TextArea = styled.div`
  /* border: solid yellow; */
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 70%;

  ${customMedia.lessThan('large')`
    position: static;
    // border: solid yellow;
    align-items: center;
    width: 100%;
  `}
`
export const Title = styled.h1`
  /* border: solid yellow; */
  display: block;
  font-size: 6rem;
  width: fit-content;

  ${customMedia.lessThan('large')`
    font-size: 6rem;
    // border: solid yellow;
    margin: 30px 0;
  `}

  ${customMedia.lessThan('medium')`
    font-size: 10vw;
    // border: solid yellow;
    margin: 30px 0;
  `}
`
export const Description = styled.div`
  /* border: solid purple; */
  margin-left: 50px;
  color: ${({ theme }) => theme.colors.Paragraph};
  font-size: 1.5rem;
  line-height: 2.5rem;
  width: 100%;
`
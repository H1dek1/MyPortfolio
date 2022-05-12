import styled from "styled-components";
import { FaSnowboarding } from 'react-icons/fa'
import { Wrapper, Container } from "../../GlobalStyles";
import { customMedia } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - 60px);
  background-color: ${({ isOdd, theme }) => (isOdd ? theme.colors.SubBackground : theme.colors.Background)};
`
export const HobbyContainer = styled(Container)`
  /* border: solid yellow; */
  position: relative;
  height: 70vh;
  display: flex;
  align-items: end;
  padding: 0;

  ${customMedia.lessThan('large')`
    flex-direction: column;
    align-items: center;
    height: fit-content;
  `}
`
export const MainImages = styled.div`
  /* border: solid yellow; */
`
export const Image = styled(FaSnowboarding)`
  font-size: 26rem;
  color: ${({ theme }) => theme.colors.Paragraph};
  display: block;

  ${customMedia.lessThan('large')`
    font-size: 20rem;
  `}
  ${customMedia.lessThan('medium')`
    font-size: 16rem;
  `}
  ${customMedia.lessThan('small')`
    font-size: 12rem;
  `}
`
export const TextArea = styled.div`
  /* border: solid yellow; */
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;

  ${customMedia.lessThan('large')`
    position: static;
    border: solid yellow;
    align-items: center;
  `}
`
export const Title = styled.h1`
  /* border: solid yellow; */
  display: block;
  font-size: 6rem;
  width: fit-content;

  ${customMedia.lessThan('large')`
    font-size: 2rem;
    border: solid yellow;
  `}
`
export const Description = styled.div`
  /* border: solid purple; */
  color: ${({ theme }) => theme.colors.Paragraph};
  font-size: 1.5rem;
  line-height: 2.5rem;
`
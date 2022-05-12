import styled from "styled-components";
import { Container, Wrapper } from "../../GlobalStyles";
import { GiSloth } from 'react-icons/gi'

export const SectionWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.Background};
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - 60px);
`
export const TopContainer = styled(Container)`
  /* border: solid yellow; */
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0;
`
export const MainIcon = styled.div`
  /* border: solid yellow; */
  color: ${({ theme }) => theme.colors.Headline};
  margin-right: 20px;
  display: none;
`
export const IconText = styled(GiSloth)`
  color: ${({ theme }) => theme.colors.Paragraph};
  display: block;
  font-size: 10rem;
`
export const TextArea = styled.div`
  /* border: solid yellow; */
  width: fit-content;
  display: flex;
  flex-direction: column;
  /* margin-left: 100px; */
`
export const SubMessage = styled.div`
  /* border: solid yellow; */
  width: fit-content;
  color: ${({ theme }) => theme.colors.Paragraph};
  font-size: 1.3rem;
  line-height: 4rem;
`
export const MainMessage = styled.div`
  /* border: solid yellow; */
  margin-top: 20px;
  width: fit-content;
  color: ${({ theme }) => theme.colors.Headline};
  font-size: 2.5rem;
  line-height: 4rem;
`
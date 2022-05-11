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
  border: solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainIcon = styled.div`
  border: solid yellow;
  color: ${({ theme }) => theme.colors.Headline};
  margin-right: 20px;
`
export const IconText = styled(GiSloth)`
  color: ${({ theme }) => theme.colors.Paragraph};
  display: block;
  font-size: 20rem;
`
export const TextArea = styled.div`
  border: solid yellow;
  width: 650px;
`
export const SubMessage = styled.div`
  border: solid yellow;
  margin-top: 50px;
  width: 100%;
  color: ${({ theme }) => theme.colors.Paragraph};
  font-size: 1.3rem;
`
export const MainMessage = styled.div`
  border: solid yellow;
  margin-top: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.Headline};
  font-size: 1.5rem;
`
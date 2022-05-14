import styled from "styled-components";
import { Container, Wrapper } from "../../GlobalStyles";
import { customMedia } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.SubBackground};
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - ${({ theme }) => theme.heights.Header});

  ${customMedia.lessThan('large')`
    height: fit-content;
    min-height: calc(100vh - 60px);
    padding: 30px 0;
  `}
`
export const TopContainer = styled(Container)`
  /* border: solid yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  ${customMedia.lessThan('large')`
    height: fit-content;
    padding: 30px;
  `}
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
import styled from "styled-components";
import { Wrapper, Container } from "../../GlobalStyles";

export const SectionWrapper = styled(Wrapper)`
  border: solid yellow;
  background-color: ${({ theme }) => theme.colors.Background};
  width: 100%;
  padding: 160px 0;
  height: calc(100vh - ${({ theme }) => theme.heights.Header});
`
export const TopContainer = styled(Container)`
  border: solid yellow;
`
export const TopMessage = styled.h2`
  display: block;
  border: solid yellow;
`
export const Methods = styled.div`
  border: solid yellow;
`
export const Implementation = styled.div`
  border: solid yellow;
`
export const Title = styled.h3`
  border: solid yellow;
  display: block;
`
export const Content = styled.div`
  border: solid yellow;
`